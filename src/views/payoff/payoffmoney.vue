<template>
	<div class="contain">
		<div class="context">
			<div><img src="~assets/img/4.jpg" width="100px"></div>
			<div style="text-align: left;padding: 20px;">
				<p>订单提交成功，请尽快付款！订单号：<span>127990573086</span></p>
				<p>推荐使用 扫码支付 | 请您在 28分10秒 内完成支付，否则订单会被自动取消</p>
			</div>
			<div style="text-align: right;padding: 20px;">
				<p>应付金额86.90元</p>
				<p>订单详情 </p>
			</div>
		</div>
		<div style="margin:10px 0px;" class="largtable">
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
		 
	<div style="position: relative;">
		 <button class="buttoncom">立即支付</button>
	 </div>
		
	</div>

</template>

<script>
	export default {
		data() {
			return {
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
		}

	}
</script>

<style>
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
		margin: 100px 300px;
		height: 1000px;
		border: 1px solid #ddd;
		padding: 30px;
		min-width: 700px;
	}

	.context {
		display: flex;


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
