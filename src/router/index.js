import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Player from 'pages/player/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    }
  ]
})
