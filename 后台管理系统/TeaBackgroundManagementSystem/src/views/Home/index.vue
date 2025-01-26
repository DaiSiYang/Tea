<script setup>
import {ref} from 'vue';
import Nav from "@/components/Nav.vue";

const activeMenu = ref(''); // 控制手风琴的展开
</script>

<template>
  <Nav/>
  <div class="main-container">
    <el-menu
        :default-active="activeMenu"
        active-text-color="#409eff"
        background-color="#eee3d7"
        class="el-menu-vertical-demo"
        router
        text-color="#4D4D4D"
        unique-opened
    >
      <!-- 用户管理 -->
      <el-sub-menu index="1">
        <template #title>
          <span>用户信息</span>
        </template>
        <el-menu-item class="textColor" index="/home/user/Alluser">用户管理</el-menu-item>
        <el-menu-item index="/home/user/Info">个人资料设置</el-menu-item>
      </el-sub-menu>
      <!-- 内容管理 -->

      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-document"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/Content/Essay">文章管理</el-menu-item>
        <el-menu-item index="/home/Content/Commodity">商品管理</el-menu-item>
        <el-menu-item index="/home/Content/classify">分类管理</el-menu-item>
      </el-sub-menu>

    </el-menu>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.main-container {
  padding-top: 50px; // 为顶部导航留出空间
  min-height: 100vh;
  background-color: rgb(245, 239, 232);
}

.el-menu-vertical-demo {
  width: 14%;
  height: calc(100vh - 50px); // 减去顶部导航的高度
  background-color: rgb(245, 239, 232);
  border-right: 2px solid #FFFFFF;
  position: fixed;
  top: 50px; // 与顶部导航对齐
  left: 0;
  z-index: 1000;
  overflow-y: auto; // 内容过多时可滚动
}

.content {
  width: 86%;
  margin-left: 14%;
  min-height: calc(100vh - 50px); // 减去顶部导航的高度
  background-color: rgb(245, 239, 232);
}

.textColor {
  color: #4D4D4D;
}

.el-menu-vertical-demo .el-menu-item {
  color: #4D4D4D;
}
</style>
