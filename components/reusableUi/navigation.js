import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = ({ nav }) => {
    const router = useRouter()
    const [sideBar, setsideBar] = useState(true)
    

    const routes = [
        {
            svg: (
                <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_103_121)">
                        <path
                            d="M8.59663 6H7.40329C6.99644 6 6.66663 6.32982 6.66663 6.73667V13.2633C6.66663 13.6702 6.99644 14 7.40329 14H8.59663C9.00348 14 9.33329 13.6702 9.33329 13.2633V6.73667C9.33329 6.32982 9.00348 6 8.59663 6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.2634 2H12.07C11.6632 2 11.3334 2.32982 11.3334 2.73667V13.2633C11.3334 13.6702 11.6632 14 12.07 14H13.2634C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2634 2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.33333 13.9999C4.06971 13.9999 4.66667 13.403 4.66667 12.6666C4.66667 11.9302 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9302 2 12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_103_121">
                            <rect width={16} height={16} fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>

            ),
            link: `/analytics`,
            linkName: `Analytics`

        },
       
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <circle cx={9} cy={7} r={4} />
        //             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        //             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        //             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        //         </svg>
        //     ),
        //     link: `/users/adminUsers`,
        //     linkName: `Admin`,
        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <circle cx={9} cy={7} r={4} />
        //             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        //             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        //             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        //         </svg>
        //     ),
        //     link: `/users/allUsers`,
        //     linkName: `Users`,

        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        //             <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
        //             <circle cx={6} cy={14} r={3} />
        //             <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
        //         </svg>

        //     ),
        //     link: `/license`,
        //     linkName: `License`,

        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pagekit" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
        //         </svg>
        //     ),
        //     link: `/ui-kit`,
        //     linkName: `UI Kit`
        // },
        // {
        //     svg: (
        //         <svg
        //             width={16}
        //             height={16}
        //             viewBox="0 0 16 16"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <g clipPath="url(#clip0_103_121)">
        //                 <path
        //                     d="M8.59663 6H7.40329C6.99644 6 6.66663 6.32982 6.66663 6.73667V13.2633C6.66663 13.6702 6.99644 14 7.40329 14H8.59663C9.00348 14 9.33329 13.6702 9.33329 13.2633V6.73667C9.33329 6.32982 9.00348 6 8.59663 6Z"
        //                     stroke="currentColor"
        //                     strokeWidth="1.5"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                 />
        //                 <path
        //                     d="M13.2634 2H12.07C11.6632 2 11.3334 2.32982 11.3334 2.73667V13.2633C11.3334 13.6702 11.6632 14 12.07 14H13.2634C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2634 2Z"
        //                     stroke="currentColor"
        //                     strokeWidth="1.5"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                 />
        //                 <path
        //                     d="M3.33333 13.9999C4.06971 13.9999 4.66667 13.403 4.66667 12.6666C4.66667 11.9302 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9302 2 12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999Z"
        //                     stroke="currentColor"
        //                     strokeWidth="1.5"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                 />
        //             </g>
        //             <defs>
        //                 <clipPath id="clip0_103_121">
        //                     <rect width={16} height={16} fill="currentColor" />
        //                 </clipPath>
        //             </defs>
        //         </svg>

        //     ),
        //     link: `/subuikits`,
        //     linkName: `SubUiKit`

        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><line x1={9} y1={15} x2={15} y2={9} /><circle cx="9.5" cy="9.5" r=".5" fill="currentColor" /><circle cx="14.5" cy="14.5" r=".5" fill="currentColor" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" /></svg>


        //     ),
        //     link: `/createCategory`,
        //     linkName: `Category`

        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><line x1={9} y1={15} x2={15} y2={9} /><circle cx="9.5" cy="9.5" r=".5" fill="currentColor" /><circle cx="14.5" cy="14.5" r=".5" fill="currentColor" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" /></svg>


        //     ),
        //     link: `/createSubCategory`,
        //     linkName: `Sub-Category`

        // },

        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-components" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <path d="M3 12l3 3l3 -3l-3 -3z" />
        //             <path d="M15 12l3 3l3 -3l-3 -3z" />
        //             <path d="M9 6l3 3l3 -3l-3 -3z" />
        //             <path d="M9 18l3 3l3 -3l-3 -3z" />
        //         </svg>

        //     ),
        //     link: `/createComponent`,
        //     linkName: `Components`,

        // },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pagekit" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
        //         </svg>

        //     ),
        //     link: `/templates`,
        //     linkName: `Templates`,

        // },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-union" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
                </svg>


            ),
            link: `/products`,
            linkName: `Products`,

        },
         {
             svg: (
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-union" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
                </svg>


             ),
             link: `/createProduct`,
            linkName: `Create Product`,

         },
        // {
        //     svg: (
        //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //             <circle cx={12} cy={12} r={4} />
        //             <circle cx={12} cy={12} r={9} />
        //             <line x1={15} y1={15} x2="18.35" y2="18.35" />
        //             <line x1={9} y1={15} x2="5.65" y2="18.35" />
        //             <line x1="5.65" y1="5.65" x2={9} y2={9} />
        //             <line x1="18.35" y1="5.65" x2={15} y2={9} />
        //         </svg>
        //     ),
        //     link: `/support`,
        //     linkName: `Support`,

        // },



    ]

    return (
        <div className="h-screen z-30 relative">
            {/* Vertical navigation starts */}
            {nav && (
                <div className="w-[260px] sm:ml-6 lg:ml-0 fixed sm:fixed  dark:bg-[#001d3d] bg-zinc-900 border-r sm:h-full flex-col justify-between hidden lg:flex">
                    <div className="overflow-y-auto">
                        <div className="w-full flex justify-center items-center px-4 lg:mt-6 md:mt-4">
                            {" "}
                            {/* h-16 */}
                            <Link href={"/analytics"} passHref>

                                <div
                                    aria-label="logo"
                                    className="flex gap-2 items-center"
                                >
                                                       <div className="pb-[34px] flex flex-col justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100" height="100">
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
</div>



                                </div>

                            </Link>
                        </div>

                        <ul className="mt-12 px-4 space-y-2">
                            {routes.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx * Math.random() * 1000}
                                        href={item.link}
                                    >
                                        <li
                                            className={`${item.link === router.pathname
                                                ? "bg-zinc-700 text-white"
                                                : "text-zinc-400 hover:bg-zinc-700 rounded-lg hover:text-white"
                                                }  max-w-[228px]  rounded-lg  cursor-pointer px-4 py-3`}
                                        >
                                            <p className="flex items-center rounded focus:outline-none  space-x-2">
                                                {item.svg}

                                                <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                    {item.linkName}
                                                </span>
                                            </p>
                                         

                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* {Resolved bar} */}
                    <div className=" px-8 pb-11">
                
                        <div className="w-full max-w-[288] min-w-[288] mt-[24px] bg-zinc-700 h-[2px]"></div>
                        <button
                            onClick={() => {
                                localStorage.clear()
                                router.push("/")
                            }}
                            className={` text-zinc-400 w-full hover:bg-zinc-700 hover:text-white cursor-pointer font-bold py-3 px-4 gap-2 mt-[24px] rounded-lg inline-flex items-center`}
                        >
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="none">
                                    <path
                                        d="M9.33333 5.33335V4.00002C9.33333 3.6464 9.19286 3.30726 8.94281 3.05721C8.69276 2.80716 8.35362 2.66669 8 2.66669H3.33333C2.97971 2.66669 2.64057 2.80716 2.39052 3.05721C2.14048 3.30726 2 3.6464 2 4.00002V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3334 3.33333 13.3334H8C8.35362 13.3334 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.66675 8H14.0001L12.0001 6M12.0001 10L14.0001 8"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_612_608">
                                        <rect
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span   >Logout</span>
                        </button>
                    </div>
                </div>
            )
            }

            <nav className="sticky top-0 ...">
                {true && (
                    <div
                        className={
                            sideBar
                                ? "fixed w-full h-full transform -translate-x-full transition duration-500 z-40 lg:hidden"
                                : "fixed w-full h-full transform translate-x-0 transition duration-500 z-40 lg:hidden"
                        }
                    >
                        <div className="w-full  z-40 fixed   top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="h-full ">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div className="overflow-y-auto">
                                        <div className="w-full flex justify-center items-center px-4 lg:mt-6 md:mt-4">
                                            {" "}
                                            <Link href={"/"} passHref>

                                                <div
                                                    aria-label="logo"
                                                    className="flex gap-2 items-center"
                                                >
                                                    <svg
                                                        width={80}
                                                        height={64}
                                                        viewBox="0 0 80 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M68.7558 10.6254C67.3721 11.4158 65.1464 12.001 61.9035 12.427C59.9088 12.6892 56.8331 12.7976 49.2532 12.8731C40.454 12.9608 39.0311 13.0209 37.5312 13.3684C34.2731 14.123 31.5589 15.7317 29.6416 18.0444C28.3329 19.623 28.1404 19.991 26.776 23.5223L25.6723 26.3794L23.6284 26.5282C21.0132 26.7187 19.4795 27.0378 18.134 27.6719C16.0677 28.6456 14.7456 30.4512 14.2511 32.9743C13.9256 34.6348 14.3241 36.1554 15.4221 37.443C16.2657 38.4322 16.5731 38.5549 16.5731 37.9029C16.5731 37.0714 17.1717 36.2803 18.0937 35.8934C18.8656 35.5694 19.8382 35.5 24.7459 35.4196C30.2855 35.3288 30.4887 35.3396 30.3538 35.7199C30.1472 36.3017 29.623 36.8538 28.9076 37.2434C28.425 37.5065 27.4533 37.6144 24.8138 37.698L21.3528 37.8076L20.0518 41.2996C17.3895 48.4456 15.734 50.6959 11.4898 52.9376L10 53.7246L10.8092 53.8588C12.3441 54.1134 18.1677 54.0042 19.9716 53.687C25.7621 52.669 29.9239 49.8333 32.1668 45.3776C32.532 44.6523 33.5623 42.1286 34.4565 39.7693L36.0823 35.4797L42.6149 35.3571C49.8792 35.2206 50.6344 35.0991 53.7672 33.5621C56.6054 32.1693 59.5468 29.4439 60.7663 27.0767L61.0709 26.4852H50.3129C42.3195 26.4852 39.5546 26.4224 39.5546 26.2408C39.5546 26.1064 39.9358 25.6323 40.4017 25.1875C41.6455 23.9998 42.7245 23.7676 47.6719 23.6227C52.2066 23.49 55.1792 23.1408 57.6159 22.4544C62.9704 20.9463 66.6624 18.2038 68.6204 14.2801C69.285 12.9483 70.2169 9.95936 69.9546 10.0004C69.8751 10.0129 69.3356 10.2942 68.7558 10.6254ZM20.9931 29.6504C21.4985 29.9715 21.017 30.9744 20.1538 31.3992C18.6372 32.1452 17.9149 31.2432 19.087 30.0667C19.7072 29.4441 20.422 29.2879 20.9931 29.6504Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>

                                            </Link>
                                        </div>

                                        <ul className="mt-12 px-4 space-y-2">
                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px] hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_121)">
                                                                <path
                                                                    d="M8.59663 6H7.40329C6.99644 6 6.66663 6.32982 6.66663 6.73667V13.2633C6.66663 13.6702 6.99644 14 7.40329 14H8.59663C9.00348 14 9.33329 13.6702 9.33329 13.2633V6.73667C9.33329 6.32982 9.00348 6 8.59663 6Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M13.2634 2H12.07C11.6632 2 11.3334 2.32982 11.3334 2.73667V13.2633C11.3334 13.6702 11.6632 14 12.07 14H13.2634C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2634 2Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M3.33333 13.9999C4.06971 13.9999 4.66667 13.403 4.66667 12.6666C4.66667 11.9302 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9302 2 12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_121">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Analytics
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_129)">
                                                                <path
                                                                    d="M10 3.33325V4.66659"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10 7.33325V8.66659"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10 11.3333V12.6666"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M3.33333 3.33325H12.6667C13.0203 3.33325 13.3594 3.47373 13.6095 3.72378C13.8595 3.97382 14 4.31296 14 4.66659V6.66659C13.6464 6.66659 13.3072 6.80706 13.0572 7.05711C12.8071 7.30716 12.6667 7.6463 12.6667 7.99992C12.6667 8.35354 12.8071 8.69268 13.0572 8.94273C13.3072 9.19278 13.6464 9.33325 14 9.33325V11.3333C14 11.6869 13.8595 12.026 13.6095 12.2761C13.3594 12.5261 13.0203 12.6666 12.6667 12.6666H3.33333C2.97971 12.6666 2.64057 12.5261 2.39052 12.2761C2.14048 12.026 2 11.6869 2 11.3333V9.33325C2.35362 9.33325 2.69276 9.19278 2.94281 8.94273C3.19286 8.69268 3.33333 8.35354 3.33333 7.99992C3.33333 7.6463 3.19286 7.30716 2.94281 7.05711C2.69276 6.80706 2.35362 6.66659 2 6.66659V4.66659C2 4.31296 2.14048 3.97382 2.39052 3.72378C2.64057 3.47373 2.97971 3.33325 3.33333 3.33325"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_129">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Tickets
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_138)">
                                                                <path
                                                                    d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.781C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.781C9.71905 11.2811 10 11.9594 10 12.6667V14"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M14 14.0001V12.6668C13.9966 12.0782 13.7986 11.5073 13.4368 11.043C13.0751 10.5788 12.5699 10.2472 12 10.1001"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_138">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em] ">
                                                            Team
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Settings
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Customers
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Hardware
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            {/* Vertical navigation ends */}
        </div >
    )
}

export default Navigation
