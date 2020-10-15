<template>
    <div class="container">
        <div class="registered">
            <div class="registered_top">欢迎登陆</div>
            <div class="regiserted_right">
            已有账号？
                <a href="">请登录></a>
            </div>
        </div>
        <div class="regiserted_mesg">
            <div>
                <span>
                    <img src="../assets/registered/xuhao1.png" alt="">
                </span>
                <p>验证手机号</p>
            </div>
            <div>
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/jiantou.png" alt="">
            </div>
            <div>
                <span>
                    <img src="../assets/registered/xuhao2.png" alt="">
                </span>
                <p>填写账号消息</p>
            </div>
            <div>
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/shengliuhao.png" alt="">
                <img src="../assets/registered/jiantou.png" alt="">
            </div>
            <div>
                <span>
                <img src="../assets/registered/xuhao3.png" alt="">
                </span>
                <p>注册成功</p>
            </div>
        </div>
        <div class="regiserted_input">
            <label for="">中国0086
                <select name="" id="" class="border-0">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </label>
            <div>
                <input type="text" placeholder="建议使用常用手机号">
            </div>
        </div>
    </div>
</template>
<style scoped>
.regiserted_input input{
    padding: 15px 10px;
    width: 300px;
}
.regiserted_input label{
    display: block;
    border: 1px solid #222;
    width: 100px;
    padding: 15px 0;
    border-right: 0;
    border-radius: 2px;
}
.regiserted_input{
    width: 400px;
    margin: 50px auto;
    text-align: center;
    display: flex;
}
.regiserted_mesg>div p{
    margin-top: 20px;
}
.regiserted_mesg{
    width: 500px;
    margin: 0 auto;
    text-align: center;
    display: flex;
}
.regiserted_right a:hover{
    text-decoration: none;
}
.regiserted_right a{
    color: #e22;
}
.regiserted_right{
    margin-left: 720px;
}
.registered{
    display: flex;
    margin: 34px 0 50px 0;
    box-shadow: 0px 12px 13px -6px rgba(0,0,0,0.25);
}
.registered_top{
    font-size: 24px;
    color: #333;
    height: 76px;
    margin-left: 100px;
    
}
</style>
<script>
export default {
    
}
</script>