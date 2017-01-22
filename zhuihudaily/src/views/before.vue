/*
* @Author: zhuxy
* @Date:   2017-01-19 22:44:44
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-20 12:47:04
*/
<template>
    <div class="z-mod-index">
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
                stories:[]
            }
        },
        created(){
            let self = this,
                date = new Date();

            self.dateYYMMDD = utils.getYYMMDD(date);
            self.getStories();
        },
        methods:{
            getStories(){
                let self = this,
                    url = `${api.getUrl('before')}/${self.dateYYMMDD}`;

                utils.http.get(url)
                    .then(function(res){
                        self.stories = res.data && res.data.stories
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
