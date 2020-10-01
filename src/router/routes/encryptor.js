import EncryptorPage from "@/pages/encryptor/EncryptorPage"

export default {
    path: "/encryptor",
    name: "Encryptor",
    component: EncryptorPage,
    meta: {
        requiresAuth: true,
        title: "Encryptor"
    }
}