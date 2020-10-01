<template>
    <page class="generator-page">
        <app-layout>
            <b-col cols="12" lg="5" class="password-generation-block p-3">
                <b-form-input class="text-center" v-model="generatedPassword.value" readonly size="lg"/>
                <password-generation-form class="mt-3" @generate="setGeneratedPassword($event)"/>
            </b-col>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import AppLayout from "@/components/layouts/AppLayout"
    import PasswordGenerationForm from "@/pages/passwords/PasswordGenerationForm"

    export default {
        name: "GeneratorPage",
        components: {PasswordGenerationForm, AppLayout, Page},
        data() {
            return {
                generatedPassword: {
                    value: ""
                }
            }
        },
        methods: {
            setGeneratedPassword(value) {
                this.generatedPassword.value = value
            }
        }
    }
</script>

<style scoped>

</style>