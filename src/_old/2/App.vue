<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader"
import About from "./components/About"
import Home from "./components/Home"

export default {
  // コンポーネントをローカル登録する場合
  data() {
    return {
      number: 10,
      currentComponent: 'Home'
    }
  },
  components: {
    // LikeHeader: LikeHeader を省略してかける(ES6)
    LikeHeader,
    About,
    Home
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
