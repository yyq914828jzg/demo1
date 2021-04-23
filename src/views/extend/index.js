import Vue from 'vue';
import Message from './index.vue';
let messageInstance = null;
let TempMessage = '';
setTimeout(() => {
    TempMessage = Message
},2000)
let ee = Vue.extend({
    template:'<p>这是个啥</p>'
})
let rr = new ee().$mount();
console.log('rr',rr)
let init = () => {
    let MessageConstructor = TempMessage && Vue.extend(TempMessage);
    messageInstance = new MessageConstructor({});
    messageInstance.$mount();
    document.body.appendChild(messageInstance.$el);
    messageInstance.$el.style.zIndex = 9999;

}
let caller = (options) => {
    if(!messageInstance) {
        init(options)
    }
    messageInstance.addMessage(options)
}
export default {
    install(vue) {
        vue.prototype.$mymessage = caller;
    }
}