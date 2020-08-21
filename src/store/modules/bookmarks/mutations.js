import * as types from "./mutationTypes"

export default {
    [types.ADD_BOOKMARK] (state, id) {
        state.bookmarks.push({id})
    },
    [types.REMOVE_BOOKMARK] (state, id) {
        const index = state.bookmarks.findIndex(bookmark => bookmark.id === id)

        state.bookmarks.splice(index, 1)
    },
    [types.SET_BOOKMARKS] (state, bookmarks) {
        state.bookmarks = bookmarks
    },
    [types.CLEAR_BOOKMARKS] (state) {
        state.bookmarks = []
    }
}