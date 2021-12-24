<template>
  <div class="basket-item-container">
    <div>image</div>
    <div>details</div>
    <div>quantity</div>
    <div>total price</div>
    <button>x</button>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  data: function () {},
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
}
</style>
