import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { toast } from './nv-toast';
import { openModal } from './nv-modal';
import {
  getClient, theme, expectedWitness, witnessHex, witnessVerified, pushLog, running,
} from '../store/appStore';
import { t, getLocale } from '../i18n';

interface Cmd { ico: string; label: string; kbd?: string; run: () => void; }

@customElement('nv-palette')
export class NvPalette extends LitElement {
  @state() private open = false;
  @state() private filter = '';
  @state() private idx = 0;
  @query('#palette-input') private inputEl!: HTMLInputElement;

  static styles = css`
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
  `;

  private get cmds(): Cmd[] {
    const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.userAgent);
    const modKey = isMac ? '⌘' : 'Ctrl+';
    const isJa = getLocale() === 'ja';
    return [
      { ico: '▶', label: t('palette.runPipeline', 'Run pipeline'), kbd: 'Space', run: async () => { await getClient()?.run(); running.value = true; toast(t('palette.pipelineRunning', 'Pipeline running'), '▶'); } },
      { ico: '❚', label: t('palette.pausePipeline', 'Pause pipeline'), run: async () => { await getClient()?.pause(); running.value = false; toast(t('palette.paused', 'Paused'), '❚❚'); } },
      { ico: '+', label: t('palette.newScene', 'New scene…'), kbd: `${modKey}N`, run: () => openModal({
        title: isJa ? '新規シーン構築' : 'New scene',
        body: `<p>${isJa ? '新しい磁気環境シーンを構築します。パラメータを指定してパイプラインへ直接読み込ませます。' : 'Build a fresh magnetic scene. The dashboard generates the JSON and pushes it to the running pipeline.'}</p>
          <label>${isJa ? 'シーン名' : 'Name'}</label>
          <input type="text" id="ns-name" value="custom-scene-${Date.now().toString(36)}" />
          <label>${isJa ? '心拍プロキシ双極子モーメント (A·m²)' : 'Heart-proxy dipole moment (A·m²)'}</label>
          <input type="text" id="ns-moment" value="1.0e-6" />
          <label>${isJa ? '心拍 → センサー間距離 (m)' : 'Distance heart → sensor (m)'}</label>
          <input type="text" id="ns-distance" value="0.5" />
          <label>${isJa ? '鉄筋コイル（鋼鉄 χ=5000）を配置しますか？' : 'Add ferrous distractor at +x = 1 m?'}</label>
          <select id="ns-ferrous">
            <option value="0">${isJa ? 'いいえ' : 'No'}</option>
            <option value="1" selected>${isJa ? 'はい (鉄筋コイル, χ=5000)' : 'Yes (steel coil, χ=5000)'}</option>
          </select>
          <label>${isJa ? '60 Hz 商用電源電流ループを配置しますか？' : 'Add 60 Hz mains-current loop?'}</label>
          <select id="ns-mains">
            <option value="0">${isJa ? 'いいえ' : 'No'}</option>
            <option value="1" selected>${isJa ? 'はい (2 A ループ, 半径5cm, +y = 1 m)' : 'Yes (2 A loop, 5 cm radius, +y = 1 m)'}</option>
          </select>`,
        buttons: [
          { label: isJa ? 'キャンセル' : 'Cancel', variant: 'ghost' },
          { label: isJa ? '作成' : 'Create', variant: 'primary', onClick: async () => {
            const root = document.querySelector('nv-app')?.shadowRoot?.querySelector('nv-modal')?.shadowRoot;
            if (!root) return;
            const name = (root.querySelector<HTMLInputElement>('#ns-name')?.value ?? 'custom').trim();
            const m = parseFloat(root.querySelector<HTMLInputElement>('#ns-moment')?.value ?? '1e-6');
            const d = parseFloat(root.querySelector<HTMLInputElement>('#ns-distance')?.value ?? '0.5');
            const ferr = root.querySelector<HTMLSelectElement>('#ns-ferrous')?.value === '1';
            const mains = root.querySelector<HTMLSelectElement>('#ns-mains')?.value === '1';
            const scene = {
              dipoles: [{ position: [0, 0, d] as [number, number, number], moment: [0, 0, m] as [number, number, number] }],
              loops: mains ? [{
                centre: [0, 1, 0] as [number, number, number],
                normal: [0, 1, 0] as [number, number, number],
                radius: 0.05, current: 2.0, n_segments: 64,
              }] : [],
              ferrous: ferr ? [{ position: [1, 0, 0] as [number, number, number], volume: 1e-4, susceptibility: 5000 }] : [],
              eddy: [],
              sensors: [[0, 0, 0] as [number, number, number]],
              ambient_field: [1e-6, 0, 0] as [number, number, number],
            };
            await getClient()?.loadScene(scene);
            pushLog('ok', `scene <span class="s">${name}</span> loaded · 1 dipole · ${mains ? '1 loop · ' : ''}${ferr ? '1 ferrous · ' : ''}1 sensor`);
            toast(isJa ? `シーン "${name}" を読み込みました` : `Scene "${name}" loaded`, '+');
          } },
        ],
      }) },
      { ico: '📦', label: t('palette.exportProof', 'Export proof bundle…'), kbd: `${modKey}E`, run: async () => {
        const c = getClient(); if (!c) return;
        pushLog('dbg', 'building proof bundle…');
        try {
          const blob = await c.exportProofBundle();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `nvsim-proof-${Date.now()}.json`;
          a.click();
          URL.revokeObjectURL(url);
          pushLog('ok', `proof bundle exported · ${blob.size} bytes`);
          toast(isJa ? `証明バンドルを保存しました (${blob.size} B)` : `Proof bundle saved (${blob.size} B)`, '📦');
        } catch (e) { pushLog('err', `export failed: ${(e as Error).message}`); }
      } },
      { ico: '⟳', label: t('palette.resetPipeline', 'Reset pipeline'), kbd: `${modKey}R`, run: () => openModal({
        title: isJa ? 'パイプラインをリセットしますか？' : 'Reset pipeline?',
        body: `<p>${isJa ? 'フレームストリームをクリアし、時間 <code>t</code> を0に戻します。' : 'Clears the frame stream and rewinds <code>t</code> to 0.'}</p>`,
        buttons: [
          { label: isJa ? 'キャンセル' : 'Cancel', variant: 'ghost' },
          { label: isJa ? 'リセット' : 'Reset', variant: 'danger', onClick: async () => { await getClient()?.reset(); pushLog('warn', 'pipeline reset · t=0'); toast(isJa ? 'パイプラインをリセットしました' : 'Pipeline reset', '⟳'); } },
        ],
      }) },
      { ico: '✓', label: t('palette.verifyWitness', 'Verify witness'), run: async () => {
        const c = getClient(); if (!c) return;
        witnessVerified.value = 'pending';
        const exp = expectedWitness.value;
        const eb = new Uint8Array(32);
        for (let i = 0; i < 32; i++) eb[i] = parseInt(exp.slice(i * 2, i * 2 + 2), 16);
        const r = await c.verifyWitness(eb);
        if (r.ok) { witnessVerified.value = 'ok'; witnessHex.value = exp; toast(isJa ? 'ウィトネス検証完了' : 'Witness verified', '✓'); }
        else { witnessVerified.value = 'fail'; toast(isJa ? 'ウィトネス不一致エラー' : 'Witness mismatch!', '✗'); }
      } },
      { ico: '☼', label: t('palette.toggleTheme', 'Toggle theme'), kbd: `${modKey}/`, run: () => { theme.value = theme.value === 'dark' ? 'light' : 'dark'; } },
      { ico: '⚙', label: t('palette.openSettings', 'Open settings'), kbd: `${modKey},`, run: () => window.dispatchEvent(new CustomEvent('open-settings')) },
      { ico: '?', label: t('palette.shortcuts', 'Keyboard shortcuts…'), run: () => openModal({
        title: isJa ? 'キーボードショートカット一覧' : 'Keyboard shortcuts',
        body: `<div style="display:grid;grid-template-columns:auto 1fr;gap:6px 16px;font-size:13px;">
          <div><code>Ctrl+K / ⌘K</code></div><div>${isJa ? 'コマンドパレット' : 'Command palette'}</div>
          <div><code>Space</code></div><div>${isJa ? '再生 / 一時停止' : 'Play / pause'}</div>
          <div><code>Ctrl+R / ⌘R</code></div><div>${isJa ? 'パイプラインをリセット' : 'Reset'}</div>
          <div><code>Ctrl+, / ⌘,</code></div><div>${isJa ? '環境設定' : 'Settings'}</div>
          <div><code>Ctrl+/ / ⌘/</code></div><div>${isJa ? 'テーマ切替（ダーク/ライト）' : 'Toggle theme'}</div>
          <div><code>\`</code></div><div>${isJa ? 'デバッグHUD表示' : 'Debug HUD'}</div>
          <div><code>1 · 2 · 3</code></div><div>${isJa ? 'インスペクタータブ切替' : 'Inspector tabs'}</div>
          <div><code>Esc</code></div><div>${isJa ? 'モーダル / パレットを閉じる' : 'Close modal/palette'}</div>
          <div><code>/</code></div><div>${isJa ? 'REPLプロンプトにフォーカス' : 'Focus REPL'}</div>
        </div>`,
        buttons: [{ label: isJa ? '閉じる' : 'Close', variant: 'primary' }],
      }) },
      { ico: 'i', label: t('palette.about', 'About nvsim…'), run: () => openModal({
        title: isJa ? 'nvsim について' : 'About nvsim',
        body: `<p><b>nvsim</b> は、窒素-空孔（NV）ダイヤモンド磁気センシングのための確定性順方向シミュレータです。</p>
          <p>このダッシュボードでは、Web Worker内でWASMとしてnvsimを実行しています。同一の <code>(scene, config, seed)</code> からマシンを問わずバイト単位で完全一致するSHA-256ウィトネス（証明）を生成します。</p>
          <p>ライセンス: MIT OR Apache-2.0 · ADR-089, ADR-092。</p>`,
        buttons: [{ label: isJa ? '閉じる' : 'Close', variant: 'primary' }],
      }) },
    ];
  }

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('nv-palette', this.onOpen as EventListener);
  }
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('nv-palette', this.onOpen as EventListener);
  }

  private onKey = (e: KeyboardEvent): void => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.openPal();
    } else if (e.key === 'Escape' && this.open) {
      this.closePal();
    } else if (this.open) {
      if (e.key === 'ArrowDown') { this.idx = Math.min(this.cmds.length - 1, this.idx + 1); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { this.idx = Math.max(0, this.idx - 1); e.preventDefault(); }
      else if (e.key === 'Enter') { this.runIdx(); e.preventDefault(); }
    }
  };

  private onOpen = (): void => this.openPal();

  private openPal(): void {
    this.open = true; this.setAttribute('open', '');
    this.filter = ''; this.idx = 0;
    setTimeout(() => this.inputEl?.focus(), 0);
  }
  private closePal(): void { this.open = false; this.removeAttribute('open'); }

  private filtered(): Cmd[] {
    if (!this.filter.trim()) return this.cmds;
    const q = this.filter.toLowerCase();
    return this.cmds.filter((c) => c.label.toLowerCase().includes(q));
  }

  private runIdx(): void {
    const f = this.filtered();
    const c = f[this.idx];
    if (c) { c.run(); this.closePal(); }
  }

  override render() {
    const items = this.filtered();
    return html`
      <div class="palette" data-id="palette">
        <div class="input">
          <input id="palette-input" type="text" placeholder=${t('palette.placeholder', 'Type a command…')}
            .value=${this.filter}
            @input=${(e: Event) => { this.filter = (e.target as HTMLInputElement).value; this.idx = 0; }} />
        </div>
        <div class="list">
          ${items.map((c, i) => html`
            <div class="item ${i === this.idx ? 'active' : ''}" @click=${() => { this.idx = i; this.runIdx(); }}>
              <span class="ico">${c.ico}</span>
              <span class="lbl">${c.label}</span>
              ${c.kbd ? html`<span class="kbd">${c.kbd}</span>` : ''}
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
