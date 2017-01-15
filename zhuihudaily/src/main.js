// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'

Vue.use(VueRouter)

let router = new VueRouter({
    mode:'history',
    routes:routers
})

/* eslint-disable no-new */
const app = new Vue({
    router
}).$mount('#app')
