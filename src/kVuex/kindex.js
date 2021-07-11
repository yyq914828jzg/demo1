import Vue from 'vue';
import kVuex from './kVuex.js';
Vue.use(kVuex,'$a');

export default new kVuex.Store({
    state:{
        count: 0,

    },
    mutations:{
        add(state,num=1) {
            state.count +=num;
        }
    },

    actions:  {
        addd({commit}) {
            return new Promise(resolve =>{
                setTimeout(() =>{
                    commit("add");
                    resolve({ok:1})
                },3000)
            })
        }
    }
})