<template>
    <component :is="dropdownForm ? 'b-dropdown-form' : 'b-form'" @submit="generatePassword" class="password-generation-form">
        <b-form-group label="Length">
            <b-form-spinbutton v-model="fields.length.value" min="12" max="64" step="2"/>
        </b-form-group>
        <b-form-group label="Type">
            <b-form-select v-model="fields.type.value" :options="fields.type.options"/>
        </b-form-group>
        <b-form-group label="Options">
            <b-form-group class="mb-0" v-if="fields.type.value === 'TRADITIONAL'">
                <b-form-checkbox class="mb-2" v-model="fields.useNumbers.value">
                    Use numbers
                </b-form-checkbox>
                <b-form-checkbox v-model="fields.useSymbols.value">
                    Use symbols
                </b-form-checkbox>
            </b-form-group>
        </b-form-group>
        <b-button class="mt-3" v-if="!noButton" block type="submit">
            Generate
        </b-button>
    </component>
</template>

<script>
    import {generatePassword} from "@/api/generator";

    export default {
        name: "PasswordGenerationForm",
        props: {
            noButton: Boolean,
            dropdownForm: Boolean
        },
        data() {
            return {
                fields: {
                    length: {
                        value: 12
                    },
                    type: {
                        value: "TRADITIONAL",
                        options: [
                            {
                                value: "TRADITIONAL",
                                text: "Traditional"
                            }
                        ]
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
            async generatePassword(e) {
                if (e)
                    e.preventDefault()

                const generationData = {
                    type: this.fields.type.value,
                    length: this.fields.length.value,
                    options: {}
                }

                if (this.fields.type.value === 'TRADITIONAL') {
                    generationData.options.useNumbers = this.fields.useNumbers.value
                    generationData.options.useSymbols = this.fields.useSymbols.value
                }

                try {
                    const generatedPassword = await generatePassword(generationData)

                    this.$emit("generate", generatedPassword.value)
                } catch (e) {
                    this.$bvToast.toast("Couldn't generate password.", {
                        title: "Error",
                        variant: "danger",
                        solid: "true",
                        toaster: "b-toaster-bottom-right"
                    })
                }
            }
        }
    }
</script>