/*
* @Author: zhuxy
* @Date:   2017-01-15 13:47:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-17 10:10:52
*/
<template>
    <div class="z-home">
        <toast type="loading">加载中...</toast>
    </div>
</template>
<script>
    import toast from '../components/toast.vue';

    export default {
        components:{
            toast
        },
        data(){
            return {
                logo:''
            }
        },
        created(){
        },
        mounted(){
            setTimeout(()=>{
                this.$router.push({name:'list'});
            },1000)
        }
    }
</script>
<style>
    html{
        height:100%;
    }
    .z-home{
        height:600px;
        background-image: url('../assets/zhihudaily.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
        min-height: 100%;
    }

</style>
