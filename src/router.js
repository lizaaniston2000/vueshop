import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Products from './components/Products.vue';
import ProductInfo from './components/ProductInfo.vue';
import Thanks from './components/Thanks.vue';
import Logout from './components/Logout.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'products',
        component: Products
      }, 
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/thanks',
        name: 'thanks',
        component: Thanks
      },
      {
        path: '/info:id',
        name: 'info',
        component: ProductInfo
      },
      {
        path: '/logout',
        name: 'logout',
        component: Logout
      },

    ]
  });