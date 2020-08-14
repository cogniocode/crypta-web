<template>
    <footer class="guest-footer">
        <b-container>
            <b-col class="guest-footer__content" cols="12">
                <b-link href="https://cognio.dev" target="_blank">
                    <cognio-emblem class="guest-footer__cognio-emblem"/>
                </b-link>
            </b-col>
        </b-container>
    </footer>
</template>

<script>
    import CognioEmblem from "@/components/brand/CognioEmblem";
    export default {
        name: "GuestFooter",
        components: {CognioEmblem}
    }
</script>

<style lang="scss">
    .guest-footer {
        height: 60px;
        width: 100%;

        .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .guest-footer__content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .guest-footer__cognio-emblem {
        fill: white;
    }
</style>