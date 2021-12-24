<template>
  <div class="basket-container">
    <div class="basket">
      <div v-for="(item, index) in basket" :key="index">
        <BasketItem />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { basket } from "../data.js";
import { BasketItem } from "../components/BasketItem.vue";

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
}
</style>
