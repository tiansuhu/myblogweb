<template>
  <div>
    <div>
      <h3>添加用户</h3>
    </div>
    <!-- 用户信息页面 -->
    <el-form
      :model="UserData"
      status-icon
      :rules="rules"
      ref="userInfo"
      label-width="100px"
      class="user-userinfo"
    >
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="用户代码">
              <el-input type="txt" v-model="UserData.userCode" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-form-item label="用户名称">
              <el-input type="txt" v-model="UserData.userName" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-form-item label="用户昵称">
              <el-input type="txt" v-model="UserData.appellation" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="QQ">
              <el-input type="txt" v-model="UserData.userQQ" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="微信">
              <el-input type="txt" v-model="UserData.userWeChat" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="电话">
              <el-input type="txt" v-model="UserData.userPhone" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="邮箱">
              <el-input type="txt" v-model="UserData.userEmail" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-form-item label="所在国">
              <el-input type="txt" v-model="UserData.userCountry" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-form-item label="所在省">
              <el-input type="txt" v-model="UserData.userProvice" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-form-item label="所在市">
              <el-input type="txt" v-model="UserData.userCity" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-form-item label="详细地址">
              <el-input type="txt" v-model="UserData.userAddress" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-form-item>
              <el-button type="primary" @click="submitForm()">提交</el-button>
              <el-button @click="_closeForm()">取消</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserData: {
        userCode: "", //用户代码
        userName: "", //用户名称
        imgUrl: "", //头像
        appellation: "", //昵称
        userQQ: "", //用户QQ
        userWeChat: "", //用户微信号
        userPhone: "", //用户手机号
        userEmail: "", //用户邮箱
        userCountry: "", //用户所在国
        userProvice: "", //用户省
        userCity: "", //市
        userAddress: "", //详细地址
        isAdmin: "", //是否是管理员
        isActivy: "" //是否激活
      },
      rules: {
        //验证规则 待完善
      }
    };
  },
  methods: {
    submitForm() {
      //提交表单
      this._closeForm();
    },
    _closeForm() {
      //取消表单
      debugger;
      // if (this.closeForm) 
      {
        this.$emit("closeForm");
      }
    }
  },
  props: ["closeForm"]
};
</script>

<style>
</style>