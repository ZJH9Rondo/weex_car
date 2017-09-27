<template>
  <div @androidback='back' @click="update">
    <navbar></navbar>
    <h1>这是登录页面</h1>
    <h1>这是登录页面</h1>               
    <h1>这是登录页面</h1>               
    <h1>这是登录页面</h1>               
    <h1>这是登录页面</h1>               
    <h1>这是登录页面</h1>               
    <h1>这是登录页面</h1>                                  
    <tabbar></tabbar>
  </div>
</template>


<style lang="sass" src="bui-weex/src/css/buiweex.scss">
</style>

<script>
import Navbar from '../components/navbar.vue'
import Tabbar from '../components/tabbar.vue'
import Buiweex from 'bui-weex'

export default {
  name: 'user',
  components: {Navbar,Tabbar},
  data () {
      return {
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