/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — game.js
   GameEngine: state machine, progression logic
   Loaded last — coordinates MapManager and UIManager
   ═══════════════════════════════════════════════════════════ */

const GameEngine = (() => {

  // ── State ─────────────────────────────────────────────────

  const state = {
    currentEraIndex:      0,
    investigatedIds:      new Set(),   // community IDs already investigated
    discoveredConnections: new Set(),  // communityKey strings found in >1 era
    firstAppearance:      {},          // communityKey → eraId of first encounter
    communityKeyCount:    {},          // communityKey → # times encountered
    eraUnlocked:          [true, false, false, false],
    awaitingAck:          false,       // block new investigations while overlay is open
    phase:                'intro',     // 'intro' | 'playing' | 'complete'
    quiz: {
      active:        false,
      eraId:         null,
      questions:     [],
      currentIndex:  0,
      score:         0,             // correct answers in current quiz
      totalScore:    0,             // cumulative correct across all quizzes
      totalAnswered: 0,             // cumulative questions answered
      answered:      false          // whether current question has been answered
    }
  };

  // ── Entry point ───────────────────────────────────────────

  function startGame() {
    state.phase = 'playing';
    UIManager.showGame();
    MapManager.init('map');
    _renderCurrentEra();
  }

  // ── Era rendering ─────────────────────────────────────────

  function _renderCurrentEra() {
    const era = ERAS[state.currentEraIndex];
    UIManager.renderEra(era, state);
    MapManager.loadEra(era, state.investigatedIds);
    UIManager.updateProgress(state);
  }

  // ── Core action: investigate a community ──────────────────

  function investigateCommunity(communityId) {
    // Guard: already done, or blocked by an open overlay
    if (state.investigatedIds.has(communityId) || state.awaitingAck) return;

    const eraData   = ERAS[state.currentEraIndex];
    const community = eraData.communities.find(c => c.id === communityId);
    if (!community) return;

    // Record and animate
    state.investigatedIds.add(communityId);
    UIManager.flipCard(communityId, community, eraData);
    MapManager.revealMarker(communityId, eraData);
    UIManager.updateProgress(state);

    // ── Recurring community check ──────────────────────────
    if (community.communityKey) {
      const key   = community.communityKey;
      const count = (state.communityKeyCount[key] || 0) + 1;
      state.communityKeyCount[key] = count;

      if (count === 1) {
        // First appearance — record it, nothing special to show
        state.firstAppearance[key] = eraData.id;

      } else {
        // Recurring! Show discovery overlay
        state.discoveredConnections.add(key);

        const prevEraId    = state.firstAppearance[key];
        const prevEra      = ERAS.find(e => e.id === prevEraId);
        const prevCommunity = prevEra
          ? prevEra.communities.find(c => c.communityKey === key)
          : null;

        // Draw connection line on map
        if (prevCommunity) {
          MapManager.drawConnectionLine(
            [prevCommunity.lat, prevCommunity.lon],
            [community.lat, community.lon],
            eraData.color
          );
        }

        // Show overlay (blocks further investigation until acknowledged)
        state.awaitingAck = true;
        UIManager.showConnectionFound(community, prevCommunity, prevEra, count, state);
        return; // era-complete check happens in acknowledgeConnection()
      }
    }

    _checkEraCompletion();
  }

  // ── Acknowledge the connection overlay ───────────────────

  function acknowledgeConnection() {
    state.awaitingAck = false;
    UIManager.hideOverlay('connection-overlay');
    _checkEraCompletion();
  }

  // ── Era completion check ──────────────────────────────────

  function _checkEraCompletion() {
    const era      = ERAS[state.currentEraIndex];
    const allDone  = era.communities.every(c => state.investigatedIds.has(c.id));
    if (!allDone) return;

    const isLast = state.currentEraIndex === ERAS.length - 1;

    setTimeout(() => {
      UIManager.showEraComplete(era, state, isLast);
    }, 700);
  }

  // ── Advance button → start quiz first ────────────────────

  function advanceEra() {
    UIManager.hideOverlay('era-complete-overlay');
    startQuiz();
  }

  // ── Quiz: start ───────────────────────────────────────────

  function startQuiz() {
    const era = ERAS[state.currentEraIndex];
    const questions = QUIZZES[era.id];
    if (!questions || questions.length === 0) {
      _doAdvance(); // no quiz for this era, just advance
      return;
    }

    state.quiz.active       = true;
    state.quiz.eraId        = era.id;
    state.quiz.questions    = questions;
    state.quiz.currentIndex = 0;
    state.quiz.score        = 0;
    state.quiz.answered     = false;

    UIManager.showQuiz(state);
  }

  // ── Quiz: player selects an answer ───────────────────────

  function answerQuestion(selectedIndex) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;

    const q       = state.quiz.questions[state.quiz.currentIndex];
    const correct = selectedIndex === q.correct;

    if (correct) {
      state.quiz.score++;
      state.quiz.totalScore++;
    }
    state.quiz.totalAnswered++;

    UIManager.revealQuizAnswer(selectedIndex, q.correct, q.explanation, correct, state);
    UIManager.updateProgress(state);
  }

  // ── Quiz: move to next question or finish ─────────────────

  function nextQuestion() {
    state.quiz.currentIndex++;
    state.quiz.answered = false;

    if (state.quiz.currentIndex < state.quiz.questions.length) {
      UIManager.showQuiz(state);
    } else {
      // Quiz complete — advance the era
      state.quiz.active = false;
      UIManager.hideOverlay('quiz-overlay');
      _doAdvance();
    }
  }

  // ── Actual era advancement ────────────────────────────────

  function _doAdvance() {
    const isLast = state.currentEraIndex === ERAS.length - 1;
    if (isLast) {
      state.phase = 'complete';
      UIManager.showFinalReveal(state);
      MapManager.showAllConnections();
    } else {
      state.currentEraIndex++;
      state.eraUnlocked[state.currentEraIndex] = true;
      _renderCurrentEra();
    }
  }

  // ── Switch to a different era tab ─────────────────────────

  function switchEra(index) {
    if (!state.eraUnlocked[index]) return;
    if (state.awaitingAck) return;
    if (index === state.currentEraIndex) return;

    state.currentEraIndex = index;
    _renderCurrentEra();
  }

  // ── Public API ────────────────────────────────────────────

  return {
    startGame,
    investigateCommunity,
    acknowledgeConnection,
    advanceEra,
    startQuiz,
    answerQuestion,
    nextQuestion,
    switchEra,
    getState: () => state
  };

})();

// ── Boot on DOM ready ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => UIManager.init());
