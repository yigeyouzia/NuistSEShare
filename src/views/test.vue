<script setup lang="ts">
import { ref } from 'vue'
import Pagination from '@/components/Pagination/index.vue'
import request from '@/util/request'

const loading = ref(false)
const LessonListInfo = ref({})

// 1.1 加载数据
async function loadLessons() {
  loading.value = false
  const res = await request.post('/lessons/get')
  loading.value = true
  LessonListInfo.value = res.data
  console.log(LessonListInfo.value)
}
loadLessons()
</script>

<template>
  <!-- 数据 -->
  <h1>file</h1>
  <ElPagination small layout="prev, pager, next" :total="50" />
  <ElPagination
    small
    background
    layout="prev, pager, next"
    :total="50"
    class="mt-4"
  />
  <Pagination
    :loading="loading"
    :data-source="LessonListInfo"
    no-data-msg="暂时没有帖子捏☆*: .｡. o(≧▽≦)o .｡.:*☆👀👀"
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
