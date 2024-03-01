<template>
  <img :src="product.imageUrl[0]" alt="Product Image" class="w-full h-64 object-contain rounded-md mb-4">
  <nuxt-link :to="`${$route.fullPath}/${product.id}`"
    class="text-xl font-bold hover:text-[#71BDC1] mb-2 hover:underline decoration-[#71BDC1]">{{ product.name
    }}</nuxt-link>
  <p class="text-gray-700 mb-2">{{ splitDesLength(product.description) }}</p>
  <p class="text-gray-800 font-semibold mb-2">Price: {{ product.price }} THB</p>
  <button
    class="bg-[#71BDC1] text-white font-bold py-2 px-4 rounded hover:bg-[#488b8e] focus:outline-none focus:bg-[#488b8e]"
    @click="addToCart(product)">
    Add to Cart
  </button>
</template>
  
<script setup>
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: Array,
      required: true
    }

  }

});


const addToCart = (product) => {
  cartStore.add(product);
  console.log(cartStore.cart);
};

const splitDesLength = (des) => {
  return des.length > 100 ? des.substring(0, 100) + '...' : des;
};
</script>
