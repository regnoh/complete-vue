import Vue from "vue";
import VueRouter from "vue-router";
// 1. 安装插件：使用Vue.use(插件)
Vue.use(VueRouter);
// 配置路由和组件之间的映射关系
const routes = [];
// 2. 创建VueRouter对象
const router = new VueRouter({
  routes
});
// 3. 将router对象传入Vue实例
export default router;
