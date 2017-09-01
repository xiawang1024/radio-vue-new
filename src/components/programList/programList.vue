<template>
  <transition name="fade">
      <div class="program-list">
          <ul class="list-wrap">
              <li class="list" v-for="(item, index) in programList" :class="playIndex == index ? '' : ''">
                <span class="time">
                    {{format(item.beginTime)}} - {{format(item.endTime)}}
                </span>
                <span class="title">
                    {{item.title}}
                </span>
                <span class="isPlayBack">
                    <span 
                        @click="playBack(item, index)"
                        v-show="item.playUrl && item.playUrl.length > 0" 
                        class="playback">
                        回听
                    </span>
                </span>
              </li>
          </ul>
          <span class="close-icon">X</span>
      </div>
  </transition>
</template>

<script>
import { clickItem } from 'api/index'
import { pad } from 'common/js/util.js'

export default {
  name:'program-list',
  data() {
      return {
          programList:[],
          playIndex:0
      }
  },
  props:{
      cid:{
          type:Number,
          default:1
      },
      time:{
          type:String,
          default:''
      }
  },
  created() {

  },
  mounted() {
      this.getProgram(this.cid, this._timeToStamp(this._getToDay()) )
  },
  methods:{
      getProgram(cid, time){
          clickItem(cid, time).then((res) => {
              console.log('------------------------------------');
              console.log(res);
              console.log('------------------------------------');
              this.programList = res.data.programs
          })
      },
      playBack(program, index) {
          this.$emit('playBack',program)
      },
      //时间转时间戳
      _timeToStamp(date) {
          // var date = '2015-03-05 00:00:00.0';
          date = date.substring(0, 19);
          date = date.replace(/-/g, '/');
          var timestamp = new Date(date).getTime();
          return timestamp / 1000;
      },
      _getToDay() {
          let year = (new Date()).getFullYear();
          let month = pad(new Date().getMonth() + 1);
          let day = pad(new Date().getDate())
          let today = `${year}-${month}-${day} 00:00:00.0`
          return today
      },
      format(interval) {
          let val = parseInt(interval) * 1000;
          let time = new Date(val);
          const hour = pad(time.getHours());
          const min = pad(time.getMinutes());
          return `${hour}:${min}`
      },
  }
}
</script>

<style lang="stylus" scoped>
.program-list
    position absolute
    z-index 102400
    width 980px   
    left 0
    top 250px
    .close-icon
        position absolute
        top -60px
        right 0
        display inline-block
        width 60px
        height 60px
        line-height 60px
        text-align center
        background #454647
        font-size 40px
        color #999
    .list-wrap
        width 100%
        height 1000px
        overflow auto
        box-sizing border-box
        background #272729
        color #7c8997
        .list
            width 100%
            height 100px
            box-sizing border-box
            display flex
            align-items center
            border-bottom 1px solid #666
            &.isPlay
                background #0081dc
                color #ffffff
            span
                flex 1
                text-align center
                font-size 32px
                &.isPlayBack
                    .playback
                        display inline-block
                        width 100px
                        height 60px
                        line-height 60px
                        background #0081dc
                        color #ffffff
                        border-radius 6px
                        font-size 30px
</style>
