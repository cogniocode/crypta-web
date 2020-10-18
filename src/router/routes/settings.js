import SettingsPage from "@/pages/settings/SettingsPage"

export default {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: {
        requiresAuth: true,
        title: "Settings"
    }
}