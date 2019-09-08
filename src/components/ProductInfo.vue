<template>
    <div>
        <div class="cont">
            <div class="product_info">
                <img :src="'http://smktesting.herokuapp.com/static'+'/'+product.img">
                <div class="product_text">
                    <h1>{{product.title}}</h1>
                    <p>{{product.text}}</p>
                </div>
            </div>
        </div>
        <h1>Review:</h1>
        <div class="review">
            <div class="review_area" v-for="review in reviews" :key="review.id">
                <p> {{review.text}}</p>
                <p>Rate: {{review.rate}}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            product:[],
            reviews:[]
        }
    },
    mounted:function(){
        axios.get("http://smktesting.herokuapp.com/api/products/").then((response) => {
            this.product = response.data.find((item) => {
                return (item.id === Number(this.$route.params.id));
            })
        })
        axios.get("http://smktesting.herokuapp.com/api/reviews/"+this.product.id).then((response) => {
            this.reviews = response.data;
        })
    },
}
</script>


<style scoped>
    .cont{
        display: flex;
        justify-content: center;
        margin-top:50px;
    }
    .product_info{
        width:450px;
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
    .product_text{
        display: flex;
        flex-direction: column;
    }
    h1{
        text-align: center;
    }
    .review_area{
        width: 300px;
        border: 1px solid  #454449;
        border-radius: 5px;
        height: 100px;
    }
</style>