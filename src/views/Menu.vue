<template>
  <div class="Menu">
    <div>
      <div
        v-for="(section, index) of data"
        :title="section.name"
        :img="section.img"
        :key="index"
      >
        <div class="menu-card">
          <img :src="getImageUrl(section)" alt="image" />
          <div class="menu-card-text">
            <h1 class="menu-card-title">{{ section.name }}</h1>
          </div>
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
.menu-card {
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
}

.menu-card-text {
  height: 100%;
  width: 100%;
  border: 1px solid black;
}
.menu-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
