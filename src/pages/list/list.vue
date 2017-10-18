<template>
  <div class="news-list">
      <div class="hd">
          <span class="back-icon" @click="goBack"></span>
          <span class="title">{{column_name}}</span>
      </div>
      <ul class="list-wrap">
          <li class="list" v-for="item in columnList" v-bind:key="item.id" @click="goToArticle(item.id)">
              <span class="title">{{item.title}}</span>
              <span class="time">{{item.createtime}}</span>
          </li>
      </ul>
      <!-- <page></page> -->
      <player-footer></player-footer>
  </div>
</template>


<script>
import Page from 'components/page/page'
import PlayerFooter from 'components/playerFooter/playerFooter'
import { getColumnList } from 'api/index'
export default {
  name:'news-list',
  components:{
      Page,
      PlayerFooter
  },
  data() {
      return {
          column_name:'',
          columnList:[]
      }
  },
  created() {
    this.column_name = this.$route.query.column_name
    getColumnList(this.$route.query.column_id).then((res) => {
        this.columnList = res.data.list
        this.$nextTick(() => {

        })
    })
  },
  methods:{
      goToArticle(article_id) {
          this.$router.push({
              path: '/inner',
              query: {
                  article_id,
                  column_id:this.$route.query.column_id,
                  column_name:this.$route.query.column_name
              }
          })
      },
      goBack() {
          if(this.$route.query.channel_id){
              this.$router.push({
                  path:'/fmpage',
                  query:{
                      channel_id: this.$route.query.channel_id
                  }
              })
          }else{
              this.$router.push({
                  path: '/home',
                  query: {
                      channel_id: this.$route.query.channel_id
                  }
              })
          }
      }
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
