/*
* @Author: zhuxy
* @Date:   2017-01-15 13:48:19
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-15 22:07:32
*/
'use strict';
<template>
    <div class="z-mod-index">

        <carousel :items='topstories'></carousel>

        <ul class="weui-cells z-mod-list">

            <router-link :to="{name:'detail',params:{id:item.id} }" tag='li' v-for="item in stories" class="weui-cell weui-cell_access z-list-item">
                <div class="weui-cell__hd">
                    <img :src="item.images[0]">
                </div>
                <div class="weui-cell__bd">
                    {{item.title}}
                </div>
                <div class="weui-cell__ft">

                </div>
            </router-link>

        </ul>

    </div>
</template>
<script>
    import utils from '../common/utils.js';
    import api from '../api.js';
    import Carousel from '../components/carousel.vue';

    export default {
        components:{
            Carousel
        },
        data(){
            return {
                topstories:[],
                stories:[]
            }
        },
        created(){
            let self = this;
            self.getStories();
        },
        methods:{
            getStories(){
                let self = this,
                    url = api.getUrl('list');

                utils.http.get(url)
                    .then(function(res){
                        self.stories = res.data && res.data.stories
                        self.topstories = res.data && res.data.top_stories
                    })
                    .catch(function(err){

                    })
            }
        }
    }

</script>
<style>
    .z-mod-list{
        padding:0;
    }
    .z-mod-list .z-list-item{

    }
    .z-mod-list .z-list-item .weui-cell__bd{
        margin-left: 10px;
        color:#666;
        font-size:14px;
    }
    .z-mod-list .z-list-item img{
        width:60px;
    }
</style>
