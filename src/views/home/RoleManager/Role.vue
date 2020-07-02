<!--
角色页面
-->
<template>
  <el-container class="Orgnization" style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="role-buttoncontains">
        <el-button type="text" icon="el-icon-document-add" @click="dialogFormVisible = true">新增角色组</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" icon="el-icon-document-add" @click="dialogroteVisible=true">新增角色</el-button>
      </div>
      <el-divider></el-divider>
      <el-menu :default-openeds="['3']">
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>导航三
          </template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-tag type="info">
          我的角色
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>编辑</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-tag>
        <el-button type="text" icon="el-icon-document-add" @click="showadd()">添加用户</el-button>
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

    <!-- 添加角色组 -->
    <el-dialog
      title="添加角色组"
      :visible.sync="dialogFormVisible"
      width="30%"
      :close-on-click-modal="false"
      class = "role-dialog"
    >
      <el-form :model="form" :label-position="'left'">
        <el-form-item label="角色组名称" label-width="100px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加角色 -->
    <el-dialog
      title="添加角色"
      :visible.sync="dialogroteVisible"
      width="30%"
      :close-on-click-modal="false"
      class = "role-dialog"
    >
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="'100px'">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色组" :label-width="'100px'">
          <el-select v-model="form.rotegroup" placeholder="请选择角色组">
            <el-option label="角色组一" value="shanghai"></el-option>
            <el-option label="角色组二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogroteVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogroteVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      dialogFormVisible: false,
      dialogroteVisible: false,
      tableData: Array(20).fill(item),
      form: { name: "", pid: "-1", rotegroup: "" }
    };
  }
};
</script>

<style lang="less" scoped>
.Orgnization {
  .role-buttoncontains {
    height: 60px;
    line-height: 60px;
    background-color: #fff;
  }
  .el-divider--horizontal {
    margin: 0px;
  }
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
  .role-dialog{
    .el-dialog__body{
          padding: 10px 20px;
          .el-select{
            width: 100%;
          }
    }
  }
}
</style>