import type {AuthCredentials} from "@/types/api/auth"
import {ApiError} from './util'
import {doRequest, RequestMethod} from "@/api/client"

const AUTH_API_PATH = "/auth"

export async function authenticate(credentials: AuthCredentials): Promise<string> {
    const result = await doRequest<any>(RequestMethod.POST, AUTH_API_PATH, credentials, undefined, false)

    if (result.status === 200) {
        return result.data.token
    } else {
        throw new ApiError(result.data.message, result.status)
    }
}