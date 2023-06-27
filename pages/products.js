import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
const Layout = dynamic(() => import("../components/layout"), {
  ssr: false,
  // loading: () => <h1>loading</h1>
});
import IntegrationData from "../components/createIntegration";


import userAccess from "../helper/access";
import BlackSpinner from "../components/reusableUi/BlackSpinner";

import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
const Integration = () => {
  const [textSearch, setTextSearch] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  console.log(filteredData, "filteredData");

  const [loading, setLoading] = useState(true);

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

  // Search By Category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setSelectedBrand("");
    if (category === "") {
      setFilterValue(apiData?.products);
    } else {
      const filtered = apiData?.products?.filter(
        (item) => item.category === category
      );
      setFilterValue(filtered);
    }
  };
  // Search By Brand
  const filterByBrand = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory("");
    if (brand === "") {
      setFilterValue(apiData?.products);
    } else {
      const filtered = apiData?.products.filter((item) => item.brand === brand);
      setFilterValue(filtered);
    }
  };
  // Search function
  function handleSearchQuery(e) {
    setTextSearch(e.target.value);
  }
  useEffect(() => {
    if (textSearch !== "") {
      const filterData = apiData?.products?.filter((item) =>
        item?.title?.toLowerCase().includes(textSearch?.toLowerCase())
      );
      console.log(filterData, "filterData");
      setFilterValue(filterData);
    } else {
      setFilterValue(apiData?.products);
    }
  }, [textSearch, apiData?.products]);

  return (
    <div>
      <Head>
        <title>Admin Panel</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width "
        />
        <meta property="og:title" content="TUK ADMIN PANEL" />
      </Head>
      <Layout nav={true}>
        <Header title={"Products"} />
        <div className="max-w-[1124px] w-full container mx-auto">
          <div className="w-full flex justify-between mt-8 mb-[17.5px]">
            <div className="relative z-0 max-w-[356px] w-full group">
              <input
                value={textSearch}
                onChange={handleSearchQuery}
                onClick={() => {
                  setTextSearch("");
                }}
                className="text-sm   bg-white max-w-[356px] h-[56px] text-left z-0 relative px-4 py-4 w-full border rounded-md text-zinc-400 leading-[100%] border-zinc-200 outline-none"
                type="text"
                placeholder="Search Product"
              />
              <svg
                className="absolute right-4  top-5 cursor-pointer"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2V2Z"
                  stroke="#18181B"
                  strokeMiterlimit={10}
                />
                <path
                  d="M10.5718 10.5715L14.0002 14"
                  stroke="#18181B"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div></div>

            <select
              value={selectedCategory}
              className="text-sm text-black  bg-white max-w-[350px] h-[56px] text-left z-0 relative px-4 py-4 w-full border rounded-md  leading-[100%] border-zinc-200 outline-none"
              onChange={(e) => filterByCategory(e.target.value)}
            >
              <option value="">Search by Categories</option>
              {apiData?.products?.map((item, index) => (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>

            <select
              value={selectedBrand}
              className="text-sm   bg-white max-w-[350px] h-[56px] text-left z-0 relative px-4 py-4 w-full border rounded-md  leading-[100%] border-zinc-200 outline-none"
              onChange={(e) => filterByBrand(e.target.value)}
            >
              <option value="">Search by Brands</option>
              {apiData?.products?.map((item, index) => (
                <option key={index} value={item.brand}>
                  {item.brand}
                </option>
              ))}
            </select>
          </div>

          <IntegrationData filterValue={filterValue} />
        </div>
      </Layout>
    </div>
  );
};

export default Integration;
