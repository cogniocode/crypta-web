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

interface DecodedPasswordDTO {
    id: number
    decodedValue: string
}

interface PasswordGenerationDTO {
    type: string
    length: number
    useSymbols?: boolean
    useNumbers?: boolean
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
    DecodedPasswordDTO,
    PasswordGenerationDTO,
    GeneratedPasswordDTO,
    PasswordUpdateDTO
}