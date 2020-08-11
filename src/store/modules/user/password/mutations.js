import * as types from "./mutationTypes"

export default {
    [types.SET_PASSWORDS] (state, passwords) {
        state.passwords = passwords
    },
    [types.CLEAR_PASSWORDS] (state) {
        state.passwords = []
    },
    [types.ADD_PASSWORD] (state, password) {
        state.passwords.push(password)
    },
    [types.REMOVE_PASSWORD] (state, index) {
        if (index < state.passwords.length) {
            state.passwords.splice(index, 1)
        }
    }
}