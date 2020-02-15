import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from "../components/Index.vue"
import PersonalPlans from "../components/PersonalPlans.vue"
import PersonalProfile from "../components/PersonalProfile.vue"
import ArticalDetail from "../components/ArticalDetail.vue"


const routes = [
  { path: '/PersonalPlans', component: PersonalPlans },
  { path: '/PersonalProfile', component: PersonalProfile },
  { path: '/ArticalDetail', component: ArticalDetail },
  { path: '/', component: Index }
]


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
