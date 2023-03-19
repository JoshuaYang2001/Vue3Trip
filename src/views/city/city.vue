<template>
  <div class="city hide-tabbar">
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      shape="round"
      show-action
      @cancel="cancelClick"
    />
    <!-- tab -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab :title="allCity?.cityGroup?.title">内容 1</van-tab>
      <van-tab :title="allCity?.cityGroupOverSea?.title">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCityAll } from '@/services'
const searchValue = ref('')
const router = useRouter()

// 取消
const cancelClick = () => {
  router.back() // 回退到上一级路由
}

// tab栏切换
const tabActive = ref()

const allCity = ref()
getCityAll().then((res) => {
  allCity.value = res.data
})
// 发送网络请求
getCityAll().then()
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
}
</style>
