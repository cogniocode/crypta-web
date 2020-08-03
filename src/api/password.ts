import {PasswordCreationDTO, PasswordRetrievalDTO} from "@/types/api/password"
import Axios from "axios"
import {ApiError, getDefaultAxiosConfig} from "@/api/util"

const PASSWORD_API_PATH = '/passwords'

export async function createPassword(passwordDTO: PasswordCreationDTO, token: string): Promise<PasswordRetrievalDTO> {
    const result = await Axios.post(PASSWORD_API_PATH, passwordDTO, getDefaultAxiosConfig({token}))

    if (result.status === 201) {
        return result.data
    } else throw new ApiError(result.data.message, result.status)
}

export async function getPassword(id: number, token: string) {

}