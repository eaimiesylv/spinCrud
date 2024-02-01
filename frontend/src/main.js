import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.less'; 
import { createPinia } from "pinia"
import './axios';
const app = createApp(App);
//app.component('base-layout', BaseLayout);
app.use(router);
app.use(createPinia());
app.mount("#app");
