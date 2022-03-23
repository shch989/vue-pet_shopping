const APP_LOG_LIFE_CYCLE_EVENT = true

new Vue({
    el: "#app",
    data: {
        sitename:"Vue.js 애완용품샵",
        product: 
            { id: 1001, title: "고양이 사료, 25파운드",
             desciption: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
             price: 2000,
             image: "./images/product-fullsize.png",
             availableInventory: 5
            },
        cart: [],
        myProduct: true,
        order: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
        }
    },
     filters:{
        comma(val){
            return "$ " + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length
        },
        canAddToCart: function() {
            return this.product.availableInventory > this.cartItemCount;
        },
    },
     beforeCreate: function(){
       if(APP_LOG_LIFE_CYCLE_EVENT == false) {
           return;
       }
       console.log("beforeCreate")   
     },
     created: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("created")
     },
     beforeMount: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("beforeMount")
     },
     mounted: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("mounted")
     },
     beforeUpdate: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("beforeUpdate")
     },
     updated: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("updated")
     },
     beforeDestroy: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("beforeDestroy")
     },
     destroyed: function(){
        if(APP_LOG_LIFE_CYCLE_EVENT == false) {
            return;
        }
        console.log("destroyed")
     },
     methods: {
         addToCart: function() {
            this.cart.push(this.product.id)
         },
         showCheckout: function() {
             this.myProduct = this.myProduct ? false : true;
         }
     },
})
