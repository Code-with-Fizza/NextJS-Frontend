import Link from "next/link"
import React, { useState, useEffect } from "react"
import Input from "../reusableUi/inputLogin"
import { useRouter } from "next/router"
import Spinner from "../reusableUi/spinner"
import { signIn, useSession } from "next-auth/react";

const LoginForm = () => {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
const router = useRouter()
  
  
const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    signIn('credentials', {
      email,
      password,
   
      redirect: false
    }).then((res) => {
        if (res.ok) {
            console.log(res,"res")
            // dispatch(setToken(res?.data?.access_token))
            // dispatch(setRole("admin"))
            // localStorage.setItem("auth", res?.data?.access_token)
            // localStorage.setItem("role", "admin")
            router.push("/analytics")
        }
       else{
        setError("Invalid Credentials please try again")
        setLoading(false)
       }
       
      
    })
        .catch((err) => {
            console.error(err, "0000000000000")
            // setError(err?.error?.data?.message)
            // setError("Invalid Credentials please try again")
            setLoading(false)
            dispatch(setToken(null))
        })
  };

    

    return (
        <>
            <main className="">
                <div className="w-full flex h-full ">
                    <div className="bg-zinc-50 w-[50%] px-10 2xl:px-24">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="pt-[291px]">
                            <div className="pb-[34px] flex flex-col justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100" height="100">
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
</div>


                                <div className="mb-8">
                                    <p className="w-full text-black text-[32px] leading-8 font-bold text-center justify-center items-center manrope_font pb-4">
                                        Login to your account
                                    </p>
                                    <p className=" text-zinc-600 text-xs leading-3 font-normal text-center manrope_font">
                                        Please login to get access to the
                                        dashboard.
                                    </p>
                                </div>

                                <div className="">
                                    <form 
                                   onSubmit={handleSubmit}
                                    >
                                        <Input
                                            label="Email"
                                            placeholder="Enter your email"
                                            changeHandler={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            value={email}
                                            required={true}
                                            type="email"
                                        />
                                        <div className="mt-[4px]">
                                            <Input
                                                label="Password"
                                                placeholder="Enter your password"
                                                changeHandler={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                value={password}
                                                type="password"
                                                required={true}
                                            />
                                        </div>
                                        <div className="form-check mb-8 cursor-pointer flex">
                                            <input
                                                className="form-check-input accent-black h-4 w-4 border border-zinc-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 flex  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label inline-block text-zinc-600 text-sm leading-[14px] pt-[2px] font-normal manrope_font cursor-pointer"
                                                htmlFor="flexCheckDefault"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <button
                                            disabled={loading}
                                            type="submit"
                                         
                                            className=" w-[308px] md:w-[378px]  xl:w-[395px] rounded-lg bg-zinc-900 text-white text-base leading-6 ibm_fontFont6 py-[10px]  manrope_font transform duration-300  ease-in-out "
                                        >
                                            {loading ? (
                                                <Spinner height={"20px"} />
                                            ) : (
                                                "Login"
                                            )}
                                        </button>
                                        {(
                                            <p className="text-red-600 text-xs font-medium mt-2 text-center">
                                                {error}
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right-side image login page */}
                    <div className="mx-auto container w-[50%] min-h-screen bg-[url('/images/line.png')] bg-zinc-900 z-50 object-cover ">
                        <div className="w-full pt-[130px] pl-[72px]">
                            <p className="w-full text-zinc-50 text-[32px] leading-[42px] font-bold items-center manrope_font pb-4">
                             Admin Dashboard Panel
                            </p>
                            <p className=" text-zinc-400 text-base leading-4 font-normal items-center manrope_font pb-16">
                                All the tings you need to manage your business
                            </p>
                        </div>
                        <div className="">
                            <div className="login-rec ">
                                <img
                                    className="w-full h-fit py-[16px] pl-[14px] "
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/moda-bg.png"
                                    alt="login image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LoginForm
