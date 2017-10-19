<template>
    <div class="inner">
        <fm-header :isInner="true" :videoObj="videoObj"></fm-header>
        <div class="body">
            <h2 class="title">{{hostObj.desc}}</h2>
            <div class="desc clearfix">
                <span class="time">{{hostObj.time}}</span>
                <!-- <span class="from" v-if="hostObj.origin">来源：{{hostObj.origin}}</span> -->
                <span class="editor">责编：管理员</span>
            </div>
            <div class="text-wrap">
                <div class="item" v-for="(item,index) of hostObj.content" v-bind:key="index">
                    <img :src="'http://www.hndt.com' + item.url" :alt="item.name" class="img">
                    <p class="desc" v-if="item.description">{{item.description}}</p>
                </div>    
            </div>
        </div>
        <player-footer></player-footer>
    </div>
</template>

<script>
import FmHeader from 'components/fmHeader/fmHeader'
import PlayerFooter from 'components/playerFooter/playerFooter'
import { getChannelVideo, getHostArticle } from 'api/index'
export default {
    name: 'inner',
    components: {
        FmHeader,
        PlayerFooter
    },
    data() {
        return {
            videoObj:{},
            hostObj:{}
        }
    },
    created() {
        this.channel_id = this.$route.query.channel_id
        this.fragment_id = this.$route.query.fragment_id
        getChannelVideo(this.channel_id).then((res) => {
            this.videoObj = res.data
        })
        getHostArticle(this.fragment_id).then((res) => {
            let data = res.data;
            this.hostObj = Object.assign({}, this.hostObj, {
                name: data.name,
                time: data.time,
                desc:data.desc,
                content:JSON.parse(data.content)
            })

        })
        
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
.inner
    min-height 1920px
    .body
        margin-top 60px
        .title
            line-height 1.8
            font-size 50px
            color rgb(0, 129, 220)
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            text-align center
        .desc
            margin-top 50px
            font-size 30px
            color rgb(102,102,102)	
            .time
                float left
            .from
                float left 
                margin-left 50px
            .editor 
                float right
        .text-wrap
            margin-top 50px
            line-height 2
            font-size 30px
            color rgb(153,153,153)
            text-align center
            text-indent 2em
            .item
                margin-bottom 30px
                img 
                    display block
                    width 650px
                    height auto
                    margin 0 auto
                .desc
                    text-align left
</style>
