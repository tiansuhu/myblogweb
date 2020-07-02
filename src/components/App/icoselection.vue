<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "sss",
          label: "item1"
        },
        {
          value: "sssc",
          label: "item2"
        }
      ]
    };
  },
  props:["value"]
  
};
</script>

<style>
</style>