<template>
	<div>
		<div class="containtop" style="display: flex;justify-content: space-between;flex-wrap: nowrap;align-items: center;">
			<div style="flex: 0 0 20%;">
				<a data-v-fae5bece="" href="#">
					<img data-v-fae5bece="" src="~assets/images/shuangshiyi.png" style="max-width: 120px;" alt="" class="shuangshiyi mt-1">
					<span data-v-fae5bece="">双十一</span>
				</a>
			</div>

			<div style="flex: 0 0 60%;">
				<el-steps :active="1" finish-status="success">
					<el-step title="查看购物车"></el-step>
					<el-step title="拍下商品"></el-step>
					<el-step title="支付"></el-step>
					<el-step title="确认支付"></el-step>
					<el-step title="评价"></el-step>

				</el-steps>
			</div>
		</div>
		<div>
			<div class="contain">
				<div>

					<p>填写并合并订单消息</p>

				</div>
				<!-- 收货人信息 -->
				<div>
					<div style="display: flex;justify-content: space-between;">
						<div>
							<h3 class="bases">收货人信息</h3>
						</div>
						<div>
							<span @click="showinfo" style="line-height: 100%;"><a href="javascript:" style="color: red;">新增收货地址</a></span>
						</div>

					</div>

					<div class="payinfo">
						<buttonstyle style="margin-top: 10px;">
							<div slot="context">袁明亮</div>
						</buttonstyle>
						<div style="width: 80%;margin-left: 20px;">
							<el-table :data="userinfo" stripe>
								<el-table-column prop="name" width="180">
								</el-table-column>
								<el-table-column prop="address" width="180">
								</el-table-column>
								<el-table-column prop="tel">
								</el-table-column>
							</el-table>
						</div>
					</div>

				</div>
				<el-dialog title="新增收货人信息" :visible.sync="dialogVisible" width="50%">
					<el-form ref="ruleforms" :rules="rulesinfo" :model="ruleform" class="demo-ruleForm">

						<el-form-item label="所在地区" prop="name" style="text-align: left;">
							<el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }"></el-cascader>
						</el-form-item>
						<el-form-item label="收货人" prop="address">
							<el-input v-model="ruleform.address"></el-input>
						</el-form-item>
						<el-form-item label="详细地址" prop="detailaddress">
							<el-input v-model="ruleform.detailaddress"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone">
							<el-input v-model="ruleform.phone"></el-input>
						</el-form-item>
						<el-form-item label="固定电话" prop="telone">
							<el-input v-model="ruleform.telone"></el-input>
						</el-form-item>
						<el-form-item label="邮箱地址" prop="email">
							<el-input v-model="ruleform.email"></el-input>
						</el-form-item>
						<el-form-item label="地址别名" prop="addressname">
							<el-input v-model="ruleform.addressname"></el-input>
						</el-form-item>
					</el-form>

					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="submit">确 定</el-button>
					</span>
				</el-dialog>
				<el-divider></el-divider>
				<!-- 支付方式 -->
				<div>
					<h3 class="bases">支付方式</h3>
					<div class="paysect">
						<buttonstyle   slot="context" v-show="marksp">
							<div slot="context">白条支付</div>
						</buttonstyle>
						<buttonstyle v-show="!marksp">
							<div slot="context">银行卡支付</div>
						</buttonstyle>
						 
					</div>
				</div>
				<el-divider></el-divider>

				<!-- 送货清单 -->
				<div>
					<div style="display: flex;justify-content: space-between;">
						<h3 class="bases">送货清单</h3>
						<div>
							<span><a href="#">价格说明</a></span>
							<span><a href="#">修改购物车</a></span>
						</div>
					</div>
					<div class="sendhuo">
						<div style="display: flex;flex-direction: column;justify-content: space-around;">
							<p>配送方式</p>
							<buttonstyle>
								<div slot="context">快递运输</div>
							</buttonstyle>
							<p>
								配送时间 ：<span>预计3天后送达</span>
							</p>
							<el-divider></el-divider>
							<div style="display: flex;align-items: center;">
								<input type="checkbox" />
								<span style="margin-left: 5px;">退货无忧</span>
								<span style="color: red;">￥4.80</span>
							</div>
							<p>7天内退货，15天内换货，预计获得9.8元运费赔付(到小金库)。<a href="#">查看详情</a></p>
						</div>
						<div style="display: flex;flex-direction: column;justify-content: space-around;">

							<p style="margin:10px 0px;">商家：<span>马提尔服饰专营店</span> </p>
							<p style="margin:10px 0px;">活动商品购满120.00元，即可享受满减优惠</p>

							<div style="margin:10px 0px;" class="largtable">
								<el-table :data="goodsinfo">
									<el-table-column width="180">
										<template v-slot:default="scope">
											<!-- <img src="~assets/img/1.jpg"/> -->
											<img :src="scope.row.pic" />
											<span> </span
											>
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
						</div>
					</div>





				</div>
				<div>
					<tabbar @func="infosse1" :title="['优惠卷', '京东', '礼品卡','领货码']">
						<div class="text" slot="context">
							<div v-show="0==curr">
								<tabbar @func="infosse2" :title="['可用', '不可用']">
									<div class="text" slot="context">
										<div v-show="0==curr1">无</div>
										<div v-show="1==curr1">无</div>
									</div>
								</tabbar>
							</div>
							<div v-show="1==curr">234</div>
							<div v-show="2==curr">
								<tabbar @func="infosse3" :title="['可用', '不可用','添加礼品卡']">
									<div class="text" slot="context">
										<div v-show="0==curr2">无</div>
										<div v-show="1==curr2">无</div>
										<div v-show="2==curr2">无</div>
									</div>
								</tabbar>
							</div>
							<div v-show="3==curr">
								<tabbar @func="infosse4" :title="['可用', '不可用','添加领货码']">
									<div class="text" slot="context">
										<div v-show="0==curr3">无</div>
										<div v-show="1==curr3">无</div>
										<div v-show="2==curr3">无</div>
									</div>
								</tabbar>
							</div>
						</div>
					</tabbar>
				</div>
				<div style="margin-top:140px;">
					<div>
						<p style="text-align: right;">总商品金额：
						<span>总价:<span style="font-size: 16px;color: red;font-weight: 900;">{{sumprice}}</span></span> 
							 
						</p>
						<p style="text-align: right;margin-top: 20px;">运费：
						<span style="font-size: 16px;color: red;font-weight: 900;">￥5.2</span>
							 
						</p>
					</div>
				</div>
				<button class="buttoncom" @click="submitinfo">提交订单</button>
			</div>

		</div>

	</div>







