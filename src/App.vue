<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {isAuthenticated, signOut} from "@/services/auth"
    import {getAuthUser} from "@/services/user"
    import * as userMutationTypes from "@/store/modules/user/mutationTypes"

    export default {
        methods: {
            async getUserIfAuth() {
                if (isAuthenticated()) {
                    try {
                        const user = await getAuthUser()
                        this.$store.commit(`user/${userMutationTypes.SET_USER}`, user)
                    } catch (e) {
                        signOut()
                        await this.$router.push({name: "Home"})
                    }
                }
            }
        },
        async mounted() {
            await this.getUserIfAuth()
        }
    }
</script>

<style lang="scss">
    $primary: #2a5342;
    $font-family-sans-serif: "Open Sans";

    @import "~bootstrap/scss/bootstrap";
    @import "~bootstrap-vue/src";
</style>
