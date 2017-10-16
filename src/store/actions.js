import * as types from './mutation-types'


export const setChannel = function({ commit, state }, channel) {
    commit(types.SET_CHANNEL, channel)
}

export const setPlayBackInfo = function({ commit, state }, playBackInfo) {
    commit(types.SET_PLAYBACKINFO, playBackInfo)
}

export const isLive = function({ commit, state }, isLive) {
    commit(types.SET_ISLIVE, isLive)
}

export const setIsPlay = function({ commit, state }, isPlay) {
    commit(types.SET_ISPLAY, isPlay)
}

export const setArticle = function({ commit, state }, article) {
    commit(types.SET_ARTICLE, article)
}

export const