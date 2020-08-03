import SignUpPage from "@/pages/signup/SignUpPage"

export default {
    path: "/signup",
    name: "Sign up",
    component: SignUpPage,
    meta: {
        requiresAnonymous: true
    }
}