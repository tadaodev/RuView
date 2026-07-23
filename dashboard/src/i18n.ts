export type SupportedLocale = 'ja' | 'en';

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

const enDict: TranslationDictionary = {
  ui: {
    dashboard: {
      title: "Revolutionary WiFi-Based Human Pose Detection",
      subtitle: "Human Tracking Through Walls Using WiFi Signals",
      description: "AI can track your full-body movement through walls using just WiFi signals.",
      status: "System Status",
      metrics: "System Metrics",
      features: "Features",
      liveStats: "Live Statistics",
      activePersons: "Active Persons",
      avgConfidence: "Avg Confidence",
      totalDetections: "Total Detections",
      zoneOccupancy: "Zone Occupancy"
    },
    status: {
      connected: "Connected",
      connecting: "Connecting...",
      offline: "Offline",
      reconnecting: "Reconnecting...",
      live: "Live",
      simulated: "Simulated",
      apiServer: "API Server",
      hardware: "Hardware",
      inference: "Inference",
      streaming: "Streaming",
      dataSource: "Data Source"
    },
    action: {
      start: "Start Detection",
      stop: "Stop Detection",
      startDetection: "Start Detection",
      stopDetection: "Stop Detection",
      toggleTheme: "Toggle theme",
      exportData: "Export data",
      screenshot: "Take screenshot"
    },
    metrics: {
      cpu: "CPU Usage",
      memory: "Memory Usage",
      disk: "Disk Usage"
    },
    nav: {
      dashboard: "Dashboard",
      hardware: "Hardware",
      demo: "Live Demo",
      architecture: "Architecture",
      performance: "Performance",
      applications: "Applications",
      sensing: "Sensing",
      training: "Training"
    },
    misc: {
      loading: "Loading...",
      error: "An error occurred",
      noData: "No data available",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      settings: "Settings",
      language: "Language"
    }
  },
  topbar: {
    seedModalTitle: "Set seed",
    seedModalBody: "Set the 32-bit hex seed for the shot-noise PRNG. Same (scene, config, seed) -> byte-identical witness.",
    hexSeed: "Hex seed",
    tourBtn: "★ Tour",
    tourTitle: "Replay the 10-step welcome tour",
    helpTitle: "Help (press ? any time)",
    themeTitle: "Toggle theme",
    resetBtn: "↺ Reset",
    pauseBtn: "❚❚ Pause",
    runBtn: "▶ Run"
  },
  sidebar: {
    sceneTitle: "Scene",
    sourcesCount: "{count} sources",
    sceneHelp: "Magnetic primitives in the simulated environment. Drag any in the canvas to reposition; positions persist across reloads.",
    nvSensor: "NV sensor",
    nvSensorHelp: "Element Six DNV-B1 reference: 1 mm³ diamond, ~10¹² NV centers. Floor δB ≈ 1.18 pT/√Hz per Barry 2020 §III.A.",
    whatsNv: "What's NV?",
    tunables: "Tunables",
    tunablesHelp: "Live pipeline parameters. Edits debounce 300 ms then rebuild the WASM pipeline without restarting the frame stream.",
    sampleRate: "Sample rate",
    lockinFmod: "Lockin f_mod",
    integrationT: "Integration t",
    shotNoise: "Shot noise",
    pipeline: "Pipeline",
    pipelineHelp: "Forward simulator stages, left to right. Stages glow cyan while the pipeline is running."
  },
  rail: {
    home: "Home",
    scene: "Scene",
    apps: "App Store",
    inspector: "Inspector",
    witness: "Witness",
    ghostMurmur: "Ghost Murmur — research spec",
    settings: "Settings"
  },
  home: {
    heroTitle: "An open-source quantum-magnetometer simulator, in your browser.",
    heroTag: "nvsim runs a real Rust simulator entirely in WebAssembly. No server, no upload, no telemetry.",
    runDemoBtn: "▶ Run the simulation",
    demoRunningBtn: "✓ Demo running",
    tourBtn: "★ Take the 60-second tour",
    helpBtn: "? Help center",
    liveSceneTitle: "Live scene",
    liveSceneDesc: "Drag magnetic sources, watch the recovered field update in real time, and tweak sample rate / noise / integration.",
    openSceneArrow: "Open scene →",
    appStoreTitle: "App Store · 66 edge apps",
    appStoreDesc: "Browse 65 hot-loadable WASM sensing modules across medical, security, building, retail, industrial, learning. Six run live in the browser.",
    browseCatalogueArrow: "Browse the catalogue →",
    witnessTitle: "Determinism gate",
    witnessDesc: "Re-derive the SHA-256 witness for the canonical reference scene right here in your browser. Same inputs → same hash, every time.",
    verifyWitnessArrow: "Verify the witness →",
    ghostMurmurTitle: "Ghost Murmur reality check",
    ghostMurmurDesc: "Audit the publicly-reported April 2026 CIA NV-diamond program against published physics. Live distance/moment sliders.",
    readSpecArrow: "Read the spec →"
  },
  inspector: {
    signalTitle: "Signal inspector",
    frameTitle: "Frame inspector",
    witnessTitle: "Witness panel",
    traceLabel: "B-vector trace",
    streamLabel: "Frame stream",
    verifyBtn: "Verify witness",
    verifyOk: "✓ Witness verified · determinism gate",
    verifyFail: "✗ Witness mismatch · audit required"
  },
  appstore: {
    title: "App Store",
    searchPlaceholder: "Search by name, tag, or category…",
    all: "All",
    feedTitle: "Live runtime feed",
    activeSimulated: "{count} simulated app(s) active"
  },
  settings: {
    title: "Settings",
    appearance: "Appearance",
    theme: "Theme",
    density: "Density",
    reduceMotion: "Reduce motion",
    pipeline: "Pipeline",
    autoRerun: "Auto-rerun on edit",
    transport: "Transport",
    mode: "Mode",
    resetPrefs: "Reset all preferences"
  },
  cli: {
    server_running: "Server running at {host}:{port}",
    starting: "Starting RuView service...",
    stopped: "Service stopped.",
    config_loaded: "Configuration loaded from {path}",
    start_description: "Start the RuView WiFi pose detection service",
    stop_description: "Stop the running RuView service"
  },
  log: {
    info_initialized: "System initialized successfully",
    warn_low_signal: "Low CSI signal quality detected",
    error_connection_failed: "Connection to server failed: {reason}",
    processing_frame: "Processing CSI frame {frame_id}"
  },
  error: {
    invalid_input: "Invalid input provided: {details}",
    device_not_found: "Device not found: {device_id}",
    timeout: "Operation timed out",
    parse_error: "Failed to parse data: {error}",
    unauthorized: "Unauthorized access"
  }
};

