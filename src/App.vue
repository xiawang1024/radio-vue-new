<template>
  <div id="app">
    <audio src="http://stream.hndt.com:1935/live/xinwen/playlist.m3u8" id="audio" autoplay style="display:none"></audio>
    <keep-alive include="player">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
@import 'common/stylus/variable.styl'
#app
	width 1080px
	margin 0 auto
	padding 0 50px
	box-sizing border-box
	background $color-background
</style>
