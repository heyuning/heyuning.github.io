 import Vue from 'vue'
import MintUI from 'mint-ui'
import resource from 'vue-resource'
import router from './router'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(resource)
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
