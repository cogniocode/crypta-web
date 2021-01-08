import {ApiErrorDTO, doRequest, RequestMethod} from "@/api/client"
import {ApiError} from "@/api/util"

export interface TextCryptoModel {
    text: string
}

type EncryptorAction = "ENCRYPT" | "DECRYPT"

const encryptorApiPath = (type: string) => `/encryptor/${type}`

export async function processText(text: TextCryptoModel, action: EncryptorAction): Promise<TextCryptoModel> {
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

export async function processFile(fileForm: FormData, action: EncryptorAction): Promise<Blob> {
    const result = await doRequest<Blob>(RequestMethod.POST, encryptorApiPath("file"), fileForm, {
        queryParameters: {
            action
        }
    }, true, {
        responseType: "blob"
    })
    const filename = action === "ENCRYPT" ? (fileForm.get("file") as File).name + ".cef" : (fileForm.get("file") as File).name.split(".cef")[0]

    if (result.status === 200) {
        return result.data as Blob
    } else {
        throw new ApiError((result.data as ApiErrorDTO).message, result.status)
    }
}