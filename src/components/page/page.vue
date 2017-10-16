<template>
  <div class="page">
      <span class="total">共 {{total}} 页</span>
      <span class="current">当前第 {{current}} 页</span>
      <span class="home" @click="homePage">首页</span>
      <span class="prev" @click="prevPage">上一页</span>
      <span class="next" @click="nextPage">下一页</span>
      <span class="end" @click="endPage">尾页</span>
  </div>
</template>


<script>
export default {
  name:'page',
  props:{
      total:{
          type:Number,
          default:1
      },
      current:{
          type:Number,
          default:1
      }
  },
  methods:{
      homePage() {
          this.$emit('homePage')
      },
      prevPage() {
          this.$emit('prevPage')
      },
      nextPage() {
          this.$emit('nextPage')
      },
      endPage() {
          this.$emit('endPage')
      }
  }
}
</script>


<style lang="stylus" scoped>
.page
    width 500px
    margin 80px auto
    display flex
    justify-content space-between
    align-items center
    color #999
    font-size 16px
    .home,.prev,.next,.end
        padding 8px 16px
        border 1px solid #999
        &:active
            background #999
            color #000
</style>
