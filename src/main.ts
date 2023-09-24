import { createApp } from 'vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import i18n from './locals';
import App from './App.vue';
import router from '@/router/index';
import pinia from '@/store/index';
import '@/styles/index.scss';

pinia.use(piniaPluginPersistedstate);

createApp(App).use(i18n).use(router).use(pinia).mount('#app');
