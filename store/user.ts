import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user
  },

  actions: {
    async login(email: string, password: string) {
      const { $api } = useNuxtApp()
      const response:string = await $api("customers/authentication", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: email,
          password: password,
        },
      });
      console.log(response)
    },

    async logout() {

    },

    async fetchUser() {

    }
  }
})
