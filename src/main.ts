import { createApp } from 'vue';
import Router from '@/router/index';
import App from '@/App.vue';
import '@/tailwind.css';

const app = createApp(App);
app.use(Router);
app.mount('#app');
