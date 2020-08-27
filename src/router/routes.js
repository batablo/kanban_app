import KbnBoardView from '@/component/templates/KbnBoardView';
import KbnLoginView from '@/component/templates/KbnLoginView';
import KbnTaskDetailModal from '@/component/templates/KbnTaskDetailModal';

export default [
  // ボードページ(ルート)
  {
    path: '/',
    component: KbnBoardView,
    meta: {
      requireAuth: true
    }
  },

  // ログインページ
  {
    path: '/login',
    component: KbnLoginView,
    meta: {
      requireAuth: true
    }
  },

  // タスク詳細ページ
  {
    path: '/tasks/:id',
    component: KbnTaskDetailModal
  },

  // リダイレクト
  {
    path: '*',
    redirect: '/'
  }
];
