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
      newBasket: this.basket,
    };
  },
  components: {
    FoodItem,
  },
  methods: {},
};
</script>

<style scoped />
