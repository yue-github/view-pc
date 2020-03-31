import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios"; // 引入axios
import "./assets/icon/iconfont.css"; // 引入iconfont图标
import ViewUI from 'view-design';//引入iview
import 'view-design/dist/styles/iview.css';//引入iview-css
import ElementUI from 'element-ui';import 'element-ui/lib/theme-chalk/index.css';//引入element-ui
import { baseUrl } from './config/url';//导入url配置

Vue.prototype.$axios = axios; // axios变量放到vue对象原型链上
Vue.prototype.baseUrl = baseUrl; // api基础路径

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
