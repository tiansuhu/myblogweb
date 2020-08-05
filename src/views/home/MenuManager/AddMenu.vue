<template>
  <el-drawer
    title="新增数据"
    :with-header="false"
    :visible.sync="visible"
    :direction="direction"
    :before-close="handleClose"
    size="50"
    ref="drawers"
  >
    <div class="drawer-right">
      <div class="title">
        <span v-if="edittype==0">查看</span>
        <span v-if="edittype==1">新增</span>
        <span v-if="edittype==2">编辑</span>
      </div>
      <el-form
        :model="MenuData"
        status-icon
        :rules="rules"
        ref="MenuData"
        label-width="100px"
        class="demo-MenuData"
      >
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="菜单代码">
                <el-input v-if="edittype==1" type="txt" v-model="MenuData.name" autocomplete="off"></el-input>
                <div v-else>{{MenuData.name}}</div>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="菜单名称">
                <div v-if="edittype==0">{{MenuData.displayName}}</div>
                <el-input v-else type="txt" v-model="MenuData.displayName" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="菜单图标">
                <div v-if="edittype==0">{{MenuData.ico}}</div>
                <el-input v-else v-model="MenuData.ico" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="菜单类型">
                <menutype v-model="MenuData.type" :disabled="edittype!=1"></menutype>
                <!-- <el-select v-model="MenuData.type" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>-->
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="源文件路径">
                <span v-if="edittype==0">{{MenuData.component}}</span>
                <el-input v-else v-model="MenuData.component" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item>
                <el-button v-if="edittype==1||edittype==2" type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="closeForm()">{{edittype==0?"关闭":"取消"}}</el-button>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-drawer>
</template>
<script>
import menutype from "@/components/App/menutypeselect.vue";
import { AddMenu, UpdateMenu } from "@/services/services";
export default {
  data() {
    return {
      direction: "rtl",
      visible: false,
      loading: false,
      options: [
        {
          value: 0,
          label: "菜单",
        },
        {
          value: 1,
          label: "文件夹",
        },
      ],
      rules: {},
    };
  },
  props: {
    edittype: {
      default: 0, //0：查看 1：新增 2：编辑
      type: Number,
    },
    MenuData: {
      default: {
        id: "", //菜单id
        parentid: "", //父级id
        menuid: "", //id 菜单的ID
        displayName: "", //菜单名称组织管理
        ico: "", //菜单图标
        type: 0, //菜单类型"menutype.link"
        path: "", //菜单路径/home/organizaiton
        name: "", //菜单名称 organizaiton
        component: "", //对应的页面views/home/Orgnization.vue
      },
    },
    loadeddata: {
      type: Function,
      default: null,
    }, //加载菜单
  },
  components: {
    menutype,
  },
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs.drawers.closeDrawer();
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     //alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    closeForm(formName) {
      this.visible = false;
    },
    handleClose(done) {
      if (this.edittype == 0) {
        done();
      } else {
        this.$confirm("确认提交？")
          .then((_) => {
            //添加
            if (this.edittype == 1) {
              AddMenu(this.MenuData).then((res) => {
                this.$emit("loadeddata");
              });
            }
            //更新
            if (this.edittype == 2) {
              UpdateMenu(this.MenuData).then((res) => {
                console.log(res);
                this.$message({
                  message: "更新成功",
                  type: "success",
                });
              });
            }

            done();
          })
          .catch((_) => {
            //取消走的是这里
            done();
          });
      }
      // }else{
      //   done();
      // }
    },
  },
};
</script>
<style lang="less" scoped>
.drawer-right {
  margin-right: 10px;
}
.title {
  padding: 10px 0 30px 0;
  font-size: 20px;
  font-weight: 800;
}
.el-form-item__content {
  text-align: left !important;
}
</style>