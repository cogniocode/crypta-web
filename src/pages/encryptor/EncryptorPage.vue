<template>
    <page class="encryptor-page">
        <app-layout class="">
            <b-card no-body class="border-0 w-100">
                <b-tabs pills card>
                    <b-tab title="Text">
                        <text-crypto-form/>
                    </b-tab>
                    <b-tab title="Files">In development.</b-tab>
                </b-tabs>
            </b-card>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import AppLayout from "@/components/layouts/AppLayout"
    import TextCryptoForm from "@/pages/encryptor/TextCryptoForm"

    export default {
        name: "EncryptorPage",
        components: {TextCryptoForm, AppLayout, Page}
    }
</script>

<style scoped>

</style>