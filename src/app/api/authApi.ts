/* eslint-disable @typescript-eslint/no-explicit-any */
import { login } from "@/service/authService";
import { signInDataType } from "@/types/userTypes";
import axios from "axios";
import { BaseURL } from "@/service/ApiEndpoints";

export const signInUser = async ({ user }: { user: signInDataType }) => {
  try {
    const response = await axios.post(`${BaseURL}/auth/signin`, user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const token = response.data.access_token;

    login(token);

    return response.data;
  } catch (error: any) {
    console.error(
      "Sign-in error:",
      error.response?.data.message || error.message
    );
    throw new Error(
      error.response?.data.message || "An error occurred during sign in"
    );
  }
};
