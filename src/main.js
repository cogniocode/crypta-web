import Vue from 'vue'
import Atomio from 'atomio-vue'
import Axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(Atomio)

Vue.config.productionTip = false

//TODO: Change to an actual IP.
Axios.defaults.baseURL = `https://${window.location.hostname}/api`

const atomio = new Atomio.Config({
    theming: {
        currentTheme: "primary"
    }
})

new Vue({
    router,
    store,
    atomio,
    render: h => h(App)
}).$mount('#app')
