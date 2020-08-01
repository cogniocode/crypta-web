import {AxiosRequestConfig} from "axios"

export function getDefaultConfig(options: any): AxiosRequestConfig {
    return {
        headers: {
            Authorization: `Bearer ${options.token}`
        }
    }
}