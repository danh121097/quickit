import type { App } from 'vue';
import { setupDayjs } from './dayjs';
import { setupPinia } from './pinia';

export function setupPlugins(app: App) {
  setupDayjs();
  setupPinia(app);
}
