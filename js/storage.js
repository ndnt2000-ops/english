// ============================================================
// ENGLISHMASTER v2 - Storage, Hearts, Combo, XP System
// ============================================================

const Storage = {
  get(key, defaultVal = null) {
    try {
      const val = localStorage.getItem(`em_${key}`);
      return val !== null ? JSON.parse(val) : defaultVal;
    } catch { return defaultVal; }
  },
  set(key, value) {
    try { localStorage.setItem(`em_${key}`, JSON.stringify(value)); } catch {}
  },
};

// ============================================================
// PROFILE
// ============================================================
function getProfile() {
  return Storage.get('profile', {
    name: 'Learner', level: 'A1', xp: 0,
    streak: 0, lastStudyDate: null, badges: [], joinDate: new Date().toISOString(),
  });
}
function saveProfile(p) {
  Storage.set('profile', p);
  if (window.Sync && typeof window.Sync.queueSync === 'function') {
    window.Sync.queueSync();
  }
}

const LEVEL_THRESHOLDS = { A1: 0, A2: 500, B1: 1200, B2: 2500, C1: 4500, C2: 7000 };
const LEVELS = ['A1','A2','B1','B2','C1','C2'];

function addXP(amount) {
  const profile = getProfile();
  const oldLevel = profile.level;
  profile.xp += amount;

  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (profile.xp >= LEVEL_THRESHOLDS[LEVELS[i]]) { profile.level = LEVELS[i]; break; }
  }

  const today = new Date().toDateString();
  if (profile.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    profile.streak = profile.lastStudyDate === yesterday ? profile.streak + 1 : 1;
    profile.lastStudyDate = today;
  }
  saveProfile(profile);

  // Log activity
  const log = Storage.get('activityLog', []);
  const dateKey = new Date().toISOString().split('T')[0];
  const todayLog = log.find(l => l.date === dateKey);
  if (todayLog) { todayLog.xp += amount; } else { log.push({ date: dateKey, xp: amount }); }
  Storage.set('activityLog', log.slice(-90));

  if (profile.level !== oldLevel) {
    setTimeout(() => showLevelUp(oldLevel, profile.level), 300);
  }
  return profile;
}

function getLevelXP(profile) {
  const idx = LEVELS.indexOf(profile.level);
  const currentMin = LEVEL_THRESHOLDS[profile.level];
  const nextLevel = LEVELS[idx + 1];
  const nextMin = nextLevel ? LEVEL_THRESHOLDS[nextLevel] : currentMin + 1000;
  const progress = Math.min(((profile.xp - currentMin) / (nextMin - currentMin)) * 100, 100);
  return { currentMin, nextMin, progress, nextLevel };
}

// ============================================================
// HEARTS SYSTEM
// ============================================================
function getHearts() {
  const data = Storage.get('hearts', { count: 5, lastRefill: new Date().toDateString() });
  // Refill hearts daily
  if (data.lastRefill !== new Date().toDateString()) {
    data.count = 5;
    data.lastRefill = new Date().toDateString();
    Storage.set('hearts', data);
  }
  return data;
}

function loseHeart() {
  const data = getHearts();
  if (data.count > 0) data.count--;
  Storage.set('hearts', data);
  updateHeartsUI();
  return data.count;
}

function gainHeart() {
  const data = getHearts();
  if (data.count < 5) data.count++;
  Storage.set('hearts', data);
  updateHeartsUI();
}

function refillHearts() {
  Storage.set('hearts', { count: 5, lastRefill: new Date().toDateString() });
  updateHeartsUI();
}

function updateHeartsUI() {
  const { count } = getHearts();
  const el = document.getElementById('hearts-display');
  if (!el) return;
  el.innerHTML = Array.from({length: 5}, (_, i) =>
    `<span class="heart ${i < count ? 'heart-full' : 'heart-empty'}">${i < count ? '❤️' : '🖤'}</span>`
  ).join('');
}

