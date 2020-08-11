<template>
    <b-form @submit="handleSubmit" class="sign-up-form">
        <b-alert :show="error != null" variant="danger" class="mb-3">
            {{ error }}
        </b-alert>
        <b-form-group label="Username">
            <b-form-input v-model="fields.username.value"/>
        </b-form-group>
        <b-form-group label="Email">
            <b-form-input v-model="fields.email.value"/>
        </b-form-group>
        <b-form-group label="Password">
            <b-input-group>
                <b-form-input :type="fields.password.visible ? 'text' : 'password'" v-model="fields.password.value"/>
                <template #append>
                    <b-button @click="switchPasswordField">
                        <b-icon :icon="fields.password.visible ? 'eye-slash-fill' : 'eye-fill'"></b-icon>
                    </b-button>
                </template>
            </b-input-group>
        </b-form-group>
        <b-overlay rounded="true" :show="loading" spinner-small spinner-variant="primary">
            <b-button type="submit" :disabled="buttonDisabled" variant="primary" block>Sign up</b-button>
        </b-overlay>
    </b-form>
</template>

<script>
    import { signUp } from "@/services/user"
    import * as userMutationTypes from "@/store/modules/user/mutationTypes"
    import { signIn } from "@/services/token"
    import { ApiError } from "@/api/util"

    export default {
        name: "SignUpForm",
        data() {
            return {
                loading: false,
                error: null,
                buttonDisabled: false,
                fields: {
                    username: {
                        value: ""
                    },
                    email: {
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
                this.$bvToast.toast("Successfully signed up. Redirecting...", {
                    title: "Sign up",
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-bottom-right",
                    autoHideDelay: 2000
                })
            },
            async handleSubmit(e) {
                e.preventDefault()

                const userData = {
                    username: this.fields.username.value,
                    email: this.fields.email.value,
                    password: this.fields.password.value
                }

                this.error = null
                this.loading = true
                this.buttonDisabled = false

                try {
                    await signUp(userData)

                    this.loading = false
                    this.buttonDisabled = true

                    this.showSuccessToast()

                    setTimeout(async () => {
                        await this.$router.push({name: "Home"})
                    }, 2000)
                } catch (e) {
                    if (e instanceof ApiError) {
                        this.loading = false

                        this.error = e.message
                    }
                }
            }
        }
    }
</script>