<template>
  <div id="app">
    <router-view />
    <tab-bar />
  </div>
</template>

<script setup>
import tabBar from "./components/tab-bar/tab-bar.vue";
</script>

<style scoped>
.home {
}
</style>
