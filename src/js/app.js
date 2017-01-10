import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './vue_template/app.vue'
import Page1 from './vue_template/page1.vue'
import Page2 from './vue_template/page2.vue'
import Page3 from './vue_template/page3.vue'

const page_routes = [
  { path: '/route1', component: Page1, name: "page-1" },
  { path: '/route2', component: Page2, name: "page-2" },
  { path: '/route3', component: Page3, name: "page-3" },
  { path: '*', component: Page1 }
];

const vue_router = new VueRouter({
  routes: page_routes
});

const app = new Vue({
  el: '#demo_app',
  render: h => h(App),
  router: vue_router,
});