</template>

<script>
	import buttonstyle from 'components/payoff/selebutton'
	import tabbar from 'components/payoff/tabbar'


	export default {
		components: {
			buttonstyle,
			tabbar
		},
		props:['cartinfo'],
		// 当mounted写两遍的时候默认就会重写，第一份方法就会不执行 
		mounted() {
			if(this.cartinfo){
				var infos =  JSON.parse(decodeURIComponent(this.cartinfo));  
			}
			
			// 根据传过来的数组长度，进行判断，到底是白条分期还是，普通购物购买
			// 长度为3表示普通，长度为一表示白条分期
			console.log(infos)
			this.dataparse(infos);
			this.showuserinfo()
			
		},
		data() {
			return {
				marksp:false,
				// 控制白条显示
				// 所有的商品信息保存
				goodsinfo: [
					 
				],
				sumprice:0,
				userinfo: [],
				value: [],
				dialogVisible: false,
				curr: 0,
				curr1: 0,
				curr2: 0,
				curr3: 0,
				context: [],
				ruleform: {

					address: '袁明亮',
					detailaddress: '甘肃省西安市',
					phone: '18574480156',
					telone: '1',
					email: '1',
					addressname: '1'
				},
				options: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '组件',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],
				rulesinfo: {

					address: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],
					detailaddress: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],

					telone: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],
					addressname: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}]
				}
			}
		},
	// cartinfo:  {
	// 				name:'yml',
	// 				shopname: 'BABIBOY外套男冬季韩版修身短款冬装棉服潮流男棒球服棉袄 17111黑色',
	// 				price: '￥99.00',
	// 				num: '2',
	// 				pricesums:'￥198',
	// 				mark: '有',
	// 				pic:'/images/fangdajin/sm/fd-sm-1.jpg'
	// 			},	
		methods: {
			dataparse(argo){
				var tempobjext = {}
				if(argo.length == 1){
					this.goodsinfo = argo;
					this.sumprice = argo[0].price;
					this.marksp = true;
				}else if(argo.length == 3){
					argo[0].forEach(val=>{
						tempobjext.pic = val.shopid;
						tempobjext.mark = '有';
						tempobjext.price = val.pricesums;
						tempobjext.num = val.num;
						this.goodsinfo.push(tempobjext);
						this.marksp = false;	
					})
					this.sumprice = argo[1];
					console.log(this.goodsinfo);
					
				}
				
			},
			
			submitinfo() {
				this.$router.push(`/payoffmoney/${ this.cartinfo}`)
			},
			submit() {
				console.log(this.$refs)
				this.$refs.ruleforms.validate((valid) => {
					if (!valid) {
						return;

					} else {
						var infos = `${this.ruleform.address}#${this.ruleform.detailaddress}#${this.ruleform.phone}`
						if (!localStorage.getItem("info")) {
							localStorage.setItem("info", infos);
						} else {
							var temp = localStorage.getItem("info");
							temp += `@${infos}`;
							localStorage.setItem("info", temp)
						}
						this.showuserinfo();
						this.dialogVisible = false;
					}
				});
			},
			showuserinfo() {
				var obj = {};
				if (localStorage.getItem("info").length > 0) {
					// localStorage.getItem("info").split("@").forEach((item, i) => {
					// 	var info = item.split("#");
					// 	obj.name = info[0]
					// 	obj.address = info[1];
					// 	obj.tel = info[2];
					// 	newarry.unshift(obj);
					// })
					var newarry = [];
					var info = localStorage.getItem("info").split("@").pop().split("#");
					obj.name = info[0]
					obj.address = info[1];
					obj.tel = info[2];
					
					console.log("3333333333333333333333")
					console.log(obj);
					newarry.unshift(obj);
					this.userinfo = newarry;
					 
				 
			 
				}

			},
			showinfo() {
				this.dialogVisible = true;
			},
			infosse1(i) {
				this.curr = i
			},
			infosse2(i) {
				this.curr1 = i
			},

			infosse3(i) {
				this.curr2 = i
			},
			infosse4(i) {
				this.curr3 = i
			}
		}

	}
