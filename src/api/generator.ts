import {GeneratedPasswordDTO, PasswordGenerationDTO} from "@/types/api/password"
import {ApiErrorDTO, doRequest, RequestMethod} from "@/api/client";
import {ApiError} from "@/api/util";

const GENERATOR_API_PATH = "/generator"

export async function generatePassword(generationDTO: PasswordGenerationDTO): Promise<GeneratedPasswordDTO> {
    const result = await doRequest<GeneratedPasswordDTO>(RequestMethod.POST, GENERATOR_API_PATH + "/password", generationDTO)

    if (result.status === 200) {
        return result.data as GeneratedPasswordDTO
    } else {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}