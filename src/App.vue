<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>

    <div>
      <button @click="myComponent = 'ComponentA'">ComponentA</button>
      <button @click="myComponent = 'ComponentB'">ComponentB</button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>

    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さようなら</p>
      <p v-if="!show" key="hello">こんにちは</p>
    </transition>

    <transition name="fade" appear>
      <p v-if="show">hello</p>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__flash"
      appear>
      <p v-if="show">hello2</p>
    </transition>
    <transition name="slide" type="animation" appear>
      <p v-if="show">bye</p>
    </transition>

    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: 'fade',
      myComponent: "ComponentA"
    };
  },
}
</script>

<style scoped>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity .5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity .5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in .5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in .5s reverse;
  transition: opacity 1s;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>