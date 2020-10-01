import {ApiErrorDTO, doRequest, RequestMethod} from "@/api/client"
import {ApiError} from "@/api/util"

export interface TextCryptoModel {
    text: string
}

const encryptorApiPath = (type: string) => `/encryptor/${type}`

export async function processText(text: TextCryptoModel, action: "ENCRYPT" | "DECRYPT"): Promise<TextCryptoModel> {
    const result = await doRequest<TextCryptoModel>(RequestMethod.POST, encryptorApiPath("text"), text, {
        queryParameters: {
            action
        }
    })

    if (result.status === 200) {
        return result.data as TextCryptoModel
    } else {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}