<template>
  <div id="profile" class="wrapper">

    <div class="profile-nav-bar">
      <nav-bar class="profile-nav">
        <div slot="left">我的</div>
        <div slot="right">设置</div>
      </nav-bar>
    </div>

<!--    <div class="profile-head">-->
<!--      <a href="" class="profile-item flex" >-->
<!--        <img src="../../assets/img/profile/man_image.svg">-->
<!--        <div class="my_name text">-->
<!--          KiMiWaWonderful-->
<!--        </div>-->
<!--      </a>-->
<!--    </div>-->

    <div class="profile-head">
      <a href="" class="flex" >
        <img src="../../assets/img/profile/man_image.svg">
        <div class="name">
          KiMiWaWonderful
        </div>
      </a>
    </div>

    <div class="profile-list">
      <ul>

<!--        <li v-for="item in profile_items">-->
<!--          <div class="my_car text profile-item" id="profile-item">-->
<!--            {{item.name}}-->
<!--            <span class="msg">{{item.msg}}</span>-->
<!--            <span><img :src="item.img"></span>-->
<!--          </div>-->
<!--        </li>-->

        <li v-for="item in profile_items">
          <div class="profile-item flex" id="profile-item"
                @click="profileItemClick(item.id)">
            <span>{{item.name}}</span>
            <span class="msg">{{item.msg}}</span>
<!--            <span><img :src="item.img"></span>-->
            <span><img src="../../assets/img/profile/arrow_left.svg"></span>
          </div>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Profile",
    components: {
      NavBar
    },
    data(){
      return {
        profile_items:[
            {
              "id" : 0,
          "name" : "我的车辆",
          "msg" : "添加车辆信息",
          "img" : "../../assets/img/profile/arrow_left.svg"
        },
          {
            "id" : 1,
            "name" : "围栏管理",
            "msg" : "添加围栏信息",
            "img" : "../../assets/img/profile/arrow_left.svg"
          },
          {
            "id" : 2,
            "name" : "账号管理",
            "msg" : "",
            "img" : "../../assets/img/profile/arrow_left.svg"
          },
          {
            "id" : 3,
            "name" : "我的反馈",
            "msg" : "",
            "img" : "../../assets/img/profile/arrow_left.svg"
          },
          // {
          //   "name" : "我的评论",
          //   "msg" : "",
          //   "img" : "../../assets/img/profile/arrow_left.svg"
          // },
          {
            "id" : 4,
            "name" : "我的活动",
            "msg" : "发现更多活动",
            "img" : "../../../assets/img/profile/arrow_left.svg"
          },
          {
            "id" : 5,
            "name" : "设置",
            "msg" : "",
            "img" : "../../../assets/img/profile/arrow_left.svg"
          }]
      }
    },
    methods: {
      profileItemClick(id){
        switch (id) {
          case 0:
            return this.$router.replace('/car/car_list')
        }

        //console.log(id)
      }
    }
    // created() {
    //   fetch('http://localhost:63342/demo/secondtry/src/api/profile_item.json')
    //       .then(function (res) {
    //         return res.json()
    //       }).then(function (data) {
    //
    //   })
    // }
  }

  // const app = new Vue({
  //   el: '#profile-item',
  //   data:{
  //     my_car:'我的车辆'
  //   }
  // })
</script>

<style scoped>

  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /*#profile{*/
  /*  height: 250vh;*/
  /*  !*position: relative;*!*/
  /*  !*position: relative;*!*/
  /*}*/

  .profile-nav{
    background-color: cornflowerblue;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    /*padding-bottom: 20px;*/
  }

  .profile-nav-bar {
    padding-bottom: 40px;
  }

  .profile-head{
    /*background-color: cornflowerblue;*/
  }

  .profile-list {
    margin: 0;
    padding: 0;
  }

  /*.profile-item{*/
  /*  margin: 1rem;*/
  /*  padding-bottom: 1rem;*/
  /*  color: #7e8793;*/
  /*  text-decoration: none;*/
  /*  border-bottom: 2px solid #f5f8f9;*/
  /*}*/

  /*.profile-item > img {*/
  /*  height: 40px;*/
  /*  !*width: 10px;*!*/
  /*  border-radius: 40px;*/
  /*  padding-right: 6px;*/
  /*}*/

  /*.profile-item .text{*/
  /*  width: 100%;*/
  /*  margin-left: 2rem;*/
  /*  color: #333;*/
  /*  font-size: 1.5rem;*/
  /*  margin: 0.2rem 0;*/
  /*}*/

  /*.profile-head .profile-item .my_name{*/
  /*  color: #333;*/
  /*  font-size: 1.9rem;*/
  /*}*/

  /*.profile-list .my_car{*/
  /*  color: #333;*/
  /*  font-size: 1.5rem;*/
  /*  margin: 0.2rem 0;*/
  /*}*/

  .profile-head {
    padding-top: 30px;
    padding-bottom: 10px;
  }

  .profile-head img {
    height: 40px;
    /*width: 10px;*/
    /*border-radius: 40px;*/
    /*padding-right: 6px;*/
    padding-left: 20px;
  }

  .profile-head .name {
    color: #333;
    font-size: 1.9rem;
    padding-right: 20px;
  }

  .profile-item {
    margin: 1rem;
    padding-bottom: 1rem;
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #f5f8f9;
    font-size: 1.1rem;
    line-height: 1.5px;
  }

  .profile-item .msg{
    color: #7e8793;
    font-size: 0.9rem;
    /*text-align: right;*/
    /*position: relative;*/
    /*right: 1px;*/
    padding-left: 160px;
  }

  .profile-item img {
    padding-left: 1px;
  }
</style>
