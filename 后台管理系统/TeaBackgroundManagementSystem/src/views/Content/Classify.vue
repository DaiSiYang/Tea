<script setup>

import {ArrowRight} from "@element-plus/icons-vue";
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item :to="{ path: '/home'  }">内容管理</el-breadcrumb-item>
    <el-breadcrumb-item>分类管理</el-breadcrumb-item>
  </el-breadcrumb>
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
</style>