// ============================================================
// COMBO SYSTEM
// ============================================================
let comboState = { count: 0, multiplier: 1 };

function addCombo() {
  comboState.count++;
  if (comboState.count >= 5) comboState.multiplier = 3;
  else if (comboState.count >= 3) comboState.multiplier = 2;
  else comboState.multiplier = 1;
  updateComboUI();
}

function resetCombo() {
  comboState = { count: 0, multiplier: 1 };
  updateComboUI();
}

function updateComboUI() {
  const el = document.getElementById('combo-display');
  if (!el) return;
  if (comboState.count >= 2) {
    el.classList.remove('hidden');
    el.innerHTML = `⚡ <strong>${comboState.count}x Combo</strong> · ${comboState.multiplier}x XP`;
  } else {
    el.classList.add('hidden');
  }
}

function getXPWithCombo(base) {
  return base * comboState.multiplier;
}

// ============================================================
// SKILL PROGRESS
// ============================================================
function getSkillProgress() {
  return Storage.get('skillProgress', {
    reading: { completed: [], scores: [], totalScore: 0, attempts: 0 },
    writing: { completed: [], drafts: [] },
    listening: { completed: [], scores: [], totalScore: 0, attempts: 0 },
    speaking: { completed: [], scores: [], totalScore: 0, attempts: 0 },
    shadowing: { completed: [], scores: [], totalScore: 0, attempts: 0 },
    vocabulary: { learned: [], reviewing: [], mastered: [], lastSeen: {} },
    grammar: { completed: [], scores: [], totalScore: 0, attempts: 0 },
  });
}
function saveSkillProgress(sp) {
  Storage.set('skillProgress', sp);
  if (window.Sync && typeof window.Sync.queueSync === 'function') {
    window.Sync.queueSync();
  }
}

function getSkillScore(skill) {
  const sp = getSkillProgress();
  const s = sp[skill];
  if (!s || !s.attempts) return 0;
  return Math.round((s.totalScore / s.attempts));
}

function recordScore(skill, score, maxScore, title = null) {
  const sp = getSkillProgress();
  if (!sp[skill]) sp[skill] = { totalScore: 0, attempts: 0, completed: [] };
  sp[skill].totalScore = (sp[skill].totalScore || 0) + score;
  sp[skill].attempts = (sp[skill].attempts || 0) + maxScore;
  saveSkillProgress(sp);
  const xp = getXPWithCombo(Math.round((score / maxScore) * 20) + 5);

  if (window.Sync && typeof window.Sync.recordQuizResult === 'function') {
    window.Sync.recordQuizResult(skill, title || `${skill.toUpperCase()} Quiz`, score, maxScore);
  }

  return addXP(xp);
}

// ============================================================
// VOCABULARY PROGRESS (SuperMemo SM-2 Spaced Repetition)
// ============================================================
function getSRSData() {
  return Storage.get('srsData', {});
}

function saveSRSData(data) {
  Storage.set('srsData', data);
  if (window.Sync && typeof window.Sync.queueSync === 'function') {
    window.Sync.queueSync();
  }
}

function getCardSM2(wordId) {
  const allSRS = getSRSData();
  return allSRS[wordId] || {
    repetitions: 0,
    interval: 0, // in days
    efactor: 2.5, // Easiness Factor (default 2.5)
    nextReview: 0, // timestamp
    lastReviewed: 0,
    history: []
  };
}

