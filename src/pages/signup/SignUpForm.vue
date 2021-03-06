<template>
    <b-form @submit="handleSubmit" class="sign-up-form">
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
        <b-form-group label="Email">
            <b-input-group>
                <template #prepend>
                    <b-input-group-text>
                        <b-icon icon="envelope-fill"/>
                    </b-input-group-text>
                </template>
                <b-form-input v-model="fields.email.value"/>
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
                    <b-dropdown @click="$refs.generationForm.generatePassword()" right split>
                        <template #button-content>
                            <b-icon icon="arrow-clockwise" class="mr-1"/>
                        </template>
                        <password-generation-form ref="generationForm" @generate="fields.password.value = $event" dropdown-form no-button/>
                    </b-dropdown>
                </template>
            </b-input-group>
        </b-form-group>
        <b-overlay rounded="true" :show="loading" spinner-small spinner-variant="primary">
            <b-button size="lg" type="submit" :disabled="buttonDisabled" variant="primary" block>Sign up</b-button>
        </b-overlay>
    </b-form>
</template>

<script>
    import { signUp } from "@/services/user"
    import { ApiError } from "@/api/util"
    import PasswordGenerationForm from "@/pages/passwords/PasswordGenerationForm"

    export default {
        name: "SignUpForm",
        components: {PasswordGenerationForm},
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