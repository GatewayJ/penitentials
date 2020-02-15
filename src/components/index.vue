<template>	
	<div class="text-warpper">
		<div class="text-content">
			<div class="box-card" v-for="(item,index) in text" :key="index">
				<div class="header">
					<span>{{item.title}}</span>
					<el-button style="padding: 3px 0;margin-right:7px;" type="text" @click="toDetail(item.title)">详情</el-button>
				</div>
				<div class="content">
					<p>{{item.detail}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"index3",
		data(){
			return {
				text:[
					{title:'科技是每年那么多是接口即可看见我尽快你们男生,时代就',detail:'和技术环节设巨就开始讲究的是是多久啊数据库，看撒娇多久啊是卡斯柯京东卡哦我i我i我i三角函数的，开始加大建设的骄傲好的吧，卡是大家安静的骄傲，看撒娇多久啊是的护卫舰哈手段有啥说的看大家都啊就打不是基督教胡说八道，圣诞卡大数据的哈速度还是。计算机好的哈十大经典设计的唯一撒娇。大损失就是大家介绍三剑客时代即将撒凯撒经济上的就撒娇的哈稍等卡沙觉得阿克几乎是的话就是打算健康大数据的，建设的哈的楼的垃圾斯柯达，撒几乎就是大家都是。啥的回家啊啥进度。萨达萨达是觉得很骄傲说的话计结束后接受'},
					{title:'就撒娇',detail:'和技术环节设计结束后接受'},
					{title:'可是卡卡',detail:'和技术环节设计结束后接受'},
					{title:'卡视角看',detail:'和技术就开始经济数据环节设计结束后接受'},
					{title:'考计算机考试',detail:'和技术就开杀就开始流口水环节设计结束后接受'},
				],
			msg:"大地震时不要急破坏性地震大地震时不要急破坏性地震从人感觉振动到建筑物被破坏平均只有12秒钟，在这短短的时间内你千万不要惊慌，应根据所处环境迅速作出保障安全的抉择。如果住的是平房，那么你可以迅速跑到门外。如果住的是楼房，千万不要跳楼，应立即切断电闸，关掉煤气，暂避到洗手间等跨度小的地方，或是桌子，床铺等下面，震后迅速撤离，以防强余震。2.人多先找藏身处学校，商店，影剧院等人群聚集的场所如遇到地震，最忌慌乱，应立即躲在课桌，椅子或坚固物品下面，待地震过后再有序地撤离。教师等现场工作人员必须冷静地指挥人们就地避震，决不可带头乱跑。3.远离危险区如在街道上遇到地震，应用手护住头部，迅速远离楼房，到街心一带。如在郊外遇到地震，要注意远离山崖，陡坡，河岸及高压线等。正在行驶的汽车和火车要立即停车"
			}
			
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
 
