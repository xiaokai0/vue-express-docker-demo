<script setup>
import { onMounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const userData = ref([]);

onMounted(() => {
  fetch("http://localhost:3000/api/hello") // 确保这与你的 Node.js 服务端口匹配
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      userData.value = data.data;
    });
});
</script>

<template>
  <div v-for="item of userData" :key="item.id">
    {{ item.name }}
  </div>
  <h1>111</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
