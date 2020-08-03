import type { UserCreationDTO, UserRetrievalDTO } from "@/types/api/user"
import { createUser } from "@/api/user"
import { ApiError } from "@/api/util"
import { ServiceError } from "@/services/util"

export async function signUp(userCreationData: UserCreationDTO): Promise<UserRetrievalDTO> {
    try {
        return await createUser(userCreationData)
    } catch (e) {
        if (e instanceof ApiError) {
            throw new ServiceError(e.message)
        } else throw e
    }
}