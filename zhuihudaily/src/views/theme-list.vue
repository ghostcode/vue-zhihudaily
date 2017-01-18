/*
* @Author: zhuxy
* @Date:   2017-01-18 11:37:37
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-18 11:51:26
*/

'use strict';

<template>
    <div class="z-themes-list">
        <ul class="weui-cells z-mod-list">

            <router-link :to="{name:'detail',params:{id:item.id} }" tag='li' v-for="item in stories" class="weui-cell weui-cell_access z-list-item">
                <div class="weui-cell__hd">
                    <img :src="item.images[0]" v-if="item.images && item.images[0]">
                </div>
                <div class="weui-cell__bd">
                    {{item.title}}
                </div>
                <div class="weui-cell__ft">
                    <!-- {{item.description}} -->
                </div>
            </router-link>

        </ul>
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
                stories:[]
            }
        },
        created(){
            let self = this;
            self.getThemes(self.$route.params.id);
        },
        methods:{
            getThemes(id){
                let self = this,
                    url = `${api.getUrl('themelist')}/${id}`;

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

</style>
