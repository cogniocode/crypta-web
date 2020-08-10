import mutations from "@/store/modules/user/mutations"

import password from "./password"

export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations,
    modules: {
        password
    }
}