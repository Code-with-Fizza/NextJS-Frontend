import React, { useEffect, useState } from "react";

const Index = ({  cardData1,  apiData }) => {
  return (
    <>
      {cardData1?.map((item, index) => (
        <div key={index * Math.random() * 1000}>
          <div className=" bg-white border border-[#E4E4E7] rounded-xl  ">
            <div className="p-5">
              <div className="flex  w-full  items-center">
                <div className="rounded-md bg-zinc-900 p-2 ">{item.svg}</div>
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <p className="text-zinc-900  text-black text-[28px] pl-[20px]  leading-[100%] font-extrabold manrope_font -tracking-[0.03em]">
                      {item.value}
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-600 text-[12px] leading-[100%] pl-[20px]  font-normal  manrope_font ">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default Index;
