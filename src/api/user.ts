import Axios, {AxiosRequestConfig} from 'axios'
import type {ApiResult} from '@/types/api'
import type {UserRetrievalDTO, UserCreationDTO} from "@/types/api/user";

const USER_API_PATH = '/users'

export async function createUser(userDTO: UserCreationDTO, token: string): Promise<ApiResult<UserRetrievalDTO>> {
    const result = await Axios.post(USER_API_PATH, userDTO, getDefaultConfig(token))

    if (result.status === 201) {
        return {
            success: true,
            data: result.data
        }
    } else return {
        success: false,
        statusCode: result.status,
        message: result.data.message
    }
}

export async function getUserById(id: number, token: string): Promise<ApiResult<UserRetrievalDTO>> {
    const result = await Axios.get(getPathWithId(id), getDefaultConfig({token}))

    if (result.status === 200) {
        return {
            success: true,
            data: result.data
        }
    } else return {
        success: false,
        statusCode: result.status,
        message: result.data.message
    }
}

export async function deleteUserById(id: number, token: string): Promise<ApiResult<undefined>> {
    const result = await Axios.delete(getPathWithId(id), getDefaultConfig({token}))

    if (result.status === 204) {
        return {
            success: true
        }
    } else return {
        success: false,
        statusCode: result.status,
        message: result.data.message
    }
}

function getPathWithId(id: number) {
    return `${USER_API_PATH}/${id}`
}

function getDefaultConfig(options: any): AxiosRequestConfig {
    return {
        headers: {
            Authorization: `Bearer ${options.token}`
        }
    }
}