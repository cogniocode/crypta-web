import home from "./home"
import signin from "./signin"
import signup from "./signup"
import passwords from "./passwords"
import encryptor from "./encryptor"
import generator from "./generator"

export default [
    home,
    signin,
    signup,
    ...passwords,
    encryptor,
    generator
]