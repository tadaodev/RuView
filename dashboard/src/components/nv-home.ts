/* Home view — friendly landing surface for new users.
 *
 * The full-power scene + sidebar + inspector + console are intentionally
 * dense; that's the operator surface. Home is for first-time visitors:
 * a single hero CTA, four quick-jump action cards, and a 1-paragraph
 * explanation of what this dashboard is. No jargon above the fold.
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from '@preact/signals-core';
import { running, fps, witnessVerified, getClient, pushLog } from '../store/appStore';
import { t, i18n } from '../i18n';

@customElement('nv-home')
export class NvHome extends LitElement {
  private _unsubI18n?: () => void;

  static styles = css`
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
/* Home view — friendly landing surface for new users.
 *
 * The full-power scene + sidebar + inspector + console are intentionally
 * dense; that's the operator surface. Home is for first-time visitors:
 * a single hero CTA, four quick-jump action cards, and a 1-paragraph
 * explanation of what this dashboard is. No jargon above the fold.
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from '@preact/signals-core';
import { running, fps, witnessVerified, getClient, pushLog } from '../store/appStore';
import { t, i18n } from '../i18n';

@customElement('nv-home')
export class NvHome extends LitElement {
  static styles = css`
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
  `;
  private _unsubI18n?: () => void;
  private _unsubEffect?: () => void;

  override connectedCallback(): void {
    super.connectedCallback();
    this._unsubI18n = i18n.onLocaleChange(() => this.requestUpdate());
    this._unsubEffect = effect(() => { running.value; fps.value; witnessVerified.value; this.requestUpdate(); });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._unsubI18n) this._unsubI18n();
    if (this._unsubEffect) this._unsubEffect();
  }

  private go(action: string): void {
    if (action === 'tour') {
      window.dispatchEvent(new CustomEvent('nv-show-tour'));
      return;
    }
    if (action === 'help') {
      window.dispatchEvent(new CustomEvent('nv-show-help'));
      return;
    }
    this.dispatchEvent(new CustomEvent('navigate', { detail: action, bubbles: true, composed: true }));
  }

  private async runDemo(): Promise<void> {
    const c = getClient(); if (!c) return;
    if (running.value) return;
    await c.run();
    running.value = true;
    pushLog('ok', 'demo started · streaming MagFrames');
  }

  override render() {
    const isRunning = running.value;
    const wasVerified = witnessVerified.value === 'ok';
    const isJa = i18n.getLocale() === 'ja';
    return html`
      <div class="hero">
        <div class="icon" aria-hidden="true">NV</div>
        <h1>${t('home.heroTitle', 'An open-source quantum-magnetometer simulator, in your browser.')}</h1>
        <p class="tag">
          ${t('home.heroTag', 'nvsim runs a real Rust simulator entirely in WebAssembly. No server, no upload, no telemetry.')}
        </p>
        <div class="ctas">
          <button class="cta primary" id="home-run-btn" @click=${() => this.runDemo()}>
            ${isRunning ? t('home.demoRunningBtn', '✓ Demo running') : t('home.runDemoBtn', '▶ Run the simulation')}
          </button>
          <button class="cta" id="home-tour-btn" @click=${() => this.go('tour')}>
            ${t('home.tourBtn', '★ Take the 60-second tour')}
          </button>
          <button class="cta" id="home-help-btn" @click=${() => this.go('help')}>
            ${t('home.helpBtn', '? Help center')}
          </button>
        </div>
        <div class="status ${isRunning ? 'live' : ''}">
          <span class="dot"></span>
          ${isRunning
            ? html`${isJa ? 'ライブ実行中' : 'Live'} · ${fps.value > 0 ? (fps.value / 1000).toFixed(2) + ' kHz' : (isJa ? '起動中…' : 'starting…')}${wasVerified ? (isJa ? ' · ウィトネス検証完了 ✓' : ' · witness verified ✓') : ''}`
            : html`${isJa ? '待機中' : 'Idle'}${wasVerified ? (isJa ? ' · ウィトネス検証完了 ✓' : ' · witness verified ✓') : ''}`}
        </div>
      </div>

      <div class="grid">
        <div class="card" tabindex="0" role="button"
          @click=${() => this.go('scene')}
          @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.go('scene'); } }}>
          <div class="ico">🌐</div>
          <h3>${t('home.liveSceneTitle', 'Live scene')}</h3>
          <p>${t('home.liveSceneDesc', 'Drag magnetic sources, watch the recovered field update in real time, and tweak sample rate / noise / integration.')}</p>
          <div class="arrow">${t('home.openSceneArrow', 'Open scene →')}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${() => this.go('apps')}
          @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.go('apps'); } }}>
          <div class="ico">🛍</div>
          <h3>${t('home.appStoreTitle', 'App Store · 66 edge apps')}</h3>
          <p>${t('home.appStoreDesc', 'Browse 65 hot-loadable WASM sensing modules across medical, security, building, retail, industrial, learning. Six run live in the browser.')}</p>
          <div class="arrow">${t('home.browseCatalogueArrow', 'Browse the catalogue →')}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${() => this.go('witness')}
          @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.go('witness'); } }}>
          <div class="ico">✓</div>
          <h3>${t('home.witnessTitle', 'Determinism gate')}</h3>
          <p>${t('home.witnessDesc', 'Re-derive the SHA-256 witness for the canonical reference scene right here in your browser. Same inputs → same hash, every time.')}</p>
          <div class="arrow">${t('home.verifyWitnessArrow', 'Verify the witness →')}</div>
        </div>

        <div class="card" tabindex="0" role="button"
          @click=${() => this.go('ghost-murmur')}
          @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.go('ghost-murmur'); } }}>
          <div class="ico">👻</div>
          <h3>${t('home.ghostMurmurTitle', 'Ghost Murmur reality check')}</h3>
          <p>${t('home.ghostMurmurDesc', 'Audit the publicly-reported April 2026 CIA NV-diamond program against published physics. Live distance/moment sliders.')}</p>
          <div class="arrow">${t('home.readSpecArrow', 'Read the spec →')}</div>
        </div>
      </div>

      <p class="footnote">
        ${isJa ? html`初めてですか？ <a @click=${() => this.go('tour')}>60秒のガイドツアーを開始する</a> — 全パネルを分かりやすく解説します。または <kbd style="font-family:var(--mono);font-size:10.5px;padding:1px 4px;background:var(--bg-3);border:1px solid var(--line);border-radius:3px;">?</kbd> キーでいつでもヘルプセンターを開けます。<br>オープンソース · Apache-2.0 OR MIT · <code>github.com/ruvnet/RuView</code>`
          : html`New here? <a @click=${() => this.go('tour')}>Take the 60-second guided tour</a> — every panel is explained. Or press <code>?</code> for the help center (quickstart, glossary, FAQ, shortcuts) any time.<br>Open source · Apache-2.0 OR MIT · <code>github.com/ruvnet/RuView</code>`}
      </p>
    `;
  }
}
