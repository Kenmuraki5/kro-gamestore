<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
        <div class="hidden sm:flex sm:w-1/2 bg-cover bg-center bg-sky-100 h-screen items-center justify-center">
            <img class="h-72 w-auto" src="../assets//logo.png" alt="Your Company">
        </div>
        <div class="w-full sm:w-1/2 mx-4">
            <div class="flex sm:hidden bg-cove items-center justify-center">
                <img class="h-64 w-auto" src="../assets//logo.png" alt="Your Company">
            </div>
            <div class="sm:mx-auto sm:w-full">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account
                </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6">
                    <!-- mail -->
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required=""
                                v-model="form.email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- password -->
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="new-password" required=""
                                v-model="form.password"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- confirm password -->
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                                Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="new-password" required=""
                                v-model="form.confirmPassword"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button @click="registerUser()"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register
                            account</button>
                    </div>
                </div>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Already have an account?
                    {{ ' ' }}
                    <nuxt-link href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in
                        here</nuxt-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2';
const form = ref({
    email: '',
    password: '',
    confirmPassword: ''
});

const registerUser = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });

};

definePageMeta({
    layout: ''
});
</script>
