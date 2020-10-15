import Vue from 'vue'
import VueRouter from 'vue-router'
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
  }
]

const router = new VueRouter({
  routes
})

export default router
