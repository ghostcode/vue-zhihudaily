/*
* @Author: zhuxy
* @Date:   2017-01-17 09:33:20
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-17 10:10:29
*/

<template>
    <div class="z-toast">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon_toast" :class="toastClass" v-if=" type != 'text' "></i>
            <p class="weui-toast__content"><slot></slot></p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'toast',
        props:{
            type:{
                type:String,
                default:'success'
            }
        },
        computed:{
            toastClass(){
                return {
                    'weui-loading': this.type === 'loading',
                    'weui-icon-success-no-circle': this.type === 'success',
                    'weui-text': this.type === 'text'
                }
            }
        }
    }
</script>
<style>
    .weui-text{}
</style>
