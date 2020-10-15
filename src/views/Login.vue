<template>
  <div>
    <div class="login">
      <div class="login_top">
        <a href="">
          <img src="../assets/login/jd.jpg" alt="" />
        </a>
        <span>欢迎登陆</span>
      </div>
      <div class="login_survey">
        <a href="">
          <img src="../assets/login/xinxi.jpg" alt="" />
          登录页面,调查问卷
        </a>
      </div>
    </div>
    <div class="login_warning">
        <span>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版《京东隐私政策》已上线，将更有利于保护您的个人隐私。</span>
    </div>
    <div class="login_pic">
        <img src="../assets/login/beijing.jpg" alt="">
    </div>
  </div>
</template>
<style  scoped>
.login_pic img{
    max-width: 100%;
}
.login_warning{
    background-color: #fff8f0;
    text-align: center;
}
.login_survey{
    margin-top: 30px;
}
.login{
    display: flex;
}
.login_survey a{
    color:rgb(109, 109, 109)
}
.login_survey a:hover{
    color: #e4393c;
}
.login_top span {
  font-size: 25px;
  margin: 20px 0 0 20px;
  display: inline-block;
  position: absolute;
}
.login_top {
  margin-left: 200px;
  width: 800px;
  height: 100px;
  position: relative;
}

</style>
<script>
export default {};
</script>