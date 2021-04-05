import Vue from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap plugins imports
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { SidebarPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Plugin sidebar use
Vue.use(SidebarPlugin);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')