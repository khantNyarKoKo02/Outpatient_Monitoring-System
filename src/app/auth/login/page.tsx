/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import loginBackground from "../../../public/images/Sign up photo.png";
import Image from "next/image";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSigninUser } from "@/app/hooks/useAuthApi";
import { getToken, login } from "@/service/authService";
import { signInDataType } from "@/types/userTypes";

const Login: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<signInDataType>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const signInMutation = useSigninUser();

  useEffect(() => {
    const handleSuccess = async () => {
      if (signInMutation.isSuccess) {
        const authToken = getToken();
        if (authToken) login(authToken);
        toast.success("Login success");
        router.push("/");
      }
    };
    if (signInMutation.isSuccess) {
      handleSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInMutation.isSuccess]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    signInMutation.mutate(user, {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSettled: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left section with image */}
      <Image
        src={loginBackground}
        alt="loginBackground"
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
      />

      {/* Right section with form */}
      <div className="flex w-full md:w-1/2 justify-center items-center h-screen bg-white">
        <form onSubmit={handleLogin} className="w-80 p-6">
          <h3 className="text-3xl text-black font-semibold text-center mb-8 font-noto">
            Login
          </h3>

          <div className=" flex flex-col justify-center items-center gap-6">
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-[300px] text-black px-4 py-2 border border-primary rounded-lg  focus:outline-none focus:ring-2 focus:ring-primaryactive"
              placeholder="Username or Email"
              required
              aria-label="Username or Email"
            />

            <div className="relative w-[300px]">
              <input
                type={showPassword ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full text-black px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryactive"
                placeholder="Password"
                required
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3.5 text-primary focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4 w-[300px]">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primaryhover active:bg-primartactive transition"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
