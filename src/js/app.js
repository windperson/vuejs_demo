import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './vue_template/demo.vue'

const app = new Vue({
  el: '#demo_app',
  render: h => h(App)
});
