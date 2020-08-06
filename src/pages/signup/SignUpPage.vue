<template>
    <page class="sign-up-page">
        <main>
            <b-container class="sign-up-page__container">
                <b-row align-h="center">
                    <b-col lg="4" md="6" sm="12">
                        <sign-up-form/>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </page>
</template>

<script>
    import Page from "../../components/Page"
    import SignUpForm from "./SignUpForm";

    export default {
        name: "SignUpPage",
        components: {SignUpForm, Page}
    }
</script>

<style lang="scss" scoped>
    .sign-up-page__container {
        height: 100%;
    }
</style>