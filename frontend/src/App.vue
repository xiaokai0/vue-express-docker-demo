<template>
  <div>
    <h2>hello</h2>
    <div v-for="item of userData" :key="item.id">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { get } from "./utils/request";

const userData = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
  { id: 4, name: "赵六" },
  { id: 5, name: "赵六" },
]);

const fetchUsers = async () => {
  get("/api/hello").then((data) => {
    userData.value = data.data.data;
  });
};

onMounted(() => {
  fetchUsers();
});
</script>


