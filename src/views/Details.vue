 <template>
 	<div class="container" style="margin-top: 40px;">
 		<div class="row no-gutters top_nav mb-3">
 			<div class="col-sm-12 col-lg-8">
 				<ul class="breadcrumb breadcrumb_fontsize bg-transparent">
 					<li class="breadcrumb-item"><a href="">电脑、办公</a></li>
 					<li class="breadcrumb-item"><a href="">电脑整机</a></li>
 					<li class="breadcrumb-item"><a href="">笔记本</a></li>
 					<li class="breadcrumb-item"><a href="">苹果（Apple）</a></li>
 					<li class="breadcrumb-item">
 						<a href="">苹果（Apple）MacBook Air 13.3英寸</a>
 					</li>
 				</ul>
 			</div>
 			<div class="col-sm-12 col-lg-4">
 				<ul class="d-flex justify-content-center align-content-center top_right breadcrumb_fontsize">
 					<li class="mt-1"><a href="">疆界旗舰店</a></li>
 					<li>
 						<img class="mt-1" src="/images/details/star.png" alt="" />
 					</li>
 					<li>
 						<a href="#">
 							<img class="img_2" src="/images/details/kefu.png" alt="" />
 							<span>联系客服</span>
 						</a>
 					</li>
 					<li>
 						<a href="">
 							<img class="img_3" src="/images/details/star2.png" alt="" />
 							<span>关注店铺</span>
 						</a>
 					</li>
 				</ul>
 			</div>
 		</div>
 		<div class="row no-gutters">
 			<div class="col-lg-4 col-md-6 col-sm-12 extend_big">
 				<my-fangdajin></my-fangdajin>
 			</div>
 			<div class="col-lg-8 details_text">
 				<div class="details">
 					<img class="details_top_img" src="/images/details/img-1.png" alt="" />
 					<span class="ml-2 details_span" style="text-align: left">苹果（Apple）MacBook Air 13.3英寸笔记本电脑
 						【17爆款金属银】双核i5/8G/128G 19点前付款当天发货</span>
 				</div>
 				<div class="d-flex justify-content-between bac">
 					<div>
 						<img src="/images/details/tu.png" alt="" />
 						<strong>京东秒杀</strong>
 					</div>
 					<div class="seckill_time mt-2 mr-2">
 						<i class="mr-2 text-white">距离时间</i>
 						<span id="onekk">
 							<count-down :info="'onekk#2090:10:19:23:10:0'" />
 						</span>
 					</div>
 				</div>
 				<div class="details_1">
 					<div class="d-flex justify-content-between">
 						<div class="price">
 							<span>秒杀价</span>
 							<span id="zhprice">￥9969.00</span>
 							<span>[<del>￥10999.00</del>]</span>
 							<span><a href="#">降价通知</a></span>
 						</div>
 						<div class="evaluate">
 							<p>累计评价</p>
 							<p><a href="#">8200+</a></p>
 						</div>
 					</div>
 					<div>
 						<span>促销</span>
 						<span class="cuxiao">限购</span>
 						<span>该商品购买1-3件时享受单件价￥9969.00，超出数量以结算价为准</span>
 					</div>
 					<div>
 						<span class="manjian">满减</span>
 						<span>15000.00元选2件</span>
 					</div>
 				</div>
 				<div class="zengzhi">
 					<span>增值业务</span>
 					<a href="#">旧无人机换好礼</a>
 				</div>
 				<div class="address">
 					<span>配送至</span>
					<!--<my-jilianliebiao></my-jilianliebiao>-->
 					
 					<span>有货</span>
 					<span>支持</span>
 					<a href="#">闪电退款</a>
 					<span>|</span>
 					<a href="#">极速审核</a>
 					<span>|</span>
 					<a href="#">货到付款</a>
 					<span>免运费</span>
 					<a href="#"><img src="/images/details/wenhao.png" alt=""></a>
 				</div>
 				<div class="shouhou">
 					<span>由<a href="#">京东</a>发货, 并提供售后服务. 23:54前下单,<strong>预计明天(10月17日)</strong>送达</span>
 				</div>
 				<el-divider></el-divider>
 				<div class="d-flex">
 					<div class="wenzi">
 						<span>选择型号</span>
 					</div>
 					<div class="xinghao">
 						<div>
 							<img src="images/fangdajin/sm/fd-sm-1.jpg" alt="">
 							<span  >白色4k航拍-双电版</span>
 						</div>
 						<div>
 							<img src="images/fangdajin/sm/fd-sm-1.jpg" alt="">
 							<span>白色4k航拍-双电版</span>
 						</div>
 						<div>
 							<img src="images/fangdajin/sm/fd-sm-1.jpg" alt="">
 							<span>白色4k航拍-双电版</span>
 						</div>
 						<div>
 							<img src="images/fangdajin/sm/fd-sm-1.jpg" alt="">
 							<span>白色4k航拍-双电版</span>
 						</div>
 						<div>
 							<img src="images/fangdajin/sm/fd-sm-1.jpg" alt="">
 							<span>白色4k航拍-双电版</span>
 						</div>
 					</div>
 				</div>
 				<div class="shouhou2">
 					<span>增值保障</span>
 					<el-dropdown>
 						<el-button size='small'>
 							爱心回收￥3.00<i class="el-icon-arrow-down el-icon--right"></i>
 						</el-button>
 						<el-dropdown-menu slot="dropdown">
 							<el-dropdown-item>黄金糕</el-dropdown-item>
 						</el-dropdown-menu>
 					</el-dropdown>
 					<el-dropdown>
 						<el-button size='small'>
 							3个月保换￥12.00<i class="el-icon-arrow-down el-icon--right"></i>
 						</el-button>
 						<el-dropdown-menu slot="dropdown">
 							<el-dropdown-item>黄金糕</el-dropdown-item>
 							<el-dropdown-item>狮子头</el-dropdown-item>
 						</el-dropdown-menu>
 					</el-dropdown>
 				</div>
 				<div class="fenqi">
 					<span class="ml-1">白条分期</span>
					<div @click="writeshow">
						<el-tooltip class="ml-2" content="无服务费" placement="bottom" effect="light">
							<el-button class="marks" autofocus>不分期</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.10%" placement="bottom" effect="light">
							<el-button class="marks">{{priceinfo[0]}}</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.20%" placement="bottom" effect="light">
							<el-button class="marks" >{{priceinfo[1]}}</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.30%" placement="bottom" effect="light">
							<el-button  class="marks">{{priceinfo[2]}}</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.40%" placement="bottom" effect="light">
							<el-button class="marks">{{priceinfo[3]}}</el-button>
						</el-tooltip>
					</div>
 					
 					<a href="#"><img src="/images/details/wenhao.png" alt=""></a>
 					<el-divider></el-divider>
 					<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
 					<el-button type="danger" class="ml-2" @click="gocar">加入购物车</el-button>
 					<el-button type="success" @click="whitepay" :class="{writiao}">打白条</el-button>
 					<p class="mt-3">温馨提示：支持7天无理由退换货</p>
 				</div>
 			</div>
 		</div>
 	</div>
 </template>
 <style scoped>
	.writiao{
		display: none;
	}
 	.fenqi {
 		color: #666;
 		font-size: 12px;
 		margin-top: 5px;
 	}
 	.fenqi,
 	.shouhou2 span {
 		color: #aaa;
 	}
 	.shouhou2 {
 		font-size: 12px;
 		color: #666;
 	}
 	.shouhou2 * {
 		margin-left: 5px;
 	}
 	.wenzi span {
 		color: #aaa;
 		font-size: 12px;
 		display: block;
 		margin-right: 5px;
 		width: 50px;
 	}
 	.xinghao * {
 		font-size: 12px;
 		color: #666;
 		margin-left: 10px;
 		margin-bottom: 5px;
 	}
 	.xinghao div {
 		width: 180px;
 		height: 55px;
 		float: left;
 		border: 1px solid #aaa;
 	}
 	.xinghao div:hover {
 		border: 1px solid red;
 	}
 	.xinghao img {
 		vertical-align: middle;
 	}
 	.shouhou {
 		margin-left: 55px;
 		font-size: 12px;
 		color: #666666;
 		margin-top: 15px;
 	}
 	.shouhou a {
 		text-decoration: none;
 	}
 	.address {
 		position: relative;
 		margin-top: 10px;
 	}
 	.address span:nth-child(2) {
 		font-weight: bold;
 	}
 	.address img {
 		position: absolute;
 		top: -5px;
 	}
 	.address * {
 		margin-left: 10px;
 	}
 	.address span {
 		color: #aaa;
 		font-size: 12px;
 	}
 	.address a {
 		color: rgb(96, 96, 230);
 		font-size: 12px;
 		text-decoration: none;
 		height: 20px;
 	}
 	.address a:hover {
 		color: purple;
 	}
 	.zengzhi {
 		margin-top: 10px;
 	}
 	.zengzhi span {
 		color: #aaa;
 		margin-left: 5px;
 		font-size: 12px;
 	}
 	.zengzhi a {
 		text-decoration: none;
 		font-size: 12px;
 		background: url(/images/details/shuaxin.png) no-repeat 0;
 		display: inline-block;
 		padding: 2px 2px 2px 15px;
 		border: 1px solid #ccc;
 		border-radius: 15px;
 		margin-left: 15px;
 	}
 	.cuxiao {
 		color: #df3033;
 		background: 0 0;
 		border: 1px solid #df3033;
 		padding: 2px 3px;
 		margin-right: 5px;
 		display: inline-block;
 		line-height: 16px;
 	}
 	.manjian {
 		color: #df3033;
 		background: 0 0;
 		border: 1px solid #df3033;
 		padding: 2px 3px;
 		margin-right: 15px;
 		margin-left: 14px;
 		display: inline-block;
 		line-height: 16px;
 	}
 	.details_1 div:last-child {
 		padding-left: 44px;
 	}
 	.details_1 span:first-child {
 		color: #aaa;
 	}
 	.details_1 {
 		background-color: #f3f3f3;
 		color: #666666;
 		font-size: 12px;
 	}
 	.details_1 div:nth-child(2) span {
 		margin-left: 17px;
 	}
 	.details_1>div {
 		padding: 7px 0;
 	}
 	.price span:nth-child(2) {
 		color: #e4393c;
 		font-size: 22px;
 		font-family: "microsoft yahei";
 	}
 	.price span {
 		padding-left: 10px;
 	}
 	.price {
 		width: 300px;
 		color: #666;
 	}
 	.evaluate {
 		border-left: 1px solid #aaa;
 	}
 	.evaluate p {
 		padding: 0px 5px 0px 10px;
 	}
 	.evaluate a:hover {
 		color: #666666;
 		text-decoration: none;
 	}
 	.evaluate a {
 		font-size: 14px;
 	}
 	.seckill_time {
 		color: #fff;
 	}
 	.seckill_time span {
 		width: 15px;
 		height: 15px;
 		background-color: rgb(51, 2, 2);
 		/* margin-left: 5px; */
 		padding: 4px;
 	}
 	.bac strong {
 		display: block;
 		color: #fff;
 		margin: 8px 0 0 10px;
 		float: left;
 	}
 	.bac img {
 		max-width: 20px;
 		margin: 5px 0 0 10px;
 		float: left;
 	}
 	.bac {
 		height: 32px;
 		background: url(/images/details/bac.jpg) no-repeat #fe0851;
 	}
 	.details_span {
 		font: 700 16px Arial, "microsoft yahei";
 	}
 	.details {
 		margin-bottom: 5px;
 	}
 	.extend_big img {
 		width: 462px;
 		height: 352px;
 	}
 	/* 导航栏 */
 	.top_nav {
 		background-color: #eee;
 		height: 32px;
 	}
 	.breadcrumb-item+.breadcrumb-item::before {
 		content: ">";
 	}
 	.breadcrumb_fontsize {
 		font-size: 12px;
 	}
 	.breadcrumb_fontsize a {
 		color: #666666;
 	}
 	.breadcrumb_fontsize a:hover {
 		text-decoration: none;
 	}
 	ul.top_right li img {
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
 	.img_2,
 	.img_3 {
 		width: 20px;
 		height: auto;
 		vertical-align: middle;
 	}
 </style>
 <script>
 	import countDown from 'components/payoff/countdown'
	import { mapActions } from "vuex"
	import {
		mapState
	} from 'vuex'
 	export default {
 		name: "info",
 		components: {
 			countDown
 		},
 		data() {
 			return {
 				num: 1,
				writiao:true,
				priceinfo:[],
				tempinfo:"",
				unameacc:"yml",
				cartinfo:  {
					name:'yml',
					shopname: 'BABIBOY外套男冬季韩版修身短款冬装棉服潮流男棒球服棉袄 17111黑色',
					price: '￥99.00',
					num: '2',
					pricesums:'￥198',
					mark: '有',
					shopid:'/images/fangdajin/sm/fd-sm-1.jpg'
				},
				count:0
 			};
 		},
		computed: {
			...mapState(["uname"]),
		},
		mounted(){
		    // 初始化加载看用户是否已经登录，登录显示数据
			this.showcarnum();
			// 算出的价格进行显示
			this.pricesum();
		},
 		methods: {
			...mapActions([
				"login"
			]),	
			// 事件总线的开始
			textinfo(){
				var count = this.count;
			      this.zdybus.$emit("textinfo",count);
			},
			showcarnum(){
				var unmae=sessionStorage.getItem("uname");
				if(unmae!=null){
					this.axios.post("/carselect",{uname:"yml"}).then(val=>{
						 this.count = val.data.data.length;
						 this.textinfo();
					})
				}
			},
			
			// 加入购物车的逻辑
			gocar(){
				this.login(this.unameacc);
				var unmae = this.uname || sessionStorage.getItem("uname");
				// 后期需要传参写业务逻辑
				if(!unmae){
					alert("未登录")
				}else{
					// 登录的逻辑
					this.axios.post("/cartadd",this.cartinfo).then(val=>{
						console.log(val);
					})
					// 显示购物车的数量,级数据保存在本地
					this.axios.post("/carselect",{uname:"yml"}).then(val=>{
						 this.count = val.data.data.length;
						 this.textinfo();
						 this.showcarnum();
					})
				}
			},
			
			// 侠士白条的数据
			pricesum(){
				var info = []
				var _price = zhprice.innerHTML;
				_price = parseInt(_price.substring(1));
			
				info.push("￥"+Math.floor(_price*1.1/3*100)/100 +"*3期") 
				info.push("￥"+Math.floor(_price*1.2/6*100)/100  +"*6期")
				info.push("￥"+Math.floor(_price*1.3/12*100)/100 +"*12期")
				info.push("￥"+Math.floor(_price*1.4/24*100)/100 +"*24期")
				info.push("￥"+Math.floor(_price)) 
				this.priceinfo = info;
			},
			whitepay(){
				var infos = [];
				this.cartinfo.priceinfo = this.priceinfo;
				this.cartinfo.selectpriceinfo = this.tempinfo;
				infos.push(this.cartinfo); 
				var _info =  JSON.stringify(infos);
				_info = encodeURIComponent(_info);
				
				this.$router.push(`payoff/${_info}`) 
					 
					 
				
				 // var info = []
				 // var _price = zhprice.innerHTML;
				 // _price = parseInt(_price.substring(1));
				 // info.push("￥"+Math.floor(_price*1.1/3*100)/100 +"*3期") 
				 // info.push("￥"+Math.floor(_price*1.2/6*100)/100  +"*6期")
				 // info.push("￥"+Math.floor(_price*1.3/12*100)/100 +"*12期")
				 // info.push("￥"+Math.floor(_price*1.4/24*100)/100 +"*24期")
				 // this.priceinfo = info;
				 
			},
			writeshow(event){
				this.writiao=false;
				var tempinfo = "";
				if(event.target.nodeName == "SPAN" || event.target.nodeName == "BUTTON"){
					if(event.target.nodeName == "BUTTON"){
						tempinfo=event.target.lastChild.innerHTML;
						this.selectsinfo();
						event.target.style.backgroundColor="red"
					}else{
						tempinfo=event.target.innerHTML;
						this.selectsinfo();
						event.target.parentElement.style.backgroundColor="red"
					}
					this.tempinfo = tempinfo;
				}
			},
			// 其他的颜色取消
			selectsinfo(){
				const info = document.getElementsByClassName("marks");
				var infos = [...info];
				console.log(infos);
				infos.forEach(val=>{
					val.style.backgroundColor="white"
				})
			},
 			handleChange(value) {
 				console.log(value);
 			}
 			
 		}
 	};
 </script>
 
