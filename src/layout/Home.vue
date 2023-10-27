<script setup lang="ts">
import NuistTitleSearch from '@/components/NuistTitleSearch.vue'
import BirdButton from '@/components/BirdButton.vue'

// 引入小仓库
import useLessonsStore from '@/store/modules/Lessons'

const LessonsStore = useLessonsStore()
LessonsStore.getAllLessons()
</script>

<template>
  <div>
    <NuistTitleSearch class="title-search" />
    <BirdButton class="bird-btn" />
  </div>
</template>

<style scoped lang="scss">
.title-search {
  margin-top: 40px;
}

.bird-btn {
  margin-left: 50%;
  margin-top: 40px;
  // position: absolute;
  // left: 50%;
  // top: 65%;
  transform: translate(-15%, 10%);
}
</style>
@/store/modules/Lessons
