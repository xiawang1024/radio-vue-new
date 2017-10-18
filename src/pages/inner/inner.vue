<template>
    <div class="inner">
        <fm-header :isInner="true" :videoObj="videoObj"></fm-header>
        <div class="body">
            <h2 class="title">{{articleObj.title}}</h2>
            <div class="desc clearfix">
                <span class="time">{{articleObj.time}}</span>
                <span class="from" v-if="articleObj.origin">来源：{{articleObj.origin}}</span>
                <span class="editor" v-if="articleObj.manager">责编：{{articleObj.manager}}</span>
            </div>
            <div id="inner" class="text-wrap" v-html="articleObj.body">
                          
            </div>
        </div>
        <player-footer></player-footer>
    </div>
</template>

<script>
import FmHeader from 'components/fmHeader/fmHeader'
import PlayerFooter from 'components/playerFooter/playerFooter'
import { getChannelVideo, getArticle } from 'api/index'
export default {
    name: 'inner',
    components: {
        FmHeader,
        PlayerFooter
    },
    data() {
        return {
            channel_id:903,
            article_id:1910967,
            videoObj:{},
            articleObj:{}
        }
    },
    created() {
        this.channel_id = this.$route.query.channel_id
        this.article_id = this.$route.query.article_id
        if(this.channel_id){
            getChannelVideo(this.channel_id).then((res) => {
                this.videoObj = res.data
            })
        }
        getArticle(this.article_id).then((res) => {
            this.articleObj = res.data
            this.$nextTick(() => {
               
            })
        })
        
    },
    methods:{
        // _initIframe() {
        //     window.onload = () => {
        //         let iframe = document.getElementsByTagName('iframe')[0];
        //         // iframe.parentNode.style.textIndent=0
        //         alert(1)
        //         iframe.style.width = '600px'
        //         // iframe.style.width = 'margin:0 auto'
        //         let patt = /width=(.+)&height=(.+)&/g
        //         let options = 'width=600&height=auto&'
        //         let _src = iframe.attr("src").replace(patt, options)
        //         console.log('------------------------------------');
        //         console.log(iframe);
        //         console.log('------------------------------------');
                
        //     }
        // }
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
            text-indent 2em
            img
                display block
                margin 0 auto
                text-align center
</style>
