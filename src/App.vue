<template>
  <div id="app">
    <audio src="http://192.168.9.16:5000/test1.mp3" id="audio" autoplay style="display:none"></audio>
    <keep-alive>
      <router-view></router-view>
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
