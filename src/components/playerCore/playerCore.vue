<template>
    <div class="play-core">
        <player-info></player-info>
        <div class="play-disc">            
            <div class="disc-img" :class="isPlay ? 'isPlay' : ''">
                <img src="./logo.png" alt="" class="channel-logo">
            </div>            
            <div class="disc-bg"></div>
            <div class="play-stylus" :class="isPlay ? 'isPlay' : ''"></div>
        </div>
        <player-ctrl></player-ctrl>
        <div @click="play">暂停</div>
    </div>
</template>

<script>
import PlayerInfo from 'components/playerInfo/playerInfo'
import PlayerCtrl from 'components/playerCtrl/playerCtrl'
export default {
    name: 'play-core',
    components:{
        PlayerInfo,
        PlayerCtrl
    },
    data() {
        return {
            isPlay:false
        }
    },
    methods:{
        play() {
            this.isPlay = !this.isPlay
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
@keyframes rotate
    0%
        transform rotate(0deg)
    100%
        transform rotate(360deg)
@keyframes stylusrotate
    0%
        transform rotate(2deg)
    25%
        transform rotate(-5deg)
    50%
        transform rotate(-10deg)
    75%
        transform rotate(-5deg)
    100%
        transform rotate(2deg)
.play-core  
    width 100%
    .play-disc
        position relative
        width 100%
        margin 50px auto 0
        overflow hidden
        .disc-img
            width 100%
            height 950px
            background url('./disc-icon.png') center center no-repeat
            &.isPlay
                -webkit-animation rotate 12s linear infinite
                -moz-animation rotate 12s linear infinite
                -o-animation rotate 12s linear infinite
                animation rotate 12s linear infinite
            .channel-logo
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                width 370px
                height 370px
                margin auto auto
        .disc-bg
            position absolute
            top 0
            z-index 10
            width 100%
            height 950px
            background url('./disc-bg-icon.png') left 33px top 32px no-repeat
        .play-stylus
            position absolute
            z-index 10
            top 150px
            right 50px
            width 179px
            height 421px
            background url('./stylus-icon.png') center center no-repeat
            background-size cover
            transform-origin 72% 10%
            transform rotate(-20deg)
            &.isPlay
                -webkit-animation stylusrotate 12s linear infinite
                -moz-animation stylusrotate 12s linear infinite
                -o-animation stylusrotate 12s linear infinite
                animation stylusrotate 12s linear infinite
</style>
