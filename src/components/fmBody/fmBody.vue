<template>
    <div class="fmbody">
        <div class="news-wrap">
            <div class="left">
                <h2 class="title">咨询活动</h2>
                <div class="pic-wrap clearfix">
                    <div class="item" v-for="n in 2">
                        <img src="http://www.hndt.com/news/201710/13/1910884/res/Et0pr9oN.jpg?1507858908116" alt="" class="img">
                        <p class="desc">河南省驻村办河南广播电视台河南省驻村办河南广播电视台</p>
                    </div>
                </div>                
                <ul class="list-wrap clearfix">
                    <li class="list" v-for="n in 12">
                        <span class="dot"></span>河南省驻村办河南广播电视台河南省驻村办河南广播电视台
                    </li>
                </ul>              
            </div>
            <div class="right">
                <div class="column-wrap">
                    <div class="title-wrap">
                        <h2 class="title">特色栏目</h2>
                        <h3 class="titlec">FEATURE COLUMN</h3>
                    </div>                    
                    <div class="slider">

                    </div>
                </div>
                <div class="podcast-wrap">
                    <h2 class="title">音频播客</h2>
                    <div class="slider">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="radio-host">
            <h2 class="title">主持人<span class="titlec">RADIO HOST</span></h2>
            <div class="slider">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'fmbody',
   
}
</script>

<style lang="stylus" scoped>
.fmbody
    width 100%
    margin-top 50px
    .news-wrap
        width 100%
        display flex
        justify-content space-between
        .left
            width 605px
            .title
                padding-bottom 40px
                border-bottom 1px solid #000000
                box-shadow 0 2px #333
                font-size 36px
                color rgb(0, 129, 220)
            .pic-wrap
                width 100%
                margin-top 40px
                padding-bottom 30px
                box-sizing border-box
                border-bottom 1px solid #000000
                box-shadow 0 2px #333
                .item
                    float left
                    width 280px
                    margin-right 45px
                    font-size 0
                    &:nth-child(2n)
                        margin-right 0
                    .img
                        width 280px
                        height 160px
                    .desc
                        margin-top 16px
                        font-size 20px
                        color #888888
                        text-overflow: ellipsis
                        overflow: hidden
                        white-space: nowrap
            .list-wrap
                width 100%                    
                margin-top 40px
                box-sizing border-box
                border-bottom 1px solid #000000
                box-shadow 0 2px #333
                .list
                    float left
                    width 280px
                    margin-bottom 30px
                    margin-right 45px
                    font-size 20px
                    color #888888
                    text-overflow: ellipsis
                    overflow: hidden
                    white-space: nowrap
                    &:nth-child(2n)
                        margin-right 0
                    .dot
                        vertical-align middle
                        display inline-block
                        width 3px
                        height 3px
                        margin-right 8px
                        background #474747
        .right
            margin-left 60px
            width 315px
            .column-wrap
                position relative
                margin-top 30px
                width 100%
                height 270px
                box-sizing border-box
                border 1px solid #3f3f3f
                .title-wrap
                    position relative
                    top -30px
                    width 200px
                    margin 0 auto
                    text-align center                    
                    background #292929
                    .title
                        font-size 36px
                        color rgb(0, 129, 220)
                    .titlec
                        margin-top 16px
                        font-size 18px
                        color rgb(85, 85, 85)
            .podcast-wrap
                width 100%
                margin-top 40px
                text-align center
                .title
                    font-size 36px
                    color rgb(0,129,220)
    .radio-host
        width 100%
        margin-top 40px
        .title
            font-size 36px
            color rgb(0,129,220)
            .titlec
                margin-left 18px
                font-size 18px
                color rgb(85,85,85)
</style>
