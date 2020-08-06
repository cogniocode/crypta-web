import type {UserCreationDTO, UserRetrievalDTO} from "@/types/api/user"
import {createUser, getUserByUsername} from "@/api/user"
import {ApiError} from "@/api/util"
import {ServiceError} from "@/services/util"
import {getToken, getUsernameFromToken} from "@/services/auth"

export async function signUp(userCreationData: UserCreationDTO): Promise<UserRetrievalDTO> {
    try {
        return await createUser(userCreationData)
    } catch (e) {
        if (e instanceof ApiError) {
            throw new ServiceError(e.message)
        } else throw e
    }
}

export async function getAuthUser(): Promise<UserRetrievalDTO> {
    try {
        const authUsername = getUsernameFromToken()
        const authToken = getToken()

        if (authToken == null)
            throw new ServiceError("Auth token is not present.")

        return getUserByUsername(authUsername, authToken)
    } catch (e) {
        if (e instanceof ApiError) {
            throw new ServiceError(e.message)
        } else throw e
    }
}