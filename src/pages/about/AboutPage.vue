<template>
    <page class="about-page">
        <app-layout>
            <b-col col="12" class="p-4">
                <h2>About</h2>
            </b-col>
        </app-layout>
    </page>
</template>

<script>
    import Page from "@/components/Page"
    import AppLayout from "@/components/layouts/AppLayout"

    export default {
        name: "AboutPage",
        components: {AppLayout, Page}
    }
</script>

<style scoped>

</style>