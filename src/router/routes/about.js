import AboutPage from "@/pages/about/AboutPage"

export default {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
        requiresAuth: true,
        title: "About"
    }
}