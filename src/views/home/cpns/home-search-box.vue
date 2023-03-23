<template>
  <div class="home-search">
    <div class="location">
      <div class="city" @click="cityClick">城市</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->

    <div
      class="section date-range bottom-gray-line"
      @click="showCalendarClick()"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startData }}</span>
        </div>
        <div class="stay">共 2 晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endData }}</span>
        </div>
      </div>
    </div>

    <van-calendar
      class="canlendar"
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      @confirm="canlendarFirm"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

//dayjs
import { formatMonthDay } from '@/utils/format_date'
import dayjs from 'dayjs'

// 点击获取位置信息
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取地址成功', res)
    },
    (err) => {
      console.log('获取地址失败', err)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  )
}

// 点击进入城市选择页面
const router = useRouter()
const cityClick = () => {
  console.log(1)
  router.push('/city')
}

// 日期范围
const nowData = dayjs()
const startData = ref(formatMonthDay(nowData))
const endData = ref(formatMonthDay(nowData.add(1, 'day')))
// 日历
let showCalendar = ref(false)
const showCalendarClick = () => {
  showCalendar.value = !showCalendar.value
}
const canlendarFirm = (value) => {
  const selectStartData = value[0]
  const selectEndData = value[1]
  startData.value = formatMonthDay(selectStartData)
  endData.value = formatMonthDay(selectEndData)
  showCalendar.value = !showCalendar.value
}
</script>

<style lang="less" scoped>
.home-search {
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      width: 80px;
      align-items: center;
      .text {
        position: relative;
        top: 1px;
        font-style: 12px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 4px;
      }
    }
  }
  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;

    .start {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
    }

    .end {
      min-width: 30%;
      padding-left: 20px;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
        color: #999;
      }

      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .date-range {
    height: 44px;
    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
