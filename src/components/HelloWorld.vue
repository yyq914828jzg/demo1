<template>
<div>
    <el-date-picker
      v-model="value6"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    <vue-tree
    :autoExpandParent="false"
    width="120px"
    placeholder="请选择内容"
    :data="treeData"
    v-model="value"
    filterable
    clearable
  ></vue-tree>
</div>
  
</template>

<script>
import vueTree from './tree.vue';

export default {
  components: {
    vueTree
  },
  data() {
    return {
        value6:'',
      value: '',
      treeData: [
        {
          id: 1,
          label: 'text1',
          children: [{ id: 5, label: 'text5' }, { id: 6, label: 'text6',children:[{id:11,label:"dddddddddddddddddddddddddddddddddfffffffffffff"}] }]
        },
        { id: 2, label: 'text2', children:[{id:2222,label:'dddgggg'}] },
        { id: 3, label: 'text3' },
        { id: 4, label: 'text5' },
      ]
    };
  },

};
</script>