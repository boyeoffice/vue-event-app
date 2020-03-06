import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/sass/custom.scss'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
