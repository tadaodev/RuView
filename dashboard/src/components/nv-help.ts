import { getLocale } from '../i18n';

type Section = 'quickstart' | 'glossary' | 'faq' | 'shortcuts' | 'about';

interface GlossaryItem {
  term: string;
  body: string;
  category: 'physics' | 'rust' | 'ui';
}

const GLOSSARY_EN: GlossaryItem[] = [
  { term: 'NV-diamond', category: 'physics', body: 'Nitrogen-vacancy defect in synthetic diamond. The simulator models a 1 mm³ ensemble (~10¹² centers) addressed by 532 nm pump light + a 2.87 GHz microwave drive. Used as a room-temperature magnetometer with shot-noise floor ~1 pT/√Hz at the published lab record.' },
  { term: 'CW-ODMR', category: 'physics', body: 'Continuously-driven optically-detected magnetic resonance. Sweep the microwave frequency around the NV zero-field splitting (D = 2.87 GHz) and watch the photoluminescence dip when the microwave matches the spin transition. The dip splits with applied magnetic field along each of the four ⟨111⟩ NV axes.' },
  { term: 'MagFrame', category: 'rust', body: 'Fixed-layout 60-byte binary record nvsim emits per (sensor × sample). Magic 0xC51A_6E70, version 1, little-endian. Carries timestamp, recovered B vector (pT), per-axis sigma, noise floor, and flag bits for saturation / shot-noise-disabled / heavy-attenuation.' },
  { term: 'Witness', category: 'rust', body: 'SHA-256 hash over the concatenated MagFrame bytes for a canonical reference run (Proof::REFERENCE_SCENE_JSON @ seed=42, N=256). Same inputs → same hash, byte-for-byte, across runs and machines. The dashboard re-derives it in WASM and compares against Proof::EXPECTED_WITNESS_HEX pinned at build time.' },
  { term: 'Determinism gate', category: 'rust', body: 'A pass/fail check: did this build of nvsim produce the expected witness? If yes → every constant (γ_e, D_GS, μ₀, contrast, T₂*, the PRNG stream, the frame layout, the pipeline ordering) is byte-identical to the published reference. If no → something drifted; the dashboard names which.' },
  { term: 'Lock-in demod', category: 'physics', body: 'Multiply the photoluminescence signal by cos(2π·f_mod·t) and low-pass to recover the slowly-varying B-field component. The simulator emulates a lock-in with output gain 2 and a single-pole IIR LP filter; settable via the Tunables panel (f_mod default 1 kHz).' },
  { term: 'Shot-noise floor', category: 'physics', body: 'δB = 1 / (γ_e · C · √(N · t · T₂*)) — the irreducible quantum noise floor for an NV ensemble. With nvsim defaults (N=10¹², C=0.03, T₂*=200 ns): ≈1.18 pT/√Hz. Toggleable via the Tunables panel for "analytic" runs without noise.' },
  { term: 'Biot-Savart', category: 'physics', body: 'Closed-form magnetic field at a point from a current loop or a magnetic dipole. The Scene panel\'s sources (heart proxy, mains loop, ferrous body, eddy current) all reduce to Biot-Savart-style superpositions over the sensor position.' },
  { term: 'Multistatic fusion', category: 'physics', body: 'Combining evidence from multiple sensors at known geometric configurations. RuView\'s Cramer-Rao-weighted attention over WiFi CSI nodes + 60 GHz radar nodes + (hypothetically) NV nodes; documented in ADR-029 and the Ghost Murmur view.' },
  { term: 'Scene', category: 'ui', body: 'The simulated magnetic environment: a list of sources (dipole, current loop, ferrous body, eddy current) plus one or more sensor positions and an ambient field. The dashboard ships a "rebar-walkby-01" reference scene; click "New scene…" in the command palette (⌘K) to build your own.' },
  { term: 'Tunables', category: 'ui', body: 'Sliders that change the running pipeline\'s digitiser config. Each edit debounces 300 ms, then rebuilds the WASM pipeline with the new f_s / f_mod / dt / shot-noise setting. The frame stream picks up the change without a restart.' },
  { term: 'Transport', category: 'ui', body: 'How the dashboard talks to nvsim. Default is WASM — the simulator runs in a Web Worker right here in your browser, no server. The optional WS transport is REST + binary WebSocket against a host-supplied nvsim-server (see ADR-092 §6.2). Toggle in Settings.' },
  { term: 'App Store', category: 'ui', body: 'Catalog of all 65+ hot-loadable WASM edge modules from wifi-densepose-wasm-edge plus the simulators. Each card carries id / category / status / event IDs; the toggle marks an app active in this session and (in WS mode) pushes the activation to a connected ESP32 mesh.' },
  { term: 'Ghost Murmur', category: 'ui', body: 'Research view that audits the publicly-reported April 2026 CIA NV-diamond heartbeat detector against the open physics literature. Includes a live "Try it yourself" sandbox where you can place a heart dipole at any distance from the sensor and ask: which transport tier would actually detect it?' },
];

