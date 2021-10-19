import { createApp } from 'vue'
import App from './App.vue'
import router from './store/index.js'

const app = createApp(App);
//通过use使用main.js
app.use(router);
app.mount('#app');