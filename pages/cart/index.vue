<template>
    <div>
      <h1>Shopping Cart</h1>
      <div class="grid grid-cols-1 gap-4">
        <!-- Product Loop -->
        <div v-for="product in products" :key="product.id">
          <!-- Product Card -->
          <div class="bg-white p-4 rounded shadow ">
            <h2 class="text-xl font-semibold">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="text-blue-500 font-semibold">{{ product.price }} USD</p>
            <button @click="addToCart(product)" class="bg-red-500 text-white p-2 mt-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const products = ref([
    {
      id: 1,
      name: "Product 1",
      description: "This is a description for product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description for product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description for product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is a description for product 4",
      price: 400,
    }
  ]);
  
  // Define addToCart function
  const addToCart = (product) => {
    console.log('Added to cart:', product);
  };
  </script>
  