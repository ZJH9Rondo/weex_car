import Vue from 'vue'
import weex from 'weex-vue-render'
import App from '../src/index.vue'
weex.init(Vue)
new Vue(Vue.util.extend({el: '#root'},App))
