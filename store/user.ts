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
      try {
        const { $api } = useNuxtApp()
        const token:string = await $api("users/authentication", {
          method: 'POST',
          body: {
            email: email,
            password: password,
          },
        });
        this.token = token;
        this.fetchUser()
        await navigateTo({ path: '/' })
      } catch (error) {
        console.log(error)
      }
    },
    
    async register(form: Form, address: Address) {
      try {
        const { $api } = useNuxtApp()
        this.token = await $api("users/addCustomer", {
          method: 'POST',
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
        return error
      }
    },
    async logout() {
      this.$reset();
    },

    async fetchUser() {
      try {
        const { $api } = useNuxtApp()
        this.user = await $api("users", {
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
