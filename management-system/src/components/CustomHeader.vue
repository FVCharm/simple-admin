<template>
  <header>
    <div class="left-header">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="small"
        @click="collapsMenu"
      ></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: current.path }">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-header">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require('../assets/images/user.jpg')
    }
  },
  methods: {
    collapsMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.left-header {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-header {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
