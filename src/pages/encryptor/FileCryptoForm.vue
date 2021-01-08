<template>
    <b-form @submit="processFile">
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
    import {processFile} from "@/api/encryptor";

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
            async processFile(e) {
                if (e)
                    e.preventDefault()

                try {
                    let formData = new FormData()

                    formData.append("file", this.fields.file.value)

                    const blob = await processFile(formData, this.fields.operation.value)

                    this.downloadFile(blob, this.fields.file.value.name, this.fields.operation.value)
                } catch (e) {
                    this.$bvToast.toast("Couldn't process file.", {
                        title: "Error",
                        variant: "danger",
                        solid: "true",
                        toaster: "b-toaster-bottom-right"
                    })
                }
            },
            downloadFile(blob, originalFilename, action) {
                const filename = action === "ENCRYPT" ? originalFilename + ".cef" : originalFilename.split(".cef")[0]

                let url = window.URL.createObjectURL(blob)
                let link = document.createElement("a")
                link.href = url
                link.download = filename
                document.body.appendChild(link)
                link.click()
                link.remove()
            }
        }
    }
</script>

<style scoped>

</style>