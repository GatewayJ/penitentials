<template>
        <el-row   type="flex"  justify="center">
            <el-col :span="18">
                <div class="head_warpper">
                <h1>个人博客</h1>
                <ul>
                    <li @click="switchTo('/')">
                        <a :class="{on: '/' === $route.path}">首页</a>
                    </li>
                <li @click="switchTo('/PersonalProfile')">
                        <a :class="{on: '/PersonalProfile' === $route.path}">简介</a>
                    </li>
                    <li @click="switchTo('/PersonalPlans')">
                        <a :class="{on: '/PersonalPlans' === $route.path}">个人计划</a>
                    </li>
                </ul>
                </div>
            </el-col>
        </el-row>
</template>
<script>
export default {
    name:'MyHead',
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        switchTo(path){
        // console.log(this.$router)
        this.$router.replace(path)
        }
    }
}
</script>
<style lang="less" scoped>
    .head_warpper{
        padding:30px 20px 20px;
        margin: 0 auto;
        background:url('../assets/image/banner.jpg') no-repeat;
        background-size: 100%;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        h1{
            margin-bottom: 50px;
            font-size:40px;
        }
        ul{
            list-style: none;
            font-size:18px;
            color:#de9c52;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                width:100px;
                a{
                    text-decoration: none;
                    color:#de9c52;
                }
                a:hover{
                    color:rgb(238, 185, 11);
                    cursor: pointer;
                }
                .on{
                    color:#8abeb2;
                }
            }
        }
        
        
    }
</style>