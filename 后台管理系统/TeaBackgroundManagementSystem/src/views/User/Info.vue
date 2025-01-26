<script setup>
import {ArrowRight, Camera, Check, Edit, Lock, Message, Phone, Refresh, User} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import {GetUserId, updateUser} from '@/API/user.js'
import {ElMessage} from "element-plus";

/**
 * 用户信息
 * @type {Ref<UnwrapRef<{username: string, password: string, email: string, phone: string, bio: string, createTime: string, updateTime: string, image: string, userid: string}>, UnwrapRef<{username: string, password: string, email: string, phone: string, bio: string, createTime: string, updateTime: string, image: string, userid: string}> | {username: string, password: string, email: string, phone: string, bio: string, createTime: string, updateTime: string, image: string, userid: string}>}
 */
const user = ref({
  username: '',
  password: '',
  email: '',
  phone: '',
  bio: '',
  createTime: '',
  updateTime: '',
  image: '',
  id: '',
})
// 获取用户名
user.value.username = localStorage.getItem('username') || null


/**
 * 获取用户信息
 */
onMounted(async () => {
  console.log(user.value.id)
  const res = await GetUserId(user.value.username)
  console.log(res)
  res.data[0].createTime = new Date(res.data[0].createTime).toLocaleString()
  res.data[0].updateTime = new Date(res.data[0].updateTime).toLocaleString()
  user.value = res.data[0]
})
const resetForm = () => {
  console.log(user.value)
  user.value.username = ''
  user.value.password = ''
  user.value.email = ''
  user.value.phone = ''
  user.value.bio = ''
}
const saveUserInfo = async () => {
  try {
    console.log(user.value)
    const username = user.value.username
    const password = user.value.password
    const id = user.value.id
    const email = user.value.email
    const phone = user.value.phone
    const bio = user.value.bio

    await updateUser(
        id ? id : null,
        username ? username : null,
        password ? password : null,
        email ? email : null,
        phone ? phone : null,
        bio ? bio : null
    )


    ElMessage.success('保存成功')

  } catch (error) {
    ElMessage.error('保存失败')
  }
}

