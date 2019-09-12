<template>
    <section>
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
            <p class="p_review">Please, post your review:)</p>
            <textarea placeholder="Message*" class="form_textarea" v-model="comment.text"></textarea>
            <p class="p_review">Your rate: </p>
            <div class="radio_group">
                <input type="radio" name="rate" value="1" v-model="comment.rate">
                <label>1</label>
                <br>
                <input type="radio" name="rate" value="2" v-model="comment.rate">
                <label >2</label>
                <br>
                <input type="radio" name="rate" value="3" v-model="comment.rate">
                <label >3</label>
                <br>
                <input type="radio" name="rate" value="4" v-model="comment.rate">
                <label >4</label>
                <br>
                <input type="radio" name="rate" value="5" v-model="comment.rate">
                <label >5</label>
                <br>
            </div>
            <button class="but" @click='postReview'>ok</button>
        </div>
    </section>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            product:[],
            reviews:[],
            comment:{
                text:'',
                rate:''
            }
        }
    },
    mounted:function(){
        axios.get("http://smktesting.herokuapp.com/api/products/").then((response) => {
            this.product = response.data.find((item) => {
                return (item.id === Number(this.$route.params.id));
            });
        return this.product;
        })
        .then(product => {
            axios.get("http://smktesting.herokuapp.com/api/reviews/"+product.id).then((response) => {
                this.reviews = response.data;
            })
        });
    },
    methods: {
        showAlert(){
            // Use sweetalret2
            this.$swal('Please sign in or sign up:)');
        },
        postReview(){
            const token=this.$cookie.get('token');
            if(!token){
                this.showAlert();
                this.comment.text='';
                this.comment.rate='';
            }
            else{
                let new_comment=new Object;
                    new_comment.text=this.comment.text;
                    new_comment.rate=this.comment.rate;
                    axios.post("http://smktesting.herokuapp.com/api/reviews/"+this.product.id,{
                        text:this.comment.text,
                        rate:this.comment.rate,
                    },{headers: { 'Authorization': 'Token '+token}}).then((response) => {
                        console.log(response.data);
                    })
                this.comment.text='';
                this.comment.rate='';
                this.reviews.push(new_comment) //post data of product
            } 
        }
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
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .review{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    .review_area{
        width: 350px;
        border: 1px solid  #454449;
        border-radius: 5px;
        height: 100px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left:20px;
    }
    .form_textarea{
        outline: none;
        border-radius: 5px;
        border: 1px solid  #454449;
        height:100px;
        width:350px;
        padding: 18px 20px;
        resize: none;
        margin-bottom: 20px;
        background-color: transparent;
    }
    .form_textarea::placeholder{
        font-family: Geomanist-Book;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
    }
    .p_review{
        margin-bottom: 10px;
    }
    .radio_group{
        margin-bottom: 20px;
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