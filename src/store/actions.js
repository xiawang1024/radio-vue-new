import * as types from './mutation-types'


export const setChannel = function ({commit, state}, channel) {
    commit(types.SET_CHANNEL, channel)
}