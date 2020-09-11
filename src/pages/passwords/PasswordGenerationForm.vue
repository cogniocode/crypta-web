<template>
    <component :is="dropdownForm ? 'b-dropdown-form' : 'b-form'" @submit="generatePassword" class="password-generation-form">
        <b-form-group label="Length">
            <b-form-spinbutton v-model="fields.length.value" min="12" max="64" step="2"/>
        </b-form-group>
        <b-form-group label="Type">
            <b-form-select v-model="fields.type.value" :options="fields.type.options"/>
        </b-form-group>
        <b-form-group class="mb-0" v-if="fields.type.value === 'TRADITIONAL'">
            <b-form-group>
                <b-form-checkbox v-model="fields.useNumbers.value">
                    Use numbers
                </b-form-checkbox>
            </b-form-group>
            <b-form-group class="mb-0">
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
                            },
                            {
                                value: "test",
                                text: "Test"
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
                    length: this.fields.length.value
                }

                if (this.fields.type.value === 'TRADITIONAL') {
                    generationData.useNumbers = this.fields.useNumbers.value
                    generationData.useSymbols = this.fields.useSymbols.value
                }

                try {
                    const generatedPassword = await generatePassword(generationData)

                    this.$emit("generate", generatedPassword.value)
                } catch (e) {

                }
            }
        }
    }
</script>