const jaDict: TranslationDictionary = {
  ui: {
    dashboard: {
      title: "画期的なWiFiベースの人体姿勢検出",
      subtitle: "WiFi信号を使用した壁越しの人間トラッキング",
      description: "AIはWiFi信号のみを使用して、壁越しに全身の動きをトラッキングできます。",
      status: "システムステータス",
      metrics: "システムメトリクス",
      features: "機能",
      liveStats: "ライブ統計",
      activePersons: "アクティブな人数",
      avgConfidence: "平均信頼度",
      totalDetections: "総検出数",
      zoneOccupancy: "エリア占有状況"
    },
    status: {
      connected: "接続済み",
      connecting: "接続中...",
      offline: "オフライン",
      reconnecting: "再接続中...",
      live: "ライブ",
      simulated: "シミュレーション",
      apiServer: "API サーバー",
      hardware: "ハードウェア",
      inference: "推論",
      streaming: "ストリーミング",
      dataSource: "データソース"
    },
    action: {
      start: "検出開始",
      stop: "検出停止",
      startDetection: "検出開始",
      stopDetection: "検出停止",
      toggleTheme: "テーマ切り替え",
      exportData: "データエクスポート",
      screenshot: "スクリーンショット"
    },
    metrics: {
      cpu: "CPU使用率",
      memory: "メモリ使用率",
      disk: "ディスク使用率"
    },
    nav: {
      dashboard: "ダッシュボード",
      hardware: "ハードウェア",
      demo: "ライブデモ",
      architecture: "アーキテクチャ",
      performance: "パフォーマンス",
      applications: "アプリケーション",
      sensing: "センシング",
      training: "トレーニング"
    },
    misc: {
      loading: "読み込み中...",
      error: "エラーが発生しました",
      noData: "データがありません",
      close: "閉じる",
      cancel: "キャンセル",
      confirm: "確認",
      settings: "設定",
      language: "言語"
    }
  },
  topbar: {
    seedModalTitle: "シード値の設定",
    seedModalBody: "ショット雑音PRNGの32ビット16進シードを設定します。同じ (scene, config, seed) の組み合わせからはバイトレベルで完全一致するウィトネスが生成されます。",
    hexSeed: "16進シード",
    tourBtn: "★ ツアー",
    tourTitle: "10ステップのガイドツアーを再生",
    helpTitle: "ヘルプ (?キーで表示)",
    themeTitle: "テーマ切り替え",
    resetBtn: "↺ リセット",
    pauseBtn: "❚❚ 一時停止",
    runBtn: "▶ 実行"
  },
  sidebar: {
    sceneTitle: "シーン",
    sourcesCount: "{count}個の波源",
    sceneHelp: "シミュレーション環境内の磁気プリミティブ。キャンバス内でドラッグして再配置できます。配置はリロード後も保持されます。",
    nvSensor: "NVセンサー",
    nvSensorHelp: "Element Six DNV-B1 参照: 1 mm³ ダイヤモンド、約10¹²個のNVセンター。磁場感度底 δB ≈ 1.18 pT/√Hz (Barry 2020 §III.A)。",
    whatsNv: "NVとは？",
    tunables: "調整パラメータ",
    tunablesHelp: "リアルタイムのパイプラインパラメータ。編集は300msでデバウンスされ、フレームストリームを停止せずにWASMパイプラインを再構築します。",
    sampleRate: "サンプリングレート",
    lockinFmod: "ロックイン変調周波数",
    integrationT: "積分時間",
    shotNoise: "ショット雑音",
    pipeline: "パイプライン",
    pipelineHelp: "順方向シミュレータの各ステージ。パイプライン稼働中はシアン色に点灯します。"
  },
  rail: {
    home: "ホーム",
    scene: "シーン",
    apps: "アプリストア",
    inspector: "インスペクター",
    witness: "ウィトネス",
    ghostMurmur: "Ghost Murmur — 研究仕様",
    settings: "設定"
  },
  home: {
    heroTitle: "ブラウザで動作するオープンソースの量子磁気計シミュレータ。",
    heroTag: "nvsimはRustシミュレータをWebAssemblyとしてブラウザ内で直接実行します。サーバーやデータ送信は不要です。",
    runDemoBtn: "▶ シミュレーションを実行",
    demoRunningBtn: "✓ デモ実行中",
    tourBtn: "★ 60秒ツアーを開始",
    helpBtn: "? ヘルプセンター",
    liveSceneTitle: "ライブシーン",
    liveSceneDesc: "磁源をドラッグし、復元された磁場がリアルタイムで更新される様子を確認できます。",
    openSceneArrow: "シーンを開く →",
    appStoreTitle: "アプリストア · 66個のエッジアプリ",
    appStoreDesc: "医療、セキュリティ、スマートビル、小売、産業分野の65以上のホットロード対応WASMセンシングモジュールを探索。",
    browseCatalogueArrow: "カタログを閲覧 →",
    witnessTitle: "決定性検証ゲート",
    witnessDesc: "参照シーンのSHA-256ウィトネスをブラウザ内で再計算。同一入力からは常に同一ハッシュが生成されます。",
    verifyWitnessArrow: "ウィトネスを検証 →",
    ghostMurmurTitle: "Ghost Murmur リアリティチェック",
    ghostMurmurDesc: "公開された物理論文に基づき、2026年4月報告のCIA NVダイヤモンドプログラムの実現性を監査。",
    readSpecArrow: "仕様を読む →"
  },
  inspector: {
    signalTitle: "信号インスペクター",
    frameTitle: "フレームインスペクター",
    witnessTitle: "ウィトネスパネル",
    traceLabel: "Bベクトル波形",
    streamLabel: "フレームストリーム",
    verifyBtn: "ウィトネス検証",
    verifyOk: "✓ ウィトネス検証完了 · 決定性パス",
    verifyFail: "✗ ウィトネス不一致 · 監査が必要です"
  },
  appstore: {
    title: "アプリストア",
    searchPlaceholder: "名前、タグ、カテゴリで検索…",
    all: "すべて",
    feedTitle: "リアルタイム実行フィード",
    activeSimulated: "{count}個のシミュレーションアプリが有効"
  },
  settings: {
    title: "設定",
    appearance: "外観",
    theme: "テーマ",
    density: "表示密度",
    reduceMotion: "視覚効果を軽減",
    pipeline: "パイプライン",
    autoRerun: "編集時に自動再実行",
    transport: "トランスポート",
    mode: "モード",
    resetPrefs: "すべての設定をリセット"
  },
  cli: {
    server_running: "サーバーが {host}:{port} で稼働中",
    starting: "RuView サービスを開始中...",
    stopped: "サービスが停止しました",
    config_loaded: "設定が {path} から読み込まれました",
    start_description: "RuView WiFi 姿勢検出サービスを開始します",
    stop_description: "実行中の RuView サービスを停止します"
  },
  log: {
    info_initialized: "システムが正常に初期化されました",
    warn_low_signal: "CSI信号品質の低下を検出しました",
    error_connection_failed: "サーバーへの接続に失敗しました: {reason}",
    processing_frame: "CSIフレーム {frame_id} を処理中"
  },
  error: {
    invalid_input: "無効な入力です: {details}",
    device_not_found: "デバイスが見つかりません: {device_id}",
    timeout: "処理がタイムアウトしました",
    parse_error: "データの解析に失敗しました: {error}",
    unauthorized: "未認証のアクセス"
  }
};

