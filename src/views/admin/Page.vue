<template>
  <div class="page-container">
    <el-card>
      <div slot="header">
        <span>页面管理</span>
      </div>
      <!-- 选择框 按钮 -->
      <el-row>
        <el-col :span="21"
          ><span>切换页面：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option label="e换电" value="1"></el-option>
            <el-option label="超级电池" value="2"></el-option>
            <el-option label="智慧仓" value="3"></el-option> </el-select
        ></el-col>
        <el-col :span="3"><el-button type="primary" style="float: right" @click="addVisible = true">新增图片</el-button></el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="图片ID" width="200"> </el-table-column>
        <el-table-column prop="pic" label="缩略图"
          ><template v-slot="">
            <div @click="previewVisible = true" class="pre-pic"><img src="../../assets/f7b469124030ece113ae20d65f81ba71.png" alt="" /></div>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="位置" width="200"> </el-table-column>
        <el-table-column label="操作" width="400"
          ><template v-slot="">
            <el-button type="primary" @click="editVisible = true">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template></el-table-column
        >
      </el-table>
    </el-card>
    <!-- 图片预览 -->
    <el-dialog title="图片预览" :visible.sync="previewVisible" width="40%">
      <img src="../../assets/f7b469124030ece113ae20d65f81ba71.png" alt="" width="100%" />
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="编辑图片" :visible.sync="editVisible" width="40%">
      <p>图片</p>
      <el-button type="primary">重新上传</el-button>
      <span>重新上传会覆盖原有图片</span>
      <div>位置：<el-input placeholder="图片位置"></el-input></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog title="新增图片" :visible.sync="addVisible" width="40%">
      <span>切换页面：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option label="e换电" value="1"></el-option>
        <el-option label="超级电池" value="2"></el-option>
        <el-option label="智慧仓" value="3"></el-option>
      </el-select>
      <div>位置：<el-input placeholder="图片位置"></el-input></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      value: '1',
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
.page-container {
  .el-card {
    min-height: 800px;
    .el-select {
      margin: 0 100px 20px 20px;
    }
  }
  .pre-pic {
    cursor: pointer;
    img {
      width: 200px;
    }
  }
}
</style>
