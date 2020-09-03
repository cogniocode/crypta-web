import vm from "@/main"
import * as bookmarksMutationTypes from "@/store/modules/bookmarks/mutationTypes"

const BOOKMARKS_LOCAL_STORAGE_KEY = "bookmarks"

export function syncBookmarksToStore() {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_LOCAL_STORAGE_KEY) ?? "[]")

    vm.$store.commit(`bookmarks/${bookmarksMutationTypes.SET_BOOKMARKS}`, bookmarks)
}

export function persistBookmarksFromStore() {
    const jsonBookmarks = JSON.stringify(vm.$store.state.bookmarks.bookmarks)

    localStorage.setItem(BOOKMARKS_LOCAL_STORAGE_KEY, jsonBookmarks)
}

export function addBookmark(id: number) {
    vm.$store.commit(`bookmarks/${bookmarksMutationTypes.ADD_BOOKMARK}`, id)

    persistBookmarksFromStore()
}

export function removeBookmark(id: number) {
    vm.$store.commit(`bookmarks/${bookmarksMutationTypes.REMOVE_BOOKMARK}`, id)

    persistBookmarksFromStore()
}