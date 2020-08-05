<!--菜单组件--> 
<!--
@menuList:数据 格式如下
[
    {
        resourceId:"菜单id"
        resourceName:"菜单名称"
        children:[ --子集菜单
            resourceName:"菜单名称"

        ]
    }
]
@clickFun:点击事件 
-->
<template>
  <div class="menu">
    <template v-for="(list,i) in this.menuList">
      <!-- //循环数据；数据menuList通过props传递 -->
      <el-submenu  
      v-if="list.children.length>0" 
        :key="list.orgCode" 
        :index="list.orgCode"
        >
        <template slot="title">
          <i :class="list.ico||'el-icon-s-tools'"></i>
          <span slot="title">{{ list.orgName}}</span>
        </template>
        <!-- //当有子集数据再次使用这个模板，:menuList通过props传递 -->
        <bubMenu :menuList="list.children" :clickFun="clickFun"></bubMenu>
      </el-submenu>
      <el-menu-item
       v-else 
       :index="list.orgCode" 
       :key="list.orgCode" 
           @click="clickitem(list)"
       >
        <!-- style="padding-left: 38px;"  @click="clickFun"-->
        <i :class="list.ico"></i>
        <span>{{list.orgName}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<style lang="less" scoped>
/dep/ .el-menu--collapse span,
/dep/.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

.menu {
  /* background-color:rgb(84, 92, 100);   */
  text-align: left !important;
}
</style>
<script>
export default {
  name: "bubMenu", //模板名称
  data() {
    return {};
  },
  beforeMount() {

  }, 
  watch: {
    menuList: {
      immediate: true,//第一次就触发
      handler(newv, oldv) {
        // debugger;
        // console.log(newv);
      }
    }
  },
  props:['menuList','clickFun'],
  methods: {
     handleOpen(item){
       debugger;
       console.log(item);

     },
    clickitem(item){
        // console.log(this.clickFun); 
        this.clickFun(item);
    }
  }
  

//     menuList:Array,
//     clickFun:Object
//   } 
};
</script>