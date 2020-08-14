<template>
    <svg class="crypta-logo" :class="{white}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.87 89.6">
        <text class="a" transform="translate(103.23 68)">C
            <tspan class="b" x="57.52" y="0">r</tspan>
            <tspan x="87.92" y="0">y</tspan>
            <tspan class="c" x="130.32" y="0">p</tspan>
            <tspan class="d" x="179.36" y="0">t</tspan>
            <tspan x="208.8" y="0">a</tspan>
        </text>
        <path class="e"
              d="M20.73,45.87A6.91,6.91,0,1,1,27.64,39a6.91,6.91,0,0,1-6.91,6.91M40.25,32.05a20.72,20.72,0,1,0,0,13.82h15V59.68H69.09V45.87H76V32.05Z"/>
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
            .a, .e {
                fill: white;
            }
        }

        .a {
            font-size: 80px;
            fill: #212529;
            font-family: Gilroy;
            font-weight: 800;
        }

        .b {
            letter-spacing: 0.01em;
        }

        .c {
            letter-spacing: -0.01em;
        }

        .d {
            letter-spacing: -0.02em;
        }

        .e {
            fill: #2a5342;
        }
    }
</style>