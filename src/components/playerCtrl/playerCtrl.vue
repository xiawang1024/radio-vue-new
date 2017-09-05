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
            <volume-bar
                @volumeChange="onVolumeChange"
                :volume="volume">
            </volume-bar>
        </div>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
import ProgressBar from 'components/progressBar/progressBar'
import VolumeBar from 'components/volumeBar/volumeBar'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'play-ctrl',
    components:{
        ProgressBar,
        VolumeBar
    },
    data() {
        return {
            currentTime:0,
            duration:0,
            volume:0
        }
    },
    computed:{
        percent() {
            return this.currentTime / this.duration;
        },
        ...mapGetters([
            'isPlay'
        ])
    },
    mounted() {
        this.audio = document.getElementById('audio');
        this.watchPlayPercent()
        setTimeout(() => {
            this.volume = this.audio.volume
        },20),
        document.addEventListener("visibilitychange", () => {
            // document.title = document.hidden ? "用户离开了" : "用户回来了";
            if(document.hidden) {
                this._audioPause()
            }else{
                this._audioPlay()
            }
        })
    },
    methods:{
        play() {
            if(this.audio.paused){
                this._audioPlay()
            }else{
                this._audioPause()
            }
            // this.$emit('play', this.isPlay)
        },
        _audioPlay() {
            this.audio.play()
            this.setIsPlay(true);
        },
        _audioPause() {
            this.audio.pause()
            this.setIsPlay(false);
        },
        onPercentChange(percent) {
            this.audio.currentTime = this.duration * percent
        },
        onVolumeChange(volume) {
            this.audio.volume = volume
        },
        //监听播放信息
        watchPlayPercent() {
            this.audio.addEventListener('timeupdate', (e) => {
                this.currentTime = e.target.currentTime;
                this.duration = e.target.duration;
            })  
        },
        ...mapActions([
            'setIsPlay'
        ])
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
        position relative
        width 115px
        height 115px
        // background url('./volume-icon.png') center center no-repeat
</style>
