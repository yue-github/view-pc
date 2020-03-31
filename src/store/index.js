import Vue from "vue";
import Vuex from "vuex";
import test from './test';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...test.state,
    token: 'token',
  },
  mutations: {
    ...test.mutations
  },
  actions: {
    ...test.actions
  },
  getters: {
    token: state => state.token
  }
});