import { AuthCredentials } from "@/types/api/auth"
import { getAuthToken } from "@/api/auth"
import jwtDecode from "jwt-decode"

const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token'

export async function signIn(credentials: AuthCredentials) {
    const token = await getAuthToken(credentials)

    saveToken(token)
}

export function signOut() {
    clearToken()
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY) != null
}

export function getUsernameFromToken() {
    const token = getToken()

    if (token != null) {
        return (jwtDecode(token) as any).sub
    } else return null
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