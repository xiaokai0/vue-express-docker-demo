<template>
  <div v-if="userData?.length > 0">
    <div v-for="item of userData" :key="item.id">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
    </div>
  </div>
  <div v-else>暂无数据</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { get } from "./utils/request";

const userData = ref([]);

const fetchUsers = async () => {
  get("/api/hello").then((data) => {
    userData.value = data.data.data;
  });
};

onMounted(() => {
  fetchUsers();
});
</script>


