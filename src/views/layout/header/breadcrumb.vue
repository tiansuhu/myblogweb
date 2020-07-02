<template>
<div class="el-breadcrumb">
 <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
      </el-breadcrumb>
</div>
</template>
<script>
export default {
data() {
      return {
          levelList: null
      }
  },
  methods: {
          /**
           * 生成面包屑的方法
           */
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      this.levelList = matched;
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(to, from) {
      //路由发生变化后 更新面包屑
        // console.log(to);
      this.getBreadcrumb();
    }
  }
}
</script>

<style lang="less" scoped>
.el-breadcrumb{
    padding:5px 3px;
    background-color: #f9f9f9;
}
</style>