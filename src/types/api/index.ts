interface ApiResult<T> {
    success: boolean
    statusCode?: number
    message?: string
    data?: T
}

interface ApiErrorDTO {
    message: string
}

export type {
    ApiResult
}