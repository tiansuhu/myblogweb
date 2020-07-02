<template>
<!-- 菜单类型组件 -->
  <div>
    <el-select :placeholder="placeholder"
               :value="value"
               :size="size"
               @input="change($event)"
               :disabled="disabled"
               >
      <el-option v-for="item in optionsList"
                 :key="item.id"
                 :label="item.name"
                 :value="item.id"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
    data() {
         return {
            optionsList: [{name:"菜单",id:"link"},{id:"menuparentNode",name:"目录"} ]
         } 
       
    },
  props: {
    name: {
      default: 'name',
      type: String
    },
    id: {
      default: 'id',
      type: String
    },
    placeholder: {
      default: '请选择',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    filterable: {
      default: false,
      type: Boolean
    },
    disabled:{
      default:false,
      type:Boolean
    },
    value: {
      default: () => {
        return ""
      },
      type: String
    },
    
  },
  methods: {
    change: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>

</style>