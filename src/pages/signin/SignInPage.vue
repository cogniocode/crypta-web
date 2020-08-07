<template>
    <page class="sign-in-page">
        <guest-layout>
            <b-container class="sign-in-page__container">
                <b-col lg="4" md="6" sm="12">
                    <div class="sign-in-page__sign-in-block">
                        <h3 class="sign-in-page__sign-in-block__title">
                            Sign in
                        </h3>
                        <sign-in-form class="sign-in-page__sign-in-block__sign-in-form mb-3 mt-4"/>
                        <b-link class="sign-in-page__sign-in-block__sign-up-link" to="/signup">Sign up</b-link>
                    </div>
                </b-col>
            </b-container>
        </guest-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import SignInForm from "@/pages/signin/SignInForm"
    import GuestLayout from "@/components/layouts/GuestLayout";

    export default {
        name: "SignInPage",
        components: {GuestLayout, SignInForm, Page}
    }
</script>

<style lang="scss" scoped>
    .sign-in-page__container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    .sign-in-page__sign-in-block__sign-up-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>