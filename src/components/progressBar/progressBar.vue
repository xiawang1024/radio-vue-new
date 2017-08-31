<template>
    <div class="progress-bar">
        <vue-slider v-bind="progress" v-model="value"></vue-slider>
        <span class="current-time">00:00</span>
        <span class="duration">00:00</span>
    </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
export default {
    components: {
        vueSlider
    },
    data() {
        return {
            value:50,
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
    }

}
</script>

<style lang="stylus" scoped>
.progress-bar
    position relative
    margin-top 10px 
    .current-time
        position absolute
        left 0
        font-size 26px
        color #7c8997
    .duration
        position absolute
        right 0
        font-size 26px
        color #7c8997
</style>
