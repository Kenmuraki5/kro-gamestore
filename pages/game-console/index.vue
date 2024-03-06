<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold m-4">Products</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div v-if="gameConsoleStore.gameConsole">
        <div
          v-for="product in gameConsoleStore.gameConsole"
          :key="product.Id"
          class="bg-white p-4 m-10 rounded-lg shadow-md"
        >
          <cardProduct :product="product"></cardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useGameConsoleStore } from "@/store/console";

const gameConsoleStore = useGameConsoleStore();
</script>
