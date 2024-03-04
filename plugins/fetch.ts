import { useAuth } from "~/store/user";

export default defineNuxtPlugin(() => {
    const authStore = useAuth() 
    const config = useRuntimeConfig();
    const $api = $fetch.create({
      baseURL: config.public.baseURL,
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "bearer " + authStore.token
      }
    })
    return {
      provide: {
        api: $api
      }
    }
  });
  