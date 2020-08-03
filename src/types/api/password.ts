interface PasswordCreationDTO {
    name: string
    value: string
}

interface PasswordRetrievalDTO {
    id: number
    name: string
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