<template>
  <div class="home">
    <HomeComponent :basket="this.basket" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  props: {
    basket: Array,
  },
  components: {
    HomeComponent,
  },
};
</script>
