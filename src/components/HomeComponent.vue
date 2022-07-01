<template>
  <div class="home-component">
    <div class="hero">
      <img
        class="pizza-img"
        alt="pizza"
        src="https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80"
      />
      <div class="hero-text">
        <h1>Baba Johns, The Best Pizza in Town</h1>
        <div class="button-div">
          <button class="btn">
            <router-link
              class="btn-link"
              :to="{
                name: 'Menu',
                params: { basket: this.basket },
              }"
              >Menu</router-link
            >
          </button>
          <!-- <button class="btn">
            <router-link class="btn-link" to="/login">Register</router-link>
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <div class="hero-bottom">
    <img
      class="get-started"
      src="https://www.papajohns.co.uk/images/2019assets/nearest_Store2.png"
    />
  </div>
</template>

<script>
export default {
  props: {
    basket: Array,
  },
};
</script>

<style>
.home-component {
  display: flex;
  margin: 0 auto;
  max-width: 1500px;
  height: 80vh;
}

.hero {
  min-width: 100%;
  overflow: hidden;
  position: relaitve;
  height: 100%;
}

.pizza-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.hero-text {
  z-index: 1001;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 2rem;
}

.button-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 0.5em 1.5em;
  margin: 0 1em;
  border: none;
  font-size: 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: black;
  border: black;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.hero-bottom {
  height: 200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
}

.get-started {
  object-fit: cover;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
}

.btn-link {
  color: white;
  text-decoration: none;
}
</style>
