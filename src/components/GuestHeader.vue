<template>
    <header class="guest-header">
        <b-container>
            <b-col cols="12" class="h-100 w-100">
                <h2 class="guest-header__title">Crypta</h2>
            </b-col>
        </b-container>
    </header>
</template>

<script>
    export default {
        name: "GuestHeader"
    }
</script>

<style lang="scss">
    .guest-header {
        height: 60px;
        width: 100%;

        .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .guest-header__title {
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>