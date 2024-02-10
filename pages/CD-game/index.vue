<template>
    <section id="fullscreen">
        <div class="md:min-h-screen h-64 relative">
            <div class="absolute inset-0 bg-cover bg-center">
                <div class="absolute inset-0 w-1/2 bg-gradient-to-l from-[transparent] to-black"></div>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/the-witcher-3-hero-banner-desktop-01-en-12dec22?$3200px$"
                    class="w-full h-full object-cover" alt="The Witcher 3: Wild Hunt" />
            </div>

            <div id="content-in-fullscreen" class="hidden md:block absolute inset-y-0 md:m-20 text-white">
                <div class="text-left md:text-3xl">The Witcher 3: Wild Hunt </div>
                <div class="mt-10">Bandai Namco Entertainment</div>
                <div class="mt-10 md:text-2xl">Detail</div>
                <div class="md:w-64 xl:w-72">Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document or a typeface without relying on meaningful </div>
                <div class="mt-5">Available on PS4 PS5</div>
                <div class="w-64 mt-10">
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

                <button class="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 rounded-full">
                    Add To Cart
                </button>
            </div>
        </div>
    </section>
    <section class="flex justify-center items-center md:m-0 m-20">
        <div id="content-in-mobile" class="md:hidden block text-black text-center">
            <div class="text-3xl">The Witcher 3: Wild Hunt</div>
            <div class="mt-10">Bandai Namco Entertainment</div>
            <div class="mt-5">Available on PS4 PS5</div>
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

const route = useRoute();
const id = route.params.id;

const product = ref({
    id: 1,
    name: "Playstation 5",
    description: "The PlayStation 5 is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
    price: 499.99,
    imageUrl: [
        "https://dl.lnwfile.com/thzz3y.webp",
        "https://media-cdn.bnn.in.th/266271/Sony-PlayStation-5-Standard-(C-Chassis)-5.1-square_medium.jpg"
    ]
});

const addToCart = (product) => {
    console.log('Add to cart', product);
}
</script>
<style>
.carousel__item {
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>