<template>
    <div class="container mx-auto mt-4">
        <nuxt-link to="/game-console" class="text-black hover:underline decoration-[#71BDC1] hover:text-[#71BDC1]  m-10">Back to Products</nuxt-link>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
                    <Slide v-for="slide in product.imageUrl" :key="slide">
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

//for fetching data from Golang API

// onMounted(async ()=>{
//     product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());
//     console.log(product);
// })

const addToCart = (product) => {
    console.log('Add to cart', product);
}
</script>
