// ============================================================
// ENGLISHMASTER - Supabase Authentication & Profile Management
// ============================================================

const Auth = {
  user: null,
  profile: null,
  isAdmin: false,

  async initAuth() {
    if (!SupabaseConfig.isConfigured() || !window.supabaseClient) {
      this.updateUIForGuest();
      return;
    }

    try {
      // Listen to auth state changes
      window.supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
          this.user = session.user;
          await this.loadUserProfile(session.user);
          if (window.Sync) {
            await window.Sync.loadFromCloud(session.user.id);
          }
          if (event === 'SIGNED_IN') {
            showToast(`Welcome back, ${this.profile?.full_name || this.user.email}!`, 'success', '👋');
          }
        } else {
          this.user = null;
          this.profile = null;
          this.isAdmin = false;
          this.updateUIForGuest();
        }
      });

      // Check current session
      const { data: { session } } = await window.supabaseClient.auth.getSession();
      if (session && session.user) {
        this.user = session.user;
        await this.loadUserProfile(session.user);
        if (window.Sync) {
          await window.Sync.loadFromCloud(session.user.id);
        }
      } else {
        this.updateUIForGuest();
      }
    } catch (err) {
      console.error('Auth initialization error:', err);
      this.updateUIForGuest();
    }
  },

  async loadUserProfile(user) {
    if (!window.supabaseClient || !user) return;
    try {
      const { data, error } = await window.supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.warn('Could not fetch profile:', error.message);
      }

      if (data) {
        this.profile = data;
      } else {
        // Fallback or self-register profile if trigger didn't catch it
        const fallbackName = user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0];
        const newProf = {
          id: user.id,
          email: user.email,
          full_name: fallbackName,
          avatar_url: user.user_metadata?.avatar_url || '',
          role: 'user'
        };
        await window.supabaseClient.from('profiles').upsert(newProf);
        this.profile = newProf;
      }

      this.isAdmin = this.profile?.role === 'admin';
      this.updateUIForUser();
    } catch (e) {
      console.error('Profile load error:', e);
      this.updateUIForUser();
    }
  },

  updateUIForUser() {
    const name = this.profile?.full_name || this.user?.email?.split('@')[0] || 'Learner';
    const email = this.user?.email || '';
    const avatar = this.profile?.avatar_url;

    // Update Local profile storage as well
    const p = getProfile();
    p.name = name;
    saveProfile(p);

    // Update Sidebar user display
    const usernameEl = document.getElementById('sidebar-username');
    if (usernameEl) {
      usernameEl.innerHTML = `${name} ${this.isAdmin ? '<span class="admin-badge">Admin 👑</span>' : ''}`;
    }

    const avatarLetterEl = document.getElementById('user-avatar-letter');
    if (avatarLetterEl) {
      if (avatar) {
        avatarLetterEl.innerHTML = `<img src="${avatar}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      } else {
        avatarLetterEl.textContent = name.charAt(0).toUpperCase();
      }
    }

    // Auth Action Buttons in sidebar
    const authBox = document.getElementById('sidebar-auth-box');
    if (authBox) {
      authBox.innerHTML = `
        <div class="user-auth-status logged-in">
          <span class="auth-email" title="${email}">📧 ${email}</span>
          <button class="btn-auth-logout" onclick="Auth.signOut()" title="Sign Out">Đăng xuất</button>
        </div>
      `;
    }

    // Toggle Admin Navigation Item
    const adminNavBtn = document.getElementById('nav-item-admin');
    if (adminNavBtn) {
      if (this.isAdmin) {
        adminNavBtn.classList.remove('hidden');
        adminNavBtn.style.display = 'flex';
      } else {
        adminNavBtn.classList.add('hidden');
        adminNavBtn.style.display = 'none';
      }
    }

    // Close auth modal if open
    closeAuthModal();
  },

  updateUIForGuest() {
    this.user = null;
    this.profile = null;
    this.isAdmin = false;

    const authBox = document.getElementById('sidebar-auth-box');
    if (authBox) {
      authBox.innerHTML = `
        <div class="user-auth-status guest">
          <button class="btn-auth-login" onclick="openAuthModal('signin')">🔑 Đăng nhập / Đăng ký</button>
        </div>
      `;
    }

    const adminNavBtn = document.getElementById('nav-item-admin');
    if (adminNavBtn) {
      adminNavBtn.classList.add('hidden');
      adminNavBtn.style.display = 'none';
    }
  },

  // Auth Operations
  async signIn(email, password) {
    if (!window.supabaseClient) {
      openSupabaseSettingsModal();
      return { error: { message: 'Vui lòng cấu hình URL và Anon Key của Supabase trước!' } };
    }
    const res = await window.supabaseClient.auth.signInWithPassword({ email, password });
    return res;
  },

  async signUp(email, password, fullName) {
    if (!window.supabaseClient) {
      openSupabaseSettingsModal();
      return { error: { message: 'Vui lòng cấu hình URL và Anon Key của Supabase trước!' } };
    }
    const res = await window.supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });
    return res;
  },

  async signInWithGoogle() {
    if (!window.supabaseClient) {
      openSupabaseSettingsModal();
      return;
    }
    try {
      const redirectUrl = window.location.origin + window.location.pathname;
      const { error } = await window.supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl
        }
      });
      if (error) throw error;
    } catch (err) {
      showToast(err.message || 'Lỗi đăng nhập Google', 'wrong', '❌');
    }
  },

  async signOut() {
    if (!window.supabaseClient) return;
    try {
      await window.supabaseClient.auth.signOut();
      this.updateUIForGuest();
      showToast('Đã đăng xuất thành công!', 'info', '👋');
      // If currently on admin page, navigate to dashboard
      if (location.hash === '#admin') {
        navigate('dashboard');
      }
    } catch (err) {
      showToast('Lỗi đăng xuất: ' + err.message, 'wrong', '❌');
    }
  }
};

window.Auth = Auth;

// UI Modal Helper Functions
function openAuthModal(mode = 'signin') {
  if (!SupabaseConfig.isConfigured()) {
    openSupabaseSettingsModal();
    return;
  }
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  switchAuthTab(mode);
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

function switchAuthTab(mode) {
  const isSignIn = mode === 'signin';
  document.getElementById('auth-tab-signin')?.classList.toggle('active', isSignIn);
  document.getElementById('auth-tab-signup')?.classList.toggle('active', !isSignIn);
  
  const nameGroup = document.getElementById('auth-name-group');
  if (nameGroup) nameGroup.style.display = isSignIn ? 'none' : 'block';

  const submitBtn = document.getElementById('auth-submit-btn');
  if (submitBtn) {
    submitBtn.textContent = isSignIn ? '🚀 Đăng nhập' : '✨ Tạo tài khoản';
  }

  const switchHint = document.getElementById('auth-switch-hint');
  if (switchHint) {
    switchHint.innerHTML = isSignIn
      ? `Chưa có tài khoản? <a href="javascript:void(0)" onclick="switchAuthTab('signup')" style="color:var(--primary-light);font-weight:600;">Đăng ký ngay</a>`
      : `Đã có tài khoản? <a href="javascript:void(0)" onclick="switchAuthTab('signin')" style="color:var(--primary-light);font-weight:600;">Đăng nhập</a>`;
  }
  document.getElementById('auth-error-msg')?.classList.add('hidden');
}

async function handleAuthFormSubmit(e) {
  if (e) e.preventDefault();
  const isSignIn = document.getElementById('auth-tab-signin')?.classList.contains('active');
  const email = document.getElementById('auth-email-input')?.value.trim();
  const password = document.getElementById('auth-password-input')?.value;
  const fullName = document.getElementById('auth-name-input')?.value.trim();
  const errEl = document.getElementById('auth-error-msg');
  const submitBtn = document.getElementById('auth-submit-btn');

  if (!email || !password) {
    showAuthError('Vui lòng nhập đầy đủ email và mật khẩu!');
    return;
  }
  if (!isSignIn && !fullName) {
    showAuthError('Vui lòng nhập tên học viên!');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> Đang xử lý...';

  try {
    if (isSignIn) {
      const { error } = await Auth.signIn(email, password);
      if (error) throw error;
      showToast('Đăng nhập thành công!', 'success', '🎉');
      closeAuthModal();
    } else {
      const { data, error } = await Auth.signUp(email, password, fullName);
      if (error) throw error;
      if (data?.user && !data?.session) {
        showToast('Đăng ký thành công! Hãy kiểm tra email để xác thực tài khoản.', 'info', '📩');
      } else {
        showToast('Tạo tài khoản và đăng nhập thành công!', 'success', '🎉');
      }
      closeAuthModal();
    }
  } catch (err) {
    showAuthError(err.message || 'Xác thực không thành công!');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = isSignIn ? '🚀 Đăng nhập' : '✨ Tạo tài khoản';
  }
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error-msg');
  if (!el) return;
  
  let friendlyMsg = msg;
  if (msg.includes('Email not confirmed')) {
    friendlyMsg = `⚠️ Email chưa được xác thực! Vui lòng kiểm tra hộp thư (${document.getElementById('auth-email-input')?.value || 'email của bạn'}) hoặc tắt tính năng "Confirm email" trong Supabase Dashboard -> Authentication -> Providers -> Email.`;
  } else if (msg.includes('Invalid login credentials')) {
    friendlyMsg = '⚠️ Sai địa chỉ email hoặc mật khẩu. Vui lòng kiểm tra lại!';
  } else if (msg.includes('User already registered')) {
    friendlyMsg = '⚠️ Email này đã được đăng ký tài khoản rồi. Vui lòng chuyển sang tab Đăng nhập!';
  } else if (msg.includes('Password should be at least 6 characters')) {
    friendlyMsg = '⚠️ Mật khẩu phải có tối thiểu 6 ký tự!';
  }

  el.textContent = friendlyMsg;
  el.classList.remove('hidden');
}
