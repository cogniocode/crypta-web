<template>
    <aside class="app-aside-menu bg-white">
        <nav class="app-aside-menu__nav">
            <ul class="app-aside-menu__nav__list">
                <li class="app-aside-menu__nav__list__item">
                    <b-link @click="closeMenu" to="/passwords" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="lock-fill"/>
                        Passwords
                    </b-link>
                </li>
                <li class="app-aside-menu__nav__list__item">
                    <b-link @click="closeMenu" to="/encryptor" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="file-binary-fill"/>
                        Encryptor
                    </b-link>
                </li>
                <li class="app-aside-menu__nav__list__item">
                    <b-link @click="closeMenu" to="/generator" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="file-text-fill"/>
                        Generator
                    </b-link>
                </li>
            </ul>
        </nav>
        <hr>
        <div class="app-aside-menu__bookmarks">
            <h4 v-b-toggle.aside-menu-bookmarks-collapse class="app-aside-menu__bookmarks__title text-muted d-flex flex-row align-items-center justify-content-center">
                <b-icon icon="bookmarks-fill"/>
                Bookmarks
                <b-icon :icon="bookmarksVisible ? 'chevron-up' : 'chevron-down'" size="xs" class="app-aside-menu__bookmarks__title__chevron-icon text-muted ml-auto m-0"/>
            </h4>
            <b-collapse v-model="bookmarksVisible" class="app-aside-menu__bookmarks__collapse" id="aside-menu-bookmarks-collapse">
                <p v-if="bookmarkedPasswords.length === 0" class="app-aside-menu__bookmarks__empty-text text-muted mt-3">
                    You don't have any bookmarks.
                </p>
                <b-list-group class="app-aside-menu__bookmarks__list  mt-3" flush v-else>
                    <b-list-group-item class="app-aside-menu__bookmarks__list__item d-flex flex-row align-items-center pl-1 pr-1 border-0" :to="`/passwords/${password.id}`" v-for="password in bookmarkedPasswords">
                        <img class="mr-3" :src="`https://www.google.com/s2/favicons?sz=32&domain_url=${password.website}`" width="20" alt="">
                        {{password.name}}
                    </b-list-group-item>
                </b-list-group>
            </b-collapse>
        </div>
        <hr>
        <div class="app-aside-menu__other">
            <ul class="app-aside-menu__other__list">
                <li class="app-aside-menu__other__list__item">
                    <b-link to="/settings" title="In development." :disabled="true" class="app-aside-menu__other__list__item__link">
                        <b-icon icon="gear-fill"/>
                        Settings
                    </b-link>
                </li>
            </ul>
        </div>
        <hr>
        <div class="app-aside-menu__footer d-flex flex-column">
            <small class="app-aside-menu__footer__license">
                This project is licensed under <b-link href="https://opensource.org/licenses/GPL-3.0" target="_blank">GNU GPLv3</b-link>
                and is available <b-link href="https://github.com/cogniocode/crypta-web" target="_blank">here</b-link>.
            </small>
            <br>
            <small class="app-aside-menu__footer__developed-by mt-3 text-muted">
                Developed by <b-link href="https://cognio.dev" target="_blank">@cognio</b-link>
            </small>
        </div>
    </aside>
</template>

<script>
    import * as menuMutationTypes from "@/store/modules/menu/mutationTypes"

    export default {
        name: "AppAsideMenu",
        data() {
            return {
                bookmarksVisible: true
            }
        },
        computed: {
            bookmarkedPasswords() {
                let passwords = []

                this.$store.state.bookmarks.bookmarks.forEach(bookmark => {
                    const password = this.$store.state.user.password.passwords.find(password => password.id === bookmark.id)

                    if (password != null)
                        passwords.push(password)
                })

                return passwords
            }
        },
        methods: {
            closeMenu() {
                this.$store.commit(`menu/${menuMutationTypes.SET_MENU}`, false)
            }
        }
    }
</script>

<style lang="scss">
    .app-aside-menu {
        overflow-y: auto;
        padding-right: 1rem;
        height: 100%;
    }

    .app-aside-menu__nav {
        padding-top: .5rem;
    }

    .app-aside-menu__nav__list, .app-aside-menu__other__list {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .app-aside-menu__nav__list__item__link, .app-aside-menu__other__list__item__link {
        display: block;
        width: 100%;
        height: 100%;
        padding: .5rem 0;

        &:hover {
            text-decoration: none;
        }

        .b-icon {
            font-size: 1.25rem;
            margin-right: .75rem;
        }
    }

    .app-aside-menu__bookmarks {
        display: flex;
        flex-flow: column nowrap;
    }

    .app-aside-menu__bookmarks__title {
        margin: 0;
        font-size: 1.25rem;
        user-select: none;

        .b-icon {
            margin-right: .75rem;
        }
    }

    .app-aside-menu__bookmarks__title__chevron-icon {
        font-size: 1rem;
    }

    .app-aside-menu__bookmarks__empty-text {
        margin: 0;
        user-select: none;
    }
</style>