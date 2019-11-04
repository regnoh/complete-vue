import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // 自动找目录里面的 index 文件
// npm run build打包过程中是否有提示信息
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

// el内部执行mount
// new Vue({
//   el: "#app",
//   render: h => h(App)
// });
