<template>
    <div class="volume-bar" :class="isZeroVolume ? 'no-volume-icon' : ''">
        <div class="bar">
            <vue-slider class="volume" @callback="cb" v-bind="progress" v-model="value"></vue-slider>
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
    props: {
       volume:{
           type:Number,
           default:0.9
       }
    },
    data() {
        return {
            value: 80,
            progress: {
                value: 0,
                height: 250,
                width:16,
                dotSize: 66,
                interval:10,
                tooltip: "false",
                class: 'volume-slider',
                direction: "vertical",
                speed: 0.5,
                processStyle: {
                    backgroundColor: '#1d8eca',
                    boxShadow: "0 0px 2px 4px #0e1537 inset"
                },
                bgStyle: {
                    backgroundColor: '#000000',
                    boxShadow: "0 0px 0px 4px #333333 inset"
                }
            }
        }
    },
    watch: {
        volume(newVolume) {
            this.value = this.newVolume * 100
        }
    },
    computed:{
        isZeroVolume() {
            return this.value == 0 ? true : false
        }
    },
    methods: {
        cb(val) {
            const volume = val / 100;
            this.$emit('volumeChange', volume)
        },
        
    }

}
</script>

<style lang="stylus" scoped>
.volume-bar
    position relative
    z-index 10240
    width 115px
    height 115px
    background url('./volume-icon.png') center center no-repeat
    background-size 115px 115px
    &.no-volume-icon
        background url('./no-volume-icon.png') center center no-repeat
        background-size 115px 115px
    .bar
        position absolute
        bottom 140px
        left -14px
        width 143px
        height 177px
        background url('./line.png') center center no-repeat
        background-size 143px 177px 
        .volume
            position relative
            top -40px
            left 30px
</style>
