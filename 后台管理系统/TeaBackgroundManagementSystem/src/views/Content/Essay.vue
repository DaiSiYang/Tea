<script setup>
import {ArrowRight, ChatLineRound, Share} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import {addHotList, deleteHot, getHot, updateHot} from '@/API/content.js'
import {ElLoading, ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const HotList = ref([])  // 热门文章
const dialogVisible = ref(false)
const router = useRouter()
const formData = ref({
  avatarUrl: '',
  name: '',
  actor: '',
  text: '',
  image1: '',
  image2: '',
  forward: 0,
  thumbs: 0,
})

const editDialogVisible = ref(false)
const editForm = ref({
  id: '',
  avatarUrl: '',
  name: '',
  actor: '',
  text: '',
  image1: '',
  image2: '',
})

const rules = {
  name: [
    {required: true, message: '请输入姓名', trigger: 'blur'},
  ],
  actor: [
    {required: true, message: '请输入职业', trigger: 'blur'},
  ],
  text: [
    {required: true, message: '请输入内容', trigger: 'blur'},
  ],
}

/**
 * 获取热门文章列表
 * @returns {Promise<void>}
 */
const getHotList = async () => {
  HotList.value = await getHot()
}
/**
 * 获取热门文章列表
 */
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  loading.close()
  await getHotList()
})
/**
 * 刷新
 */
const refresh = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 1000)
  getHotList()
}
/**
 * 删除热门文章
 * @param item
 * @returns {Promise<void>}
 */
const handleDelete = async (item) => {
  const id = item.id
  const msg = await deleteHot(id)
  ElMessage.success(msg)
  await getHotList()
}
/**
 * 重置表单
 */
const resetForm = () => {
  formData.value = {
    avatarUrl: '',
    name: '',
    actor: '',
    text: '',
    image1: '',
    image2: '',
    forward: 0,
    thumbs: 0,
  }
}
/**
 * 提交表单
 * @returns {Promise<void>}
 */
const handleSubmit = async () => {
  console.log(formData.value)
  try {
    await addHotList(formData.value)
    ElMessage.success('添加成功')
    dialogVisible.value = false
    resetForm()
    await getHotList()
    await getHotList() // 刷新列表
  } catch (error) {
    ElMessage.error('添加失败')
  }
}

// 处理编辑按钮点击
const handleEdit = (item) => {
  editForm.value = {...item}  // 复制当前项的数据到编辑表单
  editDialogVisible.value = true
  console.log(editForm.value)
}

