<template>
    <b-form @submit="handleSubmit" class="sign-in-form">
        <b-alert :show="error != null" variant="danger" class="mb-3">
            {{ error }}
        </b-alert>
        <b-form-group label="Username">
            <b-input-group>
                <template #prepend>
                    <b-input-group-text>
                        <b-icon icon="person-fill"/>
                    </b-input-group-text>
                </template>
                <b-form-input v-model="fields.username.value"/>
            </b-input-group>
        </b-form-group>
        <b-form-group label="Password">
            <b-input-group>
                <template #prepend>
                    <b-input-group-text>
                        <b-icon icon="key-fill"/>
                    </b-input-group-text>
                </template>
                <b-form-input :type="fields.password.visible ? 'text' : 'password'" v-model="fields.password.value"/>
                <template #append>
                    <b-button @click="switchPasswordField">
                        <b-icon :icon="fields.password.visible ? 'eye-slash-fill' : 'eye-fill'"></b-icon>
                    </b-button>
                </template>
            </b-input-group>
        </b-form-group>
        <b-overlay rounded="true" :show="loading" spinner-small spinner-variant="primary">
            <b-button size="lg" type="submit" :disabled="buttonDisabled" variant="primary" block>Sign in</b-button>
        </b-overlay>
    </b-form>
</template>

<script>
    import { signIn } from "@/services/user"
    import { ApiError } from "@/api/util"

    export default {
        name: "SignInForm",
        data() {
            return {
                loading: false,
                error: null,
                buttonDisabled: false,
                fields: {
                    username: {
                        value: ""
                    },
                    password: {
                        value: "",
                        visible: false
                    }
                }
            }
        },
        methods: {
            switchPasswordField() {
                this.fields.password.visible = !this.fields.password.visible
            },
            showSuccessToast() {
                this.$bvToast.toast("Successfully signed in. Redirecting...", {
                    title: "Sign in",
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-bottom-right",
                    autoHideDelay: 2000
                })
            },
            async handleSubmit(e) {
                e.preventDefault()

                const credentials = {
                    username: this.fields.username.value,
                    password: this.fields.password.value
                }

                this.error = null
                this.loading = true
                this.buttonDisabled = false

                try {
                    await signIn(credentials)

                    this.loading = false
                    this.buttonDisabled = true

                    this.showSuccessToast()

                    setTimeout(async () => {
                        await this.$router.push({name: "Home"})
                    }, 2000)
                } catch (e) {
                    if (e instanceof ApiError) {
                        this.loading = false

                        if (e.statusCode === 403) {
                            this.error = "Invalid username or password."
                        } else {
                            this.error = e.message
                        }
                    }
                }
            }
        }
    }
</script>