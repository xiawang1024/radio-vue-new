<template>
  <div class="podcast">
      <audio src="http://www.hndt.com/podcast/1041/1020/201709/29/1908658/res/rA0mLLcb.mp3" id="podcastAudio" loop style="display:none"></audio>
      <div class="hd">
          <span class="back-icon" @click="goBack"></span>
          <span class="title">音频播客</span>
      </div>
      <div class="player-wrap">
            <div 
                class="play-pause" 
                :class="isPlay ? 'isPlay' : ''"
                @click="play">
            </div>
            <div class="progress">
                <podcast-progress
                    @percentChange="onPercentChange"
                    :currentTime="currentTime"
                    :duration="duration"
                    :percent="percent">
                </podcast-progress>
            </div>
            <div class="volume">
                <volume-bar
                    @volumeChange="onVolumeChange"
                    :volume="volume">
                </volume-bar>
            </div>
      </div>
      <div class="list-wrap">
          <div class="item" v-for="(item, index) of podcastList" v-bind:key="index">
              {{item.title}}
          </div>
      </div>
      <player-footer></player-footer>
  </div>
</template>

<script>
import PodcastProgress from 'components/podcastProgress/podcastProgress'
import VolumeBar from 'components/volumeBar/volumeBar'
import PlayerFooter from 'components/playerFooter/playerFooter'
import { getPodcastList } from 'api/index'
export default {
    name:'podcast',
    components:{
        PodcastProgress,
        VolumeBar,
        PlayerFooter
    },
    data() {
        return {
            podcastList:[],
            isPlay:false,
            currentTime:0,
            duration:0,
            volume:0
        }
    },
    computed:{
        percent() {
            return this.currentTime / this.duration;
        }
    },
    created() {
        getPodcastList(this.$route.query.podcast_id).then((res) => {
            this.podcastList = res.data.list
            this.$nextTick(() => {

            })
        })
    },
    mounted() {
        this.audio = document.getElementById('podcastAudio');
        this.watchPlayPercent()
        setTimeout(() => {
            this.volume = this.audio.volume
        },20)                    
    },
    methods:{
        goBack(){
            this.$router.push({
                path:'/fmpage',
                query:{
                    channel_id:this.$route.query.channel_id
                }
            })
        },
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
            this.isPlay = true
        },
        _audioPause() {
            this.audio.pause()
            this.isPlay = false
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
    }
}
</script>


<style lang="stylus" scoped>
.podcast
    position relative
    min-height 1920px
    .hd
        position relative
        width 100%
        height 252px
        line-height 252px
        text-align center
        .back-icon
            position absolute
            left 0
            vertical-align middle
            display inline-block
            width 68px
            height 252px
            background url('./back-icon.png') left center no-repeat
            background-size 34px 60px
        .title
            vertical-align middle
            font-size 60px
            color #0081dc
    .player-wrap
        display flex
        width 100%
        overflow hidden
        justify-content space-between
        align-items center
        .play-pause
            width 115px
            height 115px
            background url('./play-icon.png') center center no-repeat
            background-size cover
            &.isPlay
                background url('./pause-icon.png') center center no-repeat
                background-size cover
        .progress
            width 550px
        .volume
            position relative
            width 115px
            height 115px
</style>

