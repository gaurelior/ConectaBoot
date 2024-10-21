<template>
  
  <div id="app">
    <router-view></router-view>
  </div>

  <!-- <img alt="Vue logo" src="./assets/if.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from '@/components/ChatBoot.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}


import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);
app.use(VueLazyload);
app.mount('#app');


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
