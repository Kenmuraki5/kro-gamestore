<template>
    <section id="fullscreen">
        <nuxt-link to="/CD-game"
            class="text-black hover:underline decoration-[#71BDC1] hover:text-[#71BDC1]  m-10">Back to
            Products</nuxt-link>
        <div class="md:min-h-screen h-64 relative">
            <div class="absolute inset-0 bg-cover bg-center">
                <div class="absolute inset-0 w-1/2 bg-gradient-to-l from-[transparent] to-black"></div>
                <!-- <img src="https://gmedia.playstation.com/is/image/SIEPDC/the-witcher-3-hero-banner-desktop-01-en-12dec22?$3200px$"
                    class="w-full h-full object-cover" alt="The Witcher 3: Wild Hunt" /> -->
                    <img :src="product.image[0]"
                    class="w-full h-full object-cover" :alt="product.image[0]" />
            </div>

            <div id="content-in-fullscreen" class="hidden md:block absolute inset-y-0 md:m-12 text-white">
                <div class="text-left md:text-3xl">{{ product.name  }}</div>
                <div class="mt-10">{{ product.provider }}</div>
                <div class="md:w-64 xl:w-96">
                    {{ product.description }}
                </div>
                <div class="mt-10 md:text-2xl">Price : {{ product.price }} ฿</div>
                <div class="mt-5">Available on PS4 PS5</div>
                <div class="w-64 mt-10">
                    <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
                        <Slide v-for="slide in product.image" :key="slide">
                            <div class="rounded-xl carousel__item">
                                
                                <img :src="slide" class="w-full h-72 object-contain" />
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

                <button class="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 rounded-full">
                    Add To Cart
                </button>
            </div>
        </div>
    </section>
    <section class="flex justify-center items-center md:m-0 m-20">
        <div id="content-in-mobile" class="md:hidden block text-black text-center">
            <div class="text-3xl">{{ product.name  }}</div>
            <div class="mt-10">{{ product.provider }}</div>
            <div class="text-sm">{{ product.description }}</div>
            <div class="mt-10 md:text-2xl">Price : {{ product.price }} ฿</div>
            <div class="mt-5 font-bold">Available on PS4 PS5</div>
            <div class="w-64 m-10">
                <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
                    <Slide v-for="slide in product.imageUrl" :key="slide">
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
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 rounded-full mt-5">
                Add To Cart
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '~/store/game';
const route = useRoute();
const gameStore = useGameStore();
const id = route.params.id;
const cartStore = useCartStore();

const product = ref({
    image: ["https://placehold.it/800x400", "https://placehold.it/800x400", "https://placehold.it/800x400"],
});
onMounted(async ()=> {
    const games = await gameStore.fetchGame();
    games.forEach((item) => {
        if (item.Id == id) {
            product.value = item;
        }
    });
})


const addToCart = (product) => {
    cartStore.add(product);
s};
</script>
<style>
.carousel__item {
    background-color: black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}</style>