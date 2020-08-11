<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {isTokenPresent} from "@/services/token"
    import {populateAuthUser, signOut} from "@/services/user"

    export default {
        methods: {
            async populateData() {
                if (isTokenPresent()) {
                    try {
                        await populateAuthUser()
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
    $font-family-sans-serif: Inter;

    @import "~bootstrap/scss/bootstrap";
    @import "~bootstrap-vue/src";
</style>
