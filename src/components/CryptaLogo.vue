<template>
    <svg class="crypta-logo" :class="{white}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2257.89 574.95">
        <text class="a" transform="translate(592.36 428.47)">Crypta</text>
        <path class="b"
              d="M425,107.15a40,40,0,0,1,40,40v250a40,40,0,0,1-40,40H75a40,40,0,0,1-40-40v-250a40,40,0,0,1,40-40H425m0-35H75a75,75,0,0,0-75,75v250a75,75,0,0,0,75,75H425a75,75,0,0,0,75-75v-250a75,75,0,0,0-75-75Z"/>
        <path class="b"
              d="M340,207.15a15,15,0,0,1,15,15v100a15,15,0,0,1-15,15H140a15,15,0,0,1-15-15v-100a15,15,0,0,1,15-15H340m0-35H140a50,50,0,0,0-50,50v100a50,50,0,0,0,50,50H340a50,50,0,0,0,50-50v-100a50,50,0,0,0-50-50Z"/>
        <circle class="b" cx="189.98" cy="272.15" r="37.5"/>
        <rect class="b" x="354.99" y="214.65" width="65" height="40" rx="17.5"/>
        <rect class="b" x="354.99" y="289.65" width="65" height="40" rx="17.5"/>
    </svg>
</template>

<script>
    export default {
        name: "CryptaLogo",
        props: {
            white: Boolean
        }
    }
</script>

<style lang="scss">
    .crypta-logo {
        display: inline;
        user-select: none;
        height: 40px;

        &.white {
            .a, .b {
                fill: #fff;
            }
        }

        .a {
            font-size: 500px;
            fill: #212529;
            font-family: "Open Sans", sans-serif;
            font-weight: 700;
        }

        .b {
            fill: #2a5342;
        }
    }
</style>