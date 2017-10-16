<template>
  <div class="fmheader">
      <div class="back-logo">
          <span class="back"></span>
          <img src="http://www.hndt.com/fm/999/res/bmdxcvAc.png?1504578961695" alt="" class="logo">
      </div>
      <div class="video-wrap" :class="isInner ? 'isInner' : ''">
          <video class="video" src="http://www.hndt.com/fm/999/201708/07/1897791/res/kXhacpsr.mp4" controls autoplay></video>
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

