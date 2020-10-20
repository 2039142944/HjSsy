<template>
	<div class="contain">

		<div class="context">
			<div class="pic"><img src="~assets/img/4.jpg"></div>
			<div style="text-align: left;padding: 20px;">
				<p>订单提交成功，请尽快付款！订单号：<span>127990573086</span></p>
				<p>推荐使用 扫码支付 | 请您在<span id="ooo"><countdown :info="'ooo#2067:10:16:15:20:10'" style="color: red;"></countdown></span>
					内完成支付，否则订单会被自动取消</p>
			</div>
			<div style="text-align: right;padding: 20px;">
				<p>应付金额86.90元</p>
				<p>订单详情 <span class="sanjiao" @click="selected" style="cursor: pointer;"></span></p>
				
			</div>
		</div>
		 
		<div class="com" :class="{dressconte}">
			  <hr />
			 <p>收货地址：陕西西安市雁塔区电子城街道电子城街道高新区高新路南洋国际三楼达内教育     收货人：**亮    ****0156</p>
			 <p>商品名称：个个熊 儿童运动鞋2020年秋款男童运动鞋软底透气网面女童休闲鞋宝宝鞋 A28 灰色 27码/内长16.5CM</p>

		</div>
		<div style="margin:0px 0px;" class="largtable">
			<el-table :data="goodsinfo">
				<el-table-column width="180">
					<template v-slot:default="scope">
						<!-- <img src="~assets/img/1.jpg"/> -->
						<input type="radio" name="info" />
					</template>
				</el-table-column>
				<el-table-column prop="price">

				</el-table-column>
				<el-table-column prop="num">

				</el-table-column>
				<el-table-column prop="mark">

				</el-table-column>
			</el-table>
		</div>
		<div style="position: relative;margin-bottom: 80px;margin-top: 20px;">
			<button @click="showinfo" class="buttoncom" style="background-color: white;border: 1px solid #888;color: #000000;">卡支付</button>
		</div>
		
		 
		 
		<div style="position: relative;">
			<button class="buttoncom">立即支付</button>
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
		data() {
			return {
				curr:0,
				dialogVisible:false,
				dressconte:false,
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
		methods:{
			infosse1(i) {
				this.curr = i
			},
			selected(){
				this.dressconte = !this.dressconte;
			},
			showinfo() {
				this.dialogVisible = true;
			}
		}
	}
</script>

<style>
	/deep/ .el-table__header-wrapper{
		height: 0 !important;
	}
	.com{
		opacity: 0;
		height: 0;
	}
	.dressconte{
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
