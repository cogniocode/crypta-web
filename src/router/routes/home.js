import {isAuthenticated} from "@/services/auth";

export default {
    path: "/",
    name: "Home",
    redirect(to) {
        if (isAuthenticated()) {
            return {
                name: "Dashboard"
            }
        } else return {
            name: "Sign in"
        }
    }
}