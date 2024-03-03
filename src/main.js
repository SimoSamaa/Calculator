/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import '@/style/main-style.css';

import BaseIcon from '@/components/UI/BaseIcon.vue';

const app = createApp(App);

app.component('baseIcon', BaseIcon);

app.mount('#app');
