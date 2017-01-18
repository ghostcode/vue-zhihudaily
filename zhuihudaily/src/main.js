// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import App from './views/index.vue'

Vue.use(VueRouter)

// 初始化路由，和 vue-router 1.0 还是有很多不同
// https://aotu.io/notes/2016/12/28/vue-clock
// https://smallpath.me/post/vue-upgrade-2
let router = new VueRouter({
    mode:'history',
    routes:routes,
    // 重写 链接激活时使用的 CSS 类名 默认值: "router-link-active"
    linkActiveClass:'weui-bar__item_on'
})

const app = new Vue({
    router,
    ...App
}).$mount('#app')
