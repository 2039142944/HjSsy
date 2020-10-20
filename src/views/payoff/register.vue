 <template>
		<div>
			<div class="contrain">
			</div>
			<ul class="nav nav-tabs commons justify-content-center ul_s">
				<li class="nav-item" style="flex: 0 0 12%;"><a @click="colo" class="nav-link sss"  data-toggle="tab"  href="#one"><span class="mark">1</span>设置用户名</a></li>
					 
				<li class="nav-item" style="flex: 0 0 12%;"><a @click="colo" class="nav-link sss" data-toggle="tab" href="#two"><span
						 class="mark">2</span>设置用户名</a></li>
				<li class="nav-item" style="flex: 0 0 12%;"><a @click="colo" class="nav-link sss" data-toggle="tab" href="#three"><span
						 class="mark">3</span>设置支付方式</a></li>
				<li class="nav-item" style="flex: 0 0 12%;"><a @click="colo" class="nav-link sss" data-toggle="tab" href="#four"><span
						 class="mark glyphicon glyphicon-ok"></span>注册成功</a></li>
			</ul>
			<div class="tab-content d-flex justify-content-center ">
				<div class="tab-pane active" id="one">
					<div class="d-flex flex-column justify-content-around h_out">
						<div style="display: flex;float: left;position: relative;">
							<div class="j_common">手机号</div>
							<ul id="dfs">
							</ul>
							<input id="phone" placeholder="请输入你的手机号码" />
							<span id="inner"></span>
						</div>
						<div style="display: flex;">
							<div class="j_common">验证</div>
							<div class="plp">
								<div class="_outin">
									<div id="hk"></div>
									<div id="ous">验证通过</div>
									<div id="oooo" @mousedown="dowm" @mouseup="doup" @mousemove="moves" class="glyphicon glyphicon-forward"></div>
								</div>
							</div>
						</div>
						<div>
							<div style="width: 40px;display: inline-block;"> </div>
							<button class="otn" id="lll" disabled onclick="window.location.href='www.baidu.com'">
								下一步</button>
						</div>
					</div>
				</div>
				<div class="tab-pane r" id="two">
					<div class="d-flex flex-column shyh">
						<p style="text-align: left; "><span><strong>登录名</strong></span><span>18574480156</span></p>
						<p style="text-align: left; "><span><strong>请设置登录密码</strong></span><span>登录时验证，保护账号信息</span></p>
						<p style="position: relative;"><span>登录密码</span><input @blur="dishi" @focus="huoqu" @keyup="anshang" placeholder="请设置你的登录密码">
							<a data-a="show" style="font-size: 12px;display: none;">
								<span style="display: block;" data-ios="op"><span></span><span></span><span></span></span>
								<span id="kai" style="display: block;"> 强度</span>
								<span style="display: block; "><span id="aaa">○</span> 6-20个字符</span>
								<span style="display: block; "><span id="bbb">○</span>只能包含，字母，数字，及标点符号（除空格）</span>
								<span style="display: block;"><span id="ccc">○</span>字母，数字，标点符号至少包含两种</span>
							</a>
						</p>
						<p><span>登录确认</span><input placeholder="请再次输入你的密码"></p>
						<p><span><strong>设置用户名</strong></span></p>
						<p><span>登录名</span><input placeholder="会员名一旦设置成功,无法修改"></p>
						<p><span></span><button id="sub">提交</button></p>
					</div>
				</div>
				<div class="tab-pane" id="three">
					设置支付方式
				</div>
				<div class="tab-pane" id="four">
					注册成功
				</div>
			</div>
			<div id="tops">
				<div onclick="disshow()" class="float-right pt-2 pr-3">
					<span class="iconfont icon-cancel-1-copy font-weight-bold hjh"></span>
				</div>
				<div class="p-4" style="line-height: 12px;margin-top: auto;">
					<a href="http://www.taobao.com/">
					</a>
					<div class="mb-3">
						<h1 style="font-size: 1.4rem;">注册协议</h1>
						<!-- 
						    元素 element
							vue.runtime.esm.js?2b0e:619 [Vue warn]: Unknown custom element: <h> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
							found in
							-> <Register> at src/views/payoff/register.vue
							       <App> at src/App.vue
							         <Root>
						 -->
					</div>
					<div>
						<p class="text_under"><strong>【审慎阅读】</strong>您在申请注册流程中点击同意前，应当认真阅读以下协议。<strong style="text-decoration: underline">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</strong></p>
						<p class="text_under">1、<strong>与您约定免除或限制责任的条款；</strong></p>
						<p class="text_under">2、<strong>与您约定法律适用和管辖的条款；</strong></p>
						<p class="text_under">3、<strong>其他以粗体下划线标识的重要条款。</strong></p>
						<p class="text_under">如您对协议有任何疑问，可向平台客服咨询。</p>
						<p style="text-decoration: none;"><strong>【特别提示】</strong>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。</p>
						<p class="text_under"><strong>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</strong></p>
						<p><a href="http://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html" target="_blank">淘宝平台服务协议</a></p>
						<p><a href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html"
							 target="_blank">隐私权政策</a></p>
						<p><a href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html"
							 target="_blank">法律声明</a></p>
						<p><a href="https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html" target="_blank">支付宝及客户端服务协议</a></p>
						<p style="text-align: center">
							<button class="btn btn-large" @click="agree()" type="button">同意协议</button>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div>
					<ul class="list-group" data-das="sh" id="list-top">
						<li class="list-group-item">
							<img src="img/2.png" width="80px" class="rounded">
							<span>×</span>
			 	
						</li>
					</ul>
				</div>
				<div>
					<ul class="list-group" id="list-bot">
						<li class="list-group-item own">淘宝账户名是指什么？</li>
						<li class="list-group-item own">忘记会员名，怎么找回？</li>
						<li class="list-group-item own">忘记淘宝账号密码，怎么找回？</li>
						<li class="list-group-item own">手机（停机、丢失等）收不到验证码，怎么办？</li>
						<li class="list-group-item own">手机、邮箱正常使用，但是接收不到验证码，怎么办？</li>
						<li class="list-group-item own"><img src="img/4.png" id="ddds">点我提问</li>
					</ul>
					<div id="sssss" class="qqq"></div>
				</div>
			 	
			</div>
		</div>
 		
 	 
 </template>
	  
  <style>
		body{
			font-family:arial, "Hiragino Sans GB", 宋体, sans-serif; 
			font-size: 12px !important;
			box-sizing: border-box; 
			outline: none !important;		
			border: none !important;
			color: #000000;
			padding: 0px;
			margin: 0px;
		}
		.text_under{
			text-decoration: underline;
		}		 
		a{
			color: #888;
		}
		#tops{
			 background-color: white;
			 margin: auto;
			 width: 800px;
			 left: 50%;
			 margin-left: -400px;
			 top: 50%;
			 margin-top: -220px;
			 position: absolute;
			 height: 440px;
			 display: block;
			 border: 2px solid #ddd;
			 border-top: #ff4001 2px solid;
		}
		.btn-large{
			 background-color: #ff4001 !important;
			 width: 160px;
			 border-radius: 0px;
			 color: white;
			 font-weight: 700;
		}
		.mark{
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background-color: #888;
			text-align: center;
			line-height: 16px;
			color: white;
		}
		.markss{
			display: inline-block;
			width: 20px;
			height: 20px;
			 
			background-color: #888;
			text-align: center;
			line-height: 16px;
			color: white;
		}
	    a:visited{
			border-bottom: 2px solid red !important;
		}
		 .nav-tabs .nav-item {
		     margin-bottom: 0px;
		 }		 
		.ul_s{
			color: #888 !important;
			text-align: center;
			margin-top: 100px;
		}
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
		.uid>li:hover{
			background-color: #ff4700;
		}
		.uid>li:first-child>ul{
			background-color: #f48000 !important;
		}
		#oko{
			border: 1px solid  rgb(219,219,219);
			display: flex;justify-content: space-between;width: 160px;height:37px;
			 line-height: 37px;
			font-size: 16px;
			color: #000000; 
			padding: 0px 5px;
		}
		.otn:focus{
			border: 0px;
		}
		.h_out{
			height: 200px;
			margin-top: 20px;
		}
		.j_common{
			width: 40px;
			display: inline-block;
			line-height: 40px;
		}
		#phone{
			 padding: 0px 10px;
			 width: 162px;
			 height: 35px;
			 float: right;
			 outline: 1px solid rgb(219,219,219);
			 border: 0;
			 border-left: 1px solid rgb(219,219,219);margin-top: 1px;
		}
		.plp{
			display: inline-block;
			width: 300px;
			height: 32px;
			background-color: rgb(239,239,239);
			position: relative;
		}
		#inner{
			position: absolute;
			right: -210px;
			top: 7px;
		}
		._outin{
			display: inline-block;
			background-color:rgb(122, 194, 60);
			height: 100%;
			text-align: center;
		}
		#ous{
			color: white;
			position: absolute;
			margin: auto;
			text-align: center;
			width: 300px;
			line-height: 32px;
			display: none;
		}
		#hk{
			position: absolute;
			background-color: red;
			background-color: #999;
			animation-timing-function: linear;
			animation-name: hk;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			margin-top: 10px;
			animation-duration: 6s;
	 
			animation-iteration-count: infinite;
		}
		@keyframes hk{
			0%{
				margin-left:0px;
				opacity: 1; 
			}
			30%{
				margin-left: 200px;
				opacity: 0;
			}
			75%{
				margin-left: 210px;
				opacity: 0;
			}
			100%{
				margin-left: 220px;
					opacity: 0;
			}
		} 
		#oooo{
			width: 32px;
			height: 100%;
			text-align: center;
			line-height: 32px;
			background-color: white;
			border: #ddd solid 1px;
			margin-top: -1px;
			background-color: #00AEEF;
		}
		.otn{
			width: 180px;
			height: 37px;
			outline: 0;
			border: 0;
			background-color: rgb(239,239,239);
		}
		#dfs{
			position: relative;
			display: inline-block;
			vertical-align: top;
			z-index: 999;
			
		}
		.hjh{
			color: #888;
		}
		.list-group-item {
	 
		  padding: 0.25rem 0.45rem;
	 
		}
		 .list-group:first-child .list-group-item:first-child {
		  border-top-left-radius: 1.1rem;
		  border-top-right-radius: 1.1rem;
		}
		
	    .list-group:last-child .list-group-item:last-child {
		  border-bottom-right-radius: 1.1rem;
		  border-bottom-left-radius: 1.1rem;
		}
		.list-group-item.own:nth-last-of-type(odd){
			background-color: #fff0cc;
		}
		.g_d{
			height: 630px;
			position: absolute;
			top: 0px;
			display: block;
			animation:hj 0.3s linear;
			right: 220px;
			background-color: rgba(0,0,0,.4);
			width: 720px;
			border-radius: 10px;
			box-shadow: 0px 0px 6px 6px #ccc;
		}
		@keyframes hj{
			from{
				width: 500px;
				background-color: rgb(0,0,0);
			}
			to{
				width: 720px;
				background-color: rgba(0,0,0,.4);
			}
		}
		.d-flex.flex-column.shyh>p{
			margin: 15px 0px;
		}
		.d-flex.flex-column.shyh>p>input{
			padding: 5px 15px;
		}
		
		.shyh>p>span:first-child{
			display: inline-block;
			width: 120px;
			text-align: right;
			margin-right: 20px;
		}
		 
		[data-a="show"]{
			display:inline-block;
			position: absolute;
			width: 280px;
			height: 220px; 
			left: 365px;
			top: -126%;
			background-color: #CCCCCC;
			padding: 10px;
		}
		[data-a="show"]>span{
			display: inline-block;
			 margin: 5px 0px;
		}
		[data-a="show"]::before{
			content: "";
			display: block;
			position: absolute;
			margin-top: 45px;
			border: 10px solid transparent;	
			border-right:10px solid #ddd;
			width: 10px;
			height: 10px;
		  
			margin-left: -30px;
		}
		 
		[data-ios="op"]>span{
			display: inline-block;
			width: 20px;
			height: 10px;
			margin: 5px;
			
			background-color: #888;
		}
		.ming{
			color: red;
			font-size: 17px;
		}
		#aaa,#bbb,#ccc{
			 font-size: 17px;
			display: inline-block;
			width: 20px;
			height: 30px;
		}
		.tys{
			display: inline-block;
			width: 20px;
			height: 20px;
		}
		.shyh{
			height: 500px;font-size:14px;
		}
		#sub{
			background-color: #ff4001;
			border: 5px;
			padding: 4px 80px;
		}
		#list-top{
			height: 200px; width: 120px;position: fixed;right: 100px;border-radius: 20px;bottom: 220px; 
		}
		#list-top>li{
			margin-bottom: -20px;text-align: center;position: relative;border: 0px solid red;
		}
		#list-top>li>span{
			display: inline-block;border-radius: 50%;width: 18px;height: 18px; position: absolute;right: 10px;font-size: 16px;background-color: #333;color: white;text-align: center;line-height: 18px;
		}
		#list-bot{
			  width: 120px;position: fixed;right: 100px;bottom: 50px;border-radius: 20px;border: 2px solid #ffb300;
		}
		  
		#list-bot>li:last-child{
			  background-color: #f7931e;color: white;
		}
	</style>
