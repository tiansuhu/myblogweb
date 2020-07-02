<template>
  <el-container class="home">
    <el-aside  style="width:200px;">
      <!-- 左侧菜单栏 -->
        <Aside></Aside>
      </el-aside>
    <el-container> 
      <el-header class="el-header drag">
        <!-- 头部 -->
      <Header></Header>
    </el-header>
      <el-container>
        <el-main class= "el-home-main">
          <!-- 面包屑 -->
          <Breadcrumb></Breadcrumb>
          <el-divider ></el-divider>
          <!-- 路由页面 -->
          <router-view />
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "../views/layout/header/header.vue";
import Aside from "../views/layout/aside/aside.vue";
import Footer from "../views/layout/footer/footer.vue";
import Breadcrumb from "@/views/layout/header/breadcrumb.vue"//面包屑

export default {
  name: "Home",
  components: {
    Header,
    Aside,
    Footer,
    Breadcrumb
  },
  methods: {
    go(routerName) {
      this.$router.push(routerName);
    }
  }
};
</script>
<style lang="less" scoped>
.el-header{
      background-color: rgb(84, 92, 100);
}
.el-home-main{
  padding:0;
}
.el-divider{
  margin: 0px;
}
</style>
