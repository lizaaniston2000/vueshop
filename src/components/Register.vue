<template>
    <div class="light__card">
        <h1>Sign Up</h1>
        <form class="form-column_inp" v-on:submit.prevent='registerIt'>
            <input type="text" placeholder="username*" class="input form_input" v-model="register.username">
            <input type="password" placeholder="password*" class="input form_input" v-model="register.password">
            <button type="submit" class="but">Sign Up</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
		return {
			register:{
				username:"",
                password:"",
            },
		}
    },
    methods: {
		registerIt() {
            if (this.register.username.length>0 && this.register.password.length>0) {
                axios.post('http://smktesting.herokuapp.com/api/register/', {
                    username:this.register.username,
                    password:this.register.password
                })
                .then(response => {
                    this.$cookie.set('token', response.data.token);
                    this.$router.push('/thanks');
                })
            }
            else {
                return;
            }
		},
    }
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