<template>
    <page class="sign-up-page">
        <sign-up-form/>
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

<style scoped>

</style>