import { computed, reactive } from "vue";

export const basketState = reactive([{}]);

export const getters = reactive({
  checkBasketSize: computed(() => basketState.length),
});

export const basketActions = {
  addToBakset() {},
  deleteFromBasket() {},
  changeQuantity() {},
};
