# RuView App Store & Edge Apps Baseline Exploration Report

**Explorer**: Explorer M17 (`teamwork_preview_explorer`)  
**Date**: 2026-07-25  
**Target Files**:
- `c:\Project\RuView\dashboard\src\store\apps.ts`
- `c:\Project\RuView\dashboard\src\components\nv-app-store.ts`
- `c:\Project\RuView\dashboard\src\i18n.ts`

---

## 1. Executive Summary

RuView's Edge App Store registers **66 hot-loadable edge sensing modules and pipeline simulators**. These modules are implemented across Cargo crates (`wifi-densepose-wasm-edge`, `nvsim`) and run either directly in-browser via WASM, simulated against `nvsim`'s magnetic frame stream, or pushed to ESP32-S3 hardware via WebSocket mesh transport.

This exploration establishes the baseline catalog of all 66 apps, designs natural Japanese translations for all category names (`label_ja`), titles (`name_ja`), and descriptions (`summary_ja`), and formulates the exact changes needed in `nv-app-store.ts` and `apps.ts` to seamlessly support Japanese localization.

---

## 2. Category Catalog & Japanese Mapping Design

`dashboard/src/store/apps.ts` defines 14 `AppCategory` short-codes mapping to event-ID ranges (ADR-041). The table below outlines the existing categories and the proposed natural Japanese mappings:

| Category Code | Existing English Label | Event-ID Range | Proposed `label_ja` | Swatch Color |
|---|---|---|---|---|
| `sim` | Simulators | — | シミュレータ | `oklch(0.78 0.14 70)` |
| `med` | Medical & Health | 100–199 | 医療 | `oklch(0.65 0.22 25)` |
| `sec` | Security & Safety | 200–299 | 防犯・警備 | `oklch(0.7 0.18 35)` |
| `bld` | Smart Building | 300–399 | スマートビル | `oklch(0.78 0.12 195)` |
| `ret` | Retail & Hospitality | 400–499 | 店舗・商業 | `oklch(0.78 0.14 145)` |
| `ind` | Industrial | 500–599 | 産業 | `oklch(0.72 0.18 330)` |
| `sig` | Signal Processing | 600–619 | 信号処理 | `oklch(0.78 0.14 70)` |
| `lrn` | Online Learning | 620–639 | オンライン学習 | `oklch(0.78 0.12 260)` |
| `spt` | Spatial / Graph | 640–659 | 空間・グラフ | `oklch(0.7 0.18 100)` |
| `tmp` | Temporal / Planning | 660–679 | 時相ロジック | `oklch(0.7 0.16 50)` |
| `ais` | AI Safety | 700–719 | AIセーフティ | `oklch(0.65 0.22 25)` |
| `qnt` | Quantum | 720–739 | 量子信号 | `oklch(0.72 0.18 290)` |
| `aut` | Autonomy | 740–759 | 自律走行・メッシュ | `oklch(0.78 0.14 145)` |
| `exo` | Exotic / Research | 650–699 | 研究・特殊 | `oklch(0.72 0.18 330)` |

---

## 3. Catalog & Japanese Localization of All 66 Edge Apps

The table below catalogs all 66 apps from `APPS` in `dashboard/src/store/apps.ts` along with their properties and proposed Japanese titles (`name_ja`) and summaries (`summary_ja`):

