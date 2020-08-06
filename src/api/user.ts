import Axios from 'axios'
import type { UserRetrievalDTO, UserCreationDTO } from '@/types/api/user'
import { ApiError, getDefaultAxiosConfig } from './util'

const USER_API_PATH = '/users'

export async function createUser(userDTO: UserCreationDTO): Promise<UserRetrievalDTO> {
    const result = await Axios.post(USER_API_PATH, userDTO)

    if (result.status === 201) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function getUserByUsername(username: string, token: string): Promise<UserRetrievalDTO> {
    const result = await Axios.get(buildPath(username), getDefaultAxiosConfig({token}))

    if (result.status === 200) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function getUserById(id: number, token: string): Promise<UserRetrievalDTO> {
    const result = await Axios.get(buildPath(id), getDefaultAxiosConfig({token}))

    if (result.status === 200) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function deleteUserById(id: number, token: string) {
    const result = await Axios.delete(buildPath(id), getDefaultAxiosConfig({token}))

    if (result.status !== 204) {
        throw new ApiError(result.data.message, result.status)
    }
}

function buildPath(value: any) {
    return `${USER_API_PATH}/${value}`
}