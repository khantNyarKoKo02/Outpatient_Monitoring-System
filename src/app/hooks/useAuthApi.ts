import { signInDataType, signUpDataType } from "@/types/userTypes"
import { useMutation } from "react-query"
import { signInUser, signUpUser } from "../api/authApi"

export const useSigninUser = () => {
    return useMutation({
        mutationFn: (user : signInDataType) => signInUser({user})
    })
}

export const useSignupUser = () => {
    return useMutation({
        mutationFn: (user : signUpDataType) => signUpUser({user})
    })
}