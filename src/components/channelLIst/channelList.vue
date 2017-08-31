<template>
    <transition name="fade">
        <div class="channel-list" v-show="isShowChannel">
            <ul class="list-wrap clearfix">
                <li 
                    class="list"
                    :class="currentIndex == index ? 'isSelected' : ''"
                    @click="selectChannel(item, index)"
                    v-for="(item,index) in channelList">
                    <span class="name">
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
import { getClassItem } from 'api/index'
export default {
    name:'channel-list',
    data () {
        return {
            currentIndex:0,
            channelList:[]
        }
    },
    props:{
        isShowChannel: {
            type: Boolean,
            default: false
        }
    },
    created() {
        getClassItem(1).then((res) => {
            this.channelList = res.data
        })
    },
    methods: {
        selectChannel(item, index) {
            this.currentIndex = index;
            this.$emit('selectChannel',item)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.channel-list
    position absolute
    z-index 1024
    width 978px
    left 0
    top 250px
    background #1f1f21
    color #7c8997
    font-size 38px
    .list-wrap
        width 100%
        box-sizing border-box
        .list
            float left
            display flex
            align-items center
            width 326px
            height 144px
            line-height 1.6
            vertical-align middle
            text-align center
            box-sizing border-box
            border 1px solid #3a3a3a
            &.isSelected
                background #0081dc
                color #ffffff
            .name
                flex 1
                text-align center
</style>