const GLOSSARY_JA: GlossaryItem[] = [
  { term: 'NVセンターダイヤモンド (NV-diamond)', category: 'physics', body: '人工ダイヤモンド中の窒素-空孔欠陥格子。本シミュレータは532nm励起光＋2.87GHzマイクロ波で制御される1mm³（約10¹²個の欠陥）の集合体をモデル化。ショット雑音限界〜1 pT/√Hzの室温量子磁気センサーとして機能します。' },
  { term: '連続光検出磁気共鳴 (CW-ODMR)', category: 'physics', body: 'マイクロ波周波数をゼロ場分裂(D=2.87GHz)付近で掃引し、電子スピン遷移に一致した際の蛍光強度低下を測定。外部磁場印加により、4つの⟨111⟩軸方向に共鳴線が分裂します。' },
  { term: 'MagFrame (バイナリフレーム)', category: 'rust', body: 'nvsimが(センサー×サンプル)毎に発行する固定長60バイトのバイナリ構造体。マジック0xC51A_6E70、タイムスタンプ、復元Bベクター(pT)、軸毎の標準偏差、雑音床、フラグを保持。' },
  { term: 'ウィトネス証明 (Witness)', category: 'rust', body: '標準参照実行(Proof::REFERENCE_SCENE_JSON @ seed=42, N=256)の全MagFrameバイナリを連結したSHA-256ハッシュ。入力が同一であればマシン・環境を問わず完全に一致する確定性証明。' },
  { term: '確定性検証ゲート (Determinism gate)', category: 'rust', body: 'ビルドされたnvsimが期待されるウィトネスハッシュを正しく出力したかを判定するパス/フェイルチェック。全物理定数と乱数生成器の一致を検証します。' },
  { term: 'ロックイン検波 (Lock-in demod)', category: 'physics', body: '蛍光シグナルにcos(2π·f_mod·t)を乗算しローパスフィルタを通すことで、緩やかに変化する磁場成分を復元。 Tunablesパネルでf_modパラメータを調整可能。' },
  { term: 'ショット雑音限界 (Shot-noise floor)', category: 'physics', body: 'δB = 1 / (γ_e · C · √(N · t · T₂*)) — NV欠陥集合体における不可避の量子雑音床。デフォルト設定(N=10¹², C=0.03, T₂*=200ns)で約1.18 pT/√Hz。' },
  { term: 'ビオ・サバールの法則 (Biot-Savart)', category: 'physics', body: '電流ループや磁気双極子から生じる空間上の磁場ベクトル計算式。Sceneパネル内の全磁源（心拍、商用電源、鉄筋体）はビオ・サバール重ね合わせで計算されます。' },
  { term: 'マルチスタティック統合 (Multistatic fusion)', category: 'physics', body: '複数センサーの空間配置情報とCramer-Rao重み付けアテンションを組み合わせ、WiFi CSI＋60GHzレーダー＋NVセンサーのデータを高精度統合する技術。' },
  { term: 'シーン (Scene)', category: 'ui', body: 'シミュレート対象の磁気環境。磁源（双極子、電流ループ、鉄筋体等）とセンサー位置、環境磁場を設定。コマンドパレット(Ctrl+K / ⌘K)から「新規シーン構築」が可能。' },
  { term: 'Tunables (設定パラメータ)', category: 'ui', body: 'デジタイザおよび物理モデルのパラメータ調整スライダー。デバウンス後に自動再計算され、ストリームへ即座に反映されます。' },
  { term: 'トランスポート (Transport)', category: 'ui', body: 'ダッシュボードとシミュレータ間の通信方式。デフォルトのWASMモードはブラウザ内のWeb Workerでローカル実行されサーバー不要。' },
  { term: 'App Store (エッジアプリカタログ)', category: 'ui', body: 'wifi-densepose-wasm-edgeの65種類以上のホットロード可能なエッジモジュールカタログ。有効化・無効化の切り替えが可能。' },
  { term: 'Ghost Murmur (心拍検知検証)', category: 'ui', body: '心拍による微弱磁場が実際のNVセンサーで検出可能かを物理原理に基づき検証する研究用インターフェース。' },
];

