import Vue from 'vue'
import Atomio from 'atomio-vue'
import "atomio-vue/dist/atomio.min.css"
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

Axios.defaults.baseURL = "https://crypta.cognio.dev/api"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
