import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
// import Layout from "../layout"
const Layout = dynamic(() => import("../layout"), {
  ssr: false,
  // loading: () => <h1>loading</h1>
});
import AnalyticsCard from "./analyticsCard";
import AnalyticsCardStats from "./analyticsCardStats";
import Header from "../header";
import BlackSpinner from "../reusableUi/BlackSpinner";

const Index = ({ setApiData, apiData }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [averageStock, setAverageStock] = useState(0);
  const [averageDiscount, setAverageDiscount] = useState(0);

  useEffect(() => {
    const totalProducts = apiData?.products?.length;
    const totalRating = apiData?.products?.reduce(
      (sum, item) => sum + item.rating,
      0
    );
    const averageRating = totalProducts ? totalRating / totalProducts : 0;

    setAverageRating(averageRating);
  }, [apiData]);

  useEffect(() => {
    const totalProducts = apiData?.products?.length;
    const totalStock = apiData?.products?.reduce(
      (sum, item) => sum + item.stock,
      0
    );
    const averageStock = totalProducts ? totalStock / totalProducts : 0;

    setAverageStock(averageStock);
  }, [apiData]);

  useEffect(() => {
    const calculateAverageDiscount = () => {
      const totalProducts = apiData?.products?.length;
      const totalDiscount = apiData?.products?.reduce(
        (sum, item) =>
          sum + ((item.price - item.discountedPrice) / item.price) * 100,
        0
      );
      const averageDiscount = totalProducts ? totalDiscount / totalProducts : 0;

      setAverageDiscount(averageDiscount);
    };

    calculateAverageDiscount();
  }, [apiData]);
  const cardData1 = [
    {
      number: "0",
      // url: "./images/ticket-outline.svg",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-report-analytics"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
       
          stroke="#e5e7eb"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <rect x={9} y={3} width={6} height={4} rx={2} />
          <path d="M9 17v-5" />
          <path d="M12 17v-1" />
          <path d="M15 17v-3" />
        </svg>
      ),
      title: "Total Products",
      value: apiData?.limit,
    },
    {
      number: "0",
      // url: "./images/speedometer-outline.svg",
      svg: (
        <svg
          width={32}
          height={32}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_679_2984)">
            <path
              d="M4.66665 4.66667C5.40303 4.66667 5.99998 4.06971 5.99998 3.33333C5.99998 2.59695 5.40303 2 4.66665 2C3.93027 2 3.33331 2.59695 3.33331 3.33333C3.33331 4.06971 3.93027 4.66667 4.66665 4.66667Z"
              stroke="#FAFAFA"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33335 14.6663V11.333L2.66669 10.6663V7.99967C2.66669 7.82286 2.73693 7.65329 2.86195 7.52827C2.98697 7.40325 3.15654 7.33301 3.33335 7.33301H6.00002C6.17683 7.33301 6.3464 7.40325 6.47142 7.52827C6.59645 7.65329 6.66669 7.82286 6.66669 7.99967V10.6663L6.00002 11.333V14.6663"
              stroke="#FAFAFA"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3333 4.66667C12.0697 4.66667 12.6667 4.06971 12.6667 3.33333C12.6667 2.59695 12.0697 2 11.3333 2C10.597 2 10 2.59695 10 3.33333C10 4.06971 10.597 4.66667 11.3333 4.66667Z"
              stroke="#FAFAFA"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 14.6663V11.9997H8.66669L10 7.99967C10 7.82286 10.0703 7.65329 10.1953 7.52827C10.3203 7.40325 10.4899 7.33301 10.6667 7.33301H12C12.1768 7.33301 12.3464 7.40325 12.4714 7.52827C12.5964 7.65329 12.6667 7.82286 12.6667 7.99967L14 11.9997H12.6667V14.6663"
              stroke="#FAFAFA"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_679_2984">
              <rect width={16} height={16} fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Average Rating",
      value: `${averageRating.toFixed(2)}%`,
    },

    {
      number: "0",
      // url: "./images/speedometer-outline.svg",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-components"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#e5e7eb"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
      ),
      title: "Average Stock",
      value: `${averageStock.toFixed(2)}%`,
    },
    {
      number: "0",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-pagekit"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#e5e7eb"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
        </svg>
      ),
      title: "Average Discount",
      value: `${50}%`,
    },

  

  ];
  return (
    <>
      <Layout nav={true}>
        {/* {isLoading ? (
                    <div className="flex w-full h-screen my-auto items-center justify-center">
                        <BlackSpinner width="60" height="60" />
                    </div>
                ) :
                
                ( */}
        <main>
          <Header title={"Analytics"} />
          <div className="w-full mx-auto px-2 max-w-[1124px]">
            <div className=" mt-[24px] ">
              <div className="inline-flex items-center w-full bg-black dark:background-dashboard mb-[28px]  dark:bg-[#001d3d] justify-start  h-[96px] p-5 rounded-xl">
                <div className="inline-flex flex-col space-y-4 items-start justify-start">
                  <p className="text-2xl font-extrabold leading-normal text-white">
                    Welcome Back
                  </p>
                  <p className="text-base font-medium leading-none f-f-m text-gray-50 text-opacity-60">
                    Get an Overview of all the stats from this page
                  </p>
                </div>
              </div>
            </div>

            <div></div>
            <div className=" grid grid-cols-4 gap-5 2xl:justify-between  ">
              <AnalyticsCard
                cardData1={cardData1}
                apiData={apiData}
                setApiData={setApiData}
              />
            </div>
            <div className="">
              <AnalyticsCardStats apiData={apiData} setApiData={setApiData} />
            </div>
          </div>
        </main>
        {/* )} */}
      </Layout>
    </>
  );
};

export default Index;
