<template>
	<div class="text_wapper">
		<h1 class="title">监控数据计算</h1>
		<div class="text">
			<p>{{content}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data() {
			return {
				showalert:false,
				text:[
					{title:'科技是每年那么多是接口即可看见我尽快你们男生,时代就',detail:'和技术环节设巨就开始讲究的是是多久啊数据库，看撒娇多久啊是卡斯柯京东卡哦我i我i我i三角函数的，开始加大建设的骄傲好的吧，卡是大家安静的骄傲，看撒娇多久啊是的护卫舰哈手段有啥说的看大家都啊就打不是基督教胡说八道，圣诞卡大数据的哈速度还是。计算机好的哈十大经典设计的唯一撒娇。大损失就是大家介绍三剑客时代即将撒凯撒经济上的就撒娇的哈稍等卡沙觉得阿克几乎是的话就是打算健康大数据的，建设的哈的楼的垃圾斯柯达，撒几乎就是大家都是。啥的回家啊啥进度。萨达萨达是觉得很骄傲说的话计结束后接受'},
					{title:'就撒娇',detail:'和技术环节设计结束后接受'},
					{title:'可是卡卡',detail:'和技术环节设计结束后接受'},
					{title:'卡视角看',detail:'和技术就开始经济数据环节设计结束后接受'},
					{title:'考计算机考试',detail:'和技术就开杀就开始流口水环节设计结束后接受'},
				],
				content :"",
			}
		},
		methods:{
			
		},
		mounted:function  () {
			for (var i in this.text){
				 if (this.text[i]['title'] === this.$route.query.ArticalTitle) {
				 	this.content = this.text[i]['detail'];
					break;
				 } else{
				 	this.content  = 'undefined'
				 }
			}
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
