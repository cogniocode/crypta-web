interface PasswordCreationDTO {
    name: string
    value?: string
    username: string
    website?: string
}

interface PasswordRetrievalDTO {
    id: number
    name: string
    username: string
    website?: string
    createdAt: number
}

interface DecodedPasswordDTO {
    id: number
    decodedValue: string
}

export type {
    PasswordCreationDTO,
    PasswordRetrievalDTO,
    DecodedPasswordDTO
}