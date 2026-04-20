/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — ui.js
   UIManager: all DOM rendering and overlay management
   ═══════════════════════════════════════════════════════════ */

const UIManager = (() => {
  const ERA_IDS = ['highways', 'refineries', 'waste', 'datacenters'];
  const ERA_SHORT = { highways: 'hw', refineries: 'rf', waste: 'ws', datacenters: 'dc' };

  // ── Boot ──────────────────────────────────────────────────

  function init() {
    showCountrySelect();
  }

  // ── Country selection ─────────────────────────────────────

  function showCountrySelect() {
    const overlay = document.getElementById('country-overlay');
    const codes   = ['us', 'uk', 'za'];

    const cardsHTML = codes.map(code => {
      const cfg  = COUNTRY_CONFIG[code];
      const best = GameEngine.getBestScore(code);
      const bestLine = best > 0
        ? `<div class="country-best-score">Best: <span>${best} pts</span></div>`
        : '';
      const pills = [
        `${cfg.waves} wave${cfg.waves > 1 ? 's' : ''}`,
        `${cfg.communities} communities`,
        `${cfg.patterns} patterns`
      ].map(t => `<span class="country-meta-pill">${t}</span>`).join('');

      return `
        <div class="country-card" onclick="GameEngine.selectCountry('${code}')">
          <div class="country-card-flag">${cfg.flag}</div>
          <div class="country-card-name">${cfg.name}</div>
          <div class="country-card-tagline">${cfg.tagline}</div>
          <div class="country-card-meta">${pills}</div>
          ${bestLine}
        </div>`;
    }).join('');

    overlay.innerHTML = `
      <div class="country-select-inner">
        <div class="country-select-eyebrow">An Investigation · Environmental Justice</div>
        <div class="country-select-title">The Pattern <span>Repeats</span></div>
        <div class="country-select-subtitle">
          Industrial harm follows the same communities across generations.<br>
          Choose a country to begin your investigation.
        </div>
        <div class="country-cards-grid">${cardsHTML}</div>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  // ── Show intro for selected country ──────────────────────

  function showIntro(code) {
    const cfg     = COUNTRY_CONFIG[code];
    const introEl = document.getElementById('intro-overlay');
    // Update dynamic intro stats
    introEl.querySelector('.intro-stats').innerHTML = `
      <div><span>${cfg.communities}</span> communities to document</div>
      <div><span>${cfg.patterns}</span> patterns to uncover</div>
      <div><span>${cfg.waves}</span> industrial waves</div>`;
    // Update body text for non-US countries
    const bodyEl = introEl.querySelector('.intro-body');
    if (bodyEl && cfg.introCopy) bodyEl.textContent = cfg.introCopy;
    // Re-wire begin button and show
    introEl.querySelector('#begin-btn').onclick = () => GameEngine.startGame();
    introEl.removeAttribute('hidden');
  }

  // ── Score bump animation ──────────────────────────────────

  function bumpScore() {
    const el = document.getElementById('score-counter');
    if (!el) return;
    el.classList.remove('bump');
    // force reflow
    void el.offsetWidth;
    el.classList.add('bump');
  }

  // ── Intro / Game visibility ───────────────────────────────

  function showGame() {
    document.getElementById('intro-overlay').setAttribute('hidden', '');
    const gameEl = document.getElementById('game');
    gameEl.style.display = '';      // clear any inline display:none from returnToCountrySelect
    gameEl.removeAttribute('hidden');
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
    const keyClass  = community.isKeyEvidence ? ' key-evidence' : '';
    const keyPrompt = community.isKeyEvidence
      ? '<div class="card-prompt" style="color:#f59e0b">⚑ Key Evidence — Click to Investigate</div>'
      : '<div class="card-prompt">Click to Investigate</div>';
    return `
      <div class="card face-down${keyClass}" id="card-${community.id}" onclick="GameEngine.investigateCommunity('${community.id}')">
        <div class="redacted-lines">
          <div class="line l1"></div>
          <div class="line l2"></div>
          <div class="line l3"></div>
        </div>
        <div class="card-identity">
          <div class="card-name">${community.name}</div>
          <div class="card-city">${community.city}</div>
        </div>
        ${keyPrompt}
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
          ${community.isKeyEvidence ? '<span class="stamp-key-evidence">⚑ Key Evidence</span>' : ''}
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
    return ERAS.map(era =>
      `<div class="era-dot${litEras.includes(era.id) ? ' on' : ''}" data-era="${era.id}" title="${era.id}" style="${litEras.includes(era.id) ? `background:${era.color}` : ''}"></div>`
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
    const cfg = COUNTRY_CONFIG[state.country] || COUNTRY_CONFIG.us;

    document.getElementById('doc-counter').textContent =
      `${state.investigatedIds.size} / ${cfg.communities} documented`;

    const connEl = document.getElementById('conn-counter');
    connEl.textContent = `${state.discoveredConnections.size} / ${cfg.patterns} patterns found`;
    connEl.classList.toggle('active', state.discoveredConnections.size > 0);

    const quizEl = document.getElementById('quiz-counter');
    const answered = state.quiz.totalAnswered;
    const correct  = state.quiz.totalScore;
    const totalQ   = ERAS.reduce((n, e) => n + (QUIZZES[e.id] ? QUIZZES[e.id].length : 0), 0);
    quizEl.textContent = `Quiz: ${correct} / ${answered > 0 ? answered : totalQ}`;
    quizEl.classList.toggle('has-score', answered > 0);

    const scoreEl = document.getElementById('score-counter');
    if (scoreEl) scoreEl.textContent = `${state.score} pts`;
  }

  // ── Connection found overlay ──────────────────────────────

  function showConnectionFound(community, prevCommunity, prevEra, count, state) {
    const isClimax = count >= 4;
    const currentEra = ERAS[state.currentEraIndex];
    const rc = RECURRING_COMMUNITIES.find(r => r.key === community.communityKey);

    const waveCount = ERAS.length;
    const labelText = isClimax
      ? `${waveCount} WAVES. ONE COMMUNITY.`
      : count === 3
        ? 'SAME COMMUNITY. AGAIN.'
        : '↺ RECURRING COMMUNITY DETECTED';

    const bodyText = isClimax
      ? `${community.name} has now been targeted across all ${waveCount} industrial waves. The same place. Across generations. This is not coincidence. This is a system.`
      : `This community first appeared in <strong>${prevEra.title}</strong> (${prevEra.years}). It is being targeted again in the <strong>${currentEra.title}</strong>.`;

    const trailDots = ERAS.map(era => {
      const on = rc && rc.eras.includes(era.id);
      return `<div class="conn-era-pip${on ? ' on' : ''}" data-era="${era.id}" title="${era.id}" style="${on ? `background:${era.color};border-color:${era.color}` : ''}"></div>`;
    }).join('');

    MapManager.setZoomVisible(false);
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

    MapManager.setZoomVisible(false);
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
          <div>Total patterns identified: ${state.discoveredConnections.size} / ${RECURRING_COMMUNITIES.length}</div>
        </div>
        <button class="ec-advance" onclick="GameEngine.advanceEra()">${advanceLabel}</button>
      </div>`;
    overlay.removeAttribute('hidden');
  }

  // ── Final reveal overlay ──────────────────────────────────

  function showFinalReveal(state, rating, winMet, bestScore) {
    const overlay = document.getElementById('final-overlay');
    const cfg     = COUNTRY_CONFIG[state.country] || COUNTRY_CONFIG.us;

    // Build pattern matrix rows (dynamic — works for any country)
    const activeEraIds = ERAS.map(e => e.id);
    const matrixRows = RECURRING_COMMUNITIES.map(rc => {
      const cells = activeEraIds.map(eraId => {
        const present = rc.eras.includes(eraId);
        return `<td><span class="matrix-dot ${present ? 'present' : 'absent'}" style="${present ? 'background:var(--gold);opacity:0.85' : ''}"></span></td>`;
      }).join('');
      return `<tr>
        <td><strong>${rc.name}</strong><br><small style="color:var(--muted);font-weight:normal;font-size:0.72rem">${rc.summary}</small></td>
        ${cells}
      </tr>`;
    }).join('');

    const winBlock = `
      <div class="win-condition-block${winMet ? '' : ' not-met'}">
        <div class="win-condition-title">${winMet ? '✓ ' : ''}${cfg.winTitle}</div>
        <div class="win-condition-desc">${cfg.winDesc}</div>
      </div>`;

    const bestLine = bestScore > state.score
      ? `<div class="score-summary-line">Best score: <strong>${bestScore} pts</strong> &nbsp;·&nbsp; This run: ${state.score} pts</div>`
      : `<div class="score-summary-line">Score: <strong>${state.score} pts</strong>${bestScore === state.score && bestScore > 0 ? ' &nbsp;·&nbsp; <span style="color:var(--gold)">New best!</span>' : ''}</div>`;

    overlay.innerHTML = `
      <div class="final-inner">
        <div class="final-title">The Investigation is Complete</div>
        <div class="final-subtitle">
          You documented ${state.investigatedIds.size} ${state.investigatedIds.size === 1 ? 'community' : 'communities'} across ${ERAS.length} industrial ${ERAS.length === 1 ? 'wave' : 'waves'}.<br>
          You found ${state.discoveredConnections.size} recurring ${state.discoveredConnections.size === 1 ? 'pattern' : 'patterns'}.
        </div>

        ${winBlock}

        <div class="journalist-rating-block">
          <div class="rating-label">Journalist Rating</div>
          <div class="rating-title">${rating ? rating.title : '—'}</div>
          <div class="rating-desc">${rating ? rating.desc : ''}</div>
        </div>

        ${bestLine}

        <div style="overflow-x:auto;margin-bottom:32px">
          <table class="pattern-matrix">
            <thead>
              <tr>
                <th>Community</th>
                ${ERAS.map(e => `<th style="color:${e.color}">${e.title}<br><small>${e.years}</small></th>`).join('')}
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
        <br>
        <button class="final-country-btn" onclick="GameEngine.returnToCountrySelect()">↩ Investigate Another Country</button>
      </div>`;
    MapManager.setZoomVisible(false);
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

    MapManager.setZoomVisible(false);
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
    showCountrySelect,
    showIntro,
    bumpScore,
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
