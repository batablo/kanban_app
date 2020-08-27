import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// 状態`Auth`と状態`Board`をVuexのStateで一元管理できるようにする
// 最初は全部nullで初期化
const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    Lists: []
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});
