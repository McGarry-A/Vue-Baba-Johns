<template>
  <div class="navbar">
    <div class="nav-left">
      <h2 class="logo">Baba<span id="logo-span">Johns</span></h2>
    </div>
    <nav class="nav-right">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link
            class="link"
            :to="{
              name: 'Home',
              params: { basket: this.basket },
            }"
            >Home</router-link
          >
        </li>
        <li class="nav-list-item">
          <router-link
            class="link"
            :to="{
              name: 'Menu',
              params: { basket: this.basket },
            }"
            >Menu</router-link
          >
        </li>
        <li v-if="!state.username" class="nav-list-item">
          <router-link class="link" to="/login"> Login </router-link>
        </li>
        <li v-else class="nav-list-item">
          <router-link class="link" to="/login">{{
            state.username
          }}</router-link>
        </li>
        <li class="nav-list-item">
          <router-link
            class="link"
            :to="{
              name: 'Basket',
              params: { basket: this.basket },
            }"
          >
            Basket</router-link
          >
        </li>
        <li v-if="state.username">
          <button class="logout" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
  <footer></footer>
</template>

<script>
import { state, actions } from "./utils/user";
import { basketState } from "./utils/basket";
import { User3Line } from "vue-icon-packs/ri";
import { Basket } from "vue-icon-packs/bx";

export default {
  data: function () {
    return {
      basket: [],
      state,
      actions,
      basketState,
      User3Line,
      Basket,
    };
  },
  methods: {
    logout() {
      actions.logout();
      basketState.splice(0, basketState.length);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#logo-span {
  color: red;
}

.navbar {
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
  padding: 1em 0.5em;
}

.nav-left {
  width: 50%;
  display: flex;
  align-items: center;
}

.nav-right {
  display: flex;
  align-items: center;
  width: 50%;
}

.nav-list {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: right;
  align-items: center;
}

.nav-list-item {
  padding: 0 0 0 2.2em;
}

.link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.logout {
  background: red;
  color: white;
  border: none;
  font-size: 1rem;
  padding: 0.3rem 1rem;
  margin: 0 0 0 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
