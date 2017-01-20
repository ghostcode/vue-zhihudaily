/*
* @Author: zhuxy
* @Date:   2017-01-15 13:47:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-19 22:43:17
*/
<template>
    <div class="z-home">
        <div class="weui-tab">
            <div class="weui-tab__panel">
                <router-view></router-view>
            </div>
            <div class="weui-tabbar">
                <router-link :to='{name:"list"}' tag='li' class="weui-tabbar__item">
                    <a class="weui-tabbar__label">最新</a>
                </router-link>
                <router-link :to='{name:"before"}' tag='li' class="weui-tabbar__item">
                    <a class="weui-tabbar__label">往期</a>
                </router-link>
                <router-link :to='{name:"theme"}' tag='li' class="weui-tabbar__item">
                    <a class="weui-tabbar__label">主题</a>
                </router-link>
                <!-- <router-link :to='{name:"my"}' tag='li' class="weui-tabbar__item">
                    <a class="weui-tabbar__label">我</a>
                </router-link> -->
            </div>
        </div>
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
                // this.$router.push({name:'list'});
            },1000)
        }
    }
</script>
<style>
    html{
        height:100%;
    }
    body{
        min-height: 100%;
    }
    .z-home{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
    }
    .weui-tabbar .weui-tabbar__item a{
        display: block;
        line-height: 53px;
        height:53px;
    }
/*    .z-home{
        height:600px;
        background-image: url('../assets/zhihudaily.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
        min-height: 100%;
    }*/

</style>
