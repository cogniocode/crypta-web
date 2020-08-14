<template>
    <div class="guest-layout">
        <main>
            <b-container>
                <b-row class="mt-5 d-flex justify-content-center align-items-center">
                    <b-col cols="auto">
                        <b-link to="/">
                            <crypta-logo white/>
                        </b-link>
                    </b-col>
                </b-row>
                <b-row class="mt-5 d-flex justify-content-center align-items-center">
                    <slot/>
                </b-row>
            </b-container>
        </main>
        <guest-footer/>
    </div>
</template>

<script>
    import GuestHeader from "@/components/GuestHeader"
    import GuestFooter from "@/components/GuestFooter"
    import CryptaLogo from "@/components/brand/CryptaLogo";

    export default {
        name: "GuestLayout",
        components: {CryptaLogo, GuestFooter, GuestHeader}
    }
</script>

<style lang="scss">
    .guest-layout {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
        background: var(--primary-gradient);

        main {
            display: flex;
            width: 100%;
            height: 100%;
            flex-grow: 1;
        }
    }
</style>