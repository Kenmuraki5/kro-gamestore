import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("token");

  const { role }:any = token.value ? jwtDecode(token.value) : "";
  if (role != "kro-admin" && to.name == "Admin") {
    return abortNavigation();
  }
  if ((to.name == "profile" || to.name == "checkout" || to.name == "profile-order") && !token.value) {
    return navigateTo("/login");
  }
});