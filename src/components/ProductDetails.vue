<template>
  <h1>Product Details</h1>
  <p>The section id is {{ id }}</p>
  <FoodItem />
</template>

<script>
import FoodItem from "./FoodItem.vue";

export default {
  data: function () {
    return {
      id: this.$route.params.id,
      name: String,
      Products: [
        {
          name: "Starters",
          description: "Yum",
          id: 0,
        },
        {
          name: "Mains",
          description: "Filling",
          id: 1,
        },
        {
          name: "Desserts",
          description: "Tasty",
          id: 2,
        },
      ],
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
