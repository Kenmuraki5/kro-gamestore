<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- วนลูปแสดง Card Product สำหรับแต่ละสินค้า -->
     <CardProduct></CardProduct>
  
    </div>
  </div>
</template>

<script>
const products = ref([
  {
    id: 1,
   name:"Playstation 5",
    description:"The PlayStation 5 is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
    price: 499.99,
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sony.com%2Fen%2Felectronics%2Fplaystation%2Fps5&psig=AOvVaw",

  },
 
])
</script>
