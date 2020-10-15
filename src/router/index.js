import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../views/Details.vue'
import Registered from '../views/Registered.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component: Login
  },
  {
    path:'/registered',
    component: Registered
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
