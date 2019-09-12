<template>
    <div class="products__catalog" >
        <div class="price" v-for="myproduct in products" :key="myproduct.id">
            <div><img :src="'http://smktesting.herokuapp.com/static'+'/'+myproduct.img"></div>
            <h1>{{myproduct.title}}</h1>
            <p class="price_text">
                {{myproduct.text}}
            </p>
            <router-link tag="button" class="little_but" v-bind:to="'/info'+myproduct.id">More details</router-link>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            products: []
        }
    },
    mounted: function() {
        axios.get("http://smktesting.herokuapp.com/api/products/").then((response) => {
            this.products = response.data
        })
    }
}
</script>


<style scoped>
    .products__catalog{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    .price{
        width: 210px;
        height: 320px;
        border: 1px solid #454449;
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .price div img{
        width:100%;
    }
    .price_text {
        margin: 0;
        text-align: center;
        font-size: 18px;
        color: #999999;
        line-height: 26px;
    }
    h1{
      font-size: 22px;  
      text-align: center;
      color: #15141a;
    }
    .little_but{
        border: 1px solid #454449;
        text-transform: uppercase;
        padding: 10px 20px;
        outline: none;
        background-color: transparent;
        color: #15141a;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .little_but:hover{
        background-color:#808080;
        transition: .3s;
        color:#ffffff;    
    }
</style>