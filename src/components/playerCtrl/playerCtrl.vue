<template>
    <div class="play-ctrl">
        <div 
            class="play-pause" 
            :class="isPlay ? 'isPlay' : ''"
            @click="play">
        </div>
        <div class="progress">
            <progress-bar></progress-bar>
        </div>
        <div class="play-volumn"></div>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
import ProgressBar from 'components/progressBar/progressBar'
export default {
    name: 'play-ctrl',
    components:{
        ProgressBar
    },
    data() {
        return {
            isPlay:true,
            value: 0
        }
    },
    mounted() {
        this.audio = document.getElementById('audio');
        console.log('------------------------------------');
        console.log(this.audio);
        console.log('------------------------------------');
    },
    methods:{
        play() {
            if(this.audio.paused){
                this._audioPlay()
            }else{
                this._audioPause()
            }
            this.$emit('play',this.isPlay)
        },
        _audioPlay() {
            this.audio.play()
            this.isPlay = true;
        },
        _audioPause() {
            this.audio.pause()
            this.isPlay = false;
        }
    }
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
        // background url('./progress-icon.png') center center no-repeat
    .play-volumn
        width 115px
        height 115px
        background url('./volume-icon.png') center center no-repeat
</style>
