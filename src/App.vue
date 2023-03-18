<template>
  <div id="app">
    <router-view />
    <!-- <tab-bar v-if="!route.meta.hideTabBar" /> -->
    <tab-bar />
  </div>
</template>

<script setup>
// import { useRoute } from 'vue-router'
import tabBar from './components/tab-bar/tab-bar.vue'
// const route = useRoute()
</script>

<style scoped>
.home {
}
</style>