<script>
	export default{
		 
		data(){
			return{
				marks:false,
				zmarks:true,
				lefts:0,
				legth:false,
				baohan:false,
				kongge:false
			}
		},
		methods:{
			agree(){
				tops.style.display = "none";
			},
			dowm(){
				this.marks = true
			},
			doup(){
				this.marks = false;
			},
			moves(){
				if (this.marks == true && this.zmarks == true) {
					var k_left = one.offsetLeft + 40;
					//找到小块左边距离浏览器左边的距离,该数值应该一直不变
					var s_b = arguments[0].screenX;
					//得到鼠标距离左边的距离
					var x_k_l = oooo.offsetLeft + k_left;
					//得到小块距离左边的位置
					var x_k = s_b - x_k_l;
					if (s_b <= (k_left + 290)) {
						this.lefts = s_b - k_left - 10;
					} else {
						this.lefts = k_left + 280;
						ous.style.display = "block";
						lll.disabled = false;
						lll.style.backgroundColor = "#ff4001";
						oooo.className = `markss glyphicon glyphicon-ok`;
						zmarks = false;
						return;
					}
					if (s_b < k_left) {
						this.lefts = 0;
					}
					oooo.style.marginLeft = this.lefts + "px";
				}
			},
			// @blur="dishi" @focus="huoqu" @keyup="anshang"
			dishi(){
				var datashow = document.querySelector("[data-a=show]");
				datashow.style.display = "none";
			},
			huoqu(){
				var datashow = document.querySelector("[data-a=show]");
				datashow.style.display = "";
			},
			anshang(event){
				var _toggle = document.querySelector("[data-toggles=show]");
				var _temp = event.target.value;
				var _kg = /\s+/g;
				var _ze = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{2,20}$/;
				var two_ts = document.querySelectorAll("[data-ios=op]>span:first-child,[data-ios=op]>span:nth-child(2)");
				var one_ts = document.querySelector("[data-ios=op]>span:first-child");
				var three_ts = document.querySelectorAll("[data-ios=op]>span")
					console.log(_temp);
					if (_temp.length >= 6) {
						 
						this.legth = true;
						aaa.className = "ming";
						aaa.innerHTML = "√";
						for (let s1 of three_ts) {
							s1.style.backgroundColor = "#888";
						}
						for (let s of two_ts) {
							s.style.backgroundColor = "red";
						}
						kai.innerHTML = "密码强度:中";
						if (_temp.length >= 10) {
							kai.innerHTML = "密码强度:强";
							for (let s1 of three_ts) {
								s1.style.backgroundColor = "red";
							}
						}
					} else {
						if (_temp.length >= 1) {
							for (let s of two_ts) {
								s.style.backgroundColor = "#888";
							}
							kai.innerHTML = "密码强度:弱";
						}
						aaa.className = "ming";
						aaa.innerHTML = "×";
						one_ts.style.backgroundColor = "red";
					}
					if (_ze.test(_temp)) {
						console.log(1112222)
						ccc.className = "ming";
						this.baohan = true;
						ccc.innerHTML = "√";
					} else {
						ccc.className = "ming";
						ccc.innerHTML = "×";
					}
					if (_kg.test(_temp)) {
						this.kongge = true;
						bbb.className = "ming";
						bbb.innerHTML = "×";
					} else {
						bbb.className = "ming";
						bbb.innerHTML = "√";
					}
					if (this.legth && this.baohan && this.kongge) {
						console.log("成功");
					}
				},
				colo(event){
					var that = event.target;
					let ch = document.getElementsByClassName("sss");
					for (let chs of ch) {
						chs.style.borderColor = "white";
					}
					that.style.borderBottomColor = "red";
					that.style.borderBottomWidth = "2px";
				}
			}
		}
 
	
