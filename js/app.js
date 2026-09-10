// ============================================================
// ENGLISHMASTER v2 - Main Application
// ============================================================

// ---- Safe DOM Helpers ----
function setElText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = (text !== undefined && text !== null) ? text : '';
}
function setElHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = (html !== undefined && html !== null) ? html : '';
}

// ---- Toast ----
function showToast(message, type = 'info', icon = '💡') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span style="font-size:20px">${icon}</span><span>${message}</span>`;
  container.appendChild(t);
  setTimeout(() => { t.style.animation='toastOut 0.3s ease forwards'; setTimeout(()=>t.remove(),300); }, 3000);
}
function showXPPopup(amount) {
  const el = document.createElement('div');
  el.className = 'xp-popup';
  el.textContent = `+${amount} XP`;
  const x = window.innerWidth/2 - 40;
  const y = window.innerHeight/2 - 60;
  el.style.cssText = `left:${x}px;top:${y}px;position:fixed;z-index:9500;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

// ---- Navigation ----
const PAGES = ['dashboard','roadmap','ai','reader','reading','writing','listening','speaking','vocabulary','grammar','shadowing','progress'];

function navigate(page) {
  PAGES.forEach(p => document.getElementById(`page-${p}`)?.classList.add('hidden'));
  const target = document.getElementById(`page-${page}`);
  if (target) { target.classList.remove('hidden'); target.classList.add('page-transition'); setTimeout(()=>target.classList.remove('page-transition'),400); }
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll(`[data-page="${page}"]`).forEach(n => n.classList.add('active'));
  closeMobileSidebar();
  history.replaceState(null, '', `#${page}`);
  initPage(page);
}
function initPage(page) {
  const map = { 
    dashboard: renderDashboard, 
    roadmap: renderRoadmap,
    ai: renderAI,
    reader: renderSmartReader,
    vocabulary: renderVocabulary, 
    grammar: () => setGrammarLevel(grammarState.level), 
    reading: renderReading, 
    listening: renderListening, 
    speaking: renderSpeaking, 
    writing: renderWriting, 
    shadowing: renderShadowing, 
    progress: renderProgress 
  };
  map[page]?.();
}

// ---- Mobile Sidebar ----
function openMobileSidebar() {
  document.getElementById('sidebar')?.classList.add('mobile-open');
  document.getElementById('sidebar-overlay')?.classList.add('active');
}
function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('mobile-open');
  document.getElementById('sidebar-overlay')?.classList.remove('active');
}

// ---- Sidebar Update ----
function updateSidebar() {
  const profile = getProfile();
  const { progress, nextLevel, nextMin, currentMin } = getLevelXP(profile);
  const hearts = getHearts();

  document.getElementById('sidebar-username')?.textContent && (document.getElementById('sidebar-username').textContent = profile.name);
  document.getElementById('sidebar-level')?.textContent && (document.getElementById('sidebar-level').textContent = profile.level);
  document.getElementById('sidebar-streak')?.textContent && (document.getElementById('sidebar-streak').textContent = profile.streak);
  document.getElementById('sidebar-xp-current')?.textContent && (document.getElementById('sidebar-xp-current').textContent = profile.xp);
  document.getElementById('sidebar-xp-fill')?.style && (document.getElementById('sidebar-xp-fill').style.width = `${progress}%`);
  document.getElementById('sidebar-xp-next')?.textContent && (document.getElementById('sidebar-xp-next').textContent = nextLevel ? `${nextMin - profile.xp} XP to ${nextLevel}` : '🏆 Max Level!');
  const avatarEl = document.getElementById('user-avatar-letter');
  if (avatarEl) avatarEl.textContent = profile.name.charAt(0).toUpperCase();

  // Hearts
  const heartsEl = document.getElementById('hearts-display');
  if (heartsEl) {
    heartsEl.innerHTML = Array.from({length:5},(_,i)=>`<span class="heart">${i<hearts.count?'❤️':'🖤'}</span>`).join('');
  }
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const profile = getProfile();
  const sp = getSkillProgress();

  document.getElementById('dash-welcome')?.textContent && (document.getElementById('dash-welcome').textContent = `Hello, ${profile.name}! 👋`);
  const levelBadge = document.getElementById('dash-level-badge');
  if (levelBadge) { levelBadge.textContent = profile.level; levelBadge.className = `level-badge level-${profile.level}`; }

  // Stats
  document.getElementById('dash-xp')?.textContent && (document.getElementById('dash-xp').textContent = profile.xp);
  document.getElementById('dash-streak')?.textContent && (document.getElementById('dash-streak').textContent = profile.streak);
  document.getElementById('dash-level')?.textContent && (document.getElementById('dash-level').textContent = profile.level);
  document.getElementById('dash-vocab')?.textContent && (document.getElementById('dash-vocab').textContent = sp.vocabulary.mastered.length);

  // Skill bars
  const skills = [
    ['reading','#6366F1','#818CF8'], ['listening','#06B6D4','#67E8F9'],
    ['speaking','#F59E0B','#FCD34D'], ['grammar','#10B981','#34D399'],
  ];
  skills.forEach(([s, c1, c2]) => {
    const score = getSkillScore(s);
    const scoreEl = document.getElementById(`dash-${s}-score`);
    const fillEl = document.getElementById(`dash-${s}-fill`);
    if (scoreEl) scoreEl.textContent = `${score}%`;
    if (fillEl) { fillEl.style.width = `${score}%`; fillEl.style.background = `linear-gradient(90deg,${c1},${c2})`; }
  });
  updateSidebar();
}

// ============================================================
// READING (Fixed!)
// ============================================================
const readingState = { currentId: null, qIdx: 0, score: 0, answered: false };

function renderReading() {
  readingState.currentId = null;
  document.getElementById('reading-list')?.classList.remove('hidden');
  document.getElementById('reading-exercise')?.classList.add('hidden');

  const filter = document.getElementById('reading-level-filter')?.value || 'all';
  const sp = getSkillProgress();
  const container = document.getElementById('reading-cards');
  if (!container) return;

  // Check if READING_DATA exists
  if (typeof READING_DATA === 'undefined') {
    container.innerHTML = `<div class="card" style="text-align:center;padding:40px;grid-column:1/-1;"><div style="font-size:48px;margin-bottom:16px;">⚠️</div><div style="color:var(--text-muted);">Reading data not loaded.<br>Check data/reading.js file.</div></div>`;
    return;
  }

  const items = filter === 'all' ? READING_DATA : READING_DATA.filter(r => r.level === filter);
  if (!items.length) { container.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted);grid-column:1/-1;">No passages for this level yet.</div>`; return; }

  container.innerHTML = items.map(r => {
    const done = sp.reading.completed.includes(r.id);
    return `
      <div class="content-card ${done?'completed':''}" onclick="openReading(${r.id})">
        ${done?'<div class="completed-check">✅</div>':''}
        <div class="card-tag-row">
          <span class="level-badge level-${r.level}">${r.level}</span>
          <span class="content-meta-tag">${r.topic||'General'}</span>
        </div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">${r.content.slice(0,100)}...</div>
        <div class="card-meta">
          <span>📖 ${r.wordCount||'~'} words</span>
          <span>⏱️ ${r.readTime||'~'} min</span>
          <span>❓ ${r.questions?.length||0} questions</span>
        </div>
      </div>`;
  }).join('');
}

