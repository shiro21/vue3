import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jQuery from 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createMetaManager } from 'vue-meta'

library.add(fab, far, fas)

const app = createApp(App)

global.$ = jQuery
app.component("fa", FontAwesomeIcon)
// config.globalProperties를 통해 axios를 전역 설정해주기
app.config.globalProperties.axios = axios
app.use(createMetaManager())
app.use(store).use(router).mount('#app')
