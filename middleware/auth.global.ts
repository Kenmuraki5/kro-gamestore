import { jwtDecode } from "jwt-decode";
import { useAuth } from "~/store/user";


export default defineNuxtRouteMiddleware(async (to, from) => {

  const authStore = useAuth();
  const check = authStore.token
  const { role }: { role: string } = authStore.token ? jwtDecode(authStore.token) : { role: "" };
  const checkuser = role == "kro-admin";

  if (checkuser && (to.path == "/admin")) {
    console.log(checkuser);
  }
  else if ((to.path == "/profile" || to.path == "/checkout" || to.path == "/orderHistory") && !authStore.token) {
    return navigateTo("/login");
  }
});