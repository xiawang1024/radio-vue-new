<template>
    <div class="player-footer">
        <div class="qrcode"></div>
        <div class="logo"></div>
    </div> 
</template>

<script>
export default {
  name:'player-footer'
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.player-footer
    width 100%
    height 460px
    background $color-background
    .qrcode
        margin-top 60px
        width 100%
        height 170px
        background url('./qrcode.png') center center no-repeat
        background-size 170px auto
    .logo
        margin-top 50px
        width 100%
        height 100px
        background url('./logo.png') center center no-repeat
        background-size auto 100px
</style>
