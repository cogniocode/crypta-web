<template>
    <b-card class="password-card">
        <template #header>
            <div class="d-flex w-100 flex-row justify-content-center align-items-center">
                <b-link :to="`/passwords/${password.id}`">
                    <h4 class="m-0">{{ password.name }}</h4>
                </b-link>
                <b-button @click="alert('hello')" variant="outline-secondary" class="ml-auto">
                    <b-icon icon="bookmark-plus" class="mr-2"/>
                    Bookmark
                </b-button>
                <b-dropdown variant="outline-secondary" right class="ml-3">
                    <template #button-content>
                        <b-icon icon="three-dots-vertical" class="mr-1"/>
                    </template>
                    <b-dropdown-item>
                        Edit
                    </b-dropdown-item>
                    <b-dropdown-item>
                        Delete
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </template>
        <template #footer>
            <div class="d-flex flex-column">
                <password-decoder :id="password.id"/>
            </div>
        </template>
    </b-card>
</template>

<script>
    import PasswordDecoder from "@/pages/passwords/PasswordDecoder";
    export default {
        name: "PasswordCard",
        components: {PasswordDecoder},
        props: {
            password: Object
        }
    }
</script>

<style lang="scss">

</style>