<template>
  <div class="navbar">
    <div class="nav-left"></div>
    <nav class="nav-right">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link class="link" to="/menu">Menu</router-link>
        </li>
        <li class="nav-list-item">
          <router-link class="link" to="/login">Login</router-link>
        </li>
        <li class="nav-list-item">
          <router-link class="link" to="/basket">Basket</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
}

.nav-left {
  width: 50%;
  display: flex;
  align-items: center;
}

.nav-right {
  width: 50%;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: right;
}

.nav-list-item {
  padding: 0 2em;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
