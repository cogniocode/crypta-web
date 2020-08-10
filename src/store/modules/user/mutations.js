import * as types from "./mutationTypes"

export default {
    [types.SET_USER] (state, user) {
        state.user = user
    },
    [types.CLEAR_USER] (state) {
        state.user = null
    }
}