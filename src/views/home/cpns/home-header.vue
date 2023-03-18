<template>
  <div class="home-header">
    <div class="title">vue3Trip</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
  .title {
    text-align: center;
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
  }
}
</style>
