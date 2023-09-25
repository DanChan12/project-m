<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('lang', lang); // 重要！下面遇到问题里解释
};
</script>

<template>
  <div class="header_container">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style lang="scss" scoped>
.header_container {
  background: $bgColor;
  height: 1.6rem;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  .left {
    width: 4rem;
  }
  .right {
    width: 4rem;
  }
}
</style>
