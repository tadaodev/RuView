// Lightweight Vanilla JS i18n Module for Classic Web UI
// Single-Source translation support for ja / en

const translations = {
  en: {
    // Structured keys
    'ui.dashboard.title': 'Revolutionary WiFi-Based Human Pose Detection',
    'ui.dashboard.subtitle': 'Human Tracking Through Walls Using WiFi Signals',
    'ui.dashboard.description': 'AI can track your full-body movement through walls using just WiFi signals.',
    'ui.dashboard.status': 'System Status',
    'ui.dashboard.metrics': 'System Metrics',
    'ui.dashboard.features': 'Features',
    'ui.dashboard.liveStats': 'Live Statistics',
    'ui.status.connected': 'Connected',
    'ui.status.connecting': 'Connecting...',
    'ui.status.offline': 'Offline',
    'ui.action.start': 'Start Detection',
    'ui.action.stop': 'Stop Detection',
    'ui.metrics.cpu': 'CPU Usage',
    'ui.metrics.memory': 'Memory Usage',
    'ui.metrics.disk': 'Disk Usage',
    'cli.server_running': 'Server running at {host}:{port}',
    'cli.starting': 'Starting RuView service...',
    'cli.stopped': 'Service stopped.',
    'log.info_initialized': 'System initialized successfully',
    'log.warn_low_signal': 'Low CSI signal quality detected',
    'error.invalid_input': 'Invalid input provided: {details}',
    'error.device_not_found': 'Device not found: {device_id}',
    'error.timeout': 'Operation timed out',

    // Backward-compatibility keys
    'nav.dashboard': 'Dashboard',
    'nav.hardware': 'Hardware',
    'nav.demo': 'Live Demo',
    'nav.architecture': 'Architecture',
    'nav.performance': 'Performance',
    'nav.applications': 'Applications',
    'nav.sensing': 'Sensing',
    'nav.training': 'Training',
    'dashboard.title': 'Revolutionary WiFi-Based Human Pose Detection',
    'dashboard.subtitle': 'Human Tracking Through Walls Using WiFi Signals',
    'dashboard.description': 'AI can track your full-body movement through walls using just WiFi signals. Researchers at Carnegie Mellon have trained a neural network to turn basic WiFi signals into detailed wireframe models of human bodies.',
    'dashboard.status': 'System Status',
    'dashboard.metrics': 'System Metrics',
    'dashboard.features': 'Features',
    'dashboard.liveStats': 'Live Statistics',
    'dashboard.activePersons': 'Active Persons',
    'dashboard.avgConfidence': 'Avg Confidence',
    'dashboard.totalDetections': 'Total Detections',
    'dashboard.zoneOccupancy': 'Zone Occupancy',
    'status.apiServer': 'API Server',
    'status.hardware': 'Hardware',
    'status.inference': 'Inference',
    'status.streaming': 'Streaming',
    'status.dataSource': 'Data Source',
    'metrics.cpu': 'CPU Usage',
    'metrics.memory': 'Memory Usage',
    'metrics.disk': 'Disk Usage',
    'benefit.throughWalls': 'Through Walls',
    'benefit.throughWallsDesc': 'Works through solid barriers with no line of sight required',
    'benefit.privacy': 'Privacy-Preserving',
    'benefit.privacyDesc': 'No cameras or visual recording - just WiFi signal analysis',
    'benefit.realtime': 'Real-Time',
    'benefit.realtimeDesc': 'Maps 24 body regions in real-time at 100Hz sampling rate',
    'benefit.lowCost': 'Low Cost',
    'benefit.lowCostDesc': 'Built using $30 commercial WiFi hardware',
    'stat.bodyRegions': 'Body Regions',
    'stat.samplingRate': 'Sampling Rate',
    'stat.accuracy': 'Accuracy (AP@50)',
    'stat.hardwareCost': 'Hardware Cost',
    'action.startDetection': 'Start Detection',
    'action.stopDetection': 'Stop Detection',
    'action.toggleTheme': 'Toggle theme',
    'action.exportData': 'Export data',
    'action.screenshot': 'Take screenshot',
    'conn.connected': 'Connected',
    'conn.connecting': 'Connecting...',
    'conn.offline': 'Offline',
    'conn.reconnecting': 'Reconnecting...',
    'conn.live': 'Live',
    'conn.simulated': 'Simulated',
    'misc.loading': 'Loading...',
    'misc.error': 'An error occurred',
    'misc.noData': 'No data available',
    'misc.close': 'Close',
    'misc.cancel': 'Cancel',
    'misc.confirm': 'Confirm',
    'misc.settings': 'Settings',
    'misc.language': 'Language'
  },
  ja: {
    // Structured keys
    'ui.dashboard.title': '画期的なWiFiベースの人体姿勢検出',
    'ui.dashboard.subtitle': 'WiFi信号を使用した壁越しの人間トラッキング',
    'ui.dashboard.description': 'AIはWiFi信号のみを使用して、壁越しに全身の動きをトラッキングできます。',
    'ui.dashboard.status': 'システムステータス',
    'ui.dashboard.metrics': 'システムメトリクス',
    'ui.dashboard.features': '機能',
    'ui.dashboard.liveStats': 'ライブ統計',
    'ui.status.connected': '接続済み',
    'ui.status.connecting': '接続中...',
    'ui.status.offline': 'オフライン',
    'ui.action.start': '検出開始',
    'ui.action.stop': '検出停止',
    'ui.metrics.cpu': 'CPU使用率',
    'ui.metrics.memory': 'メモリ使用率',
    'ui.metrics.disk': 'ディスク使用率',
    'cli.server_running': 'サーバーが {host}:{port} で稼働中',
    'cli.starting': 'RuView サービスを開始中...',
    'cli.stopped': 'サービスが停止しました',
    'log.info_initialized': 'システムが正常に初期化されました',
    'log.warn_low_signal': 'CSI信号品質の低下を検出しました',
    'error.invalid_input': '無効な入力です: {details}',
    'error.device_not_found': 'デバイスが見つかりません: {device_id}',
    'error.timeout': '処理がタイムアウトしました',

    // Backward-compatibility keys
    'nav.dashboard': 'ダッシュボード',
    'nav.hardware': 'ハードウェア',
    'nav.demo': 'ライブデモ',
    'nav.architecture': 'アーキテクチャ',
    'nav.performance': 'パフォーマンス',
    'nav.applications': 'アプリケーション',
    'nav.sensing': 'センシング',
    'nav.training': 'トレーニング',
    'dashboard.title': '画期的なWiFiベースの人体姿勢検出',
    'dashboard.subtitle': 'WiFi信号を使用した壁越しの人間トラッキング',
    'dashboard.description': 'AIはWiFi信号のみを使用して、壁越しに全身の動きをトラッキングできます。',
    'dashboard.status': 'システムステータス',
    'dashboard.metrics': 'システムメトリクス',
    'dashboard.features': '機能',
    'dashboard.liveStats': 'ライブ統計',
    'dashboard.activePersons': 'アクティブな人数',
    'dashboard.avgConfidence': '平均信頼度',
    'dashboard.totalDetections': '総検出数',
    'dashboard.zoneOccupancy': 'エリア占有状況',
    'status.apiServer': 'API サーバー',
    'status.hardware': 'ハードウェア',
    'status.inference': '推論',
    'status.streaming': 'ストリーミング',
    'status.dataSource': 'データソース',
    'metrics.cpu': 'CPU使用率',
    'metrics.memory': 'メモリ使用率',
    'metrics.disk': 'ディスク使用率',
    'benefit.throughWalls': '壁越しのセンシング',
    'benefit.throughWallsDesc': '視界がなくても障害物を透過して機能します',
    'benefit.privacy': 'プライバシー保護',
    'benefit.privacyDesc': 'カメラや映像録画は不使用 - WiFi信号の解析のみ',
    'benefit.realtime': 'リアルタイム',
    'benefit.realtimeDesc': '100Hzのサンプリングレートで24の身体部位をリアルタイムマッピング',
    'benefit.lowCost': '低コスト',
    'benefit.lowCostDesc': '30ドルの市販WiFiハードウェアを使用して構築',
    'stat.bodyRegions': '身体部位数',
    'stat.samplingRate': 'サンプリングレート',
    'stat.accuracy': '精度 (AP@50)',
    'stat.hardwareCost': 'ハードウェアコスト',
    'action.startDetection': '検出開始',
    'action.stopDetection': '検出停止',
    'action.toggleTheme': 'テーマ切り替え',
    'action.exportData': 'データエクスポート',
    'action.screenshot': 'スクリーンショット',
    'conn.connected': '接続済み',
    'conn.connecting': '接続中...',
    'conn.offline': 'オフライン',
    'conn.reconnecting': '再接続中...',
    'conn.live': 'ライブ',
    'conn.simulated': 'シミュレーション',
    'misc.loading': '読み込み中...',
    'misc.error': 'エラーが発生しました',
    'misc.noData': 'データがありません',
    'misc.close': '閉じる',
    'misc.cancel': 'キャンセル',
    'misc.confirm': '確認',
    'misc.settings': '設定',
    'misc.language': '言語'
  }
};

