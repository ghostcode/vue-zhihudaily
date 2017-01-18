/*
* @Author: zhuxy
* @Date:   2017-01-18 11:19:49
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-18 11:42:50
*/

'use strict';

<template>
    <div class="z-themes">

        <ul class="weui-cells z-mod-list">

            <router-link :to="{name:'themelist',params:{id:item.id} }" tag='li' v-for="item in themes" class="weui-cell weui-cell_access z-list-item">
                <div class="weui-cell__hd">
                    <img :src="item.image">
                </div>
                <div class="weui-cell__bd">
                    {{item.name}}
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
                themes:[]
            }
        },
        created(){
            let self = this;
            console.log('themes')
            self.getThemes();
        },
        methods:{
            getThemes(){
                let self = this,
                    url = api.getUrl('theme');

                utils.http.get(url)
                    .then(function(res){
                        self.themes = res.data && res.data.others
                    })
                    .catch(function(err){

                    })
            }
        }
    }
</script>
<style>

</style>
