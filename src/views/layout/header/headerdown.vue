<template>
 
    <ul class= "el-menus" >
      <li class="el-menu-items floatleft">
    <i @click="GOHome()" class="el-icon-p el-icon-s-home"></i>

    <i class="el-icon-p el-icon-message-solid"></i>

    <el-dropdown>
      <span class="el-dropdown-link">
        <span>{{UserInfo.name}}</span>
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="LoginOut()">安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
 

</li>
<li class="el-menu-items floatright">
    <el-avatar :size="40" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
    </li>
  </ul>
</template>

<script>
import { removeUserStorage } from '@/storage/storage'
export default {
  data(){
    return {
      HomeUrl:""
    }
  },
  computed:{ //计算数据
    UserInfo(){
      // debugger;
      // console.log(this.$store.getters);
      return this.$store.getters['UserStore/getUser']
    }
  },
  methods: {
    errorHandler() {
      //加载失败
    },
    //去到首页
    GOHome(){
      // console.log(this.$route.name!="home");//打印当前路由
      if(this.$route.name!="home")//
      {
        this.$router.push("/home");
      }
    },
    LoginOut(){//安全退出
      if(this.$route.name != "Loin"){
        removeUserStorage("user");//移除缓存用户
        this.$router.push("/login");
        this.$store.dispatch('Menu/setLoadrouter',false);//退出后需要重新加载路由和菜单
      }
    }
    
  }
};
</script>

<style lang="less"  scoped>

.el-menus{
  color:#fff;
  widows: 90px;
  list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
.el-menu-items{ 
  .el-dropdown{
    color:#fff;
  }
  .el-icon-p{
padding-right: 20px;
  }
  color:#fff;
  // ?width: 90px;
    cursor: pointer; 
    box-sizing: border-box;
    height: 59px;
    line-height: 59px;
    position: relative;
    -webkit-box-sizing: border-box;
    list-style: none;
}
.floatleft{
  
  float: left;
}
.floatright{
  width: 60px;
  text-align: left;
  float: left;

  .el-avatar{
    position: absolute;
    top: 10px;
  }
   
}
}
.header-right-down {
  text-align: right;
  color: #fff;
  height: 60px;
  line-height: 60px;
  display: flex;

  .el-dropdown-link {
    color: #fff;
  }
}
</style>
