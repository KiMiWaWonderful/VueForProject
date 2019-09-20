<template>
<!--  <h2>message</h2>-->
  <div id="message">
    <nav-bar class="message-nav">
<!--      <div class="center">-->
<!--        <slot name="center">消息</slot>-->
<!--      </div>-->
      <div slot="center">消息</div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Message",
    components: {NavBar}
  }
</script>

<style>
  #message{
    height: 100vh;
    position: relative;
  }

  .message-nav{
    background-color: cornflowerblue;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
