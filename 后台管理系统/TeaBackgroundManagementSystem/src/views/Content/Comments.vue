<script setup>
import {ArrowRight, Plus} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";
import {addComments, getComments} from "@/API/content.js";
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";

const route = useRoute()
const id = route.params.id
const list = ref([])
const dialogVisible = ref(false)

// 表单数据
const formData = ref({
  text: '',
  userId: '',
  avatarUrl: '',
  name: '',
  hot_id: route.params.id
})

// 表单验证规则
const rules = {
  text: [{required: true, message: '请输入评论内容', trigger: 'blur'}],
  name: [{required: true, message: '请输入用户昵称', trigger: 'blur'}],
  avatarUrl: [{required: true, message: '请输入头像地址', trigger: 'blur'}]
}

// 获取评论列表
const getList = async () => {
  list.value = await getComments(id)
}

// 添加评论
const handleAdd = async () => {
  try {
    await addComments(formData.value)
    ElMessage.success('添加成功')
    dialogVisible.value = false
    await getList()
  } catch (error) {
    ElMessage.error('添加失败')
  }
}

// 重置表单
const resetForm = () => {
  formData.value = {
    text: '',
    userId: '',
    avatarUrl: '',
    name: ''
  }
}
/**
 * 图片加载失败
 * @param e
 */
const handleImgError = (e) => {
  e.target.src = 'https://i-blog.csdnimg.cn/blog_migrate/a4fa5161369727154bc3a7d1c52bb9c0.png'
}
list.value = list.value.map(item => ({
  ...item,
  avatarUrl: item?.avatarUrl || '/assets/default-avatar.png'
}));
onMounted(() => {
  getList()
})
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home' }">内容管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/home/Content/Essay' }">文章管理</el-breadcrumb-item>
    <el-breadcrumb-item>评论管理</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="comments-container">
    <!-- 添加评论按钮 -->
    <div class="operation-bar">
      <el-button class="add-button" type="primary" @click="dialogVisible = true">
        <el-icon>
          <Plus/>
        </el-icon>
        添加评论
      </el-button>
    </div>

    <div v-if="list.length > 0" class="comments-list">
      <div v-for="item in list" :key="item.id" class="comment-item">
        <div class="comment-header">
          <div class="user-info">
            <el-avatar :size="40" :src="item.avatarUrl" @error="handleImgError"/>
            <span class="nickname">{{ item.name }}</span>
          </div>
          <span class="create-time">{{ new Date(item.createTime).toLocaleString() }}</span>
        </div>
        <div class="comment-content">
          {{ item.text }}
        </div>
      </div>
    </div>

    <div v-else class="empty-container">
      <div class="empty-text">
        <div class="title">暂无评论</div>
        <div class="desc">还没有任何评论哦</div>
      </div>
    </div>
  </div>

  <!-- 添加评论对话框 -->
  <el-dialog
      v-model="dialogVisible"
      :close-on-click-modal="false"
      title="添加评论"
      width="500px"
      @closed="resetForm"
  >
    <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-width="80px"
    >
      <el-form-item label="评论内容" prop="text">
        <el-input
            v-model="formData.text"
            :rows="4"
            placeholder="请输入评论内容"
            type="textarea"
        />
      </el-form-item>
      <el-form-item label="用户昵称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入用户昵称"/>
      </el-form-item>
      <el-form-item label="头像地址" prop="avatarUrl">
        <el-input v-model="formData.avatarUrl" placeholder="请输入头像地址"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
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

.comments-container {
  padding: 20px;
  margin-top: 80px;

  .comments-list {
    .comment-item {
      background-color: #fff;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);

      .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;

          .nickname {
            color: #795548;
            font-weight: 500;
          }
        }

        .create-time {
          color: #8d6e63;
          font-size: 14px;
        }
      }

      .comment-content {
        color: #5d4037;
        line-height: 1.6;
        padding-left: 52px;
      }
    }
  }
}

.operation-bar {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;

  .add-button {
    background-color: #795548;
    border-color: #795548;

    &:hover {
      background-color: #6d4c41;
      border-color: #6d4c41;
    }

    .el-icon {
      margin-right: 4px;
    }
  }
}

:deep(.el-dialog) {
  border-radius: 8px;

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

:deep(.el-form-item__label) {
  color: #795548;
  font-weight: 500;
}

.dialog-footer {
  text-align: right;
}
</style>
