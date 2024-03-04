import { defineStore } from 'pinia'

interface Form {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  imageProfile: string;
}

interface Address {
  address: string;
  province: string;
  district: string;
  subdistrict: string;
  postalcode: string;
}

interface User {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  address: Address;
  imageProfile: string[];
}

export const useAuth = defineStore('auth', {
  state: () => ({
    token: "",
    user: {},
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async login(email: string, password: string) {
      const { $api } = useNuxtApp()
      const token:string = await $api("customers/authentication", {
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      });
      this.token = token;
      this.fetchUser();
    },
    async register(form: Form, address: Address) {
      try {
        const { $api } = useNuxtApp()
        this.token = await $api("customers/addCustomer", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            ...form, 
            address: {
              address: address.address, 
              province: address.province,
              district: address.district,
              subDistrict: address.subdistrict,
              postalCode: address.postalcode
            }
          },
        });
        this.fetchUser();
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
    async logout() {
      this.$reset();
    },

    async fetchUser() {
      try {
        const { $api } = useNuxtApp()
        this.user = await $api("customers", {
          method: 'GET',
        });
      } catch (error) {
        console.error('Fetch user failed:', error);
      }
    }
  },
  persist: {
    storage: persistedState.localStorage,
    
  },
})
