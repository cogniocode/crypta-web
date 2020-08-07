import PasswordsPage from "@/pages/passwords/PasswordsPage"

export default {
    path: "/passwords",
    name: "Passwords",
    component: PasswordsPage,
    meta: {
        requiresAuth: true,
        title: "Passwords"
    }
}