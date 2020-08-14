<template>
    <page class="passwords-page">
        <app-layout>
            <b-col cols="6" class="border-right border-muted p-0">
                <password-list-block/>
            </b-col>
            <b-col cols="4" class="p-0">
                <password-block v-if="selectedPasswordOrNull != null" :password="selectedPasswordOrNull"/>
            </b-col>
            <b-modal v-model="passwordCreationModalVisible" title="Create password" hide-footer id="password-creation-modal">
                <password-creation-form @create="passwordCreationModalVisible = false"/>
            </b-modal>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import AppLayout from "@/components/layouts/AppLayout"
    import PasswordListBlock from "@/pages/passwords/PasswordListBlock"
    import PasswordCreationForm from "@/pages/passwords/PasswordCreationForm"
    import PasswordBlock from "@/pages/passwords/PasswordBlock";

    export default {
        name: "PasswordsPage",
        components: {PasswordBlock, PasswordCreationForm, PasswordListBlock, AppLayout, Page},
        props: {
            passwordId: String
        },
        computed: {
            selectedPasswordOrNull() {
                if (this.passwordId == null)
                    return null
                else
                    return this.$store.state.user.password.passwords.find(
                        password => password.id.toString() === this.passwordId
                    ) ?? null
            }
        },
        data() {
            return {
                passwordCreationModalVisible: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .password-creation-block {
        height: 100%;
        display: flex;
        flex-direction: column;

        &.hidden {
            display: none;
        }
    }
</style>