// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log('------------------------------------');
    console.log(to.path);
    console.log('------------------------------------');
    let audio = document.getElementById('audio')
    if (audio) {
        if (to.path == '/home' || to.path == '/player') {
            if (audio.paused) {
                audio.play()
            }
        } else {
            audio.pause()
        }
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})