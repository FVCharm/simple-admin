<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><custom-aside></custom-aside></el-aside>
    <el-container>
      <el-header><custom-header></custom-header></el-header>
      <custom-tab></custom-tab>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CustomHeader from '../components/CustomHeader'
import CustomAside from '../components/CustomAside'
import CustomTab from '../components/CustomTab'
export default {
  components: {
    CustomHeader,
    CustomAside,
    CustomTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: darkgray;
}
</style>
