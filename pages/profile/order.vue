<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Orders History</h1>
        <div v-for="order in groupedData" :key="order.orderId" class="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 class="text-xl font-semibold mb-2">Order ID: {{ order.orderId }}</h2>
            <p class="text-gray-600">Order Date: {{ order.orderDate }}</p>
            <p class="text-gray-600">Shipping Method: {{ order.shippingMethod }}</p>
            <p class="text-gray-600">Total: {{ order.total }}</p>
            <h3 class="text-lg font-semibold mt-4 mb-2">Order Details:</h3>
            <div v-for="detail in order.detail" :key="detail.productId" class="border-t border-gray-200 pt-2 mt-2">
                <p><span class="font-semibold">Product ID:</span> {{ detail.productId }}</p>
                <p><span class="font-semibold">Quantity:</span> {{ detail.quantity }}</p>
                <p><span class="font-semibold">Customer ID:</span> {{ detail.customerId }}</p>
                <p><span class="font-semibold">Status:</span> {{ detail.status }}</p>
                <p><span class="font-semibold">Subtotal:</span> {{ detail.subtotal }}</p>
                <p><span class="font-semibold">Shipping Address:</span> {{ detail.shippingAddress }}</p>
                <p><span class="font-semibold">Type:</span> {{ detail.type }}</p>
                <!-- แสดงชื่อเกมหรือคอนโซลที่เกี่ยวข้อง -->
                <p v-if="detail.type === 'Game'">Game: {{ findGameName(detail.productId) }}</p>
                <p v-if="detail.type === 'Console'">Console: {{ findConsoleName(detail.productId) }}</p>
            </div>
        </div>
    </div>
</template>





<script setup>
import { ref } from 'vue';
import { useGameStore } from '@/store/game';
import { useGameConsoleStore } from '@/store/console';
import { useAuth } from "@/store/user";
const gameStore = useGameStore();
const consoleStore = useGameConsoleStore();
const authStore = useAuth();


const orderData = ref([])

const fetchAllOrder = async () => {
  try {
    const { $api } = useNuxtApp()
    const response = await $api("orders/userOrders", {
          method: 'GET',
        });
    if (response == null) {
      return (orderData.value = []);
    }
    orderData.value = response;
    console.log(orderData.value)
  } catch (error) {
    console.log(error.message);
  }
};

const groupedData = computed(() => orderData.value.reduce((acc, order) => {
    const key = order.orderId;

    if (!acc[key]) {
        acc[key] = {
            orderId: key,
            orderDate: order.orderDate,
            shippingMethod: order.shippingMethod,
            total: 0,
            detail: []
        };
    }

    acc[key].total += order.subtotal;

    acc[key].detail.push({
        productId: order.productId,
        quantity: order.quantity,
        customerId: order.customerId,
        status: order.status,
        subtotal: order.subtotal,
        shippingAddress: order.shippingAddress,
        type: order.type
    });

    return acc;
}, {}));

function findGameName(productId) {
    if (gameStore.games && Array.isArray(gameStore.games)) {
        const game = gameStore.games.find(game => game.Id+"" === productId);
        return game ? game.name : 'Unknown Game';
    } else {
        return 'Game data not loaded';
    }
}

function findConsoleName(productId) {
    if (consoleStore.gameConsoles && Array.isArray(consoleStore.gameConsoles)) {
        const consoleItem = consoleStore.gameConsoles.find(console => console.Id+"" === productId);
        return consoleItem ? consoleItem.name : 'Unknown Console';
    } else {
        return 'Console data not loaded';
    }
}
fetchAllOrder();
</script>