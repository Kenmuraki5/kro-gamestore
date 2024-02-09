<template>
    <div class="">



        <!-- ----------------------------------banner---------------------------------- -->

        <div class="mb-10">
            <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
                <Slide v-for="slide in event" :key="slide">
                    <div class="carousel__item">
                        <div class="top-left">
                            <img class="min-w-9 w-72" :src="slide.logo">
                        </div>
                        <img :src=slide.src />
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <!-- -------------------------------------หมวดหมู่------------------------------------- -->

        <div class="grid grid-cols-3 gap-5 mb-52">
            <!-- -----------------------------1--------------------------- -->
            <div
                class=" hidden sm:block relative h-[15rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                <div
                    class="absolute m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">

                </div>
                <div class="relative p-6 px-6 py-14 md:px-12">
                    <h2
                        class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Game Console
                    </h2>
                </div>
            </div>

            <!-- mobile 1 -->
            <div class="sm:hidden flex justify-center items-center bg-gradient-to-tr from-slate-600 to-slate-500 w-[5rem] h-[5rem] relative rounded ">
                <img
                    src="https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="w-full h-full object-cover absolute mix-blend-overlay" />
            
                <h2 class="relative text-white font-sans text-[1rem] font-[470] text-center  ">Game Console</h2>
            </div>

        </div>


        <!-- -------------------------------------สินค้า------------------------------------- -->

    </div>
</template>
  
<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const event = [
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/tekken8-hero-banner-desktop-01-en-26jan24?$4000px$", logo: "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-logo-01-en-21sep22?$800px--t$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/genshin-impact-4-4-hero-desktop-01-en-18jan24?$3200px$", logo: "https://gmedia.playstation.com/is/image/SIEPDC/genshin-impact-white-logo-01-ps4-16nov21$en?$1200px--t$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/Diablo-iv-Season-3-hero-banner-desktop-01-en-22jan24?$4000px$", logo: "https://gmedia.playstation.com/is/image/SIEPDC/Diablo-iv-Season-3-logo-01-en-22jan24?$1200px--t$" }
]


const products = [
    {
        title: 'Product 1',
        image: 'https://via.placeholder.com/150',
        description: 'Description for product 1',
        price: '$10.99'
    },
    {
        title: 'Product 2',
        image: 'https://via.placeholder.com/150',
        description: 'Description for product 2',
        price: '$19.99'
    },
    {
        title: 'Product 3',
        image: 'https://via.placeholder.com/150',
        description: 'Description for product 3',
        price: '$14.99'
    }
];

</script>

<script>
export default {
    async asyncData({ $content }) {
        const site = await $content('site').fetch();

        return {
            site
        };
    }
};
</script>
<style scoped>

</style>