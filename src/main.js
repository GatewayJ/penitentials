import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router"
import App from './App.vue'
import '../src/assets/font'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(axios,VueAxios)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
