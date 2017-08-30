<template>
    <div class="play-header">
        <span class="back-icon" @click="goToHome"></span>
        <span class="btn live-wrap isLive">
            <span class="text">听直播</span>
        </span>
        <span class="btn channel-wrap">河南电台</span>
        <span 
            @click="openDate"
            class="btn date-wrap">
            {{date}}
        </span>
        <div class="picker">
            <date-picker 
                :isShowDatePicker="isShowDatePicker"
                @selectDate="selectDate">
            </date-picker>
        </div>
    </div>
</template>

<script>
import DatePicker from 'components/datePicker/datePicker'
export default {
    name: 'play-header',
    components:{
        DatePicker
    },
    data() {
        return {
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
        selectDate(date){
            console.log('------------------------------------');
            console.log(date);
            console.log('------------------------------------');
            this.date = `${date.year}-${this._pad(date.month)}-${this._pad(date.day)}`
            this.isShowDatePicker = false;
        },
        openDate() {
            this.isShowDatePicker = true
        },
        _getToDay() {
            let year = (new Date()).getFullYear();
            let month = this._pad(new Date().getMonth() + 1);
            let day = this._pad(new Date().getDate());
            let today = `${year}-${month}-${day}`
            return today
        },
        _pad(num, n = 2) {
            let len = num.toString().length
            while (len < n) {
                num = '0' + num
                len++
            }
            return num
        },
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
        padding 0 30px 0 30px
        border 2px solid #999
        font-size $fontsize-large-xxxx
        color $color-light-blue
        border-radius $radius-size-medium
        &.live-wrap
            margin-left 160px        
            padding-left 80px
            background url('./radio-icon.png') left 30px center no-repeat
            background-size auto 36px
            &.isLive
                background-color #1f1f21
                border none
        &.channel-wrap,&.date-wrap
            padding-right 50px
            background url('./down-icon.png')  right 20px center no-repeat  
    .picker
        // position absolute
</style>
