import hello from './hello.vue';
import Vue from 'vue';
let btn = (text) => {
    text = text || {};
    if(typeof text === 'string') {
        text = {
            text,
        }
    }
    const helloConstructor = Vue.extend(hello);
    const aa = new helloConstructor({data:text}).$mount();

    document.body.appendChild(aa.$el)
}

export default btn;