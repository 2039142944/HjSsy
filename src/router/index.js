import Vue from 'vue'
import VueRouter from 'vue-router'


import Registered from '../views/Registered.vue'
import Login from '../views/Login.vue'

import Carousel from '../components/Carousel'
 
import Fangdajin from '../components/Fangdajin'
import Details from '../views/Details'
 



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
