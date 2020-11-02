<template>
  <div class="home">
    <nav>
      <div class="container">
        <div class="logo">XX换电</div>
        <div class="nav">
          <ul>
            <li><router-link to="home">首页</router-link></li>
            <li><router-link to="change">e换电</router-link></li>
            <li><router-link to="battery">超级电池</router-link></li>
            <li><router-link to="wisdom">智慧仓</router-link></li>
            <li><router-link to="about">关于我们</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer>
      <div class="bottom-logo"><span>XX换电</span></div>
      <div class="bottom-word">XXXX有限公司 电话：1234567890 安徽省合肥市XXXXXXXXXX 备案号：XXXXXXXX</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 80px;
  background-color: #ccc;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .nav {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          padding: 0 20px;
          a {
            color: #fff;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
}
footer {
  .bottom-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #999;
  }
  .bottom-word {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #444;
    color: #aaa;
  }
}
</style>
