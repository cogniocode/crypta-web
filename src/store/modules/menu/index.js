import * as mutationTypes from "./mutationTypes"

export default {
    namespaced: true,
    state: {
        visible: false
    },
    mutations: {
        [mutationTypes.SWITCH_MENU] (state) {
            state.visible = !state.visible
        },
        [mutationTypes.SET_MENU] (state, value) {
            state.visible = value
        }
    }
}