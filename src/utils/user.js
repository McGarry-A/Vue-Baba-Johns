import { computed, reactive } from "vue";
import { fetchLogin, getUser } from "./index";

const state = reactive({
  name: "",
  username: "",
  error: "",
});

const getters = reactive({
  isLoggedIn: computed(() => state.username !== ""),
});

const actions = {
  async getUser() {
    const user = await getUser();
    if (user == null) return;

    state.name = user.name;
    state.username = user.username;
  },
  async login(username, password) {
    const user = await fetchLogin(username, password);
    if (user === null) {
      state.error = "could not find user";
      return false;
    }

    state.name = user.name;
    state.username = user.username;
    state.error = "";
    return true;
  },
  async logout() {
    (state.name = ""), (state.username = "");
  },
};

export default { getters, state, ...actions };
