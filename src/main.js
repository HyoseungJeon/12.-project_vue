import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'semantic-ui-css/semantic.min.css';
import VueRouter from 'vue-router'
import router from './router/'
import store from './store/'


Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(BootstrapVue);
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
