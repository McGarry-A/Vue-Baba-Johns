import { computed, reactive } from "vue";
import { fetchLogin } from "./index";

const state = reactive({
  username: "",
  error: "",
});

const getters = reactive({
  isLoggedIn: computed(() => state.username !== ""),
});

const actions = {
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
      if (user === null) {
        state.error = "could not find user";
        return false;
      }
      state.username = user.username;
      state.error = "";
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  async logout() {
    state.username = "";
  },
};

export default { getters, state, ...actions };
