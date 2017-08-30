<template>
    <div class="news clearfix">
        <div class="img-list">
            <div class="item" v-for="n in 3">
                <img src="./test.png" alt="" class="img">
            </div>
        </div>
        <div class="text-list">
            <div class="top">
                <h2 class="title">中欧班列（郑州）谱写丝路华章</h2>
                <p class="desc">昨天晚上9点36分，总第450列中欧班列（郑州）从郑州圃田车站出发驶向万里之遥的德国汉堡。进入2017年，中欧班列（郑州）开行频次连续升级从年初的每周“四去四回”逐步加密到如今实现每日常态化开行...</p>
            </div>
            <div class="list-wrap-row">
                <ul class="list-wrap clearfix">
                    <li class="list" v-for="n in 4">
                        <span class="dot"></span>
                        <span class="link">河南省驻村办河南广播电视台</span>
                    </li>
                </ul>
            </div>
            <div class="list-wrap-vertical clearfix">
                <ul class="list-wrap">
                    <li class="list" v-for="n in 4">
                        <span class="dot"></span>
                        <span class="link">河南省驻村办河南广播电视台</span>
                    </li>
                </ul>
                <div class="qrcode">
                    <img src="./qrcode.png" alt="" class="img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'news'
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.news
    width 100%
    margin-top 12px
    height 600px
    overflow hidden
    background $color-background-grey
    box-sizing border-box
    padding 30px 
    .img-list
        float left 
        width 250px
        .item
            font-size 0
            margin-bottom 30px
    .text-list
        float right 
        width 605px
        .top
            margin-top 10px
            padding-bottom 40px
            border-bottom 1px solid #000000
            .title
                text-align center
                font-size 26px
                color $color-light-blue
            .desc
                margin-top 25px
                font-size 17px
                color #666
                line-height 1.8
        .list-wrap-row
            padding 40px 0
            border-bottom 1px solid #000000
            .list-wrap
                width 100%
                .list
                    float left
                    width 300px
                    height 40px
                    line-height 40px
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    .dot
                        vertical-align middle
                        display inline-block
                        width 3px
                        height 3px
                        background #474747
                    .link
                        margin-left 4px
                        color #888888
        .list-wrap-vertical
            padding 30px 0
            .list-wrap
                float left
                width 430
                .list
                    width 430px
                    height 40px
                    line-height 40px
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    .dot
                        vertical-align middle
                        display inline-block
                        width 3px
                        height 3px
                        background #474747
                    .link
                        margin-left 4px
                        color #888888
            .qrcode 
                float right 
</style>

