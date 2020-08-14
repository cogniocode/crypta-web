<template>
    <page class="sign-in-page">
        <guest-layout>
            <b-col lg="5" md="7" sm="12">
                <div class="sign-in-page__sign-in-block p-5 bg-light">
                    <h3 class="sign-in-page__sign-in-block__title text-primary w-100">
                        Sign in
                    </h3>
                    <sign-in-form class="sign-in-page__sign-in-block__sign-in-form mb-3 mt-5"/>
                    <b-link class="sign-in-page__sign-in-block__sign-up-link" to="/signup">Sign up</b-link>
                </div>
            </b-col>
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
    .sign-in-page__sign-in-block {
        border-radius: .5rem;
    }

    .sign-in-page__sign-in-block__title {
        margin: 0;
        text-align: center;
    }

    .sign-in-page__sign-in-block__sign-up-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>