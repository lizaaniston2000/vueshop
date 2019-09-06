import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router';

window.axios=axios;
window.token=localStorage.getItem('token');


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
