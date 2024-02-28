<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold m-4">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- วนลูปแสดง Card Product สำหรับแต่ละสินค้า -->
      <div class="bg-white p-4 m-10 rounded-lg shadow-md" v-if="products" v-for="product in products">
        <cardProduct :product=product></cardProduct>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useGameStore } from '@/store/game';
import { useGameConsoleStore } from '@/store/console';
const products = ref([
  // {
  //   id: 1,
  //   name: "Playstation 5",
  //   description: "The PlayStation 5 is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
  //   price: 499.99,
  //   imageUrl: ["https://dl.lnwfile.com/thzz3y.webp",
  //     "https://media-cdn.bnn.in.th/266271/Sony-PlayStation-5-Standard-(C-Chassis)-5.1-square_medium.jpg"]
  // },

])

onMounted(() => {
  const gameConsoleStore = useGameConsoleStore();
  gameConsoleStore.fetchGameConsole();
  products.value = gameConsoleStore.gameConsole;
}
)
</script>
