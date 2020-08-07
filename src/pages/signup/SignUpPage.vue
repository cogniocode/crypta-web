<template>
    <page class="sign-up-page">
        <guest-layout>
            <b-container class="sign-up-page__container">
                <b-col lg="4" md="6" sm="12">
                    <div class="sign-up-page__sign-up-block">
                        <h3 class="sign-up-page__sign-up-block__title">
                            Sign up
                        </h3>
                        <sign-up-form class="mt-4"/>
                    </div>
                </b-col>
            </b-container>
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
    .sign-up-page__container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
</style>