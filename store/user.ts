import { defineStore } from 'pinia'

interface Form {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  imageProfile: string;
}

interface User {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  imageProfile: [];
  address: Address;
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
    user: {} as User,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const { $api } = useNuxtApp()
        this.token = await $api("users/authentication", {
          method: 'POST',
          body: {
            email: email,
            password: password,
          },
        });
        this.fetchUser()
        navigateTo({ path: '/' })
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
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + this.token
          }
        });
        return
      } catch (error) {
        console.error('Fetch user failed:', error);
      }
    },
  


    async updateUser(userForm:Form) {
      console.log('Updating user', this.user);
      try {
        const { $api } = useNuxtApp()
        await $api("users/updateUser", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + this.token
          },
          body: {
            ...userForm,
            password: this.user.password

          },
        });
        this.fetchUser();
      } catch (error) {
        console.error('Update failed:', error);
        return error
      }
    },
  },
  persist: {
    storage: persistedState.localStorage,
    
  },
})
