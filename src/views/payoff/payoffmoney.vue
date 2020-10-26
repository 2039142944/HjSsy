<template>
	<div class="contain">

		<div class="context">
			<div class="pic"><img src="~assets/img/4.jpg"></div>
			<div style="text-align: left;padding: 20px;">
				<p>订单提交成功，请尽快付款！订单号：<span>127990573086</span></p>
				<p>推荐使用 扫码支付 | 请您在<span id="ooo">
						<countdown :info="'ooo#2067:10:16:15:20:10'" style="color: red;"></countdown>
					</span>
					内完成支付，否则订单会被自动取消</p>
			</div>
			<div style="text-align: right;padding: 20px;">
				<p>应付金额86.90元</p>
				<p>订单详情 <span class="sanjiao" @click="selected" style="cursor: pointer;"></span></p>

			</div>
		</div>

		<div class="com" :class="{dressconte}">
			<hr />
			<p>收货地址：陕西西安市雁塔区电子城街道电子城街道高新区高新路南洋国际三楼达内教育 收货人：**亮 ****0156</p>
			<p>商品名称：个个熊 儿童运动鞋2020年秋款男童运动鞋软底透气网面女童休闲鞋宝宝鞋 A28 灰色 27码/内长16.5CM</p>

		</div>
		<div>
			<div style="margin-top: 50px;position: relative;z-index: 10;">
				<div class="writesum" style="width: 100%;">
					<div style="text-align: left; font-size: 16px;">
						<input type="checkbox" @click="onc('top')" v-model="selectone" />
						<strong>打白条</strong>

					</div>
					<div> <span><strong>白条可用额度10000</strong></span></div>
					<div></div>
				</div>
				<div>
					<div @click="writeshow" v-show="nes">
						<el-tooltip content="含服务费：费率0.10%" placement="bottom" effect="light">
							<el-button class="marks">{{price}} </el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.10%" placement="bottom" effect="light">
							<el-button class="marks">{{wriceprice[0]}} </el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.20%" placement="bottom" effect="light">
							<el-button class="marks"> {{wriceprice[1]}}</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.30%" placement="bottom" effect="light">
							<el-button class="marks"> {{wriceprice[2]}}</el-button>
						</el-tooltip>
						<el-tooltip content="含服务费：费率0.40%" placement="bottom" effect="light">
							<el-button class="marks"> {{wriceprice[3]}}</el-button>
						</el-tooltip>
					</div>
				</div>
			</div>
			<div>
				<div class="writesum" style="width: 100%;">
					<div style="text-align: left; font-size: 16px;">
						<input type="checkbox" @click="onc('bottom')" v-model="selecttwo" /><strong>建设银行</strong>
					</div>
					<div style="text-align: left;"> <strong>(尾号)5277</strong></div>
					<div>支付<span style="color: red;font-size: 16px;font-weight: 900;"> {{price}}</span>元</div>
				</div>
				<div v-show="nesbottom">
				 
				</div>
			</div>
		</div>
		<div style="position: relative;margin-bottom: 80px;margin-top: 20px;">
		</div>
		<div style="position: relative;">
			<button class="buttoncom" @click="sele">立即支付</button>
		</div>
		<el-dialog title="新增收货人信息" :visible.sync="dialogVisible" width="50%">

			<div style="height: 200px;cursor: pointer;">
				<tabbar @func="infosse1" :title="['快捷支付', '网银支付']">
					<div class="text" slot="context" style="margin-top: 20px;background-color: #ccc;">
						<div v-show="0==curr">
							快捷支付
						</div>
						<div v-show="1==curr">网银支付</div>
					</div>
				</tabbar>
			</div>

		</el-dialog>
	</div>

</template>

