import jwtDecode from "jwt-decode"

const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token'

export function isTokenPresent() {
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

export function saveToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token)
}

export function clearToken() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY)
}