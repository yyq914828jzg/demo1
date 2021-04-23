<template>
    <div :class="`notice notice-${options.type}`" v-if="shows">
        {{options.text}}
    </div>
</template>

<script>
let defaultNotice = {
    type:"info",
    text:"文字"
}
export default {
    data() {
        return {
            shows: false,
            options:{}
        }
    },
    methods: {
        show(notice) {
            console.log(notice)
            this.options = {...defaultNotice,...notice};

            this.shows = true;
            setTimeout(()=>{
                this.hide()
            },2000)
        },
        hide(){
            this.shows = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.notice {
    position: fixed;
    top:100px;
    left: 50%;
    border: 1px solid red;
}
.notice-success {
    border: 1px solid blue;
}
.notice-error {
    background: red;
}
</style>