<template>
    <div class="mb-10">
        <Carousel :autoplay="4000" :wrap-around="true" :transition="900">
            <Slide v-for="slide in event" :key="slide">
                <div class="xl:h-full sm:h-auto h-32 carousel__item">
                    <div class="top-left w-screen sm:w-full">
                        <img class="min-w-9 md:w-80 w-32" :src="slide?.logo">
                        <div class="text-left xl:w-96 w-72">
                            <p class="xl:text-5xl text-lg md:my-12 my-5">{{ slide.title }}</p>
                            <p class="text-xs xl:text-base md:my-12 my-5">{{ slide.description }}</p>
                        </div>
                    </div>
                    <img :src="slide.src" class="xl:w-screen xl:h-svh w-auto h-50" />
                </div>
            </Slide>


            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
    <section id="game" class="bg-black">
        <div class="mt-10">

            <div class="grid justify-center py-10">
                <div class="grid grid-cols-4 m-5 gap-4">
                    <div v-for="i in gameStore.games.length - gameStore.games.length % 4" :key="i" class="flex justify-center">
                        <nuxt-link :href="'CD-game/'+gameStore.games[i-1].Id">
                            <img class="w-32 xl:w-64 rounded hover:-translate-y-6 duration-300 ease-in-out hover:border-2 hover:border-cyan-300"
                                :src="gameStore.games[i - 1].images[0]">
                        </nuxt-link>
                    </div>
                </div>
                <div :class="'grid grid-cols-3 place-items-center mx-auto gap-3'">
                    <div v-for="i in (gameStore.games.length % 4)" :key="i" class="flex items-center justify-center">
                        <nuxt-link :href="'CD-game/'+gameStore.games[(gameStore.games.length - i)].Id">
                            <img class="w-32 xl:w-64 rounded hover:-translate-y-6 duration-300 ease-in-out hover:border-2 hover:border-cyan-300"
                            :src="gameStore.games[(gameStore.games.length - i)].images[0]" />
                        </nuxt-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="cmp-container">
        <div class="bg-cover md:h-[45vh] h-[30vh]"
            style="background-image: url('https://gmedia.playstation.com/is/image/SIEPDC/this-month-on-playstation-jan-homepage-background-desktop-01-en-03jan24?$4000px$'); background-position: center;">
            <div class="flex items-stretch h-full space-x-4 lg:space-x-16 pb-4 lg:pb-10 mx-4 py-4 lg:ml-10">
                <NuxtLink to="/game-console"
                    class="bg-center w-40 lg:w-64 h-36 lg:h-64 bg-cover rounded bg-transparent self-end hover:-translate-y-6 duration-300 ease-in-out"
                    style="background-image: url('https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                    <p class="text-white font-medium  text-center">Console</p>
                </NuxtLink>
                <div class="bg-center w-40 lg:w-64 h-36 lg:h-64 bg-cover rounded bg-transparent self-end hover:-translate-y-6 duration-300 ease-in-out"
                    style="background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2023_09/3596444/230228-gaming-accessories-vl-2x1.jpg')">
                    <p class="text-white font-medium text-center">Accessories</p>
                </div>
                <NuxtLink to="/CD-game"
                    class="bg-center w-40 lg:w-64 h-36 lg:h-64 bg-cover rounded bg-transparent self-end hover:-translate-y-6 duration-300 ease-in-out"
                    style="background-image: url('https://atlas-content-cdn.pixelsquid.com/stock-images/spider-man-dvd-case-playstation-5-OdlkYJA-600.jpg')">
                    <p class="text-black font-medium text-center">Game</p>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useGameStore } from "@/store/game";
import { useGameConsoleStore } from "@/store/console";
import takken8 from '~/assets/bg/takken8.jpeg'
import spidermanRemaster from '~/assets/bg/spiderman-remaster.png'
import grandblueRelink from '~/assets/bg/grandblue-relink.png'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import takken8logo from '~/assets/gamelogo/takken8logo.jpeg'
import spidermanRemasterlogo from '~/assets/gamelogo/spiderman-remasterlogo.png'
import grandblueRelinklogo from '~/assets/gamelogo/grandblue-relinklogo.png'

const gameStore = useGameStore();
const gameConsoleStore = useGameConsoleStore();


const event = [
    {
        title: "กำปั้นพบกับโชคชะตา",
        description: "มหากาพย์ Mishima ยังคงดำเนินต่อไป สัมผัสกับเรื่องราวใหม่สุดยิ่งใหญ่ที่ประกอบด้วยนักสู้ที่ไม่ธรรมดามากมาย",
        src: takken8,
        logo: takken8logo,
    },
    {
        title: "Marvel's Spider-Man Remastered",
        description: "รีมาสเตอร์และปรับปรุงใหม่เพื่อคอนโซล PS5™ รับประสบการณ์การผจญภัยที่ได้รางวัลพร้อมงานภาพพัฒนาใหม่และฟีเจอร์ใหม่ๆ อันน่าตื่นตาตื่นใจ*",
        src: spidermanRemaster,
        logo: spidermanRemasterlogo
    },
    {
        title: "Granblue Fantasy: Relink",
        description: "Granblue Fantasy: Relink เป็นเกมเล่นตามบทบาทแอ็กชันปี 2024 ที่พัฒนาและเผยแพร่โดย Cygames เกมดังกล่าวเปิดตัวโดยเป็นส่วนหนึ่งของแฟรนไชส์ ​​Granblue Fantasy สำหรับ PlayStation 4, PlayStation 5",
        src: grandblueRelink,
        logo: grandblueRelinklogo
    }
]

</script>


<style>
.carousel__item {
    min-height: 300px;
    width: 100%;
    color: white;
    background-color: black;
    font-size: 20px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    color: white;
    border-radius: 50%;
    background-color: purple;
}

.top-left {
    position: absolute;
    top: 100px;
    left: 60px;
    width: 100%;
}

.title-block {
    font-family: "Hiragino Kaku Gothic Pro", Meiryo, Osaka, "MS PGothic", Arial, sans-serif;
}
</style>