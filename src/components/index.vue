<template>	
	<div class="text-warpper">
		<div class="text-content">
			<div class="box-card" v-for="(item,index) in text" :key="index">
				<div class="header">
					<span>{{item.title}}</span>
					<el-button style="padding: 3px 0;margin-right:7px;" type="text" @click="toDetail(item.title)">详情</el-button>
				</div>
				<div class="content">
					<p>{{item.summary}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import artical from '../api'
	export default{
		name:"index3",
		data(){
			return {
				text:[],
			}
			
		},
		mounted: function (){
			var _this = this
			artical.getArticalList().then(function(res){
					  _this.text = res.data
				  })
			      .catch(function (error) { // 请求失败处理
			        console.log(error);
			      });
		},
		methods:{
			toDetail(ArticalTitle){
				this.$router.push({path:'/ArticalDetail',query:{ArticalTitle:ArticalTitle}})
			}
		}
	}
</script>
<style lang="less" scoped>
	.text-warpper{
		min-height: 300px;
		width:80%;
		padding:0;
		margin:50px auto;
		background: #F0EDE3;
		.text-content{
			// width:1126px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			margin:0 auto;
			
			.box-card {
				width: 330px;
				height: 250px;
				margin-right: 40px;
				margin-bottom: 40px;
				box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
				border: 1px solid #EBEEF5;
				border-radius: 5px;
				background-color: #fff;
				color: #303133;
				&:nth-of-type(3n){
					margin-right: 0;
				}
				.header{
					height: 50px;
					line-height: 50px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #eee;
					padding:0 15px;
					span{
						font-size: 14px;
						width:250px;
						text-align: left;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.content{
					font-size: 14px;
					text-align: left;
					padding:10px;
					height: 173px;
					p{
						text-indent: 30px;
						line-height: 24px;
						height:100%;
						overflow: hidden;
					}
				}
			}

		}
		
	}
</style>>
 
