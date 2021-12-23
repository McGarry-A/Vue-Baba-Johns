<template>
  <h1>Product Details</h1>
  <p>The section id is {{ id }}</p>
  <div>
    <FoodItem
      v-for="(product, index) in products"
      :key="index"
      :name="product.name"
      :description="product.description"
    />
  </div>
</template>

<script>
import FoodItem from "./FoodItem.vue";

export default {
  data: function () {
    return {
      id: this.$route.params.id,
      products: this.$route.params.products,
      name: String,
    };
  },
  methods: {
    print() {
      console.log(this.key);
    },
  },
  components: {
    FoodItem,
  },
};
</script>

<style scoped />
