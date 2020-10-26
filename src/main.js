import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 状态管理
import store from './store/index'
import Carousel  from './components/Carousel'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:5050/";
import Fangdajin from './components/Fangdajin'
Vue.component('my-fangdajin',Fangdajin)
// 如果强行使用这个他会把所有的对象当做对象的key
// axios.interceptors.request.use(
// 	config => {
// 		if (config.method === "post") {
// 			config.headers["Content-Type"] = 'application/x-www-form-urlencoded';
// 		}
// 		return config;
// 	}
// )
Vue.prototype.axios = axios;
Vue.prototype.zdybus = new Vue()

Vue.component('myCarousel', Carousel)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
