<!--
组织页面
-->
<template>
  <el-container class="Orgnization" style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['001']" default-active="001001">
        <submenu :menuList="OrgList" :clickFun="clickFun"></submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>-->
        <!-- <span>王小虎</span> -->
        <el-tag type="info">
          {{currentitem.displayName}}
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>编辑</el-dropdown-item>
              <!-- <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>-->
            </el-dropdown-menu>
          </el-dropdown>
        </el-tag>
        <el-button type="text" icon="el-icon-document-add">新增组织</el-button>
        <el-button type="text" icon="el-icon-document-add">新增用户</el-button>
      </el-header>

      <el-main>
        <el-divider></el-divider>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import submenu from "@/components/Menu/submenu.vue";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData:[],
      tableData1: Array(20).fill(item),
       item:item,
      currentitem:{
        displayName:"",
        menuid:""
      },
      OrgList: [
        {
          path: "001",
          menuid: "001",
          displayName: "我的公司",
          children: [ 
            {
              path: "001001",
              menuid: "001001",
              displayName: "部门1",
              children: []
            },
            {
              path: "001002",
              menuid: "001002",
              displayName: "部门2",
              children: []
            },
            {
              path: "001003",
              menuid: "001003",
              displayName: "部门3",
              children: []
            }
          ]
        },
        {
          path: "002",
          menuid: "002",
          displayName: "主部门2",
          children: []
            } 
      ]
    };
  },
  components: {
    submenu
  },
  methods:{
    clickFun(item){
      this.currentitem = item;
      if(item.menuid=="001001"){
        this.tableData= this.tableData1;
      }else{
        this.tableData = [];
      }
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.Orgnization {
  .el-main {
    padding: 0px;
    .el-divider--horizontal {
      margin: 0px;
    }
  }
  .el-header {
    height: 60px;
    font-size: 12px;
    line-height: 60px;
    text-align: left;
    .el-tag.el-tag--info.el-tag--light {
      background-color: #ffff;
      border-color: #fff;
      color: #909399;
    }
    .el-icon-setting {
      cursor: pointer;
    }
  }
}
</style>