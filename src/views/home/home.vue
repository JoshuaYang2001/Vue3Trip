<template>
  <div class="home">
    <home-header />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
  </div>
</template>

<script setup>
import homeHeader from './cpns/home-header.vue'
import homeSearchBox from './cpns/home-search-box.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