export class I18n {
  constructor() {
    this.locale = this.getSavedLocale() || this.detectLocale();
    this.listeners = [];
  }

  init() {
    if (typeof document !== 'undefined') {
      this.createSelector();
      this.applyTranslations();
    }
  }

  detectLocale() {
    let lang = 'ja';
    if (typeof process !== 'undefined' && process.env && process.env.RUVIEW_LANG) {
      lang = process.env.RUVIEW_LANG.toLowerCase();
    } else if (typeof navigator !== 'undefined' && navigator.language) {
      lang = navigator.language.toLowerCase();
    }
    if (lang.startsWith('en')) return 'en';
    return 'ja';
  }

  getSavedLocale() {
    try {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('ruview-locale');
      }
    } catch {
      /* noop */
    }
    return null;
  }

  saveLocale(locale) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ruview-locale', locale);
      }
    } catch {
      /* noop */
    }
  }

  t(key, fallback = null, params = null) {
    if (typeof fallback === 'object' && fallback !== null) {
      params = fallback;
      fallback = null;
    }

    const dict = translations[this.locale] || translations.en;
    let res = dict[key];

    // Fallback to English if key missing in selected locale
    if (res === undefined && this.locale !== 'en') {
      res = translations.en[key];
    }

    // Fallback provided or key name
    if (res === undefined) {
      res = fallback !== null && fallback !== undefined ? fallback : key;
    }

    if (params && typeof params === 'object') {
      for (const [pKey, pVal] of Object.entries(params)) {
        res = res.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
      }
    }

    return res;
  }

  setLocale(locale) {
    if (!translations[locale]) return;
    this.locale = locale;
    this.saveLocale(locale);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.setAttribute('lang', locale);
    }
    this.applyTranslations();
    this.listeners.forEach((cb) => {
      try {
        cb(locale);
      } catch {
        /* noop */
      }
    });
  }

  onLocaleChange(callback) {
    this.listeners.push(callback);
    return () => {
      const i = this.listeners.indexOf(callback);
      if (i > -1) this.listeners.splice(i, 1);
    };
  }

  applyTranslations() {
    if (typeof document === 'undefined') return;

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });

    // Update language selector if present
    const selector = document.getElementById('lang-selector');
    if (selector) selector.value = this.locale;
  }

  createSelector() {
    if (typeof document === 'undefined') return;
    const headerInfo = document.querySelector('.header-info') || document.querySelector('.nav-brand') || document.querySelector('.top-nav') || document.querySelector('.navbar') || document.body;
    if (!headerInfo || document.getElementById('lang-selector')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector-wrap';
    wrapper.style.display = 'inline-block';
    wrapper.style.margin = '0 8px';
    wrapper.innerHTML = `
      <select id="lang-selector" class="lang-selector" aria-label="Language" style="padding: 4px 8px; border-radius: 6px; background: #2a2a2a; color: #fff; border: 1px solid #444; font-family: monospace; font-size: 12px; cursor: pointer;">
        <option value="ja">JA (日本語)</option>
        <option value="en">EN (English)</option>
      </select>
    `;

    const select = wrapper.querySelector('select');
    select.value = this.locale;
    select.addEventListener('change', () => this.setLocale(select.value));
    headerInfo.appendChild(wrapper);
  }

  getAvailableLocales() {
    return Object.keys(translations);
  }

  dispose() {
    this.listeners = [];
  }
}

export const i18n = new I18n();

if (typeof window !== 'undefined') {
  window.i18n = i18n;
}
