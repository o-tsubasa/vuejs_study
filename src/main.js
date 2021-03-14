import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

// コンポーネントをグローバル登録する場合
Vue.component('LikeNumber', LikeNumber)

new Vue({
  // ES6の書き方
  render: h => h(App),
  // ES5の書き方
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app')
