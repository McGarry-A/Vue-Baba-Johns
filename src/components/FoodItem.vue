<template>
  <header>
    <h1 id="section-title">
      {{ capitaliseFirstLetter(sectionName) }}
    </h1>
  </header>
  <div class="products-section">
    <div
      v-for="(product, index) in products[sectionName]"
      :key="index"
      class="product-card"
    >
      <img :src="product.img" alt="product-image" class="product-image" />
      <div class="padding">
        <h2>{{ product.name }}</h2>
        <p class="price">£{{ product.price }}</p>
        <p>{{ product.description }}</p>
      </div>
      <button @click="callAddToBasket(product)">Add to Basket</button>
    </div>
  </div>
  <div class="back">
    <button class="back-to-menu-button" @click="goToMenu()">
      Back to Menu
    </button>
  </div>
</template>

<script>
import { basketActions } from "../utils/basket";
import { capitaliseFirstLetter } from "../utils/index";
export default {
  props: {
    sectionName: String,
    products: Object,
  },
  data: function () {
    return {
      basketActions,
      capitaliseFirstLetter,
    };
  },
  methods: {
    callAddToBasket(item) {
      basketActions.addToBakset(item);
    },
    goToMenu() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.products-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
}

.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  height: 400px;
  width: 330px;
  margin: 0.5em 1em;
  padding: 0em 0em;
  position: relative;
  border-radius: 10px;
}

.price {
  display: flex;
  justify-content: flex-end;
  font-weight: lighter;
  margin-bottom: 10px;
}

.product-image {
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.padding {
  padding: 0 1em;
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

.back {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.back-to-menu-button {
  background: white;
  color: red;
  border: 1px solid red;
}
</style>