const FAQ_EN = [
  {
    q: 'Is this a real simulator or a mockup?',
    a: 'Real. The Rust crate at v2/crates/nvsim is the same code that runs in the browser via WASM. Press <b>Verify witness</b> on the Witness panel — the SHA-256 you see is byte-equivalent to what `cargo test -p nvsim` produces.',
  },
  {
    q: 'Why does my "Recovered |B|" sit much higher than "Predicted |B|" in the Ghost Murmur demo?',
    a: 'The recovered value reads the simulator\'s ADC quantization floor, not the actual magnetic signal. With COTS-default sensor noise (~300 pT/√Hz) and 16-bit ADC at ±10 µT FS, anything below ~1 pT vanishes into ~2 nT of digitization residual. That\'s the lesson — the press claim sits far below this floor at any meaningful range.',
  },
  {
    q: 'Can I run my own scene?',
    a: 'Yes. Press ⌘K to open the command palette and pick "New scene…". You get five fields (name, dipole moment, distance, ferrous toggle, mains toggle); the dashboard builds the JSON and pushes it via <code>client.loadScene()</code>.',
  },
  {
    q: 'Does any of my data leave the browser?',
    a: 'No. WASM mode is local-only — the worker, the WASM binary, and the IndexedDB persistence all live in your browser. The optional WS transport (off by default) talks to a host of your choosing.',
  },
  {
    q: 'What does the witness mismatch (red ✗) mean?',
    a: 'The current build of nvsim produced a SHA-256 that doesn\'t match the constant pinned at compile time. Possible causes: a different Rust toolchain, a dependency version drift, a manual edit to a physics constant, or an honest bug. Audit the diff against ADR-089 §5.',
  },
  {
    q: 'Why are the Inspector / Witness rail buttons there if there\'s already a right-side inspector?',
    a: 'The right-side inspector is the compact live view; the rail buttons open a full-width version with bigger charts, an explainer header, reference-scene metadata cards, and (on Witness) a "what this verifies" panel. Both stay in sync — the right rail is for glancing, the main area is for diving in.',
  },
  {
    q: 'Why is there an "App Store" if this is a magnetometer simulator?',
    a: 'Because nvsim is one tile in a larger sensing platform. The catalog lists every hot-loadable WASM edge module RuView ships — medical, security, building, retail, industrial, signal, learning, autonomy. The simulators (nvsim today, more in future) are first-class entries in the same catalog.',
  },
];

const FAQ_JA = [
  {
    q: 'これは実際のシミュレータですか、それともモックアップですか？',
    a: '本物のシミュレータです。<code>v2/crates/nvsim</code> にあるRustクレートがWASMとしてブラウザ上で直接動作しています。Witnessパネルで「ウィトネス検証」を実行すると、`cargo test -p nvsim` で得られるSHA-256と完全に一致することが確認できます。',
  },
  {
    q: 'Ghost Murmurデモで「復元磁場 |B|」が「予測値」よりはるかに高いのはなぜですか？',
    a: '復元値は磁気シグナル本体ではなく、ADCの量子化雑音床を読み取っているためです。汎用センサー雑音(~300 pT/√Hz)と16bit ADC(±10 µT FS)の組み合わせでは、1 pT未満の微弱シグナルは約2 nTの量子化残差の中に埋もれてしまいます。',
  },
  {
    q: '独自のカスタム磁気シーンを実行できますか？',
    a: 'はい。<b>Ctrl+K / ⌘K</b> を押してコマンドパレットを開き、「新規シーン構築」を選択してください。名前、双極子モーメント、距離、鉄筋・電源線の有無を指定して作成できます。',
  },
  {
    q: 'ブラウザから外部サーバーへデータが送信されることはありますか？',
    a: 'いいえ。WASMモードは完全ローカル動作です。Worker、WASMバイナリ、IndexedDBキャッシュのすべてがブラウザ内で完結します。',
  },
  {
    q: 'ウィトネス不一致（赤の ✗）は何を意味していますか？',
    a: '現在のビルドで生成されたSHA-256が、コンパイル時に固定された定数と一致しなかったことを意味します。Rustツールチェーンの違いや依存関係の変動、物理定数の変更が原因として考えられます。',
  },
  {
    q: '右側にインスペクターがあるのに、左レールにもInspector / Witnessボタンがあるのはなぜですか？',
    a: '右側インスペクターはコンパクトなリアルタイム表示用です。左レールのボタンを押すと、より大きなグラフや詳細なメタデータカードを備えたフルサイズビューが開きます。両者は常に同期しています。',
  },
  {
    q: '磁気シミュレータなのに「App Store」があるのはなぜですか？',
    a: 'nvsimはRuView大規模センシングプラットフォームの一機能に過ぎないためです。App Storeには医療、防犯、施設管理、AI自動化など65種類以上のエッジモジュールが登録されています。',
  },
];

