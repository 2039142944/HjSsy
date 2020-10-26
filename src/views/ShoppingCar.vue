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
				<input class="w-75 input_1" type="text" placeholder="手机/电脑/鼠标/酒水" style="height: 40px;border: 1px solid #888;outline: 0;padding: 15px;font-size: 14px;font-family:agency fb;" /><button
				 class="buttoninfo">搜索</button>
				<span><span id="one33" style="color: red;">
						 </span></span>
			</div>
		</div>

		<div class="contain">
			<el-table   :summary-method="pricesumsgetsum"     ref="multipleTable" :data="tableData" tooltip-effect="dark" @select-all="selectindex" @select="selectindex" style="width: 100%" >
				<el-table-column type="selection" width="55">
				</el-table-column>
					<!-- <template slot-scope="scope">
						{{ scope.row.date }}
					</template> -->
				<el-table-column prop="shopname" label="商品" width="400">
					
				</el-table-column>

				<el-table-column prop="price" label="单价" width="200">
				</el-table-column>

				<el-table-column prop="num" label="数量" width="200" show-overflow-tooltip>
				</el-table-column>

				<el-table-column   prop="pricesums" width="200" label="小计" show-overflow-tooltip>
				</el-table-column>

				<el-table-column prop="address" label="操作" show-overflow-tooltip>
					 <template slot-scope="scope">
					        <el-button
					          @click="deleteRow(scope.row.id)"  type="text"  size="small"> 移除</el-button>
					      </template>
				</el-table-column>
			</el-table>
			<div style="position: fixed;bottom: 60px;width: 85%;">
				<div class="bottoms" >
					<div style="flex: 0 0 50%;">
					</div>
					<div style="flex: 0 0 50%;text-align: right;">
						<p style="text-align: right;">
							<span>已选择 <span style="font-size: 16px;color: red;font-weight: 900;">{{selectnum}}</span> 几件商品</span>
							<span>总价:<span style="font-size: 16px;color: red;font-weight: 900;">{{sumpricinfo}}</span></span> 
						</p>
						<button class="sumbu" @click="gomoney">去结算</button>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
	 
	import {
		mapState
	} from 'vuex'
	export default {
		name: "info",
		 
		mounted(){
			this.showcarnum();
		},
		data() {
			return {
				tableData:[],
				multipleSelection: [],
				count:0,
				sumpricinfo:0,
				selectnum:0,
				info:[], 
			}
		},

		methods: {
			pricesumsgetsum(param){	
				console.log("344234234234234234")
				console.log(param);
			},
			
			selectindex(){
				 var info = this.$refs.multipleTable.selection;
				 this.info=info;
				 this.selectnum = info.length;
				 var start = 0;
				 info.map(val=>{
					 start+= (val.pricesums.substring(1)-0);
				 })
				this.sumpricinfo = "￥"+start;
			},
			deleteRow(index){
				this.axios.post("/carselectdelete",{id:index}).then(val=>{
					
					if(val.data.message == 200){
						this.$message.success("数据删除成功");
						this.showcarnum();
					}
					 
				})
			},
			textinfo(){
			    var count = this.count;
			    this.zdybus.$emit("textinfo",count);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			gomoney() {
				 
				var ts = [];
				ts.push(this.info);
				ts.push(this.sumpricinfo);
				ts.push(this.selectnum);

				var _info =  JSON.stringify(ts);
				_info = encodeURIComponent(_info);
				if(this.info.length==0){
					this.$message.success("请选择商品")
				}else{
					this.$router.push(`payoff/${_info}`) 
				}
				
					 
			 
			},
			showcarnum(){
				var unmae = this.uname || sessionStorage.getItem("uname");
				
				if(unmae!="" || unmae!=null){
					this.axios.post("/carselect",{uname:unmae}).then(val=>{
						console.log("1234567")
						console.log(val.data.data) 
						console.log("1234567")
						this.count = val.data.data.length;
						this.tableData = val.data.data;
						this.textinfo();
					})
				}
			},
		}
	}
	
	// textinfo(){
	// 	var count = this.count;
	//     this.zdybus.$emit("textinfo",count);
	// },
	// showcarnum(){
	// 	var unmae = this.uname || sessionStorage.getItem("uname");
	// 	if(unmae!=null || unmae!=""){
	// 		this.axios.post("/carselect",{uname:"yml"}).then(val=>{
	// 			 this.count = val.data.data.length;
	// 			 this.textinfo();
	// 		})
	// 	}
	// },
</script>
<style scoped>
	.bottoms {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		position: relative;
		margin-top: 10px;

	}

	.sumbu {
		display: block;
		outline: 0;
		border: 0;
		width: 94px;
		height: 52px;
		line-height: 52px;
		color: #fff;
		position: absolute;
		right: 0;
		font-size: 18px;
		font-family: Microsoft YaHei;
		background: #e54346;
		overflow: hidden;
		cursor: pointer;
	}

	.buttoninfo {
		width: 60px;
		height: 40px;
		background-color: #ff961e;
		border: 0;
		outline: 0;
		font-size: 14px;
		font-family: agency fb;
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
		height: 1000px;
		border: 1px solid #ddd;
		padding: 30px;
		min-width: 700px;
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
