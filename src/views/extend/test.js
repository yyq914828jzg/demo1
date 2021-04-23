import test from './test.vue';
import Vue from 'vue';
function demo(data){
    let testConstrouce = Vue.extend(test);
    let testObj = new testConstrouce(data);
    let mount = testObj.$mount();
    document.body.appendChild(mount.$el);
}

export default demo;