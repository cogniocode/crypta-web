import type {UserCreationDTO, UserRetrievalDTO} from '@/types/api/user'
import {ApiError} from './util'
import {ApiErrorDTO, doRequest, RequestMethod} from "@/api/client"

const userApiPath = (usernameOrId?: string | number) => usernameOrId ? `/users/${usernameOrId}` : '/users'

export async function createUser(userDTO: UserCreationDTO): Promise<UserRetrievalDTO> {
    const result = await doRequest<UserRetrievalDTO>(RequestMethod.POST, userApiPath(), userDTO)

    if (result.status === 201) {
        return result.data as UserRetrievalDTO
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function getUserByUsername(username: string, token: string): Promise<UserRetrievalDTO> {
    const result = await doRequest<UserRetrievalDTO>(RequestMethod.GET, userApiPath(username))

    if (result.status === 200) {
        return result.data as UserRetrievalDTO
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function getUserById(id: number, token: string): Promise<UserRetrievalDTO> {
    const result = await doRequest<UserRetrievalDTO>(RequestMethod.GET, userApiPath(id))

    if (result.status === 200) {
        return result.data as UserRetrievalDTO
    } else throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function deleteUserById(id: number, token: string) {
    const result = await doRequest(RequestMethod.DELETE, userApiPath(id))

    if (result.status !== 204) {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}