<template>
    <b-form>
        <b-form-group label="Username">
            <b-form-input v-model="fields.username.value"/>
        </b-form-group>
        <b-form-group label="Email">
            <b-form-input v-model="fields.email.value"/>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input type="password" v-model="fields.password.value"/>
        </b-form-group>
        <b-button type="submit" variant="primary" block>Sign up</b-button>
    </b-form>
</template>

<script>
    import { signUp } from "@/services/user"
    import * as userMutationTypes from "@/store/modules/user/mutationTypes"

    export default {
        name: "SignUpForm",
        data() {
            return {
                fields: {
                    username: {
                        value: ""
                    },
                    email: {
                        value: ""
                    },
                    password: {
                        value: ""
                    }
                }
            }
        },
        methods: {
            async handleSubmit() {
                const form = this.$refs.form
                const validation = form.validate()

                if (validation.result === true) {
                    try {
                        const createdUser = await signUp({
                            username: this.fields.username.value,
                            email: this.fields.email.value,
                            password: this.fields.password.value
                        })

                        this.$store.commit(`user/${userMutationTypes.SET_USER}`, createdUser)

                        form.clear()

                        await this.$router.push({name: "Dashboard"})
                    } catch (e) {
                        //TODO: Handle error.
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>