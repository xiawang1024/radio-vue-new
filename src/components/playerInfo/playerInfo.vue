<template>
    <div class="play-info">
        <span>正在收听</span>
        <span class="date">{{today}}</span>
        <span class="channel">{{channel}}</span>
        <span class="column">{{column}}</span>
    </div>
</template>
<script>
import { pad } from 'common/js/util.js'
export default {
    name:'play-info',
    props:{
        date:{
            type:String,
            default:''
        },
        channel:{
            type:String,
            default:'新闻广播'
        },
        column:{
            type:String,
            default:'豫广新闻'
        }
    },
    computed:{
        today() {
            return this.date ? this.date : this._today()
        }
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
</style>
