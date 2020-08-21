import Axios from "axios";
import {ApiError} from "@/api/util"
import {getToken} from "@/services/token"

enum HttpMethod { GET, POST, PUT, PATCH, DELETE }

async function doRequest<T>(method: HttpMethod, url: string, body: any, authenticated: boolean = true): Promise<T> {
    try {
        const token = getToken()

        if (authenticated && token == null) {
            throw new Error("Token is null.");
        }

        const result = await Axios.request({
            // @ts-ignore
            method: method.toString(),
            url,
            data: body,
            headers: {

            }
        })

        if (result.status === 200) {
            return result.data.token
        } else {
            throw new ApiError(result.data.message, result.status)
        }
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else {
            throw e
        }
    }
}