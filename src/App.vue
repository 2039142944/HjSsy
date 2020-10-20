<template>
  <div id="app">  
  <top-bar style="position: absolute;z-index: 19;top: 0;width: 100%;min-width: 1300px;"/>
   <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
 <script>
	 import topBar from 'components/payoff/top'
	 
	 export default{
		 name:"info",
		 components:{
			 topBar
			 
		 }
		 
	 }
 </script>
