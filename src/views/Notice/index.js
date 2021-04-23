import Vue from 'vue';
import index from './index.vue';
let messageInstance = null;
let init = () => {
    let MessageConstructor = Vue.extend(index);
    messageInstance = new MessageConstructor();
    document.body.appendChild(messageInstance.$mount().$el);
}
let caller = (options) => {
    if(!messageInstance) {
        init();
    }
    messageInstance.show(options)
}

export default {
    install() {
        Vue.prototype.$notice = caller
    }
}