import {isAuthenticated} from "@/services/auth";

export default {
    path: "/",
    name: "Home",
    redirect(to) {
        if (!isAuthenticated()) {
            return {
                name: "Sign in"
            }
        } /*else return {
            name: "Dashboard"
        }*/
    }
}