<script>
	import countdown from 'components/payoff/countdown.vue'
	import tabbar from '../../components/payoff/tabbar.vue'
	export default {
		components: {
			countdown,
			tabbar
		},
		props:['cartinfo'],
		mounted() {
			if (this.cartinfo) {
				var infos = JSON.parse(decodeURIComponent(this.cartinfo));
			}

			// 根据传过来的数组长度，进行判断，到底是白条分期还是，普通购物购买
			// 长度为3表示普通，长度为一表示白条分期

			this.dataparse(infos);
		},
		data() {
			return {
				// 该字段用于让多选框成为单选框
				selectone: true,
				selecttwo: false,
				curr: 0,
				nes: true,
				nesbottom: false,
				dialogVisible: false,
				dressconte: false,
				wriceprice:[],
				price:'',
				goodsinfo: [
					// 这是图片动态加载问题
					{
						pic: require('@/assets/img/1.jpg'),
						price: '10元',
						num: '5',
						mark: '有'
					},
					{
						pic: require('@/assets/img/1.jpg'),
						price: '10元',
						num: '2',
						mark: '没有'
					},
				],
			}
		},
		methods: {
			dataparse(argo) {
				var tempobjext = {}
				if (argo.length == 1) {
					console.log("32444444444444234234");
					console.log(argo);
					this.wriceprice =  argo[0].priceinfo;
					this.price = argo[0].priceinfo[4];

				} else if (argo.length == 3) {
					console.log("32444444444444234234");
					this.pricesum(argo[1]);
				}

			},
			pricesum(info){
				var  _price="";
				_price = parseInt(info.substring(1));
			
				this.wriceprice.push("￥"+Math.floor(_price*1.1/3*100)/100 +"*3期") 
				this.wriceprice.push("￥"+Math.floor(_price*1.2/6*100)/100  +"*6期")
				this.wriceprice.push("￥"+Math.floor(_price*1.3/12*100)/100 +"*12期")
				this.wriceprice.push("￥"+Math.floor(_price*1.4/24*100)/100 +"*24期")
				this.wriceprice.push("￥"+Math.floor(_price))
				this.price=_price
			 
				 
			},
			sele(){
				alert("该功能未实现")
			},
			writeshow(event) {
				this.writiao = false;
				var tempinfo = "";
				if (event.target.nodeName == "SPAN" || event.target.nodeName == "BUTTON") {
					if (event.target.nodeName == "BUTTON") {
						tempinfo = event.target.lastChild.innerHTML;
						this.selectsinfo();
						event.target.style.backgroundColor = "red"
					} else {
						tempinfo = event.target.innerHTML;
						this.selectsinfo();
						event.target.parentElement.style.backgroundColor = "red"
					}
					this.tempinfo = tempinfo;
				}
			},
			// 其他的颜色取消
			selectsinfo() {
				const info = document.getElementsByClassName("marks");
				var infos = [...info];
				console.log(infos);
				infos.forEach(val => {
					val.style.backgroundColor = "white"
				})
			},
			onc(info) {
				if (info == 'top') {
					if (this.selectone == true) {
						this.selectone = false;
						this.nes = false;
					} else {
						// 用于单选框的切换
						this.selectone = true;
						this.selecttwo = false;

						// 当从未选中状态到选中状态
						this.nes = true;
						this.nesbottom = false;
					}
				} else {
					if (this.selecttwo == true) {
						this.selecttwo = false;
						this.nesbottom = false;
					} else {
						this.selecttwo = true;
						this.selectone = false;
						this.nesbottom = true;
						this.nes = false;
					}
				}
			},
			infosse1(i) {
				this.curr = i
			},
			selected() {
				this.dressconte = !this.dressconte;
			},
			showinfo() {
				this.dialogVisible = true;
			}
		}
	}
</script>

<style>
	.writesum {
		display: flex;
		justify-content: space-around;
	}

	.writesum>div {
		width: 33%;
		text-align: left;
	}

	/deep/ .el-table__header-wrapper {
		height: 0 !important;
	}

	.com {
		opacity: 0;
		height: 0;
	}

	.dressconte {
		padding-left: 15px;
		width: 100%;
		height: 80px;
		background-color: #CCCCCC;
		opacity: 1;
		transition: All 0.5s;
	}

	.sanjiao {
		display: inline-block;
		width: 0;
		height: 0;
		border: 5px solid red;
		border-top-color: black;
		border-bottom: none;
		border-left-color: transparent;
		border-right-color: transparent;
	}

	p {
		margin-bottom: 0px !important;
	}

	.pic {
		width: 88px !important;
		height: 88px;
		border: 1px solid red;
		overflow: hidden;

	}

	.pic>img {
		margin-left: -12px;
		margin-top: -9px;
		width: 110px;
		vertical-align: middle;
	}

	.buttoncom {

		position: absolute;
		left: 0px;
		width: 135px;
		height: 36px;
		line-height: 36px;
		margin-right: 2px;
		padding: 0;
		background-color: #e00;
		overflow: hidden;
		color: #fff;
		font-weight: 700;
		font-size: 16px;
		font-family: arial, "Microsoft YaHei";
		display: inline-block;
		border-radius: 3px;
		cursor: pointer;
		border: 0;
	}

	.contain {
		margin: 100px 100px;

		border: 1px solid #ddd;
		padding: 50px;
		min-width: 700px;
		font-size: 12px;
	}

	.context {
		display: flex;
		align-items: center;

	}

	.context>div:first-child {
		width: 15%;

	}

	.context>div:nth-child(2) {
		width: 55%;

	}

	.context>div:nth-child(3) {
		width: 30%;
	}
</style>
