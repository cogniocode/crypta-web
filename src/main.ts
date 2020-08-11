import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import Axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Axios.defaults.baseURL = "https://crypta.cognio.dev/api"
Axios.defaults.validateStatus = status => status < 500

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

export default vm