// 添加表单验证规则
const rules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
  ],
  email: [
    {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
  ],
  phone: [
    {pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'}
  ]
}
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home' }">用户信息</el-breadcrumb-item>
    <el-breadcrumb-item>个人信息设置</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="user-info-container">
    <el-card class="info-card">
      <template #header>
        <div class="card-header">
          <span class="title">个人信息设置</span>
          <div class="actions">
            <el-button :icon="Refresh" circle @click="resetForm"/>
            <el-button :icon="Check" circle type="primary" @click="saveUserInfo"/>
          </div>
        </div>
      </template>

      <div class="form-container">
        <el-form
            ref="userForm"
            :model="user"
            :rules="rules"
            class="user-form"
            label-position="top"
        >
          <div class="form-layout">
            <div class="left-section">
              <el-form-item class="avatar-section">
                <el-avatar
                    :size="120"
                    class="user-avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2LLW2ieE8Lo2me00dB41kO727aiOY6D1wQ&s"
                />
                <div class="upload-overlay">
                  <el-upload
                      :action="user.image"
                      :show-file-list="false"
                      class="avatar-uploader"
                  >
                    <el-button :icon="Camera" text type="primary">更换头像</el-button>
                  </el-upload>
                </div>
              </el-form-item>
            </div>

            <div class="right-section">
              <div class="form-row">
                <el-form-item
                    class="form-item-flex"
                    label="用户名"
                    prop="username"
                >
                  <el-input v-model="user.username" :prefix-icon="User"/>
                </el-form-item>

                <el-form-item
                    class="form-item-flex"
                    label="密码"
                    prop="password"
                >
                  <el-input
                      v-model="user.password"
                      :prefix-icon="Lock"
                      show-password
                      type="password"
                  />
                </el-form-item>
              </div>

              <div class="form-row">
                <el-form-item class="form-item-flex" label="邮箱" prop="email">
                  <el-input v-model="user.email" :prefix-icon="Message"/>
                </el-form-item>

                <el-form-item class="form-item-flex" label="电话" prop="phone">
                  <el-input v-model="user.phone" :prefix-icon="Phone"/>
                </el-form-item>
              </div>

              <el-form-item label="个人简介" prop="bio">
                <el-input
                    v-model="user.bio"
                    :prefix-icon="Edit"
                    :rows="4"
                    resize="none"
                    type="textarea"
                />
              </el-form-item>

              <div class="info-timestamps">
                <el-descriptions :column="2" border>
                  <el-descriptions-item label="创建时间">
                    {{ user.createTime }}
                  </el-descriptions-item>
                  <el-descriptions-item label="更新时间">
                    {{ user.updateTime }}
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.user-info-container {
  padding: 20px;
  padding-top: 80px;

  .info-card {
    max-width: 1000px;
    margin: 0 auto;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 18px;
        font-weight: 600;
        color: #6d4c41;
      }

      .actions {
        display: flex;
        gap: 8px;
      }
    }

    .form-container {
      padding: 30px 0;

      .form-layout {
        display: flex;
        gap: 60px;

        .left-section {
          flex: 0 0 200px;

          .avatar-section {
            text-align: center;
            position: relative;
            margin-left: 50px;

            .user-avatar {
              border: 4px solid #f5efe8;
              box-shadow: 0 2px 12px rgba(109, 76, 65, 0.1);
              transition: all 0.3s ease;

              &:hover {
                transform: scale(1.02);
              }
            }

            .upload-overlay {
              margin-top: 16px;
              opacity: 0.8;
              transition: opacity 0.3s;

              &:hover {
                opacity: 1;
              }
            }
          }
        }

        .right-section {
          flex: 1;

          .form-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;

            .form-item-flex {
              flex: 1;
            }
          }

          .info-timestamps {
            margin-top: 30px;

            :deep(.el-descriptions) {
              padding: 16px;
              background-color: #f5efe8;
              border-radius: 8px;

              .el-descriptions__label {
                color: #8d6e63;
                font-weight: 500;
              }

              .el-descriptions__content {
                color: #5d4037;
              }
            }
          }
        }
      }
    }
  }
}

:deep(.el-input__wrapper), :deep(.el-textarea__wrapper) {
  border: 1px solid #bcaaa4;
  background-color: #fff;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #8d6e63;
  }

  &.is-focus {
    border-color: #6d4c41;
    box-shadow: 0 0 0 1px #6d4c41 !important;
  }
}

:deep(.el-form-item__label) {
  font-weight: 500;
  color: #795548;
  margin-bottom: 8px;
}

:deep(.el-button--primary) {
  --el-button-bg-color: #795548;
  --el-button-border-color: #795548;
  --el-button-hover-bg-color: #6d4c41;
  --el-button-hover-border-color: #6d4c41;
  --el-button-active-bg-color: #5d4037;
  --el-button-active-border-color: #5d4037;
}

:deep(.el-button--text) {
  color: #795548;

  &:hover {
    color: #6d4c41;
  }
}

.breadcrumb-container {
  padding: 20px;
  margin-bottom: 20px;
  position: fixed;
  top: 50px;
  left: 14%;
  z-index: 1;
  background-color: #f5efe8;
  width: 86%;
  border-bottom: 1px solid #e8d9d1;

  :deep(.el-breadcrumb__item) {
    .el-breadcrumb__inner {
      color: #8d6e63;
      font-weight: 500;

      &:hover {
        color: #6d4c41;
      }

      &.is-link {
        color: #a1887f;
      }
    }

    &:last-child .el-breadcrumb__inner {
      color: #5d4037;
      font-weight: 600;
    }

    .el-breadcrumb__separator {
      color: #bcaaa4;
    }
  }
}

:deep(.el-input__prefix-inner) {
  color: #8d6e63;
}
</style>