function openReading(id) {
  const passage = READING_DATA.find(r => r.id === id);
  if (!passage) return;
  readingState.currentId = id;
  readingState.qIdx = 0;
  readingState.score = 0;
  readingState.answered = false;

  document.getElementById('reading-list')?.classList.add('hidden');
  document.getElementById('reading-exercise')?.classList.remove('hidden');

  const badge = document.getElementById('reading-level-badge');
  if (badge) { badge.textContent = passage.level; badge.className = `level-badge level-${passage.level}`; }
  document.getElementById('reading-title')?.textContent && (document.getElementById('reading-title').textContent = passage.title);

  // Render passage with clickable words (split by paragraph to preserve layout)
  const passageEl = document.getElementById('reading-passage');
  if (passageEl) {
    const paragraphs = passage.content.split(/\n\n+/);
    passageEl.innerHTML = paragraphs.map(para => {
      const html = para.trim().replace(/([a-zA-Z']{3,})/g, (word) =>
        `<span class="reading-word" onclick="lookupWord('${word.toLowerCase()}')">${word}</span>`
      );
      return `<p style="margin:0 0 1.2em 0;">${html}</p>`;
    }).join('');
  }

  renderReadingQuestion();
}

function renderReadingQuestion() {
  const passage = READING_DATA.find(r => r.id === readingState.currentId);
  if (!passage) return;
  const qs = passage.questions || [];
  const q = qs[readingState.qIdx];
  if (!q) { finishReading(); return; }

  const total = qs.length;
  const prog = document.getElementById('reading-q-progress');
  const counter = document.getElementById('reading-q-counter');
  if (prog) prog.style.width = `${((readingState.qIdx) / total) * 100}%`;
  if (counter) counter.textContent = `Q${readingState.qIdx+1}/${total}`;

  document.getElementById('reading-question-text')?.textContent && (document.getElementById('reading-question-text').textContent = q.question);

  const optContainer = document.getElementById('reading-options');
  if (optContainer) {
    optContainer.innerHTML = q.options.map((opt, i) =>
      `<button class="option-btn" onclick="answerReading(${i})">${opt}</button>`
    ).join('');
  }
  document.getElementById('reading-explanation')?.classList.add('hidden');
  document.getElementById('reading-next-btn')?.classList.add('hidden');
  readingState.answered = false;
}

function answerReading(idx) {
  if (readingState.answered) return;
  readingState.answered = true;
  const passage = READING_DATA.find(r => r.id === readingState.currentId);
  const q = passage.questions[readingState.qIdx];
  const btns = document.querySelectorAll('#reading-options .option-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === idx) b.classList.add('wrong');
  });

  const correct = idx === q.answer;
  if (correct) { readingState.score++; addCombo(); playSound('correct'); }
  else { loseHeart(); resetCombo(); playSound('wrong'); }

  const expEl = document.getElementById('reading-explanation');
  if (expEl && q.explanation) {
    expEl.className = 'explanation-box';
    expEl.textContent = q.explanation;
  }
  document.getElementById('reading-next-btn')?.classList.remove('hidden');
}

function readingNext() {
  readingState.qIdx++;
  const passage = READING_DATA.find(r => r.id === readingState.currentId);
  if (readingState.qIdx >= (passage?.questions?.length || 0)) finishReading();
  else renderReadingQuestion();
}

function finishReading() {
  const passage = READING_DATA.find(r => r.id === readingState.currentId);
  const total = passage?.questions?.length || 1;
  const xpEarned = recordScore('reading', readingState.score, total);
  const sp = getSkillProgress();
  if (!sp.reading.completed.includes(readingState.currentId)) {
    sp.reading.completed.push(readingState.currentId);
    saveSkillProgress(sp);
  }
  checkAndAwardBadges();
  updateSidebar();

  const qArea = document.getElementById('reading-q-area');
  if (qArea) {
    const pct = Math.round((readingState.score / total) * 100);
    qArea.innerHTML = `
      <div style="text-align:center;padding:32px 0;">
        <div style="font-size:56px;margin-bottom:12px;">${pct >= 80?'🎉':pct>=50?'👍':'📚'}</div>
        <div style="font-family:var(--font-display);font-size:48px;font-weight:900;background:linear-gradient(135deg,var(--primary-light),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${pct}%</div>
        <div style="color:var(--text-muted);margin:8px 0 24px;">${readingState.score}/${total} correct</div>
        <div style="margin-bottom:24px;">
          <span style="background:rgba(124,58,237,0.15);color:var(--primary-light);padding:8px 20px;border-radius:50px;font-weight:700;">+${getXPWithCombo(readingState.score*5+5)} XP earned</span>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-secondary" onclick="renderReading()">← Back to list</button>
          <button class="btn btn-primary" onclick="openReading(${readingState.currentId})">🔄 Try again</button>
        </div>
      </div>`;
    showXPPopup(getXPWithCombo(readingState.score*5+5));
  }
}

// Word lookup popup
function lookupWord(word) {
  const allWords = Object.values(VOCABULARY_DATA || {}).flat();
  const found = allWords.find(w => w.word.toLowerCase() === word.toLowerCase());
  const popup = document.createElement('div');
  popup.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--bg-2);border:1px solid var(--border-bright);border-radius:var(--radius);padding:16px 24px;z-index:8000;text-align:center;min-width:220px;box-shadow:var(--shadow-lg);animation:fadeInUp 0.2s ease;`;
  popup.innerHTML = found
    ? `<div style="font-size:20px;font-weight:800;font-family:var(--font-display);">${found.word}</div>
       <div style="color:var(--primary-light);margin:4px 0;">${found.phonetic||''}</div>
       <div style="color:var(--text-muted);font-size:13px;">${found.type||''}</div>
       <div style="font-size:16px;font-weight:600;color:var(--success);margin:8px 0;">${found.meaning}</div>
       <div style="font-size:12px;color:var(--text-dim);font-style:italic;">"${found.example||''}"</div>`
    : `<div style="font-size:16px;font-weight:700;">${word}</div><div style="color:var(--text-muted);font-size:13px;margin-top:8px;">Not in vocabulary list yet</div>`;
  const close = document.createElement('button');
  close.textContent = '×';
  close.style.cssText = 'position:absolute;top:8px;right:12px;background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer;';
  close.onclick = () => popup.remove();
  popup.appendChild(close);
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 4000);
}

// ============================================================
// WRITING
// ============================================================
let writingState = { level: 'A1', currentId: null };

function renderWriting() {
  setWritingLevel(writingState.level);
}

function setWritingLevel(level) {
  writingState.level = level;
  document.querySelectorAll('.writing-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === level));

  document.getElementById('writing-list')?.classList.remove('hidden');
  document.getElementById('writing-editor-area')?.classList.add('hidden');

  const container = document.getElementById('writing-prompts-grid');
  if (!container) return;

  if (typeof WRITING_PROMPTS === 'undefined') {
    container.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted);">Writing prompts not loaded. Check data/content.js</div>`;
    return;
  }

  const prompts = WRITING_PROMPTS.filter(p => p.level === level);
  const sp = getSkillProgress();

  if (!prompts.length) { container.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted);">No prompts for ${level} yet.</div>`; return; }

  container.innerHTML = prompts.map(p => {
    const draft = sp.writing.drafts.find(d => d.promptId === p.id);
    return `
      <div class="content-card ${draft?'completed':''}" onclick="openWriting(${p.id})">
        ${draft?`<div class="completed-check">📝</div>`:''}
        <div class="card-tag-row">
          <span class="level-badge level-${p.level}">${p.level}</span>
          <span class="content-meta-tag">${p.topic||'General'}</span>
        </div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.prompt.slice(0,120)}...</div>
        <div class="card-meta">
          <span>📝 ${p.minWords}–${p.maxWords} words</span>
          ${draft?`<span style="color:var(--success);">✏️ Draft saved (${draft.wordCount}w)</span>`:'<span>New</span>'}
        </div>
      </div>`;
  }).join('');
}

function openWriting(id) {
  if (typeof WRITING_PROMPTS === 'undefined') return;
  const p = WRITING_PROMPTS.find(x => x.id === id);
  if (!p) return;
  writingState.currentId = id;

  document.getElementById('writing-list')?.classList.add('hidden');
  document.getElementById('writing-editor-area')?.classList.remove('hidden');

  document.getElementById('writing-prompt-title')?.textContent && (document.getElementById('writing-prompt-title').textContent = p.title);
  document.getElementById('writing-prompt-text')?.textContent && (document.getElementById('writing-prompt-text').textContent = p.prompt);
  document.getElementById('writing-min-words')?.textContent && (document.getElementById('writing-min-words').textContent = p.minWords);
  document.getElementById('writing-max-words')?.textContent && (document.getElementById('writing-max-words').textContent = p.maxWords);

  const tipsEl = document.getElementById('writing-tips');
  if (tipsEl && p.tips) tipsEl.innerHTML = p.tips.map(t=>`<li>${t}</li>`).join('');

  // Load draft
  const draft = getWritingDraft(id);
  const textarea = document.getElementById('writing-textarea');
  if (textarea) { textarea.value = draft?.text || ''; updateWordCount(); }
}

function updateWordCount() {
  const textarea = document.getElementById('writing-textarea');
  const countEl = document.getElementById('word-count-num');
  const saveBtn = document.getElementById('writing-save-btn');
  if (!textarea || !countEl) return;
  const count = countWords(textarea.value);
  countEl.textContent = count;

  if (typeof WRITING_PROMPTS === 'undefined') return;
  const p = WRITING_PROMPTS.find(x => x.id === writingState.currentId);
  const min = p?.minWords || 50;
  countEl.className = `count ${count < min*0.5?'low':count < min?'medium':'high'}`;
  if (saveBtn) saveBtn.disabled = count < 5;
}

function saveWriting() {
  const textarea = document.getElementById('writing-textarea');
  if (!textarea || !writingState.currentId) return;
  const text = textarea.value.trim();
  if (!text) return;
  saveWritingDraft(writingState.currentId, text);

  const xp = getXPWithCombo(10);
  addXP(xp);
  addCombo();
  updateSidebar();
  checkAndAwardBadges();
  showToast(`Draft saved! +${xp} XP`, 'success', '💾');
  showXPPopup(xp);
  playSound('correct');
}

// ============================================================
// ============================================================
// LISTENING (36 In-depth Lessons from A1 to C2)
// ============================================================
const listeningState = { 
  level: 'all',
  currentId: null, 
  qIdx: 0, 
  score: 0, 
  answered: false, 
  playing: false, 
  utterance: null, 
  showTranscript: false, 
  speed: 1.0 
};

function setListeningLevel(lvl) {
  listeningState.level = lvl;
  document.querySelectorAll('.listening-level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === lvl);
  });
  renderListening();
}

function renderListening() {
  window.speechSynthesis?.cancel();
  listeningState.currentId = null;
  document.getElementById('listening-list')?.classList.remove('hidden');
  document.getElementById('listening-exercise')?.classList.add('hidden');

  const container = document.getElementById('listening-cards');
  if (!container) return;

  if (typeof LISTENING_DATA === 'undefined') {
    container.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted);">Listening data not loaded.</div>`;
    return;
  }

  const filter = listeningState.level || 'all';
  const sp = getSkillProgress();
  const items = filter === 'all' ? LISTENING_DATA : LISTENING_DATA.filter(item => item.level === filter);

  // Update active state on level buttons
  document.querySelectorAll('.listening-level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === filter);
  });

  if (!items.length) {
    container.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted);grid-column:1/-1;">Chưa có bài nghe cho cấp độ này.</div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const done = sp.listening?.completed?.includes(item.id);
    return `
      <div class="content-card ${done?'completed':''}" onclick="openListening(${item.id})">
        ${done?'<div class="completed-check">✅</div>':''}
        <div class="card-tag-row">
          <span class="level-badge level-${item.level}">${item.level}</span>
          <span class="content-meta-tag">${escapeHtml(item.topic||'General')}</span>
        </div>
        <div class="card-title">${escapeHtml(item.title)}</div>
        <div class="card-meta">
          <span>⏱️ ${item.duration||'~1 min'}</span>
          <span>❓ ${item.questions?.length||0} questions</span>
        </div>
      </div>`;
  }).join('');
}

