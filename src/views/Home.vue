<template>
  <div class="home">
    <el-button>11111</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  created () {
      let store = this.$store;
      this.$store.dispatch('menu/nameChange',"lisi")
      console.log( this.$store.state.menu.name)
  },
}
</script>
