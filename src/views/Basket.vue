<template>
  <div class="basket-container">
    <div class="basket">
      <h1>Your Basket</h1>
      <div v-for="(item, index) in basket" :key="index">
        <BasketItem />
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
  letter-spacing: .1em;
  cursor: pointer;
  border-radius: 5px;
}
</style>
