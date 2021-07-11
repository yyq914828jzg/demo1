<template>
    <div>
        {{$a.state.count}}
        <button @click='add'>点击</button>
        <button @click='addd'>点击</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
                this.$a.commit('add',3)
            },
            addd() {
                this.$a.dispatch('addd',3)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>