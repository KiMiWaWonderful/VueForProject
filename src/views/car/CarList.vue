<template>
  <div id="carlist">

    <div>
 <nav-bar class="carlist-nav-bar">
   <div slot="left" class="left"><i class="el-icon-arrow-left"></i></div>
   <div slot="center">车辆管理</div>
   <div slot="right" class="right">
     <el-dropdown trigger="click" @command="handleCommand">
       <span class="el-dropdown-link"><i class="el-icon-plus"></i></span>
       <el-dropdown-menu slot="dropdown">
<!--         <el-dropdown-item icon="el-icon-circle-plus-outline"  @click.native="addCarClick">添加车辆</el-dropdown-item>-->
<!--         <el-dropdown-item icon="el-icon-circle-plus-outline"  @click.native="addGroupClick">添加分组</el-dropdown-item>-->
         <el-dropdown-item icon="el-icon-circle-plus-outline"  command="addCarClick">添加车辆</el-dropdown-item>
         <el-dropdown-item icon="el-icon-circle-plus-outline"  command="addGroupClick">添加分组</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
   </div>
 </nav-bar>
    </div>

  <div class="carlist-input">
    <form action="" method="">
      <input type="text" name="fname" />
<!--      <button>搜索</button>-->
      <i class="el-icon-search"></i>
<!--      Last name: <input type="text" name="lname" />-->
<!--      <input type="submit" value="Submit" />-->
    </form>
  </div>
    <tab-control class="tab-control"
                 :titles="['全部','分组']">
    </tab-control>


  </div>


</template>


<script>

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  export default {
    name: "CarList",
    components: {
      NavBar,
      TabControl
    },
    methods: {
      addCarClick(){
        console.log(addCarClick)
      },
      // addGroupClick(){
      //   console.log(addGroupClick)
      //   return this.$router.replace('/car/add_group')
      // }
      handleCommand(command){
        if(command == 'addCarClick'){
          // console.log("addCarClick")
          return this.$router.replace('/car/add_car')
        }else if(command == 'addGroupClick'){
          // console.log("addGroupClick")
          return this.$router.replace('/car/add_group')
        }
      }

    }
  }
</script>

<style scoped>

  .carlist-nav-bar{
    background-color: cornflowerblue;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    /*padding-bottom: 40px;*/
  }

  .carlist-nav-bar .left{
    padding-top: 6px;
    size: 3px;
  }

  .carlist-nav-bar .right{
    padding-top: 6px;
    size: 3px;
  }

  .carlist-nav-bar .right i{
    color: white;
  }

  .carlist-input {
    padding-top: 55px;
    padding-bottom: 30px;
    background-color: cornflowerblue;
  }

  .carlist-input form {
    background: white;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    /*line-height: 1.5rem;*/
    border-radius: 2.5rem;
    /*border:1px solid deepskyblue;*/
  }

  .carlist-input form input {
    /*height: 70%;*/
    width: 80%;
    border: none;
    color: black;
    font-size: 1.4rem;
    outline: none;
    margin-left: 14px;
    /*margin-top: 3px;*/
    margin-bottom: 3px;
    line-height: 2.2px;
    margin-top: 2px;
  }

  .carlist-input form button {
    font-size: 1.1rem;
    color: black;
    font-weight: lighter;
    border: none;
    background: none;
    /*margin-top: 1rem;*/
    /*padding-bottom: 1rem;*/
  }


</style>
