<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // 親から値をもらう
  props: ["totalNumber"],
  // props: {
  //   // totalNumber: Number, // 型をチェックすることができる
  //   totalNumber: {
  //     type: Number,
  //     // required: true,
  //     default: 10
  //     // オブジェクトや配列の場合はdefaultは関数になる
  //     // default: function() {
  //     //   return {
  //     //     number: 5
  //     //   }
  //     // }
  //   }
  // },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      // 第一引数だけでも大丈夫。カスタムイベントみたいなもの
      // 第一引数はケバブケースで書くべき。
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
