import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCar from '../views/ShoppingCar.vue'


Vue.use(VueRouter)

const routes = [
   
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path:'/shoppingcar',
    component:ShoppingCar
  }
]

const router = new VueRouter({
  routes
})

export default router
