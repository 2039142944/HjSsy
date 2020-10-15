import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel from '../components/Carousel'
<<<<<<< HEAD
import Fangdajin from '../components/Fangdajin'
import Details from '../views/Details'
=======
 
>>>>>>> e493ab5741b7497660bdc4a92b7a478e5710d013

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path:'/details',
    component:Details
   },
  {
    path:'/fangdajin',
    component:Fangdajin
   },
=======
>>>>>>> e493ab5741b7497660bdc4a92b7a478e5710d013
   {
    path:'/carousel',
    component:Carousel
   },
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
