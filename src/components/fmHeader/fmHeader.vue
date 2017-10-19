<template>
  <div class="fmheader">
      <div class="back-logo">
          <span class="back" @click="goBackHome"></span>
          <img v-if="videoObj.icon_url" :src="videoObj.icon_url" alt="" class="logo">
          <h2 v-else-if="column_name" class="title">{{column_name}}</h2>
          <img v-else src="./logo-icon.png" alt="" class="logo">
      </div>
      <div class="video-wrap" :class="isInner ? 'isInner' : ''" v-if="channel_id > 0"> 
          <video id="video" class="video" :src="videoObj.video_url" controls autoplay preload="load" loop></video>
      </div>
  </div>
</template>

<script>

export default {
  name:'fmheader',
  props:{
      isInner:{
          type:Boolean,
          default:false
      },
      videoObj:{
          type:Object,
          default:() => {
              return {}
          }
      }
  },
  data() {
      return {
          channel_id:-1,
          column_name:''
      }
  },
  created() {
      this.channel_id = this.$route.query.channel_id
      this.column_name = this.$route.query.column_name
  },
  methods:{
      goBackHome() {
          if(this.isInner && this.$route.query.channel_id && !this.$route.query.column_id) {
              this.$router.push({
                  path: '/fmpage',
                  query:{
                      channel_id: this.$route.query.channel_id
                  }
              })
          }else if(this.$route.query.column_id) {
              this.$router.push({
                  path: '/list',
                  query:{
                      column_id:this.$route.query.column_id,
                      column_name:this.$route.query.column_name,
                      channel_id:this.$route.query.channel_id
                  }
              })
          }else{
              this.$router.push({
                  path: '/home'
              })
          }
      }
  }

}
</script>

<style lang="stylus" scoped>
.fmheader
    width 100%
    .back-logo
        position relative
        width 100%
        height 252px
        line-height 252px
        text-align center
        .back
            position absolute
            left 0
            vertical-align middle
            display inline-block
            width 68px
            height 252px
            background url('./back-icon.png') left center no-repeat
            background-size 34px 60px 
        .logo   
            vertical-align middle
            display inline-block
            height 120px
        .title
            font-size 60px
            color #0081dc
    .video-wrap
        width 100%
        height 550px
        background #000000
        .video
            display block
            margin 0 auto
            max-width 100%
            height 100%
        &.isInner
            width 650px
            height 370px
            margin 0 auto
            overflow hidden
                
</style>

