import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        channel: {},
        playBackInfo: {},
        isLive: true,
        isPlay: true,
        article: {},
        video: {}
    },
    actions,
    getters,
    mutations
})