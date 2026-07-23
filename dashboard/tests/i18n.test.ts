import { describe, it, expect, beforeEach } from 'vitest';
import { i18n, t, setLocale, detectDefaultLocale } from '../src/i18n';

describe('Dashboard i18n Module', () => {
  beforeEach(() => {
    setLocale('en');
  });

  it('detects default locale', () => {
    const locale = detectDefaultLocale();
    expect(['en', 'ja']).toContain(locale);
  });

  it('translates nested dot-notation keys in English', () => {
    expect(t('ui.dashboard.title')).toBe('Revolutionary WiFi-Based Human Pose Detection');
    expect(t('ui.status.connected')).toBe('Connected');
  });

  it('translates nested dot-notation keys in Japanese after setLocale', () => {
    setLocale('ja');
    expect(i18n.getLocale()).toBe('ja');
    expect(t('ui.dashboard.title')).toBe('画期的なWiFiベースの人体姿勢検出');
    expect(t('ui.status.connected')).toBe('接続済み');
  });

  it('uses fallback string if key is not found', () => {
    expect(t('nonexistent.key', 'Fallback Value')).toBe('Fallback Value');
  });

  it('uses key itself if no fallback provided and key is missing', () => {
    expect(t('missing.key.without.fallback')).toBe('missing.key.without.fallback');
  });

  it('interpolates template parameters', () => {
    expect(t('cli.server_running', { host: 'localhost', port: 8080 })).toBe('Server running at localhost:8080');
    expect(t('cli.server_running', 'Server at {host}:{port}', { host: '127.0.0.1', port: 3000 })).toBe('Server running at 127.0.0.1:3000');
  });

  it('notifies listeners on reactive locale change', () => {
    let notifiedLocale = '';
    const unsubscribe = i18n.onLocaleChange((loc) => {
      notifiedLocale = loc;
    });

    setLocale('ja');
    expect(notifiedLocale).toBe('ja');

    unsubscribe();
    setLocale('en');
    expect(notifiedLocale).toBe('ja'); // should not update after unsubscribe
  });
});
