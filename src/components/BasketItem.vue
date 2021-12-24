<template>
  <div class="basket-item-container">
    <div>image</div>
    <div>{{ name }}</div>
    <div class="quantity-container">
      <button>-</button>
      <p id="quantity">{{ quantity }}</p>
      <button>+</button>
    </div>
    <div>{{ price }}</div>
    <button>x</button>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  data: function () {},
  props: {
    name: String,
    price: String,
    quantity: Number,
  },
  methods: {
    removeItemFromBasket: function () {
      return;
    },
    changeQuantity: function () {
      return;
    },
    calculateTotalBasketPrice: function () {
      return;
    },
  },
};
</script>

<style scoped>
.basket-item-container {
  border: 1px solid #eee;
  height: 100px;
  width: 90%;
  margin: 0.25em auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
}
.quantity-container {
  display: flex;
}
#quantity {
  padding: 0 0.5em;
}
</style>
