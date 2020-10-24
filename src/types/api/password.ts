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
    decryptedValue?: string
    isMasterPassword: boolean
    createdAt: number
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
    PasswordGenerationDTO,
    GeneratedPasswordDTO,
    PasswordUpdateDTO
}