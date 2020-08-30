<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue';

export default {
  name: 'KbnLoginView',
  components: {
    KbnLoginForm
  },
  methods: {
    // ログインボタン押した時の処理
    // KbnLoginFormのprops(onlogin)に渡される
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' });
        })
        .catch(err => this.throwReject(err));
    },
    // エラーを返す
    throwReject (err) { return Promise.reject(err); }
  }
};
</script>

<style scoped>
.login-view {
  width: 960px;
  margin: auto;
}
</style>
