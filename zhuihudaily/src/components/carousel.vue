/*
* @Author: zhuxy
* @Date:   2017-01-15 16:13:08
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-16 09:44:25
*/
<template>
    <div class="carousel-container">
        <div class="carousel" :style="{right:right}">
            <router-link :to="{name:'detail',params:{id:item.id} }" v-for="item in items" class="img-box">
                <img :src="item.image">
            </router-link>
        </div>
        <div class="carousel-dot">
            <span  v-for="(item,$index) in items" class="dot" :class="{active:$index == index}"></span>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            items:{
                type:Array,
                default(){
                    return []
                },
                required:true
            }
        },
        data(){
            return {
                index:0,
                isActive:false
            }
        },
        mounted(){
            this.animate();
        },
        methods:{
            animate(){
                let self = this;

                setTimeout(function(){
                    if(self.index == 4){
                        self.index = 0;
                    }else{
                        self.index++;
                    }
                    self.animate();
                },1000)
            }
        },
        computed:{
            right(){
                return this.index * 100 + '%';
            }
        }
    }
</script>
<style>
    .carousel-container{
        position: relative;
        width:100%;
        overflow: hidden;
    }
    .carousel{
        width: 500%;
        height:240px;
        position: relative;
        display: flex;
    }
    .carousel .img-box{
        flex:1;
    }
    .carousel img{
        width: 100%;
        max-height: 100%;
    }
    .carousel-dot{
        position: absolute;
        bottom: 5px;
        right:20px;
        display: flex;
        justify-content: center;
    }
    .carousel-dot .dot{
        width:10px;
        height:10px;
        border-radius: 100%;
        margin-right:4px;
        background-color: #ddd;
    }
    .carousel-dot .active{
        background-color: #095fb3;
    }
</style>
