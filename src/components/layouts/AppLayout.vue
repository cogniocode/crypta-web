<template>
    <div class="app-layout d-flex flex-grow-1 flex-column w-100 h-100">
        <app-header/>
        <main class="app-layout__content d-flex flex-grow-1 flex-column">
            <b-container fluid="true" class="d-flex flex-grow-1">
                <b-col cols="2" class="pr-0">
                    <app-aside-menu class="border-right border-muted"/>
                </b-col>
                <slot/>
            </b-container>
        </main>
    </div>
</template>

<script>
    import AppHeader from "@/components/AppHeader";
    import AppAsideMenu from "@/components/AppAsideMenu";
    export default {
        name: "AppLayout",
        components: {AppAsideMenu, AppHeader}
    }
</script>

<style lang="scss" scoped>

</style>