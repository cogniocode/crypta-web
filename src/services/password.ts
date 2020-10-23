import {deletePasswordById, getDecryptedPasswordById, updatePasswordById, createPassword as apiCreatePassword} from "@/api/password"
import vm from "@/main"
import {getToken} from "@/services/token"
import {ServiceError} from "@/services/util"
import {PasswordCreationDTO, PasswordRetrievalDTO, PasswordUpdateDTO} from "@/types/api/password"
import * as passwordMutationTypes from "@/store/modules/user/password/mutationTypes"

export async function createPassword(passwordData: PasswordCreationDTO): Promise<PasswordRetrievalDTO> {
    const userId = vm.$store.state.user.user?.id
    const authToken = getToken()

    if (authToken != null && userId != null) {
        const createdPassword = await apiCreatePassword(userId, passwordData)

        vm.$store.commit(`user/password/${passwordMutationTypes.ADD_PASSWORD}`, createdPassword)

        return createdPassword
    } else throw new ServiceError("Auth token is not present or user is null.")
}

export async function getDecodedPassword(passwordId: number): Promise<string> {
    const userId = vm.$store.state.user.user?.id
    const authToken = getToken()

    if (authToken != null && userId != null) {
        const decryptedPassword = await getDecryptedPasswordById(userId, passwordId)

        return decryptedPassword.decryptedValue as string
    } else throw new ServiceError("Auth token is not present or user is null.")
}

export async function updatePassword(passwordId: number, updateData: PasswordUpdateDTO) {
    const userId = vm.$store.state.user.user?.id
    const password: PasswordRetrievalDTO = vm.$store.state.user.password.passwords.find((password: PasswordRetrievalDTO) => passwordId === password.id)
    const authToken = getToken()

    if (authToken != null && userId != null && password != null) {
        await updatePasswordById(userId, passwordId, updateData)

        vm.$store.commit(`user/password/${passwordMutationTypes.UPDATE_PASSWORD}`, {
            id: passwordId,
            data: {...password, ...updateData}
        })
    }
}

export async function deletePassword(passwordId: number) {
    const userId = vm.$store.state.user.user?.id
    const password: PasswordRetrievalDTO = vm.$store.state.user.password.passwords.find((password: PasswordRetrievalDTO) => passwordId === password.id)
    const authToken = getToken()

    if (authToken != null && userId != null && password != null) {
        await deletePasswordById(userId, passwordId)

        vm.$store.commit(`user/password/${passwordMutationTypes.REMOVE_PASSWORD}`, passwordId)
    }
}