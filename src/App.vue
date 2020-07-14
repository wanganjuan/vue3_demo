<template>
<!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 -->
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Mixin/>
    <navigation-link url="/profile">
  <navigationLink v-slot="{ count, increment }">
     {{ count }}
    <button @click="increment">Increment</button> 
  </navigationLink> 
</navigation-link> -->
<!-- // 有时让插槽内容能够访问子组件中才有的数据是很有用的 作用域插槽 -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Mixin from './components/Mixin.vue'
// import navigationLink from './components/Slot.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Mixin,
    // navigationLink
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
