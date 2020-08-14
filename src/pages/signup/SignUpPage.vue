<template>
    <page class="sign-up-page">
        <guest-layout>
            <b-col lg="5" md="7" sm="12">
                <div class="sign-up-page__sign-up-block p-5 bg-light">
                    <h3 class="sign-up-page__sign-up-block__title text-primary w-100">
                        Sign up
                    </h3>
                    <sign-up-form class="mt-5"/>
                </div>
            </b-col>
        </guest-layout>
    </page>
</template>

<script>
    import Page from "../../components/Page"
    import SignUpForm from "./SignUpForm";
    import GuestLayout from "@/components/layouts/GuestLayout";

    export default {
        name: "SignUpPage",
        components: {GuestLayout, SignUpForm, Page}
    }
</script>

<style lang="scss" scoped>
    .sign-up-page__sign-up-block {
        border-radius: .5rem;
    }

    .sign-up-page__sign-up-block__title {
        text-align: center;
    }
</style>