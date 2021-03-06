import { computed, reactive } from "vue";
import { basketState } from "./basket";
import { createAccount, fetchLogin, saveBasket } from "./index";

export const state = reactive({
  email: "",
  username: "",
  error: "",
});

export const getters = reactive({
  isLoggedIn: computed(() => state.username !== ""),
});

export const actions = {
  // async getUser() {
  //   const user = await getUser();
  //   if (user == null) return;

  //   state.name = user.name;
  //   state.username = user.username;
  // },
  async login(username, password) {
    try {
      const user = await fetchLogin(username, password);
      console.log(user);

      if (user === null || user === undefined || !user) {
        state.error = "could not find user";
        return false;
      }
      state.username = user.username;
      state.email = user.email;

      for (let i = 0; i < user.basket.length; i++) {
        basketState.push(user.basket[i]);
      }

      state.error = "";
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  async logout() {
    await saveBasket(state.username, basketState);
    state.username = "";
    state.email = "";
  },
  async register(username, email, password) {
    try {
      const newUser = await createAccount(username, email, password);
      if (newUser === null || newUser === undefined) {
        state.error = "Could not create new user";
      }
      state.username = newUser.newUser.username;
      state.email = newUser.newUser.email;
      state.error = "";
      return true;
    } catch (e) {
      console.log(e);
    }
  },
};
