<template>
  <!-- 菜单信息 -->
  <el-container>
    <el-header class="menu-header">
      <!-- 菜单操作 -->
      <el-row :gutter="24" class="menu-header-headerrow">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入菜单代码" v-model="menuCode"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入菜单名称" v-model="menuName"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-button-group>
              <el-button icon="el-icon-search">搜索</el-button>
              <!-- <el-button type="success" icon="el-icon-document-add" @click="showadd()">新增</el-button>
              <el-button type="primary" icon="el-icon-edit">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete">删除</el-button>-->
            </el-button-group>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-divider></el-divider>

    <el-main>
      <div>
        <el-table
          :data="tableData1"
          style="width: 100%"
          row-key="menuid"
          border
          lazy
          :load="load"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
          <el-table-column prop="displayName" label="名称" width="180"></el-table-column>
          <el-table-column label="图标" width="60">
            <template slot-scope="scope">
              <li :class="scope.row.ico"></li>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="类型" width="130"></el-table-column>
          <el-table-column prop="component" label="源文件地址"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="lookClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button
                v-if="scope.row.type=='menuparentNode'"
                @click="showadd()"
                type="text"
                size="small"
              >新增</el-button>
              <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteClick(scope.$index,scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
    <el-footer>
      <!-- 菜单分页 -->
      <el-pagination background layout="prev, pager, next" :total="4"></el-pagination>
    </el-footer>

    <AddMenu ref="addmenu" :edittype="addmenuisDisabled" :MenuData="MenuData"></AddMenu>
  </el-container>
</template>

<script>
import AddMenu from "@/views/home/MenuManager/AddMenu.vue";
import { getMenu } from "@/services/services.js";
export default {
  data() {
    return {
      menuCode: "",
      menuName: "",
      drawer: false,
      addmenuisDisabled: 1,
      MenuData: {
        menuid: "", //id 菜单的ID
        displayName: "", //菜单名称组织管理
        ico: "", //菜单图标
        type: "", //菜单类型"menutype.link"
        path: "", //菜单路径/home/organizaiton
        name: "", //菜单名称 organizaiton
        component: "", //对应的页面views/home/Orgnization.vue
        children: [] //子目录
      }
    };
  },
  computed: {
    tableData1() {
      return this.$store.getters["Menu/getMenuData"];
    }
  },
  components: {
    AddMenu
  },
  methods: {
    lookClick(row) {
      this.MenuData = row;
      this.addmenuisDisabled = 0;
      this.$refs.addmenu.visible = true;
      console.log(row);
    },
    editClick(row) {
      this.MenuData = row;
      this.addmenuisDisabled = 2;
      this.$refs.addmenu.visible = true;
    },
    deleteClick(index, row) {
      debugger;
      console.log(index);
      console.log(row);
      this.tableData1.splice(index, 1);
      // this.tableData.remove(row)
    },
    load(tree, treeNode, resolve) {
      console.log(treeNode);
      console.log(tree);
      // setTimeout(() => {
      //   resolve([
      //     {
      //       id: 31,
      //       date: "2016-05-01",
      //       name: "王小虎",
      //       address: "上海市普陀区金沙江路 1519 弄"
      //     },
      //     {
      //       id: 32,
      //       date: "2016-05-01",
      //       name: "王小虎",
      //       address: "上海市普陀区金沙江路 1519 弄"
      //     }
      //   ]);
      // }, 1000);
    },
    showadd() {
      this.addmenuisDisabled = 1;
      this.MenuData = {
        menuCode: "", //id 菜单的ID
        displayName: "", //菜单名称组织管理
        ico: "", //菜单图标
        type: "", //菜单类型"menutype.link"
        path: "", //菜单路径/home/organizaiton
        name: "", //菜单名称 organizaiton
        component: "", //对应的页面views/home/Orgnization.vue
        children: [] //子目录
      };
      this.$refs.addmenu.visible = true;
    }
  }
};
</script>
<style lang="less" scoped>
.menu-header-headerrow {
  height: 60px;
  line-height: 60px;
}
.el-divider {
  margin: 0px;
}
.el-drawer.rtl {
  padding-right: 10px;
}
</style>