<template>
  <div id="app">
	  	<el-header>
		<router-link to="/">首页、</router-link>
		<router-link to="/index">首页</router-link>
		<router-link to="/index2">首页2</router-link>
		</el-header>
		<router-view></router-view>
	    <el-footer>Footer</el-footer>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
	
.el-header {
	border-radius: 4px;
	background-color: #909399;
	color: #333;
	text-align: center;
	line-height: 60px;
}
	
.el-footer {
	border-radius: 4px;
	background-color: #000000;
	color: #333;
	text-align: center;
	line-height: 60px;
	}
	
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

	
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>