const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  en: enDict,
  ja: jaDict,
};

function lookupKey(dict: TranslationDictionary, key: string): string | null {
  if (typeof dict[key] === 'string') {
    return dict[key] as string;
  }
  const parts = key.split('.');
  let curr: unknown = dict;
  for (const part of parts) {
    if (curr && typeof curr === 'object' && part in (curr as Record<string, unknown>)) {
      curr = (curr as Record<string, unknown>)[part];
    } else {
      return null;
    }
  }
  return typeof curr === 'string' ? curr : null;
}

export function detectDefaultLocale(): SupportedLocale {
  if (typeof process !== 'undefined' && process.env && process.env.RUVIEW_LANG) {
    const envLang = process.env.RUVIEW_LANG.toLowerCase();
    if (envLang.startsWith('ja')) return 'ja';
    if (envLang.startsWith('en')) return 'en';
  }
  if (typeof navigator !== 'undefined' && navigator.language) {
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('ja')) return 'ja';
    if (navLang.startsWith('en')) return 'en';
  }
  return 'ja';
}

export class I18nManager extends EventTarget {
  private currentLocale: SupportedLocale;
  private listeners: Array<(locale: SupportedLocale) => void> = [];

  constructor() {
    super();
    this.currentLocale = detectDefaultLocale();
  }

