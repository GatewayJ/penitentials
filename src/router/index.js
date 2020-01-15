import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from "../components/index.vue"
import index2 from "../components/index2.vue"
import index3 from "../components/index3.vue"


const routes = [
  { path: '/index', component: index },
  { path: '/index2', component: index2 },
  { path: '/', component: index3 }
]


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
