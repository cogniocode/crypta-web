<template>
    <header class="app-header bg-primary">
        <b-container fluid="true" class="h-100">
            <b-col cols="12" class="app-header__col h-100">
                <h2 class="app-header__title text-white">Crypta</h2>
                <b-dropdown variant="outline-white text-white" right class="app-header__profile-dropdown ml-auto">
                    <template #button-content>
                        {{ username }}
                    </template>
                    <b-dropdown-item to="/profile">Open profile</b-dropdown-item>
                    <b-dropdown-item-button @click="signOut" variant="danger">Sign out</b-dropdown-item-button>
                    <b-dropdown-divider/>
                    <b-dropdown-item to="/settings">Settings</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-container>
    </header>
</template>

<script>
    import {signOut} from "@/services/auth"

    export default {
        name: "AppHeader",
        methods: {
            signOut() {
                signOut()

                this.$router.push({name: "Home"})
            }
        },
        computed: {
            username() {
                return this.$store.state.user.user?.username ?? ""
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

    .app-header__title {
        display: inline;
        font-size: 1.5rem;
        margin: 0;
    }
</style>