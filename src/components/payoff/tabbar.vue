 <template>
   <div class="navbars">
   	<div class="item" v-for="(item,i) of title" :key="i">
   		<div v-text="item" :class="{infos:true,active:i==curr}" @click="selecttab(i)">
   		</div>  	
   	</div>
	 <slot name="context"></slot>
   </div>
 </template>
 <script>
   export default {
	 props:{
		 title:{
			 type:Array,
			 default(){
				 return ["未传入参数"]
			 }
		 }
	 }, 
     data() {
       return {
         
         curr: ''
       }
     },
     methods: {
       selecttab(i) {
         this.curr = i;
		 this.$emit('func',i)
       },
     }
   }
 </script>
 
 <style scoped>
  .navbars {
     cursor: pointer;
     display: flex;
     position: relative;
     background-color: #f6f6f6;
     height: 37px;
	  text-align: center;
  }
   
  .navbars > .item {
    flex: 0 0 113px;
    
   height: 100%;
   line-height: 37px;
    /* 子项目等宽 */
  }
  .navbars > .text {
	  
   position: absolute;
   top: 30px;
   height: 100px;
   background-color: #CCCCCC;
   width: 100%;
   cursor: pointer;
  
    /* 子项目等宽 */
  }
   
  .active {
   height: 100%;
   color: red;
    background-color: white;
  }
 </style>
 