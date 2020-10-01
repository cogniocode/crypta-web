interface PasswordCreationDTO {
    name: string
    value: string
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

interface DecryptedPasswordDTO {
    id: number
    decodedValue: string
}

interface PasswordGenerationDTO {
    type: string
    length: number
    options: any
}

interface GeneratedPasswordDTO {
    value: string
}

interface PasswordUpdateDTO {
    name?: string
    value?: string
    username?: string
    website?: string
}

export type {
    PasswordCreationDTO,
    PasswordRetrievalDTO,
    DecryptedPasswordDTO,
    PasswordGenerationDTO,
    GeneratedPasswordDTO,
    PasswordUpdateDTO
}