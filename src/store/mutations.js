import * as types from './mutation-types';

// ミューテーションハンドラ(アクション側でcommitされた時に呼び出される)
export default {
  // ログイン
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload;
  },

  // タスク一覧取得
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    // TODO:
    throw new Error('FETCH_ALL_TASKLIST mutation should be implemented');
  },

  // タスク追加
  [types.ADD_TASK] (state, payload) {
    // TODO:
    throw new Error('ADD_TASK mutation should be implemented');
  },

  // タスク更新
  [types.UPDATE_TASK] (state, payload) {
    // TODO:
    throw new Error('UPDATE_TASK mutation should be implemented');
  },

  // タスク削除
  [types.REMOVE_TASK] (state, payload) {
    // TODO:
    throw new Error('REMOVE_TASK mutation should be implemented');
  },

  // ログアウト
  [types.AUTH_LOGOUT] (state) {
    // TODO:
    throw new Error('AUTH_LOGOUT mutation should be implemented');
  }
};
