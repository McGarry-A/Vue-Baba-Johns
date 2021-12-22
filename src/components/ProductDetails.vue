<template>
  <h1>Product Details</h1>
  <p>The section id is {{ id }}</p>
  <div v-for="(product, index) of products" :key="index">
    <p>{{ product.name }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      products: this.$route.params.products,
    };
  },
};
</script>

<style scoped />
