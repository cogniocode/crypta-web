<template>
    <div class="password-list-block">
        <div class="password-list-block__toolbar p-3 border-bottom border-muted">
            <b-form inline>
                <b-input placeholder="Search" class="flex-grow-1"/>
                <b-button v-b-modal="'password-creation-modal'" class="ml-3" variant="primary">
                    <b-icon icon="plus"/>
                    Create
                </b-button>
                <b-dropdown right class="ml-3">
                    <template #button-content>
                        <b-icon icon="three-dots-vertical" class="mr-1"/>
                    </template>
                    <b-dropdown-form>

                    </b-dropdown-form>
                </b-dropdown>
            </b-form>
        </div>
        <div class="password-list-block__content p-3 pt-4">
            <p v-if="passwords.length === 0" class="password-list-block__no-passwords-text text-muted w-100">
                You don't have any passwords.
            </p>
            <ul v-else class="password-list-block__list">
                <li v-for="password in passwords" :key="password.id" class="password-list-block__list__item">
                    <password-card :password="password"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PasswordCard from "@/pages/passwords/PasswordCard"

    export default {
        name: "PasswordList",
        components: {PasswordCard},
        computed: {
            passwords() {
                return this.$store.state.user.password.passwords
            }
        }
    }
</script>

<style lang="scss">
    .password-list-block {
        display: flex;
        width: 100%;
        height: 100%;
        flex-flow: column nowrap;
    }

    .password-list-block__toolbar {
        width: 100%;
    }

    .password-list-block__no-passwords-text {
        text-align: center;
    }

    .password-list-block__list {
        padding: 0;
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    .password-list-block__list__item {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>