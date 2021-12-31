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
    if (basketState.filter((el) => el.id === item.id).length === 0) {
      basketState.push(item);
      item.quantity = 1;
    } else {
      basketState.forEach((el) => {
        if (el.id === item.id) {
          el.quantity = el.quantity + 1;
          console.log(el.quantity);
        }
      });
    }
  },
};