const QUICKSTART_EN = [
  { step: 1, title: 'Hit ▶ Run', body: 'The big amber button in the topbar starts the live frame stream. The pipeline runs ~1.8 kHz on x86_64 WASM, well above the 1 kHz Cortex-A53 acceptance gate.' },
  { step: 2, title: 'Watch the B-vector trace', body: 'The Inspector → Signal tab shows the recovered field per axis updating in real time. The frame strip below it is one bar per ~32-frame batch.' },
  { step: 3, title: 'Verify the witness', body: 'Click the rail Witness button (or REPL: <code>proof.verify</code>). The dashboard re-runs the canonical reference scene and asserts the SHA-256 byte-for-byte.' },
  { step: 4, title: 'Drag a source', body: 'Grab the rebar / heart proxy / mains loop / ferrous door in the scene canvas; positions persist via IndexedDB.' },
  { step: 5, title: 'Tweak the tunables', body: 'Sliders in the left sidebar update the running pipeline (f_s, f_mod, integration time, shot-noise). Changes debounce 300 ms then push to the worker.' },
  { step: 6, title: 'Open the Ghost Murmur view', body: 'The ghost icon in the rail. Move the distance + moment sliders, hit "Run nvsim at this distance" — the live demo runs the real Rust pipeline through WASM and shows which transport tier would actually detect.' },
  { step: 7, title: 'Browse the App Store', body: 'The grid icon. 65+ edge apps: medical, security, building, retail, industrial, signal, learning. Toggle to mark active in this session.' },
];

const QUICKSTART_JA = [
  { step: 1, title: '▶ 実行 ボタンを押す', body: 'トップバーのオレンジ色の「実行」ボタンを押すとライブフレームストリームが開始します。WASM環境で約1.8kHzで高速処理されます。' },
  { step: 2, title: 'Bベクトルトレースを観測する', body: 'インスペクターの「Signal」タブで、軸ごとの復元磁場がリアルタイム更新される様子を確認します。' },
  { step: 3, title: 'ウィトネス（証明）を検証する', body: '左レールの「Witness」ボタンを押すと、標準参照シーンを再実行し、SHA-256ハッシュがバイト単位で一致することを証明します。' },
  { step: 4, title: '磁源をドラッグ移動する', body: 'キャンバス上の心拍プロキシ、電源線ループ、鉄筋オブジェクトをドラッグして位置を変更できます（位置はIndexedDBに自動保存）。' },
  { step: 5, title: 'Tunablesパラメータを調整する', body: 'サイドバーのスライダーでサンプリング周波数(f_s)や変調周波数(f_mod)を変更すると、300ms後に自動的にパイプラインへ反映されます。' },
  { step: 6, title: 'Ghost Murmurビューを開く', body: '左レールのゴーストアイコンから、距離や双極子モーメントを変更して「この距離でnvsimを実行」を押し、検出限界を実証します。' },
  { step: 7, title: 'App Storeを閲覧する', body: 'グリッドアイコンから65種類以上の医療・防犯・施設管理モジュールをセッション内で自由に有効化できます。' },
];

