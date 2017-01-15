/*
* @Author: zhuxy
* @Date:   2017-01-15 13:47:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-15 22:14:50
*/
<template>
    <div class="z-home">

    </div>
</template>
<script>
    export default {
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
