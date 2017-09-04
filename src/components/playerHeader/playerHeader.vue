<template>
    <div class="play-header">
        <span class="back-icon" @click="goToHome"></span>
        <span class="btn live-wrap" :class="!isLive ? 'isLive' : ''" @click="oneLivePlay">
            <span class="text">听直播</span>
        </span>
        <span 
            @click="openChannel"
            class="btn channel-wrap">
            {{channel.name}}
        </span>
        <span 
            @click="openDate"
            class="btn date-wrap">
            {{date}}
        </span>
        <div class="chanel">
            <channel-list 
                @closeChannelList="closeChannelList"
                @selectChannel="selectChannel"
                :isShowChannel="isShowChannel">
            </channel-list>
        </div>
        <div class="picker">
            <date-picker 
                @closeDatePick="closeDatePick"
                :isShowDatePicker="isShowDatePicker"
                @selectDate="selectDate">
            </date-picker>
        </div>
        <div class="program">
            <program-list
                :isShowProgram="isShowProgram"
                :cid="cid"
                :time="date"
                @closeProgramList="closeProgramList"
                @playBack="playBack">                
            </program-list>
        </div>
    </div>
</template>

<script>
import ChannelList from 'components/channelList/channelList'
import DatePicker from 'components/datePicker/datePicker'
import ProgramList from 'components/programList/programList'
import { pad } from 'common/js/util.js'
import Hls from 'hls'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'play-header',
    components:{
        ChannelList,
        DatePicker,
        ProgramList
    },
    data() {
        return {
            // channel:'新闻广播',//频率
            isShowChannel:false,//是否显示频率组件
            date:null,//日期
            isShowDatePicker:false,//是否显示日期组件
            isShowProgram:false,//是否显示节目列表组件
            cid:1,//频率cid
        }
    },
    computed:{
       ...mapGetters([
           'isLive', 'channel'
       ])
    },
    mounted() {
        this.audio = document.getElementById('audio')
        setTimeout(() => {
            this.date = this._getToDay()
        },20)
    },
    methods:{
        //一键直播
        oneLivePlay() {
            this.selectChannel(this.channel)
            this.setPlayBackInfo({})
            this.setIsLive(true)
        },
        goToHome() {
            this.$router.push({
                path: '/home'
            })
        },
        selectChannel(channel) {            
            this.setChannel(channel)
            this._playHlsSrc(channel.streams[0])
            this.isShowChannel = false;   
            this.cid = parseInt(channel.cid); 
            this.date = this._getToDay()       
        },
        selectDate(date){
            this.date = `${date.year}-${pad(date.month)}-${pad(date.day)}`
            this.isShowDatePicker = false;
            this.openProgram()
        },
        playBack(program){
            let liveStream = this.channel.streams[0];
            if(this.isLive){                
                //直播...
                setTimeout(() => {
                    this._playHlsSrc(liveStream)
                },20)
            }else{                
                //点播...
                this._playHlsSrc(program.playUrl[0])
            }
            
        },
        openChannel() {
            this.isShowChannel = true;
        },
        openDate() {
            this.isShowDatePicker = true
        },
        openProgram() {
            this.isShowProgram = true
        },
        closeChannelList() {
            this.isShowChannel = false
        },
        closeDatePick() {
            this.isShowDatePicker = false
        },
        closeProgramList() {
            this.isShowProgram = false
        },
        _getToDay() {
            let year = (new Date()).getFullYear();
            let month = pad(new Date().getMonth() + 1);
            let day = pad(new Date().getDate());
            let today = `${year}-${month}-${day}`
            return today
        },
        //判断是否是m3u8,地市台换用蜻蜓直播流mp3
        _isM3u8(stream) {
            let patt = /m3u8$/;
            return patt.test(stream);
        },
        _playHlsSrc(stream) {
            if (this._isM3u8(stream)) {
                if (Hls.isSupported()) {
                    this.hls = new Hls();
                    this.hls.loadSource(stream);
                    this.hls.attachMedia(this.audio);
                    this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        this.audio.play();
                        this.isPlay = true
                    });
                }
            } else {
                this.audio.setAttribute('src', stream)
            }
        },
        ...mapActions({
            'setChannel':'setChannel',
            'setIsLive':'isLive',
            'setPlayBackInfo':'setPlayBackInfo'
        }),
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.play-header
    width 100%
    height 258px
    display flex
    align-items center
    justify-content space-between
    .back-icon
        width 68px
        height 120px
        background url('./back-icon.png') left center no-repeat
        background-size 34px 60px
    .btn
        display inline-block
        height 66px
        line-height 66px
        padding 0 15px 0 15px
        border 2px solid #999
        font-size $fontsize-large-xxxx
        color $color-light-blue
        border-radius $radius-size-medium
        &.live-wrap
            margin-left 100px        
            padding-left 80px
            background url('./radio-icon.png') left 30px center no-repeat
            background-size auto 36px
            &.isLive
                background-color #1f1f21
                border none
        &.channel-wrap,&.date-wrap
            padding-right 50px
            background url('./down-icon.png')  right 20px center no-repeat  
</style>
