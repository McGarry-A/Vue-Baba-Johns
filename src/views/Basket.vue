<template>
  <div class="basket-container">
    <div class="basket">
      <h1>Your Basket</h1>
      <div v-for="(item, index) in basket" :key="index">
        <BasketItem />
      </div>
      <div class="total-price">
        <h4>Total Price</h4>
        <h5>£100.00</h5>
      </div>
      <button>Checkout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { basket } from "../data.js";
import BasketItem from "../components/BasketItem.vue";

export default {
  name: "Basket",
  data: function () {
    return {
      basket,
    };
  },
  components: {
    BasketItem,
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
</style>
