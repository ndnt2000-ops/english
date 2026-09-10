// ============================================================
// ENGLISHMASTER - Supabase Configuration & Client Provider
// ============================================================

const SUPABASE_DEFAULT_URL = "https://sncboidwnnhmjvsxxuth.supabase.co";
const SUPABASE_DEFAULT_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuY2JvaWR3bm5obWp2c3h4dXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMDQzOTEsImV4cCI6MjEwNDU4MDM5MX0.Nh1fm0l-nKRqq735BxzFCh_3Ad_CQ7eIQQTw-CXdF2s";

const SupabaseConfig = {
  getUrl() {
    return localStorage.getItem('em_supabase_url') || SUPABASE_DEFAULT_URL;
  },
  getKey() {
    return localStorage.getItem('em_supabase_anon_key') || SUPABASE_DEFAULT_ANON_KEY;
  },
  save(url, key) {
    const cleanUrl = (url || '').trim().replace(/\/$/, '');
    const cleanKey = (key || '').trim();
    localStorage.setItem('em_supabase_url', cleanUrl);
    localStorage.setItem('em_supabase_anon_key', cleanKey);
    this.initClient();
  },
  isConfigured() {
    const url = this.getUrl();
    const key = this.getKey();
    return !!(url && key && url.startsWith('https://') && key.length > 20);
  },
  initClient() {
    if (!this.isConfigured()) {
      window.supabaseClient = null;
      return null;
    }
    try {
      if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
        window.supabaseClient = window.supabase.createClient(this.getUrl(), this.getKey(), {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        });
        return window.supabaseClient;
      }
    } catch (err) {
      console.error('Failed to initialize Supabase client:', err);
      window.supabaseClient = null;
    }
    return null;
  }
};

// Global reference
window.SupabaseConfig = SupabaseConfig;
window.supabaseClient = null;

// Initialize when SDK is ready
if (typeof window.supabase !== 'undefined') {
  SupabaseConfig.initClient();
} else {
  window.addEventListener('load', () => SupabaseConfig.initClient());
}

// Modal UI controls for Supabase settings
function openSupabaseSettingsModal() {
  const modal = document.getElementById('supabase-settings-modal');
  if (!modal) return;
  const urlInput = document.getElementById('supabase-url-input');
  const keyInput = document.getElementById('supabase-key-input');
  if (urlInput) urlInput.value = SupabaseConfig.getUrl();
  if (keyInput) keyInput.value = SupabaseConfig.getKey();
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeSupabaseSettingsModal() {
  const modal = document.getElementById('supabase-settings-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

function saveSupabaseSettingsFromUI() {
  const url = document.getElementById('supabase-url-input')?.value || '';
  const key = document.getElementById('supabase-key-input')?.value || '';
  if (!url || !key) {
    showToast('Please enter both Supabase Project URL and Anon Key', 'warning', '⚠️');
    return;
  }
  SupabaseConfig.save(url, key);
  closeSupabaseSettingsModal();
  showToast('Supabase settings saved! Re-checking connection...', 'success', '⚡');
  
  if (window.Auth && typeof window.Auth.initAuth === 'function') {
    window.Auth.initAuth();
  }
}
