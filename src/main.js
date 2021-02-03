import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'semantic-ui-css/semantic.min.css';
import VueSession from 'vue-session' 

var Sessionoptions = {
  persist: true
}

Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(BootstrapVue);
Vue.use(VueSession,Sessionoptions)

new Vue({
  render: h => h(App),
}).$mount('#app')
