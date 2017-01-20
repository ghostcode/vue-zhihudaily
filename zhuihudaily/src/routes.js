/*
* @Author: zhuxy
* @Date:   2017-01-15 13:46:12
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-19 22:44:29
*/

'use strict';

const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'))
    })
}

const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'))
    })
}

const Detail = resolve => {
    require.ensure(['./views/detail.vue'], () => {
        resolve(require('./views/detail.vue'))
    })
}

const Theme = resolve => {
    require.ensure(['./views/theme.vue'], () => {
        resolve(require('./views/theme.vue'))
    })
}

const ThemeList = resolve => {
    require.ensure(['./views/theme-list.vue'], () => {
        resolve(require('./views/theme-list.vue'))
    })
}

const Before = resolve => {
    require.ensure(['./views/before.vue'], () => {
        resolve(require('./views/before.vue'))
    })
}

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/theme',
        name: 'theme',
        component: Theme
    },
    {
        path: '/theme/list/:id',
        name: 'themelist',
        component: ThemeList
    },
    {
        path: '/before',
        name: 'before',
        component: Before
    }
]

export default routes
