import {deletePasswordById, getDecodedPasswordById} from "@/api/password"
import vm from "@/main"
import {getToken} from "@/services/token"
import {ServiceError} from "@/services/util"
import {PasswordRetrievalDTO} from "@/types/api/password"
import * as passwordMutationTypes from "@/store/modules/user/password/mutationTypes"

export async function getDecodedPassword(passwordId: number): Promise<string> {
    const userId = vm.$store.state.user.user?.id
    const authToken = getToken()

    if (authToken != null && userId != null) {
        const decodedPassword = await getDecodedPasswordById(userId, passwordId, authToken)

        return decodedPassword.decodedValue
    } else throw new ServiceError("Auth token is not present or user is null.")
}

export async function deletePassword(passwordId: number) {
    const userId = vm.$store.state.user.user?.id
    const password: PasswordRetrievalDTO = vm.$store.state.user.password.passwords.find((password: PasswordRetrievalDTO) => passwordId === password.id)
    const authToken = getToken()

    if (authToken != null && userId != null && password != null) {
        await deletePasswordById(userId, passwordId, authToken)

        vm.$store.commit(`user/password/${passwordMutationTypes.REMOVE_PASSWORD}`, passwordId)
    }
}