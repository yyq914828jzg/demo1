/* eslint-disable no-unused-vars */


// state
const state = {
    date: '',
    naDept: '',
    sdDept: '',
    raTrans: '',
    euNwtp: ''
};

// actions
const actions = {
    

}

// mutations
const mutations = {
    //日期变化
    dateChange(state, status) {
        state.date = status;
    },
    //科室变化
    sdDeptChange(state, status) {
        state.naDept = status.name;
        state.sdDept = status.code;
        state.raTrans = status.raTrans;
        state.euNwtp = status.euNwtp;
    },
};

export default {
    namespaced: true,   
    state,
    actions,
    mutations
};
