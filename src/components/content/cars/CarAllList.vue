<template>
  <div class="car-all-list">
    <car v-for="item in cars" :car="item">

    </car>
  </div>
</template>

<script>
  import Car from "./Car";
  export default {
    name : "CarAllList",
    components: {
      Car
    },
    props: {
      cars :{
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .car-all-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
