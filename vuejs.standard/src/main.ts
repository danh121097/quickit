import router from '@/router';
import App from './App.vue';
import { setupPlugins } from '@/plugins';
import './scss/app.scss';
import './scss/tailwind.css';

function bootstrap() {
  const app = createApp(App);
  setupPlugins(app);
  app.use(router);
  app.mount('#app');
}

bootstrap();
