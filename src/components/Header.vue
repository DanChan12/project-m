<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLang = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)// 重要！下面遇到问题里解释
}

</script>

<template>
  <div class="header_container">
  <router-link to="/">首页</router-link>
  <router-link to="/">产品</router-link>
  <router-link to="/cooperate">合作共赢</router-link>
  <div class="menu">
    	<div class="menu-item" @click="changeLang('en')">English</div>
    	<div class="menu-item" @click="changeLang('zh')">中文</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header_container {
  background: $bgColor;
}
</style>
