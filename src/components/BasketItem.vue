<template>
  <div class="basket-item-container">
    <div class="name-container">{{ item.name }}</div>
    <div class="quantity-container">
      <button @click="changeQuantity('minus')">-</button>
      <p id="quantity">{{ item.quantity }}</p>
      <button @click="changeQuantity('add')">+</button>
    </div>
    <div>£{{ itemPriceToTwoDecimalPlaces(item.price, item.quantity) }}</div>
    <button @click="callRemoveItemFromBasket(this.index)">x</button>
  </div>
</template>

<script>
import { basketState, basketActions } from "../utils/basket";
export default {
  name: "BasketItem",
  data: function () {
    return {
      newItem: this.item,
      basketState,
      basketActions,
    };
  },
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    changeQuantity: function (operation) {
      if (this.newItem.quantity <= 0 && operation === "minus") {
        return;
      }
      operation === "add"
        ? (this.newItem.quantity += 1)
        : (this.newItem.quantity -= 1);
    },
    callRemoveItemFromBasket(index) {
      basketActions.removeItemFromBasket(index);
    },
    itemPriceToTwoDecimalPlaces(price, quantity) {
      const total = price * quantity;
      return total.toFixed(2);
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
.name-container {
  width: 150px;
}
.quantity-container {
  display: flex;
  width: 150px;
}
#quantity {
  padding: 0 0.5em;
}
</style>