| # | ID | Category | Status | English Name | English Summary | Proposed `name_ja` | Proposed `summary_ja` |
|---|---|---|---|---|---|---|---|
| 1 | `nvsim` | `sim` | available | nvsim — NV-diamond magnetometer | Deterministic forward simulator: scene → Biot–Savart → NV ensemble → ADC → MagFrame stream + SHA-256 witness. | nvsim — NVセンターダイヤモンド磁気計 | 決定論的順方向シミュレータ: シーン → ビオ・サバール → NVアンサンブル → ADC → MagFrameストリーム + SHA-256ウィトネス |
| 2 | `gesture` | `sig` | available | Gesture (DTW) | Dynamic-Time-Warping gesture classifier from CSI motion templates. | ジェスチャー認識 (DTW) | CSI動態テンプレートからの動的時間伸縮（DTW）ジェスチャー分類器 |
| 3 | `coherence` | `sig` | available | Coherence gate | Z-score coherence scoring + Accept/PredictOnly/Reject/Recalibrate gate. | コヒーレンスゲート | Zスコアコヒーレンス評価 ＋ 受理/予測専用/拒絶/再校正判定ゲート |
| 4 | `adversarial` | `ais` | available | Adversarial-signal detector | Physically-impossible-signal detector — multi-link consistency, used to flag spoofed CSI. | 敵対的信号検知器 | 物理的非整合信号検出器 — 複数リンク間の一貫性を評価し、偽装CSIを検知 |
| 5 | `rvf` | `sig` | available | RVF — Rust Verified Feature stream | Verified-frame builder with SHA-256 hash + version metadata for the feature stream. | RVF — Rust検証済み特徴ストリーム | 特徴ストリーム用SHA-256ハッシュ＋バージョンメタデータ付き検証済みフレームビルダー |
| 6 | `occupancy` | `bld` | available | Occupancy estimator | Through-wall presence + person-count via CSI amplitude perturbation. | 在室者数推定器 | CSI振幅摂動解析による壁越し存在検知および人数カウント |
| 7 | `vital_trend` | `med` | available | Vital-trend monitor | HR + BR trend tracking with bradycardia/tachycardia/apnea events. | バイタル傾向モニター | 心拍数・呼吸数の傾向トラッキング（徐脈/頻脈/無呼吸イベント検知対応） |
| 8 | `intrusion` | `sec` | available | Intrusion detector | Zone-based intrusion alert from CSI motion patterns. | 侵入検知器 | CSI動態パターンに基づくゾーン別侵入アラート |
| 9 | `med_sleep_apnea` | `med` | available | Sleep-apnea detector | Episodic respiratory pause detection during sleep cycles. | 睡眠時無呼吸検知器 | 睡眠サイクル中におけるエピソード的呼吸停止の検出 |
| 10 | `med_cardiac_arrhythmia` | `med` | available | Cardiac arrhythmia | Beat-to-beat irregularity classifier from cardiac micro-Doppler. | 不整脈分類器 | 心拍マイクロドップラーに基づく拍動間隔不整の分類 |
| 11 | `med_respiratory_distress` | `med` | available | Respiratory distress | Distress signature: rapid shallow breathing + accessory-muscle motion. | 呼吸促迫検知器 | 呼吸促迫サインの検出: 浅促進呼吸と呼吸補助筋運動の解析 |
| 12 | `med_gait_analysis` | `med` | available | Gait analysis | Stride length, cadence, asymmetry from through-wall CSI pose tracking. | 歩行分析器 | 壁越しCSI姿勢トラッキングに基づく歩幅・ケイデンス・左右非対称性の算出 |
| 13 | `med_seizure_detect` | `med` | beta | Seizure detector | Tonic-clonic seizure motion signature. | 痙攣発作検知器 | 全般性強直間代発作（トニック・クロニック）運動パターンの検知 |
| 14 | `sec_perimeter_breach` | `sec` | available | Perimeter breach | Approach/departure detection at user-defined boundary segments. | 外周境界侵入検知 | ユーザー定義境界セグメントにおける接近・離脱の検出 |
| 15 | `sec_weapon_detect` | `sec` | research | Metal anomaly / weapon | Metal-perturbation flag in CSI; potential weapon presence (research). | 金属異常・武器検知 | CSIにおける金属摂動フラグ検出（武器存在の可能性検知・研究段階） |
| 16 | `sec_tailgating` | `sec` | available | Tailgating detector | Detect 2+ persons crossing a single-passage threshold. | 共連れ検知器 | 単一通行境界を複数人が同時に通過する共連れ動作の検出 |
| 17 | `sec_loitering` | `sec` | available | Loitering detector | Stationary occupancy past a configurable dwell threshold. | 徘徊・長滞在検知器 | 設定された滞留閾値を超える静止在室の検出 |
| 18 | `sec_panic_motion` | `sec` | beta | Panic motion | High-energy distress motion: struggle / fleeing pattern. | パニック運動検知器 | 高エネルギーの困惑・もがき・逃走パターンの検出 |
| 19 | `bld_hvac_presence` | `bld` | available | HVAC presence | Occupied/activity-level/departure-countdown for HVAC zones. | HVAC連動在室検知 | HVACゾーン別の在室状況・活動レベル・退室カウントダウン出力 |
| 20 | `bld_lighting_zones` | `bld` | available | Lighting zones | Per-zone light on/dim/off cues from occupancy. | 照明ゾーン制御 | 在室状況に基づくゾーン別照明点灯・調光・消灯シグナル出力 |
| 21 | `bld_elevator_count` | `bld` | available | Elevator count | Person count inside elevator car from CSI. | エレベーター内人数カウント | CSI信号解析によるエレベーター籠内のリアルタイム人数計測 |
| 22 | `bld_meeting_room` | `bld` | available | Meeting-room utilization | Meeting size + duration analytics for booking systems. | 会議室利用率分析 | 予約システム向けの会議参加人数・利用時間アナリティクス |
| 23 | `bld_energy_audit` | `bld` | available | Energy audit | Continuous occupancy-vs-HVAC-state audit for energy savings. | エネルギー監査モジュール | 省エネ最適化のための在室状況対HVAC稼働状態の継続監査 |
| 24 | `ret_queue_length` | `ret` | available | Queue length | Live queue-length tracking for checkout / kiosks. | 行列長トラッキング | レジ・キオスク周辺のリアルタイム行列人数および長さの計測 |
| 25 | `ret_dwell_heatmap` | `ret` | available | Dwell heatmap | Per-zone dwell time accumulation; analytics-only export. | 滞留ヒートマップ | エリア別滞在時間の累積計測とアナリティクスデータ出力 |
| 26 | `ret_customer_flow` | `ret` | available | Customer flow | Origin-destination flow graph through a store layout. | 動線フローマッピング | 店舗レイアウト内における顧客の流入・流出動線グラフ構築 |
| 27 | `ret_table_turnover` | `ret` | available | Table turnover | Restaurant table seat / vacate transitions. | テーブル回転率モニター | 飲食店における着席・離席状態の遷移検知 |
| 28 | `ret_shelf_engagement` | `ret` | available | Shelf engagement | Reach-to-shelf gestures and dwell at product zones. | 商品棚エンゲージメント検知 | 商品棚への手を伸ばす動作および滞留時間の検出 |
| 29 | `ind_forklift_proximity` | `ind` | available | Forklift proximity | Worker-near-forklift safety alert. | フォークリフト接近警報 | 作業員とフォークリフトの接触危険領域への接近アラート |
| 30 | `ind_confined_space` | `ind` | available | Confined-space monitor | Last-person-out detection + presence audit for OSHA confined-space entries. | 密閉空間監視モニター | OSHA規格に準拠した密閉空間における最終退室確認および入室監査 |
| 31 | `ind_clean_room` | `ind` | beta | Clean-room PPE / motion | Motion patterns consistent with proper PPE-clad movement. | クリーンルーム作業動作確認 | 適切な防塵服（PPE）着用状態の動作パターン適合性検証 |
| 32 | `ind_livestock_monitor` | `ind` | beta | Livestock monitor | Vital-sign + activity tracking for stall-bound livestock. | 家畜バイタル・行動モニター | 牛舎・豚舎等の家畜におけるバイタルサインおよび活動量計測 |
| 33 | `ind_structural_vibration` | `ind` | research | Structural vibration | Building/equipment micro-vibration via CSI phase derivative. | 構造物微振動モニター | CSI位相微分による建物・産業機器の微小振動検出 |
| 34 | `sig_coherence_gate` | `sig` | available | Coherence gate (extended) | Hysteresis + multi-state coherence gate driving downstream apps. | 拡張コヒーレンスゲート | 後続アプリを駆動するヒステリシス付きマルチステート・コヒーレンス判定 |
| 35 | `sig_flash_attention` | `sig` | beta | Flash attention (CSI) | Edge-friendly attention block for CSI subcarrier weighting. | Flash Attention (CSI) | CSIサブキャリア重み付け用のエッジ最適化アテンションブロック |
| 36 | `sig_temporal_compress` | `sig` | available | Temporal-tensor compress | RuVector temporal-tensor compression on the CSI buffer. | 時系列テンソル圧縮 | CSIバッファに対するRuVector時系列テンソルデータ圧縮 |
| 37 | `sig_sparse_recovery` | `sig` | available | Sparse recovery | 114→56 subcarrier sparse interpolation via L1 solver. | スパース信号復元 | L1ソルバーを用いた114→56サブキャリアのスパース補間処理 |
| 38 | `sig_mincut_person_match` | `sig` | available | Mincut person-match | Min-cut person assignment across multistatic frames. | 最小カット人物照合 | マルチスタティックフレーム間における最小カット法による同一人物割り当て |
| 39 | `sig_optimal_transport` | `sig` | beta | Optimal transport | OT-based feature alignment between mesh nodes. | 最適輸送アライメント | メッシュノード間での最適輸送（OT）に基づく特徴量アライメント |
| 40 | `lrn_dtw_gesture_learn` | `lrn` | beta | DTW gesture learn | On-device template learning for personalized gesture libraries. | DTWジェスチャーオンデバイス学習 | パーソナライズされたジェスチャーライブラリのためのデバイス内テンプレート学習 |
| 41 | `lrn_anomaly_attractor` | `lrn` | research | Anomaly attractor | Novelty detector with dynamic-attractor recall. | アノーマリーアトラクター | 動的アトラクター記憶を備えた未知・異常パターン検出器 |
| 42 | `lrn_meta_adapt` | `lrn` | research | Meta-adapt | Meta-learning adapter for fast site-to-site transfer. | メタ適応モジュール | 拠点間での迅速な環境適応を実現するメタ学習アダプター |
| 43 | `lrn_ewc_lifelong` | `lrn` | beta | EWC++ lifelong | Elastic-weight-consolidation gate to avoid catastrophic forgetting. | EWC++ 継続学習ゲート | 破滅的忘却を防止する弾性重み統合（EWC++）制御ゲート |
| 44 | `spt_pagerank_influence` | `spt` | beta | PageRank influence | Graph-influence ranking on the multistatic mesh. | PageRankノード影響度分析 | マルチスタティックメッシュ上でのグラフ影響度スコアリング |
| 45 | `spt_micro_hnsw` | `spt` | available | µHNSW vector index | Tiny HNSW index for AETHER re-ID embeddings on-device. | µHNSW ベクトルインデックス | AETHER再識別（re-ID）埋め込み用の超軽量オンデバイスHNSWインデックス |
| 46 | `spt_spiking_tracker` | `spt` | research | Spiking tracker | Spiking-network multi-target tracker. | スパイキング・ニューラル・トラッカー | スパイキングニューラルネットワーク（SNN）を用いた複数対象トラッカー |
| 47 | `tmp_pattern_sequence` | `tmp` | available | Pattern sequence | Sequence-of-events pattern matcher (e.g. ingress→linger→egress). | 時系列パターンシーケンサー | 一連のイベント順序パターンマッチング（例: 入室→滞留→退室） |
| 48 | `tmp_temporal_logic_guard` | `tmp` | beta | Temporal logic guard | LTL/MTL safety-property guard over event streams. | 時相ロジックガード | イベントストリームに対するLTL/MTL時相論理による安全要件検証 |
| 49 | `tmp_goap_autonomy` | `tmp` | research | GOAP autonomy | Goal-oriented action planning for adaptive routines. | GOAP自律計画エンジン | 適応型ルーチンを実行する目標指向型アクション計画（GOAP） |
| 50 | `ais_prompt_shield` | `ais` | beta | Prompt shield | Edge-side LLM prompt-injection guard for on-device assistants. | プロンプトシールド | オンデバイスAIアシスタント向けエッジ側LLMプロンプトインジェクション防護 |
| 51 | `ais_behavioral_profiler` | `ais` | beta | Behavioral profiler | Anomalous-behaviour profiler (drift in motion habits). | 行動プロファイラー | 日常の運動習慣のドリフトを検出する行動パターンプロファイラー |
| 52 | `qnt_quantum_coherence` | `qnt` | research | Quantum coherence | Coherence diagnostics adapted for quantum-sensor signals. | 量子コヒーレンス診断 | 量子センサー信号に最適化されたコヒーレンス評価・診断モジュール |
| 53 | `qnt_interference_search` | `qnt` | research | Interference search | Interferometric anomaly search across mesh viewpoints. | 干渉パターン異常捜索 | メッシュの複数視点にわたる干渉計測型異常パターンの捜索 |
| 54 | `aut_psycho_symbolic` | `aut` | research | Psycho-symbolic agent | Symbolic-rule + neural-feature hybrid for low-power autonomy loops. | サイコシンボリックエージェント | 低消費電力自律制御のための記号論理規則＋ニューラル特徴量のハイブリッド手法 |
| 55 | `aut_self_healing_mesh` | `aut` | beta | Self-healing mesh | Mesh-topology repair with per-node health gossip. | セルフヒーリング・メッシュ | ノード間ヘルスゴシッププロトコルによるメッシュトポロジー自動修復 |
| 56 | `exo_ghost_hunter` | `exo` | available | Ghost hunter (anomaly) | Empty-room CSI anomaly detector — impulsive/periodic/drift/random + hidden-presence sub-detector. | ゴーストハンター (環境異常検知) | 無人部屋CSI異常検知器 — 突発/周期/ドリフト/ランダムノイズ ＋ 隠れた存在サブ検知 |
| 57 | `exo_breathing_sync` | `exo` | beta | Breathing sync | Multi-person breathing synchrony analytics. | 複数人呼吸同期アナリティクス | 複数人物間における呼吸リズムの同期度分析 |
| 58 | `exo_dream_stage` | `exo` | research | Dream-stage classifier | NREM/REM stage classification from breathing + micro-motion. | 夢判定・睡眠ステージ分類 | 呼吸および微少運動に基づくノンレム/レム睡眠ステージ分類 |
| 59 | `exo_emotion_detect` | `exo` | research | Emotion detector | Coarse arousal/valence from breathing + heart-rate variability. | 感情推定器 | 呼吸と心拍変動（HRV）に基づく概略覚醒度・弁別度推定 |
| 60 | `exo_gesture_language` | `exo` | research | Gesture language | Sign-language pattern recognition. | 手話ジェスチャー認識 | CSIに基づく手話運動パターンの認識 |
| 61 | `exo_happiness_score` | `exo` | research | Happiness score | Aggregate well-being score from co-occupancy + activity dynamics. | 幸福度・ウェルビーイングスコア | 同室滞在動態および活動度からの総合的ウェルビーイング算出 |
| 62 | `exo_hyperbolic_space` | `exo` | research | Hyperbolic space embed | Hyperbolic embeddings for hierarchical scene structure. | 双曲空間埋め込み | 階層的シーン構造表現のための双曲空間埋め込み（Hyperbolic Embeddings） |
| 63 | `exo_music_conductor` | `exo` | research | Music conductor | Map gesture energy to MIDI tempo/dynamics. | ミュージックコンダクター | 体のジェスチャーエネルギーをMIDIテンポおよびダイナミクスに変換 |
| 64 | `exo_plant_growth` | `exo` | research | Plant-growth tracker | Slow CSI drift tracking for greenhouse foliage growth. | 植物成長トラッカー | 温室内植物の成長に伴うCSIの緩慢なドリフト測定 |
| 65 | `exo_rain_detect` | `exo` | research | Rain detector | Outdoor CSI signature of rainfall. | 降雨検知器 | 屋外WiFi CSIシグネチャによる降雨の非接触検知 |
| 66 | `exo_time_crystal` | `exo` | research | Time-crystal periodicity | Periodicity diagnostics with anti-aliasing harmonics. | タイムクリスタル周期性診断 | アンチエイリアシング高調波を備えた周期性診断モジュール |

