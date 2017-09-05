<template>
    <div class="channel">
        <div class="row row-1 clearfix">
            <div class="item item-01" @click="openWindow">   
                <!-- <a href="http://www.hndt.com/fm/954/index.html">             -->
                    <img src="./logo/01.png" alt=""class="logo">        
                    <h3 class="name">新闻广播</h3>
                <!-- </a> -->
            </div>
            <div class="item item-02-03-04">
                <div class="item item-02-03">
                    <div class="item item-02">
                        <!-- <a href="">   -->
                            <img src="./logo/02.png" alt=""class="logo">        
                            <h3 class="name">经济广播</h3>
                        <!-- </a> -->
                    </div>
                    <div class="item item-03">
                        <!-- <a href="http://www.hndt.com/fm/1041/index.html"> -->
                            <img src="./logo/03.png" alt=""class="logo">        
                            <h3 class="name">交通广播</h3>
                        <!-- </a> -->
                    </div>
                </div>
                <div class="item item-04">
                    <!-- <a href="http://www.hndt.com/fm/976/index.html"> -->
                        <img src="./logo/04.png" alt=""class="logo">        
                        <h3 class="name">戏曲广播</h3>
                    <!-- </a> -->
                </div>
            </div>
        </div>
        <div class="row row-2">
            <div class="item item-05">
                <!-- <a href="http://www.hndt.com/fm/881/index.html"> -->
                    <img src="./logo/05.png" alt="" class="logo">
                    <h3 class="name">音乐广播</h3>
                <!-- </a> -->
            </div>
            <div class="item item-06">
                <!-- <a href="http://www.hndt.com/fm/1074/index.html"> -->
                    <img src="./logo/06.png" alt="" class="logo">
                    <h3 class="name">农村广播</h3>
                <!-- </a> -->
            </div>
            <div class="item item-07">
                <!-- <a href="http://www.hndt.com/fm/900/index.html"> -->
                    <img src="./logo/07.png" alt="" class="logo">
                    <h3 class="name">流行音乐</h3>
                <!-- </a> -->
            </div>
            <div class="item item-08">
                <!-- <a href="http://www.hndt.com/fm/999/index.html"> -->
                    <img src="./logo/08.png" alt="" class="logo">
                    <h3 class="name">私家车广播</h3>
                <!-- </a> -->
            </div>
        </div>
        <div class="row row-3">
            <div class="item item-09">
                <!-- <a href="http://www.hndt.com/fm/1066/index.html"> -->
                    <img src="./logo/09.png" alt="" class="logo">
                    <h3 class="name">驾车1066</h3>
                <!-- </a> -->
            </div>
            <div class="item item-10">
                <!-- <a href="http://www.hndt.com/fm/936/index.html"> -->
                    <img src="./logo/10.png" alt="" class="logo">
                    <h3 class="name">天籁之音</h3>
                <!-- </a> -->
            </div>
            <div class="item item-11">
                <!-- <a href="http://www.hndt.com/fm/1056/index.html"> -->
                    <img src="./logo/11.png" alt="" class="logo">
                    <h3 class="name">乐龄1056</h3>
                <!-- </a> -->
            </div>
        </div>
    </div>
</template>

<script>
const linkList = [
    { name: '新闻广播', href: 'http://www.hndt.com/fm/954/index.html' },
    { name: '交通广播', href: 'http://www.hndt.com/fm/1041/index.html' },
    { name: '戏曲广播', href: 'http://www.hndt.com/fm/976/index.html' },
    { name: '音乐广播', href: 'http://www.hndt.com/fm/881/index.html' },
    { name: '农村广播', href: 'http://www.hndt.com/fm/1074/index.html' },
    { name: '流行音乐', href: 'http://www.hndt.com/fm/900/index.html' },
    { name: '私家车广播', href: 'http://www.hndt.com/fm/999/index.html' },
    { name: '驾车1066', href: 'http://www.hndt.com/fm/1066/index.html' },
    { name: '天籁之音', href: 'http://www.hndt.com/fm/936/index.html' },
    { name: '乐龄1056', href: 'http://www.hndt.com/fm/1056/index.html' },
]
export default {
  name:'channel',
  methods:{
      openWindow() {
          layer.open({
              type:2,
              title:'河南广播网',
              area:['100%','100%'],
              anim:2,
              content:['http://www.hndt.com/fm/1056/index.html']
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.channel
    width 100%
    overflow hidden
    .name
        font-size $fontsize-large-xxxx
        color $color-white
    .row-1
        text-align center
        overflow hidden
        .item-01
            float left 
            width 486px
            height 486px
            background #593961
            .logo
                margin-top 125px
            .name
                margin-top 45px                
        .item-02-03-04
            float right 
            width 486px
            height 486px
            display flex
            flex-direction column
            justify-content space-between
            .item-02-03
                width 100%
                height 238px
                display flex
                justify-content space-between
                .item
                    width 238px
                    height 238px
                    .logo
                        margin-top 36px
                    .name
                        margin-top 30px
                    &.item-02
                        background #e14b39
                    &.item-03
                        background #e25695
                        .name
                            margin-top 35px
            .item-04
                width 100%
                height 238px
                background #0081dc
                .logo
                    margin-top 30px
                .name
                    margin-top 25px
    .row-2
        margin-top 10px
        height 238px
        display flex
        justify-content space-between
        .item
            width 238px
            text-align center
            &.item-05
                background #53a9f0
                .logo
                    margin-top 38px
                .name
                    margin-top 12px
            &.item-06
                background #0081dc
                .logo
                    margin-top 46px
                .name
                    margin-top 43px
            &.item-07
                background #039bae
                .logo
                    margin-top 60px
                .name
                    margin-top 36px
            &.item-08
                background #0081dc
                .logo
                    margin-top 30px
                .name
                    margin-top 12px
    .row-3
        margin-top 10px
        height 238px
        display flex
        display flex
        justify-content space-between
        .item
            width 238px
            text-align center
            &.item-09
                background #0081dc
                .logo
                    margin-top 57px
                .name
                    margin-top 35px
            &.item-10
                width 486px
                background #f5b900
                .logo
                    margin-top 50px
                .name
                    margin-top 35px
            &.item-11
                background #247d00
                .logo
                    margin-top 42px
                .name
                    margin-top 26px
</style>
