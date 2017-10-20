<template>
    <div class="podcast-progress">
        <h3 class="title">{{title}}</h3>
        <vue-slider 
            @callback="cb"
            v-bind="progress" 
            v-model="value">
        </vue-slider>
        <div>
            <span class="current-time">{{format(currentTime)}}</span>
            <span class="duration">{{format(duration)}}</span>
        </div>
    </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import { pad } from 'common/js/util.js'

export default {
    components: {
        vueSlider
    },
    props:{
        percent: {
            type: Number,
            default: 0
        },
        currentTime: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0
        },
        title:{
            type:String,
            default:''
        }
    },    
    data() {
        return {
            value:0,
            progress:{
                value: 0,
                height:8,
                dotSize:40,
                tooltip:"false",
                class: 'bar-slider',
                speed: 0.5,
                processStyle: {
                    backgroundColor: '#079edd',
                    boxShadow: "0 0px 10px 6px #1e3476 "
                },
                bgStyle:{
                    backgroundColor:'#000000'
                }
            }
        }
    },
    watch: {
        percent(newPercent) {
            if(this.isLive){
                this.value = 60
            }else{
                this.value = newPercent * 100
            }
        }
    },
    methods:{
        cb(val) {
            const percent = val / 100;
            this.$emit('percentChange', percent)
        },
        format(interval) {
            interval = interval | 0
            const minute = pad(interval / 60 | 0)
            const second = pad(interval % 60)
            return `${minute}:${second}`
        },
    }

}
</script>

<style lang="stylus" scoped>
.podcast-progress
    position relative
    // margin-top 10px 
    .title
        height 26px
        margin-bottom 10px
        font-size 26px
        color #0081dc
    .current-time
        position absolute
        left 0
        font-size 24px
        color #7c8997
    .duration
        position absolute
        right 0
        font-size 24px
        color #7c8997
    .islive
        color #7c8997
        font-size 20px
</style>
