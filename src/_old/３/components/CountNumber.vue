<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
// @/ で src の相対パスになる（CLIのみ？）
import { tokyoNumber } from '@/tokyoNumber';

export default {
  mixins: [tokyoNumber],
  created() {
    console.log('created in component');
  }
}
</script>