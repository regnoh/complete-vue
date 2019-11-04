import Vue from "vue";
import VueRouter from "vue-router";
// 一. 创建路由组件
import Home from "../components/Home";
import About from "../components/About";
// 二. 配置路由映射
// 1. 安装插件：使用Vue.use(插件)
Vue.use(VueRouter);
// 配置路由和组件之间的映射关系
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
];
// 2. 创建VueRouter对象,并传入路由映射配置
const router = new VueRouter({
  routes
});
// 3. 导出，然后在Vue实例(main.js中)中挂载创建的路由实例
export default router;
// 三. 在App.vue中使用路由<vue-link> <vue-view>
