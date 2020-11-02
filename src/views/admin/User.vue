<template>
  <div class="user-container">
    <el-card
      ><div slot="header">
        <span>用户管理</span>
      </div>
      <!-- 新增按钮 -->
      <el-button type="primary" @click="addVisible = true" style="margin-bottom: 20px">新增用户</el-button>
      <!-- 表格 -->
      <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="用户ID" width="200"> </el-table-column>
        <el-table-column prop="num" label="用户名"> </el-table-column>
        <el-table-column prop="num" label="状态" width="200"> </el-table-column>
        <el-table-column prop="num" label="时间" width="200"> </el-table-column>
        <el-table-column label="操作" width="400"
          ><template v-slot="">
            <el-button type="primary" @click="editVisible = true">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template></el-table-column
        >
      </el-table></el-card
    >
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      tableData: [
        {
          id: '1',
          pic: '图片',
          num: '1'
        },
        {
          id: '2',
          pic: '图片',
          num: '2'
        },
        {
          id: '3',
          pic: '图片',
          num: '3'
        },
        {
          id: '4',
          pic: '图片',
          num: '4'
        },
        {
          id: '5',
          pic: '图片',
          num: '5'
        }
      ],
      previewVisible: false,
      editVisible: false,
      addVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.user-container {
  .pre-pic {
    cursor: pointer;
    img {
      width: 200px;
    }
  }
}
</style>
