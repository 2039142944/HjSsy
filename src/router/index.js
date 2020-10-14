import Vue from 'vue'
import VueRouter from 'vue-router'
 

Vue.use(VueRouter)

const routes = [
   
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/payoff',
    name: 'payoff',
    component: () => import(/* webpackChunkName: "about" */ '../views/payoff/payoff.vue')
  },
  {
    path: '/payoffmoney',
    name: 'payoffmoney',
    component: () => import(/* webpackChunkName: "about" */ '../views/payoff/payoffmoney.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
