<template>
  <header>
    <nav class="bg-white-800 sticky top-0 z-10">
      <div class="mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              @click="mobileMenu = mobileMenu == false ? true : false"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--        Icon when menu is closed.       Menu open: "hidden", Menu closed: "block"       -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!--           Icon when menu is open.            Menu open: "block", Menu closed: "hidden"       -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <nuxt-link to="/">
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="h-10 w-auto"
                  src="~assets/logo.png"
                  alt="Your Company"
                />
              </div>
            </nuxt-link>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <nuxt-link
                  to="/Featured"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Featured
                </nuxt-link>
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <nuxt-link
                  to="/game-console"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Game Console
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- Cart -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <div class="relative ml-3">
              <button
                type="button"
                @click="cartMenu = cartMenu == false ? true : false"
                class="relative rounded-full bg-white focus:bg-gray-800 focus:text-white p-1 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <cart
                :cartMenu="cartMenu"
                @update:cartMenu="updateCartMenu"
                :itemsCart="itemsCart"
                :totalCost="totalCost"
                :deleteItemCart="delItemFromCart"
                :increaseQuantity="increaseQuantity"
                :decreaseQuantity="decreaseQuantity"
              >
              </cart>
            </div>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div v-show="authStore.isAuthenticated">
                <div>
                  <button
                    type="button"
                    @click="profileMenu = profileMenu == false ? true : false"
                    class="relative rounded-full bg-white focus:bg-gray-800 focus:text-white p-1 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  v-if="profileMenu"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <nuxt-link
                    to="/profile"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Your Profile</nuxt-link
                  >
                  <button
                    @click="authStore.logout()"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700 w-full text-left"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </button>
                </div>
              </div>
              <div v-show="!authStore.isAuthenticated">
                <nuxt-link
                  to="/login"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >SingIn</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu" v-if="mobileMenu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <nuxt-link
            to="/Featured"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Featured</nuxt-link
          >
          <nuxt-link
            to="/CD-game"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >CD Game</nuxt-link
          >
          <nuxt-link
            to="/game-console"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Game Console</nuxt-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart";
import { useGameConsoleStore } from "@/store/console";
import { useGameStore } from "@/store/game";
import { useAuth } from "@/store/user";
const cartStore = useCartStore();
const gameConsoleStore = useGameConsoleStore();
const gameStore = useGameStore();
const authStore = useAuth();
const profileMenu = ref(false);
const mobileMenu = ref(false);
const cartMenu = ref(false);

const itemsCart = cartStore.cart;
const totalCost = computed(() => {
  return cartStore.totalCartItems;
});

// const splitNameLegnth = (name) => {
//     if (name.length > 5) {
//         return name.substring(0, 5) + '...'
//     }
//     return name
// }

//cart function
const increaseQuantity = (id: string) => {
  cartStore.increaseQuantity(id);
};
const decreaseQuantity = (id: string) => {
  cartStore.decreaseQuantity(id);
};
const delItemFromCart = (id: string) => {
  cartStore.remove(id);
};

const updateCartMenu = (value: any) => {
  cartMenu.value = value; // Update the prop in the parent
};

onMounted(() => {
  gameConsoleStore.fetchGameConsole();
  gameStore.fetchGame();
  authStore.fetchUser();
});
</script>
