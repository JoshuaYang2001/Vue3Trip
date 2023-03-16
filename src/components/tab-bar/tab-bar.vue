<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick('/home')"
      >
        <img :src="getAssetsURL(item.image)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
    <!-- <div class="tab-bar-item" to="/favor">
      <img src="@/assets/img/tabbar/tab_home.png" alt="" />
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item" to="/message">
      <img src="@/assets/img/tabbar/tab_home.png" alt="" />
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item" to="/order">
      <img src="@/assets/img/tabbar/tab_home.png" alt="" />
      <span class="text">消息</span>
    </div> -->
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getAssetsURL } from "@/utlis/load_assets_img";
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #e9e8e8;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    .text {
      font-size: 12px;
    }
    img {
      width: 32px;
    }
  }
}
</style>
