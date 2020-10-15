import Vue from 'vue'
import VueRouter from 'vue-router'
 
import ShoppingCar from '../views/ShoppingCar.vue'
 
import Carousel from '../components/Carousel'
 
import Fangdajin from '../components/Fangdajin'
import Details from '../views/Details'
 
 


Vue.use(VueRouter)

const routes = [

  {
    path:'/details',
    component:Details
   },
  {
    path:'/fangdajin',
    component:Fangdajin
   },

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
 
    path:'/shoppingcar',
    component:ShoppingCar
 
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
