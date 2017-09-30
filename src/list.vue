<template>
  <div @viewappear="onappear">
    <navbar></navbar>
    <list class="bui-list car-list" @loadmore="onLoadmore(event)" loadmoreoffset="2" :style="{height: listHeight}">
        <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)" :display="refreshing ? 'show':'hide'">
          <text class="bui-refresh-indicator">{{refreshText}}</text>
        </refresh>
        <cell class="bui-cell car-item" v-for="(item,index) in listData" :key="item">
          <div class="bui-list-main">
            <text style="font-size: 30px;">工号：{{item.number}}</text>
            <text>出行任务：</text>
            <div style="width:450px">
              <text class="item-content">{{item.content}}</text>                          
            </div>
          </div>
          <div class="bui-list-right">
            <text >{{item.title}}</text>
          </div>
        </cell>
        <loading class="bui-loading" @loading="onLoading" :display="showLoading?'show':'hide'">
          <text class="bui-loading-indicator" v-if="showLoading">
            {{loadingText}}
          </text>
          <loading-indicator class="bui-indicator">
          </loading-indicator>
        </loading> 
      </list>         
    <tabbar :chooseItem="chooseItem"></tabbar>
  </div>
</template>

<style scoped>
  .car-list{
    top: 100px;
  }
  .car-item{
    height: 250px;
    top: 30px;
    border-bottom: 10px solid #272822;
  }
  .item-content{
    font-size: 25px;
    color: #cccccc;
  }
</style>
<style lang="sass" src="bui-weex/src/css/buiweex.scss">
</style>

<script>
import Navbar from '../components/navbar.vue'
import Tabbar from '../components/tabbar.vue'
import Buiweex from 'bui-weex'
let navigator = weex.requireModule('navigator');
let getBaseURL = require('../components/public/base-url.js').getBaseURL;

export default {
  name: 'list',
  components: {Navbar,Tabbar},
  data () {
      return {
        LOADMORE_COUNT: 3,
        listHeight: 0,
        LOADMORE: [
          {
          title: '柯尼塞格',
          number: "04152112",                    
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '帕加尼',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '布加迪威龙',
          number: "04152112", 
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '五菱宏光',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '帕加尼',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '布加迪威龙',
          number: "04152112", 
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '五菱宏光',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        }],
        refreshing: false,
        showLoading: false,
        refreshText: '下拉刷新...',
        loadingText: '加载更多数据...',
        listData: [],
        sourceData: [{
          title: '保时捷',
          number: "04152112",
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",
          url: 'index.js'
        },{
          title: '法拉利',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '兰博基尼',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '柯尼塞格',
          number: "04152112",                    
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '帕加尼',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '布加迪威龙',
          number: "04152112", 
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '五菱宏光',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '帕加尼',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '布加迪威龙',
          number: "04152112", 
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        },{
          title: '五菱宏光',
          number: "04152112",          
          content: "2017年9月23日,驾车前往未央区,2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区2017年9月23日,驾车前往未央区",          
          url: 'index.js'
        }],
        chooseItem: 0
      }
    },
    created: function (){
      this.listHeight = this.$getConfig().env.deviceHeight- 88;
      for(let i = 0;i<3;i++){
        this.listData.push(this.sourceData[i]);
      }
    },
    methods: {
      onappear: function (){
        Buiweex.toast("list-demo-swipe onappear");
      },
      onRefresh: function (e){
        this.refreshing = true;
        let listLength = this.listData.length;
        let sourceLength = this.sourceData.length;
        setTimeout(()=>{
          this.refreshText = "刷新成功";  
          setTimeout(()=>{
            Buiweex.toast(listLength,sourceLength);            
            if (this.listData.length+3 >= this.sourceData.length) {
              this.refreshText = '没有更多数据了';
              this.refreshing = false;
            }else {
              this.loadingText = '正在加载更多数据...';
              for (let i = listLength; i < listLength + this.LOADMORE_COUNT; ++i) {
                this.listData.push(this.sourceData[i+1]);
              }
              this.refreshing = false;
            }
          },300);
        },500);
      },
      onPullingdown: function (e){
        //默认refresh文字与图标
        this.refreshText = "下拉可以刷新...";
        //下拉一定距离时文字与图标
        if (Math.abs(e.pullingDistance) > 60) {
          this.refreshText = "松开即可刷新...";
        }
      },
      onLoading: function (e) {
        Buiweex.toast("loading....");
        this.showLoading = true;
        let listLength = this.listData.length;
        let sourceLength = this.sourceData.length;
        setTimeout(()=>{
          Buiweex.toast(listLength,sourceLength);
          if(this.listData.length+3 >= this.sourceData.length) {
            this.refreshText = '没有更多数据了';
            this.showLoading = false;
          }else {
            this.loadingText = '正在加载更多数据...';
            for (let i = listLength; i < listLength + this.LOADMORE_COUNT; ++i) {
                this.listData.push(this.sourceData[i+1]);
            }
            this.showLoading = false;            
          }
        },2000);      
      },
    }
  }
</script>