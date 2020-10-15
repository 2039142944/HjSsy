<template>
  <div class="container">
    <div class="row no-gutters top_nav mb-3">
      <div class="col-sm-12 col-lg-8">
        <ul class="breadcrumb breadcrumb_fontsize bg-transparent">
          <li class="breadcrumb-item"><a href="">电脑、办公</a></li>
          <li class="breadcrumb-item"><a href="">电脑整机</a></li>
          <li class="breadcrumb-item"><a href="">笔记本</a></li>
          <li class="breadcrumb-item"><a href="">苹果（Apple）</a></li>
          <li class="breadcrumb-item"><a href="">苹果（Apple）MacBook Air 13.3英寸</a></li>
        </ul>
      </div>
      <div class="col-sm-12 col-lg-4 ">
        <ul class="d-flex justify-content-center align-content-center top_right breadcrumb_fontsize">
          <li class="mt-1"><a href="">疆界旗舰店</a></li>
          <li>
            <img class="mt-1" src="../assets/pingfen.png" alt="" />
          </li>
          <li>
            <a href="#">
              <img class="img_2" src="../assets/kefu.png" alt="" />
              <span>联系客服</span>
            </a>
          </li>
          <li>
            <a href="">
              <img class="img_3" src="../assets/star.png" alt="" />
              <span>关注店铺</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-lg-5 col-md-6 col-sm-12 extend_big" >
        <img src="../assets/bijiben1.jpg" alt="">
      </div>
      <div class="col-lg-7 details_text">
        <div class="details">
          <img class="details_top_img" src="../assets/jingdongwuliu.png" alt="">
          <span class="ml-2 details_span">苹果（Apple）MacBook Air 13.3英寸笔记本电脑 【17爆款金属银】双核i5/8G/128G 19点前付款当天发货</span>
        </div>
        <div class="seckill">
          <img src="../assets/miaosha.png" alt="">
          <strong>京东秒杀</strong>
        </div>
        <div class="seckill_time">
          <span>距离时间</span>
          <span>01</span>
          <span>12</span>
          <span>56</span>
        </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
/* 放大镜效果 */
.seckill_time span{
  display: block;
  width: 15px;
  height: 15px;
  background-color: #000;
  float: left;
  margin-left: 5px;
}
.seckill strong{
  display: block;
  color: #fff;
  margin: 8px 0 0 10px;
  float: left;
}
.seckill img{
  max-width: 20px;
  margin: 5px 0 0 10px;
  float: left;
  }
.seckill{
  height: 32px;
  background: url(../assets/seckilling.jpg) no-repeat #fe0851;
}
.details_span{
  font: 700 16px Arial,"microsoft yahei";
}
.details{
  margin-bottom: 5px;
}
.details_text{
  padding-left: 30px;
}
.extend_big img{
  width: 462px;
  height: 352px;
}
/* 导航栏 */
.top_nav {
  background-color: #eee;
  height: 32px;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
.breadcrumb_fontsize{
  font-size: 12px;
}
.breadcrumb_fontsize a{
  color: #666666;
}
.breadcrumb_fontsize a:hover{
  text-decoration: none;
}
ul.top_right li img{
  max-width: 60px;
  margin-left: 10px;
}
ul.top_right li {
  margin-left: 10px;
}
.top_right li:nth-child(2) {
  background-color: #ddd;
  border-radius: 25px;
  width: 80px;
  height: 15px;
}
.top_right {
  margin-top: 10px;
}
.img_2,.img_3{
  width: 20px;
  height: auto;
  vertical-align: middle;
}

</style>>
<script>
export default {};
</script>