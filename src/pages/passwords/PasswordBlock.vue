<template>
    <div class="password-block">
        <div class="password-block__header p-3 border-bottom border-muted">
            <b-form class="w-100" inline>
                <h4 v-if="mode === 'VIEW'" class="password-block__header__name m-0">
                    {{ passwordFields.name.value }}
                </h4>
                <b-form-input placeholder="Name" class="flex-grow-1 mr-3" v-if="mode === 'EDIT'" v-model="passwordFields.name.value"/>
                <b-button v-if="mode === 'VIEW'" variant="outline-secondary" class="password-block__header__bookmark-button ml-auto">
                    <b-icon icon="bookmark-plus"/>
                    Bookmark
                </b-button>
                <b-button disabled title="In development." @click="enterEditMode" v-if="mode === 'VIEW'" variant="primary" class="password-block__header__edit-button ml-3">
                    <b-icon icon="pencil"/>
                    Edit
                </b-button>
                <b-button @click="discardChanges" v-if="mode === 'EDIT'" variant="danger" class="password-block__header__edit-button ml-auto">
                    <b-icon icon="x"/>
                    Cancel
                </b-button>
                <b-button @click="saveChanges" v-if="mode === 'EDIT'" variant="success" class="password-block__header__edit-button ml-3">
                    <b-icon icon="check2"/>
                    Save
                </b-button>
            </b-form>
        </div>
        <div class="password-block__content p-3">
            <b-form>
                <b-alert :show="error != null" variant="danger" class="mb-3">
                    {{ error }}
                </b-alert>
                <b-form-group label="Username">
                    <b-form-input v-model="passwordFields.username.value" :readonly="mode === 'VIEW'"/>
                </b-form-group>
                <b-form-group label="Password">
                    <b-input-group>
                        <b-form-input
                            v-model="passwordFields.password.value"
                            :type="decodedPasswordVisible ? 'text' : 'password'"
                            :readonly="mode === 'VIEW'"
                        />
                        <b-input-group-append v-if="!decodedPasswordVisible && mode === 'VIEW'">
                            <b-button @click="showDecodedPassword">
                                <b-icon icon="eye" class="mr-1"/>
                                Show
                            </b-button>
                        </b-input-group-append>
                        <b-input-group-append v-else-if="decodedPasswordVisible && mode === 'VIEW'">
                            <b-button @click="hideDecodedPassword">
                                <b-icon icon="eye-slash" class="mr-1"/>
                                Hide
                            </b-button>
                        </b-input-group-append>
                        <b-input-group-append v-else-if="mode === 'EDIT'">
                            <b-dropdown @click="generateNewPassword" right split>
                                <template #button-content>
                                    <b-icon icon="arrow-clockwise" class="mr-1"/>
                                    Generate
                                </template>
                                <b-dropdown-form>
                                    <b-form-group class="mb-0" label="Length">
                                        <b-form-spinbutton v-model="generationFields.length.value" min="12" max="64"/>
                                    </b-form-group>
                                </b-dropdown-form>
                            </b-dropdown>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
                <b-form-group v-if="password.website || mode === 'EDIT'" label="Website">
                    <b-link v-if="mode === 'VIEW'" :href="passwordFields.website.value" target="_blank">
                        {{ passwordFields.website.value }}
                    </b-link>
                    <b-form-input v-if="mode === 'EDIT'" v-model="passwordFields.website.value"/>
                </b-form-group>
            </b-form>
            <b-button disabled title="In development." v-if="mode === 'VIEW'" block variant="primary" class="mb-3">
                Show password history
            </b-button>
            <b-button @click="deletePassword" block variant="outline-danger">
                Delete
            </b-button>
        </div>
    </div>
</template>

<script>
import {deletePassword, getDecodedPassword} from "@/services/password";

    const PASSWORD_PLACEHOLDER = "********"

    export default {
        name: "PasswordBlock",
        props: {
            password: {
                type: Object,
                required: true
            }
        },
        watch: {
            password() {
                this.mapPasswordToFields()
                this.hideDecodedPassword()
            }
        },
        data() {
            return {
                mode: "VIEW",
                error: null,
                decodedPasswordVisible: false,
                passwordFields: {
                    name: {
                        value: this.password.name
                    },
                    username: {
                        value: this.password.username
                    },
                    password: {
                        value: PASSWORD_PLACEHOLDER
                    },
                    website: {
                        value: this.password.website ?? ""
                    }
                },
                generationFields: {
                    length: {
                        value: 12
                    }
                }
            }
        },
        methods: {
            setMode(mode) {
                this.mode = mode
            },
            async enterEditMode() {
                if (!this.decodedPasswordVisible) {
                    await this.showDecodedPassword()
                }
                this.setMode("EDIT")
            },
            exitEditMode() {
                this.hideDecodedPassword()
                this.setMode("VIEW")
            },
            saveChanges() {
                //TODO
            },
            generateNewPassword() {
                //TODO
            },
            async showDecodedPassword() {
                const decodedPassword = await getDecodedPassword(this.password.id)
                this.decodedPasswordVisible = true
                this.passwordFields.password.value = decodedPassword
            },
            hideDecodedPassword() {
                this.decodedPasswordVisible = false
                this.passwordFields.password.value = PASSWORD_PLACEHOLDER
            },
            discardChanges() {
                this.exitEditMode()
                this.mapPasswordToFields()
            },
            mapPasswordToFields() {
                this.passwordFields.name.value = this.password.name
                this.passwordFields.username.value = this.password.username
                this.passwordFields.website.value = this.password.website ?? ""
            },
            async deletePassword() {
                const confirm = await this.$bvModal.msgBoxConfirm("Are you sure you want to delete password?", {
                    title: "Delete password",
                    okVariant: "outline-danger",
                    cancelVariant: "success",
                    okTitle: "Delete"
                })

                if (confirm) {
                    await deletePassword(this.password.id)

                    await this.$router.push("/passwords")

                    this.$bvToast.toast("Successfully deleted password.", {
                        title: "Delete password",
                        variant: "success",
                        solid: true,
                        toaster: "b-toaster-bottom-right"
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
    .password-block {
        display: flex;
        width: 100%;
        height: 100%;
        flex-flow: column nowrap;
    }

    .password-block__header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .password-block__header__name {
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>