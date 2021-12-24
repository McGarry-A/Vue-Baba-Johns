<template>
  <FoodItem :products="products" :sectionName="sectionName" />
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
    console.log(this.sectionName);
  },
};
</script>

<style scoped />
