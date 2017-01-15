/*
* @Author: zhuxy
* @Date:   2017-01-15 13:48:19
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-15 21:47:40
*/
'use strict';
<template>
    <div class="z-mod-detail">
        <div class="header">
            <img class="img-title" :src="story.image">
            <span class="txt-title">{{story.title}}</span>
        </div>
        <div class="content" v-html="story.body"></div>
    </div>
</template>
<script>
    import utils from '../common/utils.js';
    import api from '../api.js';

    export default {
        components:{
        },
        data(){
            return {
                story:{}
            }
        },
        mounted(){
            let self = this;

            self.getStory(self.$route.params.id);
        },
        methods:{
            getStory(id){
                let self = this,
                    url = `${api.getUrl('detail')}/${id}`;

                utils.http.get(url)
                    .then(function(res){
                        self.story = res.data
                    })
                    .catch(function(err){

                    });

            }
        }
    }

</script>
<style>
    @import url("http://news-at.zhihu.com/css/news_qa.auto.css");
    .z-mod-detail{
    }
    .z-mod-detail .header{
        position: relative;
        height:240px;
    }
    .z-mod-detail .img-title{
        width:100%;
        height:100%;
    }
    .z-mod-detail .txt-title{
        position: absolute;
        bottom:0;
        width:100%;
        line-height: 1.2;
        box-sizing: border-box;
        padding:5px 10px;
        font-size:16px;
        background-color: rgba(0,0,0,.4);
        color:#fff;
    }
    /*weui rewrite*/
    .z-mod-detail .headline{
        display: none;
    }
    .z-mod-detail .content img{
        display: inline-block;
        margin:0 5px 0 0;
    }
</style>
