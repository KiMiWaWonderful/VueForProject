<template>
  <div class="add-group">

    <div class="add-group-navbar">
      <nav-bar>
        <div slot="left"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">添加分组</div>
      </nav-bar>
    </div>

    <div class="add-group-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分组名称" prop="carGroupName">
          <el-input v-model="ruleForm.carGroupName"></el-input>
        </el-form-item>
        <el-form-item label="分组备注" prop="carGroupDesc">
          <el-input type="textarea" v-model="ruleForm.carGroupDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name : 'AddCroup',
    components :{
      NavBar
    },
    data() {
      return {
        ruleForm: {
          carGroupName : '',
          carGroupDesc : ''
        },
        rules:{
          carGroupName: [
            {required: true, message:'请输入分组名称', trigger: 'blur'},
          ],
          carGroupDesc: [
            {trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .add-group-navbar{
    background-color: cornflowerblue;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    /*padding-bottom: 40px;*/
  }

  .demo-ruleForm {
    padding-top: 70px;
    padding-right: 20px;
    display: flow;
  }
</style>
