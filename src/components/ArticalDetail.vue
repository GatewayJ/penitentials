<template>
	<div class="text_wapper">
		<h1 class="title">监控数据计算</h1>
		<div class="text">
			<base v-bind:href="base_url">
			<p v-html="content"></p>
		</div>
	</div>
</template>

<script>
	import artical from '../api'
	export default{
		name:'index',
		data() {
			return {
				base_url :process.env.BASE_URL,
				content :"",
			}
		},
		methods:{
			
		},
		mounted:function  () {
			var _this = this
			artical.getArticalDetail(this.$route.query.ArticalTitle).then(function(res){
					  _this.content = res.data['content']
				  })
			      .catch(function (error) { // 请求失败处理
			        console.log(error);
			      });
		  },
	}
</script>
<style lang="less" scoped>
	.text_wapper{
		min-height: 300px;
		width:77%;
		padding:20px;
		background: rgb(173, 149, 69);
		margin:50px auto;
		border-radius: 5px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		background-color:#fff;
		background-image: linear-gradient(#FFF, #CFE67C);
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
