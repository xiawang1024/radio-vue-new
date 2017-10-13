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
                        <div class="slider-box">                            
                            <swiper :options="columnSwiper" ref="columnSwiper">
                                <!-- slides -->
                                <swiper-slide v-for="n in 2">
                                    <div class="img-wrap">
                                        <img src="http://www.hndt.com/brand/1041/1057/res/HRU9nl3c.png?1505177593721" alt="" class="img">
                                        <p class="name">南方谈交通</p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
                <div class="podcast-wrap">
                    <h2 class="title">音频播客</h2>
                    <div class="slider">
                        <swiper :options="podcastSwiper" ref="podcastSwiper">
                            <!-- slides -->
                            <swiper-slide v-for="n in 10">
                                <div class="img-wrap">
                                    <img src="http://www.hndt.com/podcast/1041/1021/res/it7e3U4V.jpg?1505469628026" alt="" class="img">
                                    <p class="name">南方谈交通</p>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="radio-host">
            <h2 class="title">主持人<span class="titlec">RADIO HOST</span></h2>
            <div class="slider">
                <swiper :options="radioHostSwiper" ref="radioSwiper">
                    <!-- slides -->
                    <swiper-slide v-for="n in 10">
                        <div class="img-wrap">
                            <img src="http://www.hndt.com/fm/976/res/PWRdajsu.jpg?1487823965778" alt="" class="img">
                            <p class="name">高兴</p>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'fmbody',
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            columnSwiper: {
                direction: 'vertical',
                autoplay: 4000,
                slidesPerView: 1,
                height: 140,
                loop: true,
                setWrapperSize: true,
                prevButton: '.column-wrap .swiper-button-prev',
                nextButton: '.column-wrap .swiper-button-next',
                observeParents: true 
            },
            podcastSwiper: {
                loop: true,
                autoplay: 4000,
                setWrapperSize: true,
                prevButton: '.podcast-wrap .swiper-button-prev',
                nextButton: '.podcast-wrap .swiper-button-next',
                observeParents: true                
            },
            radioHostSwiper: {
                loop:true,
                autoplay: 3500,
                setWrapperSize: true,
                prevButton: '.radio-host .swiper-button-prev',
                nextButton: '.radio-host .swiper-button-next',
                observeParents: true,
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween:43
            },
        }
    }
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
                padding-bottom 30px
                border-bottom 1px solid #000000
                box-shadow 0 2px #333
                font-size 36px
                color rgb(0, 129, 220)
            .pic-wrap
                width 100%
                margin-top 30px
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
                margin-top 30px
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
                .slider
                    width 100%
                    position relative
                    .slider-box
                        width 250px
                        height 140px
                        margin 10px auto
                        overflow hidden
                        .img-wrap
                            position relative
                            width 250px
                            height 140px
                            .img
                                display block
                                width 250px
                                height 140px
                            .name   
                                position absolute
                                bottom 0
                                left 0
                                right 0
                                width 100%
                                height 40px
                                line-height 40px
                                text-align center
                                background rgba(0,0,0,0.6)
                                color #fff
                                overflow hidden
                                text-overflow: ellipsis
                                white-space nowrap
                    .swiper-button-prev
                        position absolute
                        width 100px
                        top -20px
                        left 107px
                        background-image url('./top-icon.png')
                        background-size 26px 10px
                    .swiper-button-next
                        position absolute
                        width 100px
                        top 160px
                        left 107px
                        background-image url('./down-icon.png')
                        background-size 26px 10px
            .podcast-wrap
                width 100%
                margin-top 40px
                text-align center
                .title
                    font-size 36px
                    color rgb(0,129,220)
                .slider
                    position relative
                    width 240px
                    margin 30px auto 0
                    .img-wrap
                        width 240px
                        .img
                            display block
                            width 240px
                            height 240px
                        .name
                            margin-top 16px
                            text-align center
                            font-size 18px
                            color rgb(153,153,153)
                .swiper-button-prev
                    position absolute
                    height 60px
                    left -36px
                    margin-top -52px
                    background-image url('./left-icon.png')
                    background-size 16px 42px
                .swiper-button-next
                    position absolute
                    height 60px
                    right -36px
                    margin-top -52px
                    background-image url(./right-icon.png) 
                    background-size 16px 42px
    .radio-host
        width 100%
        margin-top 20px
        .title
            font-size 36px
            color rgb(0,129,220)
            .titlec
                margin-left 18px
                font-size 18px
                color rgb(85,85,85)
        .slider
            position relative
            width 850px
            margin 30px auto 0
            .img-wrap
                width 180px
                .img
                    display block
                    width 180px
                    height 240px
                .name
                    margin-top 16px
                    text-align center
                    font-size 18px
                    color rgb(153,153,153)
            .swiper-button-prev
                position absolute
                left -50px
                margin-top -34px
            .swiper-button-next
                position absolute
                right -50px
                margin-top -34px
</style>
