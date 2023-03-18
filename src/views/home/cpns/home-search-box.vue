<template>
  <div class="home-search">
    <div class="location">
      <div class="city" @click="cityClick">城市</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

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
}
</style>
