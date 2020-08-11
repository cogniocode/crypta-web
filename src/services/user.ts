import type {UserCreationDTO, UserRetrievalDTO} from "@/types/api/user"
import {createUser, getUserByUsername} from "@/api/user"
import {ServiceError} from "@/services/util"
import {clearToken, getToken, getUsernameFromToken, saveToken} from "@/services/token"
import vm from "@/main"
import * as userMutationTypes from "@/store/modules/user/mutationTypes"
import * as passwordMutationTypes from "@/store/modules/user/password/mutationTypes"
import {AuthCredentials} from "@/types/api/auth"
import {getAuthToken} from "@/api/auth"
import {getUserPasswords} from "@/api/password"

export async function signIn(credentials: AuthCredentials) {
    const token = await getAuthToken(credentials)

    saveToken(token)

    await populateAuthUser()
}

export function signOut() {
    clearToken()

    vm.$store.commit(`user/${userMutationTypes.CLEAR_USER}`)
    vm.$store.commit(`user/password/${passwordMutationTypes.CLEAR_PASSWORDS}`)
}

export async function signUp(userCreationData: UserCreationDTO) {
    const createdUser = await createUser(userCreationData)

    await signIn({
        username: userCreationData.username,
        password: userCreationData.password
    })
}

export async function populateAuthUser() {
    const authToken = getToken()

    if (authToken != null) {
        const authUser = await getAuthUser()
        vm.$store.commit(`user/${userMutationTypes.SET_USER}`, authUser)

        const authUserPasswords = await getUserPasswords(authUser.id, authToken)
        vm.$store.commit(`user/password/${passwordMutationTypes.SET_PASSWORDS}`, authUserPasswords)
    }
}

export async function getAuthUser(): Promise<UserRetrievalDTO> {
    const authUsername = getUsernameFromToken()
    const authToken = getToken()

    if (authToken == null)
        throw new ServiceError("Auth token is not present.")

    return getUserByUsername(authUsername, authToken)
}