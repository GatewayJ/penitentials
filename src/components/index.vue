<template>
	<el-row  type="flex"  justify="center" >
		<el-col :span="18">
				<el-timeline  style="text-align: left;">
					<el-timeline-item color="#0bbd87" :timestamp="item.pushed" placement="top"  v-for="(item,index) in text" :key="index">
					<el-card>
						<h4>{{item.title}}
							<el-button type="text" @click="toDetail(item.title)">详情</el-button>
						</h4>
						<p><span>{{item.summary}}</span></p>
					</el-card>
					</el-timeline-item>
					<el-timeline-item color="#F0EDE3">
					</el-timeline-item>
				</el-timeline>
		</el-col>
	</el-row>
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

</style>>
 
