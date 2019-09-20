<template>
  <nav-bar>
    <slot></slot>
  </nav-bar>
</template>

<script>

  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Home",
    components: {NavBar}
  }
</script>

<style>

</style>
