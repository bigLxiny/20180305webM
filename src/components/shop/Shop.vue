<template>
  <div>
      <!-- 公共头部 -->
      <app-header></app-header>
      <!-- 变化主体 -->
      <router-view></router-view>
      <!-- 公共尾部 -->
      <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./subcom/Header"
import appFooter from "./subcom/Footer"
export default {
    components:{
        appHeader,
        appFooter
    }
}
</script>

<style>

</style>