// SM-2 Rating: 0 = Again (Blackout), 1 = Hard, 3 = Good, 5 = Easy
function rateVocabSM2(wordId, quality) {
  const allSRS = getSRSData();
  const card = getCardSM2(wordId);
  const now = Date.now();

  let reps = card.repetitions;
  let interval = card.interval;
  let ef = card.efactor;

  // EF calculation: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (ef < 1.3) ef = 1.3;

  if (quality < 3) {
    // Failed recall (Again or Hard fail)
    reps = 0;
    interval = 1; // repeat tomorrow or immediate
    resetCombo();
  } else {
    // Successful recall
    if (reps === 0) {
      interval = 1;
    } else if (reps === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ef);
    }
    reps++;
    addXP(getXPWithCombo(quality === 5 ? 5 : 3));
    addCombo();
  }

  // Next review date in ms
  const nextReview = now + (interval * 24 * 60 * 60 * 1000);

  allSRS[wordId] = {
    repetitions: reps,
    interval: interval,
    efactor: Math.round(ef * 100) / 100,
    nextReview: nextReview,
    lastReviewed: now,
    lastQuality: quality
  };
  saveSRSData(allSRS);

  // Sync with general skillProgress
  const sp = getSkillProgress();
  const v = sp.vocabulary;
  v.learned = v.learned.filter(id => id !== wordId);
  v.reviewing = v.reviewing.filter(id => id !== wordId);
  v.mastered = v.mastered.filter(id => id !== wordId);

  if (quality >= 3 && reps >= 2) {
    v.mastered.push(wordId);
  } else {
    v.reviewing.push(wordId);
  }
  if (!v.learned.includes(wordId)) v.learned.push(wordId);
  v.lastSeen = v.lastSeen || {};
  v.lastSeen[wordId] = now;
  saveSkillProgress(sp);

  return allSRS[wordId];
}

function getVocabStatus(wordId) {
  const card = getCardSM2(wordId);
  const now = Date.now();
  if (!card.lastReviewed) return 'new';
  if (card.nextReview <= now) return 'due';
  if (card.repetitions >= 2) return 'mastered';
  return 'learning';
}

function markVocabResult(wordId, correct) {
  return rateVocabSM2(wordId, correct ? 3 : 0);
}

// Custom Vocabulary Cards
function getCustomCards() {
  return Storage.get('customCards', []);
}

function addCustomVocabCard({ word, phonetic, type, meaning, example, level = 'A1', topic = 'custom' }) {
  const customCards = getCustomCards();
  const existing = customCards.find(c => c.word.toLowerCase() === word.toLowerCase());
  if (existing) {
    return { card: existing, isNew: false };
  }
  const newCard = {
    id: `custom_${Date.now()}_${Math.floor(Math.random()*1000)}`,
    word: word.trim(),
    phonetic: phonetic || '',
    type: type || 'word',
    meaning: meaning.trim(),
    example: example || '',
    level: level.toUpperCase(),
    topic: topic || 'reader-added',
    isCustom: true,
    addedAt: new Date().toISOString()
  };
  customCards.push(newCard);
  Storage.set('customCards', customCards);
  addXP(10);
  return { card: newCard, isNew: true };
}

// Get all cards for a level, combining standard data and custom cards
function getCardsForLevelWithCustom(level) {
  const standard = (typeof VOCABULARY_DATA !== 'undefined' && VOCABULARY_DATA[level]) ? [...VOCABULARY_DATA[level]] : [];
  const custom = getCustomCards().filter(c => c.level === level);
  return [...standard, ...custom];
}

