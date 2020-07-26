<template>
<div>
	<el-row  type="flex"  justify="center" >
		<el-col :span="18">
				<el-timeline  style="text-align: left;">
					<el-timeline-item color="#0bbd87" :timestamp="item.pushed" placement="top"  v-for="(item,index) in text" :key="index">
					<el-card>
						<h4>{{item.title}} <el-tag style="margin-right: 5px;"  effect="light" type="success" size="mini" v-for= "(tag_content,tag_key)  in item.articaltag" :key= 'tag_key'> {{ tag_content.tag_content }}</el-tag>
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
	<el-row  type="flex" justify="center">
			<el-col >
					<el-pagination
							layout="prev, pager, next"
							background
							:total="total"
							:page-size='5'
							:hide-on-single-page='true'
							@current-change='current_change'>
						</el-pagination>
			</el-col>
	</el-row>
	</div>
</template>
<script>
	import artical from '../api' 
	export default{
		name:"index3",
		data(){
			return {
				text:[],
				total:0,
				prev:'',
			}
			
		},
		mounted: function (){
			var _this = this
			artical.getArticalList().then(function(res){
					  _this.text = res.data.results
					  _this.total = res.data.count
					  _this.prev = res.data.previous
					  _this.next = res.data.next
				  })
			      .catch(function (error) { // 请求失败处理
			        console.log(error);
			      });
		},
		methods:{
			current_change(currentPage){
				var _this = this
				artical.getArticalList(currentPage).then(function(res){
						_this.text = res.data.results
						_this.total = res.data.count
						_this.prev = res.data.previous
						_this.next = res.data.next
					})
					.catch(function (error) { // 请求失败处理
						console.log(error);
					});
			},
			toDetail(ArticalTitle){
				this.$router.push({path:'/ArticalDetail',query:{ArticalTitle:ArticalTitle}})
			}
		}
	}
</script>
<style lang="less" scoped>

</style>>
 
