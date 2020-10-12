<template>
  <div class="home">
    <!-- 顶部导航 -->
       <div class="row no-gutters top_nav">
         <div class="col-sm-12 col-lg-4">
           <a class="top_left" href="">
             <img class="shuangshiyi" src="/images/shuangshiyi.png" alt=""> 双十一
           </a>
         </div>
         <div class="col-sm-12 col-lg-4 mt-2">
           <input class="w-75 input_1" type="text" placeholder="手机/电脑/鼠标/酒水"><button>搜索</button>
         </div>
         <div class="col-sm-12 col-lg-4 my-3">
           <a href="">登录</a>       
           <span class="mr-2 ml-2">|</span>
           <a href="">注册</a>
         </div>
       </div>
       <div class="img_1">
         <img src="/images/bjtp.jpg" alt="">
         <div>
           <h1>黄金双十一,<span class="text">等你来</span>狂欢</h1>
           <p class="text-white h4 text-left">每年一亿多客户的选择，不容错过</p>
         </div>
       </div>
       <my-carousel></my-carousel>
  </div>
</template>
<style scoped>
  .top_nav{
    position: relative;
    height: 60px;
    color: #fff;
    background-color: rgba(0,0,0,.06);
    z-index: 11;
  }
  .top_nav button{
    width: 60px;
    height: 40px;
    background-color: #ff961e;
    border: 0;
  }
  .top_nav div:nth-child(1) a{
    font-family: cursive;
   font-size: 30px;
   font-weight: bolder;
   color: rgb(95, 94, 94);
  }
  .top_nav div:nth-child(3) a{
    text-decoration: none;
    color: #fff;
  }
  .shuangshiyi{
    max-width: 50px;
   vertical-align: bottom;
  }
  .input_1{
    height: 40px;
    border: 2px solid #aaa;
  }
  .img_1{
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
  .img_1 img{
    width: 100%;
    display: block;
    opacity: 1;
  }
  .img_1 div{
    position: absolute;
    top: 30%;
    left: 5%;
  }
  .img_1 div h1{
    font-size: 60px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.06);
    margin: 0 0 12px -5px;
    font-weight: 600;
  }
  .text{
    color: #aaa;
  }
</style>

 
 
 
