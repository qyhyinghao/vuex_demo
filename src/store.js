import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    count:0
};
const getters = {
    count(state){
        return state.count + 10;
    }
}
const actions = {
    increment({commit},n){
        commit('increment',n);
    }
};
const mutations = {
    increment(state,n){
        state.count+=n;
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})