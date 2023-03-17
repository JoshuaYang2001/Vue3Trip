<template>
  <div class="home">
    <h2>
      home
      <van-button type="primary" @click="rValue++">主要按钮</van-button>
    </h2>
    <van-rate v-model="rValue"></van-rate>
    <TabBar />
    <!-- <van-tab-bar /> -->
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
// import vanTabBar from "@/components/tab-bar/van-tab-bar .vue";
import { ref } from "vue";
const rValue = ref(0);
</script>

<style lang="less" scoped>
.home {
}
</style>
