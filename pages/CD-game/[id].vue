<template>
  <section id="fullscreen">
    <nuxt-link
      to="/CD-game"
      class="text-black hover:underline decoration-[#71BDC1] hover:text-[#71BDC1] m-10"
      >Back to Products</nuxt-link
    >
    <div class="md:min-h-screen h-64 relative">
      <div class="absolute inset-0 bg-cover bg-center">
        <div
          class="absolute inset-0 w-1/2 bg-gradient-to-l from-[transparent] to-black"
        ></div>
        <!-- <img src="https://gmedia.playstation.com/is/image/SIEPDC/the-witcher-3-hero-banner-desktop-01-en-12dec22?$3200px$"
                    class="w-full h-full object-cover" alt="The Witcher 3: Wild Hunt" /> -->
        <img
          :src="product.images[0]"
          class="w-full h-full object-cover"
          :alt="product.images[0]"
        />
      </div>

      <div
        id="content-in-fullscreen"
        class="hidden md:block absolute inset-y-0 md:m-12 text-white"
      >
        <div class="text-left md:text-3xl">{{ product.name }}</div>
        <div class="mt-10">{{ product.provider }}</div>
        <div class="md:w-64 xl:w-96">
          {{ product.description }}
        </div>
        <div class="mt-10 md:text-2xl">Price : {{ product.price }} ฿</div>
        <div class="mt-5">Available on <b v-for="(supDevice) in product.supDevice">{{ supDevice }}</b></div>
        <div class="w-64 mt-10">
          <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
            <Slide v-for="slide in product.images" :key="slide">
              <div class="rounded-xl carousel__item">
                <img
                  :src="slide"
                  class="w-full sm:h-40 md:h-48 object-contain"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 md:px-5 rounded-full w-64"
        >
          <div class="flex items-center justify-center">
            <img src="~/assets/add-to-basket.png" width="32" height="32" />
            <a @click="addToCart()" class="ml-2">Add to Cart</a>
          </div>
        </button>
      </div>
    </div>
  </section>
  <section class="flex justify-center items-center md:m-0">
    <div id="content-in-mobile" class="md:hidden block text-black text-center m-14">
      <div class="text-3xl">{{ product.name }}</div>
      <div class="mt-10">{{ product.provider }}</div>
      <div class="text-sm">{{ product.description }}</div>
      <div class="mt-10 md:text-2xl">Price : {{ product.price }} ฿</div>
      <div class="mt-5 font-bold">Available on <b v-for="(supDevice) in product.supDevice">{{ supDevice }}</b></div>
      <div class="w-64 mx-auto m-10">
        <!-- Added mx-auto class -->
        <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
          <Slide v-for="slide in product.images" :key="slide">
            <div class="rounded-xl">
              <img :src="slide" class="w-full object-cover" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 md:px-5 rounded-full"
      >
        <div class="flex items-center justify-center">
          <img src="~/assets/add-to-basket.png" width="32" height="32" />
          <a @click="addToCart()" class="ml-2">Add to Cart</a>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "~/store/cart";
import { useGameStore } from "~/store/game";
const route = useRoute();
const gameStore = useGameStore();
const id = route.params.id;
const cartStore = useCartStore();

const product = ref({
  images: [
    "https://placehold.it/800x400",
    "https://placehold.it/800x400",
    "https://placehold.it/800x400",
  ],
});
onMounted(async () => {
  await gameStore.fetchGame();
  gameStore.games.forEach((item) => {
    if (item.Id == id) {
      product.value = item;
    }
  });
});

const addToCart = () => {
  cartStore.add(product.value)
};
</script>
<style>
.carousel__item {
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-height: 850px) {
  #content-in-fullscreen {
    display: none;
  }
  #content-in-mobile {
    display: block;
  }
}
</style>