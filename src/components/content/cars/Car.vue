<template>
<!--  <div class="car-item">-->
<!--    <img src="">-->
<!--    <div class="car-number">-->
<!--      <span>粤A12345</span>-->
<!--    </div>-->
<!--    <div class="car-type">-->
<!--      <span>铃木</span>-->
<!--    </div>-->
<!--  </div>-->

  <div class="car-item">
<!--    <img src="../../assets/img/profile/man_image.svg">-->
    <img :src="car.car_img">

    <div class="text">
      <div class="car-number">
        {{car.car_number}}
      </div>
      <div class="car-type">
        {{car.car_type}}
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name : "CarsListItem",
    props :{
      car: {
        type : Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .car-item{
    margin: 1rem;
    padding-bottom: 1rem;
    /*color: #7e8793;*/
    text-decoration: none;
    border-bottom: 2px solid gainsboro;
  }

  .car-item .text{
    width: 100%;
    margin-left: 2rem;
  }
  .car-item > img{
    /*float: left;*/
    /*margin: 0;*/
    /*width: 200px;*/
    height: 40px;
    width: 30px;
    border-radius: 0.3rem;
    float: left;
    border-bottom: 3px solid dodgerblue;
  }
</style>
