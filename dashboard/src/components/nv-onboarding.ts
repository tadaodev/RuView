import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getLocale, t } from '../i18n';
import { kvGet, kvSet } from '../store/persistence';

interface TourStep {
  icon: string;
  title: string;
  body: string;
  hint?: string;
  cta?: { label: string; run?: () => void };
}

const STEPS_EN: TourStep[] = [
  {
    icon: '👋',
    title: 'Welcome to nvsim',
    body: `<p style="font-size:14px; line-height:1.6;">
        <b>nvsim</b> is an open-source, deterministic forward simulator for
        <b>nitrogen-vacancy (NV) diamond magnetometry</b>. Compiled from Rust to
        WebAssembly (WASM), it runs right here in your browser.</p>
      <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">
        This ~60-second guided tour walks you through the four core panels, the app store,
        the Ghost Murmur research view, and nvsim's defining feature: determinism witness proofs.</p>
      <p style="font-size:11.5px; color:var(--ink-3); line-height:1.5; margin-top:14px;">
        You can hit <kbd>Esc</kbd> any time to skip. Replay from <b>Settings → Help</b>.</p>`,
    cta: { label: 'Start tour →' },
  },
  {
    icon: '🌐',
    title: '3D Scene Canvas',
    body: `<p>The central panel is the <b>magnetic scene</b> — four magnetic sources surrounding an NV-diamond sensor at the origin.</p>
      <p>Click-drag the four spheres (<b>rebar distractor</b>, <b>heart proxy dipole</b>, <b>60 Hz mains loop</b>, <b>ferrous door eddy loop</b>) to move them in 3D. Field lines update in real time.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Top-left toolbar: zoom, fit, toggle layers. Bottom-right: playback controls. Dragged positions persist in IndexedDB.</p>`,
    hint: 'Try dragging the heart_proxy sphere after this tour.',
  },
  {
    icon: '▶',
    title: 'Pipeline Execution',
    body: `<p>Hit <b>▶ Run</b> in the topbar (or press <kbd>Space</kbd>) to start the live frame stream. The simulator runs ~1.8 kHz on x86_64 WASM.</p>
      <p>The topbar FPS counter tracks real-time throughput. The right inspector's B-vector trace and frame sparkline update live.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        <kbd>Space</kbd> toggles run/pause. Reset (<kbd>Ctrl+R / ⌘R</kbd>) rewinds time <code>t</code> to 0 while keeping the seed.</p>`,
  },
  {
    icon: '🔍',
    title: 'Inspector — 3 Tabs, 2 Depths',
    body: `<p>The right rail holds the live inspector: <b>Signal</b> (B-vector trace + sparkline), <b>Frame</b> (decoded MagFrame fields + 60-byte hex dump), and <b>Witness</b> (SHA-256 determinism gate).</p>
      <p>Click the <b>magnifier icon</b> on the left rail for full-width inspector mode; click the <b>shield icon</b> for full-width witness mode.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Keys <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> switch inspector tabs from anywhere.</p>`,
  },
  {
    icon: '✓',
    title: 'Witness Proofs — Determinism Gate',
    body: `<p>nvsim's core commitment: same <code>(scene, config, seed)</code> → byte-identical SHA-256 hash across machines and OSes.</p>
      <p>Open the <b>Witness</b> tab and hit <b>Verify witness</b>. The dashboard re-runs the canonical reference scene (<code>seed=42, N=256</code>) and asserts the hash against <code style="font-size:10.5px;">cc8de9b01b0ff5bd…</code> pinned at build time.</p>
      <p>A green check proves all physical constants (γ_e, D_GS, μ₀, T₂*), PRNG streams, and frame layouts match perfectly.</p>`,
  },
  {
    icon: '🎚',
    title: 'Tunables — Live Parameter Adjustment',
    body: `<p>The left sidebar's <b>Tunables</b> panel exposes four live sliders:</p>
      <ul style="margin:0 0 12px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.6;">
        <li><b>Digitiser f_s</b> (1–100 kHz) — Sampling rate</li>
        <li><b>Lock-in f_mod</b> (0.1–5 kHz) — Microwave modulation frequency</li>
        <li><b>Integration dt</b> (0.1–10 ms) — Integration time per sample</li>
        <li><b>Shot noise</b> (on/off) — Quantum noise floor toggle</li>
      </ul>
      <p>Edits debounce 300 ms then rebuild the WASM pipeline automatically. Watch the noise floor and B-vector variance shift in real time.</p>`,
  },
  {
    icon: '👻',
    title: 'Ghost Murmur — Research View',
    body: `<p>Click the ghost icon on the left rail to open the <b>Ghost Murmur</b> view — an audit of reported NV-diamond heartbeat detection claims against open physics literature.</p>
      <p>Includes a live <b>"Try it yourself" sandbox</b>: place a heart dipole at any distance and run the real Rust pipeline to see if it would actually detect.</p>`,
  },
  {
    icon: '🛍',
    title: 'App Store — 65 Edge Modules',
    body: `<p>Click the grid icon to open the <b>App Store</b> — RuView's catalog of hot-loadable WASM edge modules across 9 categories (medical, security, building, retail, industrial, signal, learning, autonomy, specialized).</p>
      <p>Each card lists ID, category, status, compute budget, and ADR references. Toggles activate apps for this session.</p>`,
  },
  {
    icon: '⌨',
    title: 'Console + REPL Command Line',
    body: `<p>The bottom panel features a 5-filter log (<b>All / Info / Warn / Error / Debug</b>) and REPL command line.</p>
      <p>Try REPL commands: <code>help</code>, <code>scene.list</code>, <code>sensor.config</code>, <code>run</code>, <code>pause</code>, <code>seed [hex]</code>, <code>proof.verify</code>, <code>status</code>, <code>clear</code>.</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        Press <kbd>/</kbd> anywhere to focus REPL; press <kbd>Ctrl+K / ⌘K</kbd> for the command palette.</p>`,
  },
  {
    icon: '🚀',
    title: 'You are All Set!',
    body: `<p style="font-size:14px;">That completes the tour. Quick key reference:</p>
      <ul style="margin:0 0 14px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.7;">
        <li>Press <kbd>?</kbd> any time to open the help center (Quickstart / Glossary / FAQ / Shortcuts / About).</li>
        <li>Press <kbd>Ctrl+K / ⌘K</kbd> for the command palette.</li>
        <li>Press <kbd>&#96;</kbd> to toggle the debug HUD.</li>
        <li>Settings (<kbd>Ctrl+, / ⌘,</kbd>) lets you switch theme, density, motion, transport, and replay this tour.</li>
      </ul>
      <p style="font-size:12.5px; color:var(--ink-3); line-height:1.55;">
        Source: <code>github.com/ruvnet/RuView</code> · Apache-2.0 OR MIT · ADRs 089/090/091/092/093.</p>`,
    cta: { label: 'Get started →' },
  },
];

