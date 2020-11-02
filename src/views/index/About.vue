<template>
  <div class="container">
    <div class="about-us">
      <p class="title">关于我们</p>
      <p>关于我们</p>
    </div>
    <div class="news">
      <p class="title">热门新闻</p>
    </div>
    <div class="contact-us">
      <div class="title">联系方式</div>
      <div class="contact">
        <div class="site"></div>
        <div class="info">
          <div class="text">
            <p>官方邮箱</p>
            <span>XXX@XXX.com</span>
          </div>
          <div class="text">
            <p>服务热线</p>
            <span>XXXXXXXXXX</span>
          </div>
          <div class="text">
            <p>工作时间</p>
            <span>工作日周一到周五，9点-12点，13点到18点</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
}
.contact-us {
  .contact {
    display: flex;
    margin-bottom: 40px;
    .site {
      width: 50%;
      background-color: #ccc;
    }
    .info {
      width: 50%;
      .text {
        padding: 30px;
        margin-left: 30px;
        border-bottom: 1px solid #666;
        p {
          margin-bottom: 10px;
          font-size: 22px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
