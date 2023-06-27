import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlackSpinner from "../../reusableUi/BlackSpinner";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
import Chart from "./chart";
import DynamicChart from "./chart";

const Index = (
  {
    // analyticsData
  }
) => {
  // Base URL
  const base = process.env.NEXT_PUBLIC_BASE_URL;

  const [daataTickets, setDataTickets] = useState();
  const [tagsAnalytics, setTagsAnalytics] = useState([]);
  const router = useRouter();
  const [apiData, setApiData] = useState();
  console.log(apiData, "apiData");
  // API GET DATA
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data); // Do something with the data
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // useEffect(() => {
  //     if (analyticsData) {

  //         let dup = []
  //         analyticsData.tagsWithCount.map((_tag) => {
  //             dup.push({
  //                 label: _tag.name,
  //                 value: _tag.count
  //             })
  //         })
  //         setTagsAnalytics(dup)
  //     }
  // }, [analyticsData])

  return (
    <div className=" w-full h-full  ">
      <div className=" my-[32px]  w-full">
        <div className="flex  items-center w-full justify-start">
          <p className="text-2xl  text-black -tracking-[0.03em]  w-full max-w-[200px] font-extrabold leading-[100%]">
            Component Stats:
          </p>
          <div className="border-zinc-300 w-full ml-5 border" />
        </div>
      </div>

      <div className="flex w-full  justify-center   items-center  gap-[20px]">
        <div className=" w-full ">
          <div className="flex flex-col h-[316px]  justify-start w-full p-5 bg-white border rounded-xl border-zinc-200">
            <div className="flex flex-col space-y-4 items-start justify-center">
              <p className="text-xl font-extrabold leading-[100%] text-zinc-900">
                OUR PRODUCTS
              </p>
              <div className="flex flex-col space-y-4  justify-start w-full">
                <div className="flex flex-col items-start justify-start px-4 py-3 bg-zinc-100 rounded-md">
                  <div className="flex space-x-24 items-center justify-between w-full">
                    <p className="text-base text-black font-semibold -tracking-[0.03em] leading-none text-zinc-900">
                      SmartPhones
                    </p>
                    <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-10 text-white h-6 hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                      <p className="text-base font-semibold leading-none ">
                        4.9/5
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                  <div className="flex space-x-24 items-center justify-between w-full">
                    <p className="text-base   text-black font-semibold leading-none text-zinc-900">
                      Fragrances
                    </p>
                    <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-10 h-6 text-white hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                      <p className="text-base font-semibold leading-none">
                        5/5
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                  <div className="flex space-x-24 items-center justify-between w-full">
                    <p className="text-base  text-black  font-semibold leading-none text-zinc-900">
                      Home Decoration
                    </p>
                    <div className="flex items-center justify-center px-2  py-1 hover:bg-white w-10 h-6 hover:text-zinc-800 text-white bg-zinc-900 rounded-[3px]">
                      <p className="text-base font-semibold leading-none">
                        4.8/5
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                  <div className="flex space-x-24 items-center justify-between w-full">
                    <p className="text-base  text-black  font-semibold leading-none text-zinc-900">
                      Laptops
                    </p>
                    <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-10 h-6 text-white hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                      <p className="text-base font-semibold leading-none ">
                        4.5/5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cardResolve */}

        <div className="w-full ">
          <div className="flex flex-col  w-full h-[420px] max-w-[600px] justify-start  p-5 bg-white border rounded-xl border-zinc-200">
            <div className="flex flex-col  justify-center ">
         
<DynamicChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
