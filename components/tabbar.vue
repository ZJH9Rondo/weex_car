<template>
  <div style="flex-direction: column;">
    <publictabbar :tabItems="tabItems" :selectedItem="chooseItem"></publictabbar>
  </div>
</template>

<script>
import  Publictabbar from './public/public-tabbar.vue'
 
export default {
    components: {Publictabbar},
    props: {
      chooseItem: { default: 0}
    },
    data () {
      return {
        tabItems: [
          {
            index: 0,
            title: '查询车辆',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
            src: 'list.js',
            visibility: 'visible',
          },
          {
            index: 1,
            title: '我要用车',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
            src: 'drive.js',
            visibility: 'hidden',
          },
          {
            index: 2,
            title: '个人中心',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
            src: 'user.js',
            visibility: 'hidden',
          }
        ],
        }
      },
    methods: {
    }
  }
</script>