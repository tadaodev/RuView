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
    'misc.language': 'Language',

    // Friendly Terms & Observatory 3D Keys
    'term.emptyRoom': 'Empty Room',
    'term.emptyRoomDesc': 'Measuring baseline RF environment with no human presence.',
    'term.fallDetect': 'Fall Detect',
    'term.fallDetectDesc': 'Sudden posture-change detection using acceleration feature analysis.',
    'term.vitalSigns': 'Vital Signs',
    'term.vitalSignsDesc': 'Detecting vital signs through WiFi signal micro-variations.',
    'term.csiVariance': 'CSI Variance',
    'term.csiVarianceDesc': 'Channel State Information (CSI) variance measuring motion strength.',

    'observatory.title': 'RuView Observatory — WiFi DensePose',
    'observatory.brand': 'RuView',
    'observatory.tagline': 'WiFi DensePose Sensing Observatory',

    // Scenario names
    'observatory.scenario.auto': 'Auto-Cycle',
    'observatory.scenario.empty_room': 'Empty Room',
    'observatory.scenario.single_breathing': 'Vital Signs',
    'observatory.scenario.two_walking': 'Multi-Person',
    'observatory.scenario.fall_event': 'Fall Detect',
    'observatory.scenario.sleep_monitoring': 'Sleep Monitor',
    'observatory.scenario.intrusion_detect': 'Intrusion',
    'observatory.scenario.gesture_control': 'Gesture Ctrl',
    'observatory.scenario.crowd_occupancy': 'Crowd (4 ppl)',
    'observatory.scenario.search_rescue': 'Search Rescue',
    'observatory.scenario.elderly_care': 'Elderly Care',
    'observatory.scenario.fitness_tracking': 'Fitness',
    'observatory.scenario.security_patrol': 'Security Patrol',

    // Scenario descriptions (with enriched technical explanations)
    'observatory.desc.auto': 'Auto-cycling through all sensing scenarios.',
    'observatory.desc.empty_room': 'Baseline calibration with no human presence in the monitored zone.',
    'observatory.desc.single_breathing': 'Detecting vital signs through WiFi signal micro-variations.',
    'observatory.desc.two_walking': 'Tracking multiple people simultaneously via CSI multiplex separation.',
    'observatory.desc.fall_event': 'Sudden posture-change detection using acceleration feature analysis.',
    'observatory.desc.sleep_monitoring': 'Monitoring breathing patterns and apnea events during sleep.',
    'observatory.desc.intrusion_detect': 'Passive perimeter monitoring -- no cameras, pure RF sensing.',
    'observatory.desc.gesture_control': 'DTW-based gesture recognition from hand/arm motion signatures.',
    'observatory.desc.crowd_occupancy': 'Estimating room occupancy count from aggregate CSI variance.',
    'observatory.desc.search_rescue': 'Through-wall survivor detection using WiFi-MAT multistatic mode.',
    'observatory.desc.elderly_care': 'Continuous gait analysis for early mobility-decline detection.',
    'observatory.desc.fitness_tracking': 'Rep counting and exercise classification from body kinematics.',
    'observatory.desc.security_patrol': 'Multi-zone presence patrol with camera-free motion heatmaps.',

    // HUD panels
    'observatory.group.core': 'Core Sensing',
    'observatory.group.medical': 'Medical / Health',
    'observatory.group.security': 'Security',
    'observatory.group.retail': 'Building / Retail',
    'observatory.group.disaster': 'Disaster / Tactical',

    'observatory.preset.custom': 'Custom',
    'observatory.preset.foundation': 'Foundation (Default)',
    'observatory.preset.cinematic': 'Cinematic',
    'observatory.preset.minimal': 'Minimal / Clean',
    'observatory.preset.neon': 'Neon Glow',
    'observatory.preset.tactical': 'Tactical / Military',
    'observatory.preset.medical': 'Medical Monitor',

    'observatory.datasource.demo': 'Demo Generator',
    'observatory.datasource.ws': 'Live WebSocket',

    'observatory.vitals.header': 'Vital Signs',
    'observatory.vitals.heartRate': 'Heart Rate',
    'observatory.vitals.respiration': 'Respiration',
    'observatory.vitals.confidence': 'Confidence',

    'observatory.signal.header': 'WiFi Signal',
    'observatory.signal.rssi': 'RSSI',
    'observatory.signal.variance': 'CSI Variance',
    'observatory.signal.motion': 'Motion',
    'observatory.signal.persons': 'Persons',

    'observatory.presence.header': 'Presence',
    'observatory.presence.absent': 'ABSENT',
    'observatory.presence.present': 'PRESENT',
    'observatory.presence.active': 'ACTIVE',
    'observatory.presence.fallDetected': 'FALL DETECTED',

    // Capabilities & Shortcuts
    'observatory.cap.pose': 'Human Pose Estimation',
    'observatory.cap.vitals': 'Vital Sign Monitoring',
    'observatory.cap.presence': 'Presence Detection',

    'observatory.hint.orbit': '[A] Orbit',
    'observatory.hint.scenario': '[D] Scenario',
    'observatory.hint.fps': '[F] FPS',
    'observatory.hint.settings': '[S] Settings',
    'observatory.hint.pause': '[Space] Pause',

    // Settings Dialog
    'observatory.settings.title': 'Settings',
    'observatory.settings.rendering': 'Rendering',
    'observatory.settings.wireframe': 'Wireframe',
    'observatory.settings.scene': 'Scene',
    'observatory.settings.data': 'Data',
    'observatory.settings.bloomStrength': 'Bloom Strength',
    'observatory.settings.bloomRadius': 'Bloom Radius',
    'observatory.settings.bloomThreshold': 'Bloom Threshold',
    'observatory.settings.exposure': 'Exposure',
    'observatory.settings.vignette': 'Vignette',
    'observatory.settings.filmGrain': 'Film Grain',
    'observatory.settings.chromaticAberration': 'Chromatic Aberration',
    'observatory.settings.boneThickness': 'Bone Thickness',
    'observatory.settings.jointSize': 'Joint Size',
    'observatory.settings.glowIntensity': 'Glow Intensity',
    'observatory.settings.particleTrail': 'Particle Trail',
    'observatory.settings.wireframeColor': 'Wireframe Color',
    'observatory.settings.jointColor': 'Joint Color',
    'observatory.settings.auraOpacity': 'Aura Opacity',
    'observatory.settings.signalField': 'Signal Field',
    'observatory.settings.wifiWaves': 'WiFi Waves',
    'observatory.settings.roomBrightness': 'Room Brightness',
    'observatory.settings.floorReflection': 'Floor Reflection',
    'observatory.settings.fov': 'FOV',
    'observatory.settings.orbitSpeed': 'Orbit Speed',
    'observatory.settings.showGrid': 'Show Grid',
    'observatory.settings.showRoomBoundary': 'Show Room Boundary',
    'observatory.settings.scenario': 'Scenario',
    'observatory.settings.cycleSpeed': 'Cycle Speed (s)',
    'observatory.settings.stylePreset': 'Style Preset',
    'observatory.settings.dataSource': 'Data Source',
    'observatory.settings.wsUrl': 'WS URL',
    'observatory.settings.resetCamera': 'Reset Camera',
    'observatory.settings.resetDefaults': 'Reset to Defaults',
    'observatory.settings.exportSettings': 'Export Settings'
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
    'nav.poseFusion': '姿勢フュージョン',
    'nav.observatory': '3Dオブザバトリー',
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
    'misc.language': '言語',

    // Friendly Terms & Observatory 3D Keys (Exact Japanese term mappings)
    'term.emptyRoom': '空部屋測定（ベースライン校正）',
    'term.emptyRoomDesc': '人間が存在しない状態での電波環境の基準値（ベースライン）を自動計測・校正します。',
    'term.fallDetect': '転倒検知アラート',
    'term.fallDetectDesc': '急激な高度変化および転倒後の静止状態を検知し、即座にアラートを発報します。',
    'term.vitalSigns': 'バイタル測定（心拍・呼吸）',
    'term.vitalSignsDesc': 'WiFi信号の微少な位相・振幅変化から呼吸数および心拍数を非接触で推測します。',
    'term.csiVariance': '電波変動量（動作強度）',
    'term.csiVarianceDesc': 'Channel State Information (CSI) の振幅分散から室内における身体運動の強さを数値化します。',

    'observatory.title': 'RuView オブザバトリー — WiFi DensePose 3D可視化',
    'observatory.brand': 'RuView',
    'observatory.tagline': 'WiFi DensePose センシング・オブザバトリー',

    // Scenario names
    'observatory.scenario.auto': '自動サイクル',
    'observatory.scenario.empty_room': '空部屋測定（ベースライン校正）',
    'observatory.scenario.single_breathing': 'バイタル測定（心拍・呼吸）',
    'observatory.scenario.two_walking': '複数人トラッキング',
    'observatory.scenario.fall_event': '転倒検知アラート',
    'observatory.scenario.sleep_monitoring': '睡眠モニタリング',
    'observatory.scenario.intrusion_detect': '侵入検知',
    'observatory.scenario.gesture_control': 'ジェスチャー制御',
    'observatory.scenario.crowd_occupancy': '混雑度測定 (4名)',
    'observatory.scenario.search_rescue': '災害捜索・救助',
    'observatory.scenario.elderly_care': '高齢者見守り',
    'observatory.scenario.fitness_tracking': 'フィットネス',
    'observatory.scenario.security_patrol': '警備パトロール',

    // Scenario descriptions (Enriched technical explanations)
    'observatory.desc.auto': 'すべてのセンシングシナリオを自動的に切り替えて表示します。',
    'observatory.desc.empty_room': '人間が存在しない状態での電波環境の基準値（ベースライン）を自動計測・校正します。',
    'observatory.desc.single_breathing': 'WiFi信号の微少な位相・振幅変化から呼吸数および心拍数を非接触で推測します。',
    'observatory.desc.two_walking': 'CSI信号のマルチプレックス分離により、複数の人物の動きを同時追跡します。',
    'observatory.desc.fall_event': '急激な高度変化および転倒後の静止状態を検知し、即座にアラートを発報します。',
    'observatory.desc.sleep_monitoring': '睡眠中の呼吸パターンや無呼吸イベントを非侵襲でリアルタイム監視します。',
    'observatory.desc.intrusion_detect': 'カメラ不使用でエリアへの侵入をパッシブ電波センシングで検知します。',
    'observatory.desc.gesture_control': '手や腕の動作による電波シグネチャをDTWアルゴリズムでジェスチャー識別します。',
    'observatory.desc.crowd_occupancy': 'Channel State Information (CSI) の振幅分散から室内の人数・混雑度を推定します。',
    'observatory.desc.search_rescue': 'WiFi-MATマルチスタティックモードを用いて瓦礫や壁の向こうの生存者を検知します。',
    'observatory.desc.elderly_care': '歩行機能の低下やふらつきを継続的に分析し、高齢者の転倒予防・見守りを行います。',
    'observatory.desc.fitness_tracking': '身体運動の運動学的データからエクササイズの種目識別と回数カウントを行います。',
    'observatory.desc.security_patrol': 'カメラ不使用の動線ヒートマップにより複数エリアの存在状態を監視します。',

    // HUD panels
    'observatory.group.core': 'コア・センシング',
    'observatory.group.medical': 'ヘルスケア・医療',
    'observatory.group.security': '防犯・警備',
    'observatory.group.retail': '施設・店舗・ビル',
    'observatory.group.disaster': '災害救助・特殊',

    'observatory.preset.custom': 'カスタム',
    'observatory.preset.foundation': '標準（デフォルト）',
    'observatory.preset.cinematic': 'シネマティック',
    'observatory.preset.minimal': 'ミニマル（シンプル）',
    'observatory.preset.neon': 'ネオングロー',
    'observatory.preset.tactical': 'タクティカル（軍事・防犯）',
    'observatory.preset.medical': 'メディカル（医療）',

    'observatory.datasource.demo': 'デモジェネレータ（シミュレーション）',
    'observatory.datasource.ws': 'ライブ WebSocket（実機マイコン）',

    'observatory.vitals.header': 'バイタル測定（心拍・呼吸）',
    'observatory.vitals.heartRate': '心拍数',
    'observatory.vitals.respiration': '呼吸数',
    'observatory.vitals.confidence': '推測信頼度',

    'observatory.signal.header': 'WiFi電波状態',
    'observatory.signal.rssi': 'RSSI',
    'observatory.signal.variance': '電波変動量（動作強度）',
    'observatory.signal.motion': '体動レベル',
    'observatory.signal.persons': '検知人数',

    'observatory.presence.header': '在室状態',
    'observatory.presence.absent': '不在',
    'observatory.presence.present': '在室',
    'observatory.presence.active': '活動中',
    'observatory.presence.fallDetected': '転倒検知アラート',

    // Capabilities & Shortcuts
    'observatory.cap.pose': '人体姿勢マッピング',
    'observatory.cap.vitals': 'バイタル測定（心拍・呼吸）',
    'observatory.cap.presence': '人感・在室検知',

    'observatory.hint.orbit': '[A] 周回カメラ',
    'observatory.hint.scenario': '[D] シナリオ切り替え',
    'observatory.hint.fps': '[F] FPS表示',
    'observatory.hint.settings': '[S] 環境設定',
    'observatory.hint.pause': '[Space] 一時停止',

    // Settings Dialog
    'observatory.settings.title': '環境設定',
    'observatory.settings.rendering': '描画設定',
    'observatory.settings.wireframe': 'ワイヤーフレーム',
    'observatory.settings.scene': '3Dシーン',
    'observatory.settings.data': 'データ・接続',
    'observatory.settings.bloomStrength': 'ブルーム強度',
    'observatory.settings.bloomRadius': 'ブルーム半径',
    'observatory.settings.bloomThreshold': 'ブルーム閾値',
    'observatory.settings.exposure': '露出',
    'observatory.settings.vignette': 'ビネット',
    'observatory.settings.filmGrain': 'フィルム粒子',
    'observatory.settings.chromaticAberration': '色収差',
    'observatory.settings.boneThickness': '骨の太さ',
    'observatory.settings.jointSize': '関節サイズ',
    'observatory.settings.glowIntensity': '発光強度',
    'observatory.settings.particleTrail': '粒子軌跡',
    'observatory.settings.wireframeColor': 'ワイヤーフレーム色',
    'observatory.settings.jointColor': '関節色',
    'observatory.settings.auraOpacity': 'オーラ不透明度',
    'observatory.settings.signalField': '信号フィールド',
    'observatory.settings.wifiWaves': 'WiFi電波波形',
    'observatory.settings.roomBrightness': '部屋の明るさ',
    'observatory.settings.floorReflection': '床面反射',
    'observatory.settings.fov': '視野角 (FOV)',
    'observatory.settings.orbitSpeed': '周回速度',
    'observatory.settings.showGrid': 'グリッドを表示',
    'observatory.settings.showRoomBoundary': '部屋の境界を表示',
    'observatory.settings.scenario': 'シナリオ',
    'observatory.settings.cycleSpeed': 'サイクル間隔 (秒)',
    'observatory.settings.stylePreset': 'スタイルプリセット',
    'observatory.settings.dataSource': 'データソース',
    'observatory.settings.wsUrl': 'WebSocket URL',
    'observatory.settings.resetCamera': 'カメラ位置をリセット',
    'observatory.settings.resetDefaults': '初期設定に戻す',
    'observatory.settings.exportSettings': '設定のエクスポート'
  }
};

export class I18n {
  static t(key, fallback = null, params = null) {
    return i18n.t(key, fallback, params);
  }

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

    if (document.documentElement) {
      document.documentElement.setAttribute('lang', this.locale);
    }

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (el.tagName && el.tagName.toLowerCase() === 'optgroup') {
        el.label = this.t(key);
      } else {
        el.textContent = this.t(key);
      }
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
  window.I18n = I18n;
}