const STEPS_JA: TourStep[] = [
  {
    icon: '👋',
    title: 'nvsim へようこそ',
    body: `<p style="font-size:14px; line-height:1.6;">
        <b>nvsim</b> は、<b>窒素-空孔（NV）ダイヤモンド磁気センシング</b>のためのオープンソース・確定性順方向シミュレータです。RustクレートからWebAssembly（WASM）へコンパイルされ、現在ブラウザ上で高速動作しています。</p>
      <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">
        この約60秒のガイダンスツアーでは、4つの主要パネル、アプリストア、Ghost Murmur研究ビュー、そしてnvsimの特徴である確定性証明（Witness）の仕組みを解説します。</p>
      <p style="font-size:11.5px; color:var(--ink-3); line-height:1.5; margin-top:14px;">
        いつでも <kbd>Esc</kbd> キーでスキップ可能です。ツアーは <b>設定 → ヘルプ</b> からいつでも再再生できます。</p>`,
    cta: { label: 'ツアーを開始する →' },
  },
  {
    icon: '🌐',
    title: '3Dシーンキャンバス',
    body: `<p>中央のメインパネルには<b>磁気空間シーン</b>が表示されています。4つの磁気源と中心のNVダイヤモンドセンサーで構成されています。</p>
      <p>4つの球体（<b>鉄筋コイル</b>、<b>心拍プロキシ双極子</b>、<b>60Hz商用電源</b>、<b>スチール扉渦電流</b>）はマウスで直接ドラッグ移動できます。電波・磁場ラインがリアルタイムで各磁気源とセンサーを接続します。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        左上ツールバー: 拡大/縮小、フィット、レイヤー表示切替。右下: シミュレーション操作（ステップ/再生/速度切り替え）。ドラッグ位置は次回起動時も保存されます。</p>`,
    hint: 'ツアー終了後、心拍プロキシ（heart_proxy）をドラッグしてみてください。',
  },
  {
    icon: '▶',
    title: 'パイプラインの実行',
    body: `<p>トップバーの <b>▶ 実行</b> ボタンを押すか、<kbd>Space</kbd> キーを押すと、リアルタイムフレームストリームが開始されます。x86_64 WASM上で約1.8 kHzの超高速で実行されます。</p>
      <p>トップバーのFPS表示がリアルタイムスループットを計測します。右側インスペクターのBベクトル波形およびフレームストリームのスパークラインが即座に更新されます。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        <kbd>Space</kbd> キーでいつでも実行/一時停止を切り替えられます。リセット (<kbd>Ctrl+R / ⌘R</kbd>) はシード値を維持したまま時間 <code>t</code> を0に戻します。</p>`,
  },
  {
    icon: '🔍',
    title: 'インスペクター — 3つのタブと深度',
    body: `<p>右側レールにはライブインスペクターが表示されます: <b>シグナル (Signal)</b>（Bベクトル波形 + スパークライン）、<b>フレーム (Frame)</b>（デコード済みMagFrame領域 + 60バイトヘックスダンプ）、<b>ウィトネス (Witness)</b>（SHA-256確定性検証ゲート）。</p>
      <p>左側レールの<b>虫眼鏡アイコン</b>をクリックすると、インスペクターがメインエリアに拡大表示されます。<b>シールドアイコン</b>をクリックするとWitnessに特化した拡大表示が行われます。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        数字キー <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> でどこからでも3つのインスペクタータブを瞬時に切り替えられます。</p>`,
  },
  {
    icon: '✓',
    title: 'Witness（確定性証明）— nvsimの独自性',
    body: `<p>nvsimの最も重要な特徴: 同一の <code>(scene, config, seed)</code> ➔ 実行環境やマシンを問わずバイト単位で完全一致するSHA-256ハッシュを生成します。</p>
      <p><b>Witness</b> タブを開き、<b>Verify witness（ウィトネス検証）</b> を押してください。標準参照シーン（<code>seed=42, N=256</code>）のハッシュを再計算し、コンパイル時に固定されたハッシュ値（<code style="font-size:10.5px;">cc8de9b01b0ff5bd…</code>）と完全一致することを証明します。</p>
      <p>緑のチェックマークが表示されれば、物理定数（γ_e, D_GS, μ₀, T₂*）、PRNGストリーム、フレーム構造がすべて完全一致していることが担保されます。</p>`,
  },
  {
    icon: '🎚',
    title: 'チューナブルパラメータ — ライブ調整',
    body: `<p>左サイドバーの <b>Tunables（パラメータ設定）</b> パネルには4つのスライダーがあります:</p>
      <ul style="margin:0 0 12px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.6;">
        <li><b>サンプリングレート</b> (1–100 kHz) — デジタイザのフレームレート</li>
        <li><b>ロックイン f_mod</b> (0.1–5 kHz) — マイクロ波変調周波数</li>
        <li><b>積分時間 t</b> (0.1–10 ms) — サンプルごとの積分時間</li>
        <li><b>ショットノイズ</b> (オン/オフ) — 量子ノイズの切り替え</li>
      </ul>
      <p>スライダーを変更すると300msデバウンスののちWASMパイプラインが自動再構築されます。シグナル波形上のノイズフロアやBベクトルの広がり方の変化を確認できます。</p>`,
  },
  {
    icon: '👻',
    title: 'Ghost Murmur — 研究検証ビュー',
    body: `<p>左レールのゴーストアイコンをクリックすると、公開論文に基づく心拍検出プログラム（Ghost Murmur）の物理的検証ビューが開きます。</p>
      <p>心拍双極子による磁場が現実の検出限界（ショット雑音限界やADC量子化床）を超えるかを検証し、実証実験と理論モデルの技術差を明示します。</p>
      <p><b>「自分で試す」サンドボックス</b>が含まれており、心拍双極子をセンサーから任意の距離に配置して実行することで、実際のnvsimパイプラインが信号をどこまで復元できるかを検証できます。</p>`,
  },
  {
    icon: '🛍',
    title: 'App Store — 65種のエッジモジュール',
    body: `<p>グリッドアイコンをクリックすると、<b>App Store</b> が開きます。RuViewが提供するホットロード可能なWASMエッジモジュールがカテゴリ別（医療、防犯・警備、スマートビル、店舗、産業、信号処理、学習、自律走行、特殊）に整理されています。</p>
      <p>各カードにはID、カテゴリ、ステータス、計算バジェット、ADR参照番号が記載されています。トグルスイッチでセッション内での有効化を切り替えられます。</p>`,
  },
  {
    icon: '⌨',
    title: 'コンソール + REPLコマンドライン',
    body: `<p>下部パネルには、5つのフィルタタブ（<b>すべて / 情報 / 警告 / エラー / デバッグ</b>）付きのログとREPLプロンプトがあります。</p>
      <p>REPLコマンド例: <code>help</code>, <code>scene.list</code>, <code>sensor.config</code>, <code>run</code>, <code>pause</code>, <code>seed [hex]</code>, <code>proof.verify</code>, <code>status</code>, <code>clear</code> など。</p>
      <p style="font-size:12.5px; color:var(--ink-3);">
        どこからでも <kbd>/</kbd> キーを押すとREPLプロンプトにフォーカスします。<kbd>Ctrl+K / ⌘K</kbd> でコマンドパレットが開きます。</p>`,
  },
  {
    icon: '🚀',
    title: '準備が完了しました',
    body: `<p style="font-size:14px;">ツアーは以上です。いくつかの便利なショートカット:</p>
      <ul style="margin:0 0 14px; padding-left:18px; font-size:13px; color:var(--ink-2); line-height:1.7;">
        <li><kbd>?</kbd> キーでいつでもヘルプセンターを開けます（クイックスタート / 用語集 / FAQ / ショートカット）。</li>
        <li><kbd>Ctrl+K / ⌘K</kbd> でコマンドパレットを開きます。</li>
        <li><kbd>&#96;</kbd> キーでデバッグHUDをトグル表示できます。</li>
        <li>設定 (<kbd>Ctrl+, / ⌘,</kbd>) でテーマ、表示密度、ツアーの再再生が可能です。</li>
      </ul>
      <p style="font-size:12.5px; color:var(--ink-3); line-height:1.55;">
        リポジトリ: <code>github.com/ruvnet/RuView</code> · Apache-2.0 OR MIT</p>`,
    cta: { label: 'ダッシュボードを開始する →' },
  },
];

