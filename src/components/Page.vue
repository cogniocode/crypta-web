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
        height: 100%;
        width: 100%;
        min-height: 100vh;
    }
</style>