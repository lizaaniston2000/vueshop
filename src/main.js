import Vue from 'vue'
import App from './App'
import router from './router';
import Router from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import VueCookie from 'vue-cookie'


Vue.use(VueCookie)
Vue.use(VueSweetalert2);
Vue.use(Router);


window.Event= new Vue;


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
