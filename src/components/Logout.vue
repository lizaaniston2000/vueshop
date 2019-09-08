<template>
	<div>
		<h1>You are logged out!</h1>
	</div>
</template>


<style scoped>
    h1{
        font-size: 30px;
        text-align: center;
        margin-top: 50px;
    }
</style>


<script>
	export default {
		created () {
			localStorage.removeItem('Authorization');
			Event.$emit('logout');
		}
	}
</script>
