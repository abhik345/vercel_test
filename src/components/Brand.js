
"use client"
import { fetchData } from '@/lib/api';
import { useState, useEffect } from 'react';

import { ChevronRight } from "lucide-react";

const Brands = () => {
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const fetchBrandData = async () => {
      const data = await fetchData('/pages/10?_fields=acf.our_brand_options&acf_format=standard')
      if (data) {
        setBrandData(data.acf?.our_brand_options)
      } else {
        console.log("failed to fetch data form api")
      }
    };
    fetchBrandData()
  }, [])

  return (
    <>
      <div className="bg-black text-white py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 text-white">
              <div className="text-left">
                <h3 className="cite-with-line text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium">
                  {brandData?.heading}
                </h3>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  <span className="text-[#959595]">
                    {brandData?.title_section?.title}{" "}
                  </span>
                  <span>{brandData?.title_section?.sub_title}</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-sm lg:text-xl xl:text-[1.15rem] md:max-w-2xl">
                  {brandData?.text}
                </p>
              </div>
            </div>
            {brandData?.brand_options &&
              brandData?.brand_options.map((item, index) => (
                <a
                  href={item?.brand_url}
                  target="_blank"
                  className="bg-inherit flex flex-col items-center justify-between border border-opacity-20 border-white rounded-xl  hover:bg-gray-800 transition duration-300"
                  key={index}
                >
                  <div className="flip-card w-full ">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className=" img_div_add h-56 w-56 flex mx-auto items-center md:h-32 md:w-32 lg:h-48 lg:w-auto">
                          <img
                            src={item.brand_logo}
                            alt={item.brand_name}
                            className="w-auto h-auto object-cover"
                          />
                        </div>
                        <h2 className="text-lg text-center sm:text-xl md:text-4xl lg:text-[1.7rem] font- ">
                          {item.brand_name}
                        </h2>
                      </div>
                      <div className="flip-card-back">
                        <div className="flex justify-center flex-wrap px-2.5 w-full">
                          <p className="line-clamp-9">{item.brand_text}</p>
                          <button className="bg-white text-black rounded-full hover:bg-gray-200 p-3 chevron-button mt-4">
                            <ChevronRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
