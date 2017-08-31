<template>
    <div class="play-ctrl">
        <div 
            class="play-pause" 
            :class="isPlay ? 'isPlay' : ''"
            @click="play">
        </div>
        <div class="progress">
            <progress-bar
                @percentChange="onPercentChange"
                :currentTime="currentTime"
                :duration="duration"
                :percent="percent">
            </progress-bar>
        </div>
        <div class="play-volumn">
            <volume-bar></volume-bar>
        </div>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
import ProgressBar from 'components/progressBar/progressBar'
import VolumeBar from 'components/volumeBar/volumeBar'
export default {
    name: 'play-ctrl',
    components:{
        ProgressBar,
        VolumeBar
    },
    data() {
        return {
            isPlay:true,
            currentTime:0,
            duration:0
        }
    },
    computed:{
        percent() {
            // console.log(this.percent)
            return this.currentTime / this.duration;
        }
    },
    mounted() {
        this.audio = document.getElementById('audio');
        this.watchPlayPercent()
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
        },
        onPercentChange(percent) {
            this.audio.currentTime = this.duration * percent
        },
        //监听播放信息
        watchPlayPercent() {
            this.audio.addEventListener('timeupdate', (e) => {
                this.currentTime = e.target.currentTime;
                this.duration = e.target.duration;
            })  
        },
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
