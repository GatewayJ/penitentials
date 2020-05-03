<template>
    <el-row type="flex"  justify="center" style="padding-top: 30px;">
        <el-col :span="18">
            <div class="footer_warpper">
                <p>footer</p>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name:'MyFooter',
}
</script>
<style lang="less" scoped>
    .footer_warpper{
        height:40px;
        background-color: #fff;
        margin:0 auto;
        padding:20px;
        border-radius: 5px;
        p{
            font-size: 14px;
            color:rgb(134, 132, 132);
        }
    }

</style>