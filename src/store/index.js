import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './Menu'
import UserStore from './UserStore'

Vue.use(Vuex)
//仓库
export default new Vuex.Store({
  modules:{
    Menu ,  //菜单仓库
    UserStore //用户仓库
  }
})
