<template>
  <div class="home">
      <header-wx></header-wx>
      <channel></channel>
      <news-list></news-list>
  </div>
</template>

<script>
import HeaderWx from 'components/header/header'
import Channel from 'components/channel/channel'
import NewsList from 'components/newsList/newsList'
export default {
    name: 'home',
    components:{
        HeaderWx,
        Channel,
        NewsList
    }
}
</script>

<style lang="stylus" scoped>
.home
    height 1920px
    box-sizing border-box
    overflow hidden
    padding-bottom 40px
</style>
