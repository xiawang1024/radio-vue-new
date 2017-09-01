import * as types from './mutation-types'

const mutations = {
    [types.SET_CHANNEL](state, channel) {
        state.channel = channel
    }
}

export default mutations