const SHORTCUTS_EN = [
  { keys: 'Ctrl K  /  ⌘K', label: 'Command palette' },
  { keys: 'Space', label: 'Play / pause pipeline' },
  { keys: 'Ctrl R  /  ⌘R', label: 'Reset pipeline (with confirm)' },
  { keys: 'Ctrl ,  /  ⌘,', label: 'Settings drawer' },
  { keys: 'Ctrl N  /  ⌘N', label: 'New scene' },
  { keys: 'Ctrl E  /  ⌘E', label: 'Export proof bundle' },
  { keys: 'Ctrl /  /  ⌘/', label: 'Toggle theme (dark / light)' },
  { keys: '`', label: 'Toggle debug HUD' },
  { keys: '?', label: 'Open this help center' },
  { keys: '1 · 2 · 3', label: 'Switch inspector tab (Signal / Frame / Witness)' },
  { keys: 'Esc', label: 'Close any modal / palette / drawer' },
  { keys: '/', label: 'Focus the REPL prompt' },
];

const SHORTCUTS_JA = [
  { keys: 'Ctrl K  /  ⌘K', label: 'コマンドパレットを開く' },
  { keys: 'Space', label: 'パイプラインの再生 / 一時停止' },
  { keys: 'Ctrl R  /  ⌘R', label: 'パイプラインのリセット (要確認)' },
  { keys: 'Ctrl ,  /  ⌘,', label: '環境設定ドロワーを開く' },
  { keys: 'Ctrl N  /  ⌘N', label: '新規シーンの構築' },
  { keys: 'Ctrl E  /  ⌘E', label: '証明（Proof）バンドルのエクスポート' },
  { keys: 'Ctrl /  /  ⌘/', label: 'テーマ切替 (ダーク / ライト)' },
  { keys: '`', label: 'デバッグHUDの表示切替' },
  { keys: '?', label: 'このヘルプセンターを開く' },
  { keys: '1 · 2 · 3', label: 'インスペクタータブ切り替え (Signal / Frame / Witness)' },
  { keys: 'Esc', label: 'モーダル / パレット / ドロワーを閉じる' },
  { keys: '/', label: 'REPLプロンプトにフォーカス' },
];

@customElement('nv-help')
export class NvHelp extends LitElement {
  @state() private open = false;
  @state() private section: Section = 'quickstart';
  @state() private query = '';

