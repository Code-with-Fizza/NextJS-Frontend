import React, { useEffect, useState } from "react";
import NoDataToShow from "../reusableUi/noDataToShow";
import BlackSpinner from "../reusableUi/BlackSpinner";
import axios from "axios";
const Index = ({ isLoading, filterValue }) => {
  const [modalObj, setModalObj] = useState({});
  const [apiData, setApiData] = useState();
  console.log(apiData, "apiData");

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
    <React.Fragment>
      <div className="w-full pb-[56px] ">
        <div className="overflow-x-auto py-2 px-[8px] border border-zinc-200 rounded-xl bg-white lg:overflow-x-clip">
          <table className="table-auto border-collapse w-full  ">
            <thead>
              <tr className="flex jutify-between  h-[63px] items-center">
                <th className=" w-full  text-black max-w-[224px]  text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                  Title
                </th>
                <th className="w-full text-black   max-w-[224px]  text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                  Thumbnail
                </th>
                <th className=" w-full text-black  max-w-[224px] text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                  Description
                </th>
                <th className=" w-full text-black  max-w-[224px]  text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                  Category
                </th>
                <th className=" w-full  text-black  max-w-[136px]  text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                  Price
                </th>
                <th className=" w-full  text-black max-w-[100px]  text-end font-semibold text-base leading-[150%] py-4 px-[16px]">
                  Brand
                </th>
                <th className=" w-full  text-black max-w-[224px]  text-end font-semibold text-base leading-[150%] py-4 px-[16px]">
                  Stock
                </th>
              </tr>
            </thead>
            {/* DATA */}
            <tbody className="flex flex-col max-w-[1124px] ">
              {isLoading ? (
                <div className="text-center my-4">
                  <BlackSpinner width={50} height={50} />
                </div>
              ) : (
                <>
                  {filterValue?.length ? (
                    filterValue?.map((item, index) => {
                      return (
                        <tr
                          key={index * Math.random() * 1000}
                          className="flex jutify-between   border-black border-opacity-[0.06] border-t "
                        >
                          <td className="w-full max-w-[224px] text-black  text-start flex items-center font-normal text-sm leading-[150%] px-[16px]">
                            {item?.title ? item?.title : "N/A"}
                          </td>
                          <td
                            className={` text-start font-normal text-sm leading-[150%] px-[14px]`}
                          >
                            <img
                              src={item?.thumbnail}
                              className="w-[750px] h-[100px] py-2"
                            />
                          </td>
                          <td className="w-full max-w-[250px]   text-start font-normal text-sm leading-[150%] px-[16px] overflow-hidden">
                            {item?.description}
                          </td>

                          <td className="w-full max-w-[250px] text-black  text-start font-normal text-sm leading-[150%] px-[16px]">
                            {item?.category ? item?.category : "N/A"}
                          </td>
                          <td className="w-full max-w-[150px] text-black  text-start font-normal text-sm leading-[150%] px-[16px]">
                            {item?.price ? item?.price : "N/A"}
                          </td>
                          <td className="w-full max-w-[152px] text-black    text-start font-normal text-sm leading-[150%] px-[16px]">
                            {item?.brand ? item?.brand : "N/A"}
                          </td>
                          <td className="w-full max-w-[108px] text-black   text-start font-normal text-sm leading-[150%] px-[16px]">
                            {item?.stock ? item?.stock : "N/A"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div className="text-center my-4">
                      <NoDataToShow />
                    </div>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
