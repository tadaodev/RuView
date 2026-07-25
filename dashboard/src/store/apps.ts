/* RuView Edge App Store registry.
 *
 * Catalog of every WASM edge module shipping in the workspace plus the
 * `nvsim` simulator itself. Each entry maps to a hot-loadable algorithm
 * the dashboard can run in-browser (WASM transport) or push to a real
 * ESP32-S3 mesh (WS transport, deployed via WASM3 — ADR-040 Tier 3).
 *
 * Categories (ADR-041 event-ID ranges):
 *   med  100–199  Medical & health
 *   sec  200–299  Security & safety
 *   bld  300–399  Smart building
 *   ret  400–499  Retail & hospitality
 *   ind  500–599  Industrial
 *   sig  600–619  Signal-processing primitives
 *   lrn  620–639  Online learning
 *   spt  640–659  Spatial / graph
 *   tmp  640–660  Temporal logic / planning
 *   ais  700–719  AI safety
 *   qnt  720–739  Quantum-flavoured signal
 *   aut  740–759  Autonomy / mesh
 *   exo  650–699  Exotic / research
 *   sim  —       Pipeline simulators (nvsim)
 *
 * The `crate` field names the Cargo crate that owns the implementation.
 * `wasmEdge` apps are compiled out of `wifi-densepose-wasm-edge`;
 * `nvsim` apps come from `nvsim`. Future apps may target other crates.
 */

export type AppCategory =
  | 'sim'
  | 'med'
  | 'sec'
  | 'bld'
  | 'ret'
  | 'ind'
  | 'sig'
  | 'lrn'
  | 'spt'
  | 'tmp'
  | 'ais'
  | 'qnt'
  | 'aut'
  | 'exo';

/** What actually happens when a card's toggle is on.
 * - `running` — the algorithm is genuinely running in the browser right now
 *   (e.g. `nvsim` itself, which is the simulator the dashboard fronts).
 * - `simulated` — a pared-down version of the algorithm runs against nvsim's
 *   live magnetic frame stream as a *proxy* for its native CSI input.
 *   Emits real i32 event IDs into the console feed; output is illustrative,
 *   not engineering-grade. Listed apps' Rust source is real, builds for
 *   wasm32-unknown-unknown, and passes its native unit tests.
 * - `mesh-only` — algorithm needs CSI subcarrier data from a real ESP32-S3
 *   mesh (or a future CSI simulator). Toggling persists the selection so
 *   the WS transport can push activation when connected. */
export type AppRuntime = 'running' | 'simulated' | 'mesh-only';

export interface AppManifest {
  /** Stable kebab-case id; matches the wasm-edge module name (e.g. `med_sleep_apnea`). */
  id: string;
  /** Human-readable name. */
  name: string;
  /** Optional Japanese name. */
  name_ja?: string;
  /** Category short-code. */
  category: AppCategory;
  /** Cargo crate the implementation lives in. */
  crate: 'nvsim' | 'wifi-densepose-wasm-edge' | string;
  /** One-liner description. */
  summary: string;
  /** Optional Japanese summary. */
  summary_ja?: string;
  /** Optional longer markdown body. */
  body?: string;
  /** Numeric event IDs this app emits (i32 codes from `event_types` mod). */
  events?: number[];
  /** Compute budget tier the module advertises. S=<5ms, M=<15ms, L=<50ms. */
  budget?: 'S' | 'M' | 'L';
  /** Default activation state when listed. */
  active?: boolean;
  /** Tags for fuzzy search and filtering. */
  tags?: string[];
  /** "Available", "Beta", or "Research" maturity. */
  status: 'available' | 'beta' | 'research';
  /** ADR back-reference. */
  adr?: string;
  /** What actually happens when active — see AppRuntime docs. */
  runtime?: AppRuntime;
}

