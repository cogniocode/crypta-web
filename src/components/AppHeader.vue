<template>
    <header class="app-header bg-primary">
        <b-container fluid="true" class="h-100">
            <b-col cols="12" class="app-header__col h-100">
                <b-button @click="switchMenu" size="sm" variant="light" class="app-header__menu-button d-xl-none mr-3">
                    <b-icon icon="list"/>
                </b-button>
                <router-link :to="{name: 'Home'}">
                    <crypta-logo white class="app-header__logo"/>
                </router-link>
                <b-dropdown variant="outline-white text-white" right class="app-header__profile-dropdown ml-auto">
                    <template #button-content>
                        <img class="app-header__profile-dropdown__user-avatar mr-1" :src="`https://www.gravatar.com/avatar/${md5HashedUserEmail}?d=retro`" alt="User avatar">
                    </template>
                    <b-dropdown-text>
                        <span class="font-weight-normal">
                            Signed in as <strong>{{ username }}</strong>
                        </span>
                    </b-dropdown-text>
                    <b-dropdown-divider/>
                    <b-dropdown-item disabled to="/profile">Open profile</b-dropdown-item>
                    <b-dropdown-item-button @click="signOut" variant="danger">Sign out</b-dropdown-item-button>
                    <b-dropdown-divider/>
                    <b-dropdown-item disabled to="/settings">Settings</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-container>
    </header>
</template>

<script>
    import {signOut} from "@/services/user"
    import CryptaLogo from "@/components/brand/CryptaLogo"
    import * as menuMutationTypes from "@/store/modules/menu/mutationTypes"
    import md5 from "md5"

    export default {
        name: "AppHeader",
        components: {CryptaLogo},
        methods: {
            signOut() {
                signOut()

                this.$router.push({name: "Home"})
            },
            switchMenu() {
                this.$store.commit(`menu/${menuMutationTypes.SWITCH_MENU}`)
            }
        },
        computed: {
            username() {
                return this.$store.state.user.user?.username ?? ""
            },
            md5HashedUserEmail() {
                if (this.$store.state.user.user?.email != null) {
                    return md5(this.$store.state.user.user.email)
                } else return null
            }
        }
    }
</script>

<style lang="scss">
    .app-header {
        height: 60px;
        width: 100%;
    }

    .app-header__col {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .app-header__logo {
        height: 30px;
    }

    .app-header__profile-dropdown__user-avatar {
        height: 30px;
        border-radius: 25px;
    }
</style>