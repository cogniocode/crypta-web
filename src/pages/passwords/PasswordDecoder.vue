<template>
    <div class="password-decoder">
        <b-form @submit="handleShow" inline class="password-decoder__show-form" v-if="decodedPassword === ''">
            <b-button type="submit" variant="primary" class="password-decoder__show-button ml-auto">
                <b-icon icon="eye-fill" class="mr-2"/>
                <span class="password-decoder__show-button__text">
                    Show password
                </span>
            </b-button>
            <b-input-group>
                <b-form-select v-model="showTime" :options="timeOptions" class="password-decoder__time-select"/>
                <template #append>
                    <b-input-group-text>
                        <b-icon icon="clock"/>
                    </b-input-group-text>
                </template>
            </b-input-group>
        </b-form>
        <b-form inline v-if="decodedPassword !== ''">
            <b-input-group>
                <b-form-input ref="decodedPassword" v-model="decodedPassword" readonly/>
                <template #append>
                    <b-button @click="copyPassword">
                        <b-icon icon="clipboard"/>
                    </b-button>
                    <b-button @click="hidePassword">
                        <b-icon icon="eye-slash"/>
                    </b-button>
                </template>
            </b-input-group>
        </b-form>
    </div>
</template>

<script>
    import { getDecodedPassword } from "@/services/password"

    export default {
        name: "PasswordDecoder",
        props: {
            id: Number
        },
        data() {
            return {
                decodedPassword: "",
                showTime: 5000,
                timeOptions: [
                    {
                        text: "5 sec.",
                        value: 5000
                    },
                    {
                        text: "30 sec.",
                        value: 30000
                    },
                    {
                        text: "1 min.",
                        value: 60000
                    }
                ]
            }
        },
        methods: {
            async handleShow(e) {
                e.preventDefault()

                this.decodedPassword = await getDecodedPassword(this.id)
            },
            showCopiedToast() {
                this.$bvToast.toast("Password copied to clipboard.", {
                    title: "Clipboard",
                    toaster: "b-toaster-bottom-right",
                    variant: "info"
                })
            },
            hidePassword() {
                this.decodedPassword = ""
            },
            copyPassword() {
                const passwordInput = this.$refs.decodedPassword.$el

                passwordInput.select();
                document.execCommand("copy")

                passwordInput.setSelectionRange(0, 0)
                passwordInput.blur()

                this.showCopiedToast()
            }
        }
    }
</script>

<style lang="scss">
    .password-decoder {
        display: inline-flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
    }

    .password-decoder__show-button {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    .password-decoder__time-select {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
</style>