interface UserCreationDTO {
    username: string
    password: string
    email: string
}

interface UserRetrievalDTO {
    id: number
    username: string
    email: string
    createdAt: number
}

export type {
    UserCreationDTO,
    UserRetrievalDTO
}