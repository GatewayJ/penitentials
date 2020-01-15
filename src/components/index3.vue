<template>	
            <div style="height:100%;width:100%">
				<div v-for="i in list">
					<el-row   :gutter="12" type="flex" justify="center">
					  <el-col style="background-color:aqua" :span="15">
							{{ msg }} <router-link to="/index">详情</router-link>
						</el-col>
					</el-row>
					<br>
				</div>
            </div>
</template>
<script>
	export default{
		name:"index3",
		data(){
			return {
			"msg":"大地震时不要急破坏性地震大地震时不要急破坏性地震从人感觉振动到建筑物被破坏平均只有12秒钟，在这短短的时间内你千万不要惊慌，应根据所处环境迅速作出保障安全的抉择。如果住的是平房，那么你可以迅速跑到门外。如果住的是楼房，千万不要跳楼，应立即切断电闸，关掉煤气，暂避到洗手间等跨度小的地方，或是桌子，床铺等下面，震后迅速撤离，以防强余震。2.人多先找藏身处学校，商店，影剧院等人群聚集的场所如遇到地震，最忌慌乱，应立即躲在课桌，椅子或坚固物品下面，待地震过后再有序地撤离。教师等现场工作人员必须冷静地指挥人们就地避震，决不可带头乱跑。3.远离危险区如在街道上遇到地震，应用手护住头部，迅速远离楼房，到街心一带。如在郊外遇到地震，要注意远离山崖，陡坡，河岸及高压线等。正在行驶的汽车和火车要立即停车",
			"list":10
			}
			
		}
	}
</script>
<style>
  .box-card {
    width: 480px;
  }
</style>
