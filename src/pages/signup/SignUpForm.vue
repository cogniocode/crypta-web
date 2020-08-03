<template>
    <atomio-form @submit="handleSubmit" ref="form" class="sign-up-form">
        <atomio-field class="sign-up-form__username-field">
            <atomio-text-input
                class="sign-up-form__username-field__input"
                v-model="fields.username.value"
                :rules="fields.username.rules"
            />
        </atomio-field>
        <atomio-field class="sign-up-form__email-field">
            <atomio-text-input
                class="sign-up-form__email-field__input"
                type="email"
                v-model="fields.email.value"
                :rules="fields.email.rules"
            />
        </atomio-field>
        <atomio-field class="sign-up-form__password-field">
            <atomio-text-input
                class="sign-up-form__password-field__input"
                type="password"
                v-model="fields.password.value"
                :rules="fields.password.rules"
            />
        </atomio-field>
        <template #submit-button>
            Sign up
        </template>
    </atomio-form>
</template>

<script>
    export default {
        name: "SignUpForm",
        data() {
            return {
                fields: {
                    username: {
                        value: "",
                        rules: []
                    },
                    email: {
                        value: "",
                        rules: []
                    },
                    password: {
                        value: "",
                        rules: []
                    }
                }
            }
        },
        methods: {
            handleSubmit() {
                const form = this.$refs.form
                const validation = form.validate()

                if (validation.result === true) {
                    form.clear()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>