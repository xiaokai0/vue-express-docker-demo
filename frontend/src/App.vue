<template>
  <div>
    <div v-for="item of userData" :key="item.id">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const userData = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
  { id: 4, name: "赵六" },
  { id: 5, name: "赵六" },
]);

onMounted(() => {
  // fetch("http://localhost:3000/api/hello") // 确保这与你的 Node.js 服务端口匹配
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.data);
  //     userData.value = data.data;
  //   });
});
</script>


