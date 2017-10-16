<template>
  <div class="fmheader">
      <div class="back-logo">
          <span class="back" @click="goBackHome"></span>
          <img :src="videoObj.icon_url" alt="" class="logo">
      </div>
      <div class="video-wrap" :class="isInner ? 'isInner' : ''">
          <video class="video" :src="videoObj.video_url" controls autoplay preload="load"></video>
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
          channel_id:0
      }
  },
  created() {
      this.channel_id = this.$route.query.channel_id
  },
  methods:{
      goBackHome() {
          if(this.isInner) {
              this.$router.push({
                  path: '/fmpage',
                  query:{
                      channel_id: this.$route.query.channel_id
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

