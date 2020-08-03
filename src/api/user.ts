import Axios from 'axios'
import type { UserRetrievalDTO, UserCreationDTO } from '@/types/api/user'
import { ApiError, getDefaultAxiosConfig } from './util'

const USER_API_PATH = '/users'

export async function createUser(userDTO: UserCreationDTO, token: string): Promise<UserRetrievalDTO> {
    const result = await Axios.post(USER_API_PATH, userDTO, getDefaultAxiosConfig({token}))

    if (result.status === 201) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function getUserById(id: number, token: string): Promise<UserRetrievalDTO> {
    const result = await Axios.get(getPathWithId(id), getDefaultAxiosConfig({token}))

    if (result.status === 200) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function deleteUserById(id: number, token: string) {
    const result = await Axios.delete(getPathWithId(id), getDefaultAxiosConfig({token}))

    if (result.status !== 204) {
        throw new ApiError(result.data.message, result.status)
    }
}

function getPathWithId(id: number) {
    return `${USER_API_PATH}/${id}`
}