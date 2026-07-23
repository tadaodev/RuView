export type SupportedLocale = 'ja' | 'en';

const jaDict: Record<string, string> = {
  'mobile.liveStream': 'ライブストリーム',
  'mobile.disconnected': '切断済み',
  'mobile.simulatedData': 'シミュレーションデータ',
  'mobile.liveVisFailed': 'ライブビジュアライゼーション失敗',
  'mobile.retry': '再試行',
  'mobile.loadingRenderer': 'ライブレンダラー読み込み中...',
  'mobile.survivorsDetected': '生存者を検出',
  'mobile.criticalAlerts': '緊急アラート',
  'mobile.rssiHistory': 'RSSI 履歴',
  'mobile.variance': '分散',
  'mobile.motionBand': '運動帯域',
  'mobile.breathBand': '呼吸帯域',
  'mobile.spectralEntropy': 'スペクトルエントロピー',
  'mobile.classification': '状態分類',
  'mobile.confidence': '信頼度',
  'mobile.floorPlan': 'フロアプラン — 占有ヒートマップ',
  'mobile.occupancy': '占有状況',
  'mobile.lastUpdate': '最終更新',
  'mobile.personsDetected': '{count} 名検出',
  'mobile.server': 'サーバー',
  'mobile.sensing': 'センシング',
  'mobile.appearance': '外観',
  'mobile.about': '情報',
  'mobile.scanInterval': 'スキャン間隔',
  'mobile.activeInterval': '現在のアラート間隔',
  'mobile.viewOnGithub': 'GitHub で表示',
  'mobile.websocket': 'WebSocket',
  'mobile.idle': 'アイドル',
  'mobile.presentStill': '静止体',
  'mobile.active': '活動中',
  'mobile.absent': '不在',
};

let currentLocale: SupportedLocale = 'ja';

export function setLocale(locale: SupportedLocale): void {
  currentLocale = locale;
}

export function getLocale(): SupportedLocale {
  return currentLocale;
}

export function t(key: string, fallback: string, params?: Record<string, unknown>): string {
  let res = currentLocale === 'ja' ? (jaDict[key] || fallback) : fallback;
  if (params) {
    for (const [pKey, pVal] of Object.entries(params)) {
      res = res.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
    }
  }
  return res;
}
