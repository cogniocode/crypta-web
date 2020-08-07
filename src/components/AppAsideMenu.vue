<template>
    <aside class="app-aside-menu">
        <nav class="app-aside-menu__nav">
            <ul class="app-aside-menu__nav__list">
                <li class="app-aside-menu__nav__list__item">
                    <b-link to="/passwords" :disabled="currentPagePath === '/passwords'" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="lock-fill"/>
                        Passwords
                    </b-link>
                </li>
                <li class="app-aside-menu__nav__list__item">
                    <b-link to="/encryptor" :disabled="currentPagePath === '/encryptor'" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="file-binary-fill"/>
                        Encryptor
                    </b-link>
                </li>
                <li class="app-aside-menu__nav__list__item">
                    <b-link to="/generator" :disabled="currentPagePath === '/generator'" class="app-aside-menu__nav__list__item__link">
                        <b-icon icon="file-text-fill"/>
                        Generator
                    </b-link>
                </li>
            </ul>
        </nav>
        <hr>
        <div class="app-aside-menu__bookmarks">
            <h4 v-b-toggle.aside-menu-bookmarks-collapse class="app-aside-menu__bookmarks__title text-muted">
                <b-icon icon="bookmarks-fill"/>
                Bookmarks
                <b-icon :icon="bookmarksVisible ? 'chevron-up' : 'chevron-down'" size="xs" class="text-muted ml-3 m-0"/>
            </h4>
            <b-collapse v-model="bookmarksVisible" class="app-aside-menu__bookmarks__collapse" id="aside-menu-bookmarks-collapse">
                <p class="app-aside-menu__bookmarks__empty-text text-muted mt-3">
                    You don't have any bookmarks.
                </p>
            </b-collapse>
        </div>
        <hr>
        <div class="app-aside-menu__other">
            <b-link to="/settings" :disabled="currentPagePath === '/settings'" class="app-aside-menu__nav__list__item__link app-aside-menu__other__link">
                <b-icon icon="gear-fill"/>
                Settings
            </b-link>
            <b-link to="/about" :disabled="currentPagePath === '/about'" class="app-aside-menu__nav__list__item__link app-aside-menu__other__link">
                <b-icon icon="info-circle-fill"/>
                About
            </b-link>
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
    export default {
        name: "AppAsideMenu",
        data() {
            return {
                bookmarksVisible: true
            }
        },
        computed: {
            currentPagePath() {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss">
    .app-aside-menu {
        border-right: 1px solid rgba(0, 0, 0, .1);
        overflow-y: scroll;
        padding-right: 1rem;
        height: 100%;
    }

    .app-aside-menu__nav {
        padding-top: 1rem;
    }

    .app-aside-menu__nav__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .app-aside-menu__nav__list__item {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .app-aside-menu__nav__list__item__link {
        &:hover {
            text-decoration: none;
        }

        .b-icon {
            font-size: 1.25rem;
            margin-right: .75rem;
        }
    }

    .app-aside-menu__other {
        display: flex;
        flex-direction: column;
    }

    .app-aside-menu__other__link {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
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

    .app-aside-menu__bookmarks__empty-text {
        margin: 0;
        user-select: none;
    }
</style>