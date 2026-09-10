// ============================================================
// ENGLISHMASTER v3 - Dynamic Vocabulary Highlighter & Smart Reader
// ============================================================

const SAMPLE_ARTICLES = [
  {
    id: "habits",
    title: "The Psychology of Habit Formation",
    level: "B1",
    author: "Cognitive Science Journal",
    text: `Habits are fundamental behavioral routines that automate everyday decision making. According to modern psychological research, habits are driven by a neurological loop consisting of three distinct parts: a cue, a routine, and a reward. 

When you encounter an environmental cue, your brain evaluates potential consequences and initiates an action to accomplish a specific goal. Over time, as this neural pathway strengthens, cognitive effort decreases significantly. Understanding this feedback loop allows individuals to eliminate detrimental habits and cultivate productive behaviors that maintain long-term personal success.`
  },
  {
    id: "ai_ethics",
    title: "Neural Architectures and Cognitive Amplification",
    level: "B2",
    author: "Emerging Technologies Review",
    text: `Recent breakthroughs in machine learning have catalyzed a paradigm shift across industries. Large language models demonstrate remarkable capabilities in synthesizing complex textual narratives and generating creative ideas. 

However, engineers must contemplate the ethical dilemmas and ambiguities inherent in automated systems. As computational models become more autonomous, validating their reliability and mitigating algorithmic bias become fundamental responsibilities for technological pioneers.`
  },
  {
    id: "economics",
    title: "Sovereign Debt and Modern Geopolitical Economics",
    level: "C1",
    author: "Global Finance Quarterly",
    text: `The intricate complexities of contemporary macroeconomic policy require rigorous theoretical scrutiny. Sovereign nations often navigate delicate equilibria between fiscal stimulation and inflationary pressures. 

When international supply chains experience systemic disruptions, monetary authorities must implement prudent regulatory interventions to alleviate fiscal volatility without stifling long-term innovation and sustainable economic expansion.`
  }
];

let readerCurrentText = SAMPLE_ARTICLES[0].text;
let activeWordPopup = null;

function renderSmartReader() {
  const container = document.getElementById('page-reader');
  if (!container) return;

  const stats = analyzeTextMetrics(readerCurrentText);

  let html = `
    <div class="page-header">
      <div class="flex-between flex-wrap gap-16">
        <div>
          <h1 class="page-title">📖 Smart Reading Workspace</h1>
          <p class="page-subtitle">Paste any English article. Click any word to see its IPA, definition, and save to SRS Flashcards.</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="openPasteModal()">📋 Paste Custom Text</button>
          <button class="btn btn-primary btn-sm" onclick="saveAllUnsavedWords()">➕ Add All New to SRS</button>
        </div>
      </div>
    </div>

    <!-- Article Preset Selector Bar -->
    <div class="card-glass mb-20 p-16 flex-between flex-wrap gap-12">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span style="font-size:12px;font-weight:700;color:var(--text-dim);letter-spacing:1px;">CURATED ARTICLES:</span>
        ${SAMPLE_ARTICLES.map(a => `
          <button class="btn ${readerCurrentText === a.text ? 'btn-primary' : 'btn-secondary'} btn-sm" 
            onclick="loadSampleArticle('${a.id}')">
            ${a.title.split(' ')[0]}... (${a.level})
          </button>
        `).join('')}
      </div>

      <!-- CEFR Density Bar -->
      <div style="display:flex;align-items:center;gap:16px;font-size:12px;">
        <div>Words: <strong style="color:var(--text);">${stats.totalWords}</strong></div>
        <div>Unique: <strong style="color:var(--text);">${stats.uniqueWords}</strong></div>
        <div class="cefr-legend" style="display:flex;gap:6px;">
          <span class="cefr-dot" style="background:#6366F1;" title="A1-A2">A1/A2</span>
          <span class="cefr-dot" style="background:#10B981;" title="B1-B2">B1/B2</span>
          <span class="cefr-dot" style="background:#EC4899;" title="C1-C2">C1/C2</span>
        </div>
      </div>
    </div>

    <!-- Main Reader Workspace -->
    <div class="reader-workspace card">
      <div id="reader-rendered-text" class="reader-rendered-text">
        ${renderTokenizedText(readerCurrentText)}
      </div>
    </div>

    <!-- Floating Dictionary Popup Card -->
    <div id="reader-word-popup" class="reader-word-popup hidden"></div>
  `;

  container.innerHTML = html;
}

function loadSampleArticle(id) {
  const art = SAMPLE_ARTICLES.find(a => a.id === id);
  if (art) {
    readerCurrentText = art.text;
    renderSmartReader();
  }
}

function openPasteModal() {
  const custom = prompt("Paste your English text or article here:");
  if (custom && custom.trim().length > 10) {
    readerCurrentText = custom.trim();
    renderSmartReader();
    showToast("Imported article successfully!", "success");
  }
}

