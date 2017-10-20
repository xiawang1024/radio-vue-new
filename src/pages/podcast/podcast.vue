<template>
  <div class="podcast">
      <audio :src="audioSrc" id="podcastAudio" loop style="display:none"></audio>
      <div class="hd">
          <span class="back-icon" @click="goBack"></span>
          <span class="title">{{podcastName}}</span>
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
                    :percent="percent"
                    :title="title">
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
          <div v-if="podcastList.length > 0" class="item" v-for="(item, index) of podcastList" v-bind:key="index" :class="currentIndex == index ? 'isPlay' : ''" @click="setPlaySrc(index, item.file_url, item.title)">
              <span class="icon">

              </span>
              <span class="title">{{item.title}}</span>
              <span class="time">{{item.time}}</span>
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
            podcastName:'',
            podcastList:[],
            isPlay:false,
            title:'',
            currentIndex:-1,
            audioSrc:'',
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
        this.podcastName = this.$route.query.podcast_name
        getPodcastList(this.$route.query.podcast_id).then((res) => {
            if(res.data.list.length == 0) {

            }
            this.podcastList = res.data.list
            this.$nextTick(() => {

            })
        })
    },
    mounted() {
        this.podcastAudio = document.getElementById('podcastAudio');
        this.watchPlayPercent()
        setTimeout(() => {
            this.volume = this.podcastAudio.volume
        },20)                    
    },
    methods:{
        setPlaySrc(index, src, title) {
            this.currentIndex = index;
            this.title = title
            console.log('------------------------------------');
            console.log(title);
            console.log('------------------------------------');
            this.audioSrc = 'http://www.hndt.com' + src
            setTimeout(() => {
                this._audioPlay()
            },20)
        },
        goBack() {
            this.$router.push({
                path:'/fmpage',
                query:{
                    channel_id:this.$route.query.channel_id
                }
            })
        },
        play() {
            if(this.podcastAudio.paused){
                this._audioPlay()
            }else{
                this._audioPause()
            }
            // this.$emit('play', this.isPlay)
        },
        _audioPlay() {
            this.podcastAudio.play()
            this.isPlay = true
        },
        _audioPause() {
            this.podcastAudio.pause()
            this.isPlay = false
        },
        onPercentChange(percent) {
            this.podcastAudio.currentTime = this.duration * percent
        },
        onVolumeChange(volume) {
            this.podcastAudio.volume = volume
        },
        //监听播放信息
        watchPlayPercent() {
            this.podcastAudio.addEventListener('timeupdate', (e) => {
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
            height 115px
        .volume
            position relative
            width 115px
            height 115px
    .list-wrap
        width 100%
        margin-top 60px
        overflow hidden
        .item
            display flex
            padding 30px
            font-size 26px
            color #888
            border-bottom 1px solid #000
            align-items center
            &.isPlay
                color #0081dc
                .icon
                    background url('./isLive.png') left center no-repeat
                    background-size 30px 30px
            .icon
                display inline-block
                width 40px
                height 30px
                background url('./noLive.png') left center no-repeat
                background-size 30px 30px
            .title  
                flex 1
            
</style>

