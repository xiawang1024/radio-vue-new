<template>
  <div class="news-list">
      <div class="hd">
          <span class="back-icon"></span>
          <span class="title">新闻来了</span>
      </div>
      <ul class="list-wrap">
          <li class="list" v-for="n in 15">
              <span class="title">1041新闻眼】郑州一男子驾照吊销期间开车，被“天眼”发现！结果1041新闻眼】郑州一男子驾照吊销期间开车，被“天眼”发现！结果“天眼”发现！结果</span>
              <span class="time">2017-10-13</span>
          </li>
      </ul>
      <page></page>
  </div>
</template>


<script>
import Page from 'components/page/page'
export default {
  name:'news-list',
  components:{
      Page
  }
}
</script>

<style lang="stylus" scoped>
.news-list
    min-height 1920px
    .hd
        position relative
        width 100%
        height 160px
        line-height 160px
        text-align center
        .back-icon
            position absolute
            left 0
            vertical-align middle
            display inline-block
            width 68px
            height 160px
            background url('./back-icon.png') left center no-repeat
            background-size 34px 60px
        .title
            vertical-align middle
            font-size 50px
            color #0081dc
    .list-wrap
        width 100%
        // margin-top 30px
        font-size 24px
        color #888
        .list
            display flex
            width 100%
            line-height 1.8
            padding 30px
            border-bottom 1px solid rgb(0,0,0)
            box-sizing border-box
            justify-content space-between
            .title  
                max-width 700px
                text-overflow: ellipsis
                overflow: hidden
                white-space: nowrap
</style>
