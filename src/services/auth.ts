import { AuthCredentials } from "@/types/api/auth"
import { getAuthToken } from "@/api/auth"
import { ApiError } from "@/api/util"
import {ServiceError} from "@/services/util";

const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token'

export async function signIn(credentials: AuthCredentials) {
    try {
        const token = await getAuthToken(credentials)

        saveToken(token)
    } catch (e) {
        if (e instanceof ApiError) {
            throw new ServiceError(`Couldn't authenticate user: ${e.statusCode} - ${e.message}`)
        } else {
            throw e
        }
    }
}

export function signOut() {
    clearToken()
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY) != null
}

export function getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY)
}

function saveToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token)
}

function clearToken() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY)
}