</script>


<style scoped>
.text{
	height:30px !important;
	background-color: #eee !important;
}
	.buttoncom {
	
		float: right;
		position: relative;
		width: 135px;
		height: 36px;
		line-height: 36px;
		margin: 8px 10px 0 0;
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

	.sendhuo {
		display: flex;

	}

	.sendhuo>div:first-child {
		width: 40%;
	}

	.sendhuo>div:last-child {
		width: 60%;
	}

	/deep/ .el-table__header-wrapper {
		height: 0px;
	}

	span {
		margin-left: 10px;
	}

	.commbutton {
		font-size: 12px;
		float: left;
		position: relative;
		border: 1px solid #ddd;

		line-height: 18px;
		padding: 5px 24px;
		cursor: pointer;
		margin-right: 20px;
	}


	.paysect {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	/deep/ .el-dialog__body {

		padding: 10 20;
	}

	.el-form-item__label {
		line-height: 0px;
	}

	.el-dialog__heade {

		text-align: left !important;
	}

	.el-form-item {
		margin-bottom: 10px !important;
	}

	.bases {
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		text-align: left;
		display: block;

	}

	.markshow {
		background-color: #CCCCCC;
	}

	.contain {
		margin: 0px 85px 100px;
		height: 1100px;
		border: 1px solid #ddd;
		padding: 30px;
		min-width: 750px;
		font-size: 12px;
	}

	.containtop {
		margin: 50px 85px 0px;
		padding: 30px;
		min-width: 700px;
		font-size: 12px;
	}

	.payinfo {
		display: flex;
		justify-content: space-between;

	}

	p {
		text-align: left;
	}

	.infos {
		line-height: 33px;
	}

	.payactive {
		display: flex;
	}

	.tablestyle {
		display: flex;
	}

	.largtable {
		display: flex;
	}
</style>
