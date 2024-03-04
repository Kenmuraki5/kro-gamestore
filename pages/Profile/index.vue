<template>
    <div class="profile-page  pt-16 px-4">
        <h1 class="text-4xl font-bold  text-gray-900 mb-5 ml-10 ">Profile </h1>
        <div class="profile-header flex justify-start items-center ml-5">
            <div class="profile-image rounded-full overflow-hidden mr-4 w-40 h-40">
                <img :src="user.avatar" alt="Profile avatar"
                    class="profile-avatar min-w-200 min-h-200 object-cover w-full h-full" />

            </div>
            <div class="profile-info  ml-5">
                <h2 class="text-3xl font-bold text-gray-800">{{ user.name }}</h2>
                <p class="text-gray-600 m-1">{{ user.username }}</p>
                <p class="text-gray-600 m-1 decoration-2 underline decoration-sky-500">{{ user.emailAddress }}</p>
                <h3 class="mt-3">Change picture</h3>
                <div class="flex items-center justify-center text-gray-400 border-2 bordor-solid ">
                    <!-- <label for="fileInput"> Avatar</label> -->
                    <input type="file" ref="fileInput" @change="handleFileInput">
                    <div class="drop-area" @dragover.prevent="dragOver" @drop.prevent="dropFile"
                        @click="$refs.fileInput.click()">
                        <!-- <p>Drag and drop your profile picture here, or click to select</p> -->
                    </div>
                    <!-- <img v-if="user.avatar" :src="user.avatar" alt="Profile Image" style="max-width: 200px;"> -->

                </div>


            </div>
        </div>
        <div class="profile-content mt-8">
            <div class="activity-stream "> </div>
            <div class="profile-sections bg-gray-100 mt-8">
                <div class="section basic-information bg-white shadow-md rounded-md p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Account Information</h3>
                    <div class="profile-form mt-8"> <label for="name">Name:</label> <input type="text" id="name"
                            v-model="user.name"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />
                        <label for="username" class="block mb-2">Username:</label> <input type="text" id="username"
                            v-model="user.username"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />
                        <label for="email" class="block mb-2">Email Address:</label> <input type="email" id="email"
                            v-model="user.emailAddress"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />
                        <label for="password" class="block mb-2">Password:</label> <input type="password" id="password"
                            v-model="user.password"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />
                        <label for="confirmPassword" class="block mb-2">Confirm Password: </label> <input
                            type="password" id="confirmPassword" v-model="user.confirmPassword"
                            class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4" />

                        <!-- validate_password -->
                        <!-- <p v-if="user.confirmPassword == user.password && (user.password != '' )" class="text-green-600">Passwords match!</p>
                        <p v-else-if="user.confirmPassword !== user.password" class="text-red-600">Passwords do not match!</p> -->
                        <!-- <p v-if="passwordsMatch" class="text-green-600">Passwords match!</p>
                        <p v-else-if="user.confirmPassword !== '' || !passwordsMatch" class="text-red-600">Passwords do not match!</p> -->

                    </div>
                </div>

                <div class=" address-form section system-settings mt-8 bg-white shadow-md rounded-md p-4">
                    <h1 class="text-xl font-bold text-gray-800 mb-4"> Address Information</h1>
                    <label for="address" class="block mb-2">Address:</label>
                    <input type="text" id="address" v-model="user.address"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกที่อยู่ของคุณ" />


                    <label for="province" class="block mb-2">Province:</label>
                    <select id="province" v-model="user.province"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option v-for="province in provinces" :key="province.id" :value="province.id">{{
                    province.name_th

                }}
                        </option>
                    </select>

                    <label for="district" class="block mb-2">District:</label>
                    <select id="district" v-model="user.district"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option v-for="district in districts.filter(district => district.province_id == user.province)"
                            :key="district.id" :value="district.id">{{ user.district + district.name_th }}</option>
                    </select>

                    <label for="subdistrict" class="block mb-2">Subdistrict:</label>
                    <select id="subdistrict" v-model="user.subdistrict"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4">
                        <option
                            v-for="subdistrict in subdistricts.filter(subdistrict => subdistrict.amphure_id === user.subdistrict)"
                            :key="subdistrict.id" :value="subdistrict.id">{{ subdistrict.name_th }}</option>
                    </select>



                    <label for="postal-code" class="block mb-2">รหัสไปรษณีย์:</label>
                    <input type="number" id="postal-code" v-model="user.postalCode"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 mb-4"
                        placeholder="กรอกรหัสไปรษณีย์ของคุณ" />
                </div>
                <button @click="editProfile"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Save
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

// const filteredDistricts = computed(() => {
//     if (!user.province) return []; // Return empty array if no province is selected
//     console.log("fil", districts);
//     return districts.filter(district => district.province_id === user.province.id);

// });



var provinces = require("../../assets/static/thai_provinces.json");
var districts = require("../../assets/static/thai_amphures.json");
var subdistricts = require("../../assets/static/thai_tambons.json");


var user = ref({
    name: "Owen",
    username: "OwenUsername",
    avatar: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/375574779_2749709631851419_6840915737247955428_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFgyDDu_QBE4-6P2cEqHLHjFvee6mK9nfIW957qYr2d8h8zE0Dm0pQ14U7-Qp_IUD8mPCEatstsOMC-8uXQGN3d&_nc_ohc=w2s26ESuIuMAX-0QIFP&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfB4I54xTSw5EP1B6Gsc7kOcY055qEBdE5Amb6abb3gHiw&oe=65D5FB98", // Replace with image URL
    fullName: "",
    emailAddress: "Owen@Email.com",
    language: "",
    privacySettings: "",
    password: "",
    confirmPassword: "",
    address: "",
    province: {},
    district: {},
    subdistrict: {},
    postalCode: "",

})
console.log(districts.filter(district => district.province_id == 1))

</script>

<script>

function uploadAvatar(event) {
    const file = event.target.files[0];
    // Example: Upload the file to a server and update user.avatar with the returned URL
    // For demonstration, I'll just set user.avatar to a local URL
    this.user.avatar = URL.createObjectURL(file);
};
function editProfile() {

}

</script>

<style>
.profile-page {
    /* Background color, padding, margin, etc. */
}

.profile-header {
    /* Styles for header layout, image, and info */
}

.profile-content {
    /* Styles for content layout, sections, etc. */
}

.profile-sections {
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
}

.section {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.list-disc {
    color: #333;
    padding-left: 1.5rem;
}

.profile-page a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.profile-page a:hover {
    color: #0056b3;
}

.profile-page a:active {
    color: #003d7a;
}

.profile-avatar {
    /* width: 300px;
    height: 300px; */
    /* transform: scale(); */

}
</style>