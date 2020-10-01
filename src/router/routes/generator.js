import GeneratorPage from "@/pages/generator/GeneratorPage";

export default {
    path: "/generator",
    name: "Generator",
    component: GeneratorPage,
    meta: {
        requiresAuth: true,
        title: "Generator"
    }
}