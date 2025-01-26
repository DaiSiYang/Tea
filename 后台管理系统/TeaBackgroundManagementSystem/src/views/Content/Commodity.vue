<script setup>
import {ArrowRight, Delete, Edit, Plus} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import {addRecommand, delRecommand, getRecommand, updateRecommand} from "@/API/content.js";
import {ElMessage, ElMessageBox} from "element-plus";

const list = ref([])
const dialogVisible = ref(false)
const editDialogVisible = ref(false)

// 表单数据
const formData = ref({
  text: '',
  price: '',
  url: ''
})

// 编辑表单数据
const editForm = ref({
  id: '',
  text: '',
  price: '',
  url: ''
})

// 表单验证规则
const rules = {
  text: [{required: true, message: '请输入商品名称', trigger: 'blur'}],
  price: [{required: true, message: '请输入商品价格', trigger: 'blur'}],
  url: [{required: true, message: '请输入商品图片地址', trigger: 'blur'}]
}

// 获取商品列表
const getList = async () => {
  try {
    list.value = await getRecommand()
    console.log('商品列表:', list.value)
  } catch (error) {
    console.error('获取商品列表失败:', error)
  }
}

// 编辑商品
const handleEdit = (item) => {
  editForm.value = {...item}
  editDialogVisible.value = true
}

// 删除商品
const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('确认删除该商品吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    console.log('删除商品ID：', id)
    await delRecommand(id)
    ElMessage.success('删除成功')
    await getList()
  } catch {
    // 取消删除
  }
}

// 重置表单
const resetForm = () => {
  formData.value = {
    text: '',
    price: '',
    url: ''
  }
}
/**
 * 更新商品
 * @returns {Promise<void>}
 */
const handleUpdate = async () => {
  try {
    await updateRecommand(editForm.value)
    ElMessage.success('更新成功')
    editDialogVisible.value = false
    await getList()
  } catch (error) {
    ElMessage.error('更新失败')
  }
}
const handleAdd = async () => {
  try {
    await addRecommand(formData.value)
    ElMessage.success('添加成功')
    dialogVisible.value = false
    await getList()
  } catch (error) {
    ElMessage.error('添加失败')
  }
}
onMounted(() => {
  getList()
})
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home' }">内容管理</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="commodity-container">
    <div class="operation-bar">
      <el-button class="add-button" type="primary" @click="dialogVisible = true">
        <el-icon>
          <Plus/>
        </el-icon>
        新增商品
      </el-button>
    </div>

    <div class="commodity-grid">
      <div v-for="item in list" :key="item.id" class="commodity-card">
        <div class="image-container">
          <img :alt="item.text" :src="item.url">
        </div>
        <div class="info-container">
          <div class="title">{{ item.text }}</div>
          <div class="price">¥ {{ item.price }}</div>
          <div class="time">
            <div class="time-item">
              <span class="label">创建时间：</span>
              <span>{{ new Date(item.createTime).toLocaleString() }}</span>
            </div>
            <div class="time-item">
              <span class="label">修改时间：</span>
              <span>{{ new Date(item.updateTime).toLocaleString() }}</span>
            </div>
          </div>
          <div class="actions">
            <el-button-group>
              <el-button size="small" type="primary" @click="handleEdit(item)">
                <el-icon>
                  <Edit/>
                </el-icon>
                编辑
              </el-button>
              <el-button size="small" type="danger" @click="handleDelete(item.id)">
                <el-icon>
                  <Delete/>
                </el-icon>
                删除
              </el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 新增商品对话框 -->
  <el-dialog
      v-model="dialogVisible"
      :close-on-click-modal="false"
      title="新增商品"
      width="500px"
      @closed="resetForm"
  >
    <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-width="80px"
    >
      <el-form-item label="商品名称" prop="text">
        <el-input v-model="formData.text" placeholder="请输入商品名称"/>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input-number v-model="formData.price" :min="0" :precision="2" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="商品图片" prop="url">
        <el-input v-model="formData.url" placeholder="请输入商品图片地址"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 编辑商品对话框 -->
  <el-dialog
      v-model="editDialogVisible"
      :close-on-click-modal="false"
      title="编辑商品"
      width="500px"
  >
    <el-form
        ref="editFormRef"
        :model="editForm"
        :rules="rules"
        label-width="80px"
    >
      <el-form-item label="商品名称" prop="text">
        <el-input v-model="editForm.text" placeholder="请输入商品名称"/>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input-number v-model="editForm.price" :min="0" :precision="2" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="商品图片" prop="url">
        <el-input v-model="editForm.url" placeholder="请输入商品图片地址"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleUpdate">确定</el-button>
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

.commodity-container {
  padding: 20px;
  margin-top: 80px;

  .operation-bar {
    margin-bottom: 20px;
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

  .commodity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    padding: 20px;

    .commodity-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid #e8d9d1;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
      }

      .image-container {
        width: 100%;
        height: 240px;
        overflow: hidden;
        background-color: #f5efe8;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

          &:hover {
            transform: scale(1.08);
          }
        }
      }

      .info-container {
        padding: 20px;
        position: relative;

        .title {
          font-size: 18px;
          font-weight: 600;
          color: #5d4037;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .price {
          font-size: 24px;
          color: #d32f2f;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .time {
          margin-bottom: 20px;

          .time-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 14px;
            color: #8d6e63;

            .label {
              color: #795548;
              font-weight: 500;
              margin-right: 8px;
              min-width: 80px;
            }
          }
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      }

      &:hover .actions {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

:deep(.el-button-group) {
  .el-button {
    border-radius: 6px;

    &.el-button--primary {
      background-color: #795548;
      border-color: #795548;

      &:hover {
        background-color: #6d4c41;
        border-color: #6d4c41;
      }
    }

    &.el-button--danger {
      &:hover {
        background-color: #c62828;
        border-color: #c62828;
      }
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
