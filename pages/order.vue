<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Orders History</h1>
        <div v-for="order in resultArray" :key="order.orderId" class="bg-white rounded-lg shadow-md p-6 mb-4">
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
const gameStore = useGameStore();
const consoleStore = useGameConsoleStore();


const allGame = gameStore.game;
const allConsole = consoleStore.gameConsole;
const orderData = [
    {
        "orderId": "83502815-4d82-4da4-a18c-40169fc97b74",
        "productId": "1",
        "quantity": 1,
        "customerId": "123",
        "orderDate": "2024-02-29T12:34:56Z",
        "status": "Pending",
        "subtotal": 1600,
        "shippingAddress": "123 Main St, City",
        "shippingMethod": "express",
        "type": "Console"
    },
    {
        "orderId": "83502815-4d82-4da4-a18c-40169fc97b74",
        "productId": "3",
        "quantity": 2,
        "customerId": "123",
        "orderDate": "2024-02-29T12:34:56Z",
        "status": "Pending",
        "subtotal": 800,
        "shippingAddress": "123 Main St, City",
        "shippingMethod": "express",
        "type": "Game"
    },
    {
        "orderId": "83502815-4d82-4da4-a18c-40169fc97b72",
        "productId": "3",
        "quantity": 2,
        "customerId": "123",
        "orderDate": "2024-02-29T12:34:56Z",
        "status": "Pending",
        "subtotal": 800,
        "shippingAddress": "123 Main St, City",
        "shippingMethod": "express",
        "type": "Game"
    },
];

const groupedData = ref(orderData.reduce((acc, order) => {
    const key = order.orderId;

    // ถ้า key นี้ยังไม่มีใน acc ให้สร้าง object ใหม่
    if (!acc[key]) {
        acc[key] = {
            orderId: key,
            orderDate: order.orderDate,
            shippingMethod: order.shippingMethod,
            total: 0, // Initialize total price to 0
            detail: []
        };
    }

    //คำนวณราคารวมของแต่ละ order
    // const totalPrice = order.quantity * order.subtotal;
    acc[key].total += order.subtotal; // Add the current order's total to the overall total

    // เพิ่ม order detail ลงไปใน array
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

// แปลง object ให้เป็น array
const resultArray = Object.values(groupedData.value);

function findGameName(productId) {
    if (allGame && Array.isArray(allGame)) {
        const game = allGame.find(game => game.Id+"" === productId);
        return game ? game.name : 'Unknown Game';
    } else {
        return 'Game data not loaded';
    }
}

function findConsoleName(productId) {
    if (allConsole && Array.isArray(allConsole)) {
        const consoleItem = allConsole.find(console => console.Id+"" === productId);
        return consoleItem ? consoleItem.name : 'Unknown Console';
    } else {
        return 'Console data not loaded';
    }
}

</script>