import {PasswordCreationDTO, PasswordRetrievalDTO, PasswordUpdateDTO} from "@/types/api/password"
import {ApiError} from "@/api/util"
import {ApiErrorDTO, doRequest, RequestMethod} from "@/api/client"

const passwordApiPath = (userId: number, passwordId?: number) =>
    passwordId ? `/users/${userId}/passwords/${passwordId}` : `/users/${userId}/passwords`

export async function createPassword(
    userId: number,
    passwordDTO: PasswordCreationDTO
): Promise<PasswordRetrievalDTO> {
    const result = await doRequest<PasswordRetrievalDTO>(RequestMethod.POST, passwordApiPath(userId), passwordDTO)

    if (result.status === 201) {
        return result.data as PasswordRetrievalDTO
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function getPasswordById(userId: number, passwordId: number): Promise<PasswordRetrievalDTO> {
    const result = await doRequest<PasswordRetrievalDTO>(RequestMethod.GET, passwordApiPath(userId, passwordId))

    if (result.status === 200) {
        return result.data as PasswordRetrievalDTO
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function getDecryptedPasswordById(userId: number, passwordId: number): Promise<PasswordRetrievalDTO> {
    const result = await doRequest<PasswordRetrievalDTO>(RequestMethod.GET, passwordApiPath(userId, passwordId), null, {
        queryParameters: {
            decrypted: true
        }
    })

    if (result.status === 200) {
        return result.data as PasswordRetrievalDTO
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function getUserPasswords(userId: number): Promise<Array<PasswordRetrievalDTO>> {
    const result = await doRequest<Array<PasswordRetrievalDTO>>(RequestMethod.GET, passwordApiPath(userId))

    if (result.status === 200) {
        return result.data as Array<PasswordRetrievalDTO>
    } else
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
}

export async function updatePasswordById(userId: number, passwordId: number, passwordUpdateDTO: PasswordUpdateDTO) {
    const result = await doRequest(RequestMethod.PATCH, passwordApiPath(userId, passwordId), passwordUpdateDTO)

    if (result.status !== 200) {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}

export async function deletePasswordById(userId: number, passwordId: number) {
    const result = await doRequest(RequestMethod.DELETE, passwordApiPath(userId, passwordId))

    if (result.status !== 204) {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}