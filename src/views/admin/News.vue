<template>
  <div class="news-container">
    <el-card>
      <div slot="header">
        <span>页面管理</span>
      </div>
      <!-- 新增按钮 -->
      <el-button type="primary" @click="addVisible = true" style="margin-bottom: 20px">新增新闻</el-button>
      <!-- 表格 -->
      <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="新闻ID" width="100"> </el-table-column>
        <el-table-column prop="pic" label="封面"
          ><template v-slot="">
            <div @click="previewVisible = true" class="pre-pic"><img src="../../assets/f7b469124030ece113ae20d65f81ba71.png" alt="" /></div>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="标题" width="400"> </el-table-column>
        <el-table-column prop="num" label="来源" width="140"> </el-table-column>
        <el-table-column prop="num" label="时间" width="140"> </el-table-column>
        <el-table-column prop="num" label="超链接" width="300"> </el-table-column>
        <el-table-column label="操作" width="200"
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
    <el-dialog title="编辑新闻" :visible.sync="editVisible" width="40%">
      <el-form ref="editForm" :model="editForm" label-width="100px">
        <el-form-item label="新闻标题："> <el-input placeholder="请输入新闻标题" v-model="editForm.title"></el-input> </el-form-item>
        <el-form-item label="新闻来源："> <el-input placeholder="请输入新闻来源" v-model="editForm.origin"></el-input> </el-form-item>
        <el-form-item label="新闻日期："> <el-input placeholder="请输入新闻日期" v-model="editForm.time"></el-input> </el-form-item>
        <el-form-item label="新闻链接："> <el-input placeholder="请输入新闻链接" v-model="editForm.link"></el-input> </el-form-item
      ></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog title="新增新闻" :visible.sync="addVisible" width="40%">
      <el-form ref="addForm" :model="addForm" label-width="100px">
        <el-form-item label="新闻标题："> <el-input placeholder="请输入新闻标题" v-model="addForm.title"></el-input> </el-form-item>
        <el-form-item label="新闻来源："> <el-input placeholder="请输入新闻来源" v-model="addForm.origin"></el-input> </el-form-item>
        <el-form-item label="新闻日期："> <el-input placeholder="请输入新闻日期" v-model="addForm.time"></el-input> </el-form-item>
        <el-form-item label="新闻链接："> <el-input placeholder="请输入新闻链接" v-model="addForm.link"></el-input> </el-form-item
      ></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'News',
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
      addVisible: false,
      editForm: {},
      addForm: {
        title: 'news title',
        origin: 'news origin',
        time: 'news time',
        link: 'news link'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-container {
  .pre-pic {
    cursor: pointer;
    img {
      width: 200px;
    }
  }
}
</style>
