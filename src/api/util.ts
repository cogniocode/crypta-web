import {AxiosRequestConfig} from "axios"

interface DefaultAxiosConfigOptions {
    token: string
}

export class ApiError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = "ApiError"

        this.statusCode = statusCode
    }
}

export function getDefaultAxiosConfig(options: DefaultAxiosConfigOptions): AxiosRequestConfig {
    return {
        headers: {
            Authorization: `Bearer ${options.token}`
        }
    }
}