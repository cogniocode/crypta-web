import Vue from 'vue'
import Atomio from 'atomio-vue'
import Axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(Atomio, {
    theming: {
        currentTheme: "primary"
    }
})

Vue.config.productionTip = false

//TODO: Change to an actual IP.
Axios.defaults.baseURL = "https://crypta.cognio.dev/api"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
