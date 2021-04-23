import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
import vueDemo from './components/HelloWorld.vue';
Vue.component('vueDemo',vueDemo);
import test from './views/Notice/index.js';
Vue.use(test)
import tests from './views/Notice/notice.js';
Vue.use(tests)
// document.addEventListener('click',(el)=>{
//     alert(1)
//     console.log(el)
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
