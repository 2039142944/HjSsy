import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 状态管理
import store from './store'
 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


 
import Carousel from './components/Carousel'
Vue.component('my-carousel',Carousel)
import Fangdajin from './components/Fangdajin'
Vue.component('my-fangdajin',Fangdajin)

 
 
 
 
 
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
