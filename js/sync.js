// ============================================================
// ENGLISHMASTER - Two-way Progress Sync with Supabase
// ============================================================

const Sync = {
  syncTimeout: null,
  isSyncing: false,
  lastSyncTime: null,

  // Load cloud progress when user logs in
  async loadFromCloud(userId) {
    if (!window.supabaseClient || !userId) return;
    try {
      const { data, error } = await window.supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.warn('Could not load user progress from cloud:', error);
        return;
      }

      if (data) {
        const localProfile = getProfile();
        
        // Take cloud data directly - do NOT inherit stale local guest progress
        localProfile.level = data.level || 'A1';
        localProfile.xp = Number.isInteger(data.xp) ? data.xp : 0;
        localProfile.streak = Number.isInteger(data.streak) ? data.streak : 0;
        localProfile.lastStudyDate = data.last_study_date || null;
        localProfile.badges = Array.isArray(data.badges) ? data.badges : [];
        saveProfile(localProfile);

        // Skill progress
        const cl = data.completed_lessons || {};
        const vp = data.vocabulary_progress || {};
        const localSP = {
          reading: { completed: cl.reading || [], scores: [], totalScore: 0, attempts: 0 },
          writing: { completed: cl.writing || [], drafts: [] },
          listening: { completed: cl.listening || [], scores: [], totalScore: 0, attempts: 0 },
          speaking: { completed: cl.speaking || [], scores: [], totalScore: 0, attempts: 0 },
          shadowing: { completed: cl.shadowing || [], scores: [], totalScore: 0, attempts: 0 },
          vocabulary: { 
            learned: vp.learned || [], 
            reviewing: vp.reviewing || [], 
            mastered: vp.mastered || [], 
            lastSeen: {} 
          },
          grammar: { completed: cl.grammar || [], scores: [], totalScore: 0, attempts: 0 },
        };
        saveSkillProgress(localSP);

        // SRS Data
        saveSRSData(vp.srsData || {});

        // Quiz Scores
        Storage.set('quizScores', Array.isArray(data.quiz_scores) ? data.quiz_scores : []);

        // Update UI
        if (typeof updateSidebar === 'function') updateSidebar();
        const activePage = location.hash.replace('#','') || 'dashboard';
        if (typeof initPage === 'function') initPage(activePage);

        this.lastSyncTime = new Date();
        this.updateSyncBadge('synced');
      } else {
        // First time cloud user, start completely clean with 0 XP
        const localProfile = getProfile();
        localProfile.level = 'A1';
        localProfile.xp = 0;
        localProfile.streak = 0;
        localProfile.lastStudyDate = null;
        localProfile.badges = [];
        saveProfile(localProfile);

        const cleanSP = {
          reading: { completed: [], scores: [], totalScore: 0, attempts: 0 },
          writing: { completed: [], drafts: [] },
          listening: { completed: [], scores: [], totalScore: 0, attempts: 0 },
          speaking: { completed: [], scores: [], totalScore: 0, attempts: 0 },
          shadowing: { completed: [], scores: [], totalScore: 0, attempts: 0 },
          vocabulary: { learned: [], reviewing: [], mastered: [], lastSeen: {} },
          grammar: { completed: [], scores: [], totalScore: 0, attempts: 0 },
        };
        saveSkillProgress(cleanSP);
        saveSRSData({});
        Storage.set('quizScores', []);
        Storage.set('activityLog', []);

        await this.syncToCloud(true);
      }
    } catch (e) {
      console.error('Error in loadFromCloud:', e);
    }
  },

  // Reset entire progress to 0 XP and fresh slate
  async resetProgressToZero() {
    if (!confirm('Bạn có chắc chắn muốn xóa toàn bộ điểm, từ vựng và đưa tiến độ về 0 XP?')) return;
    
    const p = getProfile();
    p.level = 'A1';
    p.xp = 0;
    p.streak = 0;
    p.lastStudyDate = null;
    p.badges = [];
    saveProfile(p);

    const cleanSP = {
      reading: { completed: [], scores: [], totalScore: 0, attempts: 0 },
      writing: { completed: [], drafts: [] },
      listening: { completed: [], scores: [], totalScore: 0, attempts: 0 },
      speaking: { completed: [], scores: [], totalScore: 0, attempts: 0 },
      shadowing: { completed: [], scores: [], totalScore: 0, attempts: 0 },
      vocabulary: { learned: [], reviewing: [], mastered: [], lastSeen: {} },
      grammar: { completed: [], scores: [], totalScore: 0, attempts: 0 },
    };
    saveSkillProgress(cleanSP);
    saveSRSData({});
    Storage.set('quizScores', []);
    Storage.set('activityLog', []);

    if (Auth.user && window.supabaseClient) {
      await this.syncToCloud(true);
    }

    if (typeof updateSidebar === 'function') updateSidebar();
    const activePage = location.hash.replace('#','') || 'dashboard';
    if (typeof initPage === 'function') initPage(activePage);

    showToast('Đã đặt lại tiến độ về 0 XP và Level A1!', 'info', '🔄');
  },

  // Schedule auto sync with debounce (1.5s)
  queueSync() {
    if (!Auth.user || !window.supabaseClient) return;
    this.updateSyncBadge('syncing');
    if (this.syncTimeout) clearTimeout(this.syncTimeout);
    this.syncTimeout = setTimeout(() => {
      this.syncToCloud();
    }, 1500);
  },

  // Sync current state to Supabase
  async syncToCloud(immediate = false) {
    if (!Auth.user || !window.supabaseClient) return;
    if (this.isSyncing && !immediate) return;

    this.isSyncing = true;
    try {
      const profile = getProfile();
      const hearts = getHearts();
      const skillProgress = getSkillProgress();
      const srsData = getSRSData();
      const quizScores = Storage.get('quizScores', []);
      const activityLog = Storage.get('activityLog', []);

      // Structured vocabulary summary
      const vocabProgress = {
        mastered: skillProgress.vocabulary?.mastered || [],
        reviewing: skillProgress.vocabulary?.reviewing || [],
        learned: skillProgress.vocabulary?.learned || [],
        srsData: srsData
      };

      // Structured completed lessons
      const completedLessons = {
        reading: skillProgress.reading?.completed || [],
        listening: skillProgress.listening?.completed || [],
        grammar: skillProgress.grammar?.completed || [],
        writing: skillProgress.writing?.completed || [],
        shadowing: skillProgress.shadowing?.completed || [],
        speaking: skillProgress.speaking?.completed || []
      };

      const payload = {
        user_id: Auth.user.id,
        level: profile.level || 'A1',
        xp: profile.xp || 0,
        streak: profile.streak || 0,
        hearts: hearts.count || 5,
        last_study_date: profile.lastStudyDate || to_date_str(new Date()),
        quiz_scores: quizScores.slice(-100), // keep latest 100 quizzes
        vocabulary_progress: vocabProgress,
        completed_lessons: completedLessons,
        badges: profile.badges || [],
        activity_log: activityLog.slice(-90),
        raw_data: { skillProgress },
        updated_at: new Date().toISOString()
      };

      const { error } = await window.supabaseClient
        .from('user_progress')
        .upsert(payload, { onConflict: 'user_id' });

      if (error) throw error;

      this.lastSyncTime = new Date();
      this.updateSyncBadge('synced');
    } catch (err) {
      console.warn('Sync to Supabase warning:', err.message);
      this.updateSyncBadge('offline');
    } finally {
      this.isSyncing = false;
    }
  },

  // Record a dedicated quiz result and trigger sync
  recordQuizResult(skill, title, score, maxScore) {
    const list = Storage.get('quizScores', []);
    const pct = Math.round((score / Math.max(maxScore, 1)) * 100);
    const item = {
      id: `quiz_${Date.now()}_${Math.floor(Math.random()*1000)}`,
      skill: skill,
      title: title || `${skill.toUpperCase()} Quiz`,
      score: score,
      maxScore: maxScore,
      percentage: pct,
      passed: pct >= 60,
      completedAt: new Date().toISOString()
    };
    list.unshift(item);
    Storage.set('quizScores', list.slice(0, 200));

    // Also mark lesson completed if passed
    if (pct >= 60) {
      this.markLessonCompleted(skill, title);
    }

    this.queueSync();
    return item;
  },

  // Mark lesson ID as completed
  markLessonCompleted(skill, lessonId) {
    if (!skill || !lessonId) return;
    const sp = getSkillProgress();
    if (!sp[skill]) sp[skill] = { completed: [] };
    if (!sp[skill].completed) sp[skill].completed = [];
    if (!sp[skill].completed.includes(lessonId)) {
      sp[skill].completed.push(lessonId);
      saveSkillProgress(sp);
      this.queueSync();
    }
  },

  // Update cloud sync badge UI in sidebar
  updateSyncBadge(status) {
    const el = document.getElementById('cloud-sync-status');
    if (!el) return;
    if (!Auth.user) {
      el.style.display = 'none';
      return;
    }
    el.style.display = 'flex';
    if (status === 'syncing') {
      el.innerHTML = '<span class="sync-dot pulse"></span> Đồng bộ cloud...';
      el.className = 'cloud-sync-badge syncing';
    } else if (status === 'synced') {
      el.innerHTML = '<span class="sync-dot green"></span> Đã lưu Cloud';
      el.className = 'cloud-sync-badge synced';
    } else {
      el.innerHTML = '<span class="sync-dot orange"></span> Ngoại tuyến';
      el.className = 'cloud-sync-badge offline';
    }
  }
};

function to_date_str(d) {
  return d.toISOString().split('T')[0];
}

window.Sync = Sync;
