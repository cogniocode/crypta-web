<template>
    <b-form @submit="handleSubmit" class="password-creation-form">
        <b-alert :show="error != null" variant="danger" class="mb-3">
            {{ error }}
        </b-alert>
        <b-form-group label="Name">
            <b-form-input v-model="fields.name.value"/>
        </b-form-group>
        <b-form-group label="Username">
            <b-form-input v-model="fields.username.value"/>
        </b-form-group>
        <b-form-group description="This field is optional." label="Website">
            <b-form-input type="url" v-model="fields.website.value"/>
        </b-form-group>
        <b-form-group label="Strategy">
            <b-form-radio-group v-model="fields.strategy.value" stacked>
                <b-form-radio value="generate" class="mb-2">Generate password</b-form-radio>
                <b-form-radio value="custom">Use custom value</b-form-radio>
            </b-form-radio-group>
        </b-form-group>
        <b-form-group class="mb-0" v-if="fields.strategy.value === 'generate'" label-size="lg" label="Generation options">
            <b-form-group label="Length">
                <b-form-spinbutton v-model="fields.length.value" min="12" max="64" step="2"/>
            </b-form-group>
            <b-form-group>
                <b-form-checkbox v-model="fields.useNumbers.value">
                    Use numbers
                </b-form-checkbox>
            </b-form-group>
            <b-form-group>
                <b-form-checkbox v-model="fields.useSymbols.value">
                    Use symbols
                </b-form-checkbox>
            </b-form-group>
        </b-form-group>
        <b-form-group v-if="fields.strategy.value === 'custom'" label="Custom value">
            <b-input-group>
                <b-form-input :type="fields.customValue.visible ? 'text' : 'password'" v-model="fields.customValue.value"/>
                <template #append>
                    <b-button @click="switchCustomValueField">
                        <b-icon :icon="fields.customValue.visible ? 'eye-slash-fill' : 'eye-fill'"></b-icon>
                    </b-button>
                </template>
            </b-input-group>
        </b-form-group>
        <b-overlay rounded="true" :show="loading" spinner-small spinner-variant="primary">
            <b-button type="submit" variant="primary" block>Create</b-button>
        </b-overlay>
    </b-form>
</template>

<script>
    import {createPassword} from "@/api/password"
    import {getToken} from "@/services/token"
    import * as passwordMutationTypes from "@/store/modules/user/password/mutationTypes"
    import {ApiError} from "@/api/util"

    export default {
        name: "PasswordCreationForm",
        data() {
            return {
                loading: false,
                error: null,
                fields: {
                    name: {
                        value: ""
                    },
                    username: {
                        value: ""
                    },
                    website: {
                        value: ""
                    },
                    strategy: {
                        value: "generate"
                    },
                    customValue: {
                        value: "",
                        visible: false
                    },
                    length: {
                        value: 12
                    },
                    useNumbers: {
                        value: true
                    },
                    useSymbols: {
                        value: false
                    }
                }
            }
        },
        methods: {
            switchCustomValueField() {
                this.fields.customValue.visible = !this.fields.customValue.visible
            },
            showSuccessToast() {
                this.$bvToast.toast("Successfully created password.", {
                    title: "Password creation",
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-bottom-right"
                })
            },
            clearForm() {
                this.fields.name.value = ""
                this.fields.strategy.value = "generate"
                this.fields.customValue.value = ""
                this.fields.length.value = 8
            },
            async handleSubmit(e) {
                e.preventDefault()

                const passwordData = {
                    name: this.fields.name.value,
                    username: this.fields.username.value
                }

                if (this.fields.website.value.trim() !== "") {
                    passwordData.website = this.fields.website.value
                }

                if (this.fields.strategy.value === "custom") {
                    passwordData.value = this.fields.customValue.value
                }

                this.error = null
                this.loading = true
                this.buttonDisabled = false

                try {
                    const createdPassword = await createPassword(
                        this.$store.state.user.user.id,
                        passwordData,
                        getToken(),
                        this.fields.strategy.value === "generate" ? {
                            length: this.fields.length.value,
                            use_nums: this.fields.useNumbers.value,
                            use_symb: this.fields.useSymbols.value
                        }: null
                    )

                    this.$store.commit(`user/password/${passwordMutationTypes.ADD_PASSWORD}`, createdPassword)

                    this.loading = false

                    this.showSuccessToast()

                    this.clearForm()

                    this.$emit("create", createdPassword)
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