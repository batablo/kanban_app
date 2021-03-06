// import使ってないので一旦lintエラー回避
/* eslint-disable no-unused-vars */
import * as types from './mutation-types';
import { Auth, List, Task } from '../api';

// アクションハンドラ関数
export default {
  // ログイン
  login: ({ commit }) => {
    // TODO:
    throw new Error('login action should be implemented');
  },

  // タスク一覧取得
  fetchLists: ({ commit }) => {
    // TODO:
    throw new Error('fetchList action should be implemented');
  },

  // タスク追加
  addTask: ({ commit }) => {
    // TODO:
    throw new Error('addTask action should be implemented');
  },

  // タスク更新
  updateTask: ({ commit }) => {
    // TODO:
    throw new Error('updateTask action should be implemented');
  },

  // タスク削除
  deleteTask: ({ commit }) => {
    // TODO:
    throw new Error('deleteTask action should be implemented');
  },

  // ログアウト
  logout: ({ commit }) => {
    // TODO:
    throw new Error('logout action should be implemented');
  }
};
