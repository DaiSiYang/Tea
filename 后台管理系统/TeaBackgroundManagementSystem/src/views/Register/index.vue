<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {Register} from '@/API/LoginApi.js'
import router from "@/router/index.js";
import {Lock, User} from '@element-plus/icons-vue'

// 用户名
const username = ref('')
// 密码
const password = ref('')
// 确认密码
const confirmPassword = ref('')
// 用户名正则
const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/
// 密码正则
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,16}$/
const loading = ref(false)

/**
 * 注册接口
 * @returns {Promise<MessageHandler>}
 */
const register = async () => {
  if (!username.value) return ElMessage.error('用户名不能为空')
  if (!password.value) return ElMessage.error('密码不能为空')
  if (!confirmPassword.value) return ElMessage.error('确认密码不能为空')
  if (password.value !== confirmPassword.value) return ElMessage.error('两次密码不一致')
  if (!usernameRegex.test(username.value)) return ElMessage.error('用户名必须是4到16位的字母、数字或下划线！')
  if (!passwordRegex.test(password.value)) return ElMessage.error('密码必须包含字母和数字，并且长度为6到16个字符！')

  loading.value = true
  try {
    const res = await Register(username.value, password.value)
    if (res.code >= 200 && res.code < 300) {
      ElMessage.success(res.data)
      username.value = ''
      password.value = ''
      confirmPassword.value = ''
      setTimeout(() => {
        router.push('/login')
      }, 500)
    } else {
      ElMessage.error('用户名已存在')
    }
  } catch (error) {
    ElMessage.error('注册失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <div class="header">
        <img alt="Logo" class="logo" src="../../assets/Image/logo.png">
        <h1>茗间拾光管理系统</h1>
      </div>

      <form class="register-form" @submit.prevent="register">
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
        <el-input
            v-model="confirmPassword"
            :prefix-icon="Lock"
            class="form-input"
            placeholder="请确认密码"
            show-password
            type="password"
        />
        <el-button
            :loading="loading"
            class="submit-btn"
            native-type="submit"
            type="primary"
        >
          注册
        </el-button>
        <div class="login-link">
          已有账号？
          <router-link to="/login">立即登录</router-link>
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

.register-container {
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

  .register-box {
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

    .register-form {
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

      .login-link {
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

