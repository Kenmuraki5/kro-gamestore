<template>
    <div class="profile-page bg-gray-100 pt-16 px-4">
        <div class="profile-header flex justify-left items-left">
            <div class="profile-image rounded-full overflow-hidden mr-4 w-32 h-32"> <img :src="user.avatar"
                    alt="Profile avatar" /> <input type="file" @change="uploadAvatar" class="hidden" />
                <!-- input element should be inside the div --> </div>
            <div class="profile-info">
                <h2 class="text-3xl font-bold text-gray-800">{{ user.name }}</h2>
                <p class="text-gray-600">{{ user.username }}</p>
                <p class="text-gray-600">{{ user.emailAddress }}</p>
                
            </div>
        </div>
        <div class="profile-content mt-8">
            <div class="activity-stream"> </div>
            <div class="profile-sections mt-8">
                <div class="section basic-information bg-white shadow-md rounded-md p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
                    <!-- <ul class="list-disc">
                        <li class="text-gray-600"> <span class="font-bold">Full Name:</span> <span>{{ user.fullName
                        }}</span> </li>
                        <li class="text-gray-600"> <span class="font-bold">Email Address:</span> <span>{{ user.emailAddress
                        }}</span> </li>
                    </ul> -->
                    <div class="profile-form mt-8"> <label for="name">Name:</label> <input type="text" id="name"
                        v-model="user.name"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    <label for="username">Username:</label> <input type="text" id="username" v-model="user.username"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    <label for="email">Email Address:</label> <input type="email" id="email" v-model="user.emailAddress"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    <label for="password">Password:</label> <input type="password" id="password" v-model="user.password"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    <label for="confirmPassword">Confirm Password:</label> <input type="password" id="confirmPassword"
                        v-model="user.confirmPassword"
                        class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    <button @click="editProfile"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit Profile</button>
                </div>
                </div>
                <!-- <div class="section system-settings mt-8 bg-white shadow-md rounded-md p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">System Settings</h3>
                    <ul class="list-disc">
                        <li class="text-gray-600"> <span class="font-bold">Language:</span> <span>{{ user.language }}</span>
                        </li>
                        <li class="text-gray-600"> <span class="font-bold">Privacy Settings:</span> <span>{{
                            user.privacySettings }}</span> </li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            user: {
                name: "Cathy Chu", // Replace with actual user data
                username: "cchu01",
                avatar: "", // Replace with image URL
                fullName: "",
                emailAddress: "",
                language: "",
                privacySettings: "",
                password: "",
                confirmPassword: "",
                // Add more user data as needed
            },
            // Add variables for styling and decoration
        };
    },
    methods: {
        uploadAvatar(event) {
            // Handle file upload here
        },
        editProfile() {
            // Handle profile edit here
        },
    },
};
</script>
  
<style>/* Add styles for the profile page components here */
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

/* Add styles for other elements like labels, values, buttons, etc. */</style>