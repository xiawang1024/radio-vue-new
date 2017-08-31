<template>
    <div class="volume-bar">
        <vue-slider @callback="cb" v-bind="progress" v-model="value">
        </vue-slider>
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
       
    },
    data() {
        return {
            value: 0,
            progress: {
                value: 0,
                height: 100,
                width:8,
                dotSize: 40,
                tooltip: "false",
                class: 'volume-slider',
                direction: "vertical",
                speed: 0.5,
                processStyle: {
                    backgroundColor: '#079edd',
                    boxShadow: "0 0px 10px 6px #1e3476 "
                },
                bgStyle: {
                    backgroundColor: '#000000'
                }
            }
        }
    },
    watch: {
        
    },
    methods: {
        cb(val) {
            const percent = val / 100;
            this.$emit('percentChange', percent)
        },
        
    }

}
</script>

<style lang="stylus" scoped>
.volume-bar
    background url('./volume-bar.png')
</style>
