<template>
 
    <img :src="product?.image" alt="Product Image" class="w-full rounded-lg">
    <h3 class="text-lg font-semibold my-2">{{ product?.title }}</h3>
    <p class="text-sm text-gray-600 mb-2">{{ product?.description }}</p>
    <p class="text-lg font-bold">{{ product?.price }}</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700">Add to Cart</button>
 
</template>
  
<script setup>
  const props = defineProps({
    product: Object
  });
</script>
