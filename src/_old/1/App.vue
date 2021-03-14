<template>
  <div>
    <!-- <LikeHeader headerText="a"></LikeHeader> -->
    <!-- コンポーネントの横にv-slotがかけるのはdefaultスロットしかない場合 -->
    <!-- v-slot:default の default は省略できる -->
    <!-- <LikeHeader v-slot="slotProps"> -->
    <LikeHeader header-text="hello">
      <h2>みなさん</h2>
      <!-- <template v-slot:title="slotProps"> -->
      <template #title="slotProps">
        <h1>こんにちは</h1>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template> 
      <h3>はじめまして</h3>
      <p>よろしくです</p>
      <!-- <template v-slot:number>
        <h2>{{ number }}</h2>
      </template> -->
      <!-- 動的に変更する場合 -->
      <template v-slot[:title]></template>
    </LikeHeader>
    <!-- 親から子に値を渡す -->
    <!-- キャメルケースでもケバブケースでも書くことができる。（プロパティはケバブがおすすめ） -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader"

export default {
  // コンポーネントをローカル登録する場合
  data() {
    return {
      number: 10,
      title: "title"
    }
  },
  components: {
    // LikeHeader: LikeHeader を省略してかける(ES6)
    LikeHeader
  },
  methods: {
    // this.$emitの第２引数がvalueになる.
    incrementNumber(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
