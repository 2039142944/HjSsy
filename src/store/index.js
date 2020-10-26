 import Vue from 'vue'
 import Vuex from 'vuex'
 import axios from 'axios'
 Vue.use(Vuex)
 export default new Vuex.Store({
 	state: {
 		uname: ""
 	},
 	mutations: {
 		setuname(state, uname) {
 			state.uname = uname;
 		}
 	},
 	actions: {
 		login(context,info) {
 			 sessionStorage.setItem("uname",info);
 			  context.commit("setuname",info);
 		}
 	},
 	modules: {
  
 	}
 })
 