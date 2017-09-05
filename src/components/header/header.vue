<template>
    <header class="header">
        <span class="logo-wrap"></span>
        <span class="listen-radio-wrap" @click="goToPlay"></span>
    </header>
</template>

<script>
export default {
  name:'header',
  methods:{
      goToPlay() {
          this.$router.push({
              path:'/player'
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.header
    display flex
    align-items center
    justify-content space-between
    width 100%
    height 240px
    span 
        display inline-block
        &.logo-wrap
            width 330px
            height 100px
            background url(./logo-icon.png) left center no-repeat
            background-size 330px 100px
        &.listen-radio-wrap
            width 317px
            height 189px
            background url('./listen-radio-icon.png') right center no-repeat
            background-size 317px 189px
</style>
