<template>
    <div class="guest-layout">
        <guest-header/>
        <main>
            <slot/>
        </main>
        <guest-footer/>
    </div>
</template>

<script>
    import GuestHeader from "@/components/GuestHeader"
    import GuestFooter from "@/components/GuestFooter"

    export default {
        name: "GuestLayout",
        components: {GuestFooter, GuestHeader}
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
    }

    .guest-layout main {
        display: flex;
        width: 100%;
        height: 100%;
        flex-grow: 1;
    }
</style>