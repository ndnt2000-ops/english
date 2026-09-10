// ============================================================
// ENGLISHMASTER v3 - CEFR Learning Roadmap Module
// ============================================================

const CEFR_ROADMAP_DATA = {
  A1: {
    title: "A1 · Breakthrough (Beginner)",
    subtitle: "Everyday expressions, basic personal details, simple interactions.",
    color: "#6366F1",
    stations: [
      { id: "a1_1", title: "Greetings & Introductions", desc: "Say hello, exchange names and introduce yourself.", type: "vocabulary", target: "vocabulary", level: "A1", xp: 50, icon: "👋" },
      { id: "a1_2", title: "Present Simple & 'To Be'", desc: "Fundamental sentence structure: am, is, are, do, does.", type: "grammar", target: "grammar", level: "A1", xp: 60, icon: "⚙️" },
      { id: "a1_3", title: "Daily Routines & Time", desc: "Read and discuss waking up, eating, working, sleeping.", type: "reading", target: "reading", level: "A1", xp: 75, icon: "⏰" },
      { id: "a1_4", title: "First Spoken Sentences", desc: "Practice basic pronunciation and rhythm with voice STT.", type: "speaking", target: "speaking", level: "A1", xp: 80, icon: "🗣️" },
      { id: "a1_5", title: "Simple Cafe Ordering", desc: "Shadow a native speaker in a bakery and cafe scenario.", type: "shadowing", target: "shadowing", level: "A1", xp: 100, icon: "☕" }
    ]
  },
  A2: {
    title: "A2 · Waystage (Elementary)",
    subtitle: "Routine tasks, direct exchanges on familiar matters, simple descriptions.",
    color: "#06B6D4",
    stations: [
      { id: "a2_1", title: "Past Simple & Life Events", desc: "Talk about yesterday, past vacations, and memories.", type: "grammar", target: "grammar", level: "A2", xp: 80, icon: "⏳" },
      { id: "a2_2", title: "Travel, Directions & Transport", desc: "Navigating trains, airports, and asking for directions.", type: "vocabulary", target: "vocabulary", level: "A2", xp: 90, icon: "🚆" },
      { id: "a2_3", title: "A Weekend in London", desc: "Comprehension on stories and travel blogs with MCQ.", type: "reading", target: "reading", level: "A2", xp: 100, icon: "🗺️" },
      { id: "a2_4", title: "Listening: Train Station Announcements", desc: "Understand gate changes, delays, and ticket booking.", type: "listening", target: "listening", level: "A2", xp: 110, icon: "🎧" },
      { id: "a2_5", title: "Shadowing: Hotel Check-In", desc: "Match native tone and speed during hotel reception dialogues.", type: "shadowing", target: "shadowing", level: "A2", xp: 120, icon: "🏨" }
    ]
  },
  B1: {
    title: "B1 · Threshold (Intermediate)",
    subtitle: "Clear standard input, travel narratives, expressing opinions and plans.",
    color: "#10B981",
    stations: [
      { id: "b1_1", title: "Present Perfect & Duration", desc: "Distinguish between 'I did' and 'I have done'.", type: "grammar", target: "grammar", level: "B1", xp: 110, icon: "🔄" },
      { id: "b1_2", title: "Work & Modern Technology", desc: "Vocabulary for tech innovations, careers, and remote jobs.", type: "vocabulary", target: "vocabulary", level: "B1", xp: 120, icon: "💻" },
      { id: "b1_3", title: "Environmental Challenges", desc: "Read analytical texts on climate change and solutions.", type: "reading", target: "reading", level: "B1", xp: 130, icon: "🌱" },
      { id: "b1_4", title: "AI Practice: Job Interview Prep", desc: "Live contextual roleplay with instant grammar corrections.", type: "ai", target: "ai", level: "B1", xp: 150, icon: "🤖" },
      { id: "b1_5", title: "Shadowing: TED Talk Excerpt", desc: "Work on natural sentence stress, intonation and pauses.", type: "shadowing", target: "shadowing", level: "B1", xp: 140, icon: "🎙️" }
    ]
  },
  B2: {
    title: "B2 · Vantage (Upper Intermediate)",
    subtitle: "Complex texts, spontaneous interaction, fluent arguments and debate.",
    color: "#F59E0B",
    stations: [
      { id: "b2_1", title: "Conditionals & Nuanced Modals", desc: "Master mixed conditionals, wish, and speculative grammar.", type: "grammar", target: "grammar", level: "B2", xp: 140, icon: "⚖️" },
      { id: "b2_2", title: "Collocations & Phrasal Mastery", desc: "Sound idiomatic with natural word combinations.", type: "vocabulary", target: "vocabulary", level: "B2", xp: 150, icon: "🔗" },
      { id: "b2_3", title: "Smart Reading: Tech Editorial", desc: "Paste and dissect an editorial with the Smart Vocab Highlighter.", type: "reader", target: "reader", level: "B2", xp: 160, icon: "📰" },
      { id: "b2_4", title: "AI Roleplay: Startup Pitch & Negotiation", desc: "Simulate a business deal discussion with feedback on tone.", type: "ai", target: "ai", level: "B2", xp: 180, icon: "💼" },
      { id: "b2_5", title: "Opinion Essay Writing", desc: "Write structured arguments with thesis and rebuttal.", type: "writing", target: "writing", level: "B2", xp: 170, icon: "✍️" }
    ]
  },
  C1: {
    title: "C1 · Effective Operational Proficiency",
    subtitle: "Implicit meaning, fluent flexible expression for academic and professional aims.",
    color: "#EC4899",
    stations: [
      { id: "c1_1", title: "Inversion & Advanced Rhetoric", desc: "Rare structures: 'Rarely had he seen', 'Not only... but also'.", type: "grammar", target: "grammar", level: "C1", xp: 180, icon: "🏛️" },
      { id: "c1_2", title: "Academic & Analytical Lexicon", desc: "Discourse markers, nuanced synonyms, scholarly vocabulary.", type: "vocabulary", target: "vocabulary", level: "C1", xp: 190, icon: "📚" },
      { id: "c1_3", title: "Deep Reading: AI Philosophy", desc: "Analyze high-density philosophical and ethics papers.", type: "reading", target: "reading", level: "C1", xp: 200, icon: "🧠" },
      { id: "c1_4", title: "AI Debate Partner: Ethics of AI", desc: "Counter complex arguments in real-time with AI analysis.", type: "ai", target: "ai", level: "C1", xp: 220, icon: "⚔️" },
      { id: "c1_5", title: "Shadowing: Keynote Speech", desc: "Shadow leadership cadence, pitch changes, and persuasive pauses.", type: "shadowing", target: "shadowing", level: "C1", xp: 210, icon: "🎤" }
    ]
  },
  C2: {
    title: "C2 · Mastery (Near-Native Proficiency)",
    subtitle: "Effortless comprehension, subtle nuances of meaning, native-like spontaneity.",
    color: "#8B5CF6",
    stations: [
      { id: "c2_1", title: "Subtleties, Irony & Sarcasm", desc: "Decode cultural idioms, double meanings, and humor.", type: "vocabulary", target: "vocabulary", level: "C2", xp: 220, icon: "🎭" },
      { id: "c2_2", title: "Mastery Stylistics & Register", desc: "Switch fluidly from diplomatic prose to razor-sharp brevity.", type: "writing", target: "writing", level: "C2", xp: 230, icon: "🖋️" },
      { id: "c2_3", title: "Smart Reader: Scientific Journals", desc: "Import and break down complex research articles.", type: "reader", target: "reader", level: "C2", xp: 240, icon: "🔬" },
      { id: "c2_4", title: "AI Roleplay: Diplomatic Summit", desc: "Handle high-stakes ambiguous negotiations with AI evaluation.", type: "ai", target: "ai", level: "C2", xp: 260, icon: "🌐" },
      { id: "c2_5", title: "Grand CEFR Master Trophy", desc: "Complete all stations across all 6 CEFR bands to earn C2 crown.", type: "progress", target: "progress", level: "C2", xp: 500, icon: "👑" }
    ]
  }
};

