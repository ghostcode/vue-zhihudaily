/*
* @Author: zhuxy
* @Date:   2017-01-20 13:04:25
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-21 22:59:45
*/
<template>
    <div class="load-container">
        <div class="load-status loading" v-if="isLoading">
            <slot name="loading">
                加载中...
            </slot>
        </div>
        <div class="load-status loaded" v-if="!isLoading">
            <slot name="loaded">
                加载完成
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            isLoading:{
                default:true
            }
        },
        mounted(){
            let self = this;
            self.init();
        },
        methods:{
            init(){
                let self = this;
                this.$el.parentNode.addEventListener('scroll',function(){
                    // console.log(`scrollTop:${this.scrollTop}`)
                    // console.log(`clientHeight:${this.clientHeight}`)
                    // console.log(`scrollHeight:${this.scrollHeight}`)
                    if(this.scrollTop + this.clientHeight >= this.scrollHeight){
                        self.$emit('scroll-bottom','fight live');
                    }
                });
            }
        }
    }
</script>
<style>
    .load-container{
        display: flex;
        flex:1;
        justify-content: center;
    }
    .load-container .load-status{
        height: 35px;
        line-height: 35px;
        color:#333;
    }
</style>
