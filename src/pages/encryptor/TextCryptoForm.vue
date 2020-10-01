<template>
    <b-form @submit="processText">
        <b-form-group label="Text">
            <b-textarea rows="5" v-model="fields.text.value"/>
        </b-form-group>
        <b-form-group label="Operation">
            <b-form-radio-group :options="fields.operation.options" v-model="fields.operation.value"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Process</b-button>
        <b-form-group class="mt-4" label="Processed text">
            <b-textarea rows="5" readonly v-model="fields.processedText.value"/>
        </b-form-group>
    </b-form>
</template>

<script>
import {processText} from "@/api/encryptor"

export default {
        name: "TextCryptoForm",
        data() {
            return {
                fields: {
                    text: {
                        value: ""
                    },
                    operation: {
                        value: "ENCRYPT",
                        options: [
                            {
                                text: "Encrypt",
                                value: "ENCRYPT"
                            },
                            {
                                text: "Decrypt",
                                value: "DECRYPT"
                            }
                        ]
                    },
                    processedText: {
                        value: ""
                    }
                }
            }
        },
        methods: {
            async processText(e) {
                if (e)
                    e.preventDefault()

                try {
                    let processedText = await processText({text: this.fields.text.value}, this.fields.operation.value)

                    this.fields.processedText.value = processedText.text
                } catch (e) {
                    this.$bvToast.toast("Couldn't process text.", {
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