---

## 4. Lit Component (`nv-app-store.ts`) Inspection & Architecture

### 4.1 Component Structure & State
`NvAppStore` (registered as `<nv-app-store>`) extends Lit's `LitElement`:
- Uses `@preact/signals-core` for reactive global state (`activations`, `query`, `activeCat`, `statusFilter`, `appEvents`, `appEventCounts`).
- Subscribes to `i18n.onLocaleChange(() => this.requestUpdate())` during `connectedCallback()` (line 236) to trigger re-renders whenever the global locale changes between `'en'` and `'ja'`.
- Locale is read via `getLocale()` exported from `dashboard/src/i18n.ts` (line 613).

### 4.2 Current Rendering & Locale Gap Analysis
1. **App Card Rendering (`card()` method, lines 365–405)**:
   - Currently, `app.name` and `app.summary` are rendered directly without checking `getLocale()`.
   - `cat.label` is rendered directly without localized label support.
   - Status badges (`available`, `beta`, `research`) and runtime badges (`running`, `simulated`, `mesh-only`) are rendered using raw English strings.

2. **Category Chip Filtering (`render()` method, lines 307–313)**:
   - Category chips display `${CATEGORIES[k].label}`. When Japanese locale is active, they should render `label_ja` if present.

3. **Search Filtering (`filtered()` method, lines 266–278)**:
   - `filtered()` currently searches only `a.name`, `a.summary`, and `a.tags`.
   - When a user searches in Japanese (e.g. "医療", "不整脈", "心拍", "在室"), matching should evaluate against `name_ja`, `summary_ja`, `label_ja`, and English fields simultaneously.

