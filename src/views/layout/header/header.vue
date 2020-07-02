<template>
  <!-- <el-row>
    <el-col :span="20"> -->
      <!-- <div class="grid-content bg-purple-dark"> -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>

<div class="tabinx">
       <HeaderRignt />
</div>
          <!-- <el-menu-item index="/login" style="float:right" >登入</el-menu-item>  -->
        </el-menu>
      <!-- </div>
    </el-col>
    <el-col :span="4"> -->
      <!-- <div class="grid-content"> -->
     
      <!-- </div> -->
    <!-- </el-col>
  </el-row> -->
</template>

<script>
import HeaderRignt from "@/views/layout/header/headerdown.vue";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false
    };
  },
  components: {
    HeaderRignt
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.tabinx{
    float: right;
}
</style>