function getSteps(): TourStep[] {
  return getLocale() === 'ja' ? STEPS_JA : STEPS_EN;
}

@customElement('nv-onboarding')
export class NvOnboarding extends LitElement {
  @state() private open = false;
  @state() private step = 0;

  static styles = css`
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
  `;

  override async connectedCallback(): Promise<void> {
    super.connectedCallback();
    window.addEventListener('nv-show-tour', this.show as EventListener);
    const seen = await kvGet<boolean>('onboarding-seen');
    if (!seen) {
      this.open = true;
      this.setAttribute('open', '');
    }
  }
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('nv-show-tour', this.show as EventListener);
  }

  private show = (): void => {
    this.step = 0;
    this.open = true;
    this.setAttribute('open', '');
  };

  private async dismiss(): Promise<void> {
    this.open = false;
    this.removeAttribute('open');
    await kvSet('onboarding-seen', true);
  }

  private next(): void {
    const steps = getSteps();
    const s = steps[this.step];
    s.cta?.run?.();
    if (this.step < steps.length - 1) this.step++;
    else void this.dismiss();
  }

  private prev(): void {
    if (this.step > 0) this.step--;
  }

  override render() {
    const steps = getSteps();
    const s = steps[this.step];
    const isLast = this.step === steps.length - 1;
    const isJa = getLocale() === 'ja';
    return html`
      <div class="card" role="dialog" aria-modal="true" aria-label=${isJa ? 'ウェルカムツアー' : 'Welcome tour'}>
        <div class="h">
          <div class="icon" aria-hidden="true">${s.icon}</div>
          <div class="title-wrap">
            <h2>${s.title}</h2>
            <div class="step-label">${isJa ? `ステップ ${this.step + 1} / ${steps.length}` : `Step ${this.step + 1} of ${steps.length}`}</div>
          </div>
          <button class="skip" @click=${() => this.dismiss()} aria-label=${isJa ? 'ツアーをスキップ' : 'Skip tour'} title=${isJa ? 'ツアーをスキップ' : 'Skip tour'}>×</button>
        </div>
        <div class="body">
          <div .innerHTML=${s.body}></div>
          ${s.hint ? html`<div class="hint">${s.hint}</div>` : ''}
        </div>
        <div class="footer">
          <div class="progress">
            <div class="dots">
              ${steps.map((_, i) => html`
                <div class="dot ${i === this.step ? 'active' : i < this.step ? 'done' : ''}"></div>
              `)}
            </div>
            <div class="progress-label">${this.step + 1} / ${steps.length}</div>
          </div>
          ${this.step > 0
            ? html`<button class="ghost" @click=${() => this.prev()}>${t('onboarding.back', '← 戻る')}</button>`
            : html`<button class="ghost" @click=${() => this.dismiss()}>${t('onboarding.skip', 'スキップ')}</button>`}
          <button class="primary" @click=${() => this.next()}>
            ${s.cta?.label ?? (isLast ? t('onboarding.done', '完了') : t('onboarding.next', '次へ →'))}
          </button>
        </div>
      </div>
    `;
  }
}
