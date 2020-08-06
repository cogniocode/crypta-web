<template>
    <page class="sign-in-page">
        <main>
            <b-container class="sign-in-page__container">
                <b-row align-h="center">
                    <b-col lg="4" md="6" sm="12">
                        <div class="sign-in-page__sign-in-block">
                            <h4 class="sign-in-page__sign-in-block__title">
                                Sign in
                            </h4>
                            <sign-in-form class="sign-in-page__sign-in-block__sign-in-form mb-3 mt-3"/>
                            <b-link class="sign-in-page__sign-in-block__sign-up-link" to="/signup">Sign up</b-link>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import SignInForm from "@/pages/signin/SignInForm"

    export default {
        name: "SignInPage",
        components: {SignInForm, Page}
    }
</script>

<style lang="scss" scoped>
    .sign-in-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .sign-in-page main {
        width: 100%;
        height: 100%;
    }
</style>