<template>
	<div style="background-color: #888;">
		<ul id="t_nav" class="d-flex justify-content-between list-unstyled">
			<li>
				<ul class="d-flex justify-content-between list-unstyled" style="padding-left: 50px;">
					<li><a href="#" class="top_hover" style="color: f22e00;">亲，请登录</a></li>
					<li><a class="top_hover" target="_blank" @click="reg">免费注册</a>
						 
					</li>
					<li><a href="#" class="top_hover">手机逛淘宝</a></li>
				</ul>
			</li>
			<li>
				<ul class="d-flex justify-content-between list-unstyled">
					<li>
						<a href="#" class="top_hover"> 淘宝网首页 </a>
					</li>
					<li style="width: 8%;">
						<div class="index_hover">
							<a href="#" class="top_hover">&nbsp;&nbsp;我的淘宝<span class="glyphicon glyphicon-menu-down nav_tubiao"></span></a>
							<ul class="index_content list-unstyled">
								<li class="list-unstyled"><a class="nav-link" style="white-space: nowrap;">已经买到的宝贝</a></li>
								<li><a class="nav-link">我的足迹</a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" class="top_hover"> 购物车 </a></li>
					<li style="width: 8%;">
				
						<div class="index_hover" onmouseover="show(this)" onmouseout="display(this)">
							<a href="#" class="top_hover"><span class="glyphicon glyphicon-star nav_tubiao"></span>收藏夹 <span class="glyphicon glyphicon-menu-down nav_tubiao"></span></a>
							<ul  class="index_content   nav-stacked">
								<li style="list-style: none;"><a class="nav-link" style="white-space: nowrap;">收藏的宝贝</a></li>
								<li style="list-style: none;"><a class="nav-link">收藏的店铺</a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" class="top_hover">商品分类</a></li>
					<li style="width: 8%;">
				
						<div class="index_hover" onmouseover="show(this)" onmouseout="display(this)">
							<a href="#" class="top_hover">卖家中心<span class="glyphicon glyphicon-menu-down nav_tubiao"></span></a>
							<ul class="index_content   nav-stacked">
								<li style="list-style: none;"><a class="nav-link" style="white-space: nowrap;">免费开店</a></li>
								<li style="list-style: none;"><a class="nav-link">已卖出宝贝</a></li>
								<li style="list-style: none;"><a class="nav-link">出售中的宝贝</a></li>
								<li style="list-style: none;"><a class="nav-link">卖家服务市场</a></li>
								<li style="list-style: none;"><a class="nav-link">卖家培训中心</a></li>
								<li style="list-style: none;"><a class="nav-link">体检中心</a></li>
								<li style="list-style: none;"><a class="nav-link">问商友</a></li>
							</ul>
						</div>
				
					</li>
					<li style="width: 8%;">
						<div class="index_hover" onmouseover="show(this)" onmouseout="display(this)">
							<a href="#" class="top_hover">联系客服<span class="glyphicon glyphicon-menu-down nav_tubiao"></span></a>
							<ul   class="index_content   nav-stacked">
								<li style="list-style: none;"><a class="nav-link" style="white-space: nowrap;">消费者客服</a></li>
								<li style="list-style: none;"><a class="nav-link">卖家客服</a></li>
							</ul>
						</div>
					</li>
					<li style="margin-right: 100px;"><a href="#" class="top_hover"><span class="glyphicon glyphicon-menu-hamburger nav_tubiao"></span>网站导航<span
							 class="glyphicon glyphicon-menu-down nav_tubiao"></span></a></li>
				</ul>
				
			</li>
		</ul>
			
	</div>
	
</template>

<script>
	export default{
		methods:{
			reg(){
				this.$router.push("/register")
			}
		}
	}
</script>

<style scoped>
	 li{
		 font-size: 13px;
	 }
	.commons {
			margin: 0px 5%;
		}
	
		li {
			list-style: none;
	
	
		}
	
		li:hover {}
	
		* {
			padding: 0;
			margin: 0;
		}
	
		a {
			cursor: pointer;
	
		}
	
		a:hover {
			color: #f40 !important;
		}
	
		body {
			font-size: 12px;
		}
	
		#t_nav>li:first-child {
			width: 20%;
		}
	
		#t_nav>li:last-child {
			width: 60%;
		}
	
		.contrain {
			background-color: rgb(245, 245, 245);
	
		}
	
		#t_nav {
			position: fixed;
			top: 0;
			width: 100%;
			padding: 10px 0px;
			background-color: rgba(0,0,0,0.2);
		    min-width: 1200px;
			height: 40px;
			z-index: 2;
		}
	
		a[class="top_hover"]:hover {
			color: red !important;
			cursor: pointer;
			padding: 5px;
		}
	
		a[class="top_hover"] {
			color: black;
			text-decoration: none;
		}
	
		.nav-link {
			padding: 0.5rem 0rem;
	
		}
	
		.index_hover {
			height: 39px;
			position: absolute;
			top: 0px;
			padding: 10px 0px;
	
		}
	
		.index_content {
			padding-top: 30px;
			background-color: white;
			height: 0;
			overflow: hidden;
			opacity: 0;
			transition: all 0.1s linear;
	
	
		}
	
		.index_hover:hover>.index_content {
			opacity: 1;
			height: auto;
			padding-top: 10px;
		}
	
		.index_hover:hover {
			background-color: white;
		}
	
		.nav_tubiao {
			padding: 0px 6px;
			font-size: 10px;
		}
	
		#search>input {
			width: 100%;
			padding-left: 10px;
			height: 100%;
			outline: #ff4200 3px solid;
			border: 0px;
			background-position: right;
			font-size: 16px;
			font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
		}
	
		#search>button {
			font-size: 16px;
			width: 120px;
			height: 100%;
			outline: 0px;
			border: 0px;
			background-color: #ff4200;
			color: white;
			font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
		}
	
		#context>span {
			padding-right: 10px;
			font-size: 16px;
			font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
	
		}
	
		#context>span>a {
			color: black;
			text-decoration: none;
		}
	
		.breadcrumb-item+.breadcrumb-item::before {
			display: inline-block;
			padding-right: 0.5rem;
			padding-left: 0.5rem;
			color: #6c757d;
			content: "|";
		}
	
		#qwer>div:first-child {
			width: 20px;
			height: 20px;
	
			 
			background-position: -83px -129px;
		}
	
		#qwer {
			position: relative;
		}
	
		#cccc a {
			color: #000000;
		}
	
		.tests:hover {
			border: 1px solid red !important;
			cursor: pointer;
		}
	
		.infod {
			font-size: 12px;
			padding: 1px 3px;
			border: 1px solid #818182;
			position: absolute;
			width: 110px;
			right: 0px;
			background-color: rgba(244, 244, 244, 0.9);
		}
	
		.hover_con:hover {
			color: black;
			text-decoration: underline;
		}
	
		.hover_con {
			color: black;
		}
	
		.page-link.active {
			color: inherit;
			background-color: transparent !important;
	
		}
	
		.page-link.active:hover {
			color: black !important;
			text-decoration: underline;
		}
</style>
