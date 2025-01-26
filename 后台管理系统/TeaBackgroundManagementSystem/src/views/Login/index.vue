<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {Login} from '@/API/LoginApi.js'
import router from "@/router/index.js";
import {useUserStore} from '@/stores/user.js'
import {Lock, User} from '@element-plus/icons-vue'

// 用户名
const username = ref('DaiSY')
// 密码
const password = ref('051223Dsy')
const loading = ref(false)
const userStore = useUserStore()
/**
 * 登入函数
 * @param event
 * @returns {Promise<void>}
 */
const login = async (event) => {
  // 阻止表单默认提交
  event.preventDefault();
  // 判断用户名是否为空
  if (username.value === '') {
    ElMessage.error('用户名不能为空')
    return
  }
  // 判断密码是否为空
  if (password.value === '') {
    ElMessage.error('密码不能为空')
    return
  }
  // 判断用户名和密码是否为空
  if (username.value === '' && password.value === '') {
    ElMessage.error('用户名和密码不能为空')
    return
  }

  loading.value = true
  try {
    // 获取token
    const res = await Login(username.value, password.value)
    console.log(res)

    if (res.code >= 200 && res.code < 300) {
      ElMessage.success("登录成功")
      localStorage.setItem('token', res.data)
      localStorage.setItem('username', username.value)
      setTimeout(() => {
        router.push('/home')
      }, 1000)
    } else {
      ElMessage.error("用户名或密码错误")
    }
  } catch (error) {
    ElMessage.error("登录失败，请稍后重试")
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="header">
        <img alt="Logo" class="logo" src="../../assets/Image/logo.png">
        <h1>茗间拾光管理系统</h1>
      </div>

      <form class="login-form" @submit.prevent="login">
        <el-input
            v-model="username"
            :prefix-icon="User"
            class="form-input"
            placeholder="请输入用户名"
        />
        <el-input
            v-model="password"
            :prefix-icon="Lock"
            class="form-input"
            placeholder="请输入密码"
            show-password
            type="password"
        />
        <el-button
            :loading="loading"
            class="submit-btn"
            native-type="submit"
            type="primary"
        >
          登录
        </el-button>
        <div class="register-link">
          还没有账号？
          <router-link to="/register">立即注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 确保html和body没有边距和内边距 */
:root, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f5efe8 0%, #e8d9d1 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .login-box {
    width: 400px;
    padding: 40px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;

      .logo {
        width: 50px;
        height: 50px;
        margin-right: 16px;
      }

      h1 {
        font-size: 24px;
        color: #5d4037;
        font-weight: 600;
      }
    }

    .login-form {
      .form-input {
        margin-bottom: 20px;

        :deep(.el-input__wrapper) {
          box-shadow: none;
          border: 1px solid #bcaaa4;
          border-radius: 8px;
          padding: 12px;
          background-color: #fff;
          transition: all 0.3s ease;

          &:hover {
            border-color: #8d6e63;
          }

          &.is-focus {
            border-color: #6d4c41;
            box-shadow: 0 0 0 1px #6d4c41;
          }
        }

        :deep(.el-input__prefix-inner) {
          color: #8d6e63;
        }
      }

      .submit-btn {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        background-color: #795548;
        border-color: #795548;

        &:hover {
          background-color: #6d4c41;
          border-color: #6d4c41;
        }

        &:active {
          background-color: #5d4037;
          border-color: #5d4037;
        }
      }

      .register-link {
        text-align: center;
        font-size: 14px;
        color: #795548;

        a {
          color: #6d4c41;
          text-decoration: none;
          font-weight: 500;
          margin-left: 4px;

          &:hover {
            color: #5d4037;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
