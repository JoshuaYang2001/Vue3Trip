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
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title">内容 2</van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
const searchValue = ref('')
const router = useRouter()

// 取消
const cancelClick = () => {
  router.back() // 回退到上一级路由
}

// tab栏切换
const tabActive = ref()

// const allCity = ref()
const cityStore = useCityStore()
cityStore.fetchAllcitiesData()
const { allCities } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
}
</style>
