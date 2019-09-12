<template>
    <div class="light__card">
        <h1>Sign In</h1>
        <form class="form-column_inp" v-on:submit.prevent="logItIn">
            <input type="text" placeholder="username*" class="input form_input"  v-model="login.username">
            <input type="password" placeholder="password*" class="input form_input"  v-model="login.password">
            <button  type="submit" class="but">Sign In</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
import Vue from 'vue'
export default {
    data() {
		return {
			login: {
				username: "",
				password: ""
            },
		}
    },
    methods:{
		logItIn() {
            if (this.login.username.length>0 && this.login.password.length>0) {
                axios.post('http://smktesting.herokuapp.com/api/login/',{
                    username:this.login.username,
                    password:this.login.password
                })
                .then(response => {
                    //проверка на то зарегистрирован ли пользователь
                    if (response.data.token!=undefined) {
                        this.$cookie.set('token', response.data.token);
                        this.$router.push('/');
                        this.emitMethod();
                    }
                    else {
                        Vue.swal('Please sign up');
                        this.login.username='';
                        this.login.password='';
                    }
                })
            }
            else {
                return;
            }
        },
        emitMethod () {
            Event.$emit('logged-in') //user sign in
        },
    },

}
</script>

<style scoped>
.light__card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
h1{
   font-size: 40px;
}
.input {
    height: 50px;
    background-color: transparent;
    outline: none;
    border: 1px solid #454449;
    width: 300px;
    border-radius: 4px;
    padding: 18px 20px;
    color: #15141a;
}
.input::placeholder{
    font-family: Geomanist-Book;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
}
.form-column_inp{
    height: 188px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
}
.but{
    border: 1px solid #454449;
    text-transform: uppercase;
    padding: 16px 30px;
    outline: none;
    background-color: transparent;
    color: #15141a;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
}
.but:hover{
  background-color:#808080;
  transition: .3s;
  color:#ffffff;    
}
</style>