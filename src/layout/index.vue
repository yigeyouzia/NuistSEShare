<script setup lang="ts">
// import NuistTitle from "@/components/NuistTitle.vue";
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Main from './Main.vue'

// 使用仓库

// 路由器对象
const $router = useRouter()
// 路由对象
const $route = useRoute()

// 当前路由名字
const name = ref($route.name)

watch(
  () => $route.name,
  () => {
    name.value = $route.name
  },
  { immediate: true, deep: true },
)

function goRoute(num: number) {
  // 路由跳转
  if (num === 1)
    $router.push({ path: '/home' })
  else if (num === 2)
    $router.push({ path: '/file' })
  else
    $router.push({ path: '/soft' })
}
</script>

<template>
  <div class="layout_container">
    <div class="layout_tabber">
      <div class="tabber_item" :class="{ route: name === 'home' ? true : false }" @click="goRoute(1)">
        主页
      </div>
      <div class="tabber_item" :class="{ route: name === 'file' ? true : false }" @click="goRoute(2)">
        文件下载
      </div>
      <div class="tabber_item" :class="{ route: name === 'soft' ? true : false }" @click="goRoute(3)">
        软件下载
      </div>
    </div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: $base-index-backgroud-color;

  .layout_tabber {
    display: flex;
    height: 50px;
    // background-color: #fff;
    text-align: center;
    align-items: center;
    color: white;
    box-shadow: 0 4px 7px -5px;
    background-color: $base-tabber-backgroud-color;

    .tabber_item {
      font-style: italic;
      font-weight: bold;
      margin-left: 40px;
      padding: 10px;
    }

    .tabber_item:hover {
      border-bottom: 3px solid rgb(206, 83, 83);
    }

    .route {
      border-bottom: 3px solid rgb(206, 83, 83);
    }
  }

  // .layout_main {
  // position: absolute;
  // left: 50%;
  // top: 35%;
  // transform: translate(-50%, -50%);
  // }
}
</style>
