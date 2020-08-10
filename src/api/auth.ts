import Axios from "axios"
import type {AuthCredentials} from "@/types/api/auth"
import {ApiError, getDefaultAxiosConfig} from './util'

const AUTH_API_PATH = "/auth"

export async function getAuthToken(credentials: AuthCredentials): Promise<string> {
    try {
        const result = await Axios.post(AUTH_API_PATH, credentials)

        if (result.status === 200) {
            return result.data.token
        } else {
            throw new ApiError(result.data.message, result.status)
        }
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}