function openListening(id) {
  if (typeof LISTENING_DATA === 'undefined') return;
  const item = LISTENING_DATA.find(l => l.id === id);
  if (!item) return;
  listeningState.currentId = id;
  listeningState.qIdx = 0; listeningState.score = 0; listeningState.answered = false;
  listeningState.showTranscript = false; listeningState.playing = false;

  document.getElementById('listening-list')?.classList.add('hidden');
  document.getElementById('listening-exercise')?.classList.remove('hidden');

  const badge = document.getElementById('listening-level-badge');
  if (badge) { badge.textContent = item.level; badge.className = `level-badge level-${item.level}`; }
  document.getElementById('listening-title')?.textContent && (document.getElementById('listening-title').textContent = item.title);

  // Key Vocabulary & Academic Terms
  const vocabBox = document.getElementById('listening-vocab-box');
  const vocabList = document.getElementById('listening-key-vocab-list');
  if (vocabBox && vocabList) {
    if (item.keyVocab && item.keyVocab.length) {
      vocabList.innerHTML = item.keyVocab.map(v => `
        <span style="font-size:12px;background:rgba(6,182,212,0.1);color:var(--secondary-light);border:1px solid rgba(6,182,212,0.25);border-radius:8px;padding:5px 12px;display:inline-flex;align-items:center;gap:6px;">
          <strong>${escapeHtml(v.word)}</strong>: <span>${escapeHtml(v.meaning)}</span>
        </span>
      `).join('');
      vocabBox.classList.remove('hidden');
    } else {
      vocabBox.classList.add('hidden');
      vocabList.innerHTML = '';
    }
  }

  // Store transcript
  const txtEl = document.getElementById('listening-transcript-text');
  if (txtEl) txtEl.textContent = item.script || '';
  const transEl = document.getElementById('listening-transcript');
  if (transEl) { transEl.textContent = ''; transEl.classList.add('hidden'); }
  document.getElementById('transcript-btn')?.textContent && (document.getElementById('transcript-btn').textContent = '📜 Show Transcript');

  document.getElementById('play-btn')?.textContent && (document.getElementById('play-btn').textContent = '▶️ Play Audio');
  setSpeed(item.speed || 1.0);
  stopAudioBars();
  renderListeningQuestion();
}

function togglePlay() {
  if (listeningState.playing) stopAudio();
  else playAudio();
}

function playAudio() {
  if (typeof LISTENING_DATA === 'undefined') return;
  const item = LISTENING_DATA.find(l => l.id === listeningState.currentId);
  if (!item) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(item.script);
  utt.lang = 'en-US'; utt.rate = listeningState.speed;
  utt.onstart = () => { listeningState.playing = true; startAudioBars(); document.getElementById('play-btn')?.textContent && (document.getElementById('play-btn').textContent = '⏹ Stop'); };
  utt.onend = utt.onerror = () => { listeningState.playing = false; stopAudioBars(); document.getElementById('play-btn')?.textContent && (document.getElementById('play-btn').textContent = '▶️ Play Again'); };
  window.speechSynthesis.speak(utt);
  listeningState.utterance = utt;
}

function stopAudio() {
  window.speechSynthesis?.cancel();
  listeningState.playing = false;
  stopAudioBars();
  document.getElementById('play-btn')?.textContent && (document.getElementById('play-btn').textContent = '▶️ Play Audio');
}

function startAudioBars() {
  document.querySelectorAll('.audio-bar').forEach(b => b.classList.add('playing'));
}
function stopAudioBars() {
  document.querySelectorAll('.audio-bar').forEach(b => { b.classList.remove('playing'); b.style.height = '8px'; });
}

function setSpeed(speed) {
  listeningState.speed = speed;
  document.querySelectorAll('.speed-btn').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.speed) === speed));
}

function toggleTranscript() {
  listeningState.showTranscript = !listeningState.showTranscript;
  const transcriptEl = document.getElementById('listening-transcript');
  const textEl = document.getElementById('listening-transcript-text');
  if (transcriptEl && textEl) {
    transcriptEl.textContent = textEl.textContent;
    transcriptEl.classList.toggle('hidden', !listeningState.showTranscript);
  }
  document.getElementById('transcript-btn')?.textContent && (document.getElementById('transcript-btn').textContent = listeningState.showTranscript ? '🙈 Hide Transcript' : '📜 Show Transcript');
}

function renderListeningQuestion() {
  if (typeof LISTENING_DATA === 'undefined') return;
  const item = LISTENING_DATA.find(l => l.id === listeningState.currentId);
  if (!item) return;
  const qs = item.questions || [];
  const q = qs[listeningState.qIdx];
  if (!q) { finishListening(); return; }

  const total = qs.length;
  const prog = document.getElementById('listening-q-progress');
  if (prog) prog.style.width = `${(listeningState.qIdx/total)*100}%`;
  document.getElementById('listening-q-counter')?.textContent && (document.getElementById('listening-q-counter').textContent = `Q${listeningState.qIdx+1}/${total}`);
  document.getElementById('listening-question-text')?.textContent && (document.getElementById('listening-question-text').textContent = q.question);

  const optContainer = document.getElementById('listening-options');
  if (optContainer) {
    optContainer.innerHTML = q.options.map((opt, i) =>
      `<button class="option-btn" onclick="answerListening(${i})">${opt}</button>`
    ).join('');
  }
  document.getElementById('listening-explanation')?.classList.add('hidden');
  document.getElementById('listening-next-btn')?.classList.add('hidden');
  listeningState.answered = false;
}

function answerListening(idx) {
  if (listeningState.answered) return;
  listeningState.answered = true;
  if (typeof LISTENING_DATA === 'undefined') return;
  const item = LISTENING_DATA.find(l => l.id === listeningState.currentId);
  const q = item.questions[listeningState.qIdx];
  const btns = document.querySelectorAll('#listening-options .option-btn');
  btns.forEach((b,i) => { b.disabled=true; if(i===q.answer) b.classList.add('correct'); else if(i===idx) b.classList.add('wrong'); });

  const correct = idx === q.answer;
  if (correct) { listeningState.score++; addCombo(); playSound('correct'); }
  else { loseHeart(); resetCombo(); playSound('wrong'); }

  const expEl = document.getElementById('listening-explanation');
  if (expEl && q.explanation) { expEl.className='explanation-box'; expEl.textContent=q.explanation; }
  document.getElementById('listening-next-btn')?.classList.remove('hidden');
}

function listeningNext() {
  listeningState.qIdx++;
  const item = LISTENING_DATA.find(l => l.id === listeningState.currentId);
  if (listeningState.qIdx >= (item?.questions?.length||0)) finishListening();
  else renderListeningQuestion();
}

function finishListening() {
  stopAudio();
  if (typeof LISTENING_DATA === 'undefined') return;
  const item = LISTENING_DATA.find(l => l.id === listeningState.currentId);
  const total = item?.questions?.length || 1;
  recordScore('listening', listeningState.score, total);
  const sp = getSkillProgress();
  if (!sp.listening.completed.includes(listeningState.currentId)) {
    sp.listening.completed.push(listeningState.currentId);
    saveSkillProgress(sp);
  }
  checkAndAwardBadges(); updateSidebar();

  const qArea = document.getElementById('listening-q-area');
  if (qArea) {
    const pct = Math.round((listeningState.score/total)*100);
    const xp = getXPWithCombo(listeningState.score*5+5);
    qArea.innerHTML = `<div style="text-align:center;padding:32px 0;">
      <div style="font-size:56px;margin-bottom:12px;">${pct>=80?'🎉':pct>=50?'👍':'🎧'}</div>
      <div style="font-family:var(--font-display);font-size:48px;font-weight:900;background:linear-gradient(135deg,#06B6D4,#67E8F9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${pct}%</div>
      <div style="color:var(--text-muted);margin:8px 0 24px;">${listeningState.score}/${total} correct · +${xp} XP</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="renderListening()">← Back</button>
        <button class="btn btn-primary" onclick="openListening(${listeningState.currentId})">🔄 Retry</button>
      </div></div>`;
    showXPPopup(xp);
  }
}

// ============================================================
// SHADOWING
// ============================================================
const shadowState = { currentId: null, segIdx: 0, scores: [], recording: false, recognition: null, speed: 0.9 };

function renderShadowing() {
  const container = document.getElementById('shadowing-list');
  if (container) container.classList.remove('hidden');
  const exerciseEl = document.getElementById('shadowing-exercise');
  if (exerciseEl) exerciseEl.classList.add('hidden');

  const cardsEl = document.getElementById('shadowing-cards');
  if (!cardsEl) return;
  const sp = getSkillProgress();

  const filter = document.getElementById('shadowing-level-filter')?.value || 'all';
  const items = filter === 'all' ? SHADOWING_DATA : SHADOWING_DATA.filter(s => s.level === filter);

  cardsEl.innerHTML = items.map(item => {
    const done = sp.shadowing?.completed?.includes(item.id);
    return `
      <div class="content-card ${done?'completed':''}" onclick="openShadowing(${item.id})">
        ${done?'<div class="completed-check">✅</div>':''}
        <div class="card-tag-row">
          <span class="level-badge level-${item.level}">${item.level}</span>
          <span class="content-meta-tag">${item.topic}</span>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.segments.length} segments · Listen and repeat</div>
        <div class="card-meta"><span>🎙️ Voice training</span><span>🔊 TTS audio</span></div>
      </div>`;
  }).join('');
}

function openShadowing(id) {
  const item = SHADOWING_DATA.find(s => s.id === id);
  if (!item) return;
  shadowState.currentId = id;
  shadowState.segIdx = 0;
  shadowState.scores = [];
  shadowState.speed = item.speed || 0.9;

  document.getElementById('shadowing-list')?.classList.add('hidden');
  document.getElementById('shadowing-exercise')?.classList.remove('hidden');

  const badge = document.getElementById('shadowing-level-badge');
  if (badge) { badge.textContent = item.level; badge.className = `level-badge level-${item.level}`; }
  document.getElementById('shadowing-title')?.textContent && (document.getElementById('shadowing-title').textContent = item.title);

  renderShadowingSegment();
}

