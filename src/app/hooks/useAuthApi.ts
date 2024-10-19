import { signInDataType } from "@/types/userTypes"
import { useMutation } from "react-query"
import { signInUser } from "../api/authApi"

export const useSigninUser = () => {
    return useMutation({
        mutationFn: (user : signInDataType) => signInUser({user})
    })
}