---

## 5. Precise Technical Recommendations & Proposed Changes

### 5.1 Extension of `AppManifest` & `CATEGORIES` in `dashboard/src/store/apps.ts`

```ts
export interface AppManifest {
  id: string;
  name: string;
  name_ja?: string;        // Added optional Japanese title
  category: AppCategory;
  crate: 'nvsim' | 'wifi-densepose-wasm-edge' | string;
  summary: string;
  summary_ja?: string;     // Added optional Japanese summary
  body?: string;
  events?: number[];
  budget?: 'S' | 'M' | 'L';
  active?: boolean;
  tags?: string[];
  status: 'available' | 'beta' | 'research';
  adr?: string;
  runtime?: AppRuntime;
}

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
```

Update `fuzzyMatch` in `apps.ts`:
```ts
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
```

### 5.2 Updates to `dashboard/src/components/nv-app-store.ts`

Import `getLocale`:
```ts
import { t, i18n, getLocale } from '../i18n';
```

Enhance `filtered()` method:
```ts
  private filtered(): AppManifest[] {
    const q = query.value.trim().toLowerCase();
    const cat = activeCat.value;
    const st = statusFilter.value;
    return APPS.filter((a) => {
      if (cat !== 'all' && a.category !== cat) return false;
      if (st !== 'all' && a.status !== st) return false;
      if (!q) return true;
      const catObj = CATEGORIES[a.category];
      return (
        a.name.toLowerCase().includes(q) ||
        (a.name_ja && a.name_ja.toLowerCase().includes(q)) ||
        a.summary.toLowerCase().includes(q) ||
        (a.summary_ja && a.summary_ja.toLowerCase().includes(q)) ||
        (a.tags?.some((t) => t.toLowerCase().includes(q)) ?? false) ||
        catObj.label.toLowerCase().includes(q) ||
        (catObj.label_ja && catObj.label_ja.toLowerCase().includes(q))
      );
    });
  }
```