function analyzeTextMetrics(text) {
  const words = text.match(/[a-zA-Z'-]+/g) || [];
  const unique = new Set(words.map(w => w.toLowerCase()));
  return {
    totalWords: words.length,
    uniqueWords: unique.size
  };
}

function renderTokenizedText(text) {
  const paragraphs = text.split(/\n\s*\n/);
  return paragraphs.map(para => {
    // Tokenize words and punctuation
    const tokens = para.split(/(\s+|[.,!?;:"()]+)/);
    const renderedTokens = tokens.map(token => {
      const clean = token.toLowerCase().replace(/[^a-z'-]/g, '');
      if (!clean || clean.length < 2) {
        return escapeHtml(token);
      }

      const dictEntry = findWordInDictionary(clean);
      let levelClass = "level-unknown";
      let levelBadge = "";

      if (dictEntry) {
        const lvl = (dictEntry.level || 'A1').toUpperCase();
        levelClass = `level-tag-${lvl.toLowerCase()}`;
        levelBadge = lvl;
      }

      return `<span class="reader-interactive-word ${levelClass}" data-word="${escapeHtml(clean)}" onclick="handleReaderWordClick(this, '${escapeHtml(clean)}')">${escapeHtml(token)}</span>`;
    }).join('');

    return `<p class="reader-paragraph">${renderedTokens}</p>`;
  }).join('');
}

function handleReaderWordClick(element, word) {
  const popup = document.getElementById('reader-word-popup');
  if (!popup) return;

  const rect = element.getBoundingClientRect();
  const dictEntry = findWordInDictionary(word);
  const existingCustom = getCustomCards().some(c => c.word.toLowerCase() === word.toLowerCase());
  const cardSrs = getCardSM2(dictEntry ? dictEntry.id : word);

  let meaning = dictEntry ? dictEntry.meaning : "Tra từ điển / Nhấp để thêm nghĩa";
  let phonetic = dictEntry ? dictEntry.phonetic : `/${word}/`;
  let type = dictEntry ? dictEntry.type : "vocabulary";
  let level = dictEntry ? dictEntry.level : "Custom";
  let example = dictEntry ? dictEntry.example : `Usage in context: "...${word}..."`;

  popup.innerHTML = `
    <div class="popup-header flex-between mb-8">
      <div>
        <span class="popup-word">${word}</span>
        <span class="popup-phonetic">${phonetic}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="level-badge" style="font-size:11px;">${level}</span>
        <button class="popup-close-btn" onclick="closeWordPopup()">✕</button>
      </div>
    </div>
    <div class="popup-type mb-6">${type}</div>
    <div class="popup-meaning mb-8"><strong>Nghĩa:</strong> ${meaning}</div>
    <div class="popup-example mb-12"><em>"${example}"</em></div>
    
    <div class="popup-actions flex-between">
      <button class="btn btn-secondary btn-sm" onclick="speakAIText('${word}')">🔊 Listen</button>
      <button class="btn ${existingCustom ? 'btn-outline' : 'btn-success'} btn-sm" 
        onclick="addWordToSRSFromReader('${word}', '${escapeHtml(phonetic)}', '${escapeHtml(meaning)}', '${escapeHtml(example)}', '${level}')">
        ${existingCustom ? '✓ In Deck' : '➕ Save to SRS'}
      </button>
    </div>
  `;

  popup.classList.remove('hidden');

  // Positioning
  const scrollY = window.scrollY;
  const left = Math.min(Math.max(16, rect.left), window.innerWidth - 320);
  const top = rect.bottom + scrollY + 8;
  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

function closeWordPopup() {
  const popup = document.getElementById('reader-word-popup');
  if (popup) popup.classList.add('hidden');
}

function addWordToSRSFromReader(word, phonetic, meaning, example, level) {
  const res = addCustomVocabCard({
    word: word,
    phonetic: phonetic,
    type: 'reader-saved',
    meaning: meaning !== "Tra từ điển / Nhấp để thêm nghĩa" ? meaning : "New vocabulary from reader",
    example: example,
    level: ['A1','A2','B1','B2','C1','C2'].includes(level) ? level : 'B1',
    topic: 'smart-reader'
  });

  if (res.isNew) {
    showToast(`Added "${word}" to your SRS deck!`, 'success');
  } else {
    showToast(`"${word}" is already in your SRS deck!`, 'info');
  }
  closeWordPopup();
}

function saveAllUnsavedWords() {
  const words = readerCurrentText.match(/[a-zA-Z'-]+/g) || [];
  const unique = [...new Set(words.map(w => w.toLowerCase()))].filter(w => w.length >= 4);
  let added = 0;

  unique.forEach(w => {
    const dict = findWordInDictionary(w);
    if (dict) {
      const res = addCustomVocabCard({
        word: dict.word,
        phonetic: dict.phonetic,
        type: dict.type,
        meaning: dict.meaning,
        example: dict.example,
        level: dict.level || 'B1',
        topic: 'batch-import'
      });
      if (res.isNew) added++;
    }
  });

  showToast(`Added ${added} curated words into your SRS deck!`, 'success');
}

// Global click outside to dismiss popup
window.addEventListener('click', (e) => {
  const popup = document.getElementById('reader-word-popup');
  if (popup && !popup.classList.contains('hidden')) {
    if (!popup.contains(e.target) && !e.target.classList.contains('reader-interactive-word')) {
      popup.classList.add('hidden');
    }
  }
});
