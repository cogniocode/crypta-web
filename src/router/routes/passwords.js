import PasswordsPage from "@/pages/passwords/PasswordsPage"

export default [
    {
        path: "/passwords",
        name: "Passwords",
        component: PasswordsPage,
        meta: {
            requiresAuth: true,
            title: "Passwords"
        }
    },
    {
        path: "/passwords/:passwordId",
        name: "Selected password",
        component: PasswordsPage,
        props: true,
        meta: {
            requiresAuth: true,
            title: "Passwords"
        }
    }
]