<template>
    <div class="profile-page bg-gray-100 pt-16 px-4">
      <div class="profile-header flex justify-left items-left">
        <div class="profile-image rounded-full overflow-hidden mr-4 w-32 h-32">
          <img :src="user.avatar" alt="Profile avatar" />
        </div>
        <div class="profile-info">
          <h2 class="text-3xl font-bold text-gray-800">{{ user.name }}</h2>
          <p class="text-gray-600">{{ user.username }}</p>
        </div>
      </div>
      <div class="profile-content mt-8">
        <div class="activity-stream">
          </div>
        <div class="profile-sections mt-8">
          <div class="section basic-information bg-white shadow-md rounded-md p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
            <ul class="list-disc">
              <li class="text-gray-600">
                <span class="font-bold">Full Name:</span>
                <span>{{ user.fullName }}</span>
              </li>
              <li class="text-gray-600">
                <span class="font-bold">Email Address:</span>
                <span>{{ user.emailAddress }}</span>
              </li>
              </ul>
          </div>
          <div class="section system-settings mt-8 bg-white shadow-md rounded-md p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-4">System Settings</h3>
            <ul class="list-disc">
              <li class="text-gray-600">
                <span class="font-bold">Language:</span>
                <span>{{ user.language }}</span>
              </li>
              <li class="text-gray-600">
                <span class="font-bold">Privacy Settings:</span>
                <span>{{ user.privacySettings }}</span>
              </li>
              </ul>
          </div>
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
          // Add more user data as needed
        },
        // Add variables for styling and decoration
      };
    },
    methods: {
      // Add methods for data fetching and profile updates
    },
  };
  </script>

  <style>
/* Add styles for the profile page components here */
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
}.section {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}.list-disc {
  color: #333;
  padding-left: 1.5rem;
}.profile-page a {
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


/* Add styles for other elements like labels, values, buttons, etc. */
</style>