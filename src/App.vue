<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @use "~atomio-vue/dist/theming";

    #app {
        @include theming.new-theme("primary", (

        ));
    }
</style>
