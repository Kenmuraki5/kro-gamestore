<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <img :src="product.imageUrl[0]" alt="Product Image" class="w-full h-64 object-cover rounded-md mb-4">
    <nuxt-link :to="`${$route.fullPath}/${product.id}`" class="text-xl font-bold mb-2 hover:underline decoration-[#71BDC1]" >{{ product.name }}</nuxt-link>
    <p class="text-gray-700 mb-2">{{ splitDesLength(product.description) }}</p>
    <p class="text-gray-800 font-semibold mb-2">Price: {{ product.price }} THB</p>
    <button
      class="bg-[#71BDC1] text-white font-bold py-2 px-4 rounded hover:bg-[#488b8e] focus:outline-none focus:bg-[#488b8e]"
      @click="addToCart(product)">
      Add to Cart
    </button>
  </div>
</template>
  
<script setup>

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
};

const splitDesLength = (des) => {
  return des.length > 100 ? des.substring(0, 100) + '...' : des;
};
</script>
