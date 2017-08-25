<template>
    <div class="channel">
        <div class="row row-1 clearfix">
            <div class="item item-01">                
                <img src="./logo/01.png" alt=""class="logo">        
                <h3 class="name">新闻广播</h3>
            </div>
            <div class="item item-02-03-04">
                <div class="item item-02-03">
                    <div class="item item-02">
                        <img src="./logo/02.png" alt=""class="logo">        
                        <h3 class="name">新闻广播</h3>
                    </div>
                    <div class="item item-03">
                        <img src="./logo/03.png" alt=""class="logo">        
                        <h3 class="name">新闻广播</h3>
                    </div>
                </div>
                <div class="item item-04">
                    <img src="./logo/04.png" alt=""class="logo">        
                    <h3 class="name">新闻广播</h3>
                </div>
            </div>
        </div>
        <div class="row row-2">
            <div class="item item-05">
                <img src="./logo/05.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
            <div class="item item-06">
                <img src="./logo/06.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
            <div class="item item-07">
                <img src="./logo/07.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
            <div class="item item-08">
                <img src="./logo/08.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
        </div>
        <div class="row row-3">
            <div class="item item-09">
                <img src="./logo/09.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
            <div class="item item-10">
                <img src="./logo/10.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
            <div class="item item-11">
                <img src="./logo/11.png" alt="" class="logo">
                <h3 class="name">音乐广播</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'channel'
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
