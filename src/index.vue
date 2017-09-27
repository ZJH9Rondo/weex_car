<template>
  <div @androidback='back' @click="update">
    <navbar></navbar>
    <div class="sign-page">
        <div class="page-title">
          <text class="title">登录</text>
        </div>
        <div class="input-item">
          <span>用户名:</span>
          <input class="sign-input" type="text" placeholder="账号"></input>          
        </div>
        <div class="input-item">
          <span>密码:</span>
          <input class="sign-input" type="password" placeholder="密码"></input>
        </div>
        <bui-button class="sign-button" radius="10px"　type="success" value="登录"></bui-button>
    </div>
    <tabbar :chooseItem="chooseItem"></tabbar>
  </div>
</template>

<style scoped>
  .sign-page{
    width: 600px;
    top: 200px;
    left: 75px;
    justify-content: center;
    align-items: center;
  }
  .page-title{
    justify-content: center;
    width: 600px;
    height: 88px;
  }
  .title{
    font-size: 50px;
    color: #cccccc;
  }
  .sign-input{
    flex: 1;
    font-size: 36px;
    width: 600px;
  }
  .input-item{
    display: flex;
    width: 600px;
    height: 200px;
  }
  .sign-button{
    flex: 1;
    width: 600px;
    margin-top: 20px;
  }
</style>
<style lang="sass" src="bui-weex/src/css/buiweex.scss">
</style>

<script>
import Navbar from '../components/navbar.vue'
import Tabbar from '../components/tabbar.vue'
import Buiweex from 'bui-weex'

export default {
  name: 'app',
  components: {
    Navbar,
    Tabbar,
    'bui-button': Buiweex.buiButton
  },
  data () {
      return {
        chooseItem: 0
      }
    },
    methods: {
      update: (e) => {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
       back: () => {
      this.$router.back()
      }
    }
  }
</script>