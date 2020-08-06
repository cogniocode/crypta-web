<template>
    <footer class="guest-footer">
        <b-container>
            <b-col class="guest-footer__content" cols="12">
                <span class="guest-footer__developed-by">
                    Developed by <b-link href="https://github.com/cogniocode" target="_blank">@cognio</b-link>
                </span>
            </b-col>
        </b-container>
    </footer>
</template>

<script>
    export default {
        name: "GuestFooter"
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
</style>