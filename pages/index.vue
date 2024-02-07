<template>
    <header>
        <nav class="bg-white-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company">
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page">Dashboard</a>
                                <a href="#"
                                    class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                <a href="#"
                                    class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <a href="#"
                                    class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <button type="button" @click="profileMenu = profileMenu == false ? true : false"
                                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>
                            <div v-if="profileMenu"
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Your Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Settings</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page">Dashboard</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>
    </header>
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
    <div>
        <Carousel :items-to-show="5.5">
            <Slide v-for="slide in console" :key="slide">
                <div class="carousel__item2 rounded shadow-md">
                    <img :src=slide.src>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
    <section class="bg-black">
        <div class="mt-10">
            <div class="text-white text-center text-3xl py-10">
                Great games on PS4 and PS5 that are already available or coming soon.
            </div>
            <div class="grid justify-center pb-20">
                <div class="grid grid-cols-4 m-5 gap-4">
                    <div v-for="i in games.length - games.length % 4" class="flex justify-center">
                        <img class="xl:w-64 md:w-auto rounded" :src="games[i - 1].src">
                    </div>
                </div>
                <div :class="'grid grid-cols-' + games.length % 4 + ' place-items-center mx-auto gap-3'">
                    <div v-for="i in (games.length % 4)" class="flex items-center justify-center">
                        <img class="xl:w-64 col-end-auto rounded" :src="games[(games.length - i)].src" />
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>
  
<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const event = [
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/tekken8-hero-banner-desktop-01-en-26jan24?$4000px$", logo:"https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-logo-01-en-21sep22?$800px--t$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/genshin-impact-4-4-hero-desktop-01-en-18jan24?$3200px$", logo:"https://gmedia.playstation.com/is/image/SIEPDC/genshin-impact-white-logo-01-ps4-16nov21$en?$1200px--t$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/Diablo-iv-Season-3-hero-banner-desktop-01-en-22jan24?$4000px$", logo:"https://gmedia.playstation.com/is/image/SIEPDC/Diablo-iv-Season-3-logo-01-en-22jan24?$1200px--t$" }
]

const games = [
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23?$1200px$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/alan-wake-pack-01-en-30oct23?$1200px$" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23?$1200px$" },
    { src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLt4Z7fHkS_UFcP2kd8F0Fogaq31wU195g3Q4RZBFYFaFNog0CGDTejP0wDHF09ibnk&usqp=CAU" },
    { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png" }
]
const console = [
    { src: "https://dl.lnwfile.com/thzz3y.webp" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-range-stacked-image-block-01-en-11feb22?$1200px$" },
    { src: "https://images.droidsans.com/wp-content/uploads/2023/08/abd09fe9ea04916658f038e19df8101ff687e287-scaled-1.jpg" },
    { src: "https://static-jaymart.com/ecom/public/2NzQP8mwKYj6Y55Nf57IIF38Nad.jpg" },
    { src: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$" },
    { src: "data:image/jpeg;base64,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PvSRxOmhHmQfeFbkeRrY9PvX49Rz4cUF5oJBI8ePC9lbeX/w8NCCNdTx14Wt7ir0R7vXnbr6KlpHsf5RcW9UFgyPv3S0+ZHs+HisyKYW1cL89QrDnC1wwg/lAVMZHHLbzAQZm9b1HvCqa6+o1VljgeQ9yrugomGqqhdyR+oWPmsgzLpdWWTAqvMgruiozL1jroK0REEX9uWCPkhiqI25tySHjoCQQT4XFv1KGqvEmSaE2I4X4kePiOC+sZ4Q9pa4XBBBB5gqHtsey+I7wwfuXP1DS0GN5F7Brz3ojqeZHpZblSogzKuixN9PNFURGz4ntkb45Tq0+BFwfAlYtZTSQPMcrHRuGuV4INjwIvxB5HgVm7P4NNXTNgpmF73HU/hjbzfI78LR/wDBckBET52j7aNjwcVFO6zqxjI6c8271t3O8C1mbydZfPMJsF9B7bdnm+wqGkpjmkpGtdDew3xa0te0k6AuuSOVwOAXz2ad4l3BY5smcRmNzSHh5Nspadb35KRauxyAnU26rYfbhI3cxXcXENFtcx5m3Gw+JK6am7JZDYzVUbBzaA57gehAs2/k4qTNh9gaeB+/y7x4taRzGsGgAG7jaLAWHHU+OpWkdDsDhDqWhhieLOsXvHQvN7el7ei6FEXNoREQEREBERAREQEREFJYDxAVDqdp4j4kK6iC2IR1KbrxPwVxEFvdeJVJpweqvIgtCnHj71Vuh/RKrRBRuh/RKpMDenxKuogtfZ29PiV6IR/RKuIgt7kdPmqmMA4CyqRAREQF45oIsRcdCvUQazGdnqWqAFVTxT5ful7AS2/JruIHkruE4PT0rCylgjgaTciNjW5jwu633j4lZyIC1eJbO0k72yT00UkjbFsjmNztsbiz+IsfFbREGNHh8TdRGwHrlF/eslEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" }
]
const profileMenu = ref(false);
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
  
<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.carousel__item2 {
    min-height: 200px;
    width: 300px;
    color: white;
    background: white;

    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
</style>
  