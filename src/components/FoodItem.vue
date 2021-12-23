<template>
  <div v-for="product in products" :key="product.id">
    <p>The product is {{ products.name }}</p>
    <p>The product description is {{ products.description }}</p>
    <p>The Key is {{ products.id }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      products: [
        {
          name: "Starters",
          description: "Yum",
          id: 0,
        },
      ],
    };
  },
};
</script>
