<template>
    <header class="guest-header">
        <b-container>
            <b-col cols="12" class="h-100 w-100 d-flex justify-content-center align-items-center">
                <crypta-logo/>
            </b-col>
        </b-container>
    </header>
</template>

<script>
    import CryptaLogo from "@/components/brand/CryptaLogo";
    export default {
        name: "GuestHeader",
        components: {CryptaLogo}
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