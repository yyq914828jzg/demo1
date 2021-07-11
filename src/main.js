import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './krouter/index.js'
import store from './kVuex/kindex.js'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
import vueDemo from './components/HelloWorld.vue';
Vue.component('vueDemo',vueDemo);
import dd from './views/jsx/components/install.js'
Vue.use(dd)
// import test from './views/Notice/index.js';
// Vue.use(test)
// import tests from './views/Notice/notice.js';
// Vue.use(tests)
// console.log(1)
// document.addEventListener('click',(el)=>{
//     alert(1)
//     console.log(el)
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
