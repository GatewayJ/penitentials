<template>
	<div class="other">
		<el-container>
		    <el-main>
				  <el-select
				    v-model="value"
				    multiple
				    filterable
				    allow-create
				    default-first-option
				    placeholder="请选择标签">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
				
				<el-alert v-show= "showalert" @close="closealert"
				  title="成功提示的文案"
				  type="success">
				</el-alert>
				<div>
				  <el-row>
				    <el-button v-on:click= "button">默认按钮</el-button>
				    <el-button v-on:click= "alertbutton" type="primary">主要按钮</el-button>
				    <el-button type="success">成功按钮</el-button>
				    <el-button type="info">信息按钮</el-button>
				  </el-row>
				</div>
			</el-main>
		  </el-container>
	


	</div>
</template>

<script>
	export default{
		name:'index2',
		data() {
			return {
				showalert:false,
				options: [{
				  value: 'HTML',
				  label: 'HTML'
				}, {
				  value: 'CSS',
				  label: 'CSS'
				}, {
				  value: 'JavaScript',
				  label: 'JavaScript'
				}],
				value: []
			}
		},
		methods:{
			button(){
				this.$message("默认按钮")
			},
			alertbutton(){
				this.showalert=true
				return this.showalert
			},
			closealert(){
				this.showalert=false
			}
		}
	}
</script>

<style lang="less" scoped>
	.other{
		min-height: 300px;
		width:77%;
		padding:20px;
		background: #fff;
		margin:50px auto;
		border-radius: 5px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
</style>