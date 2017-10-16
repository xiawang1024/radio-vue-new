import * as types from './mutation-types'

const mutations = {
    [types.SET_CHANNEL](state, channel) {
        state.channel = channel
    },
    [types.SET_PLAYBACKINFO](state, playBackInfo) {
        state.playBackInfo = playBackInfo
    },
    [types.SET_ISLIVE](state, isLive) {
        state.isLive = isLive
    },
    [types.SET_ISPLAY](state, isPlay) {
        state.isPlay = isPlay
    },
    [types.SET_ARTICLE](state, article) {
        state.article = article
    }
}

export default mutations