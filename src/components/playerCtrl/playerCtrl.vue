<template>
    <div class="play-ctrl">
        <div class="play-pause isPlay"></div>
        <div class="progress"></div>
        <div class="play-volumn"></div>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
export default {
    name: 'play-ctrl',
    
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.play-ctrl
    display flex
    align-items center 
    justify-content space-between
    width 100%
    margin-top 50px
    .play-pause
        width 115px
        height 115px
        background url('./play-icon.png') center center no-repeat
        background-size cover
        &.isPlay
            background url('./pause-icon.png') center center no-repeat
            background-size cover
    .progress
        width 570px
        height 115px
        background url('./progress-icon.png') center center no-repeat
    .play-volumn
        width 115px
        height 115px
        background url('./volume-icon.png') center center no-repeat
</style>
