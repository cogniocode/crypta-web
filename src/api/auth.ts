import Axios from 'axios'
import type {ApiResult} from '@/types/api'
import type {AuthCredentials} from '@/types/api/auth'

const AUTH_API_PATH = '/auth'
const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token'

interface TokenResponseDTO {
    token: string
}

export async function getAuthToken(credentials: AuthCredentials): Promise<ApiResult<TokenResponseDTO>> {
    const result = await Axios.post(AUTH_API_PATH, credentials)

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

export async function signIn(credentials: AuthCredentials) {
    const result = await getAuthToken(credentials)

    if (result.success) {
        saveToken(result.data!.token)
    } else {
        console.error(`Couldn't authenticate user: ${result.statusCode} - ${result.message}`)
    }
}

export function signOut() {
    clearToken()
}

function saveToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token)
}

function clearToken() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY)
}