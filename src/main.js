import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  // ES6の書き方
  render: h => h(App),
  // ES5の書き方
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app');
