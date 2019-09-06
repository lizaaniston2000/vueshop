<template>
    <div class="light__card">
        <h1>Register</h1>
        <div class="form-column_inp">
            <input type="text" placeholder="username*" class="input form_input" v-model="register.username">
            <input type="text" placeholder="password*" class="input form_input" v-model="register.password">
            <button class="but" @click='registerIt'>Register</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
		return {
			register:{
				username:"",
				password:""
			}
		}
    },
    methods:{
		registerIt() {
			axios.post('http://smktesting.herokuapp.com/api/register/',this.register)
			.then(response => {
			    let token=response.data.token;

				localStorage.setItem('token',token);

			});
		}
	}
}
</script>

<style scoped>
.light__card{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    opacity: 0.2;
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