// 处理编辑表单提交
const handleEditSubmit = async () => {
  try {
    await updateHot(editForm.value)
    ElMessage.success('更新成功')
    editDialogVisible.value = false
    await getHotList() // 刷新列表
  } catch (error) {
    ElMessage.error('更新失败')
  }
}
const commentsCount = (id) => {
  router.push({path: `/home/Content/Essay/comments/${id}`})
}
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home' }">内容管理</el-breadcrumb-item>
    <el-breadcrumb-item>文章管理</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="content-container">
    <el-card class="content-card">
      <template #header>
        <div class="card-header">
          <span>内容管理</span>
          <div class="header-btns">
            <el-button size="small" type="primary" @click="dialogVisible = true">新增内容</el-button>
            <el-button size="small" @click="refresh">刷新</el-button>
          </div>
        </div>
      </template>

      <div class="content-list">
        <div v-for="item in HotList" :key="item.id" class="content-item">
          <div class="item-header">
            <div class="author-info">
              <el-avatar :size="40" :src="item.avatarUrl"/>
              <div class="author-details">
                <div class="author-name">{{ item.name }}</div>
                <div class="author-role">{{ item.actor }}</div>
              </div>
            </div>
            <div class="operations">
              <el-button-group>
                <el-button size="small" type="primary" @click="handleEdit(item)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(item)">删除</el-button>
              </el-button-group>
            </div>
          </div>

          <div class="item-content">
            <p class="text">{{ item.text }}</p>
            <div v-if="item.image1 || item.image2" class="images">
              <el-image
                  v-if="item.image1"
                  :preview-src-list="[item.image1]"
                  :src="item.image1"
                  class="preview-image"
                  fit="cover"
              />
              <el-image
                  v-if="item.image2"
                  :preview-src-list="[item.image2]"
                  :src="item.image2"
                  class="preview-image"
                  fit="cover"
              />
            </div>
          </div>

          <div class="item-footer">
            <div class="interaction-item">
              <el-icon>
                <Share/>
              </el-icon>
              <span>{{ item.forward }}</span>
            </div>

            <div class="interaction-item">
              <el-icon>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"
                      fill="currentColor"/>
                </svg>
              </el-icon>
              <span>{{ item.thumbs }}</span>
            </div>
            <div class="interaction-item">
              <el-icon>
                <ChatLineRound @click="commentsCount(item.id)"/>
              </el-icon>
              <!--              <span>{{ item.comments || 0 }}</span>-->
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <el-dialog
      v-model="dialogVisible"
      :close-on-click-modal="false"
      destroy-on-close
      title="新增内容"
      width="500px"
  >
    <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        class="content-form"
        label-width="80px"
    >
      <el-form-item label="头像URL" prop="avatarUrl">
        <el-input v-model="formData.avatarUrl" placeholder="请输入头像图片地址"/>
      </el-form-item>

      <el-form-item label="姓名" prop="name" required>
        <el-input v-model="formData.name" placeholder="请输入姓名"/>
      </el-form-item>

      <el-form-item label="职业" prop="actor" required>
        <el-input v-model="formData.actor" placeholder="请输入职业"/>
      </el-form-item>

      <el-form-item label="图片URL1" prop="image1">
        <el-input v-model="formData.image1" placeholder="请输入图片1地址"/>
      </el-form-item>

      <el-form-item label="图片URL2" prop="image2">
        <el-input v-model="formData.image2" placeholder="请输入图片2地址"/>
      </el-form-item>

      <el-form-item label="内容" prop="text" required>
        <el-input
            v-model="formData.text"
            :rows="4"
            placeholder="请输入内容"
            resize="none"
            type="textarea"
        />
      </el-form-item>

      <div class="number-inputs">
        <el-form-item label="转发数">
          <el-input-number v-model="formData.forward" :min="0" controls-position="right"/>
        </el-form-item>

        <el-form-item label="点赞数">
          <el-input-number v-model="formData.thumbs" :min="0" controls-position="right"/>
        </el-form-item>
      </div>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 编辑内容对话框 -->
  <el-dialog
      v-model="editDialogVisible"
      :close-on-click-modal="false"
      destroy-on-close
      title="编辑内容"
      width="500px"
  >
    <el-form
        ref="editFormRef"
        :model="editForm"
        :rules="rules"
        class="content-form"
        label-width="80px"
    >
      <el-form-item label="头像URL" prop="avatarUrl">
        <el-input v-model="editForm.avatarUrl" placeholder="请输入头像图片地址"/>
      </el-form-item>

      <el-form-item label="姓名" prop="name" required>
        <el-input v-model="editForm.name" placeholder="请输入姓名"/>
      </el-form-item>

      <el-form-item label="职业" prop="actor" required>
        <el-input v-model="editForm.actor" placeholder="请输入职业"/>
      </el-form-item>

      <el-form-item label="图片URL1" prop="image1">
        <el-input v-model="editForm.image1" placeholder="请输入图片1地址"/>
      </el-form-item>

      <el-form-item label="图片URL2" prop="image2">
        <el-input v-model="editForm.image2" placeholder="请输入图片2地址"/>
      </el-form-item>

      <el-form-item label="内容" prop="text" required>
        <el-input
            v-model="editForm.text"
            :rows="4"
            placeholder="请输入内容"
            resize="none"
            type="textarea"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleEditSubmit">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
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

.content-container {
  padding: 20px;
  margin-top: 50px;

  .content-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-btns {
        display: flex;
        gap: 8px;
      }
    }
  }
}

.content-list {
  .content-item {
    padding: 20px;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      .author-info {
        display: flex;
        align-items: center;
        gap: 12px;

        .author-details {
          .author-name {
            font-weight: 500;
          }

          .author-role {
            font-size: 12px;
            color: #666;
          }
        }
      }
    }

    .item-content {
      margin-bottom: 16px;

      .text {
        margin-bottom: 12px;
        line-height: 1.5;
      }

      .images {
        display: flex;
        gap: 8px;

        .preview-image {
          width: 120px;
          height: 120px;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }

    .item-footer {
      display: flex;
      gap: 24px;

      .interaction-item {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #666;
        cursor: pointer;

        &:hover {
          color: #409eff;
        }

        .el-icon {
          font-size: 16px;
        }
      }
    }
  }
}

.content-form {
  .number-inputs {
    display: flex;
    gap: 20px;

    :deep(.el-form-item) {
      flex: 1;
      margin-bottom: 0;
    }
  }
}

:deep(.el-dialog) {
  border-radius: 8px;
  background-color: #fff;

  .el-dialog__header {
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid #e8d9d1;
    background-color: #f5efe8;
    border-radius: 8px 8px 0 0;

    .el-dialog__title {
      color: #5d4037;
      font-weight: 600;
    }
  }

  .el-dialog__body {
    padding: 20px;
  }

  .el-dialog__footer {
    padding: 20px;
    border-top: 1px solid #e8d9d1;
    background-color: #f5efe8;
    border-radius: 0 0 8px 8px;
  }
}

:deep(.el-input__wrapper), :deep(.el-textarea__wrapper) {
  box-shadow: none !important;
  border: 1px solid #bcaaa4;
  border-radius: 4px;
  background-color: #fff;

  &:hover {
    border-color: #8d6e63;
  }

  &.is-focus {
    border-color: #6d4c41;
    box-shadow: 0 0 0 1px #6d4c41 !important;
  }
}

:deep(.el-form-item__label) {
  color: #795548;
  font-weight: 500;
}

:deep(.el-input-number) {
  width: 100%;
}

.dialog-footer {
  text-align: right;
}
</style>
