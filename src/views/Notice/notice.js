import Vue from 'vue';
import notice from './notice.vue';
function create( props) {
    // 创建vue实例
    const vm = new Vue({
        render(h){
            return h(notice,{props})
        }
    }).$mount();

    const comp = vm.$children[0];
    document.body.appendChild(vm.$el);
    comp.show();
    //清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}
export default {
    install() {
        Vue.prototype.$noticess = create;
    }
}