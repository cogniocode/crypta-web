<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {isTokenPresent} from "@/services/token"
    import {populateAuthUser, signOut} from "@/services/user"
    import {syncBookmarksToStore} from "@/services/bookmark"

    export default {
        methods: {
            async populateData() {
                if (isTokenPresent()) {
                    try {
                        await populateAuthUser()
                        syncBookmarksToStore()
                    } catch (e) {
                        signOut()
                        await this.$router.push({name: "Home"})
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
