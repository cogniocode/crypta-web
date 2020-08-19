<template>
    <div class="app-layout d-flex flex-grow-1 flex-row flex-wrap w-100 h-100">
        <app-header class="app-layout__header"/>
        <app-aside-menu :class="{inv: !menuVisible}" class="app-layout__aside-menu col-12 col-xl-2"/>
        <main class="app-layout__content d-flex flex-grow-1 flex-column">
            <b-container fluid="true" class="d-flex flex-grow-1">
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
        components: {AppAsideMenu, AppHeader},
        computed: {
            menuVisible() {
                return this.$store.state.menu.visible
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins";

    .app-layout__header {
        position: fixed;
        z-index: 10;
    }

    .app-layout__content {
        margin-top: 60px;

        @include media-breakpoint-up(xl) {
            margin-left: 16.667%;
        }
    }

    .app-layout__aside-menu  {
        height: 100%;
        position: fixed;
        z-index: 10;
        margin-top: 60px;

        @include media-breakpoint-up(xl) {
            border-right: 1px solid rgba(#000, .1);
        }

        @include media-breakpoint-down(lg) {
            &.inv {
                visibility: hidden;
            }
        }
    }
</style>