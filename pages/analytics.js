import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Analytics from "../components/analyticsData";

import BlackSpinner from "../components/reusableUi/BlackSpinner";
import axios from "axios";
const analytics = () => {
  const [access, setAccess] = useState(false);
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
  return (
    <>
      <Head>
        <title>TUK Analytics</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width "
        />
        <meta property="og:title" content="TUK ADMIN PANEL" />
      </Head>
      {/* {loading ? ( */}
      {/* <div className="w-full mx-auto flex justify-center items-center h-screen">
                    <BlackSpinner width="60" height="60" />
                </div> */}
      {/* ) :   */}
      <Analytics apiData={apiData} setApiData={setApiData} />
    </>
  );
};

export default analytics;
