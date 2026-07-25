import { describe, it, expect } from 'vitest';
import { APPS, CATEGORIES, fuzzyMatch, findApp, appsByCategory } from '../src/store/apps';

describe('App Store 66 Edge Apps Japanese Localization (Milestone 18)', () => {
  it('contains exactly 66 edge apps', () => {
    expect(APPS.length).toBe(66);
  });

  it('every app has non-empty name_ja and summary_ja', () => {
    for (const app of APPS) {
      expect(app.name_ja, `App ${app.id} missing name_ja`).toBeDefined();
      expect(typeof app.name_ja).toBe('string');
      expect(app.name_ja!.trim().length).toBeGreaterThan(0);

      expect(app.summary_ja, `App ${app.id} missing summary_ja`).toBeDefined();
      expect(typeof app.summary_ja).toBe('string');
      expect(app.summary_ja!.trim().length).toBeGreaterThan(0);
    }
  });

  it('every category in CATEGORIES has non-empty label_ja', () => {
    for (const [catKey, catDef] of Object.entries(CATEGORIES)) {
      expect(catDef.label_ja, `Category ${catKey} missing label_ja`).toBeDefined();
      expect(catDef.label_ja!.trim().length).toBeGreaterThan(0);
    }
  });

  it('fuzzyMatch correctly scores Japanese search queries', () => {
    // 1. Search for "呼吸" (breathing)
    const sleepApnea = findApp('med_sleep_apnea')!;
    expect(fuzzyMatch('呼吸', sleepApnea)).toBeGreaterThan(0);

    // 2. Search for "不整脈" (arrhythmia)
    const arrhythmia = findApp('med_cardiac_arrhythmia')!;
    expect(fuzzyMatch('不整脈', arrhythmia)).toBeGreaterThan(0);

    // 3. Search for "在室" (occupancy / presence)
    const occupancy = findApp('occupancy')!;
    expect(fuzzyMatch('在室', occupancy)).toBeGreaterThan(0);

    // 4. Search for "侵入" (intrusion)
    const intrusion = findApp('intrusion')!;
    expect(fuzzyMatch('侵入', intrusion)).toBeGreaterThan(0);
  });

  it('organizes apps by category cleanly without missing elements', () => {
    const map = appsByCategory();
    let totalCategorized = 0;
    for (const catApps of Object.values(map)) {
      totalCategorized += catApps.length;
    }
    expect(totalCategorized).toBe(66);
  });
});
