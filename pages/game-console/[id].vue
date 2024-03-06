<template>
    <div class="container mx-auto mt-4">
        <nuxt-link to="/game-console"
            class="text-black hover:underline decoration-[#71BDC1] hover:text-[#71BDC1]  m-10">Back to
            Products</nuxt-link>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
                    <Slide v-for="slide in product.image" :key="slide">
                        <div class="xl:h-full sm:h-auto h-full">
                            <img :src="slide" class="w-full object-cover" />
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
            <div>
                <h1 class="text-3xl font-bold sm:m-4 m-10">{{ product.name }}</h1>
                <p class="text-gray-700 sm:m-4  m-10">{{ product.description }}</p>
                <p class="text-gray-800 font-semibold sm:m-4  m-10">Price: {{ product.price }} THB</p>
                <button
                    class="bg-[#71BDC1] text-white font-bold py-2 px-2 sm:m-4 rounded hover:bg-[#488b8e] focus:outline-none focus:bg-[#488b8e]  m-10"
                    @click="addToCart(product)">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useGameConsoleStore } from '~/store/console';
import { useCartStore } from '~/store/cart';
const route = useRoute();
const gameConsoleStore = useGameConsoleStore();
const cartStore = useCartStore();
const id = route.params.id;

const product = ref({});


onMounted(async ()=> {
    await gameConsoleStore.fetchGameConsole();
    gameConsoleStore.gameConsole.filter((item) => {
        if (item.Id == id) {
            product.value = item;
        }
    });
})


const addToCart = (product) => {
    cartStore.add(product);
}
</script>
