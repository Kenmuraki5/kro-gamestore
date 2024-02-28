import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    add(item) {
      this.cart.push(item);
    //   console.log("from Store", this.cart);
    },
    remove(index) {
      this.cart.splice(index, 1);
    },
    edit(index, item) {
      this.cart[index] = item;
    },
  },
  getters: {
    totalCartItems() {
      if (this.cart.length === 0) {
        return 0;
      }
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
