<template>
    <b-form>
        <b-form-group label="File">
            <b-form-file v-model="fields.file.value"/>
        </b-form-group>
        <b-form-group label="Operation">
            <b-form-radio-group :options="fields.operation.options" v-model="fields.operation.value"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Process</b-button>
    </b-form>
</template>

<script>
    export default {
        name: "FileCryptoForm",
        data() {
            return {
                fields: {
                    file: {
                        value: null
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
                    }
                }
            }
        },
        methods: {
            processFile(e) {
                if (e)
                    e.preventDefault()

                try {

                } catch (e) {

                }
            }
        }
    }
</script>

<style scoped>

</style>