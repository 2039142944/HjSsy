<template>
  <div class="wh">

    <div id="d1">
       <a href="http://127.0.0.1:8080/#/">
         <img src="../assets/images/jdlogo.png"/>
       </a>
       <a href="http://127.0.0.1:8080/#/"><b>购物车</b></a>  
    </div>


    <div id="d2">
    <div class="input-group col-md-3" style="margin-top:0px;position:relative;">
       <input type="text" class="form-control" placeholder="请输入所查商品名称"> 
       
       <span class="input-group-btn">
          <button class="btn btn-info btn-search">搜索</button>
       </span>
     </div>
    </div>

      <div id="btn">
          <button @click="minus">-</button>
          <span>{{n}}</span>
          <button @click="add">+</button>
          
          
      </div>

  </div>

</template>
<style>
#btn{

  float: right;
  margin-top: 190px;
  margin-right:-180px ;
}
#btn>button,#btn>span{
  margin-right:2px ;
}
#d2>div{
  float: right;
  margin-right:90px ;

}
#d2>div>input,#d2>div button{
  margin-top:71px ;
}


 
.wh{
    width:990px;
    margin:0 auto;
}
#d1>a>img,#d1>a>b{
  float: left;
  margin-left:90px ;
  
}
 #d1>a{
 
   text-decoration:none;
   
}

 #d1>a>img{
  margin-top:50px ;
} 
#d1>a>b{
    margin-top:72px;
    margin-left:8px;
    
}


   
</style>
<script>
export default {
  data(){
    return{
      n:0
    }
    
  },
  methods:{
    add(){
      this.n++;
    },
    minus(){
      if(this.n>0){
          this.n--;
      }
    }
  }
}
</script>