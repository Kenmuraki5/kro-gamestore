import { jwtDecode } from "jwt-decode";
import { useAuth } from "~/store/user";


export default defineNuxtRouteMiddleware(async (to, from) => {

  const authStore = useAuth();
  const token = useCookie("token");

  const { role }: { role: string } = token.value ? jwtDecode(token.value) : { role: "" };

  if (role != "kro-admin" && (to.path == "/admin")) {
    abortNavigation();
  }
  else if ((to.path == "/profile" || to.path == "/checkout" || to.path == "/orderHistory") && !token.value) {
    return navigateTo("/login");
  }
});