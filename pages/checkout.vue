<template>
  <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="#" class="text-2xl font-bold text-gray-800">Payment</a>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg></a>
            <span class="font-semibold text-gray-900">Shop</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a :class="{
              'bg-emerald-200 text-xs font-semibold text-emerald-700':
                isCheckingCredit,
              'bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2':
                !isCheckingCredit,
            }" class="flex h-6 w-6 items-center justify-center rounded-full" href="#">
              <p v-if="!isCheckingCredit">2</p>
              <svg v-if="isCheckingCredit" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <!-- You can add other content for the non-submitted state here -->
            </a>

            <span class="font-semibold text-gray-900">Checking</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a :class="{
              'bg-emerald-200 text-xs font-semibold text-emerald-700':
                isCheckingPayment,
              'bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2':
                !isCheckingPayment,
            }" class="flex h-6 w-6 items-center justify-center rounded-full" href="#">
              <p v-if="!isCheckingPayment">3</p>
              <svg v-if="isCheckingPayment" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <!-- You can add other content for the non-submitted state here -->
            </a>

            <span class="font-semibold text-gray-900">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">
        Check your items. And select a suitable shipping method.
      </p>
      <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6" v-for="item in carts" :key="item.Id">
        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" :src="item.images[0]" alt="" />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{{ item.name }}</span>
            <span class="float-right text-gray-400">{{
              item.description
            }}</span>
            <p class="text-gray-400">{{ item.price }} THB</p>
            <p class="text-gray-400">Qty: {{ item.quantity }}</p>
            <p class="text-lg font-bold">
              Subtotal: {{ item.price * item.quantity }}
            </p>
          </div>
        </div>
      </div>

      <p class="mt-8 text-lg font-medium">Shipping Methods</p>
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="radio" value="DHL Express" v-model="shippingMethod"
            checked />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_1">
            <img class="w-14 object-contain" src="~/assets/dhl-logo.png" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">DHL Express</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input class="peer hidden" id="radio_2" type="radio" name="radio" value="Kerry Express"
            v-model="shippingMethod" checked />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_2">
            <img class="w-14 object-contain" src="~/assets/kerry-logo.jpg" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">Kerry Express</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div class="relative">
          <input type="text" id="email" name="email" v-model="email"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div class="relative">
          <input type="text" id="card-holder" name="card-holder"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your full name here" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div class="flex">
          <div class="relative w-7/12 flex-shrink-0">
            <input type="text" id="card-no" name="card-no"
              class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="xxxx-xxxx-xxxx-xxxx" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input type="text" name="credit-expiry"
            class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="MM/YY" />
          <input type="text" name="credit-cvc"
            class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="CVC" />
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
        <div class="flex flex-col sm:flex-row">
          <div class="relative flex-shrink-0 sm:w-7/12">
            <input type="text" id="billing-address" name="billing-address"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Street Address" v-model="billingAddress" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <img class="h-4 w-4 object-contain" src="~/assets/thaiflag.png" alt="" />
            </div>
          </div>
          <input type="text" id="District" name="District"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="เเขวง/ตำบล" v-model="billingSubDistrict" />
        </div>
        <div class="flex flex-col sm:flex-row">
          <div class="relative flex-shrink-0 sm:w-1/3">
            <input type="text" id="subDistrict" name="subDistrict"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="เขต" v-model="billingDistrict" />
          </div>
          <input type="text" id="Province" name="Province"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="จังหวัด" v-model="billingProvince" />
          <input type="text" name="PostalCode"
            class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/5 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="รหัสไปราณีย์" v-model="billingZip" />
        </div>

        <!-- Total -->
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">{{ totalAmount }} THB</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">{{ shippingCost }} THB</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">
            {{ totalAmount + shippingCost }} THB
          </p>
        </div>
      </div>
      <button @click="checkingCard()" class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        Payment
      </button>
    </div>
  </div>
</template>
<script setup>
import districts from "~/assets/static/thai_amphures.json";
import subdistricts from "~/assets/static/thai_tambons.json";
import provinces from "~/assets/static/thai_provinces.json";
import { useCartStore } from "@/store/cart";
import Swal from "sweetalert2";
import { useAuth } from "@/store/user";

const authStore = useAuth();
const cartStore = useCartStore();

//cart
const carts = cartStore.cart;
const totalAmount = computed(() => {
  return cartStore.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
});

//form shipping
const shippingCost = 50;
const email = ref("");
const billingAddress = ref("");
const billingSubDistrict = ref("");
const billingDistrict = ref("");
const billingProvince = ref("");
const billingZip = ref("");
const shippingMethod = ref("Kerry Express");
const tokenpayment = ref("");

const isCheckingCredit = ref(false);
const isCheckingPayment = ref(false);
const { $api } = useNuxtApp();

const checkingCard = async () => {
  const address =
    billingAddress.value +
    " " +
    billingSubDistrict.value +
    " " +
    billingDistrict.value +
    " " +
    billingProvince.value +
    " " +
    billingZip.value;
  const orders = cartStore.cart.map((item) => {
    return {
      ProductId: item.Id,
      Quantity: item.quantity,
      Email: email.value,
      OrderDate: "2024-02-29T12:34:56Z",
      ShippingAddress: address,
      ShippingMethod: shippingMethod.value,
      Type: item.type,
      Subtotal: item.price * item.quantity,
    };
  });
  try {
    tokenpayment.value = await $api("orders/createPaymentToken", {
      method: "POST",
      body: {
        Name: "John Doe",
        Number: "4242424242424242",
        ExpirationMonth: 10,
        ExpirationYear: 2029,
        cvc: "123",
      },
    });
    isCheckingCredit.value = true;
    Swal.fire({
      title: "Are you sure",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Payment",
    }).then(async (result) => {
      if (result.isConfirmed) {
        payment(orders);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const payment = async (orders) => {
  try {
    await $api("orders/addOrders", {
      method: "POST",
      body: {
        newOrder: orders,
        token: tokenpayment.value,
        amount: totalAmount.value,
      },
    });
    Swal.fire({
      title: "Success!",
      text: "Your view order in order page.",
      icon: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
