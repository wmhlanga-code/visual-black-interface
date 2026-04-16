/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — ui.js
   UIManager: all DOM rendering and overlay management
   ═══════════════════════════════════════════════════════════ */

const UIManager = (() => {
  const ERA_IDS = ['highways', 'refineries', 'waste', 'datacenters'];
  const ERA_SHORT = { highways: 'hw', refineries: 'rf', waste: 'ws', datacenters: 'dc' };

  // ── Boot ──────────────────────────────────────────────────

  function init() {
    document.getElementById('begin-btn').addEventListener('click', () => GameEngine.startGame());
  }

  // ── Intro / Game visibility ───────────────────────────────

  function showGame() {
    document.getElementById('intro-overlay').style.display = 'none';
    document.getElementById('game').removeAttribute('hidden');
  }

  // ── Era rendering ─────────────────────────────────────────

  function renderEra(eraData, state) {
    _renderNav(state);
    _renderDescBar(eraData);
    _renderCards(eraData, state);
  }

  function _renderNav(state) {
    const nav = document.getElementById('era-nav');
    nav.innerHTML = ERAS.map((era, i) => {
      const unlocked = state.eraUnlocked[i];
      const active   = i === state.currentEraIndex;
      return `
        <button
          class="era-tab${active ? ' active' : ''}"
          data-era="${era.id}"
          ${unlocked ? '' : 'data-locked="true"'}
          onclick="GameEngine.switchEra(${i})"
        >
          <span class="tab-wave" style="color:${era.color}">${era.wave}</span>
          <span class="tab-title">${era.title}</span>
          <span class="tab-years">${era.years}</span>
          ${unlocked ? '' : '<span class="tab-lock">🔒</span>'}
        </button>`;
    }).join('');
  }

  function _renderDescBar(eraData) {
    document.getElementById('era-desc-bar').innerHTML =
      `<span>${eraData.description}</span>
       <div class="era-hint">▸ ${eraData.hint}</div>`;
  }

  function _renderCards(eraData, state) {
    const panel = document.getElementById('cards-panel');
    panel.innerHTML = eraData.communities.map(c => {
      const investigated = state.investigatedIds.has(c.id);
      return investigated ? _faceUpHTML(c, eraData) : _faceDownHTML(c);
    }).join('');
  }

  // ── Card HTML ─────────────────────────────────────────────

  function _faceDownHTML(community) {
    return `
      <div class="card face-down" id="card-${community.id}" onclick="GameEngine.investigateCommunity('${community.id}')">
        <div class="redacted-lines">
          <div class="line l1"></div>
          <div class="line l2"></div>
          <div class="line l3"></div>
        </div>
        <div class="card-identity">
          <div class="card-name">${community.name}</div>
          <div class="card-city">${community.city}</div>
        </div>
        <div class="card-prompt">Click to Investigate</div>
      </div>`;
  }

  function _faceUpHTML(community, eraData) {
    const isRecurring = Boolean(community.communityKey);
    const dots = _buildEraDots(community, eraData.id);
    return `
      <div class="card investigated${isRecurring ? ' recurring' : ''}" id="card-${community.id}">
        <div class="card-stamps">
          <span class="stamp-documented">Documented</span>
          ${isRecurring ? '<span class="stamp-recurring">↺ Recurring</span>' : ''}
        </div>
        <div class="card-name">${community.name}</div>
        <div class="card-city">${community.city}</div>
        <blockquote class="card-fact">${community.fact}</blockquote>
        <p class="card-impact">${community.impact}</p>
        <div class="card-footer">
          <span class="card-demo">${community.demo}</span>
          <div class="era-dots">${dots}</div>
        </div>
      </div>`;
  }

  function _buildEraDots(community, currentEraId) {
    let litEras = [currentEraId];
    if (community.communityKey) {
      const rc = RECURRING_COMMUNITIES.find(r => r.key === community.communityKey);
      if (rc) litEras = rc.eras;
    }
    return ERA_IDS.map(eraId =>
      `<div class="era-dot${litEras.includes(eraId) ? ' on' : ''}" data-era="${eraId}" title="${eraId}"></div>`
    ).join('');
  }

  // ── Card flip animation ───────────────────────────────────

  function flipCard(communityId, community, eraData) {
    const card = document.getElementById('card-' + communityId);
    if (!card) return;

    // Phase 1: fold away (scaleX → 0)
    card.style.transition = 'transform 0.22s ease-in';
    card.style.transform  = 'scaleX(0)';

    setTimeout(() => {
      // Swap content mid-flip
      card.outerHTML; // force reflow hint
      const parent = document.getElementById('cards-panel');
      const existing = document.getElementById('card-' + communityId);
      if (!existing) return;

      // Replace with investigated card HTML (temporary, without the wrapper)
      const temp = document.createElement('div');
      temp.innerHTML = _faceUpHTML(community, eraData);
      const newCard = temp.firstElementChild;

      // Keep transform state to animate back
      newCard.style.transform  = 'scaleX(0)';
      newCard.style.transition = 'none';
      existing.replaceWith(newCard);

      // Phase 2: unfold (scaleX → 1)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          newCard.style.transition = 'transform 0.22s ease-out';
          newCard.style.transform  = 'scaleX(1)';
        });
      });

      // Clean up inline styles after animation
      setTimeout(() => {
        newCard.style.transition = '';
        newCard.style.transform  = '';
      }, 260);

    }, 220);
  }

  // ── Progress counters ─────────────────────────────────────

  function updateProgress(state) {
    document.getElementById('doc-counter').textContent =
      `${state.investigatedIds.size} / 20 documented`;

    const connEl = document.getElementById('conn-counter');
    connEl.textContent = `${state.discoveredConnections.size} / 6 patterns found`;
    connEl.classList.toggle('active', state.discoveredConnections.size > 0);

    const quizEl = document.getElementById('quiz-counter');
    const answered = state.quiz.totalAnswered;
    const correct  = state.quiz.totalScore;
    quizEl.textContent = `Quiz: ${correct} / ${answered > 0 ? answered : 8}`;
    quizEl.classList.toggle('has-score', answered > 0);
  }

  // ── Connection found overlay ──────────────────────────────

  function showConnectionFound(community, prevCommunity, prevEra, count, state) {
    const isClimax = count >= 4;
    const currentEra = ERAS[state.currentEraIndex];
    const rc = RECURRING_COMMUNITIES.find(r => r.key === community.communityKey);

    const labelText = isClimax
      ? 'FOUR WAVES. ONE COMMUNITY.'
      : count === 3
        ? 'SAME COMMUNITY. AGAIN.'
        : '↺ RECURRING COMMUNITY DETECTED';

    const bodyText = isClimax
      ? `South Memphis has now been targeted by all four industrial waves — highway, refinery, waste site, and data center. The same ZIP codes. Across 60 years. This is not coincidence. This is a system.`
      : `This community first appeared in <strong>${prevEra.title}</strong> (${prevEra.years}). It is being targeted again in the <strong>${currentEra.title}</strong>.`;

    const trailDots = ERA_IDS.map(eraId => {
      const on = rc && rc.eras.includes(eraId);
      return `<div class="conn-era-pip${on ? ' on' : ''}" data-era="${eraId}" title="${eraId}"></div>`;
    }).join('');

    const overlay = document.getElementById('connection-overlay');
    overlay.innerHTML = `
      <div class="conn-panel${isClimax ? ' climax' : ''}">
        <div class="conn-icon">${isClimax ? '⚠' : '↺'}</div>
        <div class="conn-label">${labelText}</div>
        <div class="conn-name">${community.name}</div>
        <div class="conn-city">${community.city}</div>
        <p class="conn-text">${bodyText}</p>
        <div class="conn-era-trail">${trailDots}</div>
        <button class="conn-ack" onclick="GameEngine.acknowledgeConnection()">Acknowledge</button>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  // ── Era complete overlay ──────────────────────────────────

  function showEraComplete(era, state, isLast) {
    const eraIndex = ERAS.indexOf(era);
    const nextEra  = !isLast ? ERAS[eraIndex + 1] : null;

    // Count connections found in this era
    let eraConnCount = 0;
    era.communities.forEach(c => {
      if (c.communityKey && state.discoveredConnections.has(c.communityKey)) {
        // check it was discovered in this era (i.e. it was the 2nd+ appearance)
        const firstEraId = state.firstAppearance[c.communityKey];
        if (firstEraId && firstEraId !== era.id) eraConnCount++;
      }
    });

    const advanceLabel = isLast
      ? 'Take Final Quiz →'
      : `Take Quiz to Continue →`;

    const overlay = document.getElementById('era-complete-overlay');
    overlay.innerHTML = `
      <div class="era-complete-panel">
        <div class="ec-wave">${era.wave} — Complete</div>
        <div class="ec-title">${era.title}</div>
        <div class="ec-status">Investigation Complete</div>
        <div class="ec-stats">
          ${eraConnCount > 0
            ? `<div>${eraConnCount} recurring ${eraConnCount === 1 ? 'community' : 'communities'} identified in this era</div>`
            : '<div>No recurring communities in this era</div>'}
          <div>Total patterns identified: ${state.discoveredConnections.size} / 6</div>
        </div>
        <button class="ec-advance" onclick="GameEngine.advanceEra()">${advanceLabel}</button>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  // ── Final reveal overlay ──────────────────────────────────

  function showFinalReveal(state) {
    const overlay = document.getElementById('final-overlay');

    // Build pattern matrix rows
    const matrixRows = RECURRING_COMMUNITIES.map(rc => {
      const cells = ERA_IDS.map(eraId => {
        const present = rc.eras.includes(eraId);
        const cls = ERA_SHORT[eraId];
        return `<td><span class="matrix-dot ${cls} ${present ? 'present' : 'absent'}"></span></td>`;
      }).join('');
      return `<tr>
        <td><strong>${rc.name}</strong><br><small style="color:var(--muted);font-weight:normal;font-size:0.72rem">${rc.summary}</small></td>
        ${cells}
      </tr>`;
    }).join('');

    overlay.innerHTML = `
      <div class="final-inner">
        <div class="final-title">The Investigation is Complete</div>
        <div class="final-subtitle">
          You documented ${state.investigatedIds.size} communities across four industrial waves.<br>
          You found ${state.discoveredConnections.size} recurring patterns.
        </div>
        <div style="overflow-x:auto;margin-bottom:32px">
          <table class="pattern-matrix">
            <thead>
              <tr>
                <th>Community</th>
                <th style="color:var(--c-hw)">Highways<br><small>1950s–60s</small></th>
                <th style="color:var(--c-rf)">Refineries<br><small>1970s–80s</small></th>
                <th style="color:var(--c-ws)">Waste Sites<br><small>1990s</small></th>
                <th style="color:var(--c-dc)">Data Centers<br><small>2010s–Now</small></th>
              </tr>
            </thead>
            <tbody>${matrixRows}</tbody>
          </table>
        </div>
        <p class="final-statement">
          The same communities faced industrial burden across generations.
          This is not coincidence. This is a system.
        </p>
        <button class="final-restart" onclick="location.reload()">Investigate Again</button>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  // ── Quiz overlay ─────────────────────────────────────────

  function showQuiz(state) {
    const { questions, currentIndex, score, quiz } = state.quiz;
    const q        = questions[currentIndex];
    const era      = ERAS[state.currentEraIndex];
    const total    = questions.length;
    const letters  = ['A', 'B', 'C', 'D'];

    const optionsHTML = q.options.map((opt, i) =>
      `<button class="quiz-option" data-index="${i}" onclick="GameEngine.answerQuestion(${i})">
         <span class="opt-letter">${letters[i]}</span>
         <span>${opt}</span>
       </button>`
    ).join('');

    const overlay = document.getElementById('quiz-overlay');
    overlay.innerHTML = `
      <div class="quiz-panel">
        <div class="quiz-header">
          <span class="quiz-label" style="color:${era.color}">
            ${era.wave} · Field Examination
          </span>
          <span class="quiz-progress">Question ${currentIndex + 1} of ${total}</span>
        </div>
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options" id="quiz-options">${optionsHTML}</div>
        <div class="quiz-result-label" id="quiz-result-label"></div>
        <div class="quiz-explanation" id="quiz-explanation"></div>
        <button class="quiz-next" id="quiz-next"
          onclick="GameEngine.nextQuestion()">
          ${currentIndex + 1 < total ? 'Next Question →' : (state.currentEraIndex === ERAS.length - 1 ? 'Reveal the Pattern →' : 'Continue to Next Wave →')}
        </button>
        <div class="quiz-score-line">
          Correct so far this quiz: <span class="score-val">${score} / ${currentIndex}</span>
          &nbsp;·&nbsp; All-time: <span class="score-val">${state.quiz.totalScore} / ${state.quiz.totalAnswered}</span>
        </div>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  function revealQuizAnswer(selectedIndex, correctIndex, explanation, isCorrect, state) {
    const options   = document.querySelectorAll('.quiz-option');
    const resultEl  = document.getElementById('quiz-result-label');
    const explanEl  = document.getElementById('quiz-explanation');
    const nextBtn   = document.getElementById('quiz-next');
    const scoreEl   = document.querySelector('.quiz-score-line .score-val');

    options.forEach((btn, i) => {
      btn.disabled = true;
      if (i === selectedIndex && isCorrect)  btn.classList.add('correct');
      if (i === selectedIndex && !isCorrect) btn.classList.add('incorrect');
      if (i === correctIndex  && !isCorrect) btn.classList.add('reveal-correct');
    });

    resultEl.textContent = isCorrect ? '✓ Correct' : '✗ Incorrect';
    resultEl.className   = `quiz-result-label visible ${isCorrect ? 'right' : 'wrong'}`;

    explanEl.innerHTML   = explanation;
    explanEl.classList.add('visible');

    nextBtn.classList.add('visible');

    // Update score line
    if (scoreEl) {
      const q = state.quiz;
      scoreEl.textContent = `${q.score} / ${q.currentIndex + 1}`;
    }
  }

  // ── Overlay control ───────────────────────────────────────

  function hideOverlay(id) {
    const el = document.getElementById(id);
    if (el) el.setAttribute('hidden', '');
  }

  // ── Toast (lightweight notification) ─────────────────────

  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  // ── Public API ────────────────────────────────────────────

  return {
    init,
    showGame,
    renderEra,
    flipCard,
    updateProgress,
    showConnectionFound,
    showEraComplete,
    showFinalReveal,
    showQuiz,
    revealQuizAnswer,
    hideOverlay,
    showToast
  };
})();
