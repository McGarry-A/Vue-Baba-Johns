<template>
  <header>
    <h1 id="section-title">{{ sectionName }}</h1>
  </header>
  <div class="products-section">
    <div
      v-for="(product, index) in products[sectionName]"
      :key="index"
      class="product-card"
    >
      <h2>{{ product.name }}</h2>
      <p class="price">£{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToBasket(product)">Add to Basket</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionName: String,
    products: Object,
    addToBasket: Function,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.products-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  height: 400px;
  width: 300px;
  margin: 0 1em;
  padding: 2em 1em;
  position: relative;
  border-radius: 10px;
}

.price {
  display: flex;
  justify-content: flex-end;
  font-weight: lighter;
  margin-bottom: 10px;
}

button {
  display: flex;
  justify-content: center;
  color: white;
  background-color: red;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  padding: 0.5em 2em;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 15%;
}
header {
  display: flex;
  justify-content: center;
}
#section-title {
  margin: 2em 0;
}
</style>
