<template>
    <div class="profile-page  pt-16 px-4 bg-gray-100">
        <h1 class="text-4xl font-bold  text-gray-900 mb-5 ml-10 ">Profile </h1>
        <div class="profile-header flex justify-start items-center ml-5">
            <div class="profile-image rounded-full overflow-hidden mr-4 w-40 h-40">
                <img :src="userForm.imageProfile" alt="Profile avatar"
                    class="profile-avatar min-w-200 min-h-200 object-cover w-full h-full" />

            </div>
            <div class="profile-info  ml-5">
                <h2 class="text-3xl font-bold text-gray-800">{{ userForm.fullName }}</h2>
                <p class="text-gray-600 m-1">{{ userForm.username }}</p>
                <p class="text-gray-600 m-1 decoration-2 underline decoration-sky-500">{{ userForm.email }}</p>
                <h3 class="mt-3">Change picture</h3>
                <div class="flex items-center justify-center text-gray-400 border-2 bordor-solid ">
                    <!-- <label for="fileInput"> Avatar</label> -->
                    <input type="file" ref="fileInput" @change="handleFileInput">
                    <div class="drop-area" @dragover.prevent="dragOver" @drop.prevent="dropFile"
                        @click="$refs.fileInput.click()">
                        <!-- <p>Drag and drop your profile picture here, or click to select</p> -->
                    </div>
                    <!-- <img v-if="userForm.imageProfile" :src="userForm.imageProfile" alt="Profile Image" style="max-width: 200px;"> -->

                </div>


            </div>
        </div>
        <div class="profile-content mt-8">
            <div class="activity-stream "> </div>
            <div class="profile-sections bg-gray-100 mt-8">
                <div class="section basic-information bg-white shadow-md rounded-md p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Account Information</h3>
                    <div class="profile-form mt-8"> <label for="name">Full Name:</label> <input type="text" id="name"
                            v-model="userForm.fullName" :readonly="!isEditMode"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />
                        <label for="email" class="block mb-2">Email Address:</label> <input type="email" id="email"
                            readonly v-model="userForm.email"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />

                        <label for="phone" class="block mb-2">Phone number:</label> <input type="text" id="phone"
                            v-model="userForm.phoneNumber" :readonly="!isEditMode"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />

                        <!-- validate_password -->
                        <!-- <p v-if="userForm.confirmPassword == userForm.password && (userForm.password != '' )" class="text-green-600">Passwords match!</p>
                        <p v-else-if="userForm.confirmPassword !== userForm.password" class="text-red-600">Passwords do not match!</p> -->
                        <!-- <p v-if="passwordsMatch" class="text-green-600">Passwords match!</p>
                        <p v-else-if="userForm.confirmPassword !== '' || !passwordsMatch" class="text-red-600">Passwords do not match!</p> -->

                    </div>
                </div>

                <div class=" address-form section system-settings mt-8 bg-white shadow-md rounded-md p-4">
                    <h1 class="text-xl font-bold text-gray-800 mb-4"> Address Information</h1>
                    <label for="address" class="block mb-2">Address:</label>
                    <textarea type="text" id="address" v-model="userForm.address.address" :readonly="!isEditMode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกที่อยู่ของคุณ" />

                    <label for="province" class="block mb-2">Province:</label>
                    <input type="text" id="province" v-model="userForm.address.province" :readonly="!isEditMode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกจังหวัดของคุณ" />

                    <label for="district" class="block mb-2">District:</label>
                    <input type="text" id="district" v-model="userForm.address.district" :readonly="!isEditMode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกอำเภอของคุณ" />


                    <label for="subdistrict" class="block mb-2">Subdistrict:</label>
                    <input type="text" id="subdistrict" v-model="userForm.address.subDistrict" :readonly="!isEditMode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกตำบลของคุณ" />
                    <!-- <label for="province" class="block mb-2">Province:</label>
                    <select id="province" v-model="userForm.province"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option v-for="province in provinces" :key="province.id" :value="province">{{ province.name_th }}
                        </option>
                    </select>
                    <label for="district" class="block mb-2">District:</label>
                    <select id="district" v-model="userForm.district"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option v-for="district in districts.filter(district => district.province_id == userForm.province.id)"
                            :key="district.id" :value="district">{{ district.name_th }}</option>
                    </select>

                    <label for="subdistrict" class="block mb-2">Subdistrict:</label>
                    <select id="subdistrict" v-model="userForm.subdistrict"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option
                            v-for="subdistrict in subdistricts.filter(subdistrict => subdistrict.amphure_id == userForm.district.id)"
                            :key="subdistrict.id" :value="subdistrict">{{ subdistrict.name_th }}</option>
                    </select> -->



                    <label for="postal-code" class="block mb-2">PostalCode:</label>
                    <input type="number" id="postal-code" v-model="userForm.address.postalCode" :readonly="!isEditMode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกรหัสไปรษณีย์ของคุณ" />
                </div>

                <button v-if="!isEditMode" @click="toggleEditMode"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Edit
                </button>
                <button v-if="isEditMode" @click="saveChanges"
                    class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Save
                </button>
                <button v-if="isEditMode" @click="cancelEdit"
                    class="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">Cancel
                </button>
                <!-- <button @click="updateUserFunc()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Save
                </button> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import districts from "@/assets/static/thai_amphures.json";
import subdistricts from "@/assets/static/thai_tambons.json";
import provinces from "@/assets/static/thai_provinces.json";
import Swal from 'sweetalert2';
import { useAuth } from "@/store/user";

const isEditMode = ref(false);
const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
};
const saveChanges = () => {
    // Save changes logic here
    updateUserFunc();
    isEditMode.value = false;
};

const cancelEdit = () => {
    // Revert changes or reset form values
    isEditMode.value = false;
};

const authStore = useAuth();

var userForm = ref({
    fullName: authStore.user.fullName,
    email: authStore.user.email,
    phoneNumber: authStore.user.phoneNumber,
    address: {
        address: authStore.user.address.address,
        province: authStore.user.address.province,
        district: authStore.user.address.district,
        subDistrict: authStore.user.address.subDistrict,
        postalCode: authStore.user.address.postalCode
    },
    imageProfile: ["https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/375574779_2749709631851419_6840915737247955428_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFgyDDu_QBE4-6P2cEqHLHjFvee6mK9nfIW957qYr2d8h8zE0Dm0pQ14U7-Qp_IUD8mPCEatstsOMC-8uXQGN3d&_nc_ohc=w2s26ESuIuMAX-0QIFP&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfB4I54xTSw5EP1B6Gsc7kOcY055qEBdE5Amb6abb3gHiw&oe=65D5FB98"] // Replace with image URL

    // `${authStore.userForm.address.address} ${authStore.userForm.address.subDistrict} ${authStore.userForm.address.province} ${authStore.userForm.address.postalCode}`,
})
const updateUserFunc = () => {
    console.log("up", userForm.value);
    authStore.updateUser(userForm.value)
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
};

</script>