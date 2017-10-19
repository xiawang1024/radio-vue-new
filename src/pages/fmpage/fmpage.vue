<template>
    <div class="fmpage">
        <fm-header :videoObj="videoObj"></fm-header>
        <fm-body :newsList="newsList" :hostList="hostList" :columnList="columnList" :podcastList="podcastList"></fm-body>
    </div>
</template>

<script>
import FmHeader from 'components/fmHeader/fmHeader'
import FmBody from 'components/fmBody/fmBody'
import { getChannelVideo, getChannelNews, getChannelHost, getChannelColumn, getPodcast } from 'api/index'
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
          hostList:[],
          podcastList:[]
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
          this.hostList = res.data.list.filter((item) => {
              return Object.keys(item).length !== 0;
          })
      })
      getPodcast(this.channel_id).then((res) => {
        
        this.podcastList = res.data.list.filter((item) => {
            return Object.keys(item).length !== 0;
        })
        if(this.podcastList.length == 0 ){
            this.podcastList.push({
                icon_url:'no-open',
                name:'暂未开通播客'
            })
        }
          console.log('------------------------------------');
          console.log(this.podcastList);
          console.log('------------------------------------');      
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
