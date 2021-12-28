<template>
  <div v-if="login" class="login-page">
    <div class="login-container">
      <h3>Welcome Back</h3>
      <h2>Log in to Your Account</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" placeholder="Password" />
      <button @click="fetchLogin">Log in</button>
      <p>
        Dont have an account?
        <span @click="() => (login = !login)">Register</span>
      </p>
    </div>
  </div>
  <div v-else class="login-page">
    <div class="login-container">
      <h3>Welcome to Baba Johns</h3>
      <h2>Sign up for your Account</h2>
      <input placeholder="Email" />
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Sign up</button>
      <p>
        Already have an account?<span @click="() => (login = !login)"
          >Login</span
        >
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      login: true,
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async fetchLogin() {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
      });

      if (response.status === 200) {
        console.log("post req made");
      }
    },
    async createAccount() {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
        },
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          password: this.password,
        }),
      });

      const data = await response.json();
      console.log(data);
    },
  },
};
</script>

<style scoped>
.login-page {
  height: 90vh;
  display: flex;
  align-items: center;
}
.login-container {
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 450px;
  margin: 0 auto;
  border: 2px solid #eee;
  border-radius: 8px;
  justify-content: space-evenly;
  padding: 8em 0 16em 0;
}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
  font-weight: lighter;
}

input {
  height: 40px;
  width: 80%;
  margin: 0.5em auto;
}

button {
  height: 50px;
  width: 80%;
  margin: 1em auto 0 auto;
  color: white;
  background-color: red;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}

p {
  text-align: center;
}

span {
  font-weight: bold;
  color: red;
  cursor: pointer;
}
</style>
