export default {
  state: {
    menu: [],
    currentMenu: [],
    tabLists: [],
    isCollapse: false
  },
  mutations: {
    selectMenu(state, val) {
      state.currentMenu = val
      let result = state.tabLists.findIndex(item => item.name === val.name)
      console.log(result)
      result === -1 ? state.tabLists.push(val) : ''
    },
    closeTab(state, val) {
      let result = state.tabLists.findIndex(item => item.name === val.name)
      console.log(result)
      state.tabLists.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
