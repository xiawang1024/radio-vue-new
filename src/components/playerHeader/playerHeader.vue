<template>
    <div class="play-header">
        <span class="back-icon" @click="goToHome"></span>
        <span class="btn live-wrap isLive">
            <span class="text">听直播</span>
        </span>
        <span class="btn channel-wrap">河南电台</span>
        <span class="btn date-wrap">2017-08-25</span>
        <div class="picker">
            <date-picker></date-picker>
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
            
        }
    },
    methods:{
        goToHome() {
            this.$router.push({
                path: '/home'
            })
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
        // position relative
</style>
