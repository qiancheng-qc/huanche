<template>
  <div class="home-container">
    <div class="banner">
      <img src="../../assets/f7b469124030ece113ae20d65f81ba71.png" alt="" />
      <div class="center">
        <div class="c-title">电动车换电时代</div>
        <div class="download">
          <div class="d-content">
            <div class="d download-mp">
              <div class="download-logo">
                <img src="../../assets/weixinxiaochengxu.png" alt="" />
              </div>
              <p>微信小程序</p>
            </div>
            <div class="d download-ios">
              <div class="download-logo">
                <img src="../../assets/ios.png" alt="" />
              </div>
              <p>IOS下载</p>
            </div>
            <div class="d download-android">
              <div class="download-logo">
                <img src="../../assets/android-fill.png" alt="" />
              </div>
              <p>Android下载</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>

<style lang="scss" scoped>
.home-container {
  .banner {
    position: relative;
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .c-title {
        color: #fff;
        font-size: 40px;
        text-align: center;
        margin-bottom: 40px;
      }
      .download {
        .d-content {
          display: flex;
          justify-content: space-between;
          width: 450px;
          .d {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .download-logo {
              margin-bottom: 20px;
              padding: 6px;
              background-color: #fff;
              width: 50px;
              height: 50px;
              border-radius: 10px;
              cursor: pointer;
              img {
                width: 100%;
              }
            }
            p {
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