  static styles = css`
    :host {
      position: fixed; inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(4px);
      z-index: 230;
      display: grid; place-items: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.18s;
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .modal {
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      width: min(880px, 94vw);
      max-height: 86vh;
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: auto 1fr auto;
      overflow: hidden;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
    }
    :host([open]) .modal { transform: translateY(0) scale(1); }
    @media (max-width: 700px) {
      .modal { grid-template-columns: 1fr; grid-template-rows: auto auto 1fr auto; max-height: 92vh; }
      .nav { border-right: 0; border-bottom: 1px solid var(--line); flex-direction: row; overflow-x: auto; }
      .nav button { white-space: nowrap; }
    }
    .h {
      grid-column: 1 / -1;
      padding: 14px 18px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 15px; font-weight: 600; }
    .nav {
      border-right: 1px solid var(--line);
      padding: 12px 8px;
      display: flex; flex-direction: column; gap: 2px;
      background: var(--bg-1);
    }
    .nav button {
      text-align: left;
      padding: 8px 12px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: var(--ink-3);
      font-size: 12.5px;
      cursor: pointer;
      transition: color 0.15s, background 0.15s;
    }
    .nav button:hover { color: var(--ink); background: var(--bg-2); }
    .nav button.on {
      color: var(--ink); background: var(--bg-3);
      border-color: var(--line-2);
    }
    .body {
      padding: 18px 22px;
      overflow-y: auto;
      font-size: 13px;
      color: var(--ink-2);
      line-height: 1.6;
    }
    .body h2 {
      margin: 0 0 8px;
      font-size: 18px;
      color: var(--ink);
      letter-spacing: -0.01em;
    }
    .body .lead {
      color: var(--ink-3);
      font-size: 12.5px;
      margin: 0 0 14px;
    }
    .body p { margin: 0 0 12px; }
    .body code {
      font-family: var(--mono);
      background: var(--bg-3);
      padding: 1px 5px;
      border-radius: 4px;
      font-size: 11.5px;
      color: var(--accent);
    }
    .body kbd {
      font-family: var(--mono);
      padding: 2px 6px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
      font-size: 11.5px;
      color: var(--ink);
    }
    .step {
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .step:last-child { border-bottom: 0; }
    .step .num {
      width: 26px; height: 26px;
      border-radius: 50%;
      background: var(--accent);
      color: #1a0f00;
      font-family: var(--mono);
      font-size: 12.5px;
      font-weight: 700;
      display: grid; place-items: center;
    }
    .step .ttl { color: var(--ink); font-weight: 600; font-size: 13.5px; margin-bottom: 2px; }
    .step .body-text { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; }
    .glossary-search {
      width: 100%;
      padding: 8px 12px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      font-family: var(--mono);
      font-size: 12.5px;
      color: var(--ink);
      outline: none;
      margin-bottom: 14px;
    }
    .glossary-search:focus { border-color: var(--accent); }
    .term {
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .term:last-child { border-bottom: 0; }
    .term .head {
      display: flex; align-items: center; gap: 8px; margin-bottom: 4px;
    }
    .term .name {
      font-family: var(--mono);
      font-size: 13.5px;
      color: var(--accent);
      font-weight: 600;
    }
    .term .badge {
      font-family: var(--mono);
      font-size: 9.5px;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid var(--line);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .term .badge.physics { color: var(--accent-2); border-color: oklch(0.78 0.12 195 / 0.4); }
    .term .badge.rust { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.4); }
    .term .badge.ui { color: var(--accent-4); border-color: oklch(0.78 0.14 145 / 0.4); }
    .term .body-text {
      font-size: 12.5px;
      color: var(--ink-2);
      line-height: 1.55;
    }
    .faq-item {
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .faq-item:last-child { border-bottom: 0; }
    .faq-item .q {
      color: var(--ink);
      font-weight: 600;
      font-size: 13.5px;
      margin-bottom: 4px;
    }
    .faq-item .a { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; }
    .shortcuts {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px 16px;
      align-items: baseline;
    }
    .tour-btn {
        display:inline-flex; align-items:center; gap:8px; padding:10px 16px; margin-bottom:14px; background:var(--accent); color:#1a0f00; border:none; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; font-family:inherit;
    }
    .f {
      grid-column: 1 / -1;
      padding: 10px 18px;
      border-top: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11.5px; color: var(--ink-3);
    }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
    }
    .close:hover { color: var(--ink); border-color: var(--line-2); }
  `;

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('nv-show-help', this.show as EventListener);
    window.addEventListener('nv-show-help-close', this.closeListener);
    window.addEventListener('keydown', this.onKey);
  }
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('nv-show-help', this.show as EventListener);
    window.removeEventListener('nv-show-help-close', this.closeListener);
    window.removeEventListener('keydown', this.onKey);
  }
  private closeListener = (): void => this.close();

  private show = (e: Event): void => {
    const detail = (e as CustomEvent).detail as { section?: Section } | undefined;
    if (detail?.section) this.section = detail.section;
    this.open = true;
    this.setAttribute('open', '');
  };
  private close(): void {
    this.open = false;
    this.removeAttribute('open');
  }
  private onKey = (e: KeyboardEvent): void => {
    const target = e.target as HTMLElement | null;
    const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
    if (e.key === '?' && !isInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      this.show(new CustomEvent('nv-show-help'));
    } else if (e.key === 'Escape' && this.open) {
      this.close();
    }
  };

  private filteredGlossary(): GlossaryItem[] {
    const list = getLocale() === 'ja' ? GLOSSARY_JA : GLOSSARY_EN;
    if (!this.query.trim()) return list;
    const q = this.query.toLowerCase();
    return list.filter((g) =>
      g.term.toLowerCase().includes(q) || g.body.toLowerCase().includes(q),
    );
  }

  private renderQuickstart() {
    const isJa = getLocale() === 'ja';
    const steps = isJa ? QUICKSTART_JA : QUICKSTART_EN;
    return html`
      <h2>${isJa ? '🚀 クイックスタートガイド' : 'Quickstart guide'}</h2>
      <p class="lead">${isJa ? 'nvsimダッシュボードを使いこなすための7ステップガイド。' : 'Seven steps to get the most out of the dashboard.'}</p>
      <button class="tour-btn" @click=${() => { this.close(); window.dispatchEvent(new CustomEvent('nv-start-tour')); }}>
        ${isJa ? '★ インタラクティブな10ステップツアーを開始する' : '★ Take the interactive 10-step tour'}
      </button>
      ${steps.map((s) => html`
        <div class="step">
          <div class="num">${s.step}</div>
          <div>
            <div class="ttl">${s.title}</div>
            <div class="body-text" .innerHTML=${s.body}></div>
          </div>
        </div>
      `)}
    `;
  }

  private renderGlossary() {
    const items = this.filteredGlossary();
    return html`
      <h2>Glossary</h2>
      <p class="lead">Every piece of jargon in the dashboard, defined in one paragraph each.</p>
      <input class="glossary-search" type="text" placeholder="Search 14 terms…"
        .value=${this.query}
        @input=${(e: Event) => this.query = (e.target as HTMLInputElement).value} />
      ${items.length === 0
        ? html`<p style="color: var(--ink-3);">No terms match.</p>`
        : items.map((g) => html`
            <div class="term">
              <div class="head">
                <span class="name">${g.term}</span>
                <span class="badge ${g.category}">${g.category}</span>
              </div>
              <div class="body-text">${g.body}</div>
            </div>
          `)}
    `;
  }

  private renderFaq() {
    return html`
      <h2>FAQ</h2>
      <p class="lead">The questions I was asked twice in the first week of demos.</p>
      ${FAQ.map((item) => html`
        <div class="faq-item">
          <div class="q">${item.q}</div>
          <div class="a" .innerHTML=${item.a}></div>
        </div>
      `)}
    `;
  }

  private renderShortcuts() {
    return html`
      <h2>Keyboard shortcuts</h2>
      <p class="lead">Everything is reachable without a mouse.</p>
      <div class="shortcuts">
        ${SHORTCUTS.map((s) => html`
          <kbd>${s.keys}</kbd><span>${s.label}</span>
        `)}
      </div>
    `;
  }

  private renderAbout() {
    return html`
      <h2>About this dashboard</h2>
      <p class="lead">What you're looking at, in one screen.</p>
      <p><b>nvsim</b> is a deterministic forward simulator for nitrogen-vacancy diamond magnetometry.
        The Rust crate at <code>v2/crates/nvsim</code> is the source of truth; this dashboard is a
        Vite + Lit single-page app that ships the crate compiled to WebAssembly inside a Web Worker.</p>
      <p>The defining commitment is <b>determinism</b>: same <code>(scene, config, seed)</code> →
        byte-identical SHA-256 witness across browsers, OSes, and transports. Press the
        <kbd>Verify witness</kbd> button on the Witness tab to assert this live.</p>
      <p>The codebase is open source (Apache-2.0 OR MIT). Find it on GitHub:
        <code>github.com/ruvnet/RuView</code>. Decisions are documented in ADRs 089 (nvsim),
        090 (Lindblad extension, conditional), 091 (sub-THz radar research),
        092 (this dashboard), 093 (UX gap analysis).</p>
      <p>This dashboard is one of several RuView demos. Sibling demos at
        <code>github.io/RuView/</code> include the Observatory and Pose Fusion views.</p>
    `;
  }

  override render() {
    return html`
      <div class="modal" role="dialog" aria-modal="true" aria-label="Help center">
        <div class="h">
          <div class="ttl">Help</div>
          <button class="close" aria-label="Close help" @click=${() => this.close()}>×</button>
        </div>
        <nav class="nav" role="tablist" aria-label="Help sections">
          ${(['quickstart', 'glossary', 'faq', 'shortcuts', 'about'] as Section[]).map((s) => html`
            <button class=${this.section === s ? 'on' : ''} role="tab"
              aria-selected=${this.section === s}
              @click=${() => this.section = s}>
              ${s === 'quickstart' ? '🚀 Quickstart'
                : s === 'glossary' ? '📖 Glossary'
                : s === 'faq' ? '? FAQ'
                : s === 'shortcuts' ? '⌨ Shortcuts'
                : 'ℹ About'}
            </button>
          `)}
        </nav>
        <div class="body" role="tabpanel">
          ${this.section === 'quickstart' ? this.renderQuickstart()
            : this.section === 'glossary' ? this.renderGlossary()
            : this.section === 'faq' ? this.renderFaq()
            : this.section === 'shortcuts' ? this.renderShortcuts()
            : this.renderAbout()}
        </div>
        <div class="f">
          <span>Press <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> any time to reopen</span>
          <span>nvsim · Apache-2.0 OR MIT</span>
        </div>
      </div>
    `;
  }
}

export function showHelp(section?: Section): void {
  window.dispatchEvent(new CustomEvent('nv-show-help', { detail: { section } }));
}
