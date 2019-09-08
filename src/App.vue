<template>
  <div class="main">
    <div class="navbar">
      <div class="container">
        <div class="navbar-wrap">
            <router-link to="/" class="title">vueshop</router-link>
            <nav class="menu">
              <ul class="menu__items"  v-if='!loggedIn'>
                <li><router-link to="/login">Sign In</router-link></li>
                <li><router-link to="/register">Sign Up</router-link></li>
              </ul>
              <ul class="menu__items"  v-if='loggedIn'>
                <li><router-link to="/logout" >Logout</router-link></li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
    <main>
      <div class="app">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  data () {
    return {
      loggedIn:false
      }
    },
  created(){
    this.redirectGuestToLogin();

    Event.$on('login',()=>{
      this.loggedIn=true;
    });

    Event.$on('logout',()=>{
      this.loggedIn=false;
    });

  },
  methods:{
    redirectGuestToLogin(){
      if (!token) {
        return this.$router.push('/login');
      }
    }
  }
}
</script>


<style>
@font-face {
  font-family: Geomanist-Book;
  src: url('./assets/fonts/Geomanist-Book.otf');
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Geomanist-Book;
  background-color: #f5f5f5;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.navbar{
  background-color: #ededed;
}
.navbar-wrap{
  height: 60px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
}
.menu__items{
  display: flex;
  list-style: none;
  font-weight: 600;
  font-size: 16px;
}
li{
  padding: 0 11px;
}
a{
  text-decoration: none;
  color:#15141a;
  padding: 20px;
}
a:hover{
  background-color:#808080;
  transition: .3s;
  color:#ffffff;
}
.title{
  text-transform: uppercase;
  font-size:18px;
  padding:19px;
}
</style>
