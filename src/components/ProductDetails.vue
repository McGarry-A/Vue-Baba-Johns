<template>
  <FoodItem
    :products="products"
    :sectionName="sectionName"
    :addToBasket="addToBasket"
  />
</template>

<script>
import FoodItem from "./FoodItem.vue";
import { products } from "../data";

export default {
  props: {
    sectionName: {
      type: String,
      required: true,
    },
    id: String,
    basket: Array,
  },
  data: function () {
    return {
      name: String,
      products,
    };
  },
  components: {
    FoodItem,
  },
  mounted: function () {
    console.log("Mounted!");
    console.log(this.basket);
  },
  methods: {
    addToBasket: function () {
      console.log("added to basket!");
    },
  },
};
</script>

<style scoped />
