<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- router-view 显示的是当前路由地址所对应的内通容 -->
    <!-- <router-link to='/list'>list</router-link> -->
  </div>
</template> 

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
