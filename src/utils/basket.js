import { computed, reactive } from "vue";

export const basketState = reactive([{}]);

export const getters = reactive({
  checkBasketSize: computed(() => basketState.length),
});

export const basketActions = {
  calculateTotalBasketPrice: function () {
    let totalPrice = 0;
    for (let i = 0; i < basketState?.length; i++) {
      totalPrice = +basketState[i].price + totalPrice;
    }
    return totalPrice;
  },
  removeItemFromBasket: function (firstIndex) {
    basketState.splice(firstIndex, 1);
    return basketState;
  },
  addToBakset(item) {
    basketState.push(item);
  },
};
