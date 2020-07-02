<template>
  <div>
    <userInfo></userInfo>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      :default-active="this.$route.path"
    >
      <Menu :menuList="MenuList"></Menu>
    </el-menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu/menu.vue"; //获取菜单组件
import userInfo from "@/views/layout/aside/asideuserinfo.vue";
import { getMenu } from "@/services/services";
export default {
  data() {
    return {
    };
  },
  components: {
    Menu,
    userInfo
  },
  computed:{
       MenuList(){
      return this.$store.getters['Menu/getMenuData']
    }
  },
  props: {
    isCollapse: {
      default: false,
      type: Boolean
    }
  },
  created() {
    let userinfo = this.$store.getters["UserStore/getUser"]; //获取用户信息
    let params = { code: userinfo.code }; //加载用户信息
    let isloaded =  this.$store.getters["Menu/getLoadedrouter"];
    
    if(isloaded){
        //如果已经加载了数据 不做操作 因为数据已经在vuex仓库中了
    }else{
        //加载菜单数据
        getMenu(params).then(res => {
          let data = res[1];
          this.$store.dispatch('Menu/setMenuDada', data);
        });
    }
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>