// Find word anywhere in dictionary or custom list
function findWordInDictionary(term) {
  if (!term) return null;
  const clean = term.toLowerCase().replace(/[^a-z'-]/g, '').trim();
  if (!clean) return null;

  // 1. Search in custom cards first
  const customCards = getCustomCards();
  const matchCustom = customCards.find(c => c.word.toLowerCase() === clean);
  if (matchCustom) return matchCustom;

  // 2. Search in standard VOCABULARY_DATA
  if (typeof VOCABULARY_DATA !== 'undefined') {
    for (const lvl of ['A1','A2','B1','B2','C1','C2']) {
      const list = VOCABULARY_DATA[lvl] || [];
      const found = list.find(w => w.word.toLowerCase() === clean);
      if (found) return { ...found, level: lvl };
    }
  }
  return null;
}

// Get words that need review (spaced repetition)
function getWordsForReview(level) {
  const allWords = getCardsForLevelWithCustom(level);
  const now = Date.now();
  const allSRS = getSRSData();

  // Sort: due cards first, then learning, then new
  return allWords.sort((a, b) => {
    const srsA = allSRS[a.id];
    const srsB = allSRS[b.id];
    const dueA = srsA ? (srsA.nextReview <= now ? -1 : 1) : 0;
    const dueB = srsB ? (srsB.nextReview <= now ? -1 : 1) : 0;
    return dueA - dueB;
  });
}

function getDueCardsCount(level = null) {
  const levels = level ? [level] : ['A1','A2','B1','B2','C1','C2'];
  const now = Date.now();
  const allSRS = getSRSData();
  let count = 0;

  levels.forEach(lvl => {
    const cards = getCardsForLevelWithCustom(lvl);
    cards.forEach(c => {
      const srs = allSRS[c.id];
      if (srs && srs.nextReview <= now) count++;
    });
  });
  return count;
}

// ============================================================
// THEME MANAGEMENT (Dark / Light)
// ============================================================
function getTheme() {
  return Storage.get('theme', 'dark');
}

function setTheme(theme) {
  Storage.set('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const themeToggleText = document.getElementById('theme-toggle-text');
  if (themeToggleIcon) themeToggleIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  if (themeToggleText) themeToggleText.textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';
}

function toggleTheme() {
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  showToast(`Switched to ${next === 'light' ? 'Light' : 'Dark'} mode`, 'info');
  return next;
}

function initTheme() {
  setTheme(getTheme());
}

// ============================================================
// WRITING DRAFTS
// ============================================================
function saveWritingDraft(promptId, text) {
  const sp = getSkillProgress();
  const draft = { promptId, text, savedAt: new Date().toISOString(), wordCount: countWords(text) };
  const idx = sp.writing.drafts.findIndex(d => d.promptId === promptId);
  if (idx >= 0) sp.writing.drafts[idx] = draft; else sp.writing.drafts.push(draft);
  saveSkillProgress(sp);
}
function getWritingDraft(promptId) {
  return getSkillProgress().writing.drafts.find(d => d.promptId === promptId) || null;
}
function countWords(text) {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

// ============================================================
// ACTIVITY LOG
// ============================================================
function getWeeklyXP() {
  const log = Storage.get('activityLog', []);
  return Array.from({length: 7}, (_, i) => {
    const d = new Date(Date.now() - (6-i) * 86400000).toISOString().split('T')[0];
    const entry = log.find(l => l.date === d);
    return { date: d, xp: entry ? entry.xp : 0, label: new Date(d+'T00:00:00').toLocaleDateString('en-US',{weekday:'short'}) };
  });
}

// ============================================================
// BADGES
// ============================================================
const BADGES = [
  { id: 'first_read', icon: '📖', name: 'First Reader', desc: 'Complete your first reading' },
  { id: 'vocab_10', icon: '📝', name: 'Vocab Starter', desc: 'Master 10 vocabulary words' },
  { id: 'vocab_30', icon: '🧠', name: 'Word Master', desc: 'Master 30 vocabulary words' },
  { id: 'streak_3', icon: '🔥', name: 'On Fire!', desc: 'Study 3 days in a row' },
  { id: 'streak_7', icon: '⚡', name: 'Week Warrior', desc: 'Study 7 days in a row' },
  { id: 'shadow_5', icon: '🎙️', name: 'Shadow Speaker', desc: 'Complete 5 shadowing exercises' },
  { id: 'grammar_5', icon: '🎓', name: 'Grammar Guru', desc: 'Complete 5 grammar sessions' },
  { id: 'writer', icon: '✍️', name: 'Creative Writer', desc: 'Write 3 essays' },
  { id: 'listener', icon: '🎧', name: 'Active Listener', desc: 'Complete 3 listening lessons' },
  { id: 'combo_5', icon: '⚡', name: 'Combo King', desc: 'Get a 5x combo streak' },
  { id: 'level_a2', icon: '🥉', name: 'A2 Achiever', desc: 'Reach A2 level' },
  { id: 'level_b1', icon: '🥈', name: 'B1 Intermediate', desc: 'Reach B1 level' },
  { id: 'level_b2', icon: '🥇', name: 'B2 Upper', desc: 'Reach B2 level' },
  { id: 'level_c1', icon: '💎', name: 'C1 Advanced', desc: 'Reach C1 level' },
  { id: 'level_c2', icon: '👑', name: 'C2 Master', desc: 'Reach C2 level!' },
];

function checkAndAwardBadges() {
  const profile = getProfile();
  const sp = getSkillProgress();
  const earned = new Set(profile.badges);
  const newBadges = [];

  const checks = [
    ['first_read', sp.reading.completed.length >= 1],
    ['vocab_10', sp.vocabulary.mastered.length >= 10],
    ['vocab_30', sp.vocabulary.mastered.length >= 30],
    ['streak_3', profile.streak >= 3],
    ['streak_7', profile.streak >= 7],
    ['shadow_5', (sp.shadowing?.completed?.length || 0) >= 5],
    ['grammar_5', sp.grammar.attempts >= 5],
    ['writer', sp.writing.drafts.length >= 3],
    ['listener', sp.listening.completed.length >= 3],
    ['combo_5', comboState.count >= 5],
    ['level_a2', ['A2','B1','B2','C1','C2'].includes(profile.level)],
    ['level_b1', ['B1','B2','C1','C2'].includes(profile.level)],
    ['level_b2', ['B2','C1','C2'].includes(profile.level)],
    ['level_c1', ['C1','C2'].includes(profile.level)],
    ['level_c2', profile.level === 'C2'],
  ];

  checks.forEach(([id, condition]) => {
    if (condition && !earned.has(id)) {
      earned.add(id); newBadges.push(id);
    }
  });

  if (newBadges.length > 0) {
    profile.badges = [...earned];
    saveProfile(profile);
    newBadges.forEach(id => {
      const b = BADGES.find(x => x.id === id);
      if (b) setTimeout(() => showToast(`${b.icon} Badge earned: ${b.name}!`, 'success'), 500);
    });
  }
  return newBadges;
}

// ============================================================
// SOUND EFFECTS (Web Audio API - no files needed)
// ============================================================
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playSound(type) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(); osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'wrong') {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start(); osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'levelup') {
      [523,659,784,1047].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.3, ctx.currentTime + i*0.12);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i*0.12 + 0.3);
        o.start(ctx.currentTime + i*0.12);
        o.stop(ctx.currentTime + i*0.12 + 0.3);
      });
    }
  } catch(e) {}
}

// ============================================================
// LEVEL UP SCREEN
// ============================================================
function showLevelUp(oldLevel, newLevel) {
  playSound('levelup');
  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;`;
  overlay.innerHTML = `
    <div style="text-align:center;animation:fadeInUp 0.4s ease;">
      <div style="font-size:80px;margin-bottom:16px;animation:pulse 0.6s ease infinite;">🎊</div>
      <div style="font-family:'Outfit',sans-serif;font-size:16px;color:#94A3B8;letter-spacing:3px;margin-bottom:8px;">LEVEL UP!</div>
      <div style="font-family:'Outfit',sans-serif;font-size:56px;font-weight:900;background:linear-gradient(135deg,#A78BFA,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${newLevel}</div>
      <div style="color:#CBD5E1;margin:12px 0 32px;">You've reached <strong style="color:white;">${newLevel}</strong> level!</div>
      <button onclick="this.parentElement.parentElement.remove()" style="padding:14px 40px;background:linear-gradient(135deg,#7C3AED,#06B6D4);border:none;border-radius:50px;color:white;font-size:16px;font-weight:700;cursor:pointer;">Continue →</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay?.remove(), 5000);
}
