<template>
  <div class="home">
      <header-wx></header-wx>
      <channel></channel>
  </div>
</template>

<script>
import HeaderWx from 'components/header/header'
import Channel from 'components/channel/channel'
export default {
    name: 'home',
    components:{
        HeaderWx,
        Channel
    }
}
</script>

<style lang="stylus" scoped>

</style>
