import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false

// コンポーネントをグローバル登録する場合
Vue.component('LikeNumber', LikeNumber);

// Vue.directive("border", {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めてぶｔ対象の要素に紐付いたとき（1回のみ）
//   },
//   // inserted(el, binding, vnode) {
//   //   // 親Nodeに挿入されたとき（mountedみたいなイメージ）
//   // },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントのVNodeが更新される前。
//   },
//   // componentUpdated(el, binding, vnode, oldVnode) {
//   //   // コンポーネントが更新されるたび。子コンポーネントのVNodeが更新された後。
//   // },
//   // unbind(el, binding, vnode) {
//   //   // ディレクティブが紐付いている要素から取り除かれたとき（destroyedみたいなイメージ）
//   // },
// });

// グローバルにディレクティブを追加
// 第2引数に渡した関数はbindとupdateに適用される
// el: カスタムディレクティブが紐づく要素
// Vue.directive("border", function(el, binding) {
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem";
//   }
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
//   }
// });

// 関数の引数は必ず取る
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  // ES6の書き方
  render: h => h(App),
  // ES5の書き方
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app');
