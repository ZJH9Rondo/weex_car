<template>
  <div @androidback='back' @click="update">
    <navbar></navbar>
    <scroller class="scroller" :style="{height: scrollerHeight}">
      <div class="drive-title">
        <text class="title-text">出行登记</text>
      </div>
      <div class="car-card">
        <bui-image class="car-image" width="750px" height="500px" src="http://7xqqm5.com1.z0.glb.clouddn.com/FrmeLJ3gmSkSazVVMA2R3xjJcQLs"></bui-image>
      </div>
      <div class="drive-form">
        <input type="text" class="drive-input" placeholder="车牌号："></input>
      </div>
      <div class="drive-form">
        <input type="text" class="drive-input" placeholder="工号："></input>
      </div>
      <div class="drive-textarea">  
        <textarea class="textarea" cols="30" rows="10" placeholder="出行任务..."></textarea>
      </div>
      <div class="upload">
        <bui-button radius="10px" type="success" value="提交"></bui-button> 
      </div> 
    </scroller>     
    <tabbar :chooseItem="chooseItem"></tabbar>
  </div>
</template>


<style lang="sass" src="bui-weex/src/css/buiweex.scss">
</style>
<style scoped>
  .scroller{
    width: 750px;
    justify-content: center;
    top: 130px;
    flex-direction: column;
    justify-content: space-between;
  }
  .drive-title{
    width: 600px;
    height: 100px;
    left: 75px;
    padding-top: 30px;
  }
  .title-text{
    width: 600px;
    height: 60px;
    font-size: 60px;
    color: #cccccc;
    text-align: center;
  }
  .car-card{
    width: 650px;
    height: 500px;
    left: 50px;
  }
  .car-image{
    margin-top: 50px;
  }
  .drive-form{
    width: 700px;
    left: 25px;
    height: 150px;
    padding-top: 30px;
  }
  .drive-input{
    width: 600px;
    height: 100px;
    left: 50px;
    font-size: 36px;
    border-width: 1px;
    border-bottom-style: solid;
    border-color: #272822;
  }
  .upload{
    width: 600px;
    height: 150px;
    left: 75px;
    margin-top: 50px;
  }
  .drive-textarea{
    width: 700px;
    left: 25px;
    height: 500px;
    padding-top: 30px;
  }
  .textarea{
    width: 600px;
    height: 400px;
    left: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: gold;
  }
</style>


<script>
import Navbar from '../components/navbar.vue'
import Tabbar from '../components/tabbar.vue'
import Buiweex from 'bui-weex'

export default {
  name: 'drive',
  components: {
    Navbar,
    Tabbar,
    'bui-image': Buiweex.buiImage,
    'bui-button': Buiweex.buiButton  
  },
  data () {
      return {
        chooseItem: 1,
        scrollerHeight: 0
      }
    },
    created(){
      this.scrollerHeight = this.$getConfig().env.deviceHeight-188;
    },
    methods: {
      
    }
  }
</script>