<template>
    <transition name="fade">
    <div class="date-picker" v-show="isShowDatePicker">
        <div class="pick-hd">
            <div class="date-select year-wrap">
                <span class="prev-icon" @click="prevYear"></span>
                <span class="year">{{year}}</span>
                <span class="next-icon" @click="nextYear"></span>
            </div>
            <div class="date-select month-wrap">
                <span class="prev-icon" @click="prevMonth"></span>
                <span class="year">{{month + 1}}</span>
                <span class="next-icon" @click="nextMonth"></span>
            </div>
        </div>
        <div class="pick-data">
            <ul class="pick-week">
                <li class="list week" v-for="item in week">{{item}}</li>
            </ul>
            <ul class="pick-data-list">
                <li 
                    class="list day" 
                    :class="[ currentDayIndex == index ? isSelectedClass : '', item.currentMonth ? '' :noCurrentMonth ]"
                    v-for="(item, index) in dateList"
                    @click="selectDay(item, index)">
                    {{item.value}}
                </li>
            </ul>
        </div>
        <span class="close-icon" @click="closeDatePick">X</span>
    </div>
    </transition>
</template>

<script>
const week = [
    '日','一', '二', '三', '四', '五', '六'
]
export default {
  name:'date-picker',
  data() {
      return {
          week:week,
          year:new Date().getFullYear(),
          month:new Date().getMonth(),
          currentDayIndex:-1,
          isSelectedClass:'isSelected',
          noCurrentMonth:'no-current-month'
      }
  },
  props:{
      isShowDatePicker:{
          type:Boolean,
          default:false
      }
  },
  computed: {
      dateList() {
          //获取当月的天数
          let currentMonthLenth = new Date(this.year, this.month + 1, 0).getDate()
          //先将当月的日期塞入dataList
          let dateList = Array.from({length: currentMonthLenth}, (val, index) => {
              return {
                  currentMonth : true,
                  value: index +1
              }
          })
          //获取当月1号的星期是为了确定在1号前需要拆入多少天
          let startDay = new Date(this.year, this.month, 1).getDay()
          //确认上个月一共多少天
          let previousMonthLength = new Date(this.year, this.month, 0).getDate()
          //在1号前插入上个月日期
          for(let i=0, len = startDay;i<len; i++){
              dateList = [{previousMonth: true, value: previousMonthLength - i}].concat(dateList)
          }
          //补全剩余位置
          for(let i= dateList.length, item = 1;i < 42; i++, item++){
              dateList[dateList.length] = {
                  nextMonth: true,
                  value : item
              }
          }
          return dateList
      },
  },
  methods:{
      selectDay(item, index){
          if(item.currentMonth){//当月日期可选
              this.currentDayIndex = index;
              let date = {
                  year:this.year,
                  month:this.month + 1,
                  day:item.value
              }
              this.$emit('selectDate', date)              
          }else{//非当月日期直接返回
              return 
          }      
      },
      prevYear() {
          this.year--
      },
      nextYear() {
          let maxYear = new Date().getFullYear()
          if(this.year< maxYear){
              this.year++
          }else{
              return
          }          
      },
      prevMonth() {
          if(this.month >=1){
              this.month--;
          }else{
              this.month = 11
          }
      },
      nextMonth() {
          if(this.month >=11){
              this.month = 0;
          }else{              
              this.month++;
          }
      },
      closeDatePick() {
          this.$emit('closeDatePick', false)
      }
  }
}
</script>

<style lang="stylus" scoped>
.date-picker
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
    .pick-hd
        width 100%
        height 280px
        box-sizing border-box
        background #272729
        color #7c8997
        display flex
        align-items center
        justify-content space-between
        padding 0 90px
        .date-select
            span 
                vertical-align middle
            .prev-icon
                display inline-block
                width 47px
                height 47px
                background url('./prev-icon.png') center center no-repeat
                cursor pointer
            .next-icon
                display inline-block
                width 47px
                height 47px
                background url('./next-icon.png') center center no-repeat
                cursor pointer
            .year,.month
                display inline-block
                width 250px
                height 47px
                line-height 47px
                text-align center
                font-size 46px
            .month
                width 200px
    .pick-data
        width 100%
        box-sizing border-box
        .pick-week,.pick-data-list
            width 100%
            box-sizing border-box
            .list
                display inline-block
                width 140px
                height 140px
                line-height 140px
                text-align center
                box-sizing border-box
                border 1px solid #3a3a3a
                font-size 40px
                &.no-current-month
                    color #555555
                &.isSelected
                    background #0081dc
                    color #ffffff
                &:hover
                    background #0081dc
                    color #ffffff
                    cursor pointer
        .pick-week
            background #1f1f21
            color #aab7c5
        .pick-data-list
            background #323232
            color #7c8997

</style>