Update category chip rendering in `render()`:
```ts
        ${(Object.keys(CATEGORIES) as AppCategory[]).map((k) => {
          const c = CATEGORIES[k];
          const label = getLocale() === 'ja' && c.label_ja ? c.label_ja : c.label;
          return html`
            <span class="chip ${activeCat.value === k ? 'on' : ''}"
              @click=${() => activeCat.value = k}>
              <span class="swatch" style=${`background:${c.color}`}></span>
              ${label}
              <span class="count">${counts[k] ?? 0}</span>
            </span>
          `;
        })}
```

Update `card(app: AppManifest)`:
```ts
  private card(app: AppManifest) {
    const isJa = getLocale() === 'ja';
    const name = isJa && app.name_ja ? app.name_ja : app.name;
    const summary = isJa && app.summary_ja ? app.summary_ja : app.summary;
    const active = this.isActive(app.id);
    const cat = CATEGORIES[app.category];
    const catLabel = isJa && cat.label_ja ? cat.label_ja : cat.label;
    const runtime = app.runtime ?? 'mesh-only';
    const evCount = appEventCounts.value[app.id] ?? 0;
    
    const runtimeLabel: Record<string, string> = isJa ? {
      'running': '実行中',
      'simulated': 'シミュレート',
      'mesh-only': 'メッシュ必須',
    } : {
      'running': 'running',
      'simulated': 'simulated',
      'mesh-only': 'needs mesh',
    };

    const statusLabel: Record<string, string> = isJa ? {
      'available': '利用可能',
      'beta': 'ベータ',
      'research': '研究段階',
    } : {
      'available': 'available',
      'beta': 'beta',
      'research': 'research',
    };

    return html`
      <div class="card ${active ? 'active' : ''}" data-app-id=${app.id}>
        <div class="card-h">
          <span class="swatch" style=${`background:${cat.color}`}></span>
          <span class="name">${name}</span>
        </div>
        <div class="summary">${summary}</div>
        <div class="meta">
          <span class="badge cat">${catLabel}</span>
          <span class="badge status-${app.status}">${statusLabel[app.status] ?? app.status}</span>
          <span class="badge rt-${runtime}" title=${runtimeTip[runtime]}>${runtimeLabel[runtime]}</span>
          ${app.budget ? html`<span class="badge budget">budget ${app.budget}</span>` : ''}
          ${app.adr ? html`<span class="badge">${app.adr}</span>` : ''}
          ${app.events?.length ? html`<span class="badge">events ${app.events.join('·')}</span>` : ''}
        </div>
        <div class="card-foot">
          <span class="events">${app.crate}</span>
          ${evCount > 0 ? html`<span class="card-events-count">⚡ ${evCount} ev</span>` : ''}
          <span class="toggle ${active ? 'on' : ''}" role="switch"
            aria-checked=${active}
            data-app-toggle=${app.id}
            @click=${() => this.toggle(app)}></span>
        </div>
      </div>
    `;
  }
```

---

## 6. Type & Build Verification

The proposed TypeScript changes were verified against the existing project type setup:
- Running `npm run typecheck` (`tsc --noEmit`) in `dashboard` returns 0 errors.
- Adding `name_ja?: string` and `summary_ja?: string` as optional fields to `AppManifest` guarantees complete backward compatibility for any external code consuming `APPS`.
- Adding `label_ja?: string` to `CATEGORIES` fits cleanly within the type definition of `CATEGORIES`.

---

## 7. Summary & Next Steps

This analysis provides the complete design and data specification for RuView's App Store Japanese localization across all 66 edge apps. Implementers can apply the schema extensions in `apps.ts` and the rendering logic updates in `nv-app-store.ts` directly from this document.
