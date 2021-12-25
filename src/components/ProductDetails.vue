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
  methods: {
    addToBasket: function (item) {
      console.log("added to basket!");
      this.newBasket.push({
        name: item.name,
        price: item.price,
      });
      console.log(this.basket);
      console.log(this.newBasket);
    },
  },
};
</script>

<style scoped />
