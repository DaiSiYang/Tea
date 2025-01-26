<script setup>
import {GetUserId} from '@/API/user.js'
import {onMounted, ref} from 'vue'
import router from "@/router/index.js";
import {useUserStore} from '@/stores/user.js'

const userStore = useUserStore()
const list = ref([])
const username = ref('')
const id = ref(0)
const name = localStorage.getItem('username') || ''
const circleUrl = ref('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2LLW2ieE8Lo2me00dB41kO727aiOY6D1wQ&s')
/**
 * 获取用户信息
 */
onMounted(async () => {
  const res = await GetUserId(name)
  list.value = res.data
  username.value = list.value[0].username
  id.value = list.value[0].id
  userStore.updateId(id.value)
  // console.log(userStore.id)
})

// 登出操作
const logout = () => {
  localStorage.removeItem('username')// 移除本地存储中的用户名
  localStorage.removeItem('token')
  window.location.reload()  // 刷新页面
}
// 处理下拉框项的点击事件
const handleDropdownClick = (action) => {
  if (action === 'profile') {
    // 处理用户资料
    router.push('/home/user/Info')

  } else if (action === 'logout') {
    router.push('/home/user/Info')
    // 处理退出登录
    logout()

  }
}
</script>

<template>
  <div class="TagNav">
    <div class="img">
      <img alt="" src="../assets/Image/logo.png" srcset="">
      <h2>茗间拾光后台管理系统</h2>
    </div>
    <div class="user">
      <div class="user-img">

      </div>
      <div class="userinfo">
        <p class="user-name">
          <el-dropdown placement="bottom">
            <span>{{ username ? username : '未登录' }}</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="handleDropdownClick('profile')">用户资料</el-dropdown-item>
                <el-dropdown-item @click="handleDropdownClick('logout')">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </p>
        <el-avatar :size="50" :src="circleUrl" class="user-avatar"/>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.TagNav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: rgb(245, 239, 232);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .img {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-left: 20px;
    }

    h2 {
      margin-left: 10px;
    }
  }

  .user {
    display: flex;
    align-items: center;

    .userinfo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -150px;

      .user-name span {
        font-size: 20px;
      }

      .user-avatar {
        width: 40px;
        height: 40px;
        margin-left: 20px;
      }
    }
  }
}
</style>
