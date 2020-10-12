import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Carousel from './components/Carousel'
Vue.component('my-carousel',Carousel)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