function renderShadowingSegment() {
  const item = SHADOWING_DATA.find(s => s.id === shadowState.currentId);
  if (!item) return;
  const seg = item.segments[shadowState.segIdx];
  if (!seg) { finishShadowing(); return; }

  const prog = document.getElementById('shadow-progress');
  if (prog) prog.style.width = `${(shadowState.segIdx/item.segments.length)*100}%`;
  document.getElementById('shadow-counter')?.textContent && (document.getElementById('shadow-counter').textContent = `${shadowState.segIdx+1}/${item.segments.length}`);

  const textEl = document.getElementById('shadow-text');
  if (textEl) textEl.textContent = seg.text;
  const transEl = document.getElementById('shadow-translation');
  if (transEl) transEl.textContent = seg.translation;

  const resultEl = document.getElementById('shadow-result');
  if (resultEl) resultEl.innerHTML = '';
  const transcriptEl = document.getElementById('shadow-transcript');
  if (transcriptEl) transcriptEl.textContent = 'Your speech will appear here...';
  document.getElementById('shadow-record-btn')?.textContent && (document.getElementById('shadow-record-btn').textContent = '🎤 Record');
  document.getElementById('shadow-next-btn')?.classList.add('hidden');
}

function shadowListen() {
  const item = SHADOWING_DATA.find(s => s.id === shadowState.currentId);
  if (!item) return;
  const seg = item.segments[shadowState.segIdx];
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = 'en-US'; utt.rate = shadowState.speed;
  window.speechSynthesis.speak(utt);
}

function shadowRecord() {
  if (shadowState.recording) { shadowState.recognition?.stop(); return; }
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Speech Recognition not supported. Use Chrome or Edge.', 'error', '⚠️'); return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SpeechRecognition();
  rec.lang = 'en-US'; rec.interimResults = false;
  shadowState.recognition = rec;
  shadowState.recording = true;
  document.getElementById('shadow-record-btn')?.textContent && (document.getElementById('shadow-record-btn').textContent = '⏹ Stop');

  rec.onresult = (event) => {
    const spoken = event.results[0][0].transcript.trim().toLowerCase();
    scoreShadowing(spoken);
  };
  rec.onerror = rec.onend = () => {
    shadowState.recording = false;
    document.getElementById('shadow-record-btn')?.textContent && (document.getElementById('shadow-record-btn').textContent = '🎤 Record');
  };
  rec.start();
}

function scoreShadowing(spoken) {
  const item = SHADOWING_DATA.find(s => s.id === shadowState.currentId);
  const seg = item.segments[shadowState.segIdx];
  const target = seg.text.toLowerCase().replace(/[^a-z\s]/g,'');
  const targetWords = target.split(/\s+/);
  const spokenWords = spoken.split(/\s+/);

  let matches = 0;
  const resultHTML = targetWords.map(w => {
    const hit = spokenWords.some(sw => sw.replace(/[^a-z]/g,'') === w.replace(/[^a-z]/g,''));
    if (hit) matches++;
    return `<span class="shadow-word ${hit?'word-match':'word-miss'}">${w}</span> `;
  }).join('');

  const accuracy = Math.round((matches / targetWords.length) * 100);
  shadowState.scores.push(accuracy);

  const transcriptEl = document.getElementById('shadow-transcript');
  if (transcriptEl) transcriptEl.textContent = `You said: "${spoken}"`;

  const resultEl = document.getElementById('shadow-result');
  if (resultEl) resultEl.innerHTML = `<div style="margin-bottom:8px;font-size:14px;color:var(--text-muted);">Word matching:</div>${resultHTML}<div class="shadow-accuracy mt-16" style="background:linear-gradient(135deg,${accuracy>=80?'#10B981,#34D399':accuracy>=50?'#F59E0B,#FCD34D':'#EF4444,#FCA5A5'});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${accuracy}% accuracy</div>`;

  if (accuracy >= 60) { addCombo(); playSound('correct'); }
  else { resetCombo(); playSound('wrong'); }

  document.getElementById('shadow-next-btn')?.classList.remove('hidden');
}

function shadowNext() {
  shadowState.segIdx++;
  const item = SHADOWING_DATA.find(s => s.id === shadowState.currentId);
  if (shadowState.segIdx >= (item?.segments?.length || 0)) finishShadowing();
  else renderShadowingSegment();
}

function finishShadowing() {
  const avgScore = shadowState.scores.length ? Math.round(shadowState.scores.reduce((a,b)=>a+b,0)/shadowState.scores.length) : 0;
  const sp = getSkillProgress();
  if (!sp.shadowing) sp.shadowing = { completed: [], totalScore: 0, attempts: 0 };
  sp.shadowing.completed.push(shadowState.currentId);
  sp.shadowing.totalScore += avgScore;
  sp.shadowing.attempts += 100;
  saveSkillProgress(sp);
  const xp = getXPWithCombo(Math.round(avgScore/5)+10);
  addXP(xp);
  checkAndAwardBadges(); updateSidebar();

  const area = document.getElementById('shadow-exercise-area');
  if (area) {
    area.innerHTML = `<div style="text-align:center;padding:40px 0;">
      <div style="font-size:56px;margin-bottom:12px;">🎙️</div>
      <div style="font-family:var(--font-display);font-size:48px;font-weight:900;background:linear-gradient(135deg,var(--primary-light),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${avgScore}%</div>
      <div style="color:var(--text-muted);margin:8px 0 24px;">Average accuracy · +${xp} XP earned</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="renderShadowing()">← Back</button>
        <button class="btn btn-primary" onclick="openShadowing(${shadowState.currentId})">🔄 Practice again</button>
      </div></div>`;
    showXPPopup(xp);
  }
}

// ============================================================
// SPEAKING
// ============================================================
const speakingState = { level: 'A1', idx: 0, recording: false, recognition: null };

