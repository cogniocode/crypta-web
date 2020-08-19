<template>
    <b-card @click="goToPasswordPage" class="password-card">
        <div class="d-flex flex-row align-items-center">
            <b-card-img class="mr-4" v-if="password.website" width="30" left :src="`https://www.google.com/s2/favicons?sz=32&domain_url=${password.website}`"/>
            <div>
                <b-card-title>
                    {{password.name}}
                </b-card-title>
                <b-card-sub-title>
                    {{password.username}}
                </b-card-sub-title>
            </div>
        </div>
        <template #footer>
            <small class="text-muted">
                Created on {{new Date(password.createdAt * 1000).toLocaleString("en")}}
            </small>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "PasswordCard",
        props: {
            password: Object
        },
        methods: {
            goToPasswordPage() {
                this.$router.push(`/passwords/${this.password.id}`)
            }
        }
    }
</script>

<style lang="scss">
    .password-card {
        cursor: pointer;
    }
</style>