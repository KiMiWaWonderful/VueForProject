<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <HelloWorld/>-->
    <router-view></router-view>
    <main-tab-bar v-if="$route.meta.footShow"></main-tab-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

  @import "./assets/css/base.css";
</style>
