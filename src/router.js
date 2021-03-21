import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

// use プラグインを適用するときに使う
Vue.use(Router);

export default new Router({
  // defaultはhash
  // URLから#を削除する
  mode: "history",
  // URLとコンポーネントのマッピングを行う
  routes: [
    { path: '/', component: Home },
    { path: "/users/:id", component: Users }
  ]
});
