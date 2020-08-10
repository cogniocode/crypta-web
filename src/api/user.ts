import Axios from 'axios'
import type { UserRetrievalDTO, UserCreationDTO } from '@/types/api/user'
import { ApiError, getDefaultAxiosConfig } from './util'

const userApiPath = (usernameOrId?: string | number) => usernameOrId ? `/users/${usernameOrId}` : '/users'

export async function createUser(userDTO: UserCreationDTO): Promise<UserRetrievalDTO> {
    try {
        const result = await Axios.post(userApiPath(), userDTO)

        if (result.status === 201) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function getUserByUsername(username: string, token: string): Promise<UserRetrievalDTO> {
    try {
        const result = await Axios.get(userApiPath(username), getDefaultAxiosConfig({token}))

        if (result.status === 200) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function getUserById(id: number, token: string): Promise<UserRetrievalDTO> {
    try {
        const result = await Axios.get(userApiPath(id), getDefaultAxiosConfig({token}))

        if (result.status === 200) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function deleteUserById(id: number, token: string) {
    try {
        const result = await Axios.delete(userApiPath(id), getDefaultAxiosConfig({token}))

        if (result.status !== 204) {
            throw new ApiError(result.data.message, result.status)
        }
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}