function renderSpeaking() {
  setSpeakingLevel(speakingState.level);
}
function setSpeakingLevel(level) {
  speakingState.level = level;
  speakingState.idx = 0;
  document.querySelectorAll('.speaking-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === level));
  renderSpeakingCard();
}
function renderSpeakingCard() {
  if (typeof SPEAKING_DATA === 'undefined' || !SPEAKING_DATA[speakingState.level]) {
    document.getElementById('speaking-sentence')?.textContent && (document.getElementById('speaking-sentence').textContent = 'No sentences for this level yet.');
    return;
  }
  const sentences = SPEAKING_DATA[speakingState.level];
  const item = sentences[speakingState.idx];
  document.getElementById('speaking-sentence')?.textContent && (document.getElementById('speaking-sentence').textContent = item.text || item);
  document.getElementById('speaking-counter')?.textContent && (document.getElementById('speaking-counter').textContent = `${speakingState.idx+1} / ${sentences.length}`);
  document.getElementById('speaking-topic')?.textContent && (document.getElementById('speaking-topic').textContent = item.topic || 'Practice');
  document.getElementById('speaking-transcript-display')?.textContent && (document.getElementById('speaking-transcript-display').textContent = 'Your speech will appear here...');
  document.getElementById('speaking-score-display')?.classList.add('hidden');

  const listenBtn = document.getElementById('speaking-listen-btn');
  if (listenBtn) { listenBtn.onclick = () => speakExample(item.text || item); }
}
function speakingNav(dir) {
  if (typeof SPEAKING_DATA === 'undefined') return;
  const sentences = SPEAKING_DATA[speakingState.level] || [];
  speakingState.idx = (speakingState.idx + dir + sentences.length) % sentences.length;
  renderSpeakingCard();
}
function speakExample(text) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US'; utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}
function toggleRecording() {
  if (speakingState.recording) { speakingState.recognition?.stop(); return; }
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Speech recognition requires Chrome or Edge', 'error', '⚠️'); return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-US'; rec.interimResults = false;
  speakingState.recognition = rec;
  speakingState.recording = true;

  const btn = document.getElementById('record-btn');
  const label = document.getElementById('record-label');
  if (btn) btn.classList.add('recording');
  if (label) label.textContent = '🔴 Recording...';

  rec.onresult = (e) => {
    const spoken = e.results[0][0].transcript.toLowerCase();
    const sentences = typeof SPEAKING_DATA !== 'undefined' ? SPEAKING_DATA[speakingState.level] || [] : [];
    const item = sentences[speakingState.idx];
    const target = (item.text || item).toLowerCase();
    scoreSpeaking(spoken, target);
  };
  rec.onerror = rec.onend = () => {
    speakingState.recording = false;
    if (btn) btn.classList.remove('recording');
    if (label) label.textContent = 'Tap to speak';
  };
  rec.start();
}

function scoreSpeaking(spoken, target) {
  const targetWords = target.replace(/[^a-z\s]/g,'').split(/\s+/);
  const spokenWords = spoken.replace(/[^a-z\s]/g,'').split(/\s+/);
  let matches = 0;
  targetWords.forEach(w => { if (spokenWords.includes(w)) matches++; });
  const accuracy = Math.round((matches / targetWords.length) * 100);

  const display = document.getElementById('speaking-transcript-display');
  if (display) {
    display.innerHTML = spokenWords.map(w => {
      const hit = targetWords.includes(w);
      return `<span style="color:${hit?'var(--success)':'var(--danger)'};font-weight:${hit?'600':'400'}">${w}</span>`;
    }).join(' ');
  }
  const scoreDisplay = document.getElementById('speaking-score-display');
  const accuracyEl = document.getElementById('speaking-accuracy');
  if (scoreDisplay) scoreDisplay.classList.remove('hidden');
  if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
  if (accuracy >= 70) { addCombo(); playSound('correct'); recordScore('speaking', accuracy, 100); updateSidebar(); }
  else { resetCombo(); playSound('wrong'); }
}

// ============================================================
// VOCABULARY (Comprehensive 100 words/level, SM-2, Quiz & Matching)
// ============================================================
const vocabState = { 
  level: 'A1', 
  mode: 'flashcard', 
  idx: 0, 
  flipped: false, 
  activeDeck: [],
  quizIdx: 0,
  quizScore: 0,
  quizAnswered: false,
  matchOffset: 0,
  matchSelected: null,
  bankSearch: ''
};

function getVocabDeck(level) {
  const std = (typeof VOCABULARY_DATA !== 'undefined' && VOCABULARY_DATA[level]) ? [...VOCABULARY_DATA[level]] : [];
  const custom = (typeof getCustomCards === 'function') ? getCustomCards().filter(c => c.level === level) : [];
  return [...std, ...custom];
}

function renderVocabulary() {
  vocabState.activeDeck = getVocabDeck(vocabState.level);
  document.querySelectorAll('.vocab-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === vocabState.level));
  document.querySelectorAll('.vocab-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === vocabState.mode));
  updateVocabStats();
  renderVocabMode();
}

function updateVocabStats() {
  const sp = getSkillProgress();
  setElText('vocab-stat-mastered', sp.vocabulary?.mastered?.length || 0);
  setElText('vocab-stat-review', sp.vocabulary?.reviewing?.length || 0);
}

function setVocabLevel(level) {
  vocabState.level = level;
  vocabState.idx = 0;
  vocabState.quizIdx = 0;
  vocabState.quizScore = 0;
  vocabState.matchOffset = 0;
  vocabState.activeDeck = getVocabDeck(level);
  if (typeof sentenceState !== 'undefined') {
    sentenceState.idx = 0;
    sentenceState.flipped = false;
    sentenceState.builderIdx = 0;
    sentenceState.builderScore = 0;
    sentenceState.builderTotal = 0;
    sentenceState.builderAnswered = false;
  }
  document.querySelectorAll('.vocab-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === level));
  renderVocabMode();
}

function setVocabMode(mode) {
  vocabState.mode = mode;
  document.querySelectorAll('.vocab-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  renderVocabMode();
}

function renderVocabMode() {
  if (!vocabState.activeDeck.length) {
    vocabState.activeDeck = getVocabDeck(vocabState.level);
  }

  const modes = ['flashcard', 'sentence-card', 'sentence-builder', 'quiz', 'matching', 'bank'];
  modes.forEach(m => {
    const el = document.getElementById(`${m}-mode`);
    if (el) {
      if (m === vocabState.mode) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });

  if (vocabState.mode === 'flashcard') {
    renderFlashcard();
  } else if (vocabState.mode === 'sentence-card') {
    renderSentenceCards();
  } else if (vocabState.mode === 'sentence-builder') {
    renderSentenceBuilder();
  } else if (vocabState.mode === 'quiz') {
    renderVocabQuiz();
  } else if (vocabState.mode === 'matching') {
    renderMatchingGame();
  } else if (vocabState.mode === 'bank') {
    renderWordBank();
  }
}

// ---- FLASHCARDS ----
function renderFlashcard() {
  const words = vocabState.activeDeck;
  const cardMode = document.getElementById('flashcard-mode');
  if (!words.length) {
    if (cardMode) cardMode.innerHTML = `<div class="card" style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">📚</div><div>Không có từ vựng cho cấp độ này.</div></div>`;
    return;
  }
  
  const word = words[vocabState.idx % words.length];
  const status = getVocabStatus(word.id);
  const sm2 = getCardSM2(word.id);

  setElText('vocab-front-word', word.word);
  setElText('vocab-front-phonetic', word.phonetic || '');
  setElText('vocab-front-type', word.type || 'word');
  setElText('vocab-back-meaning', word.meaning);
  setElText('vocab-back-example', word.example ? `"${word.example}"` : '');
  setElText('vocab-card-counter', `${(vocabState.idx % words.length) + 1} / ${words.length}`);

  const statusEl = document.getElementById('vocab-status');
  if (statusEl) {
    const map = { new:'🆕 Mới', due:'⏰ Cần ôn tập', learning:'🔄 Đang học', mastered:'✅ Đã thuộc' };
    const repInfo = sm2.repetitions > 0 ? ` (Ôn lần ${sm2.repetitions} · ${sm2.interval}d)` : '';
    statusEl.textContent = (map[status] || '🆕 Mới') + repInfo;
  }

  // Reset flip
  vocabState.flipped = false;
  document.getElementById('flashcard-inner')?.classList.remove('flipped');
}

function speakVocabCurrent() {
  const words = vocabState.activeDeck;
  if (!words.length) return;
  const word = words[vocabState.idx % words.length];
  if (word && word.word) {
    speakWord(word.word);
  }
}

function speakWord(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function rateCardSM2Action(quality) {
  const words = vocabState.activeDeck;
  if (!words.length) return;
  const word = words[vocabState.idx % words.length];
  
  const result = rateVocabSM2(word.id, quality);
  if (quality >= 3) {
    playSound('correct');
    showToast(`Đã ôn "${word.word}" · Lần tới sau ${result.interval} ngày`, 'success');
  } else {
    playSound('wrong');
    showToast(`Đã đánh dấu "${word.word}" để ôn lại sớm!`, 'warning');
  }
  
  updateVocabStats();
  updateSidebar();
  vocabNav(1);
}

function flipCard() {
  vocabState.flipped = !vocabState.flipped;
  document.getElementById('flashcard-inner')?.classList.toggle('flipped', vocabState.flipped);
}

function vocabNav(dir) {
  const words = vocabState.activeDeck;
  if (!words.length) return;
  vocabState.idx = (vocabState.idx + dir + words.length) % words.length;
  renderFlashcard();
}

function markVocab(correct) {
  rateCardSM2Action(correct ? 3 : 0);
}

// ---- QUIZ MODE (Trắc nghiệm Từ vựng - 100 câu) ----
function renderVocabQuiz() {
  const words = vocabState.activeDeck;
  if (!words.length) {
    const qm = document.getElementById('quiz-mode');
    if (qm) qm.innerHTML = `<div class="card" style="text-align:center;padding:40px;">🎉 Chưa có từ vựng cho cấp độ này.</div>`;
    return;
  }

  vocabState.quizAnswered = false;
  const curIdx = vocabState.quizIdx % words.length;
  const word = words[curIdx];

  // Update question header and meta
  setElText('quiz-level-badge', vocabState.level);
  setElText('quiz-topic-badge', word.topic ? `Chủ đề: ${word.topic}` : 'Vocabulary');
  setElText('quiz-score-display', `Điểm: ${vocabState.quizScore} / ${Math.max(vocabState.quizIdx, 1)} ⭐`);
  setElText('quiz-counter-display', `Câu ${curIdx + 1} / ${words.length}`);

  // DISPLAY QUESTION WORD PROMINENTLY (FIX FOR "không thấy câu hỏi")
  setElText('quiz-word-display', word.word);
  setElText('quiz-word-phonetic', word.phonetic || '');
  setElText('quiz-word-type', word.type || 'word');

  // Clear feedback and hide next button
  setElHtml('vocab-quiz-feedback', '');
  document.getElementById('vocab-quiz-next-btn')?.classList.add('hidden');

  // 4 options: word + 3 distractors from the SAME CEFR level
  const otherSameLevel = words.filter(w => w.id !== word.id && w.meaning !== word.meaning);
  let distractors = otherSameLevel.sort(() => Math.random() - 0.5).slice(0, 3);
  
  // If not enough in current level, fallback to other levels
  if (distractors.length < 3) {
    const allWords = Object.values(VOCABULARY_DATA || {}).flat();
    const fallback = allWords.filter(w => w.id !== word.id && w.meaning !== word.meaning);
    distractors = [...distractors, ...fallback.sort(() => Math.random() - 0.5).slice(0, 3 - distractors.length)];
  }

  const options = [word, ...distractors].sort(() => Math.random() - 0.5);

  const container = document.getElementById('vocab-quiz-options');
  if (container) {
    container.innerHTML = options.map(opt => `
      <button class="option-btn" data-id="${opt.id}" onclick="answerVocabQuiz(${opt.id}, ${word.id})">
        ${escapeHtml(opt.meaning)}
      </button>
    `).join('');
  }
}

function speakQuizCurrentWord() {
  const words = vocabState.activeDeck;
  if (!words.length) return;
  const word = words[vocabState.quizIdx % words.length];
  if (word && word.word) {
    speakWord(word.word);
  }
}

function answerVocabQuiz(selectedId, correctId) {
  if (vocabState.quizAnswered) return;
  vocabState.quizAnswered = true;

  const words = vocabState.activeDeck;
  const correctWord = words.find(w => w.id === correctId) || Object.values(VOCABULARY_DATA || {}).flat().find(w => w.id === correctId);
  const correct = (selectedId === correctId);

  // Mark buttons
  const btns = document.querySelectorAll('#vocab-quiz-options .option-btn');
  btns.forEach(btn => {
    btn.disabled = true;
    const btnId = parseInt(btn.dataset.id);
    if (btnId === correctId) {
      btn.classList.add('correct');
    } else if (btnId === selectedId && !correct) {
      btn.classList.add('wrong');
    }
  });

  // Score and state
  if (correct) {
    vocabState.quizScore++;
    playSound('correct');
    addCombo();
    addXP(5);
    rateVocabSM2(correctId, 4);
  } else {
    playSound('wrong');
    resetCombo();
    loseHeart();
    rateVocabSM2(correctId, 1);
  }

  updateVocabStats();
  updateSidebar();
  setElText('quiz-score-display', `Điểm: ${vocabState.quizScore} / ${vocabState.quizIdx + 1} ⭐`);

  // Render detailed educational feedback
  const feedbackEl = document.getElementById('vocab-quiz-feedback');
  if (feedbackEl && correctWord) {
    feedbackEl.innerHTML = `
      <div class="feedback-card ${correct ? 'feedback-correct' : 'feedback-wrong'}">
        <div style="font-weight:700;font-size:16px;margin-bottom:6px;">
          ${correct ? '🎉 Chính xác! Tuyệt vời!' : '⚠️ Chưa chính xác rồi!'}
        </div>
        <div style="font-size:15px;margin-bottom:4px;">
          <strong>${correctWord.word}</strong> 
          <span style="color:var(--primary-light);font-size:14px;">${correctWord.phonetic || ''}</span> 
          <span style="font-size:12px;opacity:0.8;">(${correctWord.type || 'word'})</span>: 
          <strong>${correctWord.meaning}</strong>
        </div>
        ${correctWord.example ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic;margin-top:4px;">Ví dụ: "${correctWord.example}"</div>` : ''}
      </div>
    `;
  }

  // Reveal next button
  document.getElementById('vocab-quiz-next-btn')?.classList.remove('hidden');
}

function vocabQuizNext() {
  vocabState.quizIdx++;
  renderVocabQuiz();
}

// ---- MATCHING GAME (Nối từ - Luân phiên 5 từ/hiệp qua toàn bộ 100 từ) ----
let matchState = { pairs: [], selected: null, matched: [], attempts: 0 };

function renderMatchingGame() {
  const words = vocabState.activeDeck;
  const container = document.getElementById('matching-mode');
  if (!container) return;

  if (words.length < 2) {
    container.innerHTML = `<div class="card" style="text-align:center;padding:40px;">🎉 Cần ít nhất 2 từ vựng để chơi nối từ.</div>`;
    return;
  }

  // Ensure offset is within bounds
  if (vocabState.matchOffset >= words.length) vocabState.matchOffset = 0;

  const pool = words.slice(vocabState.matchOffset, vocabState.matchOffset + 5);
  if (pool.length < 2) {
    vocabState.matchOffset = 0;
    return renderMatchingGame();
  }

  matchState = { pairs: pool, selected: null, matched: [], attempts: 0 };
  const currentRound = Math.floor(vocabState.matchOffset / 5) + 1;
  const totalRounds = Math.ceil(words.length / 5);

  const lefts = pool.map((w, i) => ({ id: `w_${w.id}`, text: w.word, pairId: w.id, phonetic: w.phonetic, side: 'word' }));
  const rights = pool.map((w, i) => ({ id: `m_${w.id}`, text: w.meaning, pairId: w.id, side: 'meaning' })).sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="content-meta-tag">Hiệp ${currentRound} / ${totalRounds}</span>
        <span class="level-badge level-${vocabState.level}">${vocabState.level} (100 từ)</span>
      </div>
      <span id="match-progress" style="color:var(--text-muted);font-size:14px;font-weight:600;">0 / ${pool.length} cặp đã ghép</span>
    </div>

    <div style="font-size:14px;color:var(--text-muted);margin-bottom:16px;text-align:center;">
      Nhấp chọn một từ tiếng Anh ở cột trái, sau đó nhấp vào nghĩa tiếng Việt tương ứng ở cột phải:
    </div>

    <div class="match-grid" id="match-grid">
      <div id="match-left" style="display:flex;flex-direction:column;gap:10px;">
        ${lefts.map(l => `
          <div class="match-item" id="${l.id}" data-pair="${l.pairId}" data-side="word" onclick="selectMatch(this)">
            <div style="font-weight:700;font-size:15px;">${escapeHtml(l.text)}</div>
            ${l.phonetic ? `<div style="font-size:12px;color:var(--primary-light);">${escapeHtml(l.phonetic)}</div>` : ''}
          </div>
        `).join('')}
      </div>
      <div id="match-right" style="display:flex;flex-direction:column;gap:10px;">
        ${rights.map(r => `
          <div class="match-item" id="${r.id}" data-pair="${r.pairId}" data-side="meaning" onclick="selectMatch(this)" style="display:flex;align-items:center;justify-content:center;min-height:52px;">
            <div style="font-weight:600;font-size:14px;">${escapeHtml(r.text)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  if (matchState.selected === null) {
    el.classList.add('selected');
    matchState.selected = el;
  } else {
    const prev = matchState.selected;
    if (prev.dataset.side === el.dataset.side) {
      prev.classList.remove('selected');
      el.classList.add('selected');
      matchState.selected = el;
      return;
    }

    matchState.attempts++;
    const pairA = prev.dataset.pair;
    const pairB = el.dataset.pair;

    if (pairA === pairB) {
      prev.classList.remove('selected');
      prev.classList.add('matched');
      el.classList.add('matched');
      matchState.matched.push(pairA);
      playSound('correct');
      addCombo();
      rateVocabSM2(parseInt(pairA), 4);

      setElText('match-progress', `${matchState.matched.length} / ${matchState.pairs.length} cặp đã ghép`);

      // If word side clicked, speak it
      const wordText = prev.dataset.side === 'word' ? prev.querySelector('div')?.textContent : el.querySelector('div')?.textContent;
      if (wordText) speakWord(wordText);

      // Check if current round completed
      if (matchState.matched.length === matchState.pairs.length) {
        const xp = getXPWithCombo(matchState.pairs.length * 5);
        addXP(xp);
        updateSidebar();
        updateVocabStats();

        // Advance to next 5 words
        vocabState.matchOffset = (vocabState.matchOffset + 5) % vocabState.activeDeck.length;
        setTimeout(() => {
          showToast(`🎉 Xuất sắc! +${xp} XP. Đang nạp 5 từ tiếp theo...`, 'success');
        }, 300);
        setTimeout(() => {
          renderMatchingGame();
        }, 1600);
      }
    } else {
      el.classList.add('wrong');
      prev.classList.add('wrong');
      playSound('wrong');
      resetCombo();
      loseHeart();
      setTimeout(() => {
        el.classList.remove('wrong', 'selected');
        prev.classList.remove('wrong', 'selected');
        matchState.selected = null;
      }, 700);
      return;
    }
    matchState.selected = null;
  }
}

// ---- WORD BANK (Tra cứu 100 từ vựng theo Level) ----
function renderWordBank() {
  const container = document.getElementById('bank-mode');
  if (!container) return;
  const words = vocabState.activeDeck;

  const query = (vocabState.bankSearch || '').toLowerCase().trim();
  const filtered = query ? words.filter(w => 
    w.word.toLowerCase().includes(query) || 
    w.meaning.toLowerCase().includes(query) ||
    (w.topic && w.topic.toLowerCase().includes(query))
  ) : words;

  container.innerHTML = `
    <div class="word-bank-search-bar">
      <input type="text" class="word-bank-search-input" id="word-bank-input" 
        placeholder="🔍 Tìm kiếm từ tiếng Anh, phát âm hoặc nghĩa tiếng Việt trong 100 từ..." 
        value="${escapeHtml(vocabState.bankSearch || '')}"
        oninput="searchWordBank(this.value)">
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
      <span style="font-size:14px;color:var(--text-muted);">
        Hiển thị <strong>${filtered.length}</strong> / ${words.length} từ vựng chuẩn Level <strong>${vocabState.level}</strong>
      </span>
      <button class="btn btn-secondary btn-sm" onclick="setVocabMode('quiz')">🧠 Làm Quiz 100 câu này</button>
    </div>

    <div class="word-bank-grid">
      ${filtered.map(w => `
        <div class="word-bank-card">
          <div>
            <div class="word-bank-header">
              <div>
                <div class="word-bank-title">${escapeHtml(w.word)}</div>
                <div class="word-bank-phonetic">${escapeHtml(w.phonetic || '')}</div>
              </div>
              <div style="display:flex;gap:6px;align-items:center;">
                <span class="flashcard-type">${escapeHtml(w.type || 'word')}</span>
                <button class="btn btn-secondary btn-sm" style="padding:2px 8px;font-size:12px;" data-word="${escapeHtml(w.word)}" onclick="speakWord(this.dataset.word)">🔊</button>
              </div>
            </div>
            <div class="word-bank-meaning">${escapeHtml(w.meaning)}</div>
            ${w.example ? `<div class="word-bank-example">"${escapeHtml(w.example)}"</div>` : ''}
          </div>
          ${w.topic ? `<div style="margin-top:10px;font-size:11px;color:var(--text-dim);">🏷️ ${escapeHtml(w.topic)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function searchWordBank(query) {
  vocabState.bankSearch = query;
  renderWordBank();
  // Keep focus in input
  const input = document.getElementById('word-bank-input');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

// ============================================================
// SENTENCE-BASED LEARNING (Sentence Cards & Sentence Builder)
// ============================================================
const sentenceState = {
  idx: 0,
  flipped: false,
  builderIdx: 0,
  builderScore: 0,
  builderTotal: 0,
  builderAnswered: false,
  builderPool: [],
  builderPicked: []
};

function getSentenceDeck(level) {
  if (typeof SENTENCE_DATA !== 'undefined' && SENTENCE_DATA[level]) {
    return SENTENCE_DATA[level];
  }
  return [];
}

// ---- SENTENCE CARDS ----
function renderSentenceCards() {
  const deck = getSentenceDeck(vocabState.level);
  const modeContainer = document.getElementById('sentence-card-mode');
  if (!modeContainer) return;

  if (!deck.length) {
    modeContainer.innerHTML = `<div class="card" style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">💬</div><div>Chưa có câu mẫu cho cấp độ ${vocabState.level}.</div></div>`;
    return;
  }

  sentenceState.idx = ((sentenceState.idx % deck.length) + deck.length) % deck.length;
  const item = deck[sentenceState.idx];

  // Badges & Counters
  setElText('sentence-level-badge', item.level || vocabState.level);
  setElText('sentence-topic-badge', item.topic || 'Sentence Pattern');
  setElText('sentence-card-counter', `${sentenceState.idx + 1} / ${deck.length}`);

  // Front face
  setElText('sentence-pattern-tag', item.pattern || 'Grammar Pattern');
  setElText('sentence-front-text', item.sentence);

  // Back face
  setElText('sentence-back-meaning', item.meaning);
  setElText('sentence-back-pattern', item.pattern || 'S + V + O');

  // Breakdown list
  const breakdownContainer = document.getElementById('sentence-back-breakdown');
  if (breakdownContainer) {
    if (item.breakdown && item.breakdown.length) {
      breakdownContainer.innerHTML = item.breakdown.map(b => `
        <div class="sentence-breakdown-item">
          <span class="breakdown-part">${escapeHtml(b.part)}</span>
          <span class="breakdown-role">${escapeHtml(b.role)}</span>
        </div>
      `).join('');
    } else {
      breakdownContainer.innerHTML = `<div style="font-size:12px;color:var(--text-dim);font-style:italic;">Chưa có phân tích chi tiết.</div>`;
    }
  }

  // Ensure card front face is shown initially
  sentenceState.flipped = false;
  const inner = document.getElementById('sentence-card-inner');
  if (inner) inner.classList.remove('flipped');
}

function flipSentenceCard() {
  sentenceState.flipped = !sentenceState.flipped;
  const inner = document.getElementById('sentence-card-inner');
  if (inner) inner.classList.toggle('flipped', sentenceState.flipped);
}

function speakSentenceCurrent(rate = 1.0) {
  const deck = getSentenceDeck(vocabState.level);
  if (!deck.length) return;
  const item = deck[sentenceState.idx % deck.length];
  if (!item || !item.sentence) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(item.sentence);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }
}

function sentenceNav(dir) {
  const deck = getSentenceDeck(vocabState.level);
  if (!deck.length) return;
  sentenceState.idx += dir;
  renderSentenceCards();
}

function rateSentenceSM2Action(quality) {
  const deck = getSentenceDeck(vocabState.level);
  if (!deck.length) return;
  const item = deck[sentenceState.idx % deck.length];

  if (typeof rateVocabSM2 === 'function' && item && item.id) {
    // Offset id so sentence SRS history doesn't collide with single vocab word ids
    const result = rateVocabSM2(100000 + item.id, quality);
    if (quality >= 3) {
      playSound('correct');
      showToast(`Đã ôn câu · Lần tới sau ${result ? result.interval : 3} ngày`, 'success');
    } else {
      playSound('wrong');
      showToast(`Đã đánh dấu câu để ôn lại sớm!`, 'warning');
    }
  }

  const xpGain = quality >= 3 ? 15 : 5;
  addXP(xpGain);
  if (quality >= 3) addCombo();
  else resetCombo();

  updateVocabStats();
  updateSidebar();

  setTimeout(() => {
    sentenceNav(1);
  }, 350);
}

// ---- SENTENCE BUILDER (Ghép câu) ----
function renderSentenceBuilder() {
  const deck = getSentenceDeck(vocabState.level);
  const modeContainer = document.getElementById('sentence-builder-mode');
  if (!modeContainer) return;

  if (!deck.length) {
    modeContainer.innerHTML = `<div class="card" style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">🧩</div><div>Chưa có câu ghép cho cấp độ ${vocabState.level}.</div></div>`;
    return;
  }

  sentenceState.builderIdx = ((sentenceState.builderIdx % deck.length) + deck.length) % deck.length;
  const item = deck[sentenceState.builderIdx];

  sentenceState.builderAnswered = false;
  sentenceState.builderPicked = [];

  // Update badges
  setElText('builder-level-badge', item.level || vocabState.level);
  setElText('builder-topic-badge', item.topic || 'Sentence Builder');
  setElText('builder-counter-display', `Câu ${sentenceState.builderIdx + 1} / ${deck.length}`);
  setElText('builder-score-display', `Đúng: ${sentenceState.builderScore} / ${sentenceState.builderTotal}`);

  // Meaning display
  setElText('builder-meaning-display', item.meaning);

  // Prepare shuffled word pool
  let rawWords = [];
  if (item.words && item.words.length) {
    rawWords = [...item.words];
  } else {
    rawWords = item.sentence.split(/\s+/);
  }

  // Shuffle word pool
  const pool = rawWords.map((word, idx) => ({
    id: idx,
    text: word,
    picked: false
  })).sort(() => Math.random() - 0.5);

  sentenceState.builderPool = pool;

  // Clear feedback & reset buttons
  const feedbackEl = document.getElementById('builder-feedback');
  if (feedbackEl) {
    feedbackEl.className = 'hidden';
    feedbackEl.innerHTML = '';
  }
  const nextBtn = document.getElementById('builder-next-btn');
  if (nextBtn) nextBtn.classList.add('hidden');
  const checkBtn = document.getElementById('builder-check-btn');
  if (checkBtn) checkBtn.classList.remove('hidden');

  renderBuilderSlots();
}

function renderBuilderSlots() {
  const targetSlot = document.getElementById('builder-target-slot');
  const poolSlot = document.getElementById('builder-pool-slot');
  if (!targetSlot || !poolSlot) return;

  // Render Target Slot (Picked words)
  if (sentenceState.builderPicked.length === 0) {
    targetSlot.innerHTML = `<span class="builder-placeholder" id="builder-target-placeholder">Bấm vào các từ bên dưới để ghép câu...</span>`;
    targetSlot.classList.remove('active');
  } else {
    targetSlot.classList.add('active');
    targetSlot.innerHTML = sentenceState.builderPicked.map((item, pickedIdx) => `
      <button class="word-chip target-chip" onclick="removeBuilderChip(${pickedIdx})" ${sentenceState.builderAnswered ? 'disabled' : ''}>
        ${escapeHtml(item.text)}
      </button>
    `).join('');
  }

  // Render Pool Slot
  poolSlot.innerHTML = sentenceState.builderPool.map(item => `
    <button class="word-chip ${item.picked ? 'picked' : ''}" 
      onclick="pickBuilderChip(${item.id})" 
      ${item.picked || sentenceState.builderAnswered ? 'disabled' : ''}>
      ${escapeHtml(item.text)}
    </button>
  `).join('');
}

function pickBuilderChip(chipId) {
  if (sentenceState.builderAnswered) return;
  const chip = sentenceState.builderPool.find(c => c.id === chipId);
  if (!chip || chip.picked) return;

  chip.picked = true;
  sentenceState.builderPicked.push({ id: chip.id, text: chip.text });
  renderBuilderSlots();
}

function removeBuilderChip(pickedIndex) {
  if (sentenceState.builderAnswered) return;
  if (pickedIndex < 0 || pickedIndex >= sentenceState.builderPicked.length) return;

  const [removed] = sentenceState.builderPicked.splice(pickedIndex, 1);
  const poolItem = sentenceState.builderPool.find(c => c.id === removed.id);
  if (poolItem) poolItem.picked = false;

  renderBuilderSlots();
}

function resetSentenceBuilderCurrent() {
  if (sentenceState.builderAnswered) return;
  sentenceState.builderPicked = [];
  sentenceState.builderPool.forEach(c => c.picked = false);
  renderBuilderSlots();
}

function speakBuilderHint() {
  const deck = getSentenceDeck(vocabState.level);
  if (!deck.length) return;
  const item = deck[sentenceState.builderIdx % deck.length];
  if (!item || !item.sentence) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(item.sentence);
    u.lang = 'en-US';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
}

function checkSentenceBuilder() {
  if (sentenceState.builderAnswered) return;

  if (sentenceState.builderPicked.length === 0) {
    showToast('⚠️ Vui lòng chọn các từ để ghép thành câu trước!', 'warning');
    return;
  }

  const deck = getSentenceDeck(vocabState.level);
  if (!deck.length) return;
  const item = deck[sentenceState.builderIdx % deck.length];

  sentenceState.builderAnswered = true;
  sentenceState.builderTotal++;

  // Normalize comparison
  const userSentence = sentenceState.builderPicked.map(c => c.text).join(' ').trim();
  const cleanUser = userSentence.replace(/[.,!?;:]/g, '').toLowerCase().replace(/\s+/g, ' ');
  const cleanTarget = item.sentence.replace(/[.,!?;:]/g, '').toLowerCase().replace(/\s+/g, ' ');

  const isCorrect = cleanUser === cleanTarget;
  const feedbackEl = document.getElementById('builder-feedback');
  const nextBtn = document.getElementById('builder-next-btn');
  const checkBtn = document.getElementById('builder-check-btn');

  if (isCorrect) {
    sentenceState.builderScore++;
    playSound('correct');
    addCombo();
    const xp = getXPWithCombo(20);
    addXP(xp);
    updateSidebar();

    if (feedbackEl) {
      feedbackEl.className = 'card mt-16';
      feedbackEl.style.background = 'rgba(16, 185, 129, 0.08)';
      feedbackEl.style.border = '1.5px solid var(--success)';
      feedbackEl.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:22px;">🎉</span>
          <strong style="color:var(--success);font-size:16px;">Chính xác tuyệt đối! (+${xp} XP)</strong>
        </div>
        <div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:6px;">${escapeHtml(item.sentence)}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:10px;"><em>${escapeHtml(item.meaning)}</em></div>
        <div style="font-size:12px;font-weight:600;color:var(--primary-light);background:rgba(124,58,237,0.1);padding:6px 12px;border-radius:6px;border:1px solid rgba(124,58,237,0.2);">
          Cấu trúc: ${escapeHtml(item.pattern || '')}
        </div>
      `;
    }
  } else {
    playSound('wrong');
    resetCombo();
    loseHeart();

    if (feedbackEl) {
      feedbackEl.className = 'card mt-16';
      feedbackEl.style.background = 'rgba(239, 68, 68, 0.08)';
      feedbackEl.style.border = '1.5px solid var(--danger)';
      feedbackEl.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:22px;">❌</span>
          <strong style="color:var(--danger);font-size:16px;">Chưa chính xác</strong>
        </div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">Câu của bạn:</div>
        <div style="font-size:14px;color:var(--danger);text-decoration:line-through;margin-bottom:10px;">${escapeHtml(userSentence)}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">Đáp án đúng:</div>
        <div style="font-size:16px;font-weight:700;color:var(--success);margin-bottom:6px;">${escapeHtml(item.sentence)}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:10px;"><em>${escapeHtml(item.meaning)}</em></div>
        <div style="font-size:12px;font-weight:600;color:var(--primary-light);background:rgba(124,58,237,0.1);padding:6px 12px;border-radius:6px;border:1px solid rgba(124,58,237,0.2);">
          Cấu trúc: ${escapeHtml(item.pattern || '')}
        </div>
      `;
    }
  }

  setElText('builder-score-display', `Đúng: ${sentenceState.builderScore} / ${sentenceState.builderTotal}`);

  if (checkBtn) checkBtn.classList.add('hidden');
  if (nextBtn) nextBtn.classList.remove('hidden');

  renderBuilderSlots();
}

function nextSentenceBuilder() {
  sentenceState.builderIdx++;
  renderSentenceBuilder();
}

// ============================================================
// GRAMMAR
// ============================================================
const grammarState = { level: 'A1', questions: [], qIdx: 0, score: 0, answered: false };

function setGrammarLevel(level) {
  grammarState.level = level;
  document.querySelectorAll('.grammar-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === level));
  if (typeof GRAMMAR_DATA === 'undefined') return;
  grammarState.questions = GRAMMAR_DATA.filter(q => q.level === level).sort(()=>Math.random()-0.5);
  grammarState.qIdx = 0; grammarState.score = 0;
  renderGrammarQuestion();
}

function renderGrammarQuestion() {
  const qs = grammarState.questions;
  if (!qs.length) {
    const area = document.getElementById('grammar-question-area');
    if (area) area.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">No grammar exercises for ${grammarState.level} yet.</div>`;
    return;
  }
  if (grammarState.qIdx >= qs.length) { finishGrammar(); return; }
  const q = qs[grammarState.qIdx];

  const prog = document.getElementById('grammar-progress-fill');
  if (prog) prog.style.width = `${(grammarState.qIdx/qs.length)*100}%`;
  setElText('grammar-counter', `${grammarState.qIdx+1}/${qs.length}`);
  setElText('grammar-topic-tag', q.topic || 'Grammar');
  setElText('grammar-instruction', q.instruction || '');
  setElText('grammar-question-text', q.question);

  const levelTag = document.getElementById('grammar-level-tag');
  if (levelTag) { levelTag.textContent = q.level; levelTag.className = `level-badge level-${q.level}`; }

  const fillInput = document.getElementById('grammar-fill');
  const submitBtn = document.getElementById('grammar-submit-btn');
  const optContainer = document.getElementById('grammar-options');

  if (q.type === 'fill_blank') {
    optContainer && (optContainer.innerHTML = '');
    fillInput?.classList.remove('hidden');
    if (fillInput) { fillInput.value = ''; fillInput.placeholder = q.placeholder || 'Type your answer...'; fillInput.onkeydown = (e) => { if(e.key==='Enter') submitGrammarFill(); }; }
    submitBtn?.classList.remove('hidden');
  } else {
    fillInput?.classList.add('hidden');
    submitBtn?.classList.add('hidden');
    if (optContainer) {
      optContainer.innerHTML = q.options.map((opt, i) =>
        `<button class="option-btn" onclick="answerGrammar(${i})">${opt}</button>`
      ).join('');
    }
  }
  document.getElementById('grammar-explanation')?.classList.add('hidden');
  document.getElementById('grammar-next-btn')?.classList.add('hidden');
  grammarState.answered = false;
}

function submitGrammarFill() {
  if (grammarState.answered) return;
  const fillInput = document.getElementById('grammar-fill');
  if (!fillInput?.value.trim()) return;
  const q = grammarState.questions[grammarState.qIdx];
  const userAns = fillInput.value.trim().toLowerCase();
  const correct = Array.isArray(q.answer) ? q.answer.map(a=>a.toLowerCase()).includes(userAns) : userAns === q.answer.toString().toLowerCase();

  grammarState.answered = true;
  fillInput.style.borderColor = correct ? 'var(--success)' : 'var(--danger)';
  fillInput.style.color = correct ? '#34D399' : '#FCA5A5';

  if (correct) { grammarState.score++; addCombo(); playSound('correct'); }
  else { loseHeart(); resetCombo(); playSound('wrong'); }

  const expEl = document.getElementById('grammar-explanation');
  if (expEl) {
    expEl.className = 'explanation-box';
    expEl.classList.remove('hidden');
    expEl.innerHTML = `${correct?'✅ Correct!':'❌ Incorrect.'} ${q.explanation||''} ${!correct&&q.answer?`<br><strong>Answer: ${Array.isArray(q.answer)?q.answer.join(' / '):q.answer}</strong>`:''}`;
  }
  document.getElementById('grammar-submit-btn')?.classList.add('hidden');
  document.getElementById('grammar-next-btn')?.classList.remove('hidden');
}

function answerGrammar(idx) {
  if (grammarState.answered) return;
  grammarState.answered = true;
  const q = grammarState.questions[grammarState.qIdx];
  const btns = document.querySelectorAll('#grammar-options .option-btn');
  btns.forEach((b,i) => { b.disabled=true; if(i===q.answer) b.classList.add('correct'); else if(i===idx) b.classList.add('wrong'); });

  const correct = idx === q.answer;
  if (correct) { grammarState.score++; addCombo(); playSound('correct'); }
  else { loseHeart(); resetCombo(); playSound('wrong'); }

  const expEl = document.getElementById('grammar-explanation');
  if (expEl && q.explanation) { expEl.className='explanation-box'; expEl.classList.remove('hidden'); expEl.textContent = `${correct?'✅':' ❌'} ${q.explanation}`; }
  document.getElementById('grammar-next-btn')?.classList.remove('hidden');
}

function grammarNext() {
  grammarState.qIdx++;
  if (grammarState.qIdx >= grammarState.questions.length) finishGrammar();
  else renderGrammarQuestion();
}

function finishGrammar() {
  const total = grammarState.questions.length;
  recordScore('grammar', grammarState.score, total);
  checkAndAwardBadges(); updateSidebar();
  const area = document.getElementById('grammar-question-area');
  if (area) {
    const pct = Math.round((grammarState.score/total)*100);
    const xp = getXPWithCombo(grammarState.score*5+5);
    area.innerHTML = `<div style="text-align:center;padding:40px 0;">
      <div style="font-size:56px;margin-bottom:12px;">${pct>=80?'🎓':pct>=50?'📚':'✏️'}</div>
      <div style="font-family:var(--font-display);font-size:48px;font-weight:900;background:linear-gradient(135deg,#10B981,#34D399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${pct}%</div>
      <div style="color:var(--text-muted);margin:8px 0 24px;">${grammarState.score}/${total} correct · +${xp} XP</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="setGrammarLevel('${grammarState.level}')">🔄 Try again</button>
        <button class="btn btn-primary" onclick="navigate('dashboard')">🏠 Dashboard</button>
      </div></div>`;
    showXPPopup(xp);
  }
}

// ============================================================
// PROGRESS
// ============================================================
function renderProgress() {
  const profile = getProfile();
  const sp = getSkillProgress();
  const { progress, nextLevel } = getLevelXP(profile);

  document.getElementById('prog-level-value')?.textContent && (document.getElementById('prog-level-value').textContent = profile.level);
  document.getElementById('prog-xp-value')?.textContent && (document.getElementById('prog-xp-value').textContent = profile.xp);
  document.getElementById('prog-level-bar')?.style && (document.getElementById('prog-level-bar').style.width = `${progress}%`);
  document.getElementById('prog-next-level')?.textContent && (document.getElementById('prog-next-level').textContent = nextLevel || 'Max!');
  document.getElementById('prog-streak')?.textContent && (document.getElementById('prog-streak').textContent = `${profile.streak} days 🔥`);
  document.getElementById('prog-vocab-mastered')?.textContent && (document.getElementById('prog-vocab-mastered').textContent = sp.vocabulary.mastered.length);
  document.getElementById('prog-vocab-reviewing')?.textContent && (document.getElementById('prog-vocab-reviewing').textContent = sp.vocabulary.reviewing.length);
  document.getElementById('prog-writing-count')?.textContent && (document.getElementById('prog-writing-count').textContent = sp.writing.drafts.length);

  // Weekly chart
  const weeklyEl = document.getElementById('weekly-chart');
  if (weeklyEl) {
    const data = getWeeklyXP();
    const maxXP = Math.max(...data.map(d=>d.xp), 10);
    weeklyEl.innerHTML = data.map(d => `
      <div class="weekly-bar-wrap">
        <div class="weekly-bar-xp">${d.xp>0?d.xp:''}</div>
        <div class="weekly-bar-outer">
          <div class="weekly-bar-inner" style="height:${Math.max((d.xp/maxXP)*130,2)}px"></div>
        </div>
        <div class="weekly-bar-label">${d.label}</div>
      </div>`).join('');
  }

  // Skill scores
  const skillGrid = document.getElementById('skill-score-grid');
  if (skillGrid) {
    const skills = [
      ['reading','📖','#6366F1'], ['listening','🎧','#06B6D4'],
      ['speaking','🗣️','#F59E0B'], ['grammar','🎓','#10B981'],
      ['shadowing','🎙️','#A78BFA'], ['writing','✍️','#34D399'],
    ];
    skillGrid.innerHTML = skills.map(([s, icon, color]) => {
      const score = getSkillScore(s);
      return `<div class="card" style="text-align:center;">
        <div style="font-size:28px;margin-bottom:8px;">${icon}</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:800;color:${color};">${score}%</div>
        <div style="font-size:12px;color:var(--text-dim);text-transform:capitalize;">${s}</div>
        <div class="skill-progress-bar" style="margin-top:8px;"><div class="skill-progress-fill" style="width:${score}%;background:${color};"></div></div>
      </div>`;
    }).join('');
  }

  // Badges
  const badgesEl = document.getElementById('badges-grid');
  if (badgesEl) {
    badgesEl.innerHTML = BADGES.map(b => {
      const earned = profile.badges.includes(b.id);
      return `<div class="badge-card ${earned?'earned':''}">
        <div class="badge-icon">${b.icon}</div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>
      </div>`;
    }).join('');
  }
}

// ============================================================
// SETUP & INIT
// ============================================================
function setupName() {
  const input = document.getElementById('setup-name-input');
  const name = input?.value.trim();
  if (!name) { showToast('Please enter your name!', 'warning', '⚠️'); return; }
  const profile = getProfile();
  profile.name = name;
  saveProfile(profile);
  document.getElementById('setup-modal')?.classList.add('hidden');
  document.getElementById('setup-modal').style.display = 'none';
  initApp();
}

function initApp() {
  initTheme();
  const profile = getProfile();
  // Update streak
  const today = new Date().toDateString();
  if (profile.lastStudyDate !== today) {
    const yesterday = new Date(Date.now()-86400000).toDateString();
    if (profile.lastStudyDate !== yesterday) profile.streak = 0;
    saveProfile(profile);
  }

  updateSidebar();
  const hash = location.hash.replace('#','') || 'dashboard';
  navigate(PAGES.includes(hash) ? hash : 'dashboard');
}

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const profile = getProfile();
  if (!profile.name || profile.name === 'Learner') {
    const modal = document.getElementById('setup-modal');
    if (modal) { modal.classList.remove('hidden'); modal.style.display='flex'; }
    document.getElementById('setup-name-input')?.focus();
  } else {
    initApp();
  }
});
