import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

// config.globalProperties를 통해 axios를 전역 설정해주기
app.config.globalProperties.axios = axios
app.use(store).use(router).mount('#app')
