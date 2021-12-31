<template>
  <div class="basket-container">
    <div v-if="basketState.length > 0" class="basket">
      <h1>Your Basket</h1>
      <div v-for="(item, index) in basketState" :key="index">
        <BasketItem :item="item" :index="index" />
      </div>
      <div class="total-price">
        <h5>{{ calculateTotalBasketPrice() }}</h5>
        <h4>Total Price</h4>
        <button>Checkout</button>
      </div>
    </div>
    <div v-else>
      <h3 class="empty-basket">
        Select something from the menu to add to your basket!
      </h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { basket } from "../data.js";
import { basketState, basketActions } from "../utils/basket";
import BasketItem from "../components/BasketItem.vue";

export default {
  name: "Basket",
  props: {
    basket: {
      type: Array,
    },
  },
  data: function () {
    return {
      newBasket: this.basket,
      basketState,
      basketActions,
    };
  },
  components: {
    BasketItem,
  },
  methods: {
    calculateTotalBasketPrice: function () {
      let totalPrice = 0;
      for (let i = 0; i < basketState?.length; i++) {
        totalPrice =
          basketState[i].price * basketState[i].quantity + totalPrice;
      }
      return totalPrice;
    },
  },
};
</script>

<style scoped>
.basket-container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basket {
  width: 800px;
  height: 800px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
}
h1 {
  margin: 1em auto;
}
button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 50px;
  color: white;
  background-color: red;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 5px;
}

.total-price {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 1em 2.2em;
}
.empty-basket {
  text-align: center;
  font-weight: lighter;
}
</style>
