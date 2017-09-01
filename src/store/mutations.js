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
    }
}

export default mutations