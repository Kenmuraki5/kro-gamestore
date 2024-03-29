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
  imageProfile: string[];
  address: Address;
  role: string;
}

interface Address {
  address: string;
  province: string;
  district: string;
  subDistrict: string;
  postalcode: string;
}


export const useAuth = defineStore('auth', {
  state: () => ({
    token: "",
    user: {} as User,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user.role
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
        const token = useCookie('token');
        token.value = this.token; 
        if (this.token){
          this.fetchUser()
        }
        navigateTo({ path: '/' })
      } catch (error) {
        console.log(error)
      }
    },
    
    async register(form: Form, address: Address) {
      try {
        const { $api } = useNuxtApp()
        this.token = await $api("users/addUser", {
          method: 'POST',
          body: {
            ...form, 
            address: {
              address: address.address, 
              province: address.province,
              district: address.district,
              subDistrict: address.subDistrict,
              postalCode: address.postalcode
            }
          },
        });
        const token = useCookie('token');
        token.value = this.token; 
        if (this.token){
          this.fetchUser()
          navigateTo("/")
        }
      } catch (error) {
        console.error('Registration failed:', error);
        return error
      }
    },
    async logout() {
      const token = useCookie('token');
      token.value = null;
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
