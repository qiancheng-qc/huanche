<template>
  <el-container class="admin-container">
    <el-header>
      <div class="com">XXXX有限公司 后台管理</div>
      <router-link to="/">返回网站首页</router-link>
    </el-header>
    <el-container>
      <el-aside width="240px"
        ><el-menu default-active="1" background-color="#567" text-color="#fff">
          <el-menu-item index="1" @click="$router.push('/page')">
            <i class="el-icon-menu"></i>
            <span slot="title">页面管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('/user')">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push('/news')">
            <i class="el-icon-news"></i>
            <span slot="title">新闻管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="logout">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Admin',
  methods: {
    logout() {
      console.log('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-container {
  height: 100%;
}
.el-header {
  background-color: #374859;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  a {
    color: #fff;
    &:hover {
      color: #409eff;
    }
  }
}
.el-aside {
  background-color: #567;
}
.el-main {
  background-color: #eee;
}
</style>
