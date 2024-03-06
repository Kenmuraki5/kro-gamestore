<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div v-for="product in games" :key="product.Id" class="group relative">
                    <nuxt-link :to="`${$route.fullPath}/${product.Id}`">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-72 sm:h-60 h-40">
                            <img :src="product.image[0]" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '@/store/game';

const props = defineProps({
    games: Object
});

</script>
