//维护状态 state
//修改状态 comit 
// 业务逻辑的控制 dispatch
//状态派发  getter
//state响应式
let Vue;
function install (_Vue,storeName='$store') {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            if(this.$options.store) {
                Vue.prototype[storeName] = this.$options.store;
            }
        },
    })
}

class Store {
    constructor(options={}){
        this.state = new Vue({
            data: options.state
        });

        this.mutations = options.mutations || {};
        this.actions = options.actions || {};
    }

    //触发muctations
    commit = (type,arg) => {
        //this指向store实例
        const fn = this.mutations[type];
        console.log(fn)
        fn(this.state,arg)
    }

    dispatch(type,arg) {
        const fn = this.actions[type];
        return fn({commit:this.commit,state:this.state},arg);
    }
}
export default {Store,install}