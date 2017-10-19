import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Player from 'pages/player/player'
import Fmpage from 'pages/fmpage/fmpage'
import Inner from 'pages/inner/inner'
import HostInner from 'pages/hostInner/hostInner'
import List from 'pages/list/list'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/player',
            name: 'player',
            component: Player
        },
        {
            path: '/fmpage',
            name: 'fmpage',
            component: Fmpage
        },
        {
            path: '/inner',
            name: 'inner',
            component: Inner
        },
        {
            path: '/hostinner',
            name: 'hostinner',
            component: HostInner
        },
        {
            path: '/list',
            name: 'list',
            component: List
        }
    ]
})