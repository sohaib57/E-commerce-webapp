import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

// Here importing all the seperate files of store

import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";
export default new Vuex.Store({

  state,
  getters,
  mutations,
  actions,

});