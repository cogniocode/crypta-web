<template>
    <b-form @submit="handleSubmit" class="sign-in-form">
        <b-form-group label="Username">
            <b-input-group>
                <b-form-input v-model="fields.username.value"/>
            </b-input-group>
        </b-form-group>
        <b-form-group label="Password">
            <b-input-group>
                <b-form-input :type="fields.password.visible ? 'text' : 'password'" v-model="fields.password.value"/>
                <template #append>
                    <b-button @click="switchPasswordField">
                        <b-icon :icon="fields.password.visible ? 'eye-slash-fill' : 'eye-fill'"></b-icon>
                    </b-button>
                </template>
            </b-input-group>
        </b-form-group>
        <b-overlay rounded="true" :show="loading" spinner-small spinner-variant="primary">
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

                    await this.$router.push({name: "Home"})
                } catch (e) {
                    if (e instanceof ServiceError) {
                        this.loading = false
                    }
                }
            }
        }
    }
</script>