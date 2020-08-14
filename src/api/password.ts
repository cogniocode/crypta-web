import {DecodedPasswordDTO, PasswordCreationDTO, PasswordRetrievalDTO} from "@/types/api/password"
import Axios from "axios"
import {ApiError, getDefaultAxiosConfig} from "@/api/util"

interface CreatePasswordParameters {
    length?: number
    use_nums?: boolean
    use_symb?: boolean
}

const passwordApiPath = (userId: number, passwordId?: number) =>
    passwordId ? `/users/${userId}/passwords/${passwordId}` : `/users/${userId}/passwords`

export async function createPassword(
    userId: number,
    passwordDTO: PasswordCreationDTO,
    token: string,
    params?: CreatePasswordParameters
): Promise<PasswordRetrievalDTO> {
    try {
        const result = await Axios.post(passwordApiPath(userId), passwordDTO, {
            ...getDefaultAxiosConfig({token}),
            params
        })

        if (result.status === 201) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function getPasswordById(userId: number, passwordId: number, token: string): Promise<PasswordRetrievalDTO> {
    try {
        const result = await Axios.get(passwordApiPath(userId, passwordId), getDefaultAxiosConfig({token}))

        if (result.status === 200) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function getDecodedPasswordById(userId: number, passwordId: number, token: string): Promise<DecodedPasswordDTO> {
    try {
        const result = await Axios.get(passwordApiPath(userId, passwordId) + ":decoded", getDefaultAxiosConfig({token}))

        if (result.status === 200) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function getUserPasswords(userId: number, token: string): Promise<Array<PasswordRetrievalDTO>> {
    try {
        const result = await Axios.get(passwordApiPath(userId), getDefaultAxiosConfig({token}))

        if (result.status === 200) {
            return result.data
        } else throw new ApiError(result.data.message, result.status)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}

export async function deletePasswordById(userId: number, passwordId: number, token: string) {
    try {
        const result = await Axios.delete(passwordApiPath(userId, passwordId), getDefaultAxiosConfig({token}))

        if (result.status !== 204) {
            throw new ApiError(result.data.message, result.status)
        }
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else throw e
    }
}