  public getLocale(): SupportedLocale {
    return this.currentLocale;
  }

  public setLocale(locale: SupportedLocale): void {
    if (locale !== 'ja' && locale !== 'en') return;
    if (this.currentLocale === locale) return;
    this.currentLocale = locale;
    this.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale } }));
    this.listeners.forEach((cb) => {
      try {
        cb(locale);
      } catch (e) {
        console.error(e);
      }
    });
  }

  public onLocaleChange(callback: (locale: SupportedLocale) => void): () => void {
    this.listeners.push(callback);
    return () => {
      const idx = this.listeners.indexOf(callback);
      if (idx >= 0) this.listeners.splice(idx, 1);
    };
  }

  public t(key: string, fallbackOrParams?: string | Record<string, unknown>, params?: Record<string, unknown>): string {
    let fallback: string | undefined;
    let actualParams: Record<string, unknown> | undefined;

    if (typeof fallbackOrParams === 'string') {
      fallback = fallbackOrParams;
      actualParams = params;
    } else if (typeof fallbackOrParams === 'object' && fallbackOrParams !== null) {
      actualParams = fallbackOrParams;
    }

    const dict = dictionaries[this.currentLocale] || dictionaries.ja;
    let text = lookupKey(dict, key);

    if (text === null && this.currentLocale !== 'ja') {
      text = lookupKey(dictionaries.ja, key);
    }

    if (text === null) {
      text = fallback !== undefined ? fallback : key;
    }

    if (actualParams) {
      for (const [pKey, pVal] of Object.entries(actualParams)) {
        text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
      }
    }

    return text;
  }
}

export const i18n = new I18nManager();
export const t = (key: string, fallbackOrParams?: string | Record<string, unknown>, params?: Record<string, unknown>): string =>
  i18n.t(key, fallbackOrParams, params);
export const setLocale = (locale: SupportedLocale): void => i18n.setLocale(locale);
