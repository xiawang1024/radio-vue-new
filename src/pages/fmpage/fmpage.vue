<template>
    <div class="fmpage">
        <fm-header :videoObj="videoObj"></fm-header>
        <fm-body :newsList="newsList" :hostList="hostList" :columnList="columnList"></fm-body>
    </div>
</template>

<script>
import FmHeader from 'components/fmHeader/fmHeader'
import FmBody from 'components/fmBody/fmBody'
import { getChannelVideo, getChannelNews, getChannelHost, getChannelColumn } from 'api/index'
import axios from 'axios'

export default {
  name:'fmpage',
  components:{
      FmHeader,
      FmBody
  },
  data () {
      return {
          channel_id:901,
          videoObj:{},
          newsList:[],
          columnList:[],
          hostList:[]
      }
  },
  created() {
      this.channel_id = this.$route.query.channel_id
      getChannelVideo(this.channel_id).then((res) => {
          this.videoObj = res.data
      })
      getChannelNews(this.channel_id).then((res)=>{
          this.newsList = res.data.list
      })
      getChannelColumn(this.channel_id).then((res) => {
          this.columnList = res.data.list
      })
      getChannelHost(this.channel_id).then((res) => {
          this.hostList = res.data.list
      })
  }
}
</script>

<style lang="stylus" scoped>
.fmpage
    height 1920px
    box-sizing border-box
    overflow hidden
</style>
