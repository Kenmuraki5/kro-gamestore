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
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an
                    account
                </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-3">
                    <!-- fullName -->
                    <div>
                        <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">fullName</label>
                        <div class="mt-2">
                            <input id="fullName" name="fullName" type="fullName" autocomplete="fullName"
                                v-model="form.fullName"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- mail -->
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email"
                                v-model="form.email"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- password -->
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password"
                                class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="new-password"
                                v-model="form.password"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- confirm password -->
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="confirmpassword"
                                class="block text-sm font-medium leading-6 text-gray-900">Confirm
                                Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="confirmpassword" name="confirm-password" type="password"
                                autocomplete="new-password"
                                v-model="confirmPassword"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <!-- Phone number -->
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="confirmpassword"
                                class="block text-sm font-medium leading-6 text-gray-900">PhoneNumber</label>
                        </div>
                        <div class="mt-2">
                            <input id="PhoneNumber" name="PhoneNumber" type="tel"
                            
                                v-model="form.phoneNumber"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="address"
                                class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                        </div>
                        <div class="mt-2">
                            <input id="address" name="address" type="address" autocomplete="new-password"
                                v-model="address.address"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="province"
                                class="block text-sm font-medium leading-6 text-gray-900">Province</label>
                        </div>
                        <div class="mt-2">
                            <select id="province" v-model="address.province"
                                class="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option v-for="province in provinces" :key="province.id" :value="province">{{
                                    province.name_th }}
                                </option>
                            </select>
                        </div>

                    </div>
                    <div class="mt-2 flex flex-wrap -mx-2">
                        <!-- District -->
                        <div class="w-full sm:w-1/2 px-2">
                            <div class="flex items-center justify-between">
                                <label for="district"
                                    class="block text-sm font-medium leading-6 text-gray-900">District</label>
                            </div>
                            <div class="mt-2">
                                <select id="district" v-model="address.district"
                                    class="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option
                                        v-for="district in districts.filter(district => district.province_id == address.province.id)"
                                        :key="district.id" :value="district">{{ district.name_th }}</option>
                                </select>
                            </div>
                        </div>

                        <!-- Subdistrict -->
                        <div class="w-full sm:w-1/2 px-2">
                            <div class="flex items-center justify-between">
                                <label for="subdistrict"
                                    class="block text-sm font-medium leading-6 text-gray-900">Subdistrict</label>
                            </div>
                            <div class="mt-2">
                                <select id="subdistrict" v-model="address.subDistrict" data-te-select-init
                                    class="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option
                                        v-for="subdistrict in subdistricts.filter(subdistrict => subdistrict.amphure_id == address.district.id)"
                                        :key="subdistrict.id" :value="subdistrict">{{ subdistrict.name_th }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="postalCode" class="block text-sm font-medium leading-6 text-gray-900">Postal
                                code</label>
                        </div>
                        <div class="mt-2">
                            <input id="postalCode" name="postalcode" type="postalCode"
                                v-model="address.postalcode"
                                class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                    <nuxt-link href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign
                        in
                        here</nuxt-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import districts from "../assets/static/thai_amphures.json";
import subdistricts from "../assets/static/thai_tambons.json";
import provinces from "../assets/static/thai_provinces.json";
import Swal from 'sweetalert2';
import { useAuth } from "~/store/user";
import { useRouter} from "vue-router";

const router = useRouter()
const auth = useAuth()

const form = ref({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    imageProfile: []
});

const confirmPassword = ref("")

const address = ref({
    address: "",
    province: {},
    district: {},
    subDistrict: {},
    postalcode: ""
})

const registerUser = () => {
    const useraddress = {
        address: address.value.address,
        province: address.value.province.name_th,
        district: address.value.district.name_th,
        subDistrict: address.value.subDistrict.name_th,
        postalcode: address.value.postalcode
    }
    auth.register(form.value, useraddress)
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
    router.push("/login")
};

definePageMeta({
    layout: ''
});
</script>
