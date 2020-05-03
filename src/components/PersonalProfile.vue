<template>
	<el-row  type="flex"  justify="center" >
		<el-col :span="18">
			<div class="text_wapper">
				<h1 class="title">监控数据计算</h1>
				<div class="text">
					<p>{{text}}</p>
				</div>
			</div>
	    </el-col>
    </el-row>
</template>

<script>
	export default{
		name:'index',
		data() {
			return {
				showalert:false,
				text:' 君不见，黄河之水天上来，奔流到科技时代就开始看见艰苦开始的艰苦艰苦的数据库肯定是看见艰苦撒旦，可视对讲科举考试海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。'
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
	.text_wapper{
		min-height: 300px;
		padding:20px;
		background: rgb(173, 149, 69);
		margin:50px auto;
		border-radius: 5px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		background-color:#fff;
		background-image: linear-gradient(#FFF, #cfe6d5);
		h1{
			line-height: 70px;
			color:rgb(78, 77, 77);
		}
		.text{
			font-size: 14px;
			p{
				text-indent: 50px;
				text-align: left;
				line-height: 24px;
			}
		}
	}
</style>
