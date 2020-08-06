<template>
    <b-form @submit="handleSubmit" class="sign-in-form">
        <b-form-group label="Username">
            <b-form-input v-model="fields.username.value"/>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input type="password" v-model="fields.password.value"/>
        </b-form-group>
        <b-overlay rounded :show="loading" spinner-small spinner-variant="primary">
            <b-button type="submit" variant="primary" block>Sign in</b-button>
        </b-overlay>
    </b-form>
</template>

<script>
    import {signIn} from "@/services/auth";
    import {ServiceError} from "@/services/util"
    import {getAuthUser} from "@/services/user"
    import * as userMutationTypes from "@/store/modules/user/mutationTypes"

    export default {
        name: "SignInForm",
        data() {
            return {
                loading: false,
                fields: {
                    username: {
                        value: ""
                    },
                    password: {
                        value: ""
                    }
                }
            }
        },
        methods: {
            async handleSubmit(e) {
                e.preventDefault()

                const credentials = {
                    username: this.fields.username.value,
                    password: this.fields.password.value
                }

                try {
                    this.loading = true

                    await signIn(credentials)

                    const user = await getAuthUser()
                    this.$store.commit(`user/${userMutationTypes.SET_USER}`, user)

                    this.loading = false

                    // await this.$router.push({name: "Dashboard"})
                } catch (e) {
                    if (e instanceof ServiceError) {
                        this.loading = false
                        console.error(e.message)
                    }
                }
            }
        }
    }
</script>