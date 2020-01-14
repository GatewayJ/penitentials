<template>
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

<style>
</style>
