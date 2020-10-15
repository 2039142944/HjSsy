import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 状态管理
import store from './store'
 
// 引入element-ui插件
 
//使成为全局组件
import Carousel from './components/Carousel'
Vue.component('my-carousel',Carousel)
import Fangdajin from './components/Fangdajin'
Vue.component('my-fangdajin',Fangdajin)

 
 
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
 Vue.use(Element)
 
 
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
