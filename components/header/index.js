import { useTheme } from "next-themes";
import Link from "next/link"
import React, { useEffect, useState } from "react"

const Index=({ title })=> {
    const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
  }, []);
    return (
        <>
            <div className="flex justify-between sticky top-0 z-[10] items-center border-b dark:bg-[#001d3d]  bg-white border-[#E4E4E7] py-5 px-6">
                {
                    title !== "page"
                        ?
                        <p className="text-black  dark:text-white text-2xl leading-6 font-extrabold manrope_font -tracking-[0.03em]">
                            {title}
                        </p>
                        :
                        <div className="flex items-center gap-4">
                            <Link href={"/tickets"} passHref>
                                <button className="flex items-center gap-2 leading-5 text-zinc-900 font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-backspace"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
                                        <path d="M12 10l4 4m0 -4l-4 4" />
                                    </svg>
                                    Back
                                </button>
                            </Link>
                        </div>
                }
                 <div className="flex items-center cursor-pointer  md:mr-4">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 p-3 rounded focus:outline-none "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && (
                  <>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                      >
                        {theme === "dark" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        )}
                      </svg>
                    </div>
                  </>
                )}
              </button>

             
              {/* <p className="hidden">Light</p> */}
            </div>
               
            </div>
        </>
    )
}
export default Index
