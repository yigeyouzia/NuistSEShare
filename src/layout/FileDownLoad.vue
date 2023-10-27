<script setup lang="ts">
import { ref } from 'vue'
import Pagination from '@/components/Pagination/index.vue'
import { reqAllLessons } from '@/api/LessonsApi'

const loading = ref(false)
const LessonListInfo = ref({})

// 1.1 加载数据
async function loadLessons() {
  loading.value = false
  const res = await reqAllLessons()
  loading.value = true
  LessonListInfo.value = res.data
}
loadLessons()
</script>

<template>
  <!-- 数据 -->
  <h1>file</h1>
  <p style="color: white;">
    {{ LessonListInfo }}
  </p>
  <Pagination
    :loading="loading"
    :data-source="LessonListInfo"
    no-data-msg="暂时没有数据捏☆*: .｡. o(≧▽≦)o .｡.:*☆👀👀"
    @loadData="loadLessons"
  >
    <template #default="{ data }">
      <div>{{ data }}</div>
    </template>
  </Pagination>
</template>

<style scoped lang="scss">
div {
  color: white;
}
</style>
