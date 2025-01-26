<script setup>
import {onMounted, ref} from "vue";
import {deleteUser, getUserIfon, page, resetId, updateUser} from "@/API/user.js";
import {ArrowRight, Search, Refresh, Edit, Delete, User, Key, Plus} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

// 格式化日期为 yy-mm-dd 形式的函数
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear().toString(); // 取年份的后两位
  const month = (d.getMonth() + 1).toString().padStart(2, "0"); // 月份要加1，且补充两位
  const day = d.getDate().toString().padStart(2, "0"); // 日期补充两位
  return `${year}-${month}-${day}`;
};

const username = ref("");
const userid = ref("");
const size = ref("default"); // 控制日期选择器的大小
const selectedRange = ref([]); // 用于绑定日期范围选择器的值
const createTime = ref(""); // 改为 ref
const updateTime = ref(""); // 改为 ref
const list = ref([]); // 用于保存用户数据
const editDialogVisible = ref(false);  // 控制编辑对话框的显示与隐藏
const editForm = ref({id: '', username: '', password: ''});  // 编辑表单的数据


const total = ref(200);
const currentPage = ref(1);

const Select = async () => {
  // 获取开始日期和结束日期
  createTime.value = formatDate(selectedRange.value[0]);
  updateTime.value = formatDate(selectedRange.value[1]);

  try {
    // 调用接口并传入参数
    const data = await getUserIfon(
        username.value.trim() ? username.value : null, // 传递空值前先去掉空格
        userid.value.trim() ? userid.value : null,
        createTime.value ? createTime.value : null,
        updateTime.value ? updateTime.value : null
    );
    list.value = data; // 将数据赋值给 list
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    alert("获取用户数据失败，请稍后再试。");
  }
};
/**
 * 查询用户
 */
onMounted(async () => {
  try {
    // 初始加载时获取用户数据
    const data = await getUserIfon(
        username.value.trim() ? username.value : null,
        userid.value.trim() ? userid.value : null,
        createTime.value ? createTime.value : null,
        updateTime.value ? updateTime.value : null
    );
    list.value = data;
    console.log("初始用户数据:", list.value);
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    alert("初始加载用户数据失败，请稍后再试。");
  }
});
/**
 * 删除用户
 * @param id
 * @returns {Promise<void>}
 */
const deletes = async (id) => {
  try {
    // 删除前的确认提示
    const confirmDelete = confirm("确定删除该用户吗?");
    if (!confirmDelete) return; // 如果用户取消操作，直接返回

    // 调用删除接口
    await deleteUser(id);

    // 重新查询用户数据
    await Select();

    // 删除后重置 ID
    await resetId();
  } catch (error) {
    console.error("删除用户时发生错误:", error);
  }
};
/**
 * 分页查询
 * @param val
 * @returns {Promise<void>}
 */
const handleCurrentChange = async (val) => {
  currentPage.value = val;
  const res = await page(currentPage.value, 10);
  total.value = res.page;
  list.value = res.rows;

};
/**
 * 编辑用户信息
 * @param item
 */
const editUser = (item) => {
  editDialogVisible.value = true;
  editForm.value = {...item};
}
/**
 * 保存编辑后的用户信息
 */
const saveUserInfo = async () => {
  editDialogVisible.value = false;
  const username = editForm.value.username;
  const password = editForm.value.password;
  const id = editForm.value.id;
  const res = await updateUser(id, username, password)
  if (res.code >= 200 && res.code < 300) {
    await Select()
    ElMessage.success(`更新Id为${id}的数据成功`)
  } else {
    ElMessage.error("更新失败")
  }

}

const handleAvatarChange = (file) => {
  editForm.value.image = URL.createObjectURL(file.raw);
};

const resetForm = () => {
  username.value = ''
  userid.value = ''
  selectedRange.value = []
  Select()
}

</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home' }">用户信息</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="user-container">
    <el-card class="search-card">
      <el-form :inline="true" class="search-form">
        <el-form-item>
          <el-input
              v-model="username"
              clearable
              placeholder="请输入用户名"
              prefix-icon="User"
          />
        </el-form-item>
        <el-form-item>
          <el-input
              v-model="userid"
              clearable
              placeholder="请输入用户ID"
              prefix-icon="Key"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
              v-model="selectedRange"
              :size="size"
              end-placeholder="结束日期"
              start-placeholder="开始日期"
              type="daterange"
              value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="Select">查询</el-button>
          <el-button :icon="Refresh" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="table-card">
      <template #header>
        <div class="card-header">
          <span>用户列表</span>
          <el-button type="primary" :icon="Plus">新增用户</el-button>
        </div>
      </template>

      <el-table
          v-if="list.length > 0"
          :data="list"
          border
          stripe
          style="width: 100%"
      >
        <el-table-column type="index" label="序号" width="80" align="center"/>
        <el-table-column prop="username" label="用户名" align="center"/>
        <el-table-column prop="password" label="密码" align="center" show-overflow-tooltip/>
        <el-table-column label="创建时间" align="center">
          <template #default="scope">
            {{ formatDate(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center">
          <template #default="scope">
            {{ formatDate(scope.row.updateTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center" fixed="right">
          <template #default="scope">
            <el-button-group>
              <el-button
                  size="small"
                  type="primary"
                  :icon="Edit"
                  @click="editUser(scope.row)"
              >
                编辑
              </el-button>
              <el-button
                  size="small"
                  type="danger"
                  :icon="Delete"
                  @click="deletes(scope.row.id)"
              >
                删除
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>

      <el-empty v-else description="暂无数据"/>

      <div class="pagination">
        <el-pagination
            v-model:current-page="currentPage"
            :page-size="10"
            :total="total"
            background
            layout="prev, pager, next, total"
            @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>

  <!-- 编辑用户对话框 -->
  <el-dialog
      v-model="editDialogVisible"
      title="编辑用户信息"
      width="500px"
      destroy-on-close
  >
    <el-form :model="editForm" label-width="80px">
      <el-form-item label="ID">
        <el-input v-model="editForm.id" disabled/>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="editForm.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="editForm.password" type="password" show-password/>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="editDialogVisible = false">取消</el-button>
      <el-button type="primary" @click="saveUserInfo">保存</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.user-container {
  padding: 20px;
  padding-top: 80px;

  .search-card {
    margin-bottom: 20px;

    .search-form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      :deep(.el-form-item) {
        margin-bottom: 0;
        margin-right: 0;
      }

      :deep(.el-date-editor) {
        width: 320px;
      }

      :deep(.el-input) {
        width: 200px;
      }
    }
  }

  .table-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
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

:deep(.el-card) {
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  background-color: transparent;

  .el-card__header {
    border-bottom: 1px solid #ebeef5;
    padding: 15px 20px;
  }
}

:deep(.el-table) {
  border-radius: 8px;
  overflow: hidden;

  th.el-table__cell {
    background-color: #f5f7fa;
    color: #606266;
    font-weight: 600;
  }
}

:deep(.el-button-group) {
  .el-button {
    margin-left: 0 !important;
  }
}

:deep(.el-pagination.is-background) {
  .el-pagination__button {
    margin: 0 4px;
  }
}
</style>
