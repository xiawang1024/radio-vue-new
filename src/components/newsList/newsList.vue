<template>
    <div class="news clearfix">
        <div class="img-list">
            <div class="item" v-for="item in dataList">
                <a v-if="item && item.link" :href="item.link"  @click.stop.prevent="openWindow(item.link)">
                    <img :src="item.icon" alt="" class="img">
                </a>
            </div>
        </div>
        <div class="text-list">
            <div class="top">
                <h2 class="title">
                    <a v-if="top[0] && top[0].link" :href="top[0].link" @click.stop.prevent="openWindow(top[0].link)">
                        {{top[0].title}}
                    </a>
                </h2>
                <p class="desc">
                    <a v-if="top[0] && top[0].link" :href="top[0].link" @click.stop.prevent="openWindow(top[0].link)">{{top[0].desc}}</a>
                </p>
            </div>
            <div class="list-wrap-row">
                <ul class="list-wrap clearfix">
                    <li class="list" v-for="item in listOne" >
                        <span class="dot"></span>
                        <span class="link">
                            <a v-if="item && item.link" :href="item.link" @click.stop.prevent="openWindow(item.link)">{{item.title}}</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="list-wrap-vertical clearfix">
                <ul class="list-wrap">
                    <li class="list" v-for="item in listTwo" >
                        <span class="dot"></span>
                        <span class="link">
                            <a v-if="item && item.link" :href="item.link" @click.stop.prevent="openWindow(item.link)">{{item.title}}</a>
                        </span>
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
import { apiOne, apiTwo } from 'api/index'
export default {
    name:'news',
    data() {
        return {
            dataList:[],
            top:[],
            listOne:[],
            listTwo:[]
        }
    },
    created() {
        apiOne().then((res) => {
            this.dataList = res.data.slice(0,3)
        })

        apiTwo().then((res) => {
            let list = res.data.list            
            this.top = list.slice(0,1);
            this.listOne = list.slice(1,5);
            this.listTwo = list.slice(5,9);
        })
    },
    methods:{
        openWindow(href) {
            layer.open({
                type: 2,
                title: '河南广播网',
                area: ['100%', '100%'],
                anim: 5,
                content: [href]
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.news
    width 100%
    margin-top 10px
    height 630px
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
            .img
                display block
                width 240px
                height 160px
    .text-list
        float right 
        width 605px
        .top
            height 182px
            margin-top 10px
            border-bottom 1px solid #000000
            .title
                text-align center
                font-size 26px
                color $color-light-blue
                width 600px
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                a
                    color $color-light-blue
            .desc
                margin-top 25px
                font-size 17px
                color #666
                line-height 1.8
                a
                    color #888888
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
                    box-sizing border-box
                    padding-right 15px
                    color #888888
                    .dot
                        vertical-align middle
                        display inline-block
                        width 3px
                        height 3px
                        background #474747
                    .link
                        margin-left 4px
                        color #888888
                        a
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
                    color #888888
                    .dot
                        vertical-align middle
                        display inline-block
                        width 3px
                        height 3px
                        background #474747
                    .link
                        margin-left 4px
                        color #888888
                        a
                            color #888888
            .qrcode 
                float right 
</style>

