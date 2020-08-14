<template>
    <div class="password-block">
        <div class="password-block__header p-3 border-bottom border-muted">
            <h4 class="password-block__header__name m-0">
                {{password.name}}
            </h4>
            <b-button variant="outline-secondary" class="password-block__header__bookmark-button ml-auto">
                <b-icon icon="bookmark-plus"/>
                Bookmark
            </b-button>
            <b-button variant="primary" class="password-block__header__edit-button ml-3">
                <b-icon icon="pencil"/>
                Edit
            </b-button>
        </div>
        <div class="password-block__content p-3">
            <b-form>
                <b-form-group label="Username">
                    <b-form-input :value="password.username" readonly/>
                </b-form-group>
                <b-form-group label="Password">
                    <b-input-group>
                        <b-form-input value="********" type="password" readonly/>
                        <template #append>
                            <b-button>
                                <b-icon icon="eye" class="mr-1"/>
                                Show
                            </b-button>
                        </template>
                    </b-input-group>
                </b-form-group>
                <b-form-group v-if="password.website != null" label="Website">
                    <b-link :href="password.website" target="_blank">
                        <b-icon icon="link"/>
                        {{password.website}}
                    </b-link>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>

<script>
    import PasswordDecoder from "@/pages/passwords/PasswordDecoder";
    export default {
        name: "PasswordBlock",
        components: {PasswordDecoder},
        props: {
            password: Object
        },
        data() {
            return {
                mode: "VIEW"
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