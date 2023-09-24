<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { useMouse } from '@vueuse/core'
import useCounterStore from '@/store/modules/count';
import { storeToRefs } from 'pinia'
const mouse = useMouse()
const counterStore = useCounterStore();
const { count }  =storeToRefs(counterStore)

const add = () => {
  counterStore.increment()
}

</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="add">add</button>
  <p>测试国际化:{{$t('home.title')}}</p>
  <p>VueUse 库导入,这里只是随便使用一个示例: X:{{ mouse.x }} Y:{{ mouse.y }}</p>
  <a-button type="primary">Primary Button</a-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
