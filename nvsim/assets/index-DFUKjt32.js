import{f as Dt,u as jt,i as x,a as w,b as d,w as ue}from"./lit-BS7WqYd5.js";import{y as u,g as It,j as b}from"./signals-SG45zFCj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:Dt},Lt=(e=Nt,t,a)=>{const{kind:s,metadata:i}=a;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),s==="accessor"){const{name:n}=a;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,c,e,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,e,l),l}}}if(s==="setter"){const{name:n}=a;return function(l){const c=this[n];t.call(this,l),this.requestUpdate(n,c,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function Je(e){return(t,a)=>typeof a=="object"?Lt(e,t,a):((s,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(e){return Je({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(e,t){return(a,s,i)=>{const r=n=>n.renderRoot?.querySelector(e)??null;return Ht(a,s,{get(){return r(this)}})}}const Ft={ui:{dashboard:{title:"Revolutionary WiFi-Based Human Pose Detection",subtitle:"Human Tracking Through Walls Using WiFi Signals",description:"AI can track your full-body movement through walls using just WiFi signals.",status:"System Status",metrics:"System Metrics",features:"Features",liveStats:"Live Statistics",activePersons:"Active Persons",avgConfidence:"Avg Confidence",totalDetections:"Total Detections",zoneOccupancy:"Zone Occupancy"},status:{connected:"Connected",connecting:"Connecting...",offline:"Offline",reconnecting:"Reconnecting...",live:"Live",simulated:"Simulated",apiServer:"API Server",hardware:"Hardware",inference:"Inference",streaming:"Streaming",dataSource:"Data Source"},action:{start:"Start Detection",stop:"Stop Detection",startDetection:"Start Detection",stopDetection:"Stop Detection",toggleTheme:"Toggle theme",exportData:"Export data",screenshot:"Take screenshot"},metrics:{cpu:"CPU Usage",memory:"Memory Usage",disk:"Disk Usage"},nav:{dashboard:"Dashboard",hardware:"Hardware",demo:"Live Demo",architecture:"Architecture",performance:"Performance",applications:"Applications",sensing:"Sensing",training:"Training"},misc:{loading:"Loading...",error:"An error occurred",noData:"No data available",close:"Close",cancel:"Cancel",confirm:"Confirm",settings:"Settings",language:"Language"}},topbar:{seedModalTitle:"Set seed",seedModalBody:"Set the 32-bit hex seed for the shot-noise PRNG. Same (scene, config, seed) -> byte-identical witness.",hexSeed:"Hex seed",tourBtn:"★ Tour",tourTitle:"Replay the 10-step welcome tour",helpTitle:"Help (press ? any time)",themeTitle:"Toggle theme",resetBtn:"↺ Reset",pauseBtn:"❚❚ Pause",runBtn:"▶ Run"},sidebar:{sceneTitle:"Scene",sourcesCount:"{count} sources",sceneHelp:"Magnetic primitives in the simulated environment. Drag any in the canvas to reposition; positions persist across reloads.",nvSensor:"NV sensor",nvSensorHelp:"Element Six DNV-B1 reference: 1 mm³ diamond, ~10¹² NV centers. Floor δB ≈ 1.18 pT/√Hz per Barry 2020 §III.A.",whatsNv:"What's NV?",tunables:"Tunables",tunablesHelp:"Live pipeline parameters. Edits debounce 300 ms then rebuild the WASM pipeline without restarting the frame stream.",sampleRate:"Sample rate",lockinFmod:"Lockin f_mod",integrationT:"Integration t",shotNoise:"Shot noise",pipeline:"Pipeline",pipelineHelp:"Forward simulator stages, left to right. Stages glow cyan while the pipeline is running."},rail:{home:"Home",scene:"Scene",apps:"App Store",inspector:"Inspector",witness:"Witness",ghostMurmur:"Ghost Murmur — research spec",settings:"Settings"},home:{heroTitle:"An open-source quantum-magnetometer simulator, in your browser.",heroTag:"nvsim runs a real Rust simulator entirely in WebAssembly. No server, no upload, no telemetry.",runDemoBtn:"▶ Run the simulation",demoRunningBtn:"✓ Demo running",tourBtn:"★ Take the 60-second tour",helpBtn:"? Help center",liveSceneTitle:"Live scene",liveSceneDesc:"Drag magnetic sources, watch the recovered field update in real time, and tweak sample rate / noise / integration.",openSceneArrow:"Open scene →",appStoreTitle:"App Store · 66 edge apps",appStoreDesc:"Browse 65 hot-loadable WASM sensing modules across medical, security, building, retail, industrial, learning. Six run live in the browser.",browseCatalogueArrow:"Browse the catalogue →",witnessTitle:"Determinism gate",witnessDesc:"Re-derive the SHA-256 witness for the canonical reference scene right here in your browser. Same inputs → same hash, every time.",verifyWitnessArrow:"Verify the witness →",ghostMurmurTitle:"Ghost Murmur reality check",ghostMurmurDesc:"Audit the publicly-reported April 2026 CIA NV-diamond program against published physics. Live distance/moment sliders.",readSpecArrow:"Read the spec →"},inspector:{signalTitle:"Signal inspector",frameTitle:"Frame inspector",witnessTitle:"Witness panel",traceLabel:"B-vector trace",streamLabel:"Frame stream",verifyBtn:"Verify witness",verifyOk:"✓ Witness verified · determinism gate",verifyFail:"✗ Witness mismatch · audit required"},appstore:{title:"App Store",searchPlaceholder:"Search by name, tag, or category…",all:"All",feedTitle:"Live runtime feed",activeSimulated:"{count} simulated app(s) active"},settings:{title:"Settings",appearance:"Appearance",theme:"Theme",density:"Density",reduceMotion:"Reduce motion",pipeline:"Pipeline",autoRerun:"Auto-rerun on edit",transport:"Transport",mode:"Mode",resetPrefs:"Reset all preferences"},cli:{server_running:"Server running at {host}:{port}",starting:"Starting RuView service...",stopped:"Service stopped.",config_loaded:"Configuration loaded from {path}",start_description:"Start the RuView WiFi pose detection service",stop_description:"Stop the running RuView service"},log:{info_initialized:"System initialized successfully",warn_low_signal:"Low CSI signal quality detected",error_connection_failed:"Connection to server failed: {reason}",processing_frame:"Processing CSI frame {frame_id}"},error:{invalid_input:"Invalid input provided: {details}",device_not_found:"Device not found: {device_id}",timeout:"Operation timed out",parse_error:"Failed to parse data: {error}",unauthorized:"Unauthorized access"},terms:{emptyRoom:"Empty Room",emptyRoomDesc:"Measuring baseline RF environment with no human presence.",fallDetect:"Fall Detect",fallDetectDesc:"Sudden posture-change detection using acceleration feature analysis.",vitalSigns:"Vital Signs",vitalSignsDesc:"Detecting vital signs through WiFi signal micro-variations.",csiVariance:"CSI Variance",csiVarianceDesc:"Channel State Information (CSI) variance measuring motion strength."},ghostMurmur:{title:"Ghost Murmur — open-source reality check",subtitle:"The physics-vs-press audit for the publicly-reported April 2026 CIA NV-diamond heartbeat detector, and how RuView's existing stack maps onto an honest, civilian version of the same idea.",tryYourself:"Try it yourself",tryDesc:"Place a cardiac dipole at variable distance from the NV sensor. The dashboard runs the real nvsim Rust pipeline (compiled to WASM) end-to-end and reports what each tier would actually detect.",distFromSensor:"Distance from sensor",heartDipoleMoment:"Heart dipole moment",runNvsimDist:"▶ Run nvsim at this distance",runningNvsim:"Running nvsim…",predictedB:"Predicted |B| (1/r³)",recoveredB:"Recovered |B| (nvsim)",sensorNoiseFloor:"Sensor noise floor",framesRun:"Frames run",witnessThisRun:"Witness (this run)",perTierDetectability:"Per-tier detectability",pressReported:"What the press reported",physicsCheck:"Physics reality check",threeTierMesh:"RuView's three-tier mesh — what is actually buildable",pressVsRuview:"Press claim → RuView equivalent",buildToday:"Build today on $165",ethics:"Privacy, ethics, legal",crossRef:"Cross-references"},onboarding:{welcome:"Welcome to nvsim",sceneCanvas:"The Scene canvas",runPipeline:"Run the pipeline",inspector:"Inspector — three tabs, three depths",witness:"The witness — what makes nvsim distinctive",tunables:"Tunables — change the simulation live",ghostMurmur:"Ghost Murmur — research view",appStore:"App Store — 65 edge apps",console:"Console + REPL",ready:"You are ready",startTour:"Start the tour →",skip:"Skip",back:"← Back",next:"Next →",done:"Done",getStarted:"Get started →"},palette:{runPipeline:"Run pipeline",pausePipeline:"Pause pipeline",newScene:"New scene…",exportProof:"Export proof bundle…",resetPipeline:"Reset pipeline",verifyWitness:"Verify witness",toggleTheme:"Toggle theme",openSettings:"Open settings",shortcuts:"Keyboard shortcuts…",about:"About nvsim…",placeholder:"Type a command…"},scene:{zoomIn:"Zoom in",zoomOut:"Zoom out",fitView:"Fit to view",sources:"Sources",fieldLines:"Field lines",labels:"Labels",stepBack:"Step back",playPause:"Play / pause",stepForward:"Step forward",cycleSpeed:"Cycle speed"}},Wt={ui:{dashboard:{title:"画期的なWiFiベースの人体姿勢検出",subtitle:"WiFi信号を使用した壁越しの人間トラッキング",description:"AIはWiFi信号のみを使用して、壁越しに全身の動きをトラッキングできます。",status:"システムステータス",metrics:"システムメトリクス",features:"機能",liveStats:"ライブ統計",activePersons:"アクティブな人数",avgConfidence:"平均信頼度",totalDetections:"総検出数",zoneOccupancy:"エリア占有状況"},status:{connected:"接続済み",connecting:"接続中...",offline:"オフライン",reconnecting:"再接続中...",live:"ライブ",simulated:"シミュレーション",apiServer:"API サーバー",hardware:"ハードウェア",inference:"推論",streaming:"ストリーミング",dataSource:"データソース"},action:{start:"検出開始",stop:"検出停止",startDetection:"検出開始",stopDetection:"検出停止",toggleTheme:"テーマ切り替え",exportData:"データエクスポート",screenshot:"スクリーンショット"},metrics:{cpu:"CPU使用率",memory:"メモリ使用率",disk:"ディスク使用率"},nav:{dashboard:"ダッシュボード",hardware:"ハードウェア",demo:"ライブデモ",architecture:"アーキテクチャ",performance:"パフォーマンス",applications:"アプリケーション",sensing:"センシング",training:"トレーニング"},misc:{loading:"読み込み中...",error:"エラーが発生しました",noData:"データがありません",close:"閉じる",cancel:"キャンセル",confirm:"確認",settings:"設定",language:"言語"}},topbar:{seedModalTitle:"シード値の設定",seedModalBody:"ショット雑音PRNGの32ビット16進シードを設定します。同じ (scene, config, seed) の組み合わせからはバイトレベルで完全一致するウィトネスが生成されます。",hexSeed:"16進シード",tourBtn:"★ ツアー",tourTitle:"10ステップのガイドツアーを再生",helpTitle:"ヘルプ (?キーで表示)",themeTitle:"テーマ切り替え",resetBtn:"↺ リセット",pauseBtn:"❚❚ 一時停止",runBtn:"▶ 実行"},sidebar:{sceneTitle:"シーン",sourcesCount:"{count}個の波源",sceneHelp:"シミュレーション環境内の磁気プリミティブ。キャンバス内でドラッグして再配置できます。配置はリロード後も保持されます。",nvSensor:"NVセンサー",nvSensorHelp:"Element Six DNV-B1 参照: 1 mm³ ダイヤモンド、約10¹²個のNVセンター。磁場感度底 δB ≈ 1.18 pT/√Hz (Barry 2020 §III.A)。",whatsNv:"NVとは？",tunables:"調整パラメータ",tunablesHelp:"リアルタイムのパイプラインパラメータ。編集は300msでデバウンスされ、フレームストリームを停止せずにWASMパイプラインを再構築します。",sampleRate:"サンプリングレート",lockinFmod:"ロックイン変調周波数",integrationT:"積分時間",shotNoise:"ショット雑音",pipeline:"パイプライン",pipelineHelp:"順方向シミュレータの各ステージ。パイプライン稼働中はシアン色に点灯します。"},rail:{home:"ホーム",scene:"シーン",apps:"アプリストア",inspector:"インスペクター",witness:"ウィトネス",ghostMurmur:"Ghost Murmur — 研究仕様",settings:"設定"},home:{heroTitle:"ブラウザで動作するオープンソースの量子磁気計シミュレータ。",heroTag:"nvsimはRustシミュレータをWebAssemblyとしてブラウザ内で直接実行します。サーバーやデータ送信は不要です。",runDemoBtn:"▶ シミュレーションを実行",demoRunningBtn:"✓ デモ実行中",tourBtn:"★ 60秒ツアーを開始",helpBtn:"? ヘルプセンター",liveSceneTitle:"ライブシーン",liveSceneDesc:"磁源をドラッグし、復元された磁場がリアルタイムで更新される様子を確認できます。",openSceneArrow:"シーンを開く →",appStoreTitle:"アプリストア · 66個のエッジアプリ",appStoreDesc:"医療、セキュリティ、スマートビル、小売、産業分野の65以上のホットロード対応WASMセンシングモジュールを探索。",browseCatalogueArrow:"カタログを閲覧 →",witnessTitle:"決定性検証ゲート",witnessDesc:"参照シーンのSHA-256ウィトネスをブラウザ内で再計算。同一入力からは常に同一ハッシュが生成されます。",verifyWitnessArrow:"ウィトネスを検証 →",ghostMurmurTitle:"Ghost Murmur リアリティチェック",ghostMurmurDesc:"公開された物理論文に基づき、2026年4月報告のCIA NVダイヤモンドプログラムの実現性を監査。",readSpecArrow:"仕様を読む →"},inspector:{signalTitle:"信号インスペクター",frameTitle:"フレームインスペクター",witnessTitle:"ウィトネスパネル",traceLabel:"Bベクトル波形",streamLabel:"フレームストリーム",verifyBtn:"ウィトネス検証",verifyOk:"✓ ウィトネス検証完了 · 決定性パス",verifyFail:"✗ ウィトネス不一致 · 監査が必要です"},appstore:{title:"アプリストア",searchPlaceholder:"名前、タグ、カテゴリで検索…",all:"すべて",feedTitle:"リアルタイム実行フィード",activeSimulated:"{count}個のシミュレーションアプリが有効"},settings:{title:"設定",appearance:"外観",theme:"テーマ",density:"表示密度",reduceMotion:"視覚効果を軽減",pipeline:"パイプライン",autoRerun:"編集時に自動再実行",transport:"トランスポート",mode:"モード",resetPrefs:"すべての設定をリセット"},cli:{server_running:"サーバーが {host}:{port} で稼働中",starting:"RuView サービスを開始中...",stopped:"サービスが停止しました",config_loaded:"設定が {path} から読み込まれました",start_description:"RuView WiFi 姿勢検出サービスを開始します",stop_description:"実行中の RuView サービスを停止します"},log:{info_initialized:"システムが正常に初期化されました",warn_low_signal:"CSI信号品質の低下を検出しました",error_connection_failed:"サーバーへの接続に失敗しました: {reason}",processing_frame:"CSIフレーム {frame_id} を処理中"},error:{invalid_input:"無効な入力です: {details}",device_not_found:"デバイスが見つかりません: {device_id}",timeout:"処理がタイムアウトしました",parse_error:"データの解析に失敗しました: {error}",unauthorized:"未認証のアクセス"},terms:{emptyRoom:"空部屋測定（ベースライン校正）",emptyRoomDesc:"人間が存在しない状態での電波環境の基準値（ベースライン）を自動計測・校正します。",fallDetect:"転倒検知アラート",fallDetectDesc:"急激な高度変化および転倒後の静止状態を検知し、即座にアラートを発報します。",vitalSigns:"バイタル測定（心拍・呼吸）",vitalSignsDesc:"WiFi信号の微少な位相・振幅変化から呼吸数および心拍数を非接触で推測します。",csiVariance:"電波変動量（動作強度）",csiVarianceDesc:"Channel State Information (CSI) の振幅分散から室内における身体運動の強さを数値化します。"},ghostMurmur:{title:"Ghost Murmur — オープンソース・リアリティチェック",subtitle:"2026年4月に報告されたCIA NVダイヤモンド心拍検出プログラムの物理的・報道内容監査、およびRuViewスタックへのマッピング。",tryYourself:"実際に試してみる",tryDesc:"NVセンサーから任意の距離に心臓ダイポールを配置します。ダッシュボードはWASMにコンパイルされた本物のnvsim Rustパイプラインをエンドツーエンドで実行し、各階層の実際の検出能力を出力します。",distFromSensor:"センサーからの距離",heartDipoleMoment:"心臓ダイポールモーメント",runNvsimDist:"▶ この距離でnvsimを実行",runningNvsim:"nvsim実行中…",predictedB:"予測 |B| (1/r³)",recoveredB:"復元 |B| (nvsim)",sensorNoiseFloor:"センサー雑音底",framesRun:"実行フレーム数",witnessThisRun:"ウィトネス (今回の実行)",perTierDetectability:"階層別検出可能性",pressReported:"報道で主張された内容",physicsCheck:"物理的リアリティチェック",threeTierMesh:"RuViewの3層メッシュ — 実際に構築可能な構成",pressVsRuview:"報道上の主張 → RuViewの現実的代替実装",buildToday:"165ドルで今すぐ構築",ethics:"プライバシー・倫理・法的考慮事項",crossRef:"相互参照"},onboarding:{welcome:"nvsim へようこそ",sceneCanvas:"シーン・キャンバス",runPipeline:"パイプラインの実行",inspector:"インスペクター — 3つのタブと解析深度",witness:"ウィトネス — nvsimの決定性検証",tunables:"調整パラメータ — リアルタイムシミュレーション変更",ghostMurmur:"Ghost Murmur — 研究仕様ビュー",appStore:"アプリストア — 65個のエッジアプリ",console:"コンソール + REPL",ready:"準備が完了しました",startTour:"ツアーを開始 →",skip:"スキップ",back:"← 戻る",next:"次へ →",done:"完了",getStarted:"開始する →"},palette:{runPipeline:"パイプライン実行",pausePipeline:"パイプライン停止",newScene:"新規シーン…",exportProof:"証明バンドルをエクスポート…",resetPipeline:"パイプラインリセット",verifyWitness:"ウィトネス検証",toggleTheme:"テーマ切り替え",openSettings:"設定を開く",shortcuts:"キーボードショートカット…",about:"nvsim について…",placeholder:"コマンドを入力…"},scene:{zoomIn:"拡大",zoomOut:"縮小",fitView:"全体を表示",sources:"波源",fieldLines:"磁力線",labels:"ラベル",stepBack:"ステップ戻る",playPause:"再生 / 一時停止",stepForward:"ステップ進む",cycleSpeed:"サイクル速度"}},Ze={en:Ft,ja:Wt};function mt(e,t){if(typeof e[t]=="string")return e[t];const a=t.split(".");let s=e;for(const i of a)if(s&&typeof s=="object"&&i in s)s=s[i];else return null;return typeof s=="string"?s:null}function Ot(){const e=globalThis.process;if(e&&e.env&&e.env.RUVIEW_LANG){const t=String(e.env.RUVIEW_LANG).toLowerCase();if(t.startsWith("ja"))return"ja";if(t.startsWith("en"))return"en"}if(typeof navigator<"u"&&navigator.language){const t=navigator.language.toLowerCase();if(t.startsWith("ja"))return"ja";if(t.startsWith("en"))return"en"}return"ja"}class Bt extends EventTarget{constructor(){super(),this.listeners=[],this.currentLocale=Ot(),typeof document<"u"&&document.documentElement&&(document.documentElement.lang=this.currentLocale)}getLocale(){return this.currentLocale}setLocale(t){t!=="ja"&&t!=="en"||this.currentLocale!==t&&(this.currentLocale=t,typeof document<"u"&&document.documentElement&&(document.documentElement.lang=t),this.dispatchEvent(new CustomEvent("locale-changed",{detail:{locale:t}})),this.listeners.forEach(a=>{try{a(t)}catch(s){console.error(s)}}))}onLocaleChange(t){return this.listeners.push(t),()=>{const a=this.listeners.indexOf(t);a>=0&&this.listeners.splice(a,1)}}t(t,a,s){let i,r;typeof a=="string"?(i=a,r=s):typeof a=="object"&&a!==null&&(r=a);const n=Ze[this.currentLocale]||Ze.ja;let l=mt(n,t);if(l===null&&this.currentLocale!=="ja"&&(l=mt(Ze.ja,t)),l===null&&(l=i!==void 0?i:t),r)for(const[c,m]of Object.entries(r))l=l.replace(new RegExp(`\\{${c}\\}`,"g"),String(m));return l}}const $=new Bt,_=()=>$.getLocale(),o=(e,t,a)=>$.t(e,t,a),st=e=>$.setLocale(e);var Vt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,wt=(e,t,a,s)=>{for(var i=s>1?void 0:s?qt(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Vt(t,a,i),i};let Fe=class extends w{constructor(){super(...arguments),this.view="scene"}connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}navigate(e){this.dispatchEvent(new CustomEvent("navigate",{detail:e}))}render(){return d`
      <div class="logo" aria-hidden="true">NV</div>
      <nav role="navigation" aria-label="Primary"
        style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
      <button class="btn ${this.view==="home"?"active":""}"
        data-id="home-btn" title="${o("rail.home","Home")}" aria-label="${o("rail.home","Home")}"
        aria-current=${this.view==="home"?"page":"false"}
        @click=${()=>this.navigate("home")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12L12 4l9 8M5 10v10h14V10"/></svg>
      </button>
      <button class="btn ${this.view==="scene"?"active":""}"
        data-id="scene-btn" title="${o("rail.scene","Scene")}" aria-label="${o("rail.scene","Scene")}"
        aria-current=${this.view==="scene"?"page":"false"}
        @click=${()=>this.navigate("scene")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L3 7l9 5 9-5-9-5zm0 13l-9-5v6l9 5 9-5v-6l-9 5z"/></svg>
      </button>
      <button class="btn ${this.view==="apps"?"active":""}"
        data-id="apps-btn" title="${o("rail.apps","App Store")}" aria-label="${o("rail.apps","App Store")}"
        aria-current=${this.view==="apps"?"page":"false"}
        @click=${()=>this.navigate("apps")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      </button>
      <button class="btn ${this.view==="inspector"?"active":""}"
        data-id="inspector-btn" title="${o("rail.inspector","Inspector")}" aria-label="${o("rail.inspector","Inspector")}"
        aria-current=${this.view==="inspector"?"page":"false"}
        @click=${()=>this.navigate("inspector")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.6" y2="16.6"/></svg>
      </button>
      <button class="btn ${this.view==="witness"?"active":""}"
        data-id="witness-btn" title="${o("rail.witness","Witness")}" aria-label="${o("rail.witness","Witness")}"
        aria-current=${this.view==="witness"?"page":"false"}
        @click=${()=>this.navigate("witness")}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
      </button>
      <button class="btn ghost ${this.view==="ghost-murmur"?"active":""}"
        data-id="ghost-murmur-btn" title="${o("rail.ghostMurmur","Ghost Murmur — research spec")}"
        aria-label="${o("rail.ghostMurmur","Ghost Murmur — research spec")}"
        aria-current=${this.view==="ghost-murmur"?"page":"false"}
        @click=${()=>this.navigate("ghost-murmur")}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 2C5.7 2 3 4.7 3 8v12l3-2 3 2 3-2 3 2 3-2 3 2V8c0-3.3-2.7-6-6-6H9z"/>
          <circle cx="9" cy="10" r="1.2" fill="currentColor"/>
          <circle cx="15" cy="10" r="1.2" fill="currentColor"/>
        </svg>
      </button>
      </nav>
      <div class="spacer"></div>
      <button class="btn" data-id="settings-btn" title="${o("rail.settings","Settings")}" aria-label="${o("rail.settings","Settings")}"
        @click=${()=>this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
      </button>
    `}};Fe.styles=x`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      gap: 4px;
      background: var(--bg-1);
      border-right: 1px solid var(--line);
    }
    .logo {
      width: 36px; height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center;
      color: #1a0f00;
      font-weight: 700;
      font-family: var(--mono);
      font-size: 11px;
      margin-bottom: 14px;
      box-shadow: 0 4px 12px -2px oklch(0.55 0.16 30 / 0.35);
    }
    .btn {
      width: 36px; height: 36px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid transparent;
      color: var(--ink-3);
      display: grid; place-items: center;
      transition: all 0.15s;
      position: relative;
      cursor: pointer;
    }
    .btn:hover { color: var(--ink); background: var(--bg-2); }
    .btn.active {
      color: var(--ink);
      background: var(--bg-3);
      border-color: var(--line-2);
    }
    .btn.active::before {
      content: ''; position: absolute; left: -10px; top: 8px; bottom: 8px;
      width: 2px; background: var(--accent); border-radius: 2px;
    }
    .btn.ghost.active::before { background: var(--accent-3); }
    .spacer { flex: 1; }
    svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; }
  `;wt([Je()],Fe.prototype,"view",2);Fe=wt([k("nv-rail")],Fe);const z=u("wasm"),B=u(""),je=u(!1),et=u(null),v=u(!1);u(!0);const Ie=u(1),Ut=u(0),it=u(0n),J=u(0xCAFEBABEn),ne=u(1e4),oe=u(1e3),le=u(1),de=u(!0),T=u("dark"),I=u("default"),H=u(!1),ke=u(!0),Ce=u([0,0,0]),Z=u(0),Y=u(0),M=u(0),L=u(""),A=u("idle"),V=u(""),Q=u(null),Te=u([]),We=u([]),Oe=u([]),Ae=u([]),ht=u("rebar-walkby-01"),Gt=u(""),Se=u(!1),tt=u("all"),X=u([]);function Kt(e){const t=X.value.slice();for(t.push(e);t.length>200;)t.shift();X.value=t}const ce=u([]),Be=u([]),Ve=u({});function Jt(e){const t=Be.value.slice();for(t.push(e);t.length>200;)t.shift();Be.value=t;const a={...Ve.value};a[e.appId]=(a[e.appId]??0)+1,Ve.value=a}const kt=u(new Set),vt=It(()=>z.value==="wasm"?"wasm":"ws");let $t=null;function Yt(e){$t=e}function y(){return $t}const q=u([]),Qt=200;function p(e,t){if(Se.value)return;const a=q.value.slice();for(a.push({ts:Date.now(),level:e,msg:t});a.length>Qt;)a.shift();q.value=a}function Xt(e){const a=Te.value.slice();a.push(e[0]),a.length>200&&a.shift();const s=We.value.slice();s.push(e[1]),s.length>200&&s.shift();const i=Oe.value.slice();i.push(e[2]),i.length>200&&i.shift(),Te.value=a,We.value=s,Oe.value=i}function Zt(e){const a=Ae.value.slice();for(a.push(Math.max(0,Math.min(1,e)));a.length>48;)a.shift();Ae.value=a}var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,Ee=(e,t,a,s)=>{for(var i=s>1?void 0:s?ta(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&ea(t,a,i),i};let ee=class extends w{constructor(){super(...arguments),this.open=!1,this.mTitle="",this.mBody="",this.buttons=[],this.onModal=e=>{const t=e.detail;this.mTitle=t.title,this.mBody=t.body,this.buttons=t.buttons??[{label:"Close",variant:"primary"}],this.open=!0,this.setAttribute("open",""),requestAnimationFrame(()=>{const a=this.shadowRoot;if(!a)return;a.querySelector("input, select, textarea, button:not(.close)")?.focus()})},this.onKey=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-modal",this.onModal),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-modal",this.onModal),window.removeEventListener("keydown",this.onKey)}updated(){if(!this.open)return;const e=this.shadowRoot;if(!e)return;const t=a=>{if(a.key!=="Tab")return;const s=Array.from(e.querySelectorAll("input, select, textarea, button, [href]")).filter(l=>!l.hasAttribute("disabled"));if(s.length===0)return;const i=s[0],r=s[s.length-1],n=e.activeElement??null;a.shiftKey&&n===i?(a.preventDefault(),r.focus()):!a.shiftKey&&n===r&&(a.preventDefault(),i.focus())};e.removeEventListener("keydown",t),e.addEventListener("keydown",t)}close(){this.open=!1,this.removeAttribute("open")}clickBtn(e){e.onClick?.(),this.close()}render(){return d`
      <div class="modal" role="dialog" aria-modal="true">
        <div class="h">
          <div class="ttl">${this.mTitle}</div>
          <button class="close" @click=${()=>this.close()}>×</button>
        </div>
        <div class="body" .innerHTML=${this.mBody}></div>
        <div class="f">
          ${this.buttons.map(e=>d`
            <button class=${e.variant??""} @click=${()=>this.clickBtn(e)}>${e.label}</button>
          `)}
        </div>
      </div>
    `}};ee.styles=x`
    :host {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(4px);
      z-index: 200;
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
      width: min(520px, 92vw);
      max-height: 86vh;
      display: flex; flex-direction: column;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
    }
    :host([open]) .modal { transform: translateY(0) scale(1); }
    .h {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 14px; font-weight: 600; }
    .body { padding: 16px; overflow-y: auto; font-size: 13px; color: var(--ink-2); line-height: 1.55; }
    .f {
      padding: 12px 16px;
      border-top: 1px solid var(--line);
      display: flex; gap: 8px; justify-content: flex-end;
    }
    button {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12.5px;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid var(--line);
      background: var(--bg-2); color: var(--ink);
    }
    button.ghost { background: transparent; }
    button.primary { background: var(--accent); border-color: var(--accent); color: #1a0f00; }
    button.danger { background: var(--bad); border-color: var(--bad); color: #fff; }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
    }
  `;Ee([h()],ee.prototype,"open",2);Ee([h()],ee.prototype,"mTitle",2);Ee([h()],ee.prototype,"mBody",2);Ee([h()],ee.prototype,"buttons",2);ee=Ee([k("nv-modal")],ee);function pe(e){window.dispatchEvent(new CustomEvent("nv-modal",{detail:e}))}var aa=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Ye=(e,t,a,s)=>{for(var i=s>1?void 0:s?sa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&aa(t,a,i),i};let me=class extends w{constructor(){super(...arguments),this.visible=!1,this.msg="",this.icon="✓",this.timer=null,this.onToast=e=>{const t=e.detail;this.msg=t.msg??"Done",this.icon=t.icon??"✓",this.visible=!0,this.setAttribute("visible",""),this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.visible=!1,this.removeAttribute("visible")},1800)}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-toast",this.onToast)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-toast",this.onToast)}render(){return d`<span class="icon">${this.icon}</span><span>${this.msg}</span>`}};me.styles=x`
    :host {
      position: fixed; bottom: 24px; left: 50%;
      transform: translateX(-50%) translateY(80px);
      background: var(--bg-2);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      padding: 10px 14px;
      font-size: 12.5px;
      box-shadow: var(--shadow);
      z-index: 100;
      opacity: 0; pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
      display: flex; align-items: center; gap: 8px;
    }
    :host([visible]) {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      pointer-events: auto;
    }
    .icon { color: var(--accent); }
  `;Ye([h()],me.prototype,"visible",2);Ye([h()],me.prototype,"msg",2);Ye([h()],me.prototype,"icon",2);me=Ye([k("nv-toast")],me);function N(e,t="✓"){window.dispatchEvent(new CustomEvent("nv-toast",{detail:{msg:e,icon:t}}))}var ia=Object.getOwnPropertyDescriptor,ra=(e,t,a,s)=>{for(var i=s>1?void 0:s?ia(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=n(i)||i);return i};let rt=class extends w{connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),b(()=>{M.value,vt.value,J.value,T.value,ht.value,v.value,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}async toggleRun(){const e=y();e&&(v.value?(await e.pause(),v.value=!1):(await e.run(),v.value=!0))}async reset(){const e=y();e&&await e.reset()}toggleTheme(){T.value=T.value==="dark"?"light":"dark"}async openSeedModal(){const e=`0x${J.value.toString(16).toUpperCase().padStart(8,"0")}`;pe({title:o("topbar.seedModalTitle","Set seed"),body:`<p>${o("topbar.seedModalBody","Set the 32-bit hex seed for the shot-noise PRNG. Same <code>(scene, config, seed)</code> → byte-identical witness.")}</p>
        <label>${o("topbar.hexSeed","Hex seed")}</label>
        <input type="text" id="seed-input" value="${e}" autofocus />`,buttons:[{label:o("misc.cancel","Cancel"),variant:"ghost"},{label:o("misc.confirm","Apply"),variant:"primary",onClick:async()=>{const t=document.querySelector("nv-modal")?.shadowRoot?.querySelector("#seed-input");if(!t)return;const a=t.value.trim().replace(/^0x/i,""),s=BigInt("0x"+a);J.value=s,await y()?.setSeed(s),p("ok",`seed → 0x${s.toString(16).toUpperCase()}`),N(`Seed → 0x${s.toString(16).toUpperCase().slice(0,8)}`,"⟳")}}]})}openTransportSettings(){window.dispatchEvent(new CustomEvent("open-settings"))}render(){const e=J.value.toString(16).toUpperCase().padStart(8,"0");return d`
      <div class="crumbs">
        <span class="home">RuView</span><span class="sep">/</span>
        <span>nvsim</span><span class="sep">/</span>
        <span class="cur" id="scene-name">${ht.value}</span>
      </div>
      <div class="spacer"></div>
      <span class="pill" id="fps-pill">
        <span class="dot"></span>
        <span id="fps-val">${M.value>0?(M.value/1e3).toFixed(2)+" kHz":"idle"}</span>
      </span>
      <span class="pill wasm" id="transport-pill" title="${o("sidebar.tunables","Transport settings")}"
        @click=${this.openTransportSettings}>
        <span class="dot"></span>${vt.value}
      </span>
      <span class="pill seed" id="seed-pill" title="${o("topbar.seedModalTitle","Set seed")}"
        @click=${this.openSeedModal}>
        seed: <b>0x${e}</b>
      </span>
      <button class="ghost" id="tour-btn" title="${o("topbar.tourTitle","Replay the 10-step welcome tour")}"
        aria-label="${o("topbar.tourTitle","Replay welcome tour")}"
        @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-tour"))}>
        ${o("topbar.tourBtn","★ Tour")}
      </button>
      <button class="ghost" id="help-btn" title="${o("topbar.helpTitle","Help (press ? any time)")}" aria-label="Open help"
        @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-help"))}>
        ?
      </button>
      <button class="ghost" id="lang-btn" title="${o("ui.misc.language","Language")}" aria-label="Toggle language"
        @click=${()=>st($.getLocale()==="ja"?"en":"ja")}>
        🌐 ${$.getLocale()==="ja"?"JA":"EN"}
      </button>
      <button class="ghost" id="theme-btn" title="${o("action.toggleTheme","Toggle theme")}" aria-label="Toggle theme"
        @click=${this.toggleTheme}>
        ${T.value==="dark"?"☼":"☾"}
      </button>
      <button id="reset-btn" @click=${this.reset}>${o("topbar.resetBtn","↺ Reset")}</button>
      <button class="primary" id="run-btn" @click=${this.toggleRun}>
        ${v.value?o("topbar.pauseBtn","❚❚ Pause"):o("topbar.runBtn","▶ Run")}
      </button>
    `}};rt.styles=x`
    :host {
      display: flex; align-items: center;
      padding: 0 16px; gap: 12px;
      background: var(--bg-1);
      border-bottom: 1px solid var(--line);
      z-index: 10;
    }
    .crumbs { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--ink-3); }
    .crumbs .sep { color: var(--ink-4); }
    .crumbs .cur { color: var(--ink); font-weight: 500; }
    .spacer { flex: 1; }
    .pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 10px;
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 12px; color: var(--ink-2);
      font-family: var(--mono); font-weight: 500;
    }
    .pill .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 6px var(--ok); animation: pulse 2s infinite; }
    .pill.wasm .dot { background: var(--accent-2); box-shadow: 0 0 6px var(--accent-2); }
    .pill.seed { color: var(--ink-3); cursor: pointer; }
    .pill.seed:hover { border-color: var(--line-2); }
    .pill.seed b { color: var(--accent); font-weight: 600; }
    .pill.wasm { cursor: pointer; }
    .pill.wasm:hover { border-color: var(--line-2); }
    button {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 6px 12px;
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: 8px;
      font-size: 12.5px; font-weight: 500; color: var(--ink);
      cursor: pointer;
      transition: all 0.15s;
    }
    button:hover { border-color: var(--line-2); background: var(--bg-3); }
    button.primary { background: var(--accent); border-color: var(--accent); color: #1a0f00; }
    button.primary:hover { filter: brightness(1.08); }
    button.ghost { background: transparent; }
  `;rt=ra([k("nv-topbar")],rt);var na=Object.getOwnPropertyDescriptor,oa=(e,t,a,s)=>{for(var i=s>1?void 0:s?na(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=n(i)||i);return i};let at=null;function Ne(){at!==null&&window.clearTimeout(at),at=window.setTimeout(async()=>{const e=y();if(e)try{await e.setConfig({digitiser:{f_s_hz:ne.value,f_mod_hz:oe.value},sensor:{gamma_fwhm_hz:1e6,t1_s:.005,t2_s:1e-6,t2_star_s:2e-7,contrast:.03,n_spins:1e12,shot_noise_disabled:!de.value},dt_s:le.value*.001}),p("dbg",`config pushed · fs=${ne.value} f_mod=${oe.value} dt=${le.value.toFixed(1)}ms noise=${de.value?"on":"off"}`)}catch(t){p("warn",`config push failed: ${t.message}`)}},300)}let nt=class extends w{connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),b(()=>{ne.value,oe.value,le.value,de.value,v.value,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}render(){return d`
      <div class="panel">
        <div class="panel-h">${o("sidebar.sceneTitle","Scene")} <span class="count">${o("sidebar.sourcesCount","4 sources",{count:4})}</span></div>
        <div class="panel-help">
          ${o("sidebar.sceneHelp","Magnetic primitives in the simulated environment. Drag any in the canvas to reposition; positions persist across reloads.")}
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.72 0.18 330)"></span>
          <span class="name">rebar.steel.coil</span>
          <span class="meta">χ=5000</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.78 0.14 195)"></span>
          <span class="name">heart_proxy</span>
          <span class="meta">1e-6 A·m²</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.72 0.18 330)"></span>
          <span class="name">mains_60Hz</span>
          <span class="meta">2 A · 60 Hz</span>
        </div>
        <div class="scene-item">
          <span class="swatch" style="background:oklch(0.78 0.14 145)"></span>
          <span class="name">door.steel</span>
          <span class="meta">eddy</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-h">${o("sidebar.nvSensor","NV sensor")} <span class="count">COTS</span></div>
        <div class="panel-help">
          ${o("sidebar.nvSensorHelp","Element Six DNV-B1 reference: 1 mm³ diamond, ~10¹² NV centers. Floor δB ≈ 1.18 pT/√Hz per Barry 2020 §III.A.")}
          <span class="help-link" title="Open glossary"
            @click=${()=>window.dispatchEvent(new CustomEvent("nv-show-help",{detail:{section:"glossary"}}))}>${o("sidebar.whatsNv","What's NV?")}</span>
        </div>
        <div class="field-row" title="Sensing volume (cubic millimetres)"><span class="lbl">V</span><span class="val">1 mm³</span></div>
        <div class="field-row" title="Number of NV centers contributing to readout"><span class="lbl">N</span><span class="val">1e12 NV</span></div>
        <div class="field-row" title="ODMR contrast — fractional dip at resonance"><span class="lbl">C</span><span class="val">0.030</span></div>
        <div class="field-row" title="Inhomogeneous dephasing time T₂*"><span class="lbl">T₂*</span><span class="val">200 ns</span></div>
        <div class="field-row" title="Shot-noise-limited field sensitivity"><span class="lbl">δB</span><span class="val">1.18 pT/√Hz</span></div>
      </div>

      <div class="panel">
        <div class="panel-h">${o("sidebar.tunables","Tunables")}</div>
        <div class="panel-help">
          ${o("sidebar.tunablesHelp","Live pipeline parameters. Edits debounce 300 ms then rebuild the WASM pipeline without restarting the frame stream.")}
        </div>
        <div class="slider-row" title="Digitiser sample rate — frames per second emitted by the pipeline">
          <div class="top"><span class="lbl">${o("sidebar.sampleRate","Sample rate")}</span><span class="val">${(ne.value/1e3).toFixed(1)} kHz</span></div>
          <input type="range" min="1000" max="100000" .value=${String(ne.value)}
            aria-label="Sample rate in Hz"
            @input=${e=>{ne.value=+e.target.value,Ne()}} />
        </div>
        <div class="slider-row" title="Microwave modulation frequency for lock-in demodulation">
          <div class="top"><span class="lbl">${o("sidebar.lockinFmod","Lockin f_mod")}</span><span class="val">${(oe.value/1e3).toFixed(3)} kHz</span></div>
          <input type="range" min="100" max="5000" .value=${String(oe.value)}
            aria-label="Lock-in modulation frequency in Hz"
            @input=${e=>{oe.value=+e.target.value,Ne()}} />
        </div>
        <div class="slider-row" title="Per-sample integration time">
          <div class="top"><span class="lbl">${o("sidebar.integrationT","Integration t")}</span><span class="val">${le.value.toFixed(1)} ms</span></div>
          <input type="range" min="0.1" max="10" step="0.1" .value=${String(le.value)}
            aria-label="Integration time in milliseconds"
            @input=${e=>{le.value=+e.target.value,Ne()}} />
        </div>
        <div class="slider-row" title="Toggle shot-noise sampling. OFF = analytic noise-free output (debug only)">
          <div class="top"><span class="lbl">${o("sidebar.shotNoise","Shot noise")}</span><span class="val">${de.value?"ON":"OFF"}</span></div>
          <input type="range" min="0" max="1" .value=${de.value?"1":"0"}
            aria-label="Shot-noise sampling enabled"
            @input=${e=>{de.value=e.target.value==="1",Ne()}} />
        </div>
      </div>

      <div class="panel">
        <div class="panel-h">${o("sidebar.pipeline","Pipeline")}</div>
        <div class="panel-help">
          ${o("sidebar.pipelineHelp","Forward simulator stages, left to right. Stages glow cyan while the pipeline is running.")}
        </div>
        <div class="pipeline">
          <span class="stage ${v.value?"live":""}">scene</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${v.value?"live":""}">B-S</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${v.value?"live":""}">prop</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${v.value?"live":""}">NV</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${v.value?"live":""}">ADC</span>
          <span class="stage-arrow">→</span>
          <span class="stage ${v.value?"live":""}">frame</span>
        </div>
      </div>
    `}};nt.styles=x`
    :host {
      display: flex; flex-direction: column; gap: 14px;
      padding: 14px; overflow-y: auto;
      background: var(--bg-1); border-right: 1px solid var(--line);
    }
    .panel {
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: var(--radius); padding: 12px;
    }
    .panel-h {
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11px; font-weight: 600; color: var(--ink-3);
      text-transform: uppercase; letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .panel-help {
      font-size: 11.5px; color: var(--ink-3);
      margin: 0 0 10px;
      line-height: 1.5;
    }
    .help-link {
      color: var(--accent-2);
      cursor: pointer;
      text-decoration: underline dotted;
    }
    .help-link:hover { color: var(--accent); }
    .count {
      background: var(--bg-3); color: var(--ink-2);
      padding: 1px 6px; border-radius: 999px;
      font-family: var(--mono); font-size: 10px;
      text-transform: none; letter-spacing: 0;
    }
    .scene-item {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 10px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: background 0.15s;
      border: 1px solid transparent;
    }
    .scene-item:hover { background: var(--bg-3); }
    .scene-item .swatch { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .scene-item .name { font-size: 13px; flex: 1; }
    .scene-item .meta { font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); }
    .field-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 6px 0; font-size: 12.5px;
      border-bottom: 1px solid var(--line);
    }
    .field-row:last-child { border-bottom: 0; }
    .field-row .lbl { color: var(--ink-3); }
    .field-row .val { font-family: var(--mono); color: var(--ink); font-size: 12px; }
    .slider-row { padding: 8px 0; border-bottom: 1px solid var(--line); }
    .slider-row:last-child { border-bottom: 0; padding-bottom: 0; }
    .slider-row .top { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px; }
    .slider-row .top .lbl { color: var(--ink-3); }
    .slider-row .top .val { font-family: var(--mono); color: var(--ink); }
    input[type="range"] {
      -webkit-appearance: none; appearance: none;
      width: 100%; height: 4px;
      background: var(--bg-3); border-radius: 2px; outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--accent); cursor: pointer;
      border: 2px solid var(--bg-2);
      box-shadow: 0 0 0 1px var(--line-2);
    }
    .pipeline { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; margin-top: 6px; }
    .stage {
      flex: 1; min-width: 50px;
      padding: 4px 6px;
      background: var(--bg-3); border: 1px solid var(--line);
      border-radius: 6px; font-size: 9.5px; text-align: center;
      color: var(--ink-2); font-family: var(--mono);
    }
    .stage.live { border-color: var(--accent-2); color: var(--accent-2); }
    .stage-arrow { color: var(--ink-4); font-size: 10px; }
  `;nt=oa([k("nv-sidebar")],nt);var la=Object.getOwnPropertyDescriptor,da=(e,t,a,s)=>{for(var i=s>1?void 0:s?la(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=n(i)||i);return i};let ot=class extends w{connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),this._unsubEffect=b(()=>{v.value,M.value,A.value,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n(),this._unsubEffect&&this._unsubEffect()}go(e){if(e==="tour"){window.dispatchEvent(new CustomEvent("nv-show-tour"));return}if(e==="help"){window.dispatchEvent(new CustomEvent("nv-show-help"));return}this.dispatchEvent(new CustomEvent("navigate",{detail:e,bubbles:!0,composed:!0}))}async runDemo(){const e=y();if(!e){v.value=!v.value,this.go("scene");return}v.value?(await e.pause(),v.value=!1,p("info","simulation paused")):(await e.run(),v.value=!0,p("ok","demo started · streaming MagFrames"),this.go("scene"))}render(){const e=v.value,t=A.value==="ok",a=$.getLocale()==="ja";return d`
      <div class="hero">
        <div class="icon" aria-hidden="true">NV</div>
        <h1>${o("home.heroTitle","An open-source quantum-magnetometer simulator, in your browser.")}</h1>
        <p class="tag">
          ${o("home.heroTag","nvsim runs a real Rust simulator entirely in WebAssembly. No server, no upload, no telemetry.")}
        </p>
        <div class="ctas">
          <button class="cta primary" id="home-run-btn" @click=${()=>this.runDemo()}>
            ${e?o("home.demoRunningBtn","✓ Demo running"):o("home.runDemoBtn","▶ Run the simulation")}
          </button>
          <button class="cta" id="home-tour-btn" @click=${()=>this.go("tour")}>
            ${o("home.tourBtn","★ Take the 60-second tour")}
          </button>
          <button class="cta" id="home-help-btn" @click=${()=>this.go("help")}>
            ${o("home.helpBtn","? Help center")}
          </button>
        </div>
        <div class="status ${e?"live":""}">
          <span class="dot"></span>
          ${e?d`${a?"ライブ実行中":"Live"} · ${M.value>0?(M.value/1e3).toFixed(2)+" kHz":a?"起動中…":"starting…"}${t?a?" · ウィトネス検証完了 ✓":" · witness verified ✓":""}`:d`${a?"待機中":"Idle"}${t?a?" · ウィトネス検証完了 ✓":" · witness verified ✓":""}`}
        </div>
      </div>

      <div class="grid">
        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("scene")}
          @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.go("scene"))}}>
          <div class="ico">🌐</div>
          <h3>${o("home.liveSceneTitle","Live scene")}</h3>
          <p>${o("home.liveSceneDesc","Drag magnetic sources, watch the recovered field update in real time, and tweak sample rate / noise / integration.")}</p>
          <div class="arrow">${o("home.openSceneArrow","Open scene →")}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("apps")}
          @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.go("apps"))}}>
          <div class="ico">🛍</div>
          <h3>${o("home.appStoreTitle","App Store · 66 edge apps")}</h3>
          <p>${o("home.appStoreDesc","Browse 65 hot-loadable WASM sensing modules across medical, security, building, retail, industrial, learning. Six run live in the browser.")}</p>
          <div class="arrow">${o("home.browseCatalogueArrow","Browse the catalogue →")}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("witness")}
          @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.go("witness"))}}>
          <div class="ico">✓</div>
          <h3>${o("home.witnessTitle","Determinism gate")}</h3>
          <p>${o("home.witnessDesc","Re-derive the SHA-256 witness for the canonical reference scene right here in your browser. Same inputs → same hash, every time.")}</p>
          <div class="arrow">${o("home.verifyWitnessArrow","Verify the witness →")}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${()=>this.go("ghost-murmur")}
          @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.go("ghost-murmur"))}}>
          <div class="ico">👻</div>
          <h3>${o("home.ghostMurmurTitle","Ghost Murmur reality check")}</h3>
          <p>${o("home.ghostMurmurDesc","Audit the publicly-reported April 2026 CIA NV-diamond program against published physics. Live distance/moment sliders.")}</p>
          <div class="arrow">${o("home.readSpecArrow","Read the spec →")}</div>
        </div>
      </div>

      <p class="footnote">
        ${a?d`初めてですか？ <a @click=${()=>this.go("tour")}>60秒のガイドツアーを開始する</a> — 全パネルを分かりやすく解説します。または <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> キーでいつでもヘルプセンターを開けます。<br>オープンソース · Apache-2.0 OR MIT · <code>github.com/ruvnet/RuView</code>`:d`New here? <a @click=${()=>this.go("tour")}>Take the 60-second guided tour</a> — every panel is explained. Or press <code>?</code> for the help center (quickstart, glossary, FAQ, shortcuts) any time.<br>Open source · Apache-2.0 OR MIT · <code>github.com/ruvnet/RuView</code>`}
      </p>
    `}};ot.styles=x`
    :host {
      display: block;
      padding: 32px 40px;
      max-width: 1000px;
      margin: 0 auto;
      overflow-y: auto;
      color: var(--ink);
    }
    .hero {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; right: -40px; top: -40px;
      width: 260px; height: 260px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--accent-3) 0%, transparent 70%);
      opacity: 0.25; pointer-events: none;
    }
    .icon {
      width: 48px; height: 48px; border-radius: 12px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center; color: #1a0f00;
      font-weight: 800; font-family: var(--mono); font-size: 16px;
      margin-bottom: 16px;
      box-shadow: 0 8px 24px -4px oklch(0.55 0.16 30 / 0.4);
    }
    h1 {
      font-size: 26px; font-weight: 700; margin: 0 0 12px;
      letter-spacing: -0.02em; line-height: 1.25;
    }
    p.tag {
      font-size: 14.5px; color: var(--ink-2); margin: 0 0 24px;
      line-height: 1.6; max-width: 720px;
    }
    .ctas { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .cta {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 18px; border-radius: 10px;
      font-size: 13.5px; font-weight: 600; cursor: pointer;
      border: 1px solid var(--line-2); background: var(--bg-3);
      color: var(--ink); transition: all 0.15s;
    }
    .cta:hover { border-color: var(--ink-3); transform: translateY(-1px); }
    .cta.primary {
      background: var(--accent); border-color: var(--accent); color: #1a0f00;
      box-shadow: 0 4px 16px -2px oklch(0.78 0.14 70 / 0.4);
    }
    .cta.primary:hover { filter: brightness(1.08); }
    .status {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 12px; color: var(--ink-3); font-family: var(--mono);
      margin-top: 14px;
    }
    .status .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--ink-4); }
    .status.live .dot { background: var(--ok); box-shadow: 0 0 8px var(--ok); }

    .grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px; margin-bottom: 24px;
    }
    .card {
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: 12px; padding: 20px;
      cursor: pointer; transition: all 0.2s;
      display: flex; flex-direction: column;
    }
    .card:hover {
      border-color: var(--line-2);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px -6px rgba(0,0,0,0.2);
    }
    .card .ico {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--bg-3); display: grid; place-items: center;
      font-size: 16px; margin-bottom: 12px; color: var(--accent);
    }
    .card h3 { font-size: 14.5px; font-weight: 600; margin: 0 0 6px; }
    .card p { font-size: 12.5px; color: var(--ink-3); margin: 0; line-height: 1.5; flex: 1; }
    .card .arrow {
      font-size: 12px; font-weight: 600; color: var(--accent);
      margin-top: 14px; display: inline-flex; align-items: center; gap: 4px;
    }

    .footnote {
      font-size: 12px; color: var(--ink-3); text-align: center; margin-top: 32px;
      line-height: 1.6;
    }
    .footnote a { color: var(--accent); text-decoration: none; cursor: pointer; }
    .footnote a:hover { text-decoration: underline; }
  `;ot=da([k("nv-home")],ot);var ca=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,be=(e,t,a,s)=>{for(var i=s>1?void 0:s?pa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&ca(t,a,i),i};let G=class extends w{constructor(){super(...arguments),this.zoom=1,this.layerVisible={source:!0,field:!0,label:!0},this.items=[{id:"rebar",x:740,y:240,color:"oklch(0.72 0.18 330)",name:"rebar.steel"},{id:"heart",x:220,y:180,color:"oklch(0.78 0.14 195)",name:"heart_proxy"},{id:"mains",x:180,y:380,color:"oklch(0.72 0.18 330)",name:"mains_60Hz"},{id:"door",x:800,y:470,color:"oklch(0.78 0.14 145)",name:"door.steel"}],this.dragging=null,this.selected=null,this.dragOffset={dx:0,dy:0},this.onKey=e=>{const t=e.target;if(!(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))){if(!this.selected){e.key==="Tab"&&document.activeElement===document.body&&(e.preventDefault(),this.selected=this.items[0]?.id??null);return}if(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const a=e.shiftKey?32:8,s=e.key==="ArrowLeft"?-a:e.key==="ArrowRight"?a:0,i=e.key==="ArrowUp"?-a:e.key==="ArrowDown"?a:0;this.items=this.items.map(r=>r.id===this.selected?{...r,x:Math.max(20,Math.min(980,r.x+s)),y:Math.max(20,Math.min(580,r.y+i))}:r),ce.value=this.items.map(({id:r,x:n,y:l})=>({id:r,x:n,y:l}))}else if(e.key==="Tab"){e.preventDefault();const s=(this.items.findIndex(i=>i.id===this.selected)+(e.shiftKey?-1:1)+this.items.length)%this.items.length;this.selected=this.items[s].id}else e.key==="Escape"&&(this.selected=null)}},this.onDown=(e,t)=>{t.preventDefault(),this.dragging=e,this.selected=e;const a=this.items.find(r=>r.id===e);if(!a)return;const s=this.renderRoot.querySelector("svg");if(!s)return;const i=this.toSvg(t,s);this.dragOffset={dx:i.x-a.x,dy:i.y-a.y}},this.onPointerMove=e=>{if(!this.dragging)return;const t=this.renderRoot.querySelector("svg");if(!t)return;const a=this.toSvg(e,t);this.items=this.items.map(s=>s.id===this.dragging?{...s,x:a.x-this.dragOffset.dx,y:a.y-this.dragOffset.dy}:s)},this.onPointerUp=()=>{this.dragging&&(ce.value=this.items.map(({id:e,x:t,y:a})=>({id:e,x:t,y:a}))),this.dragging=null}}connectedCallback(){super.connectedCallback(),ce.value.length>0&&(this.items=this.items.map(e=>{const t=ce.value.find(a=>a.id===e.id);return t?{...e,x:t.x,y:t.y}:e})),b(()=>{Ce.value,Z.value,M.value,Y.value,H.value,v.value,Ie.value,Q.value,this.requestUpdate()}),b(()=>{const e=Q.value;if(!e)return;const t=Math.sqrt(e.bPt[0]**2+e.bPt[1]**2+e.bPt[2]**2),a=Math.max(Math.abs(e.sigmaPt[0]),Math.abs(e.sigmaPt[1]),Math.abs(e.sigmaPt[2]),.001),s=t/a;Number.isFinite(s)&&(Y.value=s)}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKey)}async toggleRun(){const e=y();e&&(v.value?(await e.pause(),v.value=!1):(await e.run(),v.value=!0))}async stepFwd(){const e=y();e&&(await e.step("fwd",10),p("dbg","sim step → +1 frame"))}async stepBack(){const e=y();e&&(await e.step("back",10),p("dbg","sim step ← -1 frame"))}cycleSpeed(){const e=[.25,.5,1,2,4],t=e.indexOf(Ie.value);Ie.value=e[(t+1)%e.length]}zoomIn(){this.zoom=Math.min(2.5,this.zoom*1.2)}zoomOut(){this.zoom=Math.max(.5,this.zoom/1.2)}fitView(){this.zoom=1}toggleLayer(e){this.layerVisible={...this.layerVisible,[e]:!this.layerVisible[e]}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKey)}toSvg(e,t){const a=t.getBoundingClientRect(),s=(e.clientX-a.left)/a.width*1e3,i=(e.clientY-a.top)/a.height*600;return{x:s,y:i}}render(){const e=Ce.value,t=[e[0]*1e9,e[1]*1e9,e[2]*1e9],a=Z.value*1e9,s=H.value?"":"anim",i=1e3/this.zoom,r=600/this.zoom,n=(1e3-i)/2,l=(600-r)/2;return d`
      <div class="grid"></div>
      <svg viewBox="${n.toFixed(1)} ${l.toFixed(1)} ${i.toFixed(1)} ${r.toFixed(1)}"
        preserveAspectRatio="xMidYMid meet" id="scene-svg">
        <defs>
          <radialGradient id="g-sensor" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="oklch(0.78 0.14 70)" stop-opacity="0.4"/>
            <stop offset="1" stop-color="oklch(0.78 0.14 70)" stop-opacity="0"/>
          </radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        <!-- Field lines from each source to sensor -->
        ${this.layerVisible.field?this.items.map(c=>ue`
          <line class="field-line ${s}" x1=${c.x} y1=${c.y}
            x2="500" y2="320"
            stroke=${c.color} stroke-width="1" stroke-opacity="0.5"/>
        `):""}

        <!-- Source primitives -->
        ${this.layerVisible.source?this.items.map(c=>ue`
          <g class=${`draggable ${this.dragging===c.id?"dragging":""} ${this.selected===c.id?"selected":""}`}
             data-id=${c.id} data-source-id=${c.id}
             transform=${`translate(${c.x.toFixed(0)},${c.y.toFixed(0)})`}
             @pointerdown=${m=>this.onDown(c.id,m)}>
            <ellipse cx="0" cy="0" rx="32" ry="22" fill=${c.color} fill-opacity="0.18"
              stroke=${c.color} stroke-width="1.2"/>
            <circle cx="0" cy="0" r="4" fill=${c.color}/>
            ${this.layerVisible.label?ue`<text class="label" x="0" y="40" text-anchor="middle">${c.name}</text>`:""}
          </g>
        `):""}

        <!-- Sensor (NV diamond) at center -->
        <g id="sensor-g" class="draggable" data-id="sensor" transform="translate(500, 320)">
          <circle cx="0" cy="0" r="46" fill="url(#g-sensor)"/>
          <g class=${`crystal ${s}`} stroke="oklch(0.78 0.14 70)" stroke-width="2"
             fill="oklch(0.78 0.14 70 / 0.08)" filter="url(#glow)">
            <polygon points="0,-22 19,-7 12,18 -12,18 -19,-7"/>
          </g>
          <circle cx="0" cy="0" r="3" fill="var(--accent)"/>
          <text class="label" x="0" y="56" text-anchor="middle">
            sensor · 〈111〉 NV
          </text>
          <text class="label" x="0" y="72" text-anchor="middle">
            B_in: <tspan fill="var(--accent)" id="b-in-svg">[${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)}] nT</tspan>
          </text>
        </g>
      </svg>

      <div class="scene-toolbar" id="scene-toolbar">
        <button id="zoom-in-btn" title=${o("scene.zoomIn","Zoom in")} @click=${this.zoomIn}>+</button>
        <button id="zoom-out-btn" title=${o("scene.zoomOut","Zoom out")} @click=${this.zoomOut}>−</button>
        <button id="fit-btn" title=${o("scene.fitView","Fit to view")} @click=${this.fitView}>⊡</button>
        <button id="layer-source-btn" class=${this.layerVisible.source?"on":""}
          title=${o("scene.sources","Sources")} @click=${()=>this.toggleLayer("source")}>●</button>
        <button id="layer-field-btn" class=${this.layerVisible.field?"on":""}
          title=${o("scene.fieldLines","Field lines")} @click=${()=>this.toggleLayer("field")}>≈</button>
        <button id="layer-label-btn" class=${this.layerVisible.label?"on":""}
          title=${o("scene.labels","Labels")} @click=${()=>this.toggleLayer("label")}>T</button>
      </div>

      <div class="sim-controls" id="sim-controls">
        <button class="step" id="step-back-btn" title=${o("scene.stepBack","Step back")} @click=${this.stepBack}>⏮</button>
        <button class="play" id="play-btn" title=${o("scene.playPause","Play / pause")} @click=${this.toggleRun}>
          ${v.value?"❚❚":"▶"}
        </button>
        <button class="step" id="step-fwd-btn" title=${o("scene.stepForward","Step forward")} @click=${this.stepFwd}>⏭</button>
        <span class="speed" id="speed-val" title=${o("scene.cycleSpeed","Cycle speed")} @click=${this.cycleSpeed}>${Ie.value}×</span>
      </div>

      <div class="scene-readout">
        <div class="stat-card">
          <div class="lbl">|B|</div>
          <div class="val amber" id="bmag-readout">${a.toFixed(3)} nT</div>
        </div>
        <div class="stat-card">
          <div class="lbl">FPS</div>
          <div class="val cyan" id="fps-readout">${M.value>0?Math.round(M.value):"—"}</div>
        </div>
        <div class="stat-card">
          <div class="lbl">SNR</div>
          <div class="val mint" id="snr-readout">${Y.value>0?Y.value.toFixed(1):"—"}</div>
        </div>
      </div>
    `}};G.styles=x`
    :host {
      display: block; height: 100%; width: 100%;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      position: relative; overflow: hidden;
      border-bottom: 1px solid var(--line);
    }
    .grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      mask-image: radial-gradient(ellipse at center, black 40%, transparent 100%);
    }
    svg { position: absolute; inset: 0; width: 100%; height: 100%; }
    .stat-card {
      background: rgba(13,17,23,0.7);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 8px 12px;
      font-size: 11px;
      min-width: 96px;
    }
    [data-theme="light"] .stat-card { background: rgba(255,255,255,0.85); }
    .stat-card .lbl {
      color: var(--ink-3);
      text-transform: uppercase; font-weight: 600; letter-spacing: 0.06em; font-size: 9.5px;
    }
    .stat-card .val { font-family: var(--mono); font-size: 16px; font-weight: 600; margin-top: 2px; }
    .stat-card .val.amber { color: var(--accent); }
    .stat-card .val.cyan { color: var(--accent-2); }
    .stat-card .val.mint { color: var(--accent-4); }
    .scene-readout {
      position: absolute; top: 14px; right: 14px;
      display: flex; gap: 8px; z-index: 5;
    }
    .draggable { cursor: grab; transition: filter 0.15s; }
    .draggable:hover { filter: brightness(1.15) drop-shadow(0 0 6px currentColor); }
    .draggable.dragging { cursor: grabbing; filter: brightness(1.25) drop-shadow(0 0 10px currentColor); }
    .field-line { stroke-dasharray: 4 6; }
    @keyframes dash { to { stroke-dashoffset: -200; } }
    .field-line.anim { animation: dash 4s linear infinite; }
    @keyframes spin {
      0% { transform: rotateY(0) rotateX(8deg); }
      100% { transform: rotateY(360deg) rotateX(8deg); }
    }
    .crystal { transform-origin: center; transform-box: fill-box; }
    .crystal.anim { animation: spin 12s linear infinite; }
    .label {
      font-family: var(--mono); font-size: 11px; fill: var(--ink-2);
      pointer-events: none;
    }
    .scene-toolbar {
      position: absolute; top: 14px; left: 14px;
      display: flex; gap: 6px; z-index: 5;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 4px;
    }
    [data-theme="light"] .scene-toolbar { background: rgba(255,255,255,0.85); }
    .scene-toolbar button {
      width: 28px; height: 28px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
      display: grid; place-items: center;
      font-size: 13px;
    }
    .scene-toolbar button:hover { color: var(--ink); background: var(--bg-2); }
    .scene-toolbar button.on { background: var(--bg-3); color: var(--accent); border-color: var(--line-2); }

    .sim-controls {
      position: absolute; bottom: 14px; right: 14px;
      display: flex; gap: 6px; align-items: center;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(12px);
      border: 1px solid var(--line-2);
      border-radius: 999px;
      padding: 6px 10px;
      z-index: 5;
    }
    [data-theme="light"] .sim-controls { background: rgba(255,255,255,0.92); }
    .sim-controls .play {
      width: 32px; height: 32px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: #1a0f00;
      cursor: pointer;
      display: grid; place-items: center;
      font-size: 13px;
    }
    .sim-controls .play:hover { filter: brightness(1.08); }
    .sim-controls .step {
      width: 26px; height: 26px;
      border-radius: 6px;
      background: transparent;
      color: var(--ink-2);
      border: 1px solid var(--line);
      cursor: pointer;
      font-size: 11px;
    }
    .sim-controls .step:hover { color: var(--ink); border-color: var(--line-2); }
    .sim-controls .speed {
      font-family: var(--mono); font-size: 11px;
      color: var(--ink-2);
      padding: 0 6px;
      min-width: 36px;
      text-align: center;
      cursor: pointer;
    }
  `;be([h()],G.prototype,"zoom",2);be([h()],G.prototype,"layerVisible",2);be([h()],G.prototype,"items",2);be([h()],G.prototype,"dragging",2);be([h()],G.prototype,"selected",2);G=be([k("nv-scene")],G);var ua=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,Qe=(e,t,a,s)=>{for(var i=s>1?void 0:s?ma(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&ua(t,a,i),i};let he=class extends w{constructor(){super(...arguments),this.tab="signal",this.pinTab=null,this.expanded=!1}connectedCallback(){super.connectedCallback(),b(()=>{Te.value,We.value,Oe.value,Ae.value,Q.value,L.value,A.value,Ce.value,Z.value,this.requestUpdate()})}willUpdate(e){e.has("pinTab")&&this.pinTab&&this.tab!==this.pinTab&&(this.tab=this.pinTab)}async verify(){const e=y();if(e){A.value="pending",p("info","verifying witness over 256 frames…");try{const t=V.value,a=new Uint8Array(32);for(let i=0;i<32;i++)a[i]=parseInt(t.slice(i*2,i*2+2),16);const s=await e.verifyWitness(a);if(s.ok)A.value="ok",L.value=t,p("ok",`witness ${t.slice(0,16)}… matches · determinism gate ✓`);else{A.value="fail";const i=Array.from(s.actual).map(r=>r.toString(16).padStart(2,"0")).join("");L.value=i,p("err",`WITNESS MISMATCH actual=${i.slice(0,16)}…`)}}catch(t){A.value="fail",p("err",`verify failed: ${t.message}`)}}}renderHeader(){return this.expanded?d`
      <h1 style="margin: 8px 0 14px; font-size: 20px; letter-spacing: -0.01em;">
        ${{signal:"Signal inspector — live B-vector trace + frame stream",frame:"Frame inspector — MagFrame v1 fields + raw bytes",witness:"Witness panel — SHA-256 determinism gate"}[this.tab]}
      </h1>
      <p style="margin: 0 0 18px; font-size: 12.5px; color: var(--ink-3); line-height: 1.55; max-width: 780px;">
        ${this.tab==="signal"?"Real-time recovered field-vector and frame-stream sparkline. Both update at the running pipeline's frame rate. Use the Tunables panel in the sidebar to change f_s, f_mod, dt, and shot-noise behaviour.":this.tab==="frame"?"Decoded view of the most recent MagFrame: typed fields plus the raw 60-byte little-endian binary record (magic 0xC51A_6E70).":"Re-derive the SHA-256 witness for the canonical reference scene (seed=42, N=256) right now in your browser and compare against Proof::EXPECTED_WITNESS_HEX. Same inputs → same hash, byte-for-byte, across every machine and transport."}
      </p>
    `:""}renderSignalTab(){const r=m=>{let P="";return m.forEach((C,E)=>{const ye=E/Math.max(1,199)*320,ae=65-C*22;P+=(E===0?"M":"L")+` ${ye.toFixed(1)} ${ae.toFixed(1)} `}),P},n=Ce.value,l=[n[0]*1e9,n[1]*1e9,n[2]*1e9],c=Te.value.length>0;return d`
      ${c?"":d`
        <div class="card" style="text-align:center; padding:18px;">
          <div style="font-size:13px; color:var(--ink-2); line-height:1.55;">
            No frames yet. Press <b>▶ Run</b> in the topbar (or hit <code style="font-family:var(--mono);background:var(--bg-3);padding:1px 5px;border-radius:4px;color:var(--accent);">Space</code>)
            to start the live B-vector trace.
          </div>
        </div>
      `}
      <div class=${this.expanded?"grid-2":""}>
        <div class="card">
          <div class="card-h">
            <span class="ttl">B-vector trace</span>
            <span class="badge">3-axis · nT</span>
          </div>
          <svg viewBox="0 0 ${320} ${130}" preserveAspectRatio="none">
            <line x1="0" y1=${65} x2=${320} y2=${65} stroke="var(--line)" stroke-width="0.5"/>
            ${ue`<path id="trace-x" d=${r(Te.value)} stroke="oklch(0.78 0.14 70)" stroke-width="1.2" fill="none"/>`}
            ${ue`<path id="trace-y" d=${r(We.value)} stroke="oklch(0.78 0.12 195)" stroke-width="1.2" fill="none" opacity="0.8"/>`}
            ${ue`<path id="trace-z" d=${r(Oe.value)} stroke="oklch(0.72 0.18 330)" stroke-width="1.2" fill="none" opacity="0.7"/>`}
          </svg>
          ${this.expanded?d`<div style="display:flex;gap:14px;font-size:12px;font-family:var(--mono);margin-top:8px;">
            <span style="color:oklch(0.78 0.14 70);">x: ${l[0].toFixed(3)} nT</span>
            <span style="color:oklch(0.78 0.12 195);">y: ${l[1].toFixed(3)} nT</span>
            <span style="color:oklch(0.72 0.18 330);">z: ${l[2].toFixed(3)} nT</span>
            <span style="color:var(--accent);margin-left:auto;">|B| ${(Z.value*1e9).toFixed(3)} nT</span>
          </div>`:""}
        </div>

        <div class="card">
          <div class="card-h">
            <span class="ttl">Frame stream</span>
            <span class="badge" id="strip-rate">live</span>
          </div>
          <div class="frame-strip" id="frame-strip">
            ${Ae.value.map(m=>d`<div class="bar" style=${`height:${Math.max(4,m*100)}%`}></div>`)}
          </div>
          ${this.expanded?d`
            <div style="display:flex;gap:24px;font-family:var(--mono);font-size:12px;color:var(--ink-3);margin-top:12px;">
              <span>frames in window: <span style="color:var(--ink);">${Ae.value.length}</span></span>
              <span>noise floor: <span style="color:var(--ink);">${Q.value?Q.value.noiseFloorPtSqrtHz.toFixed(2)+" pT/√Hz":"—"}</span></span>
            </div>`:""}
        </div>
      </div>
    `}renderFrameTab(){const e=Q.value,t=e?.raw;let a="";return t&&(a=Array.from(t).map(i=>i.toString(16).padStart(2,"0")).slice(0,60).join(" ")),d`
      ${e?"":d`
        <div class="card" style="text-align:center; padding:18px;">
          <div style="font-size:13px; color:var(--ink-2); line-height:1.55;">
            No MagFrame to display yet. Start the pipeline (<b>▶ Run</b>) to populate.
          </div>
        </div>
      `}
      <div class=${this.expanded?"grid-2":""}>
      <div class="card">
        <div class="card-h">
          <span class="ttl">MagFrame v1 fields</span>
          <span class="badge">60 B</span>
        </div>
        <table>
          <tr><td>magic</td><td id="frame-magic">${e?"0x"+e.magic.toString(16).toUpperCase():"—"}</td></tr>
          <tr><td>version</td><td>${e?.version??"—"}</td></tr>
          <tr><td>flags</td><td>0x${(e?.flags??0).toString(16).padStart(4,"0")}</td></tr>
          <tr><td>sensor_id</td><td>${e?.sensorId??"—"}</td></tr>
          <tr><td>t_us</td><td>${e?e.tUs.toString():"—"}</td></tr>
          <tr><td>b_pT[0]</td><td id="frame-bx">${e?e.bPt[0].toFixed(1):"—"}</td></tr>
          <tr><td>b_pT[1]</td><td id="frame-by">${e?e.bPt[1].toFixed(1):"—"}</td></tr>
          <tr><td>b_pT[2]</td><td id="frame-bz">${e?e.bPt[2].toFixed(1):"—"}</td></tr>
          <tr><td>noise_floor</td><td>${e?e.noiseFloorPtSqrtHz.toFixed(2):"—"}</td></tr>
          <tr><td>temp_K</td><td>${e?e.temperatureK.toFixed(1):"—"}</td></tr>
        </table>
      </div>
      <div class="card">
        <div class="card-h">
          <span class="ttl">Hex dump</span>
          <span class="badge">LE</span>
        </div>
        <div class="hex" id="frame-hex">${a||"—"}</div>
        ${this.expanded?d`
          <div style="font-size: 11.5px; color: var(--ink-3); margin-top: 10px; line-height: 1.6;">
            Layout (little-endian): <code>magic(u32) version(u16) flags(u16) sensor_id(u16) _reserved(u16) t_us(u64) b_pt[3](f32) sigma_pt[3](f32) noise_floor(f32) temp_K(f32)</code>.
          </div>`:""}
      </div>
      </div>
    `}renderWitnessTab(){const e=A.value,t=e==="ok"?"ok":e==="fail"?"fail":"",a=e==="pending"?o("misc.loading","Verifying…"):e==="ok"?o("inspector.verifyOk","✓ Witness verified · determinism gate"):e==="fail"?o("inspector.verifyFail","✗ Witness mismatch · audit required"):o("inspector.verifyBtn","Verify witness"),s=V.value&&L.value&&V.value===L.value;return d`
      ${this.expanded?d`
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:18px;">
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Reference scene</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--ink);margin-top:4px;">Proof::REFERENCE</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">2 dipoles · 1 loop · 1 ferrous · 1 sensor</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Seed</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--accent);margin-top:4px;">0x0000002A</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">canonical Proof::SEED</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Sample count</div>
            <div style="font-family:var(--mono);font-size:14px;color:var(--ink);margin-top:4px;">256</div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">Proof::N_SAMPLES</div>
          </div>
          <div class="card" style="margin:0;">
            <div style="font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.06em;">Status</div>
            <div style="font-family:var(--mono);font-size:14px;margin-top:4px;color:${e==="ok"?"var(--ok)":e==="fail"?"var(--bad)":"var(--ink-3)"};">
              ${e==="ok"?"✓ matches":e==="fail"?"✗ drift":e==="pending"?"… running":"— idle"}
            </div>
            <div style="font-size:11.5px;color:var(--ink-3);margin-top:2px;">${s?"byte-equivalent":"not yet verified"}</div>
          </div>
        </div>
      `:""}
      <div class="card">
        <div class="card-h">
          <span class="ttl">Expected (Proof::EXPECTED_WITNESS_HEX)</span>
          <span class="badge">SHA-256</span>
        </div>
        <div class="witness-box" id="expected-witness">${V.value||"(loading…)"}</div>
      </div>
      <div class="card">
        <div class="card-h">
          <span class="ttl">Actual (last verify)</span>
          <span class="badge">SHA-256</span>
        </div>
        <div class="witness-box" id="actual-witness">${L.value||"(not verified yet)"}</div>
        <button class="verify-btn ${t}" id="verify-btn" @click=${this.verify}>${a}</button>
      </div>
      ${this.expanded?d`
        <div class="card">
          <div class="card-h">
            <span class="ttl">What this verifies</span>
            <span class="badge">ADR-089 §5</span>
          </div>
          <div style="font-size: 12.5px; color: var(--ink-2); line-height: 1.6;">
            <p style="margin: 0 0 10px;">Pressing <b>Verify</b> runs the canonical reference pipeline
              (<code>Proof::generate</code>) end-to-end inside this browser's WASM Worker:
              scene → Biot-Savart synthesis → material attenuation → NV ensemble → ADC + lock-in →
              concatenated <code>MagFrame</code> bytes → SHA-256.</p>
            <p style="margin: 0 0 10px;">If the resulting hash matches the constant pinned at build time
              (<code>cc8de9b01b0ff5bd…</code>), every constant — γ_e, D_GS, μ₀, T₂*, contrast, the PRNG
              stream, the frame layout, the pipeline ordering — is byte-identical to the published
              reference. If it doesn't match, <i>something</i> drifted; the dashboard names which.</p>
            <p style="margin: 0;">This is the same regression test that runs in
              <code>cargo test -p nvsim</code> — running in your browser, against your own WASM build.</p>
          </div>
        </div>
      `:""}
    `}render(){return d`
      <div class="tabs" role="tablist">
        <button class="tab ${this.tab==="signal"?"active":""}" data-pane="signal"
          role="tab" aria-selected=${this.tab==="signal"}
          @click=${()=>this.tab="signal"}>${o("inspector.signalTitle","Signal")}</button>
        <button class="tab ${this.tab==="frame"?"active":""}" data-pane="frame"
          role="tab" aria-selected=${this.tab==="frame"}
          @click=${()=>this.tab="frame"}>${o("inspector.frameTitle","Frame")}</button>
        <button class="tab ${this.tab==="witness"?"active":""}" data-pane="witness"
          role="tab" aria-selected=${this.tab==="witness"}
          @click=${()=>this.tab="witness"}>${o("inspector.witnessTitle","Witness")}</button>
      </div>
      <div class="body" role="tabpanel">
        ${this.renderHeader()}
        ${this.tab==="signal"?this.renderSignalTab():this.tab==="frame"?this.renderFrameTab():this.renderWitnessTab()}
      </div>
    `}};he.styles=x`
    :host {
      display: flex; flex-direction: column;
      background: var(--bg-1);
      border-left: 1px solid var(--line);
      overflow: hidden;
      height: 100%;
    }
    :host([expanded]) {
      border-left: 0;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
    }
    :host([expanded]) .tabs {
      padding: 0 24px;
      background: var(--bg-1);
    }
    :host([expanded]) .tab {
      padding: 16px 22px;
      font-size: 13.5px;
      flex: 0 0 auto;
    }
    :host([expanded]) .body {
      padding: 24px 28px;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }
    :host([expanded]) .card { padding: 18px 20px; }
    :host([expanded]) .card-h .ttl { font-size: 14px; }
    :host([expanded]) svg { height: 220px; }
    :host([expanded]) .frame-strip { height: 48px; }
    :host([expanded]) table { font-size: 12.5px; }
    :host([expanded]) td { padding: 6px 0; }
    :host([expanded]) .hex { font-size: 12px; padding: 14px; line-height: 1.7; }
    :host([expanded]) .witness-box { font-size: 13px; padding: 14px 16px; line-height: 1.6; }
    :host([expanded]) .verify-btn { padding: 12px; font-size: 13px; }
    :host([expanded]) .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    :host([expanded]) .grid-2 > .card { margin-bottom: 0; }
    @media (max-width: 1024px) {
      :host([expanded]) .grid-2 { grid-template-columns: 1fr; }
    }
    .tabs {
      display: flex; border-bottom: 1px solid var(--line);
    }
    .tab {
      flex: 1;
      padding: 11px 8px;
      background: transparent; border: none;
      font-size: 11.5px; font-weight: 500;
      color: var(--ink-3);
      border-bottom: 2px solid transparent;
      cursor: pointer; transition: color 0.15s, border-color 0.15s;
    }
    .tab.active { color: var(--ink); border-bottom-color: var(--accent); }
    .tab:hover { color: var(--ink-2); }
    .body { padding: 14px; flex: 1; overflow-y: auto; }

    .card {
      background: var(--bg-2); border: 1px solid var(--line);
      border-radius: var(--radius); padding: 12px;
      margin-bottom: 12px;
    }
    .card-h {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 8px;
    }
    .card-h .ttl { font-size: 12px; font-weight: 600; }
    .badge {
      font-family: var(--mono); font-size: 10px;
      padding: 2px 6px;
      background: oklch(0.78 0.14 195 / 0.12);
      color: var(--accent-2);
      border-radius: 4px;
      border: 1px solid oklch(0.78 0.14 195 / 0.3);
    }
    svg { width: 100%; height: 130px; }
    .frame-strip {
      height: 28px;
      display: flex; align-items: flex-end; gap: 1px;
      padding: 4px 0;
    }
    .bar {
      flex: 1;
      background: linear-gradient(to top, var(--accent-2), var(--accent));
      border-radius: 1px;
      min-height: 2px;
    }
    table { width: 100%; border-collapse: collapse; font-family: var(--mono); font-size: 10.5px; }
    td { padding: 4px 0; border-bottom: 1px solid var(--line); }
    td:first-child { color: var(--ink-3); }
    td:last-child { text-align: right; color: var(--ink); }
    .hex {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 10px;
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--ink-2);
      line-height: 1.6;
      overflow-x: auto;
      white-space: nowrap;
    }
    .hex .magic { color: var(--accent); font-weight: 600; }
    .witness-box {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 8px 10px;
      word-break: break-all;
      line-height: 1.5;
    }
    .verify-btn {
      margin-top: 10px;
      width: 100%;
      padding: 8px;
      border: 1px solid var(--line);
      background: var(--bg-3);
      color: var(--ink);
      border-radius: 8px;
      cursor: pointer;
      font-family: var(--mono);
      font-size: 12px;
    }
    .verify-btn:hover { border-color: var(--accent); }
    .verify-btn.ok { border-color: var(--ok); color: var(--ok); }
    .verify-btn.fail { border-color: var(--bad); color: var(--bad); }
  `;Qe([h()],he.prototype,"tab",2);Qe([Je({attribute:!1})],he.prototype,"pinTab",2);Qe([Je({type:Boolean,reflect:!0})],he.prototype,"expanded",2);he=Qe([k("nv-inspector")],he);var ha=Object.defineProperty,va=Object.getOwnPropertyDescriptor,St=(e,t,a,s)=>{for(var i=s>1?void 0:s?va(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&ha(t,a,i),i};let qe=class extends w{constructor(){super(...arguments),this.hIdx=-1,this.onKey=e=>{if(e.key==="Enter")this.exec(this.inputEl.value),this.inputEl.value="";else if(e.key==="ArrowUp"){const t=X.value;t.length&&(this.hIdx=Math.max(0,this.hIdx-1),this.inputEl.value=t[this.hIdx]??"",e.preventDefault())}else if(e.key==="ArrowDown"){const t=X.value;t.length&&(this.hIdx=Math.min(t.length,this.hIdx+1),this.inputEl.value=t[this.hIdx]??"",e.preventDefault())}}}connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),b(()=>{q.value,tt.value,Se.value,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}updated(){const e=this.renderRoot.querySelector(".body");e&&(e.scrollTop=e.scrollHeight)}counts(){const e={info:0,warn:0,err:0,dbg:0,ok:0};for(const t of q.value)e[t.level]=(e[t.level]??0)+1;return e.all=q.value.length,e}async exec(e){if(e=e.trim(),!e)return;p("info",`<span style="color:var(--accent);">nvsim&gt;</span> ${e}`),Kt(e),this.hIdx=X.value.length;const[t,...a]=e.split(/\s+/),s=a.join(" "),i=y();switch(t){case"help":p("info","commands: help · scene.list · sensor.config · run · pause · reset · seed · proof.verify · proof.export · clear · theme · status");break;case"scene.list":p("info","scene rebar-walkby-01:"),p("info","  rebar.steel.coil   @ [+2.7, 0.0, +0.3] m χ=5000"),p("info","  dipole.heart_proxy @ [-1.4, +0.2, +0.4] m m=1.0e-6 A·m²"),p("info","  loop.mains_60Hz    @ [-1.6, -0.4, 0.0] m I=2 A"),p("info","  eddy.door_steel    @ [+0.0, +1.8, +0.4] m σ=1e6 S/m");break;case"sensor.config":p("info","NvSensor::cots_defaults() {"),p("info","  pos=[0,0,0], V=1mm³, N=1e12, C=0.03, T2*=200ns"),p("info","  D=2.870 GHz, γe=28 GHz/T, Γ=1.0 MHz, axes=4×〈111〉"),p("info","  δB ≈ 1.18 pT/√Hz (Barry 2020 §III.A) }");break;case"run":i&&(await i.run(),v.value=!0,p("ok","pipeline RUN"));break;case"pause":i&&(await i.pause(),v.value=!1,p("warn","pipeline PAUSED"));break;case"reset":i&&(await i.reset(),p("info","pipeline reset · t=0"));break;case"seed":{if(!s){p("info",`current seed = 0x${J.value.toString(16).toUpperCase()}`);break}const r=BigInt(s.startsWith("0x")?s:"0x"+s);J.value=r,i&&await i.setSeed(r),p("ok",`seed → 0x${r.toString(16).toUpperCase()}`);break}case"proof.verify":{if(!i)break;p("dbg","computing SHA-256 over 256 frames…");try{const r=V.value,n=new Uint8Array(32);for(let c=0;c<32;c++)n[c]=parseInt(r.slice(c*2,c*2+2),16);(await i.verifyWitness(n)).ok?(A.value="ok",L.value=r,p("ok",`witness ${r.slice(0,16)}… matches · determinism gate ✓`)):(A.value="fail",p("err","WITNESS MISMATCH"))}catch(r){p("err",`verify failed: ${r.message}`)}break}case"proof.export":{if(!i)break;p("dbg","building proof bundle…");try{const r=await i.exportProofBundle(),n=URL.createObjectURL(r),l=document.createElement("a");l.href=n,l.download=`nvsim-proof-${Date.now()}.json`,l.click(),URL.revokeObjectURL(n),p("ok",`proof bundle exported · ${r.size} bytes`)}catch(r){p("err",`export failed: ${r.message}`)}break}case"clear":q.value=[];break;case"theme":{const r=(s||"").toLowerCase();r==="light"||r==="dark"?(T.value=r,p("ok",`theme → ${r}`)):p("info","theme [light|dark]");break}case"status":p("info",`running=${v.value} seed=0x${J.value.toString(16).toUpperCase()} verified=${A.value}`);break;default:p("err",`unknown command: ${t} · try help`)}}render(){const e=this.counts(),t=tt.value,a=q.value.filter(s=>t==="all"||s.level===t);return d`
      <div class="tabs">
        ${["all","info","warn","err","dbg"].map(s=>d`
          <button class="tab ${t===s?"active":""}" data-tab=${s}
            @click=${()=>tt.value=s}>
            ${s} <span class="cnt">${e[s]??0}</span>
          </button>
        `)}
        <span class="spacer"></span>
        <div class="tools">
          <button id="clear-log" title="Clear" @click=${()=>q.value=[]}>×</button>
          <button id="pause-log" title="Pause" @click=${()=>Se.value=!Se.value}>
            ${Se.value?"▶":"❚❚"}
          </button>
        </div>
      </div>
      <div class="body" role="log" aria-live="polite" aria-label="Console output">
        ${a.map(s=>{const i=new Date(s.ts),r=`${String(i.getSeconds()).padStart(2,"0")}.${String(i.getMilliseconds()).padStart(3,"0")}`;return d`<div class="line ${s.level}">
            <div class="ts">${r}</div>
            <div class="lvl">${s.level}</div>
            <div class="msg" .innerHTML=${s.msg}></div>
          </div>`})}
      </div>
      <div class="input">
        <span class="prompt">nvsim&gt;</span>
        <input id="console-input" type="text"
          placeholder="help · scene.list · sensor.config · run · proof.verify · clear"
          @keydown=${this.onKey}/>
      </div>
    `}};qe.styles=x`
    :host {
      display: flex; flex-direction: column;
      background: var(--bg-1);
      overflow: hidden;
    }
    .tabs {
      display: flex; align-items: center;
      border-bottom: 1px solid var(--line);
      padding: 0 10px;
      gap: 2px;
    }
    .tab {
      padding: 8px 12px;
      background: transparent; border: none;
      font-size: 11.5px; color: var(--ink-3);
      font-family: var(--mono);
      border-bottom: 2px solid transparent;
      cursor: pointer;
      margin-bottom: -1px;
    }
    .tab.active { color: var(--ink); border-bottom-color: var(--accent); }
    .tab .cnt {
      background: var(--bg-3); padding: 1px 5px; border-radius: 999px;
      font-size: 9.5px; color: var(--ink-2); margin-left: 4px;
    }
    .spacer { flex: 1; }
    .tools { display: flex; gap: 4px; padding: 4px 0; }
    .tools button {
      width: 24px; height: 24px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-3);
      font-size: 11px; cursor: pointer;
    }
    .tools button:hover { color: var(--ink); border-color: var(--line-2); }

    .body {
      flex: 1; overflow-y: auto;
      font-family: var(--mono);
      font-size: 11.5px;
      padding: 6px 0;
      background: var(--bg-0);
    }
    .line {
      display: grid;
      grid-template-columns: 70px 60px 1fr;
      gap: 12px;
      padding: 2px 12px;
      color: var(--ink-2);
      border-left: 2px solid transparent;
    }
    .line:hover { background: var(--bg-1); }
    .ts { color: var(--ink-4); font-size: 10.5px; padding-top: 1px; }
    .lvl {
      font-size: 10px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.04em; padding-top: 1px;
    }
    .line.info .lvl { color: var(--accent-2); }
    .line.warn .lvl { color: var(--warn); }
    .line.warn { border-left-color: var(--warn); background: oklch(0.7 0.18 35 / 0.04); }
    .line.err .lvl { color: var(--bad); }
    .line.err { border-left-color: var(--bad); background: oklch(0.65 0.22 25 / 0.05); }
    .line.dbg .lvl { color: var(--ink-3); }
    .line.ok .lvl { color: var(--ok); }
    .msg { color: var(--ink); white-space: pre-wrap; word-break: break-word; }

    .input {
      display: flex; align-items: center;
      border-top: 1px solid var(--line);
      background: var(--bg-0);
      padding: 0 10px;
      height: 32px; gap: 8px;
    }
    .prompt { color: var(--accent); font-family: var(--mono); font-size: 12px; }
    input[type="text"] {
      flex: 1; background: transparent; border: none; outline: none;
      color: var(--ink); font-family: var(--mono); font-size: 12px;
      height: 100%;
    }
    input::placeholder { color: var(--ink-4); }
  `;St([xt("#console-input")],qe.prototype,"inputEl",2);qe=St([k("nv-console")],qe);const _e=[{id:"nvsim",name:"nvsim — NV-diamond magnetometer",name_ja:"nvsim — NVセンターダイヤモンド磁気計",category:"sim",crate:"nvsim",summary:"Deterministic forward simulator: scene → Biot–Savart → NV ensemble → ADC → MagFrame stream + SHA-256 witness.",summary_ja:"決定論的順方向シミュレータ: シーン → ビオ・サバール → NVアンサンブル → ADC → MagFrameストリーム + SHA-256ウィトネス",budget:"L",active:!0,status:"available",tags:["quantum","magnetometer","simulator","witness","wasm"],adr:"ADR-089",runtime:"running"},{id:"gesture",name:"Gesture (DTW)",name_ja:"ジェスチャー認識 (DTW)",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Dynamic-Time-Warping gesture classifier from CSI motion templates.",summary_ja:"CSI動態テンプレートからの動的時間伸縮（DTW）ジェスチャー分類器",events:[1],budget:"M",status:"available",tags:["hci","csi","classifier","dtw"],adr:"ADR-014",runtime:"mesh-only"},{id:"coherence",name:"Coherence gate",name_ja:"コヒーレンスゲート",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Z-score coherence scoring + Accept/PredictOnly/Reject/Recalibrate gate.",summary_ja:"Zスコアコヒーレンス評価 ＋ 受理/予測専用/拒絶/再校正判定ゲート",events:[2],budget:"S",status:"available",tags:["gate","csi","coherence","drift"],adr:"ADR-029",runtime:"simulated"},{id:"adversarial",name:"Adversarial-signal detector",name_ja:"敵対的信号検知器",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Physically-impossible-signal detector — multi-link consistency, used to flag spoofed CSI.",summary_ja:"物理的非整合信号検出器 — 複数リンク間の一貫性を評価し、偽装CSIを検知",events:[3],budget:"M",status:"available",tags:["security","csi","spoofing","mesh"],adr:"ADR-032",runtime:"simulated"},{id:"rvf",name:"RVF — Rust Verified Feature stream",name_ja:"RVF — Rust検証済み特徴ストリーム",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Verified-frame builder with SHA-256 hash + version metadata for the feature stream.",summary_ja:"特徴ストリーム用SHA-256ハッシュ＋バージョンメタデータ付き検証済みフレームビルダー",budget:"S",status:"available",tags:["witness","csi","hash"],adr:"ADR-040"},{id:"occupancy",name:"Occupancy estimator",name_ja:"在室者数推定器",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Through-wall presence + person-count via CSI amplitude perturbation.",summary_ja:"CSI振幅摂動解析による壁越し存在検知および人数カウント",events:[300,301,302],budget:"S",status:"available",tags:["csi","building","presence"],runtime:"simulated"},{id:"vital_trend",name:"Vital-trend monitor",name_ja:"バイタル傾向モニター",category:"med",crate:"wifi-densepose-wasm-edge",summary:"HR + BR trend tracking with bradycardia/tachycardia/apnea events.",summary_ja:"心拍数・呼吸数の傾向トラッキング（徐脈/頻脈/無呼吸イベント検知対応）",events:[100,101,102,103,104,105],budget:"S",status:"available",tags:["medical","vitals","csi"],adr:"ADR-021",runtime:"simulated"},{id:"intrusion",name:"Intrusion detector",name_ja:"侵入検知器",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Zone-based intrusion alert from CSI motion patterns.",summary_ja:"CSI動態パターンに基づくゾーン別侵入アラート",events:[200,201],budget:"S",status:"available",tags:["security","zone","csi"],runtime:"simulated"},{id:"med_sleep_apnea",name:"Sleep-apnea detector",name_ja:"睡眠時無呼吸検知器",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Episodic respiratory pause detection during sleep cycles.",summary_ja:"睡眠サイクル中におけるエピソード的呼吸停止の検出",events:[105],budget:"S",status:"available",tags:["medical","sleep","breathing"]},{id:"med_cardiac_arrhythmia",name:"Cardiac arrhythmia",name_ja:"不整脈分類器",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Beat-to-beat irregularity classifier from cardiac micro-Doppler.",summary_ja:"心拍マイクロドップラーに基づく拍動間隔不整の分類",events:[103,104],budget:"M",status:"available",tags:["medical","cardiac","arrhythmia"]},{id:"med_respiratory_distress",name:"Respiratory distress",name_ja:"呼吸促迫検知器",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Distress signature: rapid shallow breathing + accessory-muscle motion.",summary_ja:"呼吸促迫サインの検出: 浅促進呼吸と呼吸補助筋運動の解析",events:[101,102],budget:"S",status:"available",tags:["medical","breathing","icu"]},{id:"med_gait_analysis",name:"Gait analysis",name_ja:"歩行分析器",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Stride length, cadence, asymmetry from through-wall CSI pose tracking.",summary_ja:"壁越しCSI姿勢トラッキングに基づく歩幅・ケイデンス・左右非対称性の算出",budget:"M",status:"available",tags:["medical","gait","pose"]},{id:"med_seizure_detect",name:"Seizure detector",name_ja:"痙攣発作検知器",category:"med",crate:"wifi-densepose-wasm-edge",summary:"Tonic-clonic seizure motion signature.",summary_ja:"全般性強直間代発作（トニック・クロニック）運動パターンの検知",budget:"M",status:"beta",tags:["medical","neuro"]},{id:"sec_perimeter_breach",name:"Perimeter breach",name_ja:"外周境界侵入検知",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Approach/departure detection at user-defined boundary segments.",summary_ja:"ユーザー定義境界セグメントにおける接近・離脱の検出",events:[210,211,212,213],budget:"S",status:"available",tags:["security","perimeter"]},{id:"sec_weapon_detect",name:"Metal anomaly / weapon",name_ja:"金属異常・武器検知",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Metal-perturbation flag in CSI; potential weapon presence (research).",summary_ja:"CSIにおける金属摂動フラグ検出（武器存在の可能性検知・研究段階）",events:[220,221,222],budget:"M",status:"research",tags:["security","metal","csi"]},{id:"sec_tailgating",name:"Tailgating detector",name_ja:"共連れ検知器",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Detect 2+ persons crossing a single-passage threshold.",summary_ja:"単一通行境界を複数人が同時に通過する共連れ動作の検出",events:[230,231,232],budget:"S",status:"available",tags:["security","access-control"]},{id:"sec_loitering",name:"Loitering detector",name_ja:"徘徊・長滞在検知器",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"Stationary occupancy past a configurable dwell threshold.",summary_ja:"設定された滞留閾値を超える静止在室の検出",events:[240,241,242],budget:"S",status:"available",tags:["security","dwell"]},{id:"sec_panic_motion",name:"Panic motion",name_ja:"パニック運動検知器",category:"sec",crate:"wifi-densepose-wasm-edge",summary:"High-energy distress motion: struggle / fleeing pattern.",summary_ja:"高エネルギーの困惑・もがき・逃走パターンの検出",events:[250,251,252],budget:"S",status:"beta",tags:["security","distress"]},{id:"bld_hvac_presence",name:"HVAC presence",name_ja:"HVAC連動在室検知",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Occupied/activity-level/departure-countdown for HVAC zones.",summary_ja:"HVACゾーン別の在室状況・活動レベル・退室カウントダウン出力",events:[310,311,312],budget:"S",status:"available",tags:["hvac","building","energy"]},{id:"bld_lighting_zones",name:"Lighting zones",name_ja:"照明ゾーン制御",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Per-zone light on/dim/off cues from occupancy.",summary_ja:"在室状況に基づくゾーン別照明点灯・調光・消灯シグナル出力",events:[320,321,322],budget:"S",status:"available",tags:["lighting","building"]},{id:"bld_elevator_count",name:"Elevator count",name_ja:"エレベーター内人数カウント",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Person count inside elevator car from CSI.",summary_ja:"CSI信号解析によるエレベーター籠内のリアルタイム人数計測",events:[330],budget:"S",status:"available",tags:["elevator","building"]},{id:"bld_meeting_room",name:"Meeting-room utilization",name_ja:"会議室利用率分析",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Meeting size + duration analytics for booking systems.",summary_ja:"予約システム向けの会議参加人数・利用時間アナリティクス",budget:"S",status:"available",tags:["meeting","analytics"]},{id:"bld_energy_audit",name:"Energy audit",name_ja:"エネルギー監査モジュール",category:"bld",crate:"wifi-densepose-wasm-edge",summary:"Continuous occupancy-vs-HVAC-state audit for energy savings.",summary_ja:"省エネ最適化のための在室状況対HVAC稼働状態の継続監査",budget:"M",status:"available",tags:["energy","audit"]},{id:"ret_queue_length",name:"Queue length",name_ja:"行列長トラッキング",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Live queue-length tracking for checkout / kiosks.",summary_ja:"レジ・キオスク周辺のリアルタイム行列人数および長さの計測",budget:"S",status:"available",tags:["retail","queue"]},{id:"ret_dwell_heatmap",name:"Dwell heatmap",name_ja:"滞留ヒートマップ",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Per-zone dwell time accumulation; analytics-only export.",summary_ja:"エリア別滞在時間の累積計測とアナリティクスデータ出力",budget:"M",status:"available",tags:["retail","heatmap"]},{id:"ret_customer_flow",name:"Customer flow",name_ja:"動線フローマッピング",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Origin-destination flow graph through a store layout.",summary_ja:"店舗レイアウト内における顧客の流入・流出動線グラフ構築",budget:"M",status:"available",tags:["retail","flow"]},{id:"ret_table_turnover",name:"Table turnover",name_ja:"テーブル回転率モニター",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Restaurant table seat / vacate transitions.",summary_ja:"飲食店における着席・離席状態の遷移検知",budget:"S",status:"available",tags:["retail","restaurant"]},{id:"ret_shelf_engagement",name:"Shelf engagement",name_ja:"商品棚エンゲージメント検知",category:"ret",crate:"wifi-densepose-wasm-edge",summary:"Reach-to-shelf gestures and dwell at product zones.",summary_ja:"商品棚への手を伸ばす動作および滞留時間の検出",budget:"M",status:"available",tags:["retail","shelf"]},{id:"ind_forklift_proximity",name:"Forklift proximity",name_ja:"フォークリフト接近警報",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Worker-near-forklift safety alert.",summary_ja:"作業員とフォークリフトの接触危険領域への接近アラート",budget:"S",status:"available",tags:["industrial","safety"]},{id:"ind_confined_space",name:"Confined-space monitor",name_ja:"密閉空間監視モニター",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Last-person-out detection + presence audit for OSHA confined-space entries.",summary_ja:"OSHA規格に準拠した密閉空間における最終退室確認および入室監査",budget:"S",status:"available",tags:["industrial","osha"]},{id:"ind_clean_room",name:"Clean-room PPE / motion",name_ja:"クリーンルーム作業動作確認",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Motion patterns consistent with proper PPE-clad movement.",summary_ja:"適切な防塵服（PPE）着用状態の動作パターン適合性検証",budget:"M",status:"beta",tags:["industrial","cleanroom"]},{id:"ind_livestock_monitor",name:"Livestock monitor",name_ja:"家畜バイタル・行動モニター",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Vital-sign + activity tracking for stall-bound livestock.",summary_ja:"牛舎・豚舎等の家畜におけるバイタルサインおよび活動量計測",budget:"M",status:"beta",tags:["agriculture","livestock"]},{id:"ind_structural_vibration",name:"Structural vibration",name_ja:"構造物微振動モニター",category:"ind",crate:"wifi-densepose-wasm-edge",summary:"Building/equipment micro-vibration via CSI phase derivative.",summary_ja:"CSI位相微分による建物・産業機器の微小振動検出",budget:"M",status:"research",tags:["industrial","vibration"]},{id:"sig_coherence_gate",name:"Coherence gate (extended)",name_ja:"拡張コヒーレンスゲート",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Hysteresis + multi-state coherence gate driving downstream apps.",summary_ja:"後続アプリを駆動するヒステリシス付きマルチステート・コヒーレンス判定",budget:"S",status:"available",tags:["gate","csi"]},{id:"sig_flash_attention",name:"Flash attention (CSI)",name_ja:"Flash Attention (CSI)",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Edge-friendly attention block for CSI subcarrier weighting.",summary_ja:"CSIサブキャリア重み付け用のエッジ最適化アテンションブロック",budget:"M",status:"beta",tags:["attention","csi"]},{id:"sig_temporal_compress",name:"Temporal-tensor compress",name_ja:"時系列テンソル圧縮",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"RuVector temporal-tensor compression on the CSI buffer.",summary_ja:"CSIバッファに対するRuVector時系列テンソルデータ圧縮",budget:"M",status:"available",tags:["compress","tensor"]},{id:"sig_sparse_recovery",name:"Sparse recovery",name_ja:"スパース信号復元",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"114→56 subcarrier sparse interpolation via L1 solver.",summary_ja:"L1ソルバーを用いた114→56サブキャリアのスパース補間処理",budget:"M",status:"available",tags:["sparse","csi"]},{id:"sig_mincut_person_match",name:"Mincut person-match",name_ja:"最小カット人物照合",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"Min-cut person assignment across multistatic frames.",summary_ja:"マルチスタティックフレーム間における最小カット法による同一人物割り当て",budget:"M",status:"available",tags:["mincut","matching"]},{id:"sig_optimal_transport",name:"Optimal transport",name_ja:"最適輸送アライメント",category:"sig",crate:"wifi-densepose-wasm-edge",summary:"OT-based feature alignment between mesh nodes.",summary_ja:"メッシュノード間での最適輸送（OT）に基づく特徴量アライメント",budget:"M",status:"beta",tags:["ot","alignment"]},{id:"lrn_dtw_gesture_learn",name:"DTW gesture learn",name_ja:"DTWジェスチャーオンデバイス学習",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"On-device template learning for personalized gesture libraries.",summary_ja:"パーソナライズされたジェスチャーライブラリのためのデバイス内テンプレート学習",budget:"M",status:"beta",tags:["lifelong","gesture"]},{id:"lrn_anomaly_attractor",name:"Anomaly attractor",name_ja:"アノーマリーアトラクター",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Novelty detector with dynamic-attractor recall.",summary_ja:"動的アトラクター記憶を備えた未知・異常パターン検出器",budget:"M",status:"research",tags:["novelty","lifelong"]},{id:"lrn_meta_adapt",name:"Meta-adapt",name_ja:"メタ適応モジュール",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Meta-learning adapter for fast site-to-site transfer.",summary_ja:"拠点間での迅速な環境適応を実現するメタ学習アダプター",budget:"L",status:"research",tags:["meta-learning"]},{id:"lrn_ewc_lifelong",name:"EWC++ lifelong",name_ja:"EWC++ 継続学習ゲート",category:"lrn",crate:"wifi-densepose-wasm-edge",summary:"Elastic-weight-consolidation gate to avoid catastrophic forgetting.",summary_ja:"破滅的忘却を防止する弾性重み統合（EWC++）制御ゲート",budget:"M",status:"beta",tags:["lifelong","ewc"]},{id:"spt_pagerank_influence",name:"PageRank influence",name_ja:"PageRankノード影響度分析",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Graph-influence ranking on the multistatic mesh.",summary_ja:"マルチスタティックメッシュ上でのグラフ影響度スコアリング",budget:"M",status:"beta",tags:["graph","pagerank"]},{id:"spt_micro_hnsw",name:"µHNSW vector index",name_ja:"µHNSW ベクトルインデックス",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Tiny HNSW index for AETHER re-ID embeddings on-device.",summary_ja:"AETHER再識別（re-ID）埋め込み用の超軽量オンデバイスHNSWインデックス",budget:"M",status:"available",tags:["hnsw","reid"]},{id:"spt_spiking_tracker",name:"Spiking tracker",name_ja:"スパイキング・ニューラル・トラッカー",category:"spt",crate:"wifi-densepose-wasm-edge",summary:"Spiking-network multi-target tracker.",summary_ja:"スパイキングニューラルネットワーク（SNN）を用いた複数対象トラッカー",budget:"L",status:"research",tags:["snn","tracker"]},{id:"tmp_pattern_sequence",name:"Pattern sequence",name_ja:"時系列パターンシーケンサー",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"Sequence-of-events pattern matcher (e.g. ingress→linger→egress).",summary_ja:"一連のイベント順序パターンマッチング（例: 入室→滞留→退室）",budget:"M",status:"available",tags:["temporal","pattern"]},{id:"tmp_temporal_logic_guard",name:"Temporal logic guard",name_ja:"時相ロジックガード",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"LTL/MTL safety-property guard over event streams.",summary_ja:"イベントストリームに対するLTL/MTL時相論理による安全要件検証",budget:"M",status:"beta",tags:["ltl","safety"]},{id:"tmp_goap_autonomy",name:"GOAP autonomy",name_ja:"GOAP自律計画エンジン",category:"tmp",crate:"wifi-densepose-wasm-edge",summary:"Goal-oriented action planning for adaptive routines.",summary_ja:"適応型ルーチンを実行する目標指向型アクション計画（GOAP）",budget:"L",status:"research",tags:["planning","autonomy"]},{id:"ais_prompt_shield",name:"Prompt shield",name_ja:"プロンプトシールド",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Edge-side LLM prompt-injection guard for on-device assistants.",summary_ja:"オンデバイスAIアシスタント向けエッジ側LLMプロンプトインジェクション防護",budget:"M",status:"beta",tags:["security","llm"]},{id:"ais_behavioral_profiler",name:"Behavioral profiler",name_ja:"行動プロファイラー",category:"ais",crate:"wifi-densepose-wasm-edge",summary:"Anomalous-behaviour profiler (drift in motion habits).",summary_ja:"日常の運動習慣のドリフトを検出する行動パターンプロファイラー",budget:"M",status:"beta",tags:["anomaly","behaviour"]},{id:"qnt_quantum_coherence",name:"Quantum coherence",name_ja:"量子コヒーレンス診断",category:"qnt",crate:"wifi-densepose-wasm-edge",summary:"Coherence diagnostics adapted for quantum-sensor signals.",summary_ja:"量子センサー信号に最適化されたコヒーレンス評価・診断モジュール",budget:"M",status:"research",tags:["quantum","coherence"]},{id:"qnt_interference_search",name:"Interference search",name_ja:"干渉パターン異常捜索",category:"qnt",crate:"wifi-densepose-wasm-edge",summary:"Interferometric anomaly search across mesh viewpoints.",summary_ja:"メッシュの複数視点にわたる干渉計測型異常パターンの捜索",budget:"L",status:"research",tags:["quantum","interference"]},{id:"aut_psycho_symbolic",name:"Psycho-symbolic agent",name_ja:"サイコシンボリックエージェント",category:"aut",crate:"wifi-densepose-wasm-edge",summary:"Symbolic-rule + neural-feature hybrid for low-power autonomy loops.",summary_ja:"低消費電力自律制御のための記号論理規則＋ニューラル特徴量のハイブリッド手法",budget:"L",status:"research",tags:["autonomy","symbolic"]},{id:"aut_self_healing_mesh",name:"Self-healing mesh",name_ja:"セルフヒーリング・メッシュ",category:"aut",crate:"wifi-densepose-wasm-edge",summary:"Mesh-topology repair with per-node health gossip.",summary_ja:"ノード間ヘルスゴシッププロトコルによるメッシュトポロジー自動修復",budget:"M",status:"beta",tags:["mesh","health"]},{id:"exo_ghost_hunter",name:"Ghost hunter (anomaly)",name_ja:"ゴーストハンター (環境異常検知)",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Empty-room CSI anomaly detector — impulsive/periodic/drift/random + hidden-presence sub-detector.",summary_ja:"無人部屋CSI異常検知器 — 突発/周期/ドリフト/ランダムノイズ ＋ 隠れた存在サブ検知",events:[650,651,652,653],budget:"S",status:"available",tags:["anomaly","paranormal","csi"],adr:"ADR-041",runtime:"simulated"},{id:"exo_breathing_sync",name:"Breathing sync",name_ja:"複数人呼吸同期アナリティクス",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Multi-person breathing synchrony analytics.",summary_ja:"複数人物間における呼吸リズムの同期度分析",budget:"M",status:"beta",tags:["breathing","sync"]},{id:"exo_dream_stage",name:"Dream-stage classifier",name_ja:"夢判定・睡眠ステージ分類",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"NREM/REM stage classification from breathing + micro-motion.",summary_ja:"呼吸および微少運動に基づくノンレム/レム睡眠ステージ分類",budget:"M",status:"research",tags:["sleep","rem"]},{id:"exo_emotion_detect",name:"Emotion detector",name_ja:"感情推定器",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Coarse arousal/valence from breathing + heart-rate variability.",summary_ja:"呼吸と心拍変動（HRV）に基づく概略覚醒度・弁別度推定",budget:"M",status:"research",tags:["affect"]},{id:"exo_gesture_language",name:"Gesture language",name_ja:"手話ジェスチャー認識",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Sign-language pattern recognition.",summary_ja:"CSIに基づく手話運動パターンの認識",budget:"L",status:"research",tags:["hci","sign"]},{id:"exo_happiness_score",name:"Happiness score",name_ja:"幸福度・ウェルビーイングスコア",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Aggregate well-being score from co-occupancy + activity dynamics.",summary_ja:"同室滞在動態および活動度からの総合的ウェルビーイング算出",budget:"M",status:"research",tags:["affect","wellbeing"]},{id:"exo_hyperbolic_space",name:"Hyperbolic space embed",name_ja:"双曲空間埋め込み",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Hyperbolic embeddings for hierarchical scene structure.",summary_ja:"階層的シーン構造表現のための双曲空間埋め込み（Hyperbolic Embeddings）",budget:"L",status:"research",tags:["embedding","hyperbolic"]},{id:"exo_music_conductor",name:"Music conductor",name_ja:"ミュージックコンダクター",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Map gesture energy to MIDI tempo/dynamics.",summary_ja:"体のジェスチャーエネルギーをMIDIテンポおよびダイナミクスに変換",budget:"M",status:"research",tags:["midi","art"]},{id:"exo_plant_growth",name:"Plant-growth tracker",name_ja:"植物成長トラッカー",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Slow CSI drift tracking for greenhouse foliage growth.",summary_ja:"温室内植物の成長に伴うCSIの緩慢なドリフト測定",budget:"L",status:"research",tags:["agriculture"]},{id:"exo_rain_detect",name:"Rain detector",name_ja:"降雨検知器",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Outdoor CSI signature of rainfall.",summary_ja:"屋外WiFi CSIシグネチャによる降雨の非接触検知",budget:"M",status:"research",tags:["weather"]},{id:"exo_time_crystal",name:"Time-crystal periodicity",name_ja:"タイムクリスタル周期性診断",category:"exo",crate:"wifi-densepose-wasm-edge",summary:"Periodicity diagnostics with anti-aliasing harmonics.",summary_ja:"アンチエイリアシング高調波を備えた周期性診断モジュール",budget:"M",status:"research",tags:["periodicity"]}],$e={sim:{label:"Simulators",label_ja:"シミュレータ",color:"oklch(0.78 0.14 70)",range:"—"},med:{label:"Medical & Health",label_ja:"医療",color:"oklch(0.65 0.22 25)",range:"100–199"},sec:{label:"Security & Safety",label_ja:"防犯・警備",color:"oklch(0.7 0.18 35)",range:"200–299"},bld:{label:"Smart Building",label_ja:"スマートビル",color:"oklch(0.78 0.12 195)",range:"300–399"},ret:{label:"Retail & Hospitality",label_ja:"店舗・商業",color:"oklch(0.78 0.14 145)",range:"400–499"},ind:{label:"Industrial",label_ja:"産業",color:"oklch(0.72 0.18 330)",range:"500–599"},sig:{label:"Signal Processing",label_ja:"信号処理",color:"oklch(0.78 0.14 70)",range:"600–619"},lrn:{label:"Online Learning",label_ja:"オンライン学習",color:"oklch(0.78 0.12 260)",range:"620–639"},spt:{label:"Spatial / Graph",label_ja:"空間・グラフ",color:"oklch(0.7 0.18 100)",range:"640–659"},tmp:{label:"Temporal / Planning",label_ja:"時相ロジック",color:"oklch(0.7 0.16 50)",range:"660–679"},ais:{label:"AI Safety",label_ja:"AIセーフティ",color:"oklch(0.65 0.22 25)",range:"700–719"},qnt:{label:"Quantum",label_ja:"量子信号",color:"oklch(0.72 0.18 290)",range:"720–739"},aut:{label:"Autonomy",label_ja:"自律走行・メッシュ",color:"oklch(0.78 0.14 145)",range:"740–759"},exo:{label:"Exotic / Research",label_ja:"研究・特殊",color:"oklch(0.72 0.18 330)",range:"650–699"}};function ga(){return _e.map(e=>({id:e.id,active:e.active===!0,eventCount:0}))}const ba="nvsim",fa=1,ve="kv";let Le=null;function _t(){return Le||(Le=new Promise((e,t)=>{const a=indexedDB.open(ba,fa);a.onupgradeneeded=()=>{const s=a.result;s.objectStoreNames.contains(ve)||s.createObjectStore(ve)},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error)}),Le)}async function W(e){const t=await _t();return await new Promise((a,s)=>{const r=t.transaction(ve,"readonly").objectStore(ve).get(e);r.onsuccess=()=>a(r.result),r.onerror=()=>s(r.error)})}async function O(e,t){const a=await _t();return await new Promise((s,i)=>{const r=a.transaction(ve,"readwrite");r.objectStore(ve).put(t,e),r.oncomplete=()=>s(),r.onerror=()=>i(r.error)})}function Me(e){if(e.length===0)return 0;let t=0;for(const a of e)t+=a;return t/e.length}function lt(e){if(e.length<2)return 0;const t=Me(e);let a=0;for(const s of e)a+=(s-t)*(s-t);return Math.sqrt(a/(e.length-1))}const ya=e=>{if(e.bHistory.length<64)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<1)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-64),s=Me(a);let i=0;for(let m=1;m<a.length;m++)(a[m]-s)*(a[m-1]-s)<0&&i++;const r=i/2,n=Math.max(40,Math.min(180,Math.round(r/.65*60))),l=Math.max(8,Math.min(30,Math.round(n/4))),c=[{ts:Date.now(),appId:"vital_trend",eventId:100,eventName:"VITAL_TREND",value:n,detail:`HR≈${n} BPM, BR≈${l} br/min`}];return n<60?c.push({ts:Date.now(),appId:"vital_trend",eventId:103,eventName:"BRADYCARDIA",value:n,detail:`HR=${n} BPM`}):n>100&&c.push({ts:Date.now(),appId:"vital_trend",eventId:104,eventName:"TACHYCARDIA",value:n,detail:`HR=${n} BPM`}),l<12?c.push({ts:Date.now(),appId:"vital_trend",eventId:101,eventName:"BRADYPNEA",value:l,detail:`BR=${l} br/min`}):l>24&&c.push({ts:Date.now(),appId:"vital_trend",eventId:102,eventName:"TACHYPNEA",value:l,detail:`BR=${l} br/min`}),c},xa=e=>{if(e.bHistory.length<32)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<2)return null;const a=lt(e.bHistory.slice(-128))*1e9,s=a>.01,i=(e.state.occ??0)>.5;return s!==i?(e.state.occ=s?1:0,e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"occupancy",eventId:s?300:302,eventName:s?"ZONE_OCCUPIED":"ZONE_TRANSITION",value:a,detail:s?`σ(|B|)=${a.toFixed(3)} nT — entered`:`σ(|B|)=${a.toFixed(3)} nT — left`}):null},wa=e=>{const t=e.state.ambient??e.bMagT;e.state.ambient=.95*t+.05*e.bMagT;const a=e.bMagT>t*1.5&&e.bMagT>1e-12,s=e.state.dwellStart??0;return a&&s===0?e.state.dwellStart=e.elapsedS:a||(e.state.dwellStart=0),a&&s>0&&e.elapsedS-s>.5&&(e.state.lastEmitS??0)<s?(e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"intrusion",eventId:200,eventName:"INTRUSION_ALERT",value:e.bMagT*1e9,detail:`|B|=${(e.bMagT*1e9).toFixed(2)} nT > 1.5× ambient (${(t*1e9).toFixed(2)} nT) for ${(e.elapsedS-s).toFixed(1)} s`}):null},ka=e=>{if(e.bHistory.length<64)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<.5)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-32),s=e.bHistory.slice(-128,-32);if(s.length<32)return null;const i=Me(s),r=lt(s);if(r===0)return null;const n=Me(a),l=Math.abs(n-i)/r;return{ts:Date.now(),appId:"coherence",eventId:2,eventName:"COHERENCE_SCORE",value:l,detail:`z=${l.toFixed(2)} σ ${l>3?"· DRIFT":l>1.5?"· marginal":"· stable"}`}},$a=e=>{if(e.bHistory.length<32)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<3)return null;const a=e.bHistory.slice(-32);let s=0;for(let i=1;i<a.length;i++){const r=Math.abs(Math.log(Math.max(a[i],1e-15))-Math.log(Math.max(a[i-1],1e-15)));r>s&&(s=r)}return s>5?(e.state.lastEmitS=e.elapsedS,{ts:Date.now(),appId:"adversarial",eventId:3,eventName:"ANOMALY_DETECTED",value:s,detail:`log-jump ${s.toFixed(1)} — physically implausible step in |B|`}):null},Sa=e=>{if(e.bHistory.length<128)return null;const t=e.state.lastEmitS??0;if(e.elapsedS-t<4)return null;e.state.lastEmitS=e.elapsedS;const a=e.bHistory.slice(-128),s=lt(a)*1e9,i=Me(a);let r=0;for(const c of a){const m=Math.abs(c-i);m>r&&(r=m)}const n=r>4*(s*1e-9)?1:e.elapsedS>10?3:4,l=n===1?"impulsive":n===3?"drift":"random";return{ts:Date.now(),appId:"exo_ghost_hunter",eventId:651,eventName:"ANOMALY_CLASS",value:n,detail:`class=${l} · σ=${s.toFixed(3)} nT`}},Tt={vital_trend:ya,occupancy:xa,intrusion:wa,coherence:ka,adversarial:$a,exo_ghost_hunter:Sa};function _a(e){return e in Tt}var Ta=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,At=(e,t,a,s)=>{for(var i=s>1?void 0:s?Aa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ta(t,a,i),i};const U=u(ga()),He=u(""),re=u("all"),j=u("all");(async()=>{const e=await W("app-activations");e&&(U.value=e)})();b(()=>{const e=U.value;e.length>0&&O("app-activations",e);const t=new Set;for(const a of e)a.active&&t.add(a.id);kt.value=t});let Ue=class extends w{constructor(){super(...arguments),this.renderTick=0}connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),b(()=>{U.value,He.value,re.value,j.value,Be.value,Ve.value,this.renderTick++})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}isActive(e){return U.value.find(t=>t.id===e)?.active===!0}toggle(e){const t=_()==="ja",a=this.isActive(e.id),s=U.value.map(i=>i.id===e.id?{...i,active:!i.active,lastActivatedAt:Date.now()}:i);if(U.value=s,!a){const i=e.runtime??"mesh-only",r=i==="simulated"?t?" · ライブランタイム有効":" · live runtime engaged":i==="running"?t?" · プラットフォームカーネル":" · platform kernel":t?" · メッシュ転送が必要":" · mesh transport required",n=t&&e.name_ja?e.name_ja:e.name;N(`${t?"有効化: ":"Activated "}${n}${r}`,"✦")}}filtered(){const e=He.value.trim().toLowerCase(),t=re.value,a=j.value;return _e.filter(s=>{if(t!=="all"&&s.category!==t||a!=="all"&&s.status!==a)return!1;if(!e)return!0;const i=$e[s.category];return s.name.toLowerCase().includes(e)||s.name_ja&&s.name_ja.toLowerCase().includes(e)||s.summary.toLowerCase().includes(e)||s.summary_ja&&s.summary_ja.toLowerCase().includes(e)||(s.tags?.some(r=>r.toLowerCase().includes(e))??!1)||i.label.toLowerCase().includes(e)||i.label_ja&&i.label_ja.toLowerCase().includes(e)})}categoryCounts(){const e={all:_e.length};for(const t of Object.keys($e))e[t]=0;for(const t of _e)e[t.category]=(e[t.category]??0)+1;return e}render(){const e=_()==="ja",t=this.filtered(),a=this.categoryCounts(),s=U.value.filter(i=>i.active).length;return d`
      <div class="head">
        <div class="ttl">
          ${o("appstore.title","App Store")}
          <small>${_e.length} ${e?"個のエッジアプリ":"edge apps"} · ${s} ${e?"個が有効":"active"}</small>
        </div>
        <input class="search" id="app-search" placeholder="${o("appstore.searchPlaceholder","Search by name, tag, or category…")}"
          .value=${He.value}
          @input=${i=>{He.value=i.target.value}} />
      </div>

      <div class="filters">
        <span class="chip ${re.value==="all"?"on":""}"
          @click=${()=>re.value="all"}>
          ${o("appstore.all","All")}<span class="count">${a.all}</span>
        </span>
        ${Object.keys($e).map(i=>{const r=$e[i],n=e&&r.label_ja?r.label_ja:r.label;return d`
            <span class="chip ${re.value===i?"on":""}"
              @click=${()=>re.value=i}>
              <span class="swatch" style=${`background:${r.color}`}></span>
              ${n}
              <span class="count">${a[i]??0}</span>
            </span>
          `})}
        <span style="flex:1; min-width:8px"></span>
        <span class="chip ${j.value==="all"?"on":""}" @click=${()=>j.value="all"}>${e?"すべて":"any"}</span>
        <span class="chip ${j.value==="available"?"on":""}" @click=${()=>j.value="available"}>${e?"利用可能":"available"}</span>
        <span class="chip ${j.value==="beta"?"on":""}" @click=${()=>j.value="beta"}>${e?"ベータ版":"beta"}</span>
        <span class="chip ${j.value==="research"?"on":""}" @click=${()=>j.value="research"}>${e?"研究・特殊":"research"}</span>
      </div>

      ${this.renderEventsFeed()}

      ${t.length===0?d`<div class="empty">${e?"該当するアプリが見つかりません。":"No apps match the current filters."}</div>`:d`<div class="grid">${t.map(i=>this.card(i))}</div>`}
    `}renderEventsFeed(){const e=_()==="ja",t=Be.value.slice(-12).reverse(),a=U.value.filter(s=>s.active&&_a(s.id)).length;return d`
      <div class="events-feed">
        <h3>${e?"ライブランタイムフィード":"Live runtime feed"}
          ${a>0?d`<span class="card-events-count" style="margin-left: 8px;">${a} ${e?"個のシミュレーションアプリが動作中":`simulated app${a===1?"":"s"} active`}</span>`:""}
        </h3>
        <p class="lead">
          ${e?d`
            <span class="badge rt-simulated" style="font-size:9.5px; padding:0 4px;">シミュレーション</span>
            バッジのアプリは、以下の nvsim ライブフレームストリームに対して実際の i32 イベントIDを発行します。
            <span class="badge rt-mesh-only" style="font-size:9.5px; padding:0 4px;">メッシュ専用</span>
            アプリは ESP32-S3 + WS トランスポートが必要です。
            <span class="badge rt-running" style="font-size:9.5px; padding:0 4px;">実行中</span>
            バッジは常に実行されている <code>nvsim</code> 自体を示します。
          `:d`
            Apps with the <span class="badge rt-simulated" style="font-size:9.5px; padding:0 4px;">simulated</span>
            runtime emit real i32 event IDs against nvsim's live frame stream below.
            Apps with <span class="badge rt-mesh-only" style="font-size:9.5px; padding:0 4px;">mesh-only</span>
            need an ESP32-S3 + WS transport (deferred to V2). The
            <span class="badge rt-running" style="font-size:9.5px; padding:0 4px;">running</span>
            badge marks <code>nvsim</code> itself, which is always running.
          `}
        </p>
        ${t.length===0?d`<div class="ev-empty">${e?d`イベントはまだありません。<i>シミュレーション</i> バッジ付きカードをトグルして <b>▶ Run</b> を押してください。`:d`No events yet. Toggle a card with the <i>simulated</i> badge and press <b>▶ Run</b>.`}</div>`:d`<div class="lines">${t.map(s=>{const i=new Date(s.ts),r=`${String(i.getSeconds()).padStart(2,"0")}.${String(i.getMilliseconds()).padStart(3,"0")}`;return d`
                <div class="ev-line">
                  <span class="ts">${r}</span>
                  <span class="id">${s.appId}</span>
                  <span class="body"><b style="color:var(--accent-2);">${s.eventName}</b><span style="color:var(--ink-3);"> · ${s.eventId}</span> ${s.detail?`· ${s.detail}`:""}</span>
                </div>
              `})}</div>`}
      </div>
    `}card(e){const t=_()==="ja",a=this.isActive(e.id),s=$e[e.category],i=t&&s.label_ja?s.label_ja:s.label,r=t&&e.name_ja?e.name_ja:e.name,n=t&&e.summary_ja?e.summary_ja:e.summary,l=e.runtime??"mesh-only",c=Ve.value[e.id]??0,m=t?{running:"実行中",simulated:"シミュレーション","mesh-only":"メッシュ専用"}:{running:"running",simulated:"simulated","mesh-only":"needs mesh"},P=t?{available:"利用可能",beta:"ベータ版",research:"研究・特殊"}:{available:"available",beta:"beta",research:"research"},C=t?{running:"このアプリは現在ブラウザ上で実際に動作しています。",simulated:"nvsimのライブ磁気フレームストリームに対して簡易版アルゴリズムを実行します。トグルをONにして▶ Runを押すとフィードにリアルタイムイベントが表示されます。","mesh-only":"このアルゴリズムはESP32-S3メッシュからのCSIサブキャリアデータを必要とします。トグル選択は保持され、接続時にWSトランスポート経由でプッシュされます。"}:{running:"This app is genuinely running in your browser right now.",simulated:"A pared-down version of this algorithm runs against nvsim's magnetic frame stream as a proxy for its native CSI input. Toggle on, then press ▶ Run to see real event IDs in the feed.","mesh-only":"This algorithm needs CSI subcarrier data from an ESP32-S3 mesh. The toggle persists; activation is pushed via WS transport (V2)."};return d`
      <div class="card ${a?"active":""}" data-app-id=${e.id}>
        <div class="card-h">
          <span class="swatch" style=${`background:${s.color}`}></span>
          <span class="name">${r}</span>
        </div>
        <div class="summary">${n}</div>
        <div class="meta">
          <span class="badge cat">${i}</span>
          <span class="badge status-${e.status}">${P[e.status]??e.status}</span>
          <span class="badge rt-${l}" title=${C[l]}>${m[l]}</span>
          ${e.budget?d`<span class="badge budget">budget ${e.budget}</span>`:""}
          ${e.adr?d`<span class="badge">${e.adr}</span>`:""}
          ${e.events?.length?d`<span class="badge">events ${e.events.join("·")}</span>`:""}
        </div>
        <div class="card-foot">
          <span class="events">${e.crate}</span>
          ${c>0?d`<span class="card-events-count">⚡ ${c} ev</span>`:""}
          <span class="toggle ${a?"on":""}" role="switch"
            aria-checked=${a}
            data-app-toggle=${e.id}
            @click=${()=>this.toggle(e)}></span>
        </div>
      </div>
    `}};Ue.styles=x`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      padding: 24px;
    }
    .head {
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .ttl {
      font-size: 22px; font-weight: 700; letter-spacing: -0.02em;
      color: var(--ink);
      flex: 1; min-width: 200px;
    }
    .ttl small {
      font-size: 12.5px; font-weight: 400;
      color: var(--ink-3); margin-left: 8px;
    }
    .search {
      width: 320px; max-width: 100%;
      padding: 8px 12px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 8px;
      font-family: var(--mono);
      font-size: 12.5px;
      color: var(--ink); outline: none;
    }
    .search:focus { border-color: var(--accent); }
    .filters {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 18px;
    }
    .chip {
      padding: 4px 10px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 11.5px; color: var(--ink-3);
      cursor: pointer;
      font-family: var(--mono);
      display: inline-flex; align-items: center; gap: 4px;
    }
    .chip:hover { color: var(--ink); border-color: var(--line-2); }
    .chip.on { background: var(--bg-3); border-color: var(--accent); color: var(--ink); }
    .chip .swatch {
      width: 7px; height: 7px; border-radius: 50%;
    }
    .chip .count { color: var(--ink-3); font-size: 10px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 12px;
    }
    .card {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 12px 14px;
      display: flex; flex-direction: column; gap: 6px;
      transition: border-color 0.15s, transform 0.15s;
      position: relative;
    }
    .card:hover { border-color: var(--line-2); transform: translateY(-1px); }
    .card.active {
      border-color: oklch(0.78 0.14 145 / 0.7);
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.78 0.14 145 / 0.04) 100%);
    }
    .card-h {
      display: flex; align-items: flex-start; gap: 8px;
      margin-bottom: 2px;
    }
    .card-h .name {
      font-size: 13.5px; font-weight: 600; color: var(--ink);
      flex: 1; line-height: 1.3;
    }
    .card-h .swatch {
      width: 10px; height: 10px; border-radius: 50%;
      flex-shrink: 0; margin-top: 4px;
    }
    .summary {
      font-size: 12px; color: var(--ink-2); line-height: 1.45;
      flex: 1;
    }
    .meta {
      display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px;
      font-family: var(--mono); font-size: 10px;
    }
    .badge {
      padding: 1px 6px; border-radius: 4px;
      background: var(--bg-3); color: var(--ink-3);
      border: 1px solid var(--line);
    }
    .badge.cat { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.3); }
    .badge.status-available { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.4); }
    .badge.status-beta { color: var(--warn); border-color: oklch(0.7 0.18 35 / 0.4); }
    .badge.status-research { color: var(--accent-3); border-color: oklch(0.72 0.18 330 / 0.4); }
    .badge.budget { color: var(--accent-2); border-color: oklch(0.78 0.12 195 / 0.3); }
    .badge.rt-running { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.5); background: oklch(0.78 0.14 145 / 0.08); }
    .badge.rt-simulated { color: var(--accent); border-color: oklch(0.78 0.14 70 / 0.5); background: oklch(0.78 0.14 70 / 0.08); }
    .badge.rt-mesh-only { color: var(--ink-3); border-color: var(--line); }
    .events-feed {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 14px;
      margin-bottom: 18px;
    }
    .events-feed h3 {
      margin: 0 0 8px;
      font-size: 13px; font-weight: 600;
      color: var(--ink);
    }
    .events-feed .lead {
      font-size: 12px; color: var(--ink-3);
      margin: 0 0 10px;
      line-height: 1.5;
    }
    .events-feed .lines {
      display: flex; flex-direction: column; gap: 4px;
      max-height: 160px; overflow-y: auto;
    }
    .ev-line {
      display: grid;
      grid-template-columns: 60px 90px 1fr;
      gap: 10px;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
    }
    .ev-line:hover { background: var(--bg-3); }
    .ev-line .ts { color: var(--ink-4); font-size: 10.5px; }
    .ev-line .id { color: var(--accent); font-size: 10.5px; }
    .ev-line .body { color: var(--ink); }
    .ev-empty {
      font-size: 12px; color: var(--ink-3);
      padding: 8px 0;
    }
    .card-events-count {
      font-size: 10.5px;
      color: var(--accent-4);
      font-family: var(--mono);
    }
    .card-foot {
      display: flex; align-items: center; gap: 8px;
      padding-top: 8px; margin-top: 4px;
      border-top: 1px solid var(--line);
      font-size: 11px; color: var(--ink-3);
    }
    .toggle {
      position: relative;
      width: 32px; height: 18px;
      background: var(--bg-3); border: 1px solid var(--line-2);
      border-radius: 999px; cursor: pointer;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    .toggle::after {
      content: ''; position: absolute;
      top: 1px; left: 1px;
      width: 12px; height: 12px;
      background: var(--ink-3); border-radius: 50%;
      transition: transform 0.15s, background 0.15s;
    }
    .toggle.on { background: var(--accent); border-color: var(--accent); }
    .toggle.on::after { background: #1a0f00; transform: translateX(14px); }
    .events {
      font-family: var(--mono); font-size: 10px; color: var(--ink-3);
      flex: 1;
    }
    .empty {
      padding: 40px;
      text-align: center; color: var(--ink-3);
      font-size: 13px;
    }
  `;At([h()],Ue.prototype,"renderTick",2);Ue=At([k("nv-app-store")],Ue);var Ca=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Pe=(e,t,a,s)=>{for(var i=s>1?void 0:s?Ma(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ca(t,a,i),i};let te=class extends w{constructor(){super(...arguments),this.open=!1,this.filter="",this.idx=0,this.onKey=e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"?(e.preventDefault(),this.openPal()):e.key==="Escape"&&this.open?this.closePal():this.open&&(e.key==="ArrowDown"?(this.idx=Math.min(this.cmds.length-1,this.idx+1),e.preventDefault()):e.key==="ArrowUp"?(this.idx=Math.max(0,this.idx-1),e.preventDefault()):e.key==="Enter"&&(this.runIdx(),e.preventDefault()))},this.onOpen=()=>this.openPal()}get cmds(){const t=typeof navigator<"u"&&/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl+",a=_()==="ja";return[{ico:"▶",label:o("palette.runPipeline","Run pipeline"),kbd:"Space",run:async()=>{await y()?.run(),v.value=!0,N(o("palette.pipelineRunning","Pipeline running"),"▶")}},{ico:"❚",label:o("palette.pausePipeline","Pause pipeline"),run:async()=>{await y()?.pause(),v.value=!1,N(o("palette.paused","Paused"),"❚❚")}},{ico:"+",label:o("palette.newScene","New scene…"),kbd:`${t}N`,run:()=>pe({title:a?"新規シーン構築":"New scene",body:`<p>${a?"新しい磁気環境シーンを構築します。パラメータを指定してパイプラインへ直接読み込ませます。":"Build a fresh magnetic scene. The dashboard generates the JSON and pushes it to the running pipeline."}</p>
          <label>${a?"シーン名":"Name"}</label>
          <input type="text" id="ns-name" value="custom-scene-${Date.now().toString(36)}" />
          <label>${a?"心拍プロキシ双極子モーメント (A·m²)":"Heart-proxy dipole moment (A·m²)"}</label>
          <input type="text" id="ns-moment" value="1.0e-6" />
          <label>${a?"心拍 → センサー間距離 (m)":"Distance heart → sensor (m)"}</label>
          <input type="text" id="ns-distance" value="0.5" />
          <label>${a?"鉄筋コイル（鋼鉄 χ=5000）を配置しますか？":"Add ferrous distractor at +x = 1 m?"}</label>
          <select id="ns-ferrous">
            <option value="0">${a?"いいえ":"No"}</option>
            <option value="1" selected>${a?"はい (鉄筋コイル, χ=5000)":"Yes (steel coil, χ=5000)"}</option>
          </select>
          <label>${a?"60 Hz 商用電源電流ループを配置しますか？":"Add 60 Hz mains-current loop?"}</label>
          <select id="ns-mains">
            <option value="0">${a?"いいえ":"No"}</option>
            <option value="1" selected>${a?"はい (2 A ループ, 半径5cm, +y = 1 m)":"Yes (2 A loop, 5 cm radius, +y = 1 m)"}</option>
          </select>`,buttons:[{label:a?"キャンセル":"Cancel",variant:"ghost"},{label:a?"作成":"Create",variant:"primary",onClick:async()=>{const s=document.querySelector("nv-app")?.shadowRoot?.querySelector("nv-modal")?.shadowRoot;if(!s)return;const i=(s.querySelector("#ns-name")?.value??"custom").trim(),r=parseFloat(s.querySelector("#ns-moment")?.value??"1e-6"),n=parseFloat(s.querySelector("#ns-distance")?.value??"0.5"),l=s.querySelector("#ns-ferrous")?.value==="1",c=s.querySelector("#ns-mains")?.value==="1",m={dipoles:[{position:[0,0,n],moment:[0,0,r]}],loops:c?[{centre:[0,1,0],normal:[0,1,0],radius:.05,current:2,n_segments:64}]:[],ferrous:l?[{position:[1,0,0],volume:1e-4,susceptibility:5e3}]:[],eddy:[],sensors:[[0,0,0]],ambient_field:[1e-6,0,0]};await y()?.loadScene(m),p("ok",`scene <span class="s">${i}</span> loaded · 1 dipole · ${c?"1 loop · ":""}${l?"1 ferrous · ":""}1 sensor`),N(a?`シーン "${i}" を読み込みました`:`Scene "${i}" loaded`,"+")}}]})},{ico:"📦",label:o("palette.exportProof","Export proof bundle…"),kbd:`${t}E`,run:async()=>{const s=y();if(s){p("dbg","building proof bundle…");try{const i=await s.exportProofBundle(),r=URL.createObjectURL(i),n=document.createElement("a");n.href=r,n.download=`nvsim-proof-${Date.now()}.json`,n.click(),URL.revokeObjectURL(r),p("ok",`proof bundle exported · ${i.size} bytes`),N(a?`証明バンドルを保存しました (${i.size} B)`:`Proof bundle saved (${i.size} B)`,"📦")}catch(i){p("err",`export failed: ${i.message}`)}}}},{ico:"⟳",label:o("palette.resetPipeline","Reset pipeline"),kbd:`${t}R`,run:()=>pe({title:a?"パイプラインをリセットしますか？":"Reset pipeline?",body:`<p>${a?"フレームストリームをクリアし、時間 <code>t</code> を0に戻します。":"Clears the frame stream and rewinds <code>t</code> to 0."}</p>`,buttons:[{label:a?"キャンセル":"Cancel",variant:"ghost"},{label:a?"リセット":"Reset",variant:"danger",onClick:async()=>{await y()?.reset(),p("warn","pipeline reset · t=0"),N(a?"パイプラインをリセットしました":"Pipeline reset","⟳")}}]})},{ico:"✓",label:o("palette.verifyWitness","Verify witness"),run:async()=>{const s=y();if(!s)return;A.value="pending";const i=V.value,r=new Uint8Array(32);for(let l=0;l<32;l++)r[l]=parseInt(i.slice(l*2,l*2+2),16);(await s.verifyWitness(r)).ok?(A.value="ok",L.value=i,N(a?"ウィトネス検証完了":"Witness verified","✓")):(A.value="fail",N(a?"ウィトネス不一致エラー":"Witness mismatch!","✗"))}},{ico:"☼",label:o("palette.toggleTheme","Toggle theme"),kbd:`${t}/`,run:()=>{T.value=T.value==="dark"?"light":"dark"}},{ico:"⚙",label:o("palette.openSettings","Open settings"),kbd:`${t},`,run:()=>window.dispatchEvent(new CustomEvent("open-settings"))},{ico:"?",label:o("palette.shortcuts","Keyboard shortcuts…"),run:()=>pe({title:a?"キーボードショートカット一覧":"Keyboard shortcuts",body:`<div style="display:grid;grid-template-columns:auto 1fr;gap:6px 16px;font-size:13px;">
          <div><code>Ctrl+K / ⌘K</code></div><div>${a?"コマンドパレット":"Command palette"}</div>
          <div><code>Space</code></div><div>${a?"再生 / 一時停止":"Play / pause"}</div>
          <div><code>Ctrl+R / ⌘R</code></div><div>${a?"パイプラインをリセット":"Reset"}</div>
          <div><code>Ctrl+, / ⌘,</code></div><div>${a?"環境設定":"Settings"}</div>
          <div><code>Ctrl+/ / ⌘/</code></div><div>${a?"テーマ切替（ダーク/ライト）":"Toggle theme"}</div>
          <div><code>\`</code></div><div>${a?"デバッグHUD表示":"Debug HUD"}</div>
          <div><code>1 · 2 · 3</code></div><div>${a?"インスペクタータブ切替":"Inspector tabs"}</div>
          <div><code>Esc</code></div><div>${a?"モーダル / パレットを閉じる":"Close modal/palette"}</div>
          <div><code>/</code></div><div>${a?"REPLプロンプトにフォーカス":"Focus REPL"}</div>
        </div>`,buttons:[{label:a?"閉じる":"Close",variant:"primary"}]})},{ico:"i",label:o("palette.about","About nvsim…"),run:()=>pe({title:a?"nvsim について":"About nvsim",body:`<p><b>nvsim</b> は、窒素-空孔（NV）ダイヤモンド磁気センシングのための確定性順方向シミュレータです。</p>
          <p>このダッシュボードでは、Web Worker内でWASMとしてnvsimを実行しています。同一の <code>(scene, config, seed)</code> からマシンを問わずバイト単位で完全一致するSHA-256ウィトネス（証明）を生成します。</p>
          <p>ライセンス: MIT OR Apache-2.0 · ADR-089, ADR-092。</p>`,buttons:[{label:a?"閉じる":"Close",variant:"primary"}]})}]}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("nv-palette",this.onOpen)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("nv-palette",this.onOpen)}openPal(){this.open=!0,this.setAttribute("open",""),this.filter="",this.idx=0,setTimeout(()=>this.inputEl?.focus(),0)}closePal(){this.open=!1,this.removeAttribute("open")}filtered(){if(!this.filter.trim())return this.cmds;const e=this.filter.toLowerCase();return this.cmds.filter(t=>t.label.toLowerCase().includes(e))}runIdx(){const t=this.filtered()[this.idx];t&&(t.run(),this.closePal())}render(){const e=this.filtered();return d`
      <div class="palette" data-id="palette">
        <div class="input">
          <input id="palette-input" type="text" placeholder=${o("palette.placeholder","Type a command…")}
            .value=${this.filter}
            @input=${t=>{this.filter=t.target.value,this.idx=0}} />
        </div>
        <div class="list">
          ${e.map((t,a)=>d`
            <div class="item ${a===this.idx?"active":""}" @click=${()=>{this.idx=a,this.runIdx()}}>
              <span class="ico">${t.ico}</span>
              <span class="lbl">${t.label}</span>
              ${t.kbd?d`<span class="kbd">${t.kbd}</span>`:""}
            </div>
          `)}
        </div>
      </div>
    `}};te.styles=x`
    :host {
      position: fixed; inset: 0; z-index: 220;
      background: rgba(0,0,0,0.5);
      opacity: 0; pointer-events: none;
      transition: opacity 0.15s;
      display: flex; justify-content: center; padding-top: 12vh;
      backdrop-filter: blur(4px);
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .palette {
      width: min(560px, 92vw);
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      overflow: hidden;
      display: flex; flex-direction: column;
      max-height: 60vh;
    }
    .input {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
    }
    input {
      width: 100%;
      background: transparent; border: none; outline: none;
      color: var(--ink); font-size: 14px;
      font-family: inherit;
    }
    .list { flex: 1; overflow-y: auto; padding: 4px; }
    .item {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12.5px;
    }
    .item.active { background: var(--bg-3); }
    .item .ico { width: 20px; text-align: center; color: var(--accent); }
    .item .lbl { flex: 1; }
    .item .kbd {
      font-family: var(--mono); font-size: 10.5px;
      color: var(--ink-3);
      padding: 1px 5px; background: var(--bg-3); border-radius: 4px;
    }
  `;Pe([h()],te.prototype,"open",2);Pe([h()],te.prototype,"filter",2);Pe([h()],te.prototype,"idx",2);Pe([xt("#palette-input")],te.prototype,"inputEl",2);te=Pe([k("nv-palette")],te);var Ra=Object.defineProperty,za=Object.getOwnPropertyDescriptor,dt=(e,t,a,s)=>{for(var i=s>1?void 0:s?za(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ra(t,a,i),i};let Re=class extends w{constructor(){super(...arguments),this.open=!1,this.renderFps=0,this.lastTs=performance.now(),this.frameCount=0,this.rafId=0,this.onKey=e=>{e.key==="`"&&!e.target.matches("input, textarea")&&(this.open=!this.open,this.toggleAttribute("open",this.open))},this.tick=()=>{this.rafId=requestAnimationFrame(this.tick);const e=performance.now();this.frameCount++,e-this.lastTs>=500&&(this.renderFps=this.frameCount*1e3/(e-this.lastTs),this.frameCount=0,this.lastTs=e,this.requestUpdate())}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),b(()=>{M.value,it.value,Z.value,Y.value,Ut.value,this.requestUpdate()}),this.tick()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),cancelAnimationFrame(this.rafId)}render(){return d`
      <div class="h"><span>nvsim · debug</span><span class="x" @click=${()=>{this.open=!1,this.removeAttribute("open")}}>✕</span></div>
      <div class="row"><span class="k">render fps</span><span class="v">${this.renderFps.toFixed(1)}</span></div>
      <div class="row"><span class="k">sim fps</span><span class="v">${M.value>0?Math.round(M.value):"—"}</span></div>
      <div class="row"><span class="k">frames</span><span class="v">${it.value.toString()}</span></div>
      <div class="row"><span class="k">|B|</span><span class="v">${(Z.value*1e9).toFixed(3)} nT</span></div>
      <div class="row"><span class="k">SNR</span><span class="v">${Y.value>0?Y.value.toFixed(1):"—"}</span></div>
      <div class="row"><span class="k">DOM</span><span class="v">${document.querySelectorAll("*").length}</span></div>
    `}};Re.styles=x`
    :host {
      position: fixed; bottom: 8px; right: 8px;
      width: 220px;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line-2);
      border-radius: 8px;
      padding: 8px 10px;
      font-family: var(--mono); font-size: 11px;
      color: var(--ink-2);
      z-index: 99;
      display: none;
      box-shadow: var(--shadow);
    }
    :host([open]) { display: block; }
    .h {
      display: flex; justify-content: space-between;
      font-weight: 600; color: var(--ink);
      margin-bottom: 6px; padding-bottom: 4px;
      border-bottom: 1px solid var(--line);
    }
    .x { cursor: pointer; color: var(--ink-3); }
    .row {
      display: flex; justify-content: space-between;
      padding: 1px 0;
    }
    .k { color: var(--ink-3); }
    .v { color: var(--ink); }
  `;dt([h()],Re.prototype,"open",2);dt([h()],Re.prototype,"renderFps",2);Re=dt([k("nv-debug-hud")],Re);var Ea=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,Ct=(e,t,a,s)=>{for(var i=s>1?void 0:s?Pa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ea(t,a,i),i};let Ge=class extends w{constructor(){super(...arguments),this.open=!1}connectedCallback(){super.connectedCallback(),this._unsubI18n=$.onLocaleChange(()=>this.requestUpdate()),b(()=>{T.value,I.value,H.value,ke.value,z.value,B.value,this.requestUpdate()}),window.addEventListener("open-settings",()=>{this.open=!0,this.setAttribute("open","")})}disconnectedCallback(){super.disconnectedCallback(),this._unsubI18n&&this._unsubI18n()}close(){this.open=!1,this.removeAttribute("open")}async resetPrefs(){if(confirm("Reset all preferences and IndexedDB state? Reloads the page.")){try{const e=await indexedDB.databases?.();if(e)for(const t of e)t.name&&indexedDB.deleteDatabase(t.name)}catch{}location.reload()}}render(){const e=$.getLocale()==="ja";return d`
      <div class="scrim" @click=${()=>this.close()}></div>
      <div class="panel" role="dialog" aria-modal="true" aria-label="${o("settings.title","Settings")}">
      <div class="h">
        <div class="ttl">${o("settings.title","Settings")}</div>
        <button class="close" @click=${()=>this.close()}>×</button>
      </div>
      <div class="body">
        <div class="group">
          <h4>${o("settings.appearance","Appearance")}</h4>
          <div class="row">
            <div>
              <div class="lbl">${o("ui.misc.language","Language")}</div>
              <div class="desc">${e?"UI表示言語の選択 (日本語 / English)":"Select UI language (日本語 / English)"}</div>
            </div>
            <div class="seg">
              <button class=${$.getLocale()==="ja"?"on":""}
                @click=${()=>st("ja")}>JA (日本語)</button>
              <button class=${$.getLocale()==="en"?"on":""}
                @click=${()=>st("en")}>EN (English)</button>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.theme","Theme")}</div>
              <div class="desc">${e?"標準はダークモードです。ライトモードは明るい環境での作業に適しています。":"Dark is the default; light has higher contrast for daylight work."}</div>
            </div>
            <div class="seg">
              <button class=${T.value==="dark"?"on":""}
                @click=${()=>T.value="dark"}>dark</button>
              <button class=${T.value==="light"?"on":""}
                @click=${()=>T.value="light"}>light</button>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.density","Density")}</div>
              <div class="desc">${e?"パネルの余白とフォントサイズ（15 / 14 / 13 px）を調整します。":"Affects panel padding and font scale (15 / 14 / 13 px). Choose what your eyes prefer."}</div>
            </div>
            <div class="seg">
              <button class=${I.value==="comfy"?"on":""}
                @click=${()=>I.value="comfy"}>comfy</button>
              <button class=${I.value==="default"?"on":""}
                @click=${()=>I.value="default"}>default</button>
              <button class=${I.value==="compact"?"on":""}
                @click=${()=>I.value="compact"}>compact</button>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.reduceMotion","Reduce motion")}</div>
              <div class="desc">${e?"ダイヤモンドの回転や磁力線アニメーション、グラフ描画のアニメーションを停止します。":"Stops the rotating diamond, animated field lines, and chart easing. Auto-on if your system has the prefers-reduced-motion preference set."}</div>
            </div>
            <span class="toggle ${H.value?"on":""}"
              role="switch" aria-checked=${H.value}
              @click=${()=>H.value=!H.value}></span>
          </div>
        </div>

        <div class="group">
          <h4>${o("settings.pipeline","Pipeline")}</h4>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.autoRerun","Auto-rerun on edit")}</div>
              <div class="desc">${e?"パラメータ変更やシーン読込時に手動再起動なしでWorkerへ自動反映します。":"When you change a Tunables slider or load a new scene, push the change to the worker without a manual restart."}</div>
            </div>
            <span class="toggle ${ke.value?"on":""}"
              role="switch" aria-checked=${ke.value}
              @click=${()=>ke.value=!ke.value}></span>
          </div>
        </div>

        <div class="group">
          <h4>${o("settings.transport","Transport")}</h4>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.mode","Mode")}</div>
              <div class="desc">${e?"WASMはブラウザ内でローカル実行（サーバー不要）。WSはnvsim-serverへ接続します。":"WASM runs nvsim in your browser (default, no server). WS connects to a host-supplied nvsim-server (REST + binary WebSocket); see ADR-092 §6.2."}</div>
            </div>
            <div class="seg">
              <button class=${z.value==="wasm"?"on":""}
                @click=${()=>z.value="wasm"}>WASM</button>
              <button class=${z.value==="ws"?"on":""}
                @click=${()=>z.value="ws"}>WS</button>
            </div>
          </div>
          ${z.value==="ws"?d`
            <div class="row">
              <div>
                <div class="lbl">WS URL</div>
                <div class="desc">${e?"nvsim-serverの接続先URL（デフォルト 127.0.0.1:7878）。":"Where your nvsim-server is listening. The server defaults to 127.0.0.1:7878."}</div>
              </div>
              <input type="text" placeholder="ws://localhost:7878" .value=${B.value}
                @input=${t=>B.value=t.target.value} />
            </div>`:""}
        </div>

        <div class="group">
          <h4>${e?"ヘルプ & リソース":"Help"}</h4>
          <div class="row">
            <div>
              <div class="lbl">${e?"ヘルプセンターを開く":"Open help center"}</div>
              <div class="desc">${e?d`クイックスタート、用語集、FAQ、ショートカット。<kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> キーでいつでも表示。`:d`Quickstart, glossary, FAQ, and shortcuts. Press <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> any time.`}</div>
            </div>
            <button class="seg"
              @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-help"))}}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid var(--line);border-radius:6px;color:var(--ink);">
              ${e?"開く":"Open"}
            </button>
          </div>
          <div class="row">
            <div>
              <div class="lbl">${e?"ウェルカムツアーを再開":"Replay welcome tour"}</div>
              <div class="desc">${e?"初回ガイドツアーを再表示します。":"Re-show the 6-step first-run walkthrough."}</div>
            </div>
            <button class="seg"
              @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-tour"))}}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid var(--line);border-radius:6px;color:var(--ink);">
              ${e?"再再生":"Replay"}
            </button>
          </div>
          <div class="row">
            <div>
              <div class="lbl">${o("settings.resetPrefs","Reset all preferences")}</div>
              <div class="desc">${e?"テーマ、密度、モーション、ドラッグ位置、履歴、初回ツアー設定をすべて初期化します。":"Wipe theme, density, motion, scene drag positions, REPL history, and the onboarding-seen flag."}</div>
            </div>
            <button class="seg"
              @click=${()=>this.resetPrefs()}
              style="padding:6px 12px;cursor:pointer;background:var(--bg-3);border:1px solid oklch(0.65 0.22 25 / 0.4);border-radius:6px;color:var(--bad);">
              ${e?"リセット":"Reset"}
            </button>
          </div>
        </div>

        <div class="group">
          <h4>${e?"概要":"About"}</h4>
          <div class="row" style="border-bottom:0;">
            <div>
              <div class="lbl">nvsim · v0.3.0</div>
              <div class="desc">${e?"オープンソース NVダイヤモンド磁気シミュレータ。Apache-2.0 OR MIT。":"Open-source NV-diamond simulator. Apache-2.0 OR MIT."}<br>
                <a style="color:var(--accent-2); text-decoration:underline dotted; cursor:pointer;"
                  @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-show-help",{detail:{section:"about"}}))}}>
                  ${e?"詳細情報 →":"More info →"}
                </a></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}};Ge.styles=x`
    /* The host covers the viewport without transforming itself. Only the
     * inner .panel is transformed; otherwise the host's transform would
     * create a containing block for the fixed-position scrim, clipping
     * it to the panel's 420 px width and breaking outside-to-dismiss. */
    :host {
      position: fixed; inset: 0;
      z-index: 51;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    }
    :host([open]) { pointer-events: auto; opacity: 1; }
    .scrim {
      position: absolute; inset: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
    }
    .panel {
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 420px; max-width: 100vw;
      background: var(--bg-1);
      border-left: 1px solid var(--line);
      transform: translateX(100%);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex; flex-direction: column;
      box-shadow: -20px 0 60px -20px rgba(0, 0, 0, 0.5);
    }
    :host([open]) .panel { transform: translateX(0); }
    .h {
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between;
    }
    .h .ttl { font-size: 14px; font-weight: 600; }
    .body { flex: 1; overflow-y: auto; padding: 16px; }
    .group { margin-bottom: 22px; }
    .group h4 {
      margin: 0 0 10px;
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--ink-3);
    }
    .row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--line);
    }
    .row:last-child { border-bottom: 0; }
    .row .lbl { font-size: 13px; }
    .row .desc { font-size: 11.5px; color: var(--ink-3); margin-top: 2px; }
    .row > div:first-child { flex: 1; padding-right: 12px; }
    .seg {
      display: inline-flex;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      padding: 2px;
    }
    .seg button {
      padding: 4px 10px;
      background: transparent; border: none;
      border-radius: 6px;
      font-size: 11.5px; color: var(--ink-3);
      font-family: var(--mono);
      cursor: pointer;
    }
    .seg button.on { background: var(--bg-1); color: var(--ink); }
    .toggle {
      position: relative;
      width: 36px; height: 20px;
      background: var(--bg-3);
      border: 1px solid var(--line-2);
      border-radius: 999px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .toggle::after {
      content: ''; position: absolute;
      top: 2px; left: 2px;
      width: 14px; height: 14px;
      background: var(--ink-3);
      border-radius: 50%;
      transition: transform 0.15s, background 0.15s;
    }
    .toggle.on { background: var(--accent); border-color: var(--accent); }
    .toggle.on::after { background: #1a0f00; transform: translateX(16px); }
    .close {
      width: 28px; height: 28px;
      background: transparent; border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
    }
    input[type="text"] {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 6px 10px;
      color: var(--ink); font-family: var(--mono); font-size: 12px;
      outline: none;
    }
  `;Ct([h()],Ge.prototype,"open",2);Ge=Ct([k("nv-settings-drawer")],Ge);var Da=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,ct=(e,t,a,s)=>{for(var i=s>1?void 0:s?ja(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Da(t,a,i),i};const Ia=[{icon:"👋",title:"Welcome to nvsim",body:`<p style="font-size:14px; line-height:1.6;">
        <b>nvsim</b> is an open-source, deterministic forward simulator for
        <b>nitrogen-vacancy (NV) diamond magnetometry</b>. Compiled from Rust to
        WebAssembly (WASM), it runs right here in your browser.</p>
      <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">
        This ~60-second guided tour walks you through the four core panels, the app store,
        the Ghost Murmur research view, and nvsim's defining feature: determinism witness proofs.</p>
      <p style="font-size:11.5px; color:var(--ink-3); line-height:1.5; margin-top:14px;">
        You can hit <kbd>Esc</kbd> any time to skip. Replay from <b>Settings → Help</b>.</p>`,cta:{label:"Start tour →"}},{icon:"🌐",title:"3D Scene Canvas",body:`<p>The central panel is the <b>magnetic scene</b> — four magnetic sources surrounding an NV-diamond sensor at the origin.</p>
      <p>Click-drag the four spheres (<b>rebar distractor</b>, <b>heart proxy dipole</b>, <b>60 Hz mains loop</b>, <b>ferrous door eddy loop</b>) to move them in 3D. Field lines update in real time.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Top-left toolbar: zoom, fit, toggle layers. Bottom-right: playback controls. Dragged positions persist in IndexedDB.</p>`,hint:"Try dragging the heart_proxy sphere after this tour."},{icon:"▶",title:"Pipeline Execution",body:`<p>Hit <b>▶ Run</b> in the topbar (or press <kbd>Space</kbd>) to start the live frame stream. The simulator runs ~1.8 kHz on x86_64 WASM.</p>
      <p>The topbar FPS counter tracks real-time throughput. The right inspector's B-vector trace and frame sparkline update live.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        <kbd>Space</kbd> toggles run/pause. Reset (<kbd>Ctrl+R / ⌘R</kbd>) rewinds time <code>t</code> to 0 while keeping the seed.</p>`},{icon:"🔍",title:"Inspector — 3 Tabs, 2 Depths",body:`<p>The right rail holds the live inspector: <b>Signal</b> (B-vector trace + sparkline), <b>Frame</b> (decoded MagFrame fields + 60-byte hex dump), and <b>Witness</b> (SHA-256 determinism gate).</p>
      <p>Click the <b>magnifier icon</b> on the left rail for full-width inspector mode; click the <b>shield icon</b> for full-width witness mode.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Keys <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> switch inspector tabs from anywhere.</p>`},{icon:"✓",title:"Witness Proofs — Determinism Gate",body:`<p>nvsim's core commitment: same <code>(scene, config, seed)</code> → byte-identical SHA-256 hash across machines and OSes.</p>
      <p>Open the <b>Witness</b> tab and hit <b>Verify witness</b>. The dashboard re-runs the canonical reference scene (<code>seed=42, N=256</code>) and asserts the hash against <code style="font-size:10.5px;">cc8de9b01b0ff5bd…</code> pinned at build time.</p>
      <p>A green check proves all physical constants (γ_e, D_GS, μ₀, T₂*), PRNG streams, and frame layouts match perfectly.</p>`},{icon:"🎚",title:"Tunables — Live Parameter Adjustment",body:`<p>The left sidebar's <b>Tunables</b> panel exposes four live sliders:</p>
      <ul style="margin:0 0 12px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.6;">
        <li><b>Digitiser f_s</b> (1–100 kHz) — Sampling rate</li>
        <li><b>Lock-in f_mod</b> (0.1–5 kHz) — Microwave modulation frequency</li>
        <li><b>Integration dt</b> (0.1–10 ms) — Integration time per sample</li>
        <li><b>Shot noise</b> (on/off) — Quantum noise floor toggle</li>
      </ul>
      <p>Edits debounce 300 ms then rebuild the WASM pipeline automatically. Watch the noise floor and B-vector variance shift in real time.</p>`},{icon:"👻",title:"Ghost Murmur — Research View",body:`<p>Click the ghost icon on the left rail to open the <b>Ghost Murmur</b> view — an audit of reported NV-diamond heartbeat detection claims against open physics literature.</p>
      <p>Includes a live <b>"Try it yourself" sandbox</b>: place a heart dipole at any distance and run the real Rust pipeline to see if it would actually detect.</p>`},{icon:"🛍",title:"App Store — 65 Edge Modules",body:`<p>Click the grid icon to open the <b>App Store</b> — RuView's catalog of hot-loadable WASM edge modules across 9 categories (medical, security, building, retail, industrial, signal, learning, autonomy, specialized).</p>
      <p>Each card lists ID, category, status, compute budget, and ADR references. Toggles activate apps for this session.</p>`},{icon:"⌨",title:"Console + REPL Command Line",body:`<p>The bottom panel features a 5-filter log (<b>All / Info / Warn / Error / Debug</b>) and REPL command line.</p>
      <p>Try REPL commands: <code>help</code>, <code>scene.list</code>, <code>sensor.config</code>, <code>run</code>, <code>pause</code>, <code>seed [hex]</code>, <code>proof.verify</code>, <code>status</code>, <code>clear</code>.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Press <kbd>/</kbd> anywhere to focus REPL; press <kbd>Ctrl+K / ⌘K</kbd> for the command palette.</p>`},{icon:"🚀",title:"You are All Set!",body:`<p style="font-size:14px;">That completes the tour. Quick key reference:</p>
      <ul style="margin:0 0 14px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.7;">
        <li>Press <kbd>?</kbd> any time to open the help center (Quickstart / Glossary / FAQ / Shortcuts / About).</li>
        <li>Press <kbd>Ctrl+K / ⌘K</kbd> for the command palette.</li>
        <li>Press <kbd>&#96;</kbd> to toggle the debug HUD.</li>
        <li>Settings (<kbd>Ctrl+, / ⌘,</kbd>) lets you switch theme, density, motion, transport, and replay this tour.</li>
      </ul>
      <p style="font-size:12.5px; color:var(--ink-3); line-height:1.55;">
        Source: <code>github.com/ruvnet/RuView</code> · Apache-2.0 OR MIT · ADRs 089/090/091/092/093.</p>`,cta:{label:"Get started →"}}],Na=[{icon:"👋",title:"nvsim へようこそ",body:`<p style="font-size:14px; line-height:1.6;">
        <b>nvsim</b> は、<b>窒素-空孔（NV）ダイヤモンド磁気センシング</b>のためのオープンソース・確定性順方向シミュレータです。RustクレートからWebAssembly（WASM）へコンパイルされ、現在ブラウザ上で高速動作しています。</p>
      <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">
        この約60秒のガイダンスツアーでは、4つの主要パネル、アプリストア、Ghost Murmur研究ビュー、そしてnvsimの特徴である確定性証明（Witness）の仕組みを解説します。</p>
      <p style="font-size:11.5px; color:var(--ink-3); line-height:1.5; margin-top:14px;">
        いつでも <kbd>Esc</kbd> キーでスキップ可能です。ツアーは <b>設定 → ヘルプ</b> からいつでも再再生できます。</p>`,cta:{label:"ツアーを開始する →"}},{icon:"🌐",title:"3Dシーンキャンバス",body:`<p>中央のメインパネルには<b>磁気空間シーン</b>が表示されています。4つの磁気源と中心のNVダイヤモンドセンサーで構成されています。</p>
      <p>4つの球体（<b>鉄筋コイル</b>、<b>心拍プロキシ双極子</b>、<b>60Hz商用電源</b>、<b>スチール扉渦電流</b>）はマウスで直接ドラッグ移動できます。電波・磁場ラインがリアルタイムで各磁気源とセンサーを接続します。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        左上ツールバー: 拡大/縮小、フィット、レイヤー表示切替。右下: シミュレーション操作（ステップ/再生/速度切り替え）。ドラッグ位置は次回起動時も保存されます。</p>`,hint:"ツアー終了後、心拍プロキシ（heart_proxy）をドラッグしてみてください。"},{icon:"▶",title:"パイプラインの実行",body:`<p>トップバーの <b>▶ 実行</b> ボタンを押すか、<kbd>Space</kbd> キーを押すと、リアルタイムフレームストリームが開始されます。x86_64 WASM上で約1.8 kHzの超高速で実行されます。</p>
      <p>トップバーのFPS表示がリアルタイムスループットを計測します。右側インスペクターのBベクトル波形およびフレームストリームのスパークラインが即座に更新されます。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        <kbd>Space</kbd> キーでいつでも実行/一時停止を切り替えられます。リセット (<kbd>Ctrl+R / ⌘R</kbd>) はシード値を維持したまま時間 <code>t</code> を0に戻します。</p>`},{icon:"🔍",title:"インスペクター — 3つのタブと深度",body:`<p>右側レールにはライブインスペクターが表示されます: <b>シグナル (Signal)</b>（Bベクトル波形 + スパークライン）、<b>フレーム (Frame)</b>（デコード済みMagFrame領域 + 60バイトヘックスダンプ）、<b>ウィトネス (Witness)</b>（SHA-256確定性検証ゲート）。</p>
      <p>左側レールの<b>虫眼鏡アイコン</b>をクリックすると、インスペクターがメインエリアに拡大表示されます。<b>シールドアイコン</b>をクリックするとWitnessに特化した拡大表示が行われます。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        数字キー <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> でどこからでも3つのインスペクタータブを瞬時に切り替えられます。</p>`},{icon:"✓",title:"Witness（確定性証明）— nvsimの独自性",body:`<p>nvsimの最も重要な特徴: 同一の <code>(scene, config, seed)</code> ➔ 実行環境やマシンを問わずバイト単位で完全一致するSHA-256ハッシュを生成します。</p>
      <p><b>Witness</b> タブを開き、<b>Verify witness（ウィトネス検証）</b> を押してください。標準参照シーン（<code>seed=42, N=256</code>）のハッシュを再計算し、コンパイル時に固定されたハッシュ値（<code style="font-size:10.5px;">cc8de9b01b0ff5bd…</code>）と完全一致することを証明します。</p>
      <p>緑のチェックマークが表示されれば、物理定数（γ_e, D_GS, μ₀, T₂*）、PRNGストリーム、フレーム構造がすべて完全一致していることが担保されます。</p>`},{icon:"🎚",title:"チューナブルパラメータ — ライブ調整",body:`<p>左サイドバーの <b>Tunables（パラメータ設定）</b> パネルには4つのスライダーがあります:</p>
      <ul style="margin:0 0 12px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.6;">
        <li><b>サンプリングレート</b> (1–100 kHz) — デジタイザのフレームレート</li>
        <li><b>ロックイン f_mod</b> (0.1–5 kHz) — マイクロ波変調周波数</li>
        <li><b>積分時間 t</b> (0.1–10 ms) — サンプルごとの積分時間</li>
        <li><b>ショットノイズ</b> (オン/オフ) — 量子ノイズの切り替え</li>
      </ul>
      <p>スライダーを変更すると300msデバウンスののちWASMパイプラインが自動再構築されます。シグナル波形上のノイズフロアやBベクトルの広がり方の変化を確認できます。</p>`},{icon:"👻",title:"Ghost Murmur — 研究検証ビュー",body:`<p>左レールのゴーストアイコンをクリックすると、公開論文に基づく心拍検出プログラム（Ghost Murmur）の物理的検証ビューが開きます。</p>
      <p>心拍双極子による磁場が現実の検出限界（ショット雑音限界やADC量子化床）を超えるかを検証し、実証実験と理論モデルの技術差を明示します。</p>
      <p><b>「自分で試す」サンドボックス</b>が含まれており、心拍双極子をセンサーから任意の距離に配置して実行することで、実際のnvsimパイプラインが信号をどこまで復元できるかを検証できます。</p>`},{icon:"🛍",title:"App Store — 65種のエッジモジュール",body:`<p>グリッドアイコンをクリックすると、<b>App Store</b> が開きます。RuViewが提供するホットロード可能なWASMエッジモジュールがカテゴリ別（医療、防犯・警備、スマートビル、店舗、産業、信号処理、学習、自律走行、特殊）に整理されています。</p>
      <p>各カードにはID、カテゴリ、ステータス、計算バジェット、ADR参照番号が記載されています。トグルスイッチでセッション内での有効化を切り替えられます。</p>`},{icon:"⌨",title:"コンソール + REPLコマンドライン",body:`<p>下部パネルには、5つのフィルタタブ（<b>すべて / 情報 / 警告 / エラー / デバッグ</b>）付きのログとREPLプロンプトがあります。</p>
      <p>REPLコマンド例: <code>help</code>, <code>scene.list</code>, <code>sensor.config</code>, <code>run</code>, <code>pause</code>, <code>seed [hex]</code>, <code>proof.verify</code>, <code>status</code>, <code>clear</code> など。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        どこからでも <kbd>/</kbd> キーを押すとREPLプロンプトにフォーカスします。<kbd>Ctrl+K / ⌘K</kbd> でコマンドパレットが開きます。</p>`},{icon:"🚀",title:"準備が完了しました",body:`<p style="font-size:14px;">ツアーは以上です。いくつかの便利なショートカット:</p>
      <ul style="margin:0 0 14px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.7;">
        <li><kbd>?</kbd> キーでいつでもヘルプセンターを開けます（クイックスタート / 用語集 / FAQ / ショートカット）。</li>
        <li><kbd>Ctrl+K / ⌘K</kbd> でコマンドパレットを開きます。</li>
        <li><kbd>&#96;</kbd> キーでデバッグHUDをトグル表示できます。</li>
        <li>設定 (<kbd>Ctrl+, / ⌘,</kbd>) でテーマ、表示密度、ツアーの再再生が可能です。</li>
      </ul>
      <p style="font-size:12.5px; color:var(--ink-3); line-height:1.55;">
        リポジトリ: <code>github.com/ruvnet/RuView</code> · Apache-2.0 OR MIT</p>`,cta:{label:"ダッシュボードを開始する →"}}];function gt(){return _()==="ja"?Na:Ia}let ze=class extends w{constructor(){super(...arguments),this.open=!1,this.step=0,this.show=()=>{this.step=0,this.open=!0,this.setAttribute("open","")}}async connectedCallback(){super.connectedCallback(),window.addEventListener("nv-show-tour",this.show),await W("onboarding-seen")||(this.open=!0,this.setAttribute("open",""))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-show-tour",this.show)}async dismiss(){this.open=!1,this.removeAttribute("open"),await O("onboarding-seen",!0)}next(){const e=gt();e[this.step].cta?.run?.(),this.step<e.length-1?this.step++:this.dismiss()}prev(){this.step>0&&this.step--}render(){const e=gt(),t=e[this.step],a=this.step===e.length-1,s=_()==="ja";return d`
      <div class="card" role="dialog" aria-modal="true" aria-label=${s?"ウェルカムツアー":"Welcome tour"}>
        <div class="h">
          <div class="icon" aria-hidden="true">${t.icon}</div>
          <div class="title-wrap">
            <h2>${t.title}</h2>
            <div class="step-label">${s?`ステップ ${this.step+1} / ${e.length}`:`Step ${this.step+1} of ${e.length}`}</div>
          </div>
          <button class="skip" @click=${()=>this.dismiss()} aria-label=${s?"ツアーをスキップ":"Skip tour"} title=${s?"ツアーをスキップ":"Skip tour"}>×</button>
        </div>
        <div class="body">
          <div .innerHTML=${t.body}></div>
          ${t.hint?d`<div class="hint">${t.hint}</div>`:""}
        </div>
        <div class="footer">
          <div class="progress">
            <div class="dots">
              ${e.map((i,r)=>d`
                <div class="dot ${r===this.step?"active":r<this.step?"done":""}"></div>
              `)}
            </div>
            <div class="progress-label">${this.step+1} / ${e.length}</div>
          </div>
          ${this.step>0?d`<button class="ghost" @click=${()=>this.prev()}>${o("onboarding.back","← 戻る")}</button>`:d`<button class="ghost" @click=${()=>this.dismiss()}>${o("onboarding.skip","スキップ")}</button>`}
          <button class="primary" @click=${()=>this.next()}>
            ${t.cta?.label??(a?o("onboarding.done","完了"):o("onboarding.next","次へ →"))}
          </button>
        </div>
      </div>
    `}};ze.styles=x`
    :host {
      position: fixed; inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(4px);
      z-index: 240;
      display: grid; place-items: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.18s;
    }
    :host([open]) { opacity: 1; pointer-events: auto; }
    .card {
      background: var(--bg-1);
      border: 1px solid var(--line-2);
      border-radius: var(--radius);
      box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7);
      width: min(640px, 94vw);
      max-height: 86vh;
      display: flex; flex-direction: column;
      transform: translateY(12px) scale(0.98);
      transition: transform 0.22s cubic-bezier(0.2,0.7,0.3,1);
      overflow: hidden;
    }
    :host([open]) .card { transform: translateY(0) scale(1); }
    .h {
      padding: 22px 26px 12px;
      display: flex; align-items: flex-start; gap: 14px;
    }
    .h .icon {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, oklch(0.78 0.14 70) 0%, oklch(0.55 0.16 30) 100%);
      display: grid; place-items: center;
      font-size: 22px;
      flex-shrink: 0;
      box-shadow: 0 4px 12px -2px oklch(0.55 0.16 30 / 0.35);
    }
    .h .title-wrap { flex: 1; min-width: 0; }
    .h h2 {
      margin: 0;
      font-size: 18px;
      letter-spacing: -0.01em;
      color: var(--ink);
    }
    .h .step-label {
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--ink-3);
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .h .skip {
      width: 28px; height: 28px;
      background: transparent;
      border: 1px solid var(--line);
      border-radius: 6px;
      color: var(--ink-2);
      cursor: pointer;
      flex-shrink: 0;
    }
    .h .skip:hover { color: var(--ink); border-color: var(--line-2); }
    .body {
      padding: 0 26px 16px;
      font-size: 13px;
      color: var(--ink-2);
      line-height: 1.6;
      overflow-y: auto;
      flex: 1;
    }
    .body p { margin: 0 0 12px; }
    .body p:last-child { margin-bottom: 0; }
    .body code, .body kbd {
      font-family: var(--mono);
      font-size: 11.5px;
      padding: 1px 5px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
    }
    .body code { color: var(--accent); }
    .body kbd { color: var(--ink); }
    .hint {
      margin: 14px 0 0;
      padding: 10px 12px;
      background: oklch(0.78 0.12 195 / 0.06);
      border: 1px solid oklch(0.78 0.12 195 / 0.25);
      border-radius: 8px;
      font-size: 12px;
      color: var(--accent-2);
      display: flex; gap: 8px; align-items: flex-start;
    }
    .hint::before {
      content: '💡';
      flex-shrink: 0;
    }
    .footer {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 22px;
      border-top: 1px solid var(--line);
      background: var(--bg-1);
    }
    .progress { flex: 1; }
    .dots { display: flex; gap: 5px; margin-bottom: 4px; }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--bg-3);
      border: 1px solid var(--line-2);
      transition: background 0.15s, border-color 0.15s, transform 0.15s;
    }
    .dot.active {
      background: var(--accent);
      border-color: var(--accent);
      transform: scale(1.2);
    }
    .dot.done {
      background: var(--accent-4);
      border-color: var(--accent-4);
    }
    .progress-label {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--ink-3);
    }
    button.primary, button.ghost {
      padding: 9px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid var(--line);
      background: var(--bg-2);
      color: var(--ink);
    }
    button.ghost:hover { border-color: var(--line-2); }
    button.primary {
      background: var(--accent);
      border-color: var(--accent);
      color: #1a0f00;
    }
    button.primary:hover { filter: brightness(1.08); }
  `;ct([h()],ze.prototype,"open",2);ct([h()],ze.prototype,"step",2);ze=ct([k("nv-onboarding")],ze);var La=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,fe=(e,t,a,s)=>{for(var i=s>1?void 0:s?Ha(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&La(t,a,i),i};const Fa=[{id:"nvBest",label:"NV-ensemble (best lab)",floorT:1e-12,color:"oklch(0.78 0.14 70)"},{id:"nvCots",label:"NV-DNV-B1 (COTS)",floorT:3e-10,color:"oklch(0.72 0.18 50)"},{id:"squid",label:"SQUID (shielded room)",floorT:1e-15,color:"oklch(0.78 0.12 195)"},{id:"mmw",label:"60 GHz mmWave (μ-Doppler)",floorT:0,color:"oklch(0.78 0.14 145)"},{id:"csi",label:"WiFi CSI (presence)",floorT:0,color:"oklch(0.72 0.18 330)"}];let K=class extends w{constructor(){super(...arguments),this.distanceM=.1,this.momentLog10=-8.3,this.result=null,this.running=!1,this.err=null}predictedDipoleFieldT(e,t){return 4*Math.PI*1e-7*t/(4*Math.PI*Math.pow(Math.max(e,1e-6),3))}async runDemo(){const e=y();if(!e){this.err="WASM client not ready";return}this.err=null,this.running=!0,this.requestUpdate();try{const t=this.distanceM,a=Math.pow(10,this.momentLog10),s={dipoles:[{position:[0,0,t],moment:[0,0,a]}],loops:[],ferrous:[],eddy:[],sensors:[[0,0,0]],ambient_field:[0,0,0]},i={digitiser:{f_s_hz:1e4,f_mod_hz:1e3},sensor:{gamma_fwhm_hz:1e6,t1_s:.005,t2_s:1e-6,t2_star_s:2e-7,contrast:.03,n_spins:1e12,shot_noise_disabled:!1},dt_s:null};this.result=await e.runTransient(s,i,42n,64),p("ok",`ghost-demo · r=${t.toFixed(3)} m · |B| recovered = ${(this.result.bMagT*1e12).toExponential(2)} pT`)}catch(t){this.err=t.message,p("err",`ghost-demo failed: ${this.err}`)}finally{this.running=!1,this.requestUpdate()}}formatField(e){if(e===0)return"0 T";const t=Math.abs(e);return t>=.001?`${(e*1e3).toFixed(2)} mT`:t>=1e-6?`${(e*1e6).toFixed(2)} µT`:t>=1e-9?`${(e*1e9).toFixed(3)} nT`:t>=1e-12?`${(e*1e12).toFixed(2)} pT`:t>=1e-15?`${(e*1e15).toFixed(2)} fT`:t>=1e-18?`${(e*1e18).toFixed(2)} aT`:`${e.toExponential(2)} T`}formatDistance(e){return e<1?`${(e*100).toFixed(1)} cm`:e<1e3?`${e.toFixed(2)} m`:e<1e5?`${(e/1e3).toFixed(2)} km`:`${(e/1609).toFixed(0)} mi`}renderDemo(){const e=Math.pow(10,this.momentLog10),t=this.predictedDipoleFieldT(this.distanceM,e),a=this.result?.bMagT??0,s=(this.result?.noiseFloorPtSqrtHz??0)*1e-12,i=Fa.map(l=>{let c="bad",m="below floor";if(l.id==="mmw")this.distanceM<=5?(c="ok",m="µ-Doppler @ chest"):this.distanceM<=15?(c="warn",m="edge of range"):(c="bad",m="out of range");else if(l.id==="csi")this.distanceM<=30?(c=this.distanceM<=10?"ok":"warn",m="presence/breathing"):(c="bad",m="out of range");else if(l.floorT>0){const C=t/l.floorT;C>100?(c="ok",m=`${C.toExponential(1)}× floor`):C>1?(c="warn",m=`${C.toFixed(1)}× floor`):(c="bad",m=`${(1/C).toExponential(1)}× too weak`)}const P=l.floorT>0?Math.max(2,Math.min(100,100+12*Math.log10(t/l.floorT))):l.id==="mmw"?Math.max(2,100-this.distanceM*7):Math.max(2,100-this.distanceM*2);return d`
        <div class="tier-bar" data-tier=${l.id}>
          <div class="fill" style=${`width:${P}%; background:${l.color}; border-color:${l.color}`}></div>
          <div class="lbl">
            <span>${l.label}</span>
            <span class="verdict-${c}" style=${`color:${c==="ok"?"var(--ok)":c==="warn"?"var(--warn)":"var(--bad)"}`}>${m}</span>
          </div>
        </div>
      `}),r=t>1e-12?"ok":t>1e-15?"warn":"bad",n=r==="ok"?`Above NV-ensemble lab floor — close-range MCG plausible at ${this.formatDistance(this.distanceM)}.`:r==="warn"?`Below NV ensemble best, above SQUID — research-grade only at ${this.formatDistance(this.distanceM)}.`:`Below every published instrument's noise floor at ${this.formatDistance(this.distanceM)}. Press-release physics.`;return d`
      <div class="demo">
        <h3 style="margin: 0 0 6px;">Try it yourself</h3>
        <div style="font-size: 12.5px; color: var(--ink-2); margin-bottom: 4px; line-height: 1.5;">
          Place a cardiac dipole at variable distance from the NV sensor. The
          dashboard runs the <i>real</i> nvsim Rust pipeline (compiled to WASM)
          end-to-end and reports what each tier would actually detect. Same
          determinism contract as the rest of the dashboard.
        </div>
        <div class="demo-grid">
          <div>
            <div class="control">
              <div class="top">
                <span class="lbl">Distance from sensor</span>
                <span class="val" id="demo-dist-val">${this.formatDistance(this.distanceM)}</span>
              </div>
              <input type="range" id="demo-distance"
                min="-2" max="5" step="0.05"
                .value=${String(Math.log10(this.distanceM))}
                @input=${l=>{this.distanceM=Math.pow(10,+l.target.value)}} />
              <div style="font-size: 10.5px; color: var(--ink-3); margin-top: 4px; font-family: var(--mono);">
                10 cm → 100 km log scale
              </div>
            </div>
            <div class="control">
              <div class="top">
                <span class="lbl">Heart dipole moment</span>
                <span class="val" id="demo-moment-val">${e.toExponential(2)} A·m²</span>
              </div>
              <input type="range" id="demo-moment"
                min="-10" max="-6" step="0.05"
                .value=${String(this.momentLog10)}
                @input=${l=>{this.momentLog10=+l.target.value}} />
              <div style="font-size: 10.5px; color: var(--ink-3); margin-top: 4px; font-family: var(--mono);">
                published cardiac MCG ≈ 5×10⁻⁹ A·m²
              </div>
            </div>
            <button class="demo-btn" id="demo-run-btn" ?disabled=${this.running}
              @click=${()=>this.runDemo()}>
              ${this.running?"Running nvsim…":"▶ Run nvsim at this distance"}
            </button>
            ${this.err?d`<div class="verdict bad" style="margin-top: 10px;">Error: ${this.err}</div>`:""}
          </div>

          <div>
            <div class="readout">
              <div class="readout-row">
                <span class="l">Predicted |B| (1/r³)</span>
                <span class="v amber" id="demo-predicted">${this.formatField(t)}</span>
              </div>
              <div class="readout-row">
                <span class="l">Recovered |B| (nvsim)</span>
                <span class="v" id="demo-recovered">${this.result?this.formatField(a):"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Sensor noise floor</span>
                <span class="v" id="demo-floor">${this.result?this.formatField(s)+"/√Hz":"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Frames run</span>
                <span class="v" id="demo-frames">${this.result?.nFrames??"—"}</span>
              </div>
              <div class="readout-row">
                <span class="l">Witness (this run)</span>
                <span class="v" style="font-size: 10px;" id="demo-witness">${this.result?.witnessHex.slice(0,16)??"—"}…</span>
              </div>
            </div>
            <div style="margin-top: 14px;">
              <div style="font-size: 11.5px; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">
                Per-tier detectability
              </div>
              ${i}
            </div>
          </div>
        </div>
        <div class="verdict ${r}" id="demo-verdict">${n}</div>
        <div class="demo-notes">
          The <code>predicted</code> value uses the closed-form magnetic-dipole
          far field <code>|B| = μ₀·m / (4π·r³)</code>. The <code>recovered</code>
          value comes from the same Rust pipeline that drives the Witness panel —
          scene → Biot-Savart → NV ensemble → ADC → MagFrame. Use the moment
          slider to ask "what if the heart were stronger?". Use the distance
          slider to walk through 10 cm (clinical MCG), 1 m (close approach),
          10 m (room-scale), 1 km (skeptic's range), and 65 km (the press claim).
        </div>
      </div>
    `}render(){return d`
      <h1>${o("ghostMurmur.title","Ghost Murmur — open-source reality check")}</h1>
      <div class="subtitle">
        ${o("ghostMurmur.subtitle","The physics-vs-press audit for the publicly-reported April 2026 CIA NV-diamond heartbeat detector, and how RuView's existing stack maps onto an honest, civilian version of the same idea.")}
      </div>

      <div class="links">
        <a href="https://github.com/ruvnet/RuView/blob/feat/nvsim-pipeline-simulator/docs/research/quantum-sensing/16-ghost-murmur-ruview-spec.md" target="_blank" rel="noopener">
          📄 Full spec (583 lines)
        </a>
        <a href="https://gist.github.com/ruvnet/e44d0c3f0ad10d9c4933a196a16d405c" target="_blank" rel="noopener">
          ✦ Public gist
        </a>
        <a href="https://github.com/ruvnet/RuView/issues/437" target="_blank" rel="noopener">
          # Issue #437
        </a>
        <a href="https://www.scientificamerican.com/article/what-is-the-quantum-ghost-murmur-purportedly-used-in-iran-scientists/" target="_blank" rel="noopener">
          ↗ Scientific American
        </a>
      </div>

      <h2>${o("ghostMurmur.pressReported","What the press reported")}</h2>
      <div class="grid">
        <div class="card">
          <h3>The story</h3>
          <p>3 Apr 2026: USAF F-15E pilot "Dude 44 Bravo" goes down in southern Iran during the regional exchange and evades for ~2 days.</p>
          <p>President Trump publicly suggests detection from <b>40 miles away</b> on a mountainside at night; CIA Director Ratcliffe says "invisible to the enemy, but not to the CIA."</p>
        </div>
        <div class="card">
          <h3>The named tech</h3>
          <p><b>"Ghost Murmur"</b> — Lockheed Skunk Works system using NV defects in synthetic diamond + AI to extract a heartbeat from environmental noise.</p>
          <p>Outlets: <i>Newsweek, Scientific American, Military.com, WION, Open The Magazine, Yahoo, Calcalist</i> + HN thread #47679241.</p>
        </div>
        <div class="card">
          <h3>What physicists said</h3>
          <p>Wikswo (Vanderbilt), Orzel (Union College), Roth (Oakland) — all pushing back hard.</p>
          <p>"At 1 km, the heartbeat field drops to ~10⁻¹² of its 10 cm value." MCG-only at multi-mile range is <span class="pill skeptical">not consistent with published physics</span>.</p>
        </div>
      </div>

      <h2>Live demo — nvsim WASM</h2>
      ${this.renderDemo()}

      <h2>${o("ghostMurmur.physicsCheck","Physics reality check")}</h2>
      <div class="card" style="padding: 6px 14px;">
        <table>
          <thead>
            <tr><th>Distance</th><th>Cardiac MCG (peak QRS)</th><th>vs Earth field (~50 µT)</th></tr>
          </thead>
          <tbody>
            <tr><td>10 cm</td><td class="amber">50 pT</td><td>10⁹× weaker</td></tr>
            <tr><td>1 m</td><td class="amber">50 fT</td><td>10¹²× weaker</td></tr>
            <tr><td>10 m</td><td class="cyan">50 aT</td><td>10¹⁵× weaker</td></tr>
            <tr><td>1 km</td><td class="bad">5 × 10⁻²³ T</td><td>10²⁷× weaker</td></tr>
            <tr><td>40 mi (65 km)</td><td class="bad">~10⁻²⁸ T</td><td>10³³× weaker</td></tr>
          </tbody>
        </table>
        <p style="font-size: 12px; color: var(--ink-3); margin: 10px 0 0; line-height: 1.5;">
          Best published NV-ensemble lab record: <b>0.9 pT/√Hz</b> [Wolf 2015].
          Best SQUID in a shielded room: <b>~1 fT/√Hz</b>. To detect a single heartbeat at 10 m
          you'd need ~2 billion× more sensitivity than any published ensemble has ever shown,
          in a magnetically silent environment. <i>40 miles is press-release physics.</i>
        </p>
      </div>

      <h2>${o("ghostMurmur.threeTierMesh","RuView's three-tier mesh — what is actually buildable")}</h2>
      <div class="architecture">                      ┌──────────────────────────┐
                      │   Tier 3 — NV-diamond    │  Range: 0.1–2 m (lab)
                      │     magnetometer ring    │  Status: nvsim simulator only
                      │     (close-confirm)      │  Hardware: $$$ (≥$8k DNV-B1)
                      └──────────┬───────────────┘
                                 │
                      ┌──────────┴───────────────┐
                      │   Tier 2 — 60 GHz FMCW   │  Range: 1–10 m HR/BR
                      │     mmWave radar mesh    │  Status: shipping (ADR-021)
                      │   (vital signs, posture) │  Hardware: $15 (MR60BHA2 + ESP32-C6)
                      └──────────┬───────────────┘
                                 │
                      ┌──────────┴───────────────┐
                      │  Tier 1 — WiFi CSI mesh  │  Range: 10–30 m through-wall
                      │   (presence, breathing,  │  Status: shipping (ADR-014, ADR-029)
                      │    pose, intention)      │  Hardware: $9 (ESP32-S3 8MB)
                      └──────────┬───────────────┘
                                 │
                                 ▼
                  ┌────────────────────────────────┐
                  │  RuvSense multistatic fusion   │
                  │   + cross-viewpoint attention  │
                  │   + AETHER re-ID embeddings    │
                  │   + Cramer-Rao gating          │
                  └────────────────────────────────┘</div>

      <h2>${o("ghostMurmur.pressVsRuview","Press claim → RuView equivalent")}</h2>
      <div class="card" style="padding: 6px 14px;">
        <table>
          <thead>
            <tr><th>Press claim</th><th>RuView equivalent today</th><th>Crate / ADR</th><th>Honest range</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>NV-diamond magnetometry</td>
              <td>Deterministic NV pipeline simulator</td>
              <td><code>nvsim</code> · ADR-089</td>
              <td>Simulator only</td>
            </tr>
            <tr>
              <td>"AI strips environmental noise"</td>
              <td>RuvSense multistatic fusion + AETHER</td>
              <td>signal/ruvsense/ · ADR-029</td>
              <td>Mature</td>
            </tr>
            <tr>
              <td>Heartbeat at distance</td>
              <td>60 GHz FMCW HR/BR + WiFi CSI breathing</td>
              <td>vitals · ADR-021</td>
              <td><span class="pill ok">1–5 m HR · 10–30 m presence</span></td>
            </tr>
            <tr>
              <td>Long-range localisation</td>
              <td>Multistatic time-of-flight + CRLB</td>
              <td>ruvector/viewpoint/</td>
              <td>Limited by node spacing</td>
            </tr>
            <tr>
              <td><i>40-mile single-heartbeat detection</i></td>
              <td><i>Not feasible at any tier</i></td>
              <td>—</td>
              <td><span class="pill skeptical">Press-release physics</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>${o("ghostMurmur.buildToday","Build today on $165")}</h2>
      <div class="grid">
        <div class="card">
          <h3>Bill of materials</h3>
          <p style="font-family: var(--mono); font-size: 11.5px; line-height: 1.7; color: var(--ink-2);">
            3 × ESP32-S3 8 MB ($9 ea)<br>
            3 × PoE injector + cat6 ($6 ea)<br>
            1 × ESP32-C6 + Seeed MR60BHA2 ($15)<br>
            1 × Raspberry Pi 5 8 GB ($80)<br>
            1 × unmanaged GbE switch ($25)
          </p>
          <p><b>Total: $165</b></p>
        </div>
        <div class="card">
          <h3>Honest performance</h3>
          <span class="stat"><span class="v">95%</span><span class="l">TPR (LOS, 0–15 m)</span></span><br><br>
          <span class="stat"><span class="v">±2 bpm</span><span class="l">HR (LOS 0–3 m)</span></span><br><br>
          <span class="stat"><span class="v">±1 br/min</span><span class="l">BR (any mode)</span></span><br><br>
          <span class="stat"><span class="v">~10 cm</span><span class="l">pose error</span></span><br><br>
          <span class="stat"><span class="v">80–150 ms</span><span class="l">end-to-end latency</span></span>
        </div>
        <div class="card">
          <h3>Determinism</h3>
          <p>Same <code style="font-family: var(--mono); color: var(--accent);">(scene, config, seed)</code> → byte-identical SHA-256 witness across browsers, OSes, transports.</p>
          <p>Reference: <span style="font-family: var(--mono); font-size: 10.5px; color: var(--accent-3);">cc8de9b01b0ff5bd…</span></p>
          <p>Try the Witness tab on the right — it re-derives the hash live in this browser and compares against the published reference.</p>
        </div>
      </div>

      <h2>${o("ghostMurmur.ethics","Privacy, ethics, legal")}</h2>
      <div class="ethics">
        <h3>This is the open-source version. Same physics, opposite governance.</h3>
        <ul>
          <li><b>Civilian opt-in only</b> — search-and-rescue, elder-care, occupancy, ICU vitals. Not surveillance.</li>
          <li><b>No directional pursuit</b> — no beam-steering, target-following, or remote person-of-interest tracking.</li>
          <li><b>Data minimisation</b> — fused output is <code>(presence, HR, BR, pose, p_alive)</code>; raw streams discarded at the edge.</li>
          <li><b>PII gates</b> (ADR-040) block identifying biometric streams from leaving the local mesh without consent.</li>
          <li><b>Adversarial-signal detection</b> flags physically-impossible signal patterns from compromised mesh nodes.</li>
          <li><b>No export-controlled hardware</b> — RuView targets &lt; $50 COTS. ITAR/EAR sub-THz coherent radars and shielded NV ensembles are out of scope.</li>
        </ul>
        <p style="font-size: 11.5px; color: var(--ink-3); margin: 10px 0 0;">
          RuView is not affiliated with the United States government, the CIA, Lockheed Martin,
          or any classified program. References to "Ghost Murmur" in this view refer
          exclusively to the publicly-reported program of that name as covered in the open
          press in April 2026.
        </p>
      </div>

      <h2>${o("ghostMurmur.crossRef","Cross-references")}</h2>
      <div class="card">
        <p style="font-size: 12px; color: var(--ink-2); line-height: 1.7; margin: 0;">
          <b>ADRs:</b> 014 (signal) · 021 (vitals) · 024 (AETHER) · 027 (MERIDIAN) ·
          028 (witness audit) · 029 (RuvSense) · 040 (PII gates) · 086 (ESP32 RaBitQ) ·
          <b>089 (nvsim, Accepted)</b> · 090 (Lindblad, Proposed-conditional) ·
          091 (sub-THz radar research) · <b>092 (this dashboard)</b>.<br><br>
          <b>Primary physics:</b> Cohen 1970 · Bison 2009 · Wolf 2015 · Barry RMP 2020 · Doherty 2013 · Jackson 3e §5.6/§5.8.
        </p>
      </div>
    `}};K.styles=x`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: radial-gradient(ellipse at 50% 30%, var(--bg-2) 0%, var(--bg-0) 70%);
      padding: 24px 28px 60px;
    }
    h1 {
      margin: 0 0 4px;
      font-size: 22px;
      letter-spacing: -0.02em;
      color: var(--ink);
    }
    .subtitle {
      color: var(--ink-3);
      font-size: 13px;
      margin-bottom: 22px;
    }
    .links {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 22px;
    }
    .links a {
      padding: 5px 10px;
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 11.5px;
      font-family: var(--mono);
      color: var(--accent-2);
      text-decoration: none;
    }
    .links a:hover { border-color: var(--accent-2); }
    h2 {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--ink-3);
      margin: 28px 0 10px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
    }
    .card {
      background: var(--bg-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 14px;
    }
    .card h3 {
      margin: 0 0 8px;
      font-size: 13.5px; font-weight: 600;
      color: var(--ink);
    }
    .card p {
      font-size: 12.5px; color: var(--ink-2);
      margin: 0 0 8px;
      line-height: 1.5;
    }
    .card p:last-child { margin-bottom: 0; }
    .stat {
      display: inline-flex; align-items: baseline; gap: 6px;
      margin-right: 10px;
    }
    .stat .v {
      font-family: var(--mono); font-size: 16px; font-weight: 600;
      color: var(--accent);
    }
    .stat .l {
      font-size: 10px; color: var(--ink-3);
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    table {
      width: 100%; border-collapse: collapse;
      font-size: 12.5px;
    }
    th, td {
      padding: 8px 10px;
      text-align: left;
      border-bottom: 1px solid var(--line);
    }
    th {
      color: var(--ink-3);
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    td.amber { color: var(--accent); font-family: var(--mono); }
    td.cyan { color: var(--accent-2); font-family: var(--mono); }
    td.bad { color: var(--bad); font-family: var(--mono); }
    .pill {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      font-family: var(--mono);
      font-size: 10px;
      border: 1px solid var(--line);
    }
    .pill.ok { color: var(--ok); border-color: oklch(0.78 0.14 145 / 0.4); }
    .pill.skeptical { color: var(--bad); border-color: oklch(0.65 0.22 25 / 0.4); }
    .pill.partial { color: var(--warn); border-color: oklch(0.7 0.18 35 / 0.4); }
    .architecture {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--ink-2);
      background: var(--bg-3);
      padding: 16px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--line);
      white-space: pre;
      overflow-x: auto;
      line-height: 1.4;
    }
    .ethics {
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.65 0.22 25 / 0.04) 100%);
      border: 1px solid oklch(0.65 0.22 25 / 0.25);
      border-radius: var(--radius);
      padding: 16px;
    }
    .ethics h3 { color: var(--bad); margin-top: 0; }
    .ethics ul { padding-left: 18px; margin: 8px 0; }
    .ethics li { font-size: 12.5px; color: var(--ink-2); margin-bottom: 4px; }

    /* Demo */
    .demo {
      background: linear-gradient(180deg, var(--bg-2) 0%, oklch(0.78 0.14 70 / 0.04) 100%);
      border: 1px solid oklch(0.78 0.14 70 / 0.3);
      border-radius: var(--radius);
      padding: 18px;
    }
    .demo-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-top: 12px;
    }
    @media (max-width: 720px) { .demo-grid { grid-template-columns: 1fr; } }
    .control { margin-bottom: 14px; }
    .control .top {
      display: flex; justify-content: space-between;
      font-size: 12px; margin-bottom: 6px;
    }
    .control .top .lbl { color: var(--ink-3); }
    .control .top .val {
      font-family: var(--mono); color: var(--ink);
    }
    .control input[type="range"] {
      -webkit-appearance: none; appearance: none;
      width: 100%; height: 4px;
      background: var(--bg-3); border-radius: 2px; outline: none;
    }
    .control input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--accent); cursor: pointer;
      border: 2px solid var(--bg-2);
    }
    .demo-btn {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--accent);
      background: var(--accent);
      color: #1a0f00;
      border-radius: 8px;
      font-size: 13px; font-weight: 600;
      cursor: pointer;
    }
    .demo-btn:hover { filter: brightness(1.08); }
    .demo-btn:disabled { opacity: 0.6; cursor: progress; }
    .readout {
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
    }
    .readout-row {
      display: flex; justify-content: space-between;
      padding: 4px 0;
      font-family: var(--mono); font-size: 12px;
    }
    .readout-row .l { color: var(--ink-3); }
    .readout-row .v { color: var(--ink); }
    .readout-row .v.amber { color: var(--accent); }
    .tier-bar {
      position: relative;
      margin: 6px 0;
      height: 22px;
      background: var(--bg-3);
      border: 1px solid var(--line);
      border-radius: 4px;
      overflow: hidden;
    }
    .tier-bar .fill {
      position: absolute; top: 0; bottom: 0; left: 0;
      transition: width 0.2s ease-out;
      border-right: 2px solid;
    }
    .tier-bar .lbl {
      position: relative; z-index: 1;
      font-family: var(--mono); font-size: 11px;
      padding: 3px 8px;
      color: var(--ink);
      display: flex; justify-content: space-between;
      pointer-events: none;
    }
    .verdict {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 12.5px; font-weight: 500;
      border: 1px solid;
    }
    .verdict.ok { background: oklch(0.78 0.14 145 / 0.08); border-color: oklch(0.78 0.14 145 / 0.4); color: var(--ok); }
    .verdict.warn { background: oklch(0.7 0.18 35 / 0.08); border-color: oklch(0.7 0.18 35 / 0.4); color: var(--warn); }
    .verdict.bad { background: oklch(0.65 0.22 25 / 0.08); border-color: oklch(0.65 0.22 25 / 0.4); color: var(--bad); }
    .demo-notes {
      font-size: 11.5px; color: var(--ink-3);
      margin-top: 10px; line-height: 1.5;
    }
  `;fe([h()],K.prototype,"distanceM",2);fe([h()],K.prototype,"momentLog10",2);fe([h()],K.prototype,"result",2);fe([h()],K.prototype,"running",2);fe([h()],K.prototype,"err",2);K=fe([k("nv-ghost-murmur")],K);var Wa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Xe=(e,t,a,s)=>{for(var i=s>1?void 0:s?Oa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Wa(t,a,i),i};const Ba=[{term:"NV-diamond",category:"physics",body:"Nitrogen-vacancy defect in synthetic diamond. The simulator models a 1 mm³ ensemble (~10¹² centers) addressed by 532 nm pump light + a 2.87 GHz microwave drive. Used as a room-temperature magnetometer with shot-noise floor ~1 pT/√Hz at the published lab record."},{term:"CW-ODMR",category:"physics",body:"Continuously-driven optically-detected magnetic resonance. Sweep the microwave frequency around the NV zero-field splitting (D = 2.87 GHz) and watch the photoluminescence dip when the microwave matches the spin transition. The dip splits with applied magnetic field along each of the four ⟨111⟩ NV axes."},{term:"MagFrame",category:"rust",body:"Fixed-layout 60-byte binary record nvsim emits per (sensor × sample). Magic 0xC51A_6E70, version 1, little-endian. Carries timestamp, recovered B vector (pT), per-axis sigma, noise floor, and flag bits for saturation / shot-noise-disabled / heavy-attenuation."},{term:"Witness",category:"rust",body:"SHA-256 hash over the concatenated MagFrame bytes for a canonical reference run (Proof::REFERENCE_SCENE_JSON @ seed=42, N=256). Same inputs → same hash, byte-for-byte, across runs and machines. The dashboard re-derives it in WASM and compares against Proof::EXPECTED_WITNESS_HEX pinned at build time."},{term:"Determinism gate",category:"rust",body:"A pass/fail check: did this build of nvsim produce the expected witness? If yes → every constant (γ_e, D_GS, μ₀, contrast, T₂*, the PRNG stream, the frame layout, the pipeline ordering) is byte-identical to the published reference. If no → something drifted; the dashboard names which."},{term:"Lock-in demod",category:"physics",body:"Multiply the photoluminescence signal by cos(2π·f_mod·t) and low-pass to recover the slowly-varying B-field component. The simulator emulates a lock-in with output gain 2 and a single-pole IIR LP filter; settable via the Tunables panel (f_mod default 1 kHz)."},{term:"Shot-noise floor",category:"physics",body:'δB = 1 / (γ_e · C · √(N · t · T₂*)) — the irreducible quantum noise floor for an NV ensemble. With nvsim defaults (N=10¹², C=0.03, T₂*=200 ns): ≈1.18 pT/√Hz. Toggleable via the Tunables panel for "analytic" runs without noise.'},{term:"Biot-Savart",category:"physics",body:"Closed-form magnetic field at a point from a current loop or a magnetic dipole. The Scene panel's sources (heart proxy, mains loop, ferrous body, eddy current) all reduce to Biot-Savart-style superpositions over the sensor position."},{term:"Multistatic fusion",category:"physics",body:"Combining evidence from multiple sensors at known geometric configurations. RuView's Cramer-Rao-weighted attention over WiFi CSI nodes + 60 GHz radar nodes + (hypothetically) NV nodes; documented in ADR-029 and the Ghost Murmur view."},{term:"Scene",category:"ui",body:'The simulated magnetic environment: a list of sources (dipole, current loop, ferrous body, eddy current) plus one or more sensor positions and an ambient field. The dashboard ships a "rebar-walkby-01" reference scene; click "New scene…" in the command palette (⌘K) to build your own.'},{term:"Tunables",category:"ui",body:"Sliders that change the running pipeline's digitiser config. Each edit debounces 300 ms, then rebuilds the WASM pipeline with the new f_s / f_mod / dt / shot-noise setting. The frame stream picks up the change without a restart."},{term:"Transport",category:"ui",body:"How the dashboard talks to nvsim. Default is WASM — the simulator runs in a Web Worker right here in your browser, no server. The optional WS transport is REST + binary WebSocket against a host-supplied nvsim-server (see ADR-092 §6.2). Toggle in Settings."},{term:"App Store",category:"ui",body:"Catalog of all 65+ hot-loadable WASM edge modules from wifi-densepose-wasm-edge plus the simulators. Each card carries id / category / status / event IDs; the toggle marks an app active in this session and (in WS mode) pushes the activation to a connected ESP32 mesh."},{term:"Ghost Murmur",category:"ui",body:'Research view that audits the publicly-reported April 2026 CIA NV-diamond heartbeat detector against the open physics literature. Includes a live "Try it yourself" sandbox where you can place a heart dipole at any distance from the sensor and ask: which transport tier would actually detect it?'}],Va=[{term:"NVセンターダイヤモンド (NV-diamond)",category:"physics",body:"人工ダイヤモンド中の窒素-空孔欠陥格子。本シミュレータは532nm励起光＋2.87GHzマイクロ波で制御される1mm³（約10¹²個の欠陥）の集合体をモデル化。ショット雑音限界〜1 pT/√Hzの室温量子磁気センサーとして機能します。"},{term:"連続光検出磁気共鳴 (CW-ODMR)",category:"physics",body:"マイクロ波周波数をゼロ場分裂(D=2.87GHz)付近で掃引し、電子スピン遷移に一致した際の蛍光強度低下を測定。外部磁場印加により、4つの⟨111⟩軸方向に共鳴線が分裂します。"},{term:"MagFrame (バイナリフレーム)",category:"rust",body:"nvsimが(センサー×サンプル)毎に発行する固定長60バイトのバイナリ構造体。マジック0xC51A_6E70、タイムスタンプ、復元Bベクター(pT)、軸毎の標準偏差、雑音床、フラグを保持。"},{term:"ウィトネス証明 (Witness)",category:"rust",body:"標準参照実行(Proof::REFERENCE_SCENE_JSON @ seed=42, N=256)の全MagFrameバイナリを連結したSHA-256ハッシュ。入力が同一であればマシン・環境を問わず完全に一致する確定性証明。"},{term:"確定性検証ゲート (Determinism gate)",category:"rust",body:"ビルドされたnvsimが期待されるウィトネスハッシュを正しく出力したかを判定するパス/フェイルチェック。全物理定数と乱数生成器の一致を検証します。"},{term:"ロックイン検波 (Lock-in demod)",category:"physics",body:"蛍光シグナルにcos(2π·f_mod·t)を乗算しローパスフィルタを通すことで、緩やかに変化する磁場成分を復元。 Tunablesパネルでf_modパラメータを調整可能。"},{term:"ショット雑音限界 (Shot-noise floor)",category:"physics",body:"δB = 1 / (γ_e · C · √(N · t · T₂*)) — NV欠陥集合体における不可避の量子雑音床。デフォルト設定(N=10¹², C=0.03, T₂*=200ns)で約1.18 pT/√Hz。"},{term:"ビオ・サバールの法則 (Biot-Savart)",category:"physics",body:"電流ループや磁気双極子から生じる空間上の磁場ベクトル計算式。Sceneパネル内の全磁源（心拍、商用電源、鉄筋体）はビオ・サバール重ね合わせで計算されます。"},{term:"マルチスタティック統合 (Multistatic fusion)",category:"physics",body:"複数センサーの空間配置情報とCramer-Rao重み付けアテンションを組み合わせ、WiFi CSI＋60GHzレーダー＋NVセンサーのデータを高精度統合する技術。"},{term:"シーン (Scene)",category:"ui",body:"シミュレート対象の磁気環境。磁源（双極子、電流ループ、鉄筋体等）とセンサー位置、環境磁場を設定。コマンドパレット(Ctrl+K / ⌘K)から「新規シーン構築」が可能。"},{term:"Tunables (設定パラメータ)",category:"ui",body:"デジタイザおよび物理モデルのパラメータ調整スライダー。デバウンス後に自動再計算され、ストリームへ即座に反映されます。"},{term:"トランスポート (Transport)",category:"ui",body:"ダッシュボードとシミュレータ間の通信方式。デフォルトのWASMモードはブラウザ内のWeb Workerでローカル実行されサーバー不要。"},{term:"App Store (エッジアプリカタログ)",category:"ui",body:"wifi-densepose-wasm-edgeの65種類以上のホットロード可能なエッジモジュールカタログ。有効化・無効化の切り替えが可能。"},{term:"Ghost Murmur (心拍検知検証)",category:"ui",body:"心拍による微弱磁場が実際のNVセンサーで検出可能かを物理原理に基づき検証する研究用インターフェース。"}],qa=[{q:"Is this a real simulator or a mockup?",a:"Real. The Rust crate at v2/crates/nvsim is the same code that runs in the browser via WASM. Press <b>Verify witness</b> on the Witness panel — the SHA-256 you see is byte-equivalent to what `cargo test -p nvsim` produces."},{q:'Why does my "Recovered |B|" sit much higher than "Predicted |B|" in the Ghost Murmur demo?',a:"The recovered value reads the simulator's ADC quantization floor, not the actual magnetic signal. With COTS-default sensor noise (~300 pT/√Hz) and 16-bit ADC at ±10 µT FS, anything below ~1 pT vanishes into ~2 nT of digitization residual. That's the lesson — the press claim sits far below this floor at any meaningful range."},{q:"Can I run my own scene?",a:'Yes. Press ⌘K to open the command palette and pick "New scene…". You get five fields (name, dipole moment, distance, ferrous toggle, mains toggle); the dashboard builds the JSON and pushes it via <code>client.loadScene()</code>.'},{q:"Does any of my data leave the browser?",a:"No. WASM mode is local-only — the worker, the WASM binary, and the IndexedDB persistence all live in your browser. The optional WS transport (off by default) talks to a host of your choosing."},{q:"What does the witness mismatch (red ✗) mean?",a:"The current build of nvsim produced a SHA-256 that doesn't match the constant pinned at compile time. Possible causes: a different Rust toolchain, a dependency version drift, a manual edit to a physics constant, or an honest bug. Audit the diff against ADR-089 §5."},{q:"Why are the Inspector / Witness rail buttons there if there's already a right-side inspector?",a:'The right-side inspector is the compact live view; the rail buttons open a full-width version with bigger charts, an explainer header, reference-scene metadata cards, and (on Witness) a "what this verifies" panel. Both stay in sync — the right rail is for glancing, the main area is for diving in.'},{q:'Why is there an "App Store" if this is a magnetometer simulator?',a:"Because nvsim is one tile in a larger sensing platform. The catalog lists every hot-loadable WASM edge module RuView ships — medical, security, building, retail, industrial, signal, learning, autonomy. The simulators (nvsim today, more in future) are first-class entries in the same catalog."}],Ua=[{q:"これは実際のシミュレータですか、それともモックアップですか？",a:"本物のシミュレータです。<code>v2/crates/nvsim</code> にあるRustクレートがWASMとしてブラウザ上で直接動作しています。Witnessパネルで「ウィトネス検証」を実行すると、`cargo test -p nvsim` で得られるSHA-256と完全に一致することが確認できます。"},{q:"Ghost Murmurデモで「復元磁場 |B|」が「予測値」よりはるかに高いのはなぜですか？",a:"復元値は磁気シグナル本体ではなく、ADCの量子化雑音床を読み取っているためです。汎用センサー雑音(~300 pT/√Hz)と16bit ADC(±10 µT FS)の組み合わせでは、1 pT未満の微弱シグナルは約2 nTの量子化残差の中に埋もれてしまいます。"},{q:"独自のカスタム磁気シーンを実行できますか？",a:"はい。<b>Ctrl+K / ⌘K</b> を押してコマンドパレットを開き、「新規シーン構築」を選択してください。名前、双極子モーメント、距離、鉄筋・電源線の有無を指定して作成できます。"},{q:"ブラウザから外部サーバーへデータが送信されることはありますか？",a:"いいえ。WASMモードは完全ローカル動作です。Worker、WASMバイナリ、IndexedDBキャッシュのすべてがブラウザ内で完結します。"},{q:"ウィトネス不一致（赤の ✗）は何を意味していますか？",a:"現在のビルドで生成されたSHA-256が、コンパイル時に固定された定数と一致しなかったことを意味します。Rustツールチェーンの違いや依存関係の変動、物理定数の変更が原因として考えられます。"},{q:"右側にインスペクターがあるのに、左レールにもInspector / Witnessボタンがあるのはなぜですか？",a:"右側インスペクターはコンパクトなリアルタイム表示用です。左レールのボタンを押すと、より大きなグラフや詳細なメタデータカードを備えたフルサイズビューが開きます。両者は常に同期しています。"},{q:"磁気シミュレータなのに「App Store」があるのはなぜですか？",a:"nvsimはRuView大規模センシングプラットフォームの一機能に過ぎないためです。App Storeには医療、防犯、施設管理、AI自動化など65種類以上のエッジモジュールが登録されています。"}],Ga=[{step:1,title:"Hit ▶ Run",body:"The big amber button in the topbar starts the live frame stream. The pipeline runs ~1.8 kHz on x86_64 WASM, well above the 1 kHz Cortex-A53 acceptance gate."},{step:2,title:"Watch the B-vector trace",body:"The Inspector → Signal tab shows the recovered field per axis updating in real time. The frame strip below it is one bar per ~32-frame batch."},{step:3,title:"Verify the witness",body:"Click the rail Witness button (or REPL: <code>proof.verify</code>). The dashboard re-runs the canonical reference scene and asserts the SHA-256 byte-for-byte."},{step:4,title:"Drag a source",body:"Grab the rebar / heart proxy / mains loop / ferrous door in the scene canvas; positions persist via IndexedDB."},{step:5,title:"Tweak the tunables",body:"Sliders in the left sidebar update the running pipeline (f_s, f_mod, integration time, shot-noise). Changes debounce 300 ms then push to the worker."},{step:6,title:"Open the Ghost Murmur view",body:'The ghost icon in the rail. Move the distance + moment sliders, hit "Run nvsim at this distance" — the live demo runs the real Rust pipeline through WASM and shows which transport tier would actually detect.'},{step:7,title:"Browse the App Store",body:"The grid icon. 65+ edge apps: medical, security, building, retail, industrial, signal, learning. Toggle to mark active in this session."}],Ka=[{step:1,title:"▶ 実行 ボタンを押す",body:"トップバーのオレンジ色の「実行」ボタンを押すとライブフレームストリームが開始します。WASM環境で約1.8kHzで高速処理されます。"},{step:2,title:"Bベクトルトレースを観測する",body:"インスペクターの「Signal」タブで、軸ごとの復元磁場がリアルタイム更新される様子を確認します。"},{step:3,title:"ウィトネス（証明）を検証する",body:"左レールの「Witness」ボタンを押すと、標準参照シーンを再実行し、SHA-256ハッシュがバイト単位で一致することを証明します。"},{step:4,title:"磁源をドラッグ移動する",body:"キャンバス上の心拍プロキシ、電源線ループ、鉄筋オブジェクトをドラッグして位置を変更できます（位置はIndexedDBに自動保存）。"},{step:5,title:"Tunablesパラメータを調整する",body:"サイドバーのスライダーでサンプリング周波数(f_s)や変調周波数(f_mod)を変更すると、300ms後に自動的にパイプラインへ反映されます。"},{step:6,title:"Ghost Murmurビューを開く",body:"左レールのゴーストアイコンから、距離や双極子モーメントを変更して「この距離でnvsimを実行」を押し、検出限界を実証します。"},{step:7,title:"App Storeを閲覧する",body:"グリッドアイコンから65種類以上の医療・防犯・施設管理モジュールをセッション内で自由に有効化できます。"}],Ja=[{keys:"Ctrl K  /  ⌘K",label:"Command palette"},{keys:"Space",label:"Play / pause pipeline"},{keys:"Ctrl R  /  ⌘R",label:"Reset pipeline (with confirm)"},{keys:"Ctrl ,  /  ⌘,",label:"Settings drawer"},{keys:"Ctrl N  /  ⌘N",label:"New scene"},{keys:"Ctrl E  /  ⌘E",label:"Export proof bundle"},{keys:"Ctrl /  /  ⌘/",label:"Toggle theme (dark / light)"},{keys:"`",label:"Toggle debug HUD"},{keys:"?",label:"Open this help center"},{keys:"1 · 2 · 3",label:"Switch inspector tab (Signal / Frame / Witness)"},{keys:"Esc",label:"Close any modal / palette / drawer"},{keys:"/",label:"Focus the REPL prompt"}],Ya=[{keys:"Ctrl K  /  ⌘K",label:"コマンドパレットを開く"},{keys:"Space",label:"パイプラインの再生 / 一時停止"},{keys:"Ctrl R  /  ⌘R",label:"パイプラインのリセット (要確認)"},{keys:"Ctrl ,  /  ⌘,",label:"環境設定ドロワーを開く"},{keys:"Ctrl N  /  ⌘N",label:"新規シーンの構築"},{keys:"Ctrl E  /  ⌘E",label:"証明（Proof）バンドルのエクスポート"},{keys:"Ctrl /  /  ⌘/",label:"テーマ切替 (ダーク / ライト)"},{keys:"`",label:"デバッグHUDの表示切替"},{keys:"?",label:"このヘルプセンターを開く"},{keys:"1 · 2 · 3",label:"インスペクタータブ切り替え (Signal / Frame / Witness)"},{keys:"Esc",label:"モーダル / パレット / ドロワーを閉じる"},{keys:"/",label:"REPLプロンプトにフォーカス"}];let ge=class extends w{constructor(){super(...arguments),this.open=!1,this.section="quickstart",this.query="",this.closeListener=()=>this.close(),this.show=e=>{const t=e.detail;t?.section&&(this.section=t.section),this.open=!0,this.setAttribute("open","")},this.onKey=e=>{const t=e.target,a=t?.tagName==="INPUT"||t?.tagName==="TEXTAREA";e.key==="?"&&!a&&!e.ctrlKey&&!e.metaKey?(e.preventDefault(),this.show(new CustomEvent("nv-show-help"))):e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("nv-show-help",this.show),window.addEventListener("nv-show-help-close",this.closeListener),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("nv-show-help",this.show),window.removeEventListener("nv-show-help-close",this.closeListener),window.removeEventListener("keydown",this.onKey)}close(){this.open=!1,this.removeAttribute("open")}filteredGlossary(){const e=_()==="ja"?Va:Ba;if(!this.query.trim())return e;const t=this.query.toLowerCase();return e.filter(a=>a.term.toLowerCase().includes(t)||a.body.toLowerCase().includes(t))}renderQuickstart(){const e=_()==="ja";return d`
      <h2>${e?"🚀 クイックスタートガイド":"Quickstart guide"}</h2>
      <p class="lead">${e?"nvsimダッシュボードを使いこなすための7ステップガイド。":"Seven steps to get the most out of the dashboard."}</p>
      <button class="tour-btn" @click=${()=>{this.close(),window.dispatchEvent(new CustomEvent("nv-start-tour"))}}>
        ${e?"★ インタラクティブな10ステップツアーを開始する":"★ Take the interactive 10-step tour"}
      </button>
      ${(e?Ka:Ga).map(a=>d`
        <div class="step">
          <div class="num">${a.step}</div>
          <div>
            <div class="ttl">${a.title}</div>
            <div class="body-text" .innerHTML=${a.body}></div>
          </div>
        </div>
      `)}
    `}renderGlossary(){const e=_()==="ja",t=this.filteredGlossary();return d`
      <h2>${e?"用語集 (Glossary)":"Glossary"}</h2>
      <p class="lead">${e?"ダッシュボードで使用される主要な技術用語と解説。":"Every piece of jargon in the dashboard, defined in one paragraph each."}</p>
      <input class="glossary-search" type="text" placeholder=${e?"用語を検索 (全14項目)…":"Search 14 terms…"}
        .value=${this.query}
        @input=${a=>this.query=a.target.value} />
      ${t.length===0?d`<p style="color: var(--ink-3);">${e?"一致する用語が見つかりません。":"No terms match."}</p>`:t.map(a=>d`
            <div class="term">
              <div class="head">
                <span class="name">${a.term}</span>
                <span class="badge ${a.category}">${a.category}</span>
              </div>
              <div class="body-text">${a.body}</div>
            </div>
          `)}
    `}renderFaq(){const e=_()==="ja";return d`
      <h2>${e?"よくある質問 (FAQ)":"FAQ"}</h2>
      <p class="lead">${e?"デモや導入時によく寄せられる質問と回答。":"The questions I was asked twice in the first week of demos."}</p>
      ${(e?Ua:qa).map(a=>d`
        <div class="faq-item">
          <div class="q">${a.q}</div>
          <div class="a" .innerHTML=${a.a}></div>
        </div>
      `)}
    `}renderShortcuts(){const e=_()==="ja";return d`
      <h2>${e?"キーボードショートカット":"Keyboard shortcuts"}</h2>
      <p class="lead">${e?"マウスを使わずキーボードのみで全機能にアクセス可能です。":"Everything is reachable without a mouse."}</p>
      <div class="shortcuts">
        ${(e?Ya:Ja).map(a=>d`
          <kbd>${a.keys}</kbd><span>${a.label}</span>
        `)}
      </div>
    `}renderAbout(){return _()==="ja"?d`
        <h2>このダッシュボードについて</h2>
        <p class="lead">nvsim ダッシュボードの設計思想と技術概要。</p>
        <p><b>nvsim</b> は、窒素-空孔（NV）ダイヤモンド磁気センシングのための確定性順方向シミュレータです。
          <code>v2/crates/nvsim</code> にあるRustクレートが核となっており、このダッシュボードはWeb Worker内でWebAssembly（WASM）として実行するVite + Litシングルページアプリケーションです。</p>
        <p>最大の強みは<b>決定性（確定性）</b>です。同一の <code>(scene, config, seed)</code> 入力からは、
          ブラウザ、OS、トランスポートの違いを問わずバイト単位で完全一致するSHA-256ウィトネス（証明）が生成されます。
          Witnessタブの <kbd>ウィトネス検証</kbd> ボタンで実証できます。</p>
        <p>コードベースはオープンソース（Apache-2.0 OR MIT）です。GitHubリポジトリ:
          <code>github.com/ruvnet/RuView</code>。設計決定は ADR-089 (nvsim),
          ADR-090 (Lindblad拡張), ADR-091 (サブTHzレーダー研究),
          ADR-092 (本ダッシュボード), ADR-093 (UXギャップ分析) にドキュメント化されています。</p>
        <p>本ダッシュボードはRuViewプラットフォームのデモの一つです。他のデモ（Observatory、Pose Fusion）は
          <code>github.io/RuView/</code> で公開されています。</p>
      `:d`
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
    `}render(){const e=_()==="ja";return d`
      <div class="modal" role="dialog" aria-modal="true" aria-label="Help center">
        <div class="h">
          <div class="ttl">${e?"ヘルプセンター":"Help"}</div>
          <button class="close" aria-label="Close help" @click=${()=>this.close()}>×</button>
        </div>
        <nav class="nav" role="tablist" aria-label="Help sections">
          ${["quickstart","glossary","faq","shortcuts","about"].map(t=>d`
            <button class=${this.section===t?"on":""} role="tab"
              aria-selected=${this.section===t}
              @click=${()=>this.section=t}>
              ${t==="quickstart"?e?"🚀 クイックスタート":"🚀 Quickstart":t==="glossary"?e?"📖 用語集":"📖 Glossary":t==="faq"?e?"? FAQ":"? よくある質問":t==="shortcuts"?e?"⌨ ショートカット":"⌨ Shortcuts":e?"ℹ 概要":"ℹ About"}
            </button>
          `)}
        </nav>
        <div class="body" role="tabpanel">
          ${this.section==="quickstart"?this.renderQuickstart():this.section==="glossary"?this.renderGlossary():this.section==="faq"?this.renderFaq():this.section==="shortcuts"?this.renderShortcuts():this.renderAbout()}
        </div>
        <div class="f">
          <span>${e?d`<kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> キーでいつでもヘルプを再表示`:d`Press <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> any time to reopen`}</span>
          <span>nvsim · Apache-2.0 OR MIT</span>
        </div>
      </div>
    `}};ge.styles=x`
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
  `;Xe([h()],ge.prototype,"open",2);Xe([h()],ge.prototype,"section",2);Xe([h()],ge.prototype,"query",2);ge=Xe([k("nv-help")],ge);var Qa=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Mt=(e,t,a,s)=>{for(var i=s>1?void 0:s?Xa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Qa(t,a,i),i};let Ke=class extends w{constructor(){super(...arguments),this.view="home",this.onGlobalKeydown=e=>{const t=e.ctrlKey||e.metaKey,a=e.key.toLowerCase(),s=e.target,i=s?.tagName==="INPUT"||s?.tagName==="TEXTAREA"||s?.isContentEditable;if(t&&a==="r"&&!i){e.preventDefault();const r=_()==="ja";pe({title:r?"パイプラインをリセットしますか？":"Reset pipeline?",body:`<p>${r?"フレームストリームをクリアし、時間 <code>t</code> を0に戻します。":"Clears the frame stream and rewinds <code>t</code> to 0."}</p>`,buttons:[{label:r?"キャンセル":"Cancel",variant:"ghost"},{label:r?"リセット":"Reset",variant:"danger",onClick:async()=>{await y()?.reset(),p("warn","pipeline reset · t=0"),N(r?"パイプラインをリセットしました":"Pipeline reset","⟳")}}]})}else t&&e.key===","&&!i&&(e.preventDefault(),window.dispatchEvent(new CustomEvent("open-settings")))}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onGlobalKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onGlobalKeydown)}render(){const e=this.view==="home";return d`
      <a class="skip-link" href="#main-content"
        @click=${t=>{t.preventDefault(),this.shadowRoot?.querySelector(".main")?.focus()}}>
        Skip to main content
      </a>
      <div class="app ${e?"simple":""}" @navigate=${t=>this.view=t.detail}>
        <nv-rail .view=${this.view}></nv-rail>
        <nv-topbar></nv-topbar>
        <nv-sidebar></nv-sidebar>
        <main class="main" id="main-content" tabindex="-1" role="main" aria-label="Main view">
          ${this.view==="home"?d`<nv-home></nv-home>`:this.view==="apps"?d`<nv-app-store></nv-app-store>`:this.view==="ghost-murmur"?d`<nv-ghost-murmur></nv-ghost-murmur>`:this.view==="inspector"?d`<nv-inspector expanded .pinTab=${"signal"}></nv-inspector>`:this.view==="witness"?d`<nv-inspector expanded .pinTab=${"witness"}></nv-inspector>`:d`<nv-scene></nv-scene>`}
        </main>
        <nv-inspector
          .pinTab=${this.view==="inspector"?"signal":this.view==="witness"?"witness":null}>
        </nv-inspector>
        <nv-console></nv-console>
      </div>
      <nv-toast></nv-toast>
      <nv-modal></nv-modal>
      <nv-palette></nv-palette>
      <nv-debug-hud></nv-debug-hud>
      <nv-settings-drawer></nv-settings-drawer>
      <nv-onboarding></nv-onboarding>
      <nv-help></nv-help>
    `}};Ke.styles=x`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      background: var(--bg-0);
    }
    .skip-link {
      position: absolute;
      top: -40px;
      left: 8px;
      padding: 6px 12px;
      background: var(--accent);
      color: #1a0f00;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.15s;
    }
    .skip-link:focus { top: 8px; }
    .app {
      display: grid;
      grid-template-columns: 56px 280px 1fr 340px;
      grid-template-rows: 48px 1fr 220px;
      grid-template-areas:
        'rail topbar topbar topbar'
        'rail sidebar main inspector'
        'rail sidebar console inspector';
      height: 100vh;
      width: 100vw;
    }
    /* Home view simplifies: hides sidebar / inspector / console so the
       hero gets the full screen. Power-user panels stay one rail click away. */
    .app.simple {
      grid-template-columns: 56px 1fr;
      grid-template-rows: 48px 1fr;
      grid-template-areas:
        'rail topbar'
        'rail main';
    }
    .app.simple nv-sidebar,
    .app.simple nv-inspector,
    .app.simple nv-console { display: none; }
    nv-rail { grid-area: rail; }
    nv-topbar { grid-area: topbar; }
    nv-sidebar { grid-area: sidebar; }
    .main { grid-area: main; min-width: 0; min-height: 0; position: relative; overflow: hidden; }
    nv-inspector { grid-area: inspector; }
    nv-console { grid-area: console; min-height: 0; }
    @media (max-width: 1180px) {
      .app {
        grid-template-columns: 56px 1fr 320px;
        grid-template-areas:
          'rail topbar topbar'
          'rail main inspector'
          'rail console console';
      }
      nv-sidebar { display: none; }
    }
    @media (max-width: 860px) {
      .app {
        grid-template-columns: 1fr;
        grid-template-rows: 52px 1fr 200px;
        grid-template-areas:
          'topbar'
          'main'
          'console';
      }
      nv-rail, nv-sidebar, nv-inspector { display: none; }
    }
  `;Mt([h()],Ke.prototype,"view",2);Ke=Mt([k("nv-app")],Ke);function Za(e,t,a){const s=e.getUint32(t+0,!0),i=e.getUint16(t+4,!0),r=e.getUint16(t+6,!0),n=e.getUint16(t+8,!0),l=e.getBigUint64(t+12,!0),c=e.getFloat32(t+20,!0),m=e.getFloat32(t+24,!0),P=e.getFloat32(t+28,!0),C=e.getFloat32(t+32,!0),E=e.getFloat32(t+36,!0),ye=e.getFloat32(t+40,!0),ae=e.getFloat32(t+44,!0),xe=e.getFloat32(t+48,!0);return{magic:s,version:i,flags:r,sensorId:n,tUs:l,bPt:[c,m,P],sigmaPt:[C,E,ye],noiseFloorPtSqrtHz:ae,temperatureK:xe,raw:a.subarray(t,t+60)}}function Rt(e){const a=new DataView(e.buffer,e.byteOffset,e.byteLength),s=[];for(let i=0;i+60<=e.byteLength;i+=60)s.push(Za(a,i,e));return s}class es{constructor(){this.nextId=1,this.pending=new Map,this.frameSubs=new Set,this.eventSubs=new Set,this.bootInfo=null,this.worker=new Worker(new URL("/RuView/nvsim/assets/worker-C19MRcXs.js",import.meta.url),{type:"module"}),this.worker.addEventListener("message",t=>this.onMessage(t)),this.worker.addEventListener("error",t=>this.eventSubs.forEach(a=>a({type:"log",level:"err",msg:String(t.message)})))}onMessage(t){const a=t.data;if(a.type==="frames"){const s=a.batch,i=new Uint8Array(s),n={frames:Rt(i),bytes:i};this.frameSubs.forEach(c=>c(n));const l=a.fps;l>0&&this.eventSubs.forEach(c=>c({type:"fps",value:l}));return}if(a.type==="state"){this.eventSubs.forEach(s=>s({type:"state",running:!!a.running,t:0,framesEmitted:Number(a.framesEmitted??0)}));return}if(a.type!=="ready"){if(a.type==="err"&&a.id==null){this.eventSubs.forEach(s=>s({type:"log",level:"err",msg:String(a.msg)}));return}if(typeof a.id=="number"&&this.pending.has(a.id)){const s=this.pending.get(a.id);this.pending.delete(a.id),a.type==="err"?s.reject(new Error(String(a.msg))):s.resolve(a)}}}rpc(t,a=[]){const s=this.nextId++;return new Promise((i,r)=>{this.pending.set(s,{resolve:i,reject:r}),this.worker.postMessage({...t,id:s},a)})}async boot(){if(this.bootInfo)return this.bootInfo;const a=await this.rpc({type:"boot",base:"/RuView/nvsim/"});return this.bootInfo={buildVersion:a.buildVersion,frameMagic:a.frameMagic,frameBytes:a.frameBytes,expectedWitnessHex:a.expectedWitnessHex},this.bootInfo}async loadScene(t){await this.rpc({type:"setScene",json:JSON.stringify(t)})}async setConfig(t){await this.rpc({type:"setConfig",json:JSON.stringify(t)})}async setSeed(t){await this.rpc({type:"setSeed",seed:Number(t&0xFFFFFFFFn)})}async reset(){await this.rpc({type:"reset"})}async run(t){await this.rpc({type:"run"})}async pause(){await this.rpc({type:"pause"})}async step(t,a){await this.rpc({type:"step"})}onFrames(t){this.frameSubs.add(t)}onEvent(t){this.eventSubs.add(t)}async generateWitness(t){const a=await this.rpc({type:"witnessGenerate",samples:t});return new Uint8Array(a.witness)}async verifyWitness(t){const a=t.slice().buffer,s=await this.rpc({type:"witnessVerify",samples:256,expected:a},[a]);return s.ok?{ok:!0}:{ok:!1,actual:new Uint8Array(s.actual)}}async runTransient(t,a,s,i){const r=await this.rpc({type:"runTransient",scene:JSON.stringify(t),config:JSON.stringify(a),seed:Number(s&0xFFFFFFFFn),samples:i});return{bRecoveredT:[r.bRecoveredT[0],r.bRecoveredT[1],r.bRecoveredT[2]],bMagT:r.bMagT,noiseFloorPtSqrtHz:r.noiseFloorPtSqrtHz,sigmaPt:[r.sigmaPt[0],r.sigmaPt[1],r.sigmaPt[2]],nFrames:r.nFrames,witnessHex:r.witnessHex}}async exportProofBundle(){const t=await this.generateWitness(256),a=Array.from(t).map(r=>r.toString(16).padStart(2,"0")).join(""),s=this.bootInfo??await this.boot(),i=JSON.stringify({kind:"nvsim-proof-bundle",version:s.buildVersion,seed:"0x0000002A",nSamples:256,witness:a,expected:s.expectedWitnessHex,ok:a===s.expectedWitnessHex,ts:new Date().toISOString()},null,2);return new Blob([i],{type:"application/json"})}async buildId(){return(await this.rpc({type:"buildId"})).buildId}async close(){this.worker.terminate()}}function ts(e){return e.startsWith("ws://")||e.startsWith("wss://")?e:e.replace(/^http/,"ws")}class as{constructor(t){this.ws=null,this.bootInfo=null,this.frameSubs=new Set,this.eventSubs=new Set,this.running=!1,this.framesEmitted=0,this.fpsLast=performance.now(),this.fpsCount=0,this.baseUrl=t.replace(/\/$/,""),this.wsUrl=`${ts(this.baseUrl)}/ws/stream`}async json(t,a){const s=await fetch(`${this.baseUrl}${t}`,{...a,headers:{"content-type":"application/json",...a?.headers??{}}});if(!s.ok)throw new Error(`${t}: ${s.status} ${s.statusText}`);return await s.json()}async boot(){if(this.bootInfo)return this.bootInfo;const t=await this.json("/api/health");return this.bootInfo={buildVersion:t.nvsim_version,frameMagic:t.magic,frameBytes:t.frame_bytes,expectedWitnessHex:t.expected_witness_hex},this.openWs(),this.bootInfo}openWs(){if(this.ws)return;const t=new WebSocket(this.wsUrl);t.binaryType="arraybuffer",t.onopen=()=>{this.eventSubs.forEach(a=>a({type:"log",level:"ok",msg:`ws/stream connected · ${this.wsUrl}`}))},t.onclose=()=>{this.ws=null,this.eventSubs.forEach(a=>a({type:"log",level:"warn",msg:"ws/stream closed"}))},t.onerror=()=>{this.eventSubs.forEach(a=>a({type:"log",level:"err",msg:`ws/stream error · ${this.wsUrl}`}))},t.onmessage=a=>{if(!(a.data instanceof ArrayBuffer))return;const s=new Uint8Array(a.data),i=Rt(s);if(i.length===0)return;const r={frames:i,bytes:s};this.frameSubs.forEach(l=>l(r)),this.framesEmitted+=i.length,this.fpsCount+=i.length;const n=performance.now();if(n-this.fpsLast>=1e3){const l=this.fpsCount*1e3/(n-this.fpsLast);this.eventSubs.forEach(c=>c({type:"fps",value:l})),this.fpsLast=n,this.fpsCount=0}},this.ws=t}async loadScene(t){await this.json("/api/scene",{method:"PUT",body:JSON.stringify(t)})}async setConfig(t){await this.json("/api/config",{method:"PUT",body:JSON.stringify(t)})}async setSeed(t){await this.json("/api/seed",{method:"PUT",body:JSON.stringify({seed_hex:"0x"+t.toString(16).toUpperCase().padStart(16,"0")})})}async reset(){await this.json("/api/reset",{method:"POST"}),this.running=!1,this.framesEmitted=0,this.eventSubs.forEach(t=>t({type:"state",running:!1,t:0,framesEmitted:0}))}async run(t){await this.json("/api/run",{method:"POST"}),this.running=!0,this.eventSubs.forEach(a=>a({type:"state",running:!0,t:0,framesEmitted:this.framesEmitted}))}async pause(){await this.json("/api/pause",{method:"POST"}),this.running=!1,this.eventSubs.forEach(t=>t({type:"state",running:!1,t:0,framesEmitted:this.framesEmitted}))}async step(t,a){await this.json("/api/step",{method:"POST",body:JSON.stringify({direction:t,dt_ms:a})})}onFrames(t){this.frameSubs.add(t)}onEvent(t){this.eventSubs.add(t)}async generateWitness(t){const a=await this.json("/api/witness/generate",{method:"POST",body:JSON.stringify({samples:t})}),s=new Uint8Array(32);for(let i=0;i<32;i++)s[i]=parseInt(a.witness_hex.slice(i*2,i*2+2),16);return s}async verifyWitness(t){const a=Array.from(t).map(r=>r.toString(16).padStart(2,"0")).join(""),s=await this.json("/api/witness/verify",{method:"POST",body:JSON.stringify({expected_hex:a,samples:256})});if(s.ok)return{ok:!0};const i=new Uint8Array(32);for(let r=0;r<32;r++)i[r]=parseInt(s.actual_hex.slice(r*2,r*2+2),16);return{ok:!1,actual:i}}async exportProofBundle(){const t=await fetch(`${this.baseUrl}/api/export-proof`,{method:"POST"}).then(a=>a.text());return new Blob([t],{type:"application/json"})}async runTransient(t,a,s,i){return{bRecoveredT:[0,0,0],bMagT:0,noiseFloorPtSqrtHz:0,sigmaPt:[0,0,0],nFrames:0,witnessHex:"(transient route not available in WS transport — V1 limitation)"}}async buildId(){return`nvsim@${(this.bootInfo??await this.boot()).buildVersion} (ws)`}async close(){this.ws?.close(),this.ws=null}}function bt(e){document.documentElement.setAttribute("data-theme",e)}function ft(e){document.body.classList.remove("density-comfy","density-default","density-compact"),document.body.classList.add(`density-${e}`)}function yt(e){document.body.classList.toggle("reduce-motion",e)}(async()=>{const e=await W("theme")??"dark",t=await W("density")??"default",a=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,s=await W("motionReduced")??a;T.value=e,bt(e),I.value=t,ft(t),H.value=s,yt(s),b(()=>{bt(T.value),O("theme",T.value)}),b(()=>{ft(I.value),O("density",I.value)}),b(()=>{yt(H.value),O("motionReduced",H.value)});const i=await W("repl-history");i&&Array.isArray(i)&&(X.value=i),b(()=>{O("repl-history",X.value)});const r=await W("scene-positions");r&&Array.isArray(r)&&(ce.value=r),b(()=>{O("scene-positions",ce.value)});const n=await W("wsUrl")??"";n&&(B.value=n);const l=await W("transport")??"wasm";z.value=l,b(()=>{O("wsUrl",B.value)}),b(()=>{O("transport",z.value)});const c={},m=[],P=performance.now(),C=f=>{if(f.frames.length===0)return;const g=f.frames[f.frames.length-1];Q.value=g;const S=g.bPt[0]*1e-12,D=g.bPt[1]*1e-12,F=g.bPt[2]*1e-12;Ce.value=[S,D,F];const R=Math.sqrt(S*S+D*D+F*F);for(Z.value=R,Xt([S*1e9,D*1e9,F*1e9]),Zt(Math.min(1,Math.abs(F*1e9)/5+.3)),m.push(R);m.length>256;)m.shift();const De=kt.value;if(De.size===0)return;const zt=(performance.now()-P)/1e3;for(const we of De){const ut=Tt[we];if(!ut)continue;c[we]||(c[we]={});const Et={frame:g,bMagT:R,bRecoveredT:[S,D,F],bHistory:m,elapsedS:zt,state:c[we]};try{const se=ut(Et);if(!se)continue;const Pt=Array.isArray(se)?se:[se];for(const ie of Pt)Jt(ie),p("info",`<span class="k">[${ie.appId}]</span> <span class="s">${ie.eventName}</span> <span class="n">(${ie.eventId})</span>${ie.detail?" · "+ie.detail:""}`)}catch(se){p("warn",`[${we}] runtime error: ${se.message}`)}}};let E=null;async function ye(){try{E&&await E.close();const f=z.value;if(f==="ws"&&B.value.trim()){const g=new as(B.value.trim()),S=await g.boot();E=g,je.value=!0,et.value=null,V.value=S.expectedWitnessHex,ae(g),p("ok",`transport WS · ${B.value} · nvsim@${S.buildVersion}`)}else{f==="ws"&&p("warn","WS transport selected but no URL set — falling back to WASM");const g=new es,S=await g.boot();E=g,je.value=!0,et.value=null,V.value=S.expectedWitnessHex,ae(g),p("ok",`transport WASM · nvsim@${S.buildVersion} · magic=0x${S.frameMagic.toString(16).toUpperCase()}`)}Yt(E)}catch(f){const g=f.message;et.value=g,je.value=!1,p("err",`transport boot failed: ${g}`)}}function ae(f){f.onEvent(g=>{g.type==="log"&&p(g.level,g.msg),g.type==="fps"&&(M.value=g.value),g.type==="state"&&(it.value=BigInt(g.framesEmitted))}),f.onFrames(C)}let xe=!1;b(()=>{z.value,B.value,!xe&&(xe=!0,ye().finally(()=>{xe=!1}))}),p("info","nvsim — booting transport");let pt=null;b(()=>{const f=V.value,g=je.value;!f||!g||pt!==f&&(pt=f,(async()=>{const S=E;if(S)try{const D=new Uint8Array(32);for(let R=0;R<32;R++)D[R]=parseInt(f.slice(R*2,R*2+2),16);const F=await S.verifyWitness(D);if(F.ok)L.value=f,p("ok",`witness verified · determinism gate ✓ · transport=${z.value}`);else{const R=Array.from(F.actual).map(De=>De.toString(16).padStart(2,"0")).join("");L.value=R,p("err",`WITNESS MISMATCH · expected ${f.slice(0,16)}… got ${R.slice(0,16)}…`)}}catch(D){p("warn",`witness verify skipped: ${D.message}`)}})())}),Gt.value="(reference scene)"})();
//# sourceMappingURL=index-DFUKjt32.js.map
