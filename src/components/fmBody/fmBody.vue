<template>
    <div class="fmbody">
        <div class="news-wrap">
            <div class="left">
                <h2 class="title">咨询活动</h2>
                <div class="pic-wrap clearfix">
                    <div class="item" v-for="item in twoList" @click="goToArticle(item.id,item.channel)" v-bind:key="item.id">
                        <img v-if="item.cover_url" :src="'http://www.hndt.com' + item.cover_url " alt="" class="img">
                        <img v-else alt="" class="img" src="./default-pic.png">
                        <p class="desc">{{item.name}}</p>
                    </div>
                </div>                
                <ul class="list-wrap clearfix">
                    <li class="list" v-for="item in twelveList" @click="goToArticle(item.id,item.channel)" v-bind:key="item.id">
                        <span class="dot"></span>{{item.name}}
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
                                <swiper-slide v-for="item in columnList" v-bind:key="item.icon_url">
                                    <div class="img-wrap" @click="goToList(item.id,item.name)">
                                        <img :src=" item.icon_url" alt="" class="img">
                                        <p class="name">{{item.name}}</p>
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
                            <swiper-slide v-for="(item,index) in podcastList" v-bind:key="index" @click.native="goToPodcastList(item.id, item.name)">
                                <div class="img-wrap" >
                                    <img v-if="item.icon_url == 'no-open'" src="./no-open.png" alt="" class="img">
                                    <img v-else :src="'http://www.hndt.com' + item.icon_url" alt="" class="img">
                                    <p class="name">{{item.name}}</p>
                                </div>
                            </swiper-slide>                            
                        </swiper>
                        <!-- <swiper :options="podcastSwiper" ref="podcastSwiper" v-else>
                            <swiper-slide >
                                <div class="img-wrap">
                                    <img src="./no-open.png" alt="" class="img">
                                    <p class="name"></p>
                                </div>
                            </swiper-slide>
                        
                        </swiper> -->
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
                    <swiper-slide v-for="item in hostList" v-bind:key="item.url" @click.native="goToHostArticle(item.id)">
                        <div class="img-wrap" >
                            <img :src="'http://www.hndt.com' + item.cover" alt="" class="img">
                            <p class="name">{{item.name}}</p>
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
    props:{
        newsList:{
            type:Array,
            default:() => {
                return []
            }
        },
        hostList: {
            type: Array,
            default: () => {
                return []
            }
        },
        columnList:{
            type: Array,
            default: () => {
                return []
            }
        },
        podcastList:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
    computed :{
        twoList() {
            return this.newsList.filter((item,index) => {
                return index < 2
            })
        },
        twelveList() {
            return this.newsList.filter((item,index) => {
                return index >=2 && index < 14
            })
        }
    },
    methods:{
        goToArticle(article_id, channel_id) {
            this.$router.push({
                path:'/inner',
                query:{
                    channel_id,
                    article_id
                }
            })
        },
        goToHostArticle(fragment_id,channel_id) {
            this.$router.push({
                path:'/hostinner',
                query:{
                    channel_id:this.$route.query.channel_id,
                    fragment_id
                }
            })
        },
        goToList(column_id, column_name) {
            this.$router.push({
                path: '/list',
                query: {
                    column_id,
                    column_name,
                    channel_id:this.$route.query.channel_id
                }
            })
        },
        goToPodcastList(podcast_id, podcast_name) {
            this.$router.push({
                path:'/podcast',
                query:{
                    channel_id:this.$route.query.channel_id,
                    podcast_id,
                    podcast_name
                }
            })
        }
    },
    data () {
        return {
            columnSwiper: {
                direction: 'vertical',
                // autoplay: 4000,
                slidesPerView: 1,
                height: 140,
                // loop: true,
                setWrapperSize: true,
                prevButton: '.column-wrap .swiper-button-prev',
                nextButton: '.column-wrap .swiper-button-next',
                observeParents: true 
            },
            podcastSwiper: {
                // loop: true,
                // autoplay: 4000,
                setWrapperSize: true,
                prevButton: '.podcast-wrap .swiper-button-prev',
                nextButton: '.podcast-wrap .swiper-button-next',
                observeParents: true                
            },
            radioHostSwiper: {
                // loop:true,
                autoplay: 3500,
                setWrapperSize: true,
                prevButton: '.radio-host .swiper-button-prev',
                nextButton: '.radio-host .swiper-button-next',
                observeParents: true,
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween:43,
                autoplayDisableOnInteraction:false
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
