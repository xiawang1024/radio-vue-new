<template>
    <div class="inner">
        <fm-header :isInner="true" :videoObj="videoObj"></fm-header>
        <div class="body">
            <h2 class="title">郑州一男子驾照吊销期间开车，被“天眼”发现！结果</h2>
            <div class="desc clearfix">
                <span class="time">2017年5月17日</span>
                <span class="from">来源：河南交通广播</span>
                <span class="editor">责编：武晶晶</span>
            </div>
            <div class="text-wrap">
                10月9日上午10点多，一辆车牌号为豫A336AF黑色现代越野车，在沿花园路由南向北行驶的时候，被郑州警方的机动车缉查布控系统发现并发出预警：该车辆所有人驾驶证状态异常，处于吊销状态，请注意拦截！经查，该车辆司机包某某在今年1月10日，因醉酒驾驶机动车被交警部门查获，其驾驶证已经被吊销。随后，交警一大队案件侦办中队对驾驶员包某某的无证驾驶违法进行了处理，并于当日晚将其送至拘留所拘留。            
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
            videoObj:{}
        }
    },
    created() {
        getChannelVideo(this.channel_id).then((res) => {
            this.videoObj = res.data
        })
        getArticle(this.article_id)
    }
}
</script>

<style lang="stylus" scoped>
.inner
    min-height 1920px
    .body
        margin-top 75px
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
</style>
