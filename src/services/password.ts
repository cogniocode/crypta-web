import {getDecodedPasswordById} from "@/api/password"
import vm from "@/main"
import {getToken} from "@/services/token";
import {ServiceError} from "@/services/util";

export async function getDecodedPassword(passwordId: number): Promise<string> {
    const userId = vm.$store.state.user.user?.id
    const authToken = getToken()

    if (authToken != null && userId != null) {
        const decodedPassword = await getDecodedPasswordById(userId, passwordId, authToken)

        return decodedPassword.decodedValue
    } else throw new ServiceError("Auth token is not present or user is null.")
}