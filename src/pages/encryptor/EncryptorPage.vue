<template>
    <page class="encryptor-page">
        <app-layout class="">
            <b-card no-body class="border-0 w-100">
                <b-tabs pills card>
                    <b-tab title="Text">
                        <text-crypto-form/>
                    </b-tab>
                    <b-tab title="Files">
                        <file-crypto-form/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import AppLayout from "@/components/layouts/AppLayout"
    import TextCryptoForm from "@/pages/encryptor/TextCryptoForm"
    import FileCryptoForm from "@/pages/encryptor/FileCryptoForm"

    export default {
        name: "EncryptorPage",
        components: {FileCryptoForm, TextCryptoForm, AppLayout, Page}
    }
</script>

<style scoped>

</style>