<template>
  <div class="tabs">
    <el-tag
      v-for="item in tabs"
      :key="item.name"
      closable
      :label="item.label"
      @close="removeTag(item)"
      @click="changeMenu(item)"
      :effect="$route.name === item.name ? 'light' : 'plain'"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tabs: state => state.tab.tabLists
    })
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    removeTag(targetName) {
      this.close(targetName)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  .el-tag {
    cursor: pointer;
  }
}
</style>
