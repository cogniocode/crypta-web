<template>
    <div class="page">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Page"
    }
</script>

<style lang="scss" scoped>
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        min-height: 100vh;
    }
</style>