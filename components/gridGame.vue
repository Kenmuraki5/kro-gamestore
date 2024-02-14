<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div v-for="product in games" :key="product.id" class="group relative">
                    <NuxtLink :to="`${$route.fullPath}/${product.id}`">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-72 sm:h-60 h-40">
                            <img :src="product.src" :alt="product.imageAlt"
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="md:text-sm text-xs text-gray-700">
                                    <a :href="product.href">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ product.name }}
                                    </a>
                                </h3>
                                <!-- <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p> -->
                            </div>
                            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                        </div>
                    </NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const games = [
    {
        id:1,
        name: "EA SPORTS FC™ 24",
        src: "https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23?$1200px$",
        price: "690 ฿",
        alt: "fc24"
    },
    {
        id:2,
        name: "HOG WARTS LEGACY",
        src: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$",
        price: "900 ฿",
        alt: "HOG WARTS LEGACY"
    },
    {
        id:3,
        name: "The Witcher 3: Wild Hunt GOTY Edition",
        src: "https://images.g2a.com/360x600/1x1x1/the-witcher-3-wild-hunt-goty-edition-pc-steam-account-account-global-i10000026141053/6026806b7e696c7fb045f672",
        price: "900 ฿",
        alt: "The Witcher 3: Wild Hunt GOTY Edition "
    },
    {
        id:4,
        name: "Call of Duty®: Modern Warfare® III - Cross-Gen Bundle",
        src: "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23?$1200px$",
        price: "1625 ฿",
        alt: "Call of Duty®: Modern Warfare® III - Cross-Gen Bundle"
    },
    {
        id:5,
        name: "spider man REMASTER",
        src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png",
        price: "980 ฿",
        alt: "spider man REMASTER"
    },
    {
        id:6,
        name:"SUCIDE SQUARD",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLt4Z7fHkS_UFcP2kd8F0Fogaq31wU195g3Q4RZBFYFaFNog0CGDTejP0wDHF09ibnk&usqp=CAU",
        price: "2422 ฿",
        alt: "sucide squard"
    },
    {
        id:7,
        name: "Granblue Fantasy: Relink",
        src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png",
        price: "1590 ฿",
        alt: "Granblue Fantasy: Relink"
    }
]
</script>