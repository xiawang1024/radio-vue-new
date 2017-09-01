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
import { mapActions } from 'vuex'
import Hls from 'hls'

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
            this.setChannel(this.channelList[0])
            console.log('------------------------------------');
            console.log(this.channelList[0]);
            console.log('------------------------------------');
            this._playHlsSrc(this.channelList[0].streams[0])
        })
    },
    mounted() {
        this.audio = document.getElementById('audio')
    },
    methods: {
        selectChannel(item, index) {
            this.currentIndex = index;
            this.$emit('selectChannel',item)
        },
        //判断是否是m3u8,地市台换用蜻蜓直播流mp3
        _isM3u8(stream) {
            let patt = /m3u8$/;
            return patt.test(stream);
        },
        _playHlsSrc(stream) {
            if (this._isM3u8(stream)) {
                if (Hls.isSupported()) {
                    this.hls = new Hls();
                    this.hls.loadSource(stream);
                    this.hls.attachMedia(this.audio);
                    this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        this.audio.play();
                        this.isPlay = true
                    });
                }
            } else {
                this.audio.setAttribute('src', stream)
            }
        },
        ...mapActions([
            'setChannel'
        ])
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