</script>	

<!-- 	<script type="text/javascript">
		export default{
			
		}
		 
			var _toggle = document.querySelector("[data-toggles=show]");
			var datashow = document.querySelector("[data-a=show]");
			var _ze = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{2,20}$/;
			var three_ts = document.querySelectorAll("[data-ios=op]>span")
			var one_ts = document.querySelector("[data-ios=op]>span:first-child");
			var two_ts = document.querySelectorAll("[data-ios=op]>span:first-child,[data-ios=op]>span:nth-child(2)");
			var _kg = /\s+/g;
			var _legth = false;
			var _baohan = false;
			var _kongge = false;
			_toggle.onfocus = function() {
				datashow.style.display = "";
			}
			_toggle.onblur = function() {
				datashow.style.display = "none";
			}
			_toggle.onkeyup = function() {
				var _temp = _toggle.value;
				console.log(_temp);
				if (_temp.length >= 6) {
					_legth = true;
					aaa.className = "ming";
					aaa.innerHTML = "√";
					for (let s1 of three_ts) {
						s1.style.backgroundColor = "#888";
					}
					for (let s of two_ts) {
						s.style.backgroundColor = "red";
					}
					kai.innerHTML = "密码强度:中";
					if (_temp.length >= 10) {
						kai.innerHTML = "密码强度:强";
						for (let s1 of three_ts) {
							s1.style.backgroundColor = "red";
						}
					}
				} else {
					if (_temp.length >= 1) {
						for (let s of two_ts) {
							s.style.backgroundColor = "#888";
						}
						kai.innerHTML = "密码强度:弱";
					}
					aaa.className = "ming";
					aaa.innerHTML = "×";
					one_ts.style.backgroundColor = "red";
				}
				if (_ze.test(_temp)) {
					console.log(1112222)
					ccc.className = "ming";
					_baohan = true;
					ccc.innerHTML = "√";
				} else {
					ccc.className = "ming";
					ccc.innerHTML = "×";
				}
				if (_kg.test(_temp)) {
					_kongge = true;
					bbb.className = "ming";
					bbb.innerHTML = "×";
				} else {
					bbb.className = "ming";
					bbb.innerHTML = "√";
				}
				if (_legth && _baohan && _kongge) {
					console.log("成功");
				}
			}
		})()
		ddds.onclick = function() {
			console.log(sssss.className);
			if (sssss.className == "qqq") {
				console.log(sssss.className);
				console.log(222222222);
				sssss.className = "g_d";
			} else {
				sssss.className = "qqq";
			}
		}
		var marks = false;
		var zmarks = true;
		oooo.onmousedown = function() { //鼠标按下事件
			marks = true;
		}
		oooo.onmouseup = function() {
			marks = false;
		}
		window.onmousemove = function() { //鼠标移动事件
			if (marks == true && zmarks == true) {
				var k_left = one.offsetLeft + 40;
				//找到小块左边距离浏览器左边的距离,该数值应该一直不变
				var s_b = arguments[0].screenX;
				//得到鼠标距离左边的距离
				var x_k_l = oooo.offsetLeft + k_left;
				//得到小块距离左边的位置
				var x_k = s_b - x_k_l;
				if (s_b <= (k_left + 290)) {
					lefts = s_b - k_left - 10;
				} else {
					lefts = k_left + 280;
					ous.style.display = "block";
					lll.disabled = false;
					lll.style.backgroundColor = "#ff4001";
					oooo.className = `markss glyphicon glyphicon-ok`;
					zmarks = false;
					return;
				}
				if (s_b < k_left) {
					lefts = 0;
				}
				oooo.style.marginLeft = lefts + "px";
			}
		}
		phone.onblur = () => {
				var sh = phone.value;
				var reg = /^1[3-9]\d{9}$/;
				if (reg.test(sh)) {
					inner.innerHTML = `<span
					 class="mark glyphicon glyphicon-ok">`;
					inner.style.right = "-30px"
				} else {
					inner.innerHTML = `<span class="glyphicon glyphicon-remove"></span>手机号码格式不正确，请重新输入`;
					inner.style.right = "-210px"
				}
			}
			(function() {
				var https = new XMLHttpRequest();
				https.open("GET", "地区.json",
					true);
				https.send();
				https.onreadystatechange = function() {
					if (https.readyState == 4 && https.status == 200) {
						var json = JSON.parse(https.responseText);
						console.log(json);
						shows(json)
					}
				}
			})()


		function shows(nest) {
			var start =
				`<li onclick="showis()">
		<ul id="oko" >
			<li style="flex:0 0 50%;text-align: left;">中国大陆</li>
			<li style="flex:0 0 50%;text-align: right;">+86</li>
		</ul>
	    </li>	<li id="nest" style="display: none;position:absolute;top:37px">
		<ul class="uid" style="width: 160px; background-color: #888;height: 100px;overflow: auto;">`;
			var npm = nest["list"];
			for (var i = 0; i < npm.length; i++) {
				var city = npm[i].city;
				var code = npm[i].code;
				start +=
					`<li>
				<ul   onclick="checked(this)" style="display: flex;justify-content: space-between;background-color:white;">
					<li style="flex:0 0 50%;text-align: left;">${city}</li>
					<li style="flex:0 0 50%;text-align: right;">${code}</li>
				</ul>
			</li>`
			}
			start += `</ul>
	</li>`;
			dfs.innerHTML = start;
		}

		function checked(ts) {
			console.dir(ts.children[1].innerHTML);
			var d1 = ts.children[0].innerHTML;
			var d2 = ts.children[1].innerHTML;
			ts.__proto__.toString = function() {
				var ts =
					`<li style="flex:0 0 50%;text-align: left;">${d1}</li>
									<li style="flex:0 0 50%;text-align: right;">${d2}</li>`;
				return ts;
			}
			oko.innerHTML = ts.toString();
			nest.style.display = "none";
		}
		let showis = () => {
			if (nest.style.display == "none") {
				nest.style.display = "block";
			} else {
				nest.style.display = "none";
			}
		}

		let colo = (that) => {
			let ch = document.getElementsByClassName("sss");
			for (let chs of ch) {
				chs.style.borderColor = "white";
			}
			that.style.borderBottomColor = "red";
			that.style.borderBottomWidth = "2px";
		}
		let agree = () => {
			tops.style.display = "none";
		}
		let ready = () => {
			tops.style.top = (window.innerHeight - 440) / 2 + "px";
			tops.style.left = (window.innerWidth - 800) / 2 + "px";
			window.addEventListener("resize", function() {
				tops.style.top = (window.innerHeight - 440) / 2 + "px";
				tops.style.left = (window.innerWidth - 800) / 2 + "px";
			});
		}
		let disshow = () => {
			if (tops.style.display == "block") {
				tops.style.display = "none";
			} else {
				tops.style.display = "block";
			}
		}
	</script>
 -->