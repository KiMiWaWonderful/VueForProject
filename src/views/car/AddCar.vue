<template>
  <div class="add-car">
    <div class="add-car-navbar">
      <nav-bar>
        <div slot="left"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">添加车辆</div>
<!--        <div slot="right">保存</div>-->
      </nav-bar>
    </div>

<!--    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--      <el-form-item label="密码" prop="pass">-->
<!--        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="确认密码" prop="checkPass">-->
<!--        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="年龄" prop="age">-->
<!--        <el-input v-model.number="ruleForm.age"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->

    <div class="add-car-form">
<!--      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--        <el-form-item label="GPS编号" prop="GPS-number">-->
<!--          <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="车辆号码" prop="car-number">-->
<!--          <el-input v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="车辆型号" prop="car-type">-->
<!--          <el-input v-model.number="ruleForm.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="车辆分组" prop="car-group">-->
<!--          <el-input v-model.number="ruleForm.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="驾驶员" prop="car-driver">-->
<!--          <el-input v-model.number="ruleForm.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="超速设置" prop="overspeed-set">-->
<!--          <el-input v-model.number="ruleForm.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="备注" prop="car-remark">-->
<!--          <el-input v-model.number="ruleForm.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->


      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="GPS编号" prop="gpsNumber">
          <el-input v-model="ruleForm.gpsNumber"></el-input>
        </el-form-item>
        <el-form-item label="车牌号码" prop="carNumber">
          <el-input v-model="ruleForm.carNumber"></el-input>
        </el-form-item>
        <el-form-item label="车辆型号" prop="carType">
          <el-input v-model="ruleForm.carType"></el-input>
        </el-form-item>
        <el-form-item label="车辆分组" prop="carGroup">
          <el-select v-model="ruleForm.carGroup" placeholder="请选择车辆分组">
            <el-option label="分组一" value="shanghai"></el-option>
            <el-option label="分组二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="驾驶员" prop="carDriver">
          <el-input v-model="ruleForm.carDriver"></el-input>
        </el-form-item>
        <el-form-item label="超速设置" prop="carOverspeedSet">
          <el-input v-model="ruleForm.carOverspeedSet"></el-input>
        </el-form-item>
<!--        <el-form-item label="活动时间" required>-->
<!--          <el-col :span="11">-->
<!--            <el-form-item prop="date1">-->
<!--              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--          <el-col class="line" :span="2">-</el-col>-->
<!--          <el-col :span="11">-->
<!--            <el-form-item prop="date2">-->
<!--              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="即时配送" prop="delivery">-->
<!--          <el-switch v-model="ruleForm.delivery"></el-switch>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="活动性质" prop="type">-->
<!--          <el-checkbox-group v-model="ruleForm.type">-->
<!--            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--          </el-checkbox-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="特殊资源" prop="resource">-->
<!--          <el-radio-group v-model="ruleForm.resource">-->
<!--            <el-radio label="线上品牌商赞助"></el-radio>-->
<!--            <el-radio label="线下场地免费"></el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
        <el-form-item label="备注" prop="carDesc">
          <el-input type="textarea" v-model="ruleForm.carDesc"></el-input>
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
    name : "AddCar",
    components :{
      NavBar
    },
    data() {
      return {
        ruleForm: {
          gpsNumber: '',
          carNumber: '',
          carType: '',
          carGroup: '',
          carDriver: '',
          carOverspeedSet: '',
          carDesc: ''
        },
        rules: {
          gpsNumber: [
            { required: true, message: '请输入GPS编号', trigger: 'blur' },
          ],
          carNumber: [
            { required: true, message: '请输入车牌号码', trigger: 'change' }
          ],
          carType: [
            { required: true, message: '请输入车辆型号', trigger: 'change' }
          ],
          carGroup: [
            { required: true, message: '请选择车辆分组', trigger: 'change' }
          ],
          carDriver: [
            { required: true, message: '请输入驾驶员姓名', trigger: 'change' }
          ],
          carOverspeedSet: [
            { required:true, message: '请设置最大车速', trigger: 'change' }
          ],
          carDesc: [
            { required: false, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
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
    // data() {
    //   var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('年龄不能为空'));
    //     }
    //     // setTimeout(() => {
    //     //   if (!Number.isInteger(value)) {
    //     //     callback(new Error('请输入数字值'));
    //     //   } else {
    //     //     if (value < 18) {
    //     //       callback(new Error('必须年满18岁'));
    //     //     } else {
    //     //       callback();
    //     //     }
    //     //   }
    //     // }, 1000);
    //   };
    //   var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入密码'));
    //     } else {
    //       if (this.ruleForm.checkPass !== '') {
    //         this.$refs.ruleForm.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    //   var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请再次输入密码'));
    //     } else if (value !== this.ruleForm.pass) {
    //       callback(new Error('两次输入密码不一致!'));
    //     } else {
    //       callback();
    //     }
    //   };
    //   return {
    //     ruleForm: {
    //       pass: '',
    //       checkPass: '',
    //       age: ''
    //     },
    //     rules: {
    //       pass: [
    //         { validator: validatePass, trigger: 'blur' }
    //       ],
    //       checkPass: [
    //         { validator: validatePass2, trigger: 'blur' }
    //       ],
    //       age: [
    //         { validator: checkAge, trigger: 'blur' }
    //       ]
    //     }
    //   };
    // },
    // methods: {
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    // }
  }
</script>

<style scoped>
  .add-car-navbar{
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
