<template>
    <div>
        这是jsx页面
        <demo></demo>
    </div>
</template>

<script>
import demo from './components/demo1.vue'
    export default {
        components: {
            demo
        },
        created(){
            this.aa()
        }
    }
</script>

<style lang="scss" scoped>

</style>