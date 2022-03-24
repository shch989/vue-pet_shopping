let APP_LOG_LIFECYCLE_EVENTS = true;
let webstore = new Vue({
  el: '#app',
  data: {
    sitename: "Vue.js 애완용품샵",
    showProduct: true,
    a: false,
    states: {
      AL: '알라바마',
      AK: '알래스카',
      AR: '애리조나',
      CA: '캘리포니아',
      NV: '네바다'
    },
    order: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      method: '자택 주소',
      business: '동의대학교 정보관',
      home: '부산광역시 수영구 남천동',
      gift:'선물로 보내기',
      sendGift: '선물로 보내기',
      dontSendGift: '선물로 보내기 않기'
    },
    products: [],
    cart: []
  },
  methods: {
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false: true;
    },
    submitForm() {
      alert('제출 완료');
    },
    // checkRating(n, myProduct) {
    //   return myProduct.rating - n >= 0;
    // },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    },
  },
  filters: {
      formatPrice(price) {
        return "$" + price.toLocaleString();
      }
    },
  beforeCreate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate");
    }
  },
  created: function() {
    axios.get('./json/products.json')
      .then((response) => {
          this.products = response.data.products;
          console.log(this.products);
      });
  },
  beforeMount: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeMount");
    }
  },
  mounted: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("mounted");
    }
  },
  beforeUpdate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate");
    }
  },
  updated: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated");
    }
  },
  beforeDestroyed: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroyed ");
    }
  },
  destroyed: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed");
    }
  }
});