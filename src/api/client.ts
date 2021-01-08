import Axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import {ApiError} from "@/api/util"
import {getToken} from "@/services/token"

export enum RequestMethod { GET, POST, PUT, PATCH, DELETE}

export interface ApiErrorDTO {
    message: string
}

export interface RequestParameters {
    queryParameters?: any
    headers?: any
}

export async function doRequest<T = void>(
    method: RequestMethod,
    url: string,
    body?: any,
    parameters?: RequestParameters,
    authenticated: boolean = true,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T | ApiErrorDTO>> {
    try {
        const token = getToken()

        if (authenticated && token == null) {
            throw new Error("Token is null.");
        }

        const requestConfig: AxiosRequestConfig = {
            // @ts-ignore
            method: RequestMethod[method],
            url,
            data: body,
            headers: {},
            ...config
        }

        if (parameters) {
            if (parameters.queryParameters) {
                requestConfig.params = parameters.queryParameters
            }

            if (parameters.headers) {
                requestConfig.headers = parameters.headers
            }
        }

        if (authenticated)
            requestConfig.headers.Authorization = `Bearer ${token}`

        return await Axios.request(requestConfig)
    } catch (e) {
        if (e.isAxiosError) {
            throw new ApiError("Server unreachable.", 500)
        } else {
            throw e
        }
    }
}