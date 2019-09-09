import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router';
import Router from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
Vue.use(Router);


window.axios=axios;
window.Event= new Vue;


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
