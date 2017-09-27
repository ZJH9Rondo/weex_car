<template>
  <wxc-navpage data-role="none" :height="navBarHeight" background-color="#FCB133" :title="title" title-color="white" left-item-title="More" left-item-color="white" right-item-src="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png">
  </wxc-navpage>
</template>
<script>
  import WxcNavpage from 'weex-components/src/wxc-navpage.vue'

  export default {
    components: {WxcNavpage},
    data () {
      return {
        navBarHeight: 100,
        title: '公车管理系统',
        dir: 'examples',
        baseURL: '',
      }
    },
    created: function() {
      this.$getConfig(function (config) {
        var env = config.env;
        if(env.platform == 'iOS'){
          var scale = env.scale;
          var deviceWidth = env.deviceWidth / scale;
          this.navBarHeight = 64.0 * 750.0 / deviceWidth;
        }
      }.bind(this));
      this.$on('naviBar.rightItem.click',function(e){
        duration = 2;
        this.$call('modal', 'toast', {
          'message': 'naviBar.rightItem.click',
          'duration': duration
          });
      });
      this.$on('naviBar.leftItem.click',function(e){
        duration = 2;
        this.$call('modal', 'toast', {
          'message': 'naviBar.leftItem.click',
          'duration': duration
          });
      });
    },
    methods: {
      
    }
  }
</script>