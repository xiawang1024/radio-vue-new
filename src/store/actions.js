import * as types from './mutation-types'


export const setChannel = function ({commit, state}, channel) {
    commit(types.SET_CHANNEL, channel)
}

export const setPlayBackInfo = function ({commit, state}, playBackInfo) {
    commit(types.SET_PLAYBACKINFO, playBackInfo)
}