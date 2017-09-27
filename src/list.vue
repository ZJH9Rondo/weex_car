<template>
  <div @androidback='back' @click="update">
    <navbar></navbar>
    <list class="bui-list car-list">
      <cell class="bui-cell" v-for="item in listData" :key="item">
        <div class="bui-list-main">
          {{item.title}}
        </div>
        <div class="bui-list-right">

        </div>
      </cell>
    </list>             
    <tabbar :chooseItem="chooseItem"></tabbar>
  </div>
</template>

<style scoped>
  .car-list{
    top: 100;
  }
</style>
<style lang="sass" src="bui-weex/src/css/buiweex.scss">
</style>

<script>
import Navbar from '../components/navbar.vue'
import Tabbar from '../components/tabbar.vue'
import Buiweex from 'bui-weex'

export default {
  name: 'list',
  components: {Navbar,Tabbar},
  data () {
      return {
        listData: [{
          title: '保时捷'
        },{
          title: '法拉利'
        },{
          title: '兰博基尼'
        },{
          title: '柯尼塞格'
        }],
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