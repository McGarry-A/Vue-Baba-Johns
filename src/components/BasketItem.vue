<template>
  <div class="basket-item-container">
    <div>image</div>
    <div>{{ item.name }}</div>
    <div class="quantity-container">
      <button @click="changeQuantity('minus')">-</button>
      <p id="quantity">{{ item.quantity }}</p>
      <button @click="changeQuantity('add')">+</button>
    </div>
    <div>{{ item.price }}</div>
    <button @click="removeItemFromBasket(this.index)">x</button>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  data: function () {
    return {
      newItem: this.item,
    };
  },
  props: {
    item: Object,
    index: Number,
    removeItemFromBasket: Function,
  },
  methods: {
    changeQuantity: function (operation) {
      operation === "add"
        ? (this.newItem.quantity += 1)
        : (this.newItem.quantity -= 1);
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
