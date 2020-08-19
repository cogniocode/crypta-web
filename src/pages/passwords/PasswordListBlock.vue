<template>
    <div class="password-list-block">
        <div class="password-list-block__toolbar p-3 border-bottom border-muted">
            <b-form inline class="flex-nowrap">
                <b-input v-model="fields.search.value" placeholder="Search" class="flex-grow-1"/>
                <b-button v-b-modal="'password-creation-modal'" class="ml-3" variant="primary">
                    <b-icon icon="plus"/>
                    <span class="d-none d-sm-inline">Create</span>
                </b-button>
                <b-dropdown right class="ml-3">
                    <template #button-content>
                        <b-icon icon="three-dots-vertical" class="mr-1"/>
                    </template>
                    <b-dropdown-form>
                        <b-form-group class="mb-0" label="Order by">
                            <b-form-radio-group v-model="fields.orderBy.value" :options="fields.orderBy.options"/>
                        </b-form-group>
                    </b-dropdown-form>
                </b-dropdown>
            </b-form>
        </div>
        <div class="password-list-block__content p-3">
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
                let passwords = this.$store.state.user.password.passwords

                const searchRegExp = new RegExp(this.fields.search.value, "i")

                passwords = passwords.filter(password => searchRegExp.test(password.name))

                passwords.sort((a, b) => {
                    if (a[this.fields.orderBy.value] > b[this.fields.orderBy.value])
                        return 1
                    else if (a[this.fields.orderBy.value] < b[this.fields.orderBy.value])
                        return -1
                    else
                        return 0
                })

                return passwords
            }
        },
        data() {
            return {
                fields: {
                    search: {
                        value: ""
                    },
                    orderBy: {
                        value: "username",
                        options: [
                            {
                                text: "Username",
                                value: "username"
                            },
                            {
                                text: "Creation date",
                                value: "createdAt"
                            },
                        ]
                    }
                }
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