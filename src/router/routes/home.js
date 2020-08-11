import {isTokenPresent} from "@/services/token";

export default {
    path: "/",
    name: "Home",
    redirect(to) {
        if (!isTokenPresent()) {
            return {
                name: "Sign in"
            }
        } else return {
            name: "Passwords"
        }
    }
}