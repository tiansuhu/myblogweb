<!--
组织页面
-->
<template>
  <el-container class="Orgnization" style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="openeds" default-active="001001"
      @open="handleOpen"
      @close="handleClose"
      >
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
          {{currentitem.orgName}}
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
        <el-button type="text" icon="el-icon-document-add" @click="user.adduservisible = true">新增用户</el-button>
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

    <!--用户信息 -->
    <el-drawer
      title="新增用户"
      :with-header="false"
      :visible.sync="user.adduservisible"
      :direction="'rtl'"
      size="50"
      ref="user-drawers"
    >
      <user @closeForm="closeForm"></user>
    </el-drawer>
  </el-container>
</template>

<script>
import submenu from "@/components/Menu/submenu.vue";
import user from "@/views/home/UserManager/User.vue";
import { GetOrgChilds } from "@/services/services.js";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      user: {
        //添加用户操作
        adduservisible: false //显示隐藏添加用户页面
      },
      tableData: [],
      tableData1: Array(20).fill(item),
      item: item,
      currentitem: {
        displayName: "",
        menuid: ""
      },
      OrgList: [
        {
          orgCode: "001",
          id: "4de922a4-3b60-41f4-8fb0-931e9de79883",
          orgName: "我的公司",
          children: [
            {
              orgCode: "001001",
              id: "4de922a4-3b60-41f4-8fb0-931e9de79883001",
              orgName: "部门1",
              children: []
            },
            {
              orgCode: "4de922a4-3b60-41f4-8fb0-931e9de79883002",
              id: "4de922a4-3b60-41f4-8fb0-931e9de79883002",
              orgName: "部门2",
              children: []
            },
            {
              orgCode: "001003",
              id: "4de922a4-3b60-41f4-8fb0-931e9de79883003",
              orgName: "部门3",
              children: []
            }
          ]
        },
        {
          orgCode: "002",
          id: "4de922a4-3b60-41f4-8fb0-931e9de79883-002",
          orgName: "主部门2",
          children: []
            }
      ]
    };
  },
  components: {
    submenu,
    user
  },
  computed:{
    openeds(){
      return [];
    }
  },
  created() { 
    let params = { parentId: null };
    GetOrgChilds(params).then(res => {
      console.log(res);
      if (res[1]&&res[1].data&&res[1].data.length>0) { 
        res[1].data.forEach(element => {
          this.OrgList.push(
             {
            orgCode:element.organization.orgCode,
            orgName:element.organization.orgName,
            id:element.organization.id,
            children:res[1].children
          });
        });
      }
      console.log(this.OrgList);
    });
  },
  methods: {
     handleOpen(key,path){
       this.openeds.push(key);
       console.log(key);
       console.log(path);
     },
     handleClose(key,path){
      this.openeds.splice(this.openeds.findIndex(item => item === key, 1))
     },
    clickFun(item) {
      this.currentitem = item;
      return ;
      let params = { parentId: item.id };
     GetOrgChilds(params).then(res => {
       let childorg = [];
      console.log(res);
      if (res[1]&&res[1].data&&res[1].data.length>0)  { 
        res[1].data.forEach(element => {
          childorg.push(
             {
            orgCode:element.organization.orgCode,
            orgName:element.organization.orgName,
            id:element.organization.id,
            children:[]
          });
        });
      }
      item.children = childorg;
      console.log(this.childorg);
    });
      console.log(item);
    },
    closeForm() {
      this.user.adduservisible = false;
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