import SignInPage from "@/pages/signin/SignInPage"

export default {
    path: "/signin",
    name: "Sign in",
    component: SignInPage,
    meta: {
        requiresAnonymous: true
    }
}