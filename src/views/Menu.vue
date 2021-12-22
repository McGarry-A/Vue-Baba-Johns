<template>
  <div class="menu">
    <div
      v-for="(section, index) of data"
      :title="section.name"
      :img="section.img"
      :key="index"
    >
      <div class="menu-card">
        <img :src="getImageUrl(section)" alt="image" class="bg-image" />
        <div class="menu-card-text">
          <router-link
            :to="{
              name: 'ProductDetails',
              params: { id: section.id, products: section.products[id] },
            }"
            class="menu-link"
          >
            <h1 class="menu-card-title">{{ section.name }}</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.js";

export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      data,
    };
  },
  methods: {
    getImageUrl(section) {
      return section.img;
    },
  },
};
</script>

<style>
.menu {
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.menu-card {
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
}

.menu-card-text {
  height: 100%;
  width: 100%;
  color: black;
  position: absolute;
  top: 0;
  z-index: 1000;
  font-size: 2em;
  color: white;
}
.menu-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bg-image {
  z-index: -1000;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.menu-link {
  cursor: pointer;
  color: white;
  text-decoration: none;
}
</style>
