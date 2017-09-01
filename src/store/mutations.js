import * as types from './mutation-types'

const mutations = {
    [types.SET_CHANNEL](state, channel) {
        state.channel = channel
    },
    [types.SET_PLAYBACKINFO](state, playBackInfo) {
        state.playBackInfo = playBackInfo
    }
}

export default mutations