function getRoadmapProgress() {
  return Storage.get('roadmapCompleted', []);
}

function markStationCompleted(stationId) {
  const list = getRoadmapProgress();
  if (!list.includes(stationId)) {
    list.push(stationId);
    Storage.set('roadmapCompleted', list);
    showToast("🎉 Roadmap Station Completed! +25 Bonus XP", "success");
    addXP(25);
    renderRoadmap();
  }
}

let activeRoadmapLevel = 'A1';

function setRoadmapLevel(lvl) {
  activeRoadmapLevel = lvl;
  renderRoadmap();
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-content');
  if (!container) return;

  const profile = getProfile();
  const completedStations = getRoadmapProgress();
  const currentLvlData = CEFR_ROADMAP_DATA[activeRoadmapLevel];

  // Header and Level Selector tabs
  let html = `
    <div class="roadmap-header-card card-glass mb-24">
      <div class="flex-between flex-wrap gap-16">
        <div>
          <div style="font-size:12px;font-weight:700;color:var(--primary-light);letter-spacing:1.5px;margin-bottom:4px;">CEFR LEARNING PATHWAY</div>
          <h2 style="font-family:var(--font-display);font-size:24px;font-weight:800;color:var(--text);">${currentLvlData.title}</h2>
          <p style="color:var(--text-muted);font-size:14px;margin-top:4px;">${currentLvlData.subtitle}</p>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="text-align:right;">
            <div style="font-size:11px;color:var(--text-dim);">LEVEL PROGRESS</div>
            <div style="font-size:18px;font-weight:800;color:${currentLvlData.color};">
              ${completedStations.filter(id => id.startsWith(activeRoadmapLevel.toLowerCase())).length} / ${currentLvlData.stations.length} Stations
            </div>
          </div>
        </div>
      </div>

      <!-- Level Pill Selectors -->
      <div class="roadmap-level-pills mt-16">
        ${['A1','A2','B1','B2','C1','C2'].map(lvl => {
          const isActive = lvl === activeRoadmapLevel;
          const isUserLevel = lvl === profile.level;
          const lvlStations = CEFR_ROADMAP_DATA[lvl].stations;
          const doneCount = completedStations.filter(id => id.startsWith(lvl.toLowerCase())).length;
          return `
            <button class="roadmap-pill ${isActive ? 'active' : ''}" onclick="setRoadmapLevel('${lvl}')" style="--pill-color:${CEFR_ROADMAP_DATA[lvl].color}">
              <span class="pill-badge">${lvl}</span>
              <span class="pill-info">${doneCount}/${lvlStations.length}</span>
              ${isUserLevel ? '<span class="pill-current-tag">YOU</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- The Interactive Trail Map -->
    <div class="roadmap-trail">
  `;

  currentLvlData.stations.forEach((st, idx) => {
    const isCompleted = completedStations.includes(st.id);
    const isAvailable = idx === 0 || completedStations.includes(currentLvlData.stations[idx - 1].id);
    const isNext = isAvailable && !isCompleted;

    let statusClass = isCompleted ? 'station-completed' : (isNext ? 'station-current' : 'station-locked');

    html += `
      <div class="roadmap-station-row ${idx % 2 === 1 ? 'row-reverse' : ''}">
        <div class="roadmap-node ${statusClass}" onclick="handleStationClick('${st.id}', '${st.target}', '${st.level}', ${isAvailable})">
          <div class="node-icon">${st.icon}</div>
          <div class="node-number">Station ${idx + 1}</div>
          ${isCompleted ? '<div class="node-check">✓</div>' : (isNext ? '<div class="node-pulse"></div>' : '')}
        </div>

        <div class="roadmap-card card ${statusClass}">
          <div class="flex-between gap-12 mb-8">
            <span class="content-meta-tag" style="background:rgba(124,58,237,0.15);color:var(--primary-light);font-size:11px;font-weight:700;">
              ${st.type.toUpperCase()}
            </span>
            <span style="font-size:12px;font-weight:700;color:var(--accent);">+${st.xp} XP</span>
          </div>
          <h3 style="font-size:16px;font-weight:700;margin-bottom:6px;font-family:var(--font-display);">${st.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.5;margin-bottom:14px;">${st.desc}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;color:var(--text-dim);">
              ${isCompleted ? '✅ Completed' : (isAvailable ? '🔓 Ready to study' : '🔒 Complete previous station')}
            </span>
            <button class="btn ${isCompleted ? 'btn-outline' : (isAvailable ? 'btn-primary' : 'btn-secondary')} btn-sm" 
              onclick="handleStationClick('${st.id}', '${st.target}', '${st.level}', ${isAvailable})" ${!isAvailable ? 'disabled' : ''}>
              ${isCompleted ? 'Review' : (isAvailable ? 'Start 🚀' : 'Locked')}
            </button>
          </div>
        </div>
      </div>
      ${idx < currentLvlData.stations.length - 1 ? '<div class="roadmap-connector-line"></div>' : ''}
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function handleStationClick(stationId, targetPage, level, isAvailable) {
  if (!isAvailable) {
    showToast("🔒 Please finish the previous station first!", "warning");
    return;
  }
  // Mark as completed on direct visit or prompt
  markStationCompleted(stationId);
  
  if (targetPage === 'vocabulary') {
    if (typeof setVocabLevel === 'function') setVocabLevel(level);
  } else if (targetPage === 'grammar') {
    if (typeof setGrammarLevel === 'function') setGrammarLevel(level);
  } else if (targetPage === 'reading') {
    const filter = document.getElementById('reading-level-filter');
    if (filter) { filter.value = level; }
  } else if (targetPage === 'speaking') {
    if (typeof setSpeakingLevel === 'function') setSpeakingLevel(level);
  } else if (targetPage === 'shadowing') {
    const filter = document.getElementById('shadowing-level-filter');
    if (filter) { filter.value = level; }
  }
  
  navigate(targetPage);
}
