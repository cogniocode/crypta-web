<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {isTokenPresent} from "@/services/token"
    import {populateAuthUser, signOut} from "@/services/user"
    import {syncBookmarksToStore} from "@/services/bookmark"
    import {ApiError} from "@/api/util"

    export default {
        methods: {
            async populateData() {
                if (isTokenPresent()) {
                    try {
                        await populateAuthUser()
                        syncBookmarksToStore()
                    } catch (e) {
                        if (!(e instanceof ApiError && e.statusCode >= 500)) {
                            signOut()
                            await this.$router.push({name: "Home"})
                        } else {
                            this.$bvToast.toast("Server not available. Please try again later...", {
                                title: "Server error",
                                variant: "danger",
                                solid: true,
                                toaster: "b-toaster-bottom-right",
                                autoHideDelay: 7000
                            })
                        }
                    }
                }
            }
        },
        async mounted() {
            await this.populateData()
        }
    }
</script>

<style lang="scss">
    $primary: #2a5342;
    $primary-gradient: linear-gradient(to bottom, lighten($primary, 2.5%), $primary);
    $font-family-sans-serif: "Open Sans";

    @import "~bootstrap/scss/bootstrap";
    @import "~bootstrap-vue/src";

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

    :root {
        --primary-gradient: #{$primary-gradient};
    }

    a.disabled {
        color: var(--gray);
        cursor: not-allowed;
    }
</style>