export const APPS: AppManifest[] = [
  // ── Pipeline simulators ──────────────────────────────────────────────────
  {
    id: 'nvsim',
    name: 'nvsim — NV-diamond magnetometer',
    name_ja: 'nvsim — NVセンターダイヤモンド磁気計',
    category: 'sim',
    crate: 'nvsim',
    summary:
      'Deterministic forward simulator: scene → Biot–Savart → NV ensemble → ADC → MagFrame stream + SHA-256 witness.',
    summary_ja:
      '決定論的順方向シミュレータ: シーン → ビオ・サバール → NVアンサンブル → ADC → MagFrameストリーム + SHA-256ウィトネス',
    budget: 'L',
    active: true,
    status: 'available',
    tags: ['quantum', 'magnetometer', 'simulator', 'witness', 'wasm'],
    adr: 'ADR-089',
    runtime: 'running',
  },

  // ── Core sensing primitives (ADR-014/040 flagship modules) ───────────────
  {
    id: 'gesture',
    name: 'Gesture (DTW)',
    name_ja: 'ジェスチャー認識 (DTW)',
    category: 'sig',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'Dynamic-Time-Warping gesture classifier from CSI motion templates.',
    summary_ja: 'CSI動態テンプレートからの動的時間伸縮（DTW）ジェスチャー分類器',
    events: [1],
    budget: 'M',
    status: 'available',
    tags: ['hci', 'csi', 'classifier', 'dtw'],
    adr: 'ADR-014',
    runtime: 'mesh-only',
  },
  {
    id: 'coherence',
    name: 'Coherence gate',
    name_ja: 'コヒーレンスゲート',
    category: 'sig',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'Z-score coherence scoring + Accept/PredictOnly/Reject/Recalibrate gate.',
    summary_ja: 'Zスコアコヒーレンス評価 ＋ 受理/予測専用/拒絶/再校正判定ゲート',
    events: [2],
    budget: 'S',
    status: 'available',
    tags: ['gate', 'csi', 'coherence', 'drift'],
    adr: 'ADR-029',
    runtime: 'simulated',
  },
  {
    id: 'adversarial',
    name: 'Adversarial-signal detector',
    name_ja: '敵対的信号検知器',
    category: 'ais',
    crate: 'wifi-densepose-wasm-edge',
    summary:
      'Physically-impossible-signal detector — multi-link consistency, used to flag spoofed CSI.',
    summary_ja:
      '物理的非整合信号検出器 — 複数リンク間の一貫性を評価し、偽装CSIを検知',
    events: [3],
    budget: 'M',
    status: 'available',
    tags: ['security', 'csi', 'spoofing', 'mesh'],
    adr: 'ADR-032',
    runtime: 'simulated',
  },
  {
    id: 'rvf',
    name: 'RVF — Rust Verified Feature stream',
    name_ja: 'RVF — Rust検証済み特徴ストリーム',
    category: 'sig',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'Verified-frame builder with SHA-256 hash + version metadata for the feature stream.',
    summary_ja: '特徴ストリーム用SHA-256ハッシュ＋バージョンメタデータ付き検証済みフレームビルダー',
    budget: 'S',
    status: 'available',
    tags: ['witness', 'csi', 'hash'],
    adr: 'ADR-040',
  },
  {
    id: 'occupancy',
    name: 'Occupancy estimator',
    name_ja: '在室者数推定器',
    category: 'bld',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'Through-wall presence + person-count via CSI amplitude perturbation.',
    summary_ja: 'CSI振幅摂動解析による壁越し存在検知および人数カウント',
    events: [300, 301, 302],
    budget: 'S',
    status: 'available',
    tags: ['csi', 'building', 'presence'],
    runtime: 'simulated',
  },
  {
    id: 'vital_trend',
    name: 'Vital-trend monitor',
    name_ja: 'バイタル傾向モニター',
    category: 'med',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'HR + BR trend tracking with bradycardia/tachycardia/apnea events.',
    summary_ja: '心拍数・呼吸数の傾向トラッキング（徐脈/頻脈/無呼吸イベント検知対応）',
    events: [100, 101, 102, 103, 104, 105],
    budget: 'S',
    status: 'available',
    tags: ['medical', 'vitals', 'csi'],
    adr: 'ADR-021',
    runtime: 'simulated',
  },
  {
    id: 'intrusion',
    name: 'Intrusion detector',
    name_ja: '侵入検知器',
    category: 'sec',
    crate: 'wifi-densepose-wasm-edge',
    summary: 'Zone-based intrusion alert from CSI motion patterns.',
    summary_ja: 'CSI動態パターンに基づくゾーン別侵入アラート',
    events: [200, 201],
    budget: 'S',
    status: 'available',
    tags: ['security', 'zone', 'csi'],
    runtime: 'simulated',
  },

  // ── Medical & Health (100-series) ────────────────────────────────────────
  { id: 'med_sleep_apnea', name: 'Sleep-apnea detector', name_ja: '睡眠時無呼吸検知器', category: 'med', crate: 'wifi-densepose-wasm-edge', summary: 'Episodic respiratory pause detection during sleep cycles.', summary_ja: '睡眠サイクル中におけるエピソード的呼吸停止の検出', events: [105], budget: 'S', status: 'available', tags: ['medical', 'sleep', 'breathing'] },
  { id: 'med_cardiac_arrhythmia', name: 'Cardiac arrhythmia', name_ja: '不整脈分類器', category: 'med', crate: 'wifi-densepose-wasm-edge', summary: 'Beat-to-beat irregularity classifier from cardiac micro-Doppler.', summary_ja: '心拍マイクロドップラーに基づく拍動間隔不整の分類', events: [103, 104], budget: 'M', status: 'available', tags: ['medical', 'cardiac', 'arrhythmia'] },
  { id: 'med_respiratory_distress', name: 'Respiratory distress', name_ja: '呼吸促迫検知器', category: 'med', crate: 'wifi-densepose-wasm-edge', summary: 'Distress signature: rapid shallow breathing + accessory-muscle motion.', summary_ja: '呼吸促迫サインの検出: 浅促進呼吸と呼吸補助筋運動の解析', events: [101, 102], budget: 'S', status: 'available', tags: ['medical', 'breathing', 'icu'] },
  { id: 'med_gait_analysis', name: 'Gait analysis', name_ja: '歩行分析器', category: 'med', crate: 'wifi-densepose-wasm-edge', summary: 'Stride length, cadence, asymmetry from through-wall CSI pose tracking.', summary_ja: '壁越しCSI姿勢トラッキングに基づく歩幅・ケイデンス・左右非対称性の算出', budget: 'M', status: 'available', tags: ['medical', 'gait', 'pose'] },
  { id: 'med_seizure_detect', name: 'Seizure detector', name_ja: '痙攣発作検知器', category: 'med', crate: 'wifi-densepose-wasm-edge', summary: 'Tonic-clonic seizure motion signature.', summary_ja: '全般性強直間代発作（トニック・クロニック）運動パターンの検知', budget: 'M', status: 'beta', tags: ['medical', 'neuro'] },

  // ── Security (200-series) ────────────────────────────────────────────────
  { id: 'sec_perimeter_breach', name: 'Perimeter breach', name_ja: '外周境界侵入検知', category: 'sec', crate: 'wifi-densepose-wasm-edge', summary: 'Approach/departure detection at user-defined boundary segments.', summary_ja: 'ユーザー定義境界セグメントにおける接近・離脱の検出', events: [210, 211, 212, 213], budget: 'S', status: 'available', tags: ['security', 'perimeter'] },
  { id: 'sec_weapon_detect', name: 'Metal anomaly / weapon', name_ja: '金属異常・武器検知', category: 'sec', crate: 'wifi-densepose-wasm-edge', summary: 'Metal-perturbation flag in CSI; potential weapon presence (research).', summary_ja: 'CSIにおける金属摂動フラグ検出（武器存在の可能性検知・研究段階）', events: [220, 221, 222], budget: 'M', status: 'research', tags: ['security', 'metal', 'csi'] },
  { id: 'sec_tailgating', name: 'Tailgating detector', name_ja: '共連れ検知器', category: 'sec', crate: 'wifi-densepose-wasm-edge', summary: 'Detect 2+ persons crossing a single-passage threshold.', summary_ja: '単一通行境界を複数人が同時に通過する共連れ動作の検出', events: [230, 231, 232], budget: 'S', status: 'available', tags: ['security', 'access-control'] },
  { id: 'sec_loitering', name: 'Loitering detector', name_ja: '徘徊・長滞在検知器', category: 'sec', crate: 'wifi-densepose-wasm-edge', summary: 'Stationary occupancy past a configurable dwell threshold.', summary_ja: '設定された滞留閾値を超える静止在室の検出', events: [240, 241, 242], budget: 'S', status: 'available', tags: ['security', 'dwell'] },
  { id: 'sec_panic_motion', name: 'Panic motion', name_ja: 'パニック運動検知器', category: 'sec', crate: 'wifi-densepose-wasm-edge', summary: 'High-energy distress motion: struggle / fleeing pattern.', summary_ja: '高エネルギーの困惑・もがき・逃走パターンの検出', events: [250, 251, 252], budget: 'S', status: 'beta', tags: ['security', 'distress'] },

  // ── Smart Building (300-series) ──────────────────────────────────────────
  { id: 'bld_hvac_presence', name: 'HVAC presence', name_ja: 'HVAC連動在室検知', category: 'bld', crate: 'wifi-densepose-wasm-edge', summary: 'Occupied/activity-level/departure-countdown for HVAC zones.', summary_ja: 'HVACゾーン別の在室状況・活動レベル・退室カウントダウン出力', events: [310, 311, 312], budget: 'S', status: 'available', tags: ['hvac', 'building', 'energy'] },
  { id: 'bld_lighting_zones', name: 'Lighting zones', name_ja: '照明ゾーン制御', category: 'bld', crate: 'wifi-densepose-wasm-edge', summary: 'Per-zone light on/dim/off cues from occupancy.', summary_ja: '在室状況に基づくゾーン別照明点灯・調光・消灯シグナル出力', events: [320, 321, 322], budget: 'S', status: 'available', tags: ['lighting', 'building'] },
  { id: 'bld_elevator_count', name: 'Elevator count', name_ja: 'エレベーター内人数カウント', category: 'bld', crate: 'wifi-densepose-wasm-edge', summary: 'Person count inside elevator car from CSI.', summary_ja: 'CSI信号解析によるエレベーター籠内のリアルタイム人数計測', events: [330], budget: 'S', status: 'available', tags: ['elevator', 'building'] },
  { id: 'bld_meeting_room', name: 'Meeting-room utilization', name_ja: '会議室利用率分析', category: 'bld', crate: 'wifi-densepose-wasm-edge', summary: 'Meeting size + duration analytics for booking systems.', summary_ja: '予約システム向けの会議参加人数・利用時間アナリティクス', budget: 'S', status: 'available', tags: ['meeting', 'analytics'] },
  { id: 'bld_energy_audit', name: 'Energy audit', name_ja: 'エネルギー監査モジュール', category: 'bld', crate: 'wifi-densepose-wasm-edge', summary: 'Continuous occupancy-vs-HVAC-state audit for energy savings.', summary_ja: '省エネ最適化のための在室状況対HVAC稼働状態の継続監査', budget: 'M', status: 'available', tags: ['energy', 'audit'] },

  // ── Retail (400-series) ──────────────────────────────────────────────────
  { id: 'ret_queue_length', name: 'Queue length', name_ja: '行列長トラッキング', category: 'ret', crate: 'wifi-densepose-wasm-edge', summary: 'Live queue-length tracking for checkout / kiosks.', summary_ja: 'レジ・キオスク周辺のリアルタイム行列人数および長さの計測', budget: 'S', status: 'available', tags: ['retail', 'queue'] },
  { id: 'ret_dwell_heatmap', name: 'Dwell heatmap', name_ja: '滞留ヒートマップ', category: 'ret', crate: 'wifi-densepose-wasm-edge', summary: 'Per-zone dwell time accumulation; analytics-only export.', summary_ja: 'エリア別滞在時間の累積計測とアナリティクスデータ出力', budget: 'M', status: 'available', tags: ['retail', 'heatmap'] },
  { id: 'ret_customer_flow', name: 'Customer flow', name_ja: '動線フローマッピング', category: 'ret', crate: 'wifi-densepose-wasm-edge', summary: 'Origin-destination flow graph through a store layout.', summary_ja: '店舗レイアウト内における顧客の流入・流出動線グラフ構築', budget: 'M', status: 'available', tags: ['retail', 'flow'] },
  { id: 'ret_table_turnover', name: 'Table turnover', name_ja: 'テーブル回転率モニター', category: 'ret', crate: 'wifi-densepose-wasm-edge', summary: 'Restaurant table seat / vacate transitions.', summary_ja: '飲食店における着席・離席状態の遷移検知', budget: 'S', status: 'available', tags: ['retail', 'restaurant'] },
  { id: 'ret_shelf_engagement', name: 'Shelf engagement', name_ja: '商品棚エンゲージメント検知', category: 'ret', crate: 'wifi-densepose-wasm-edge', summary: 'Reach-to-shelf gestures and dwell at product zones.', summary_ja: '商品棚への手を伸ばす動作および滞留時間の検出', budget: 'M', status: 'available', tags: ['retail', 'shelf'] },

  // ── Industrial (500-series) ──────────────────────────────────────────────
  { id: 'ind_forklift_proximity', name: 'Forklift proximity', name_ja: 'フォークリフト接近警報', category: 'ind', crate: 'wifi-densepose-wasm-edge', summary: 'Worker-near-forklift safety alert.', summary_ja: '作業員とフォークリフトの接触危険領域への接近アラート', budget: 'S', status: 'available', tags: ['industrial', 'safety'] },
  { id: 'ind_confined_space', name: 'Confined-space monitor', name_ja: '密閉空間監視モニター', category: 'ind', crate: 'wifi-densepose-wasm-edge', summary: 'Last-person-out detection + presence audit for OSHA confined-space entries.', summary_ja: 'OSHA規格に準拠した密閉空間における最終退室確認および入室監査', budget: 'S', status: 'available', tags: ['industrial', 'osha'] },
  { id: 'ind_clean_room', name: 'Clean-room PPE / motion', name_ja: 'クリーンルーム作業動作確認', category: 'ind', crate: 'wifi-densepose-wasm-edge', summary: 'Motion patterns consistent with proper PPE-clad movement.', summary_ja: '適切な防塵服（PPE）着用状態の動作パターン適合性検証', budget: 'M', status: 'beta', tags: ['industrial', 'cleanroom'] },
  { id: 'ind_livestock_monitor', name: 'Livestock monitor', name_ja: '家畜バイタル・行動モニター', category: 'ind', crate: 'wifi-densepose-wasm-edge', summary: 'Vital-sign + activity tracking for stall-bound livestock.', summary_ja: '牛舎・豚舎等の家畜におけるバイタルサインおよび活動量計測', budget: 'M', status: 'beta', tags: ['agriculture', 'livestock'] },
  { id: 'ind_structural_vibration', name: 'Structural vibration', name_ja: '構造物微振動モニター', category: 'ind', crate: 'wifi-densepose-wasm-edge', summary: 'Building/equipment micro-vibration via CSI phase derivative.', summary_ja: 'CSI位相微分による建物・産業機器の微小振動検出', budget: 'M', status: 'research', tags: ['industrial', 'vibration'] },

  // ── Signal primitives (600-series) ───────────────────────────────────────
  { id: 'sig_coherence_gate', name: 'Coherence gate (extended)', name_ja: '拡張コヒーレンスゲート', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: 'Hysteresis + multi-state coherence gate driving downstream apps.', summary_ja: '後続アプリを駆動するヒステリシス付きマルチステート・コヒーレンス判定', budget: 'S', status: 'available', tags: ['gate', 'csi'] },
  { id: 'sig_flash_attention', name: 'Flash attention (CSI)', name_ja: 'Flash Attention (CSI)', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: 'Edge-friendly attention block for CSI subcarrier weighting.', summary_ja: 'CSIサブキャリア重み付け用のエッジ最適化アテンションブロック', budget: 'M', status: 'beta', tags: ['attention', 'csi'] },
  { id: 'sig_temporal_compress', name: 'Temporal-tensor compress', name_ja: '時系列テンソル圧縮', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: 'RuVector temporal-tensor compression on the CSI buffer.', summary_ja: 'CSIバッファに対するRuVector時系列テンソルデータ圧縮', budget: 'M', status: 'available', tags: ['compress', 'tensor'] },
  { id: 'sig_sparse_recovery', name: 'Sparse recovery', name_ja: 'スパース信号復元', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: '114→56 subcarrier sparse interpolation via L1 solver.', summary_ja: 'L1ソルバーを用いた114→56サブキャリアのスパース補間処理', budget: 'M', status: 'available', tags: ['sparse', 'csi'] },
  { id: 'sig_mincut_person_match', name: 'Mincut person-match', name_ja: '最小カット人物照合', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: 'Min-cut person assignment across multistatic frames.', summary_ja: 'マルチスタティックフレーム間における最小カット法による同一人物割り当て', budget: 'M', status: 'available', tags: ['mincut', 'matching'] },
  { id: 'sig_optimal_transport', name: 'Optimal transport', name_ja: '最適輸送アライメント', category: 'sig', crate: 'wifi-densepose-wasm-edge', summary: 'OT-based feature alignment between mesh nodes.', summary_ja: 'メッシュノード間での最適輸送（OT）に基づく特徴量アライメント', budget: 'M', status: 'beta', tags: ['ot', 'alignment'] },

  // ── Online learning ──────────────────────────────────────────────────────
  { id: 'lrn_dtw_gesture_learn', name: 'DTW gesture learn', name_ja: 'DTWジェスチャーオンデバイス学習', category: 'lrn', crate: 'wifi-densepose-wasm-edge', summary: 'On-device template learning for personalized gesture libraries.', summary_ja: 'パーソナライズされたジェスチャーライブラリのためのデバイス内テンプレート学習', budget: 'M', status: 'beta', tags: ['lifelong', 'gesture'] },
  { id: 'lrn_anomaly_attractor', name: 'Anomaly attractor', name_ja: 'アノーマリーアトラクター', category: 'lrn', crate: 'wifi-densepose-wasm-edge', summary: 'Novelty detector with dynamic-attractor recall.', summary_ja: '動的アトラクター記憶を備えた未知・異常パターン検出器', budget: 'M', status: 'research', tags: ['novelty', 'lifelong'] },
  { id: 'lrn_meta_adapt', name: 'Meta-adapt', name_ja: 'メタ適応モジュール', category: 'lrn', crate: 'wifi-densepose-wasm-edge', summary: 'Meta-learning adapter for fast site-to-site transfer.', summary_ja: '拠点間での迅速な環境適応を実現するメタ学習アダプター', budget: 'L', status: 'research', tags: ['meta-learning'] },
  { id: 'lrn_ewc_lifelong', name: 'EWC++ lifelong', name_ja: 'EWC++ 継続学習ゲート', category: 'lrn', crate: 'wifi-densepose-wasm-edge', summary: 'Elastic-weight-consolidation gate to avoid catastrophic forgetting.', summary_ja: '破滅的忘却を防止する弾性重み統合（EWC++）制御ゲート', budget: 'M', status: 'beta', tags: ['lifelong', 'ewc'] },

  // ── Spatial / graph ──────────────────────────────────────────────────────
  { id: 'spt_pagerank_influence', name: 'PageRank influence', name_ja: 'PageRankノード影響度分析', category: 'spt', crate: 'wifi-densepose-wasm-edge', summary: 'Graph-influence ranking on the multistatic mesh.', summary_ja: 'マルチスタティックメッシュ上でのグラフ影響度スコアリング', budget: 'M', status: 'beta', tags: ['graph', 'pagerank'] },
  { id: 'spt_micro_hnsw', name: 'µHNSW vector index', name_ja: 'µHNSW ベクトルインデックス', category: 'spt', crate: 'wifi-densepose-wasm-edge', summary: 'Tiny HNSW index for AETHER re-ID embeddings on-device.', summary_ja: 'AETHER再識別（re-ID）埋め込み用の超軽量オンデバイスHNSWインデックス', budget: 'M', status: 'available', tags: ['hnsw', 'reid'] },
  { id: 'spt_spiking_tracker', name: 'Spiking tracker', name_ja: 'スパイキング・ニューラル・トラッカー', category: 'spt', crate: 'wifi-densepose-wasm-edge', summary: 'Spiking-network multi-target tracker.', summary_ja: 'スパイキングニューラルネットワーク（SNN）を用いた複数対象トラッカー', budget: 'L', status: 'research', tags: ['snn', 'tracker'] },

  // ── Temporal / planning ──────────────────────────────────────────────────
  { id: 'tmp_pattern_sequence', name: 'Pattern sequence', name_ja: '時系列パターンシーケンサー', category: 'tmp', crate: 'wifi-densepose-wasm-edge', summary: 'Sequence-of-events pattern matcher (e.g. ingress→linger→egress).', summary_ja: '一連のイベント順序パターンマッチング（例: 入室→滞留→退室）', budget: 'M', status: 'available', tags: ['temporal', 'pattern'] },
  { id: 'tmp_temporal_logic_guard', name: 'Temporal logic guard', name_ja: '時相ロジックガード', category: 'tmp', crate: 'wifi-densepose-wasm-edge', summary: 'LTL/MTL safety-property guard over event streams.', summary_ja: 'イベントストリームに対するLTL/MTL時相論理による安全要件検証', budget: 'M', status: 'beta', tags: ['ltl', 'safety'] },
  { id: 'tmp_goap_autonomy', name: 'GOAP autonomy', name_ja: 'GOAP自律計画エンジン', category: 'tmp', crate: 'wifi-densepose-wasm-edge', summary: 'Goal-oriented action planning for adaptive routines.', summary_ja: '適応型ルーチンを実行する目標指向型アクション計画（GOAP）', budget: 'L', status: 'research', tags: ['planning', 'autonomy'] },

  // ── AI safety ────────────────────────────────────────────────────────────
  { id: 'ais_prompt_shield', name: 'Prompt shield', name_ja: 'プロンプトシールド', category: 'ais', crate: 'wifi-densepose-wasm-edge', summary: 'Edge-side LLM prompt-injection guard for on-device assistants.', summary_ja: 'オンデバイスAIアシスタント向けエッジ側LLMプロンプトインジェクション防護', budget: 'M', status: 'beta', tags: ['security', 'llm'] },
  { id: 'ais_behavioral_profiler', name: 'Behavioral profiler', name_ja: '行動プロファイラー', category: 'ais', crate: 'wifi-densepose-wasm-edge', summary: 'Anomalous-behaviour profiler (drift in motion habits).', summary_ja: '日常の運動習慣のドリフトを検出する行動パターンプロファイラー', budget: 'M', status: 'beta', tags: ['anomaly', 'behaviour'] },

  // ── Quantum-flavoured ────────────────────────────────────────────────────
  { id: 'qnt_quantum_coherence', name: 'Quantum coherence', name_ja: '量子コヒーレンス診断', category: 'qnt', crate: 'wifi-densepose-wasm-edge', summary: 'Coherence diagnostics adapted for quantum-sensor signals.', summary_ja: '量子センサー信号に最適化されたコヒーレンス評価・診断モジュール', budget: 'M', status: 'research', tags: ['quantum', 'coherence'] },
  { id: 'qnt_interference_search', name: 'Interference search', name_ja: '干渉パターン異常捜索', category: 'qnt', crate: 'wifi-densepose-wasm-edge', summary: 'Interferometric anomaly search across mesh viewpoints.', summary_ja: 'メッシュの複数視点にわたる干渉計測型異常パターンの捜索', budget: 'L', status: 'research', tags: ['quantum', 'interference'] },

  // ── Autonomy / mesh ──────────────────────────────────────────────────────
  { id: 'aut_psycho_symbolic', name: 'Psycho-symbolic agent', name_ja: 'サイコシンボリックエージェント', category: 'aut', crate: 'wifi-densepose-wasm-edge', summary: 'Symbolic-rule + neural-feature hybrid for low-power autonomy loops.', summary_ja: '低消費電力自律制御のための記号論理規則＋ニューラル特徴量のハイブリッド手法', budget: 'L', status: 'research', tags: ['autonomy', 'symbolic'] },
  { id: 'aut_self_healing_mesh', name: 'Self-healing mesh', name_ja: 'セルフヒーリング・メッシュ', category: 'aut', crate: 'wifi-densepose-wasm-edge', summary: 'Mesh-topology repair with per-node health gossip.', summary_ja: 'ノード間ヘルスゴシッププロトコルによるメッシュトポロジー自動修復', budget: 'M', status: 'beta', tags: ['mesh', 'health'] },

  // ── Exotic / Research (650-series) ───────────────────────────────────────
  { id: 'exo_ghost_hunter', name: 'Ghost hunter (anomaly)', name_ja: 'ゴーストハンター (環境異常検知)', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Empty-room CSI anomaly detector — impulsive/periodic/drift/random + hidden-presence sub-detector.', summary_ja: '無人部屋CSI異常検知器 — 突発/周期/ドリフト/ランダムノイズ ＋ 隠れた存在サブ検知', events: [650, 651, 652, 653], budget: 'S', status: 'available', tags: ['anomaly', 'paranormal', 'csi'], adr: 'ADR-041', runtime: 'simulated' },
  { id: 'exo_breathing_sync', name: 'Breathing sync', name_ja: '複数人呼吸同期アナリティクス', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Multi-person breathing synchrony analytics.', summary_ja: '複数人物間における呼吸リズムの同期度分析', budget: 'M', status: 'beta', tags: ['breathing', 'sync'] },
  { id: 'exo_dream_stage', name: 'Dream-stage classifier', name_ja: '夢判定・睡眠ステージ分類', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'NREM/REM stage classification from breathing + micro-motion.', summary_ja: '呼吸および微少運動に基づくノンレム/レム睡眠ステージ分類', budget: 'M', status: 'research', tags: ['sleep', 'rem'] },
  { id: 'exo_emotion_detect', name: 'Emotion detector', name_ja: '感情推定器', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Coarse arousal/valence from breathing + heart-rate variability.', summary_ja: '呼吸と心拍変動（HRV）に基づく概略覚醒度・弁別度推定', budget: 'M', status: 'research', tags: ['affect'] },
  { id: 'exo_gesture_language', name: 'Gesture language', name_ja: '手話ジェスチャー認識', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Sign-language pattern recognition.', summary_ja: 'CSIに基づく手話運動パターンの認識', budget: 'L', status: 'research', tags: ['hci', 'sign'] },
  { id: 'exo_happiness_score', name: 'Happiness score', name_ja: '幸福度・ウェルビーイングスコア', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Aggregate well-being score from co-occupancy + activity dynamics.', summary_ja: '同室滞在動態および活動度からの総合的ウェルビーイング算出', budget: 'M', status: 'research', tags: ['affect', 'wellbeing'] },
  { id: 'exo_hyperbolic_space', name: 'Hyperbolic space embed', name_ja: '双曲空間埋め込み', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Hyperbolic embeddings for hierarchical scene structure.', summary_ja: '階層的シーン構造表現のための双曲空間埋め込み（Hyperbolic Embeddings）', budget: 'L', status: 'research', tags: ['embedding', 'hyperbolic'] },
  { id: 'exo_music_conductor', name: 'Music conductor', name_ja: 'ミュージックコンダクター', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Map gesture energy to MIDI tempo/dynamics.', summary_ja: '体のジェスチャーエネルギーをMIDIテンポおよびダイナミクスに変換', budget: 'M', status: 'research', tags: ['midi', 'art'] },
  { id: 'exo_plant_growth', name: 'Plant-growth tracker', name_ja: '植物成長トラッカー', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Slow CSI drift tracking for greenhouse foliage growth.', summary_ja: '温室内植物の成長に伴うCSIの緩慢なドリフト測定', budget: 'L', status: 'research', tags: ['agriculture'] },
  { id: 'exo_rain_detect', name: 'Rain detector', name_ja: '降雨検知器', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Outdoor CSI signature of rainfall.', summary_ja: '屋外WiFi CSIシグネチャによる降雨の非接触検知', budget: 'M', status: 'research', tags: ['weather'] },
  { id: 'exo_time_crystal', name: 'Time-crystal periodicity', name_ja: 'タイムクリスタル周期性診断', category: 'exo', crate: 'wifi-densepose-wasm-edge', summary: 'Periodicity diagnostics with anti-aliasing harmonics.', summary_ja: 'アンチエイリアシング高調波を備えた周期性診断モジュール', budget: 'M', status: 'research', tags: ['periodicity'] },
];

export const CATEGORIES: Record<AppCategory, { label: string; label_ja?: string; color: string; range: string }> = {
  sim: { label: 'Simulators', label_ja: 'シミュレータ', color: 'oklch(0.78 0.14 70)', range: '—' },
  med: { label: 'Medical & Health', label_ja: '医療', color: 'oklch(0.65 0.22 25)', range: '100–199' },
  sec: { label: 'Security & Safety', label_ja: '防犯・警備', color: 'oklch(0.7 0.18 35)', range: '200–299' },
  bld: { label: 'Smart Building', label_ja: 'スマートビル', color: 'oklch(0.78 0.12 195)', range: '300–399' },
  ret: { label: 'Retail & Hospitality', label_ja: '店舗・商業', color: 'oklch(0.78 0.14 145)', range: '400–499' },
  ind: { label: 'Industrial', label_ja: '産業', color: 'oklch(0.72 0.18 330)', range: '500–599' },
  sig: { label: 'Signal Processing', label_ja: '信号処理', color: 'oklch(0.78 0.14 70)', range: '600–619' },
  lrn: { label: 'Online Learning', label_ja: 'オンライン学習', color: 'oklch(0.78 0.12 260)', range: '620–639' },
  spt: { label: 'Spatial / Graph', label_ja: '空間・グラフ', color: 'oklch(0.7 0.18 100)', range: '640–659' },
  tmp: { label: 'Temporal / Planning', label_ja: '時相ロジック', color: 'oklch(0.7 0.16 50)', range: '660–679' },
  ais: { label: 'AI Safety', label_ja: 'AIセーフティ', color: 'oklch(0.65 0.22 25)', range: '700–719' },
  qnt: { label: 'Quantum', label_ja: '量子信号', color: 'oklch(0.72 0.18 290)', range: '720–739' },
  aut: { label: 'Autonomy', label_ja: '自律走行・メッシュ', color: 'oklch(0.78 0.14 145)', range: '740–759' },
  exo: { label: 'Exotic / Research', label_ja: '研究・特殊', color: 'oklch(0.72 0.18 330)', range: '650–699' },
};

export interface AppActivation {
  id: string;
  /** Active in the current session. */
  active: boolean;
  /** Last activation timestamp. */
  lastActivatedAt?: number;
  /** Last event count seen (for the cards' counter). */
  eventCount?: number;
}

export function defaultActivations(): AppActivation[] {
  return APPS.map((a) => ({ id: a.id, active: a.active === true, eventCount: 0 }));
}

export function appsByCategory(): Record<AppCategory, AppManifest[]> {
  const map = {} as Record<AppCategory, AppManifest[]>;
  for (const c of Object.keys(CATEGORIES) as AppCategory[]) map[c] = [];
  for (const a of APPS) map[a.category].push(a);
  return map;
}

export function findApp(id: string): AppManifest | undefined {
  return APPS.find((a) => a.id === id);
}

export function fuzzyMatch(query: string, app: AppManifest): number {
  if (!query) return 1;
  const q = query.toLowerCase();
  let score = 0;
  if (app.id.toLowerCase().includes(q)) score += 3;
  if (app.name.toLowerCase().includes(q)) score += 3;
  if (app.name_ja?.toLowerCase().includes(q)) score += 3;
  if (app.summary.toLowerCase().includes(q)) score += 1;
  if (app.summary_ja?.toLowerCase().includes(q)) score += 1;
  if (app.tags?.some((t) => t.toLowerCase().includes(q))) score += 2;
  if (app.category === q) score += 5;
  return score;
}
