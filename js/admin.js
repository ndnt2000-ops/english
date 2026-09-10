// ============================================================
// ENGLISHMASTER - Admin Dashboard & Analytics
// ============================================================

const Admin = {
  learners: [],
  filteredLearners: [],
  selectedLearner: null,
  currentLevelFilter: 'all',
  searchQuery: '',
  sortBy: 'xp_desc',
  isLoading: false,

  async init() {
    if (!Auth.isAdmin) {
      this.renderAccessDenied();
      return;
    }
    await this.fetchLearners();
  },

  async fetchLearners() {
    if (!window.supabaseClient) return;
    this.isLoading = true;
    this.renderLoading();

    try {
      // Query profiles with their user_progress
      const { data, error } = await window.supabaseClient
        .from('profiles')
        .select(`
          id, email, full_name, avatar_url, role, created_at,
          user_progress (
            level, xp, streak, hearts, last_study_date,
            quiz_scores, vocabulary_progress, completed_lessons, badges, updated_at
          )
        `);

      if (error) throw error;

      // Transform rows
      this.learners = (data || []).map(p => {
        const prog = Array.isArray(p.user_progress) ? p.user_progress[0] : p.user_progress;
        const quizzes = Array.isArray(prog?.quiz_scores) ? prog.quiz_scores : [];
        const avgQuiz = quizzes.length > 0
          ? Math.round(quizzes.reduce((acc, q) => acc + (q.percentage || 0), 0) / quizzes.length)
          : 0;

        const vocab = prog?.vocabulary_progress || {};
        const masteredVocab = Array.isArray(vocab.mastered) ? vocab.mastered.length : 0;
        const reviewingVocab = Array.isArray(vocab.reviewing) ? vocab.reviewing.length : 0;

        const lessons = prog?.completed_lessons || {};
        const totalLessonsCompleted = ['reading','listening','grammar','writing','shadowing','speaking']
          .reduce((sum, k) => sum + (Array.isArray(lessons[k]) ? lessons[k].length : 0), 0);

        return {
          id: p.id,
          email: p.email || 'No email',
          fullName: p.full_name || p.email?.split('@')[0] || 'Học viên',
          avatarUrl: p.avatar_url || '',
          role: p.role || 'user',
          joinedAt: p.created_at,
          level: prog?.level || 'A1',
          xp: prog?.xp || 0,
          streak: prog?.streak || 0,
          lastStudyDate: prog?.last_study_date || '',
          lastUpdated: prog?.updated_at || p.created_at,
          quizzes: quizzes,
          avgQuizScore: avgQuiz,
          masteredVocab: masteredVocab,
          reviewingVocab: reviewingVocab,
          completedLessons: lessons,
          totalLessons: totalLessonsCompleted,
          badges: Array.isArray(prog?.badges) ? prog.badges : []
        };
      });

      this.applyFilters();
    } catch (err) {
      console.error('Error fetching admin learners:', err);
      this.renderError(err.message);
    } finally {
      this.isLoading = false;
    }
  },

  applyFilters() {
    let list = [...this.learners];

    // Level Filter
    if (this.currentLevelFilter !== 'all') {
      list = list.filter(l => l.level === this.currentLevelFilter);
    }

    // Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(l => 
        l.fullName.toLowerCase().includes(q) || 
        l.email.toLowerCase().includes(q)
      );
    }

    // Sorting
    list.sort((a, b) => {
      if (this.sortBy === 'xp_desc') return b.xp - a.xp;
      if (this.sortBy === 'xp_asc') return a.xp - b.xp;
      if (this.sortBy === 'quiz_desc') return b.avgQuizScore - a.avgQuizScore;
      if (this.sortBy === 'streak_desc') return b.streak - a.streak;
      if (this.sortBy === 'name_asc') return a.fullName.localeCompare(b.fullName);
      if (this.sortBy === 'recent') return new Date(b.lastUpdated || 0) - new Date(a.lastUpdated || 0);
      return 0;
    });

    this.filteredLearners = list;
    this.renderView();
  },

  renderLoading() {
    const container = document.getElementById('admin-content-area');
    if (!container) return;
    container.innerHTML = `
      <div style="text-align:center;padding:80px 20px;">
        <div class="loading-spinner" style="width:48px;height:48px;border-width:4px;margin:0 auto 20px;"></div>
        <div style="font-size:18px;font-weight:600;color:var(--text);">Đang tải dữ liệu học viên từ Supabase...</div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:6px;">Vui lòng đợi trong giây lát</div>
      </div>
    `;
  },

  renderError(msg) {
    const container = document.getElementById('admin-content-area');
    if (!container) return;
    container.innerHTML = `
      <div class="card" style="text-align:center;padding:50px 20px;border-color:rgba(239,68,68,0.3);">
        <div style="font-size:48px;margin-bottom:16px;">⚠️</div>
        <h2 style="color:#EF4444;font-size:20px;margin-bottom:8px;">Lỗi tải dữ liệu Quản trị</h2>
        <p style="color:var(--text-muted);max-width:500px;margin:0 auto 20px;">${msg || 'Không thể kết nối đến cơ sở dữ liệu'}</p>
        <button class="btn btn-primary btn-sm" onclick="Admin.fetchLearners()">🔄 Thử lại</button>
      </div>
    `;
  },

  renderAccessDenied() {
    const container = document.getElementById('admin-content-area');
    if (!container) return;
    container.innerHTML = `
      <div class="card" style="text-align:center;padding:60px 20px;max-width:550px;margin:40px auto;border-color:rgba(239,68,68,0.3);">
        <div style="font-size:56px;margin-bottom:16px;">🔒</div>
        <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:10px;">Quyền truy cập bị từ chối</h2>
        <p style="color:var(--text-muted);font-size:14px;line-height:1.6;margin-bottom:24px;">
          Trang này chỉ dành riêng cho <strong>Quản trị viên (Admin)</strong> của EnglishMaster.
          Nếu bạn là quản trị viên, hãy đăng nhập bằng tài khoản có vai trò <code>admin</code> trong bảng <code>profiles</code>.
        </p>
        <button class="btn btn-primary" onclick="openAuthModal('signin')">🔑 Đăng nhập tài khoản Admin</button>
      </div>
    `;
  },

  renderView() {
    const container = document.getElementById('admin-content-area');
    if (!container) return;

    // Calculate KPIs
    const totalUsers = this.learners.length;
    const activeUsers = this.learners.filter(l => l.streak > 0 || isRecent(l.lastStudyDate, 7)).length;
    
    let totalQuizzes = 0;
    let sumScores = 0;
    this.learners.forEach(l => {
      totalQuizzes += l.quizzes.length;
      l.quizzes.forEach(q => sumScores += (q.percentage || 0));
    });
    const avgScoreAll = totalQuizzes > 0 ? Math.round(sumScores / totalQuizzes) : 0;
    const totalMasteredVocab = this.learners.reduce((sum, l) => sum + l.masteredVocab, 0);

    container.innerHTML = `
      <!-- KPI CARDS -->
      <div class="admin-kpi-grid">
        <div class="admin-kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Tổng số Học viên</span>
            <span class="kpi-icon">👥</span>
          </div>
          <div class="kpi-value">${totalUsers}</div>
          <div class="kpi-desc">Tài khoản đăng ký trên hệ thống</div>
        </div>

        <div class="admin-kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Học viên Tích cực</span>
            <span class="kpi-icon">🔥</span>
          </div>
          <div class="kpi-value">${activeUsers}</div>
          <div class="kpi-desc">Học trong 7 ngày gần đây</div>
        </div>

        <div class="admin-kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Điểm Quiz Trung bình</span>
            <span class="kpi-icon">🎯</span>
          </div>
          <div class="kpi-value">${avgScoreAll}%</div>
          <div class="kpi-desc">Trên tổng số ${totalQuizzes} lượt làm quiz</div>
        </div>

        <div class="admin-kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Từ vựng Đã thuộc</span>
            <span class="kpi-icon">🧠</span>
          </div>
          <div class="kpi-value">${totalMasteredVocab.toLocaleString()}</div>
          <div class="kpi-desc">Tổng số từ master bởi học viên</div>
        </div>
      </div>

      <!-- FILTER & SEARCH BAR -->
      <div class="admin-toolbar">
        <div class="admin-search-box">
          <span style="font-size:16px;">🔍</span>
          <input type="text" id="admin-search-input" placeholder="Tìm theo tên học viên, email..." 
            value="${this.searchQuery}" oninput="Admin.onSearch(this.value)">
        </div>

        <div class="admin-filter-group">
          <select id="admin-sort-select" onchange="Admin.onSortChange(this.value)" class="admin-select">
            <option value="xp_desc" ${this.sortBy === 'xp_desc' ? 'selected' : ''}>Sắp xếp: XP cao nhất</option>
            <option value="xp_asc" ${this.sortBy === 'xp_asc' ? 'selected' : ''}>Sắp xếp: XP thấp nhất</option>
            <option value="quiz_desc" ${this.sortBy === 'quiz_desc' ? 'selected' : ''}>Sắp xếp: Điểm Quiz cao</option>
            <option value="streak_desc" ${this.sortBy === 'streak_desc' ? 'selected' : ''}>Sắp xếp: Chuỗi streak</option>
            <option value="name_asc" ${this.sortBy === 'name_asc' ? 'selected' : ''}>Sắp xếp: Tên (A-Z)</option>
            <option value="recent" ${this.sortBy === 'recent' ? 'selected' : ''}>Sắp xếp: Hoạt động gần đây</option>
          </select>

          <button class="btn btn-secondary btn-sm" onclick="Admin.fetchLearners()">🔄 Làm mới</button>
        </div>
      </div>

      <!-- LEVEL TABS -->
      <div class="admin-level-tabs">
        ${['all','A1','A2','B1','B2','C1','C2'].map(lvl => `
          <button class="admin-tab ${this.currentLevelFilter === lvl ? 'active' : ''}" 
            onclick="Admin.onLevelFilter('${lvl}')">
            ${lvl === 'all' ? `Tất cả (${totalUsers})` : `${lvl} (${this.learners.filter(l => l.level === lvl).length})`}
          </button>
        `).join('')}
      </div>

      <!-- TABLE OF LEARNERS -->
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Học viên</th>
              <th>Trình độ</th>
              <th>Tổng XP</th>
              <th>Streak</th>
              <th>Bài đã học</th>
              <th>Từ vựng Master</th>
              <th>Điểm Quiz TB</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            ${this.filteredLearners.length === 0 ? `
              <tr>
                <td colspan="8" style="text-align:center;padding:40px;color:var(--text-muted);">
                  Không tìm thấy học viên nào phù hợp với bộ lọc.
                </td>
              </tr>
            ` : this.filteredLearners.map(l => `
              <tr>
                <td>
                  <div class="learner-cell">
                    <div class="learner-avatar">
                      ${l.avatarUrl ? `<img src="${l.avatarUrl}" alt="${l.fullName}">` : l.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div class="learner-name">
                        ${l.fullName} 
                        ${l.role === 'admin' ? '<span class="admin-tag">Admin</span>' : ''}
                      </div>
                      <div class="learner-email">${l.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="level-badge level-${l.level}">${l.level}</span>
                </td>
                <td>
                  <strong style="color:var(--primary-light);">${l.xp.toLocaleString()}</strong> XP
                </td>
                <td>
                  <span style="color:var(--warning);font-weight:600;">🔥 ${l.streak}d</span>
                </td>
                <td>
                  <span class="badge-count">📚 ${l.totalLessons} bài</span>
                </td>
                <td>
                  <span class="badge-count" style="background:rgba(16,185,129,0.15);color:#10B981;">🧠 ${l.masteredVocab} từ</span>
                </td>
                <td>
                  <div class="quiz-score-indicator">
                    <div class="score-bar"><div class="score-bar-fill" style="width:${l.avgQuizScore}%;"></div></div>
                    <span style="font-weight:700;font-size:13px;">${l.avgQuizScore}%</span>
                    <span style="font-size:11px;color:var(--text-dim);">(${l.quizzes.length})</span>
                  </div>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="Admin.openLearnerDetail('${l.id}')">
                    👁️ Chi tiết
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  onSearch(query) {
    this.searchQuery = query;
    this.applyFilters();
  },

  onLevelFilter(lvl) {
    this.currentLevelFilter = lvl;
    this.applyFilters();
  },

  onSortChange(sort) {
    this.sortBy = sort;
    this.applyFilters();
  },

  // Detail Modal for a specific learner
  openLearnerDetail(userId) {
    const learner = this.learners.find(l => l.id === userId);
    if (!learner) return;
    this.selectedLearner = learner;

    const modal = document.getElementById('learner-detail-modal');
    const content = document.getElementById('learner-detail-content');
    if (!modal || !content) return;

    const cl = learner.completedLessons;
    const readingDone = Array.isArray(cl.reading) ? cl.reading.length : 0;
    const listeningDone = Array.isArray(cl.listening) ? cl.listening.length : 0;
    const grammarDone = Array.isArray(cl.grammar) ? cl.grammar.length : 0;
    const writingDone = Array.isArray(cl.writing) ? cl.writing.length : 0;
    const shadowingDone = Array.isArray(cl.shadowing) ? cl.shadowing.length : 0;
    const speakingDone = Array.isArray(cl.speaking) ? cl.speaking.length : 0;

    content.innerHTML = `
      <div class="learner-modal-header">
        <div style="display:flex;align-items:center;gap:16px;">
          <div class="learner-avatar-lg">
            ${learner.avatarUrl ? `<img src="${learner.avatarUrl}" alt="${learner.fullName}">` : learner.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:4px;">
              ${learner.fullName} ${learner.role === 'admin' ? '<span class="admin-tag">Admin</span>' : ''}
            </h2>
            <div style="color:var(--text-muted);font-size:14px;">📧 ${learner.email} · Tham gia: ${new Date(learner.joinedAt).toLocaleDateString('vi-VN')}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <span class="level-badge level-${learner.level}" style="font-size:16px;padding:6px 16px;">${learner.level}</span>
          <div style="font-size:13px;color:var(--primary-light);font-weight:700;margin-top:6px;">${learner.xp.toLocaleString()} XP</div>
        </div>
      </div>

      <!-- STATS OVERVIEW -->
      <div class="learner-stats-grid">
        <div class="stat-mini-box">
          <div class="stat-mini-label">Chuỗi học liên tục</div>
          <div class="stat-mini-val" style="color:var(--warning);">🔥 ${learner.streak} ngày</div>
        </div>
        <div class="stat-mini-box">
          <div class="stat-mini-label">Từ vựng đã master</div>
          <div class="stat-mini-val" style="color:#10B981;">🧠 ${learner.masteredVocab} từ</div>
        </div>
        <div class="stat-mini-box">
          <div class="stat-mini-label">Từ đang ôn (SRS)</div>
          <div class="stat-mini-val" style="color:#06B6D4;">📝 ${learner.reviewingVocab} từ</div>
        </div>
        <div class="stat-mini-box">
          <div class="stat-mini-label">Điểm Quiz Trung bình</div>
          <div class="stat-mini-val" style="color:var(--primary-light);">${learner.avgQuizScore}% (${learner.quizzes.length} bài)</div>
        </div>
      </div>

      <!-- LESSONS PROGRESS BY SKILL -->
      <div style="margin-top:24px;">
        <h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:12px;">📚 Tiến độ các Kỹ năng</h3>
        <div class="skills-progress-cards">
          <div class="skill-prog-card">
            <span class="spc-icon">📖</span>
            <div class="spc-info">
              <div class="spc-name">Reading</div>
              <div class="spc-count">${readingDone} bài hoàn thành</div>
            </div>
          </div>
          <div class="skill-prog-card">
            <span class="spc-icon">🎧</span>
            <div class="spc-info">
              <div class="spc-name">Listening</div>
              <div class="spc-count">${listeningDone} bài hoàn thành</div>
            </div>
          </div>
          <div class="skill-prog-card">
            <span class="spc-icon">🎓</span>
            <div class="spc-info">
              <div class="spc-name">Grammar</div>
              <div class="spc-count">${grammarDone} bài hoàn thành</div>
            </div>
          </div>
          <div class="skill-prog-card">
            <span class="spc-icon">✍️</span>
            <div class="spc-info">
              <div class="spc-name">Writing</div>
              <div class="spc-count">${writingDone} bài luận</div>
            </div>
          </div>
          <div class="skill-prog-card">
            <span class="spc-icon">🎙️</span>
            <div class="spc-info">
              <div class="spc-name">Shadowing</div>
              <div class="spc-count">${shadowingDone} bài luyện âm</div>
            </div>
          </div>
          <div class="skill-prog-card">
            <span class="spc-icon">🗣️</span>
            <div class="spc-info">
              <div class="spc-name">Speaking</div>
              <div class="spc-count">${speakingDone} bài hội thoại</div>
            </div>
          </div>
        </div>
      </div>

      <!-- QUIZ HISTORY TABLE -->
      <div style="margin-top:28px;">
        <h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:12px;">🎯 Lịch sử làm bài Quiz</h3>
        ${learner.quizzes.length === 0 ? `
          <div style="padding:20px;text-align:center;background:var(--bg-3);border-radius:12px;color:var(--text-muted);font-size:13px;">
            Học viên chưa làm bài quiz nào.
          </div>
        ` : `
          <div style="max-height:240px;overflow-y:auto;border-radius:12px;border:1px solid var(--border);">
            <table class="admin-table" style="margin:0;">
              <thead>
                <tr>
                  <th>Kỹ năng</th>
                  <th>Tiêu đề bài Quiz</th>
                  <th>Điểm số</th>
                  <th>Tỷ lệ đúng</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                ${learner.quizzes.map(q => `
                  <tr>
                    <td><span class="tag-skill">${q.skill || 'Quiz'}</span></td>
                    <td style="font-weight:600;">${q.title || 'Bài tập'}</td>
                    <td><strong>${q.score}</strong> / ${q.maxScore}</td>
                    <td>
                      <span class="score-pill ${q.percentage >= 80 ? 'high' : q.percentage >= 60 ? 'mid' : 'low'}">
                        ${q.percentage}%
                      </span>
                    </td>
                    <td style="color:var(--text-dim);font-size:12px;">
                      ${q.completedAt ? new Date(q.completedAt).toLocaleString('vi-VN') : 'Gần đây'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

      <!-- ADMIN CONTROLS FOR USER -->
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div style="font-size:13px;color:var(--text-muted);">
          ID: <code style="font-size:11px;background:var(--bg-3);padding:2px 6px;border-radius:4px;">${learner.id}</code>
        </div>
        <div style="display:flex;gap:10px;">
          ${learner.role !== 'admin' ? `
            <button class="btn btn-secondary btn-sm" onclick="Admin.toggleAdminRole('${learner.id}', 'admin')" style="color:var(--warning);">
              👑 Thăng làm Admin
            </button>
          ` : `
            <button class="btn btn-secondary btn-sm" onclick="Admin.toggleAdminRole('${learner.id}', 'user')">
              Chuyển thành User thường
            </button>
          `}
          <button class="btn btn-primary btn-sm" onclick="Admin.closeLearnerDetail()">Đóng</button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  },

  closeLearnerDetail() {
    const modal = document.getElementById('learner-detail-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  },

  async toggleAdminRole(userId, newRole) {
    if (!confirm(`Bạn có chắc chắn muốn đổi vai trò của người dùng này thành "${newRole}"?`)) return;
    try {
      const { error } = await window.supabaseClient
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;

      showToast(`Đã đổi vai trò thành ${newRole}!`, 'success', '👑');
      this.closeLearnerDetail();
      await this.fetchLearners();
    } catch (err) {
      showToast('Lỗi cập nhật vai trò: ' + err.message, 'wrong', '❌');
    }
  }
};

function isRecent(dateStr, days) {
  if (!dateStr) return false;
  try {
    const d = new Date(dateStr);
    const diff = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= days;
  } catch { return false; }
}

function renderAdminDashboard() {
  Admin.init();
}

window.Admin = Admin;
window.renderAdminDashboard = renderAdminDashboard;
