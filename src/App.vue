<template>
  <div class="main">
    <div class="navbar">
      <div class="container">
        <div class="navbar-wrap">
            <router-link to="/" class="title">vueshop</router-link>
            <nav class="menu">
              <ul class="menu__items"  v-if="!status">
                <li><router-link to="/login">Sign In</router-link></li>
                <li><router-link to="/register">Sign Up</router-link></li>
              </ul>
              <ul class="menu__items"  v-if="status">
                <li><a href='' @click="logout">Logout</a></li>
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
        status:false,
      }
    },
  methods: {
    logout () {
      this.$cookie.delete("token"); 
      Event.$emit('logout');
    }
  },
  created(){
    Event.$on('logged-in',() => {
      this.status= true;
    })
    Event.$on('logout',()=>{
      this.status=false;
    })
    const token=this.$cookie.get('token'); 
    if (token)
      this.status=true; 
  },
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
