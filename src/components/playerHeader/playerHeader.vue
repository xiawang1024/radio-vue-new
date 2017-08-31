<template>
    <div class="play-header">
        <span class="back-icon" @click="goToHome"></span>
        <span class="btn live-wrap isLive">
            <span class="text">听直播</span>
        </span>
        <span 
            @click="openChannel"
            class="btn channel-wrap">
            {{channel}}
        </span>
        <span 
            @click="openDate"
            class="btn date-wrap">
            {{date}}
        </span>
        <div class="chanel">
            <channel-list 
                @selectChannel="selectChannel"
                :isShowChannel="isShowChannel">
            </channel-list>
        </div>
        <div class="picker">
            <date-picker 
                :isShowDatePicker="isShowDatePicker"
                @selectDate="selectDate">
            </date-picker>
        </div>
    </div>
</template>

<script>
import ChannelList from 'components/channelList/channelList'
import DatePicker from 'components/datePicker/datePicker'
import { pad } from 'common/js/util.js'
export default {
    name: 'play-header',
    components:{
        ChannelList,
        DatePicker
    },
    data() {
        return {
            channel:'新闻广播',//频率
            isShowChannel:false,//是否显示频率组件
            date:null,//日期
            isShowDatePicker:false//是否显示日期组件
        }
    },
    mounted() {
        setTimeout(() => {
            this.date = this._getToDay()
        },20)
    },
    methods:{
        goToHome() {
            this.$router.push({
                path: '/home'
            })
        },
        selectChannel(channel) {
            this.channel = `${channel.name}`
            this.isShowChannel = false;
        },
        selectDate(date){
            console.log('------------------------------------');
            console.log(date);
            console.log('------------------------------------');
            this.date = `${date.year}-${this._pad(date.month)}-${this._pad(date.day)}`
            this.isShowDatePicker = false;
        },
        openChannel() {
            this.isShowChannel = true;
        },
        openDate() {
            this.isShowDatePicker = true
        },
        _getToDay() {
            let year = (new Date()).getFullYear();
            let month = pad(new Date().getMonth() + 1);
            let day = pad(new Date().getDate());
            let today = `${year}-${month}-${day}`
            return today
        }
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
