import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/', //到时候地址栏会显示的路径
            name: 'Home',
            component: Home // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})