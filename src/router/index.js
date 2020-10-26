import Vue from 'vue'
import VueRouter from 'vue-router'

import ShoppingCar from '../views/ShoppingCar.vue'

import Carousel from '../components/Carousel'

import Fangdajin from '../components/Fangdajin'
import Details from '../views/Details'
import register from '../views/payoff/register'



Vue.use(VueRouter)

const routes = [

	{
		path: '/details',
		component: Details
	},
	{
		path: '/fangdajin',
		component: Fangdajin
	},
	{
		path: '/register',
		component: register
	},
	{
		path: '/carousel',
		component: Carousel
	},
	{
		path: '/',
		name: 'Home',
		component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
	},
	{

		path: '/shoppingcar',
		component: ShoppingCar,
	},
	{
		path: '/payoff/:cartinfo',
		// 页面内容失效问题cartinfo
		name: 'payoff',
		component: () => import( /* webpackChunkName: "about" */ '../views/payoff/payoff.vue'),
		props: true 
	},
	{
		path: '/payoffmoney/:cartinfo',
		name: 'payoffmoney',
		component: () => import( /* webpackChunkName: "about" */ '../views/payoff/payoffmoney.vue'),
		props: true 
	}
]

const router = new VueRouter({
	mode: 'history',
	srcollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	routes
})

export default router
