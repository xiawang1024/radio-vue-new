<template>
    <div class="fmpage">
        <fm-header></fm-header>
        <fm-body></fm-body>
    </div>
</template>

<script>
import FmHeader from 'components/fmHeader/fmHeader'
import FmBody from 'components/fmBody/fmBody'

export default {
  name:'fmpage',
  components:{
      FmHeader,
      FmBody
  },
  data () {
      return {

      }
  }
}
</script>

<style lang="stylus" scoped>
.fmpage
    height 1920px
    box-sizing border-box
    overflow hidden
</style>
