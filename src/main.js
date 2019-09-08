import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router';
import Router from 'vue-router';


window.axios=axios;
window.token=localStorage.getItem('Authorization');

Vue.use(Router);
Vue.config.productionTip = false

window.Event= new Vue;


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
