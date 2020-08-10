import type {UserCreationDTO, UserRetrievalDTO} from "@/types/api/user"
import {createUser, getUserByUsername} from "@/api/user"
import {ApiError} from "@/api/util"
import {ServiceError} from "@/services/util"
import {getToken, getUsernameFromToken} from "@/services/auth"

export async function signUp(userCreationData: UserCreationDTO): Promise<UserRetrievalDTO> {
    return await createUser(userCreationData)
}

export async function getAuthUser(): Promise<UserRetrievalDTO> {
    const authUsername = getUsernameFromToken()
    const authToken = getToken()

    if (authToken == null)
        throw new ServiceError("Auth token is not present.")

    return getUserByUsername(authUsername, authToken)
}