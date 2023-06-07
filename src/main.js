import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import mixins from './mixins/mixins'
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router).mount('#app')

