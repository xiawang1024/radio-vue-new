import { pad, today, isInTime } from 'common/js/util.js'

export const channel = state => state.channel

export const playBackInfo = state => state.playBackInfo

export const isLive = (state) => {
    if(state.playBackInfo){
        let date = state.playBackInfo.date
        let begin = state.playBackInfo.beginTime
        let end = state.playBackInfo.endTime
        console.log(date)
        if(date == today()){//是今天
            //是当前时间段，是直播
            if(isInTime(begin, end)){
                return true
            } else {//否当前时间段，回听
                return false
            }            
            
        }else{//非今天
            return false
        }
    }
}

