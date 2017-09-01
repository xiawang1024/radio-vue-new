<template>
    <div class="play-info">
        <span class="type" v-if="isLive">直播：</span>
        <span class="type" v-else>回听：</span>
        <span class="date">{{today}}</span>
        <span class="channel">{{channel.name}}</span>
        <span class="column">{{liveName}}</span>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
import { mapGetters } from 'vuex'
export default {
    name:'play-info',
    props:{
        date:{
            type:String,
            default:''
        }
    },
    computed:{
        today() {
            return this.playBackInfo.date ? this.playBackInfo.date : this._today()
        },
        liveName() {
            return this.playBackInfo.title ? this.playBackInfo.title : this.channel.live
        },
        ...mapGetters([
            'channel', 'playBackInfo','isLive'
        ])
    },
    methods:{
        _today() {
            let year = (new Date()).getFullYear()
            let month = pad(new Date().getMonth() + 1)
            let day = pad(new Date().getDate())
            return `${year}-${month}-${day}`
        },
    }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.play-info  
    width 100%
    text-align center
    font-size $fontsize-large-xxxx
    color $color-grey
    span 
        margin 0 6px
        &.type
            display inline-block
            background #0081dc
            color #ffffff
            padding 8px 12px
            border-radius 4px

</style>
