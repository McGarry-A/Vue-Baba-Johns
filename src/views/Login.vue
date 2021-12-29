<template>
  <form v-if="login.login" action="" @submit.prevent="onSubmit">
    <div class="login-page">
      <div class="login-container">
        <h3>Welcome Back</h3>
        <h2>Log in to Your Account</h2>
        <input v-model="form.username" placeholder="Username" />
        <input v-model="form.password" placeholder="Password" />
        <button type="submit">Log in</button>
        <p>
          Dont have an account?
          <span @click="() => (login.login = !login.login)">Register</span>
        </p>
      </div>
    </div>
  </form>
  <form v-else action="">
    <div class="login-page">
      <div class="login-container">
        <h3>Welcome to Baba Johns</h3>
        <h2>Sign up for your Account</h2>
        <input placeholder="Email" />
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Sign up</button>
        <p>
          Already have an account?<span
            @click="() => (login.login = !login.login)"
            >Login</span
          >
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import userStore from "../utils/user";
// @ is an alias to /src
export default defineComponent({
  name: "Login",
  setup() {
    const form = reactive({
      username: "",
      password: "",
    });

    const login = reactive({ login: true });

    const onSubmit = () => {
      userStore.login(form.username, form.password);
      form.username = "";
      form.password = "";
    };

    return { form, onSubmit, login };
  },
});
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
