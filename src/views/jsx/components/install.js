export default {
    install(Vue) {
        Vue.$aa = () => {
            console.log(333)
        }

        Vue.mixin({
            methods: {
                aa() {
                    alert(1)
                }
            },
        })
    }
}