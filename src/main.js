import Vue from 'vue';
import App from './App.vue';
import router from "./router";

Vue.config.productionTip = false

new Vue({
  // router: router と書くのと一緒
  router,
  // ES6の書き方
  render: h => h(App),
  // ES5の書き方
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app');
