"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";

const WhatWillDoPart = () => {
    const [whaticandoData,setwhaticandoData] = useState(null)
    useEffect(() => {
        const fetchWhatDo = async () => {
          const data = await fetchData(
            "/pages/889?_fields=acf.what_i_do_options&acf_format=standard"
          );
          if (data) {
            setwhaticandoData(data);
          } else {
            console.log("failed to fetch Trending Data..");
          }
        };
        fetchWhatDo();
      }, []);
  return (
    <>
     <div className="wile_do_part bg-[#fff] 2xl:py-24 xl:py-24 lg:py-24 md:py-24 sm:py-20 kx:py-0 km:py-0">
          <div className="container wile_padding md:w-[100%] sm:w-[100vw] mx-auto px-14 2xl:px-14 xl:px-10 lg:px-4 md:px-2 sm:px-2 kx:px-0 km:px-0">
            <div className="2xl:flex xl:flex lg:flex md:block sm:block items-center  justify-center gap-20 my-5">
              <div className=" img 2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/3 sm:w-3/4  sm:m-auto flex justify-center ">
                <div className="img_inner_relative relative">
                  <div className=" absolute w-[450px] h-30 bg-yellow-600 -top-7 bottom-6 -right-8 -z-0 rounded-xl "></div>
                  <img
                    className=" relative  w-[450px] h-30  object-cover rounded-xl z-10 flex "
                    src={
                      whaticandoData?.acf?.what_i_do_options?.image_section
                        ?.image
                    }
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0  z-20 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23"
                      />
                      <path
                        fill="#9fa72a"
                        d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-4/5 sm:w-4/5 sm:m-auto px-4 overflow-hidden">
                <h3 className="text-gray-800 text-4xl font-semibold py-2 text-center w-[100%] flex items-center gap-4 mx-auto mb-6">
                  <div className="line_width bg-gray-800 h-[1.5px] w-24"></div>
                  {whaticandoData?.acf?.what_i_do_options?.text_section?.title?.substring(
                    0,
                    12
                  )}{" "}
                  <span className="text-gray-400">
                    {whaticandoData?.acf?.what_i_do_options?.text_section?.title?.substring(
                      12
                    )}
                  </span>
                </h3>
                {whaticandoData?.acf?.what_i_do_options?.text_section?.texts?.map(
                    (data,index) => (
                      <ul key={data?.id || index}>
                        <li
                          className="flex justify-start items-start gap-3 mb-2"
                            
                        >
                          <img className="w-6 h-6" src="/done.png" />
                          <p className="font-light text-base  text-gray-700 ">
                            {data?.text}
                          </p>
                        </li>
                      </ul>
                    )
                  )}
              </div>
            </div>
            <div className="background-box my-10 2xl:flex xl:flex lg:flex md:flex sm:flex kx:flex km:flex flex-wrap kx:justify-evenly km:justify-evenly gap-5 w-full 2xl:h-auto xl:h-auto lg:h-auto md:h-auto sm:h-auto kx:h-[450px] km:h-[450px] md:justify-center md:gap-10 md:flex-wrap  sm:flex-wrap kx:flex-wrap km:flex-wrap sm:justify-center sm:gap-10  justify-between">
              {whaticandoData?.acf?.what_i_do_options?.card_section?.map(
                (items, index) => (
                  
                    <div
                      className="main_box relative 2xl:w-96 2xl:h-48 lg:h-48 md:h-48 sm:h-48 kx:h-auto km:h-auto xl:h-48 xl:w-80 lg:w-72 md:w-52 sm:w-full kx:w-full km:w-full flex justify-center cursor-pointer hover:animate-jump-out"
                      key={index}
                    >
                      <div className=" absolute bg-yellow-600 bottom-5 -right-4 2xl:w-96 2xl:h-48 lg:h-48 md:h-48 sm:h-48 kx:h-48 km:h-48 xl:h-48 xl:w-80 lg:w-72 md:w-52 sm:w-72 z-0 rounded-xl"></div>
                      <div className=" absolute box  bg-white border-[1px] border-yellow-600 2xl:py-6 2xl:px-5 xl:py-6 xl:px-5 lg:py-4 lg:px-4 md:py-4 md:px-4 sm:py-3 sm:px-2 rounded-xl ">
                        <div className="coaching_img_box 2xl:h-36 xl:h-36 lg:h-36 md:h-36 sm:h-36 kx:w-auto km:h-auto justify-center 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0 kx:p-4 km:p-3 ">
                          <img
                            src={items?.icon}
                            alt="error"
                            className="h-10 w-10 m-auto"
                          />
                          <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-sm font-medium text-gray-900 text-center line-clamp-2 my-2 ">
                            {items?.title}
                          </h3>
                          <p className="font-normal text-sm text-gray-600 text-center line-clamp-2 my-1">
                            {items?.texts}
                          </p>
                        </div>
                      </div>
                    </div>
                  
                )
              )}
            </div>
            <div className="button_part mx-auto flex justify-center 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-0 kx:pb-8 km:pb-8">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 font-medium px-6 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                {
                  whaticandoData?.acf?.what_i_do_options?.button_section
                    ?.button_text
                }
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default WhatWillDoPart