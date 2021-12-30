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
  <form v-else action="" @submit.prevent="register">
    <div class="login-page">
      <div class="login-container">
        <h3>Welcome to Baba Johns</h3>
        <h2>Sign up for your Account</h2>
        <input placeholder="Email" v-model="registerForm.email" />
        <input placeholder="Username" v-model="registerForm.username" />
        <input placeholder="Password" v-model="registerForm.password" />
        <button type="submit">Sign up</button>
        <p>
          Already have an account?<span
            @click="() => (login.login = !login.login)"
            >Login</span
          >
        </p>
      </div>
    </div>
  </form>
  <div v-if="state.error">{{ state.error }}</div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import { actions, state } from "../utils/user";
import { useRouter } from "vue-router";
// @ is an alias to /src
export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();

    const redirectToMenu = () => {
      router.push({
        name: "Menu",
      });
    };
    const form = reactive({
      username: "",
      password: "",
    });

    const registerForm = reactive({
      username: "",
      email: "",
      password: "",
    });
    const login = reactive({ login: true });

    const onSubmit = async () => {
      const isLoggedIn = await actions.login(form.username, form.password);
      if (isLoggedIn) {
        redirectToMenu();
      }
      form.username = "";
      form.password = "";
    };

    const register = async () => {
      const didRegister = await actions.register(
        registerForm.username,
        registerForm.email,
        registerForm.password
      );

      if (didRegister) {
        redirectToMenu();
      }
    };

    return { form, onSubmit, login, state, actions, register, registerForm };
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

router-link {
  color: red;
}
.continue {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.5em;
}
</style>
