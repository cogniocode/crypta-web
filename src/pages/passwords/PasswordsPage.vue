<template>
    <page class="passwords-page">
        <app-layout>
            <b-col cols="6" class="pt-3 pb-3">
                <div class="passwords-page__header">
                    <h3 class="passwords-page__header__title m-0 text-muted">
                        Passwords
                    </h3>
                    <b-button class="passwords-page__header__create-button ml-auto" variant="primary">
                        <b-icon icon="plus"/>
                        Create password
                    </b-button>
                    <b-dropdown right class="passwords-page__header__options-dropdown ml-2">
                        <template #button-content>
                            <b-icon icon="three-dots-vertical" class="mr-1"/>
                        </template>
                        <b-dropdown-form>

                        </b-dropdown-form>
                    </b-dropdown>
                </div>
            </b-col>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page";
    import AppLayout from "@/components/layouts/AppLayout";
    export default {
        name: "PasswordsPage",
        components: {AppLayout, Page}
    }
</script>

<style lang="scss" scoped>
    .passwords-page__header {
        display: flex;
        flex-direction: row;
    }

    .passwords-page__header__title {
        font-size: 2rem;
        user-select: none;
    }
</style>