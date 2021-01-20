/* eslint-disable no-unused-vars */


// state
const state = {
    name:"zhangsan"
};

// actions
const actions = {
    nameChange({ commit },status) {
        state.name = status;
        commit("nameChange",status)
    }

}

// mutations
const mutations = {
    nameChange(state,status) {
        state.name = status;
    }
};

export default {
    namespaced: true,   
    state,
    actions,
    mutations
};
