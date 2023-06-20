<template>
  <div class="login-page">
    <div class="form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
      >
        <h2 class="title">电商后台管理系统</h2>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { LoginData } from "@/types/login";
import { ElMessage, type FormInstance } from "element-plus";
import { login } from "@/request/api";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const rules = {
      username: [
        {
          required: true,
          message: "请输入你的用户名",
          trigger: "blur",
        },
        {
          min: 5,
          max: 10,
          message: "用户名长度为5-10个字符长度",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入你的密码",
          trigger: "blur",
        },
        {
          min: 5,
          max: 10,
          message: "密码长度为5-10个字符长度",
          trigger: "blur",
        },
      ],
    };
    const ruleFormRef = ref<FormInstance>();
    //登录
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm)
            .then((res) => {
              console.log(res);
              // 将token进行保存
              localStorage.setItem("token", res.data.token);
              // 跳转页面
              router.push("/");
              console.log(11111111, res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    //重置
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    const data = reactive(new LoginData());
    return {
      ...toRefs(data),
      rules,
      ruleFormRef,
      resetForm,
      submitForm,
    };
  },
});
</script>

<style scoped lang="less">
.login-page {
  height: 100%;
  width: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: 100% 100%;
  overflow: hidden;
  .demo-ruleForm {
    width: 500px;
    margin: 220px auto;
    /deep/ .el-form-item__label {
      padding-right: 20px;
      color: aliceblue;
    }
    /deep/ .el-input {
      width: 380px;
    }
    .el-button {
      width: 40%;
      &:nth-child(2) {
        margin-left: 10%;
      }
    }
    .title {
      font-size: 40px;
      font-weight: 700;
      margin-top: 10%;
      text-align: center;
      color: aliceblue;
      margin-bottom: 20px;
    }
  }
}
</style>
