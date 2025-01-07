"use client";
import { fetchData } from "@/lib/api";
import { useState, useEffect } from "react";

const Pricing = () => {
  const [getPriceSectionData, setPriceSectionData] = useState(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      const data = await fetchData(
        "/pages/889?_fields=acf.pricing&acf_format=standard"
      );
      if (data) {
        setPriceSectionData(data);
      } else {
        console.log("failed to fetch coaching benefits Data");
      }
    };
    fetchPricingData();
  }, []);
  return (
    <>
      <div className="flexible_part">
        <div className="2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto">
          <h3 className="text-black 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold py-10 text-start w-auto mx-auto flex justify-center gap-4 items-center">
            <div className="line_width bg-gray-800 h-[1.5px] w-24"></div>

            {getPriceSectionData?.acf?.pricing?.headings?.title_1}
            <span className="text-gray-400">
              {getPriceSectionData?.acf?.pricing?.headings?.title_2}
            </span>
            <div className="line_width bg-gray-800 h-[1.5px] w-24"></div>
          </h3>
        </div>
        <div className="marketing_part flex 2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto py-10 2xl:px-32 xl:px-28 lg:px-10 md:px-8 sm:px-0">
          {getPriceSectionData &&
            getPriceSectionData?.acf?.pricing?.price_cards?.map(
              (price, index) => (
                <div
                  className="marketing_box bg-white 2xl:px-6 2xl:py-16 xl:px-6 xl:py-16 lg:px-6 lg:py-8 md:px-4 md:py-10 sm:px-2 sm:py-8  w-[100%] shadow-[1px_1px_10px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl text-center mx-auto text-[#ff8b00]"
                  key={index}
                >
                  <div className="svg_icon flex justify-center pb-5">
                    <img src={price?.icons} alt="error image" />
                  </div>
                  <h5 className="font-semibold 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm sm:justify-center py-3 2xl:w-4/5 xl:w-4/5 lg:w-full md:w-full sm:w-full  flex text-center mx-auto">
                    {price?.title} (<span>&#x20b9;</span>
                    {price?.price})
                  </h5>
                  <p className="font-normal text-sm py-6">{price?.texts}</p>
                  <ul>
                    {price?.features?.map((feature, index) => (
                      <li key={index}>
                        <p className="flex justify-center gap-1  text-[13px] font-normal line-clamp-2  overflow-hidden text-center items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ff8b00 "
                              className="md_part"
                              d="m9.55 15.88l8.802-8.801q.146-.146.344-.156t.363.156t.166.357t-.165.356l-8.944 8.95q-.243.243-.566.243t-.566-.243l-4.05-4.05q-.146-.146-.152-.347t.158-.366t.357-.165t.357.165z"
                            />
                          </svg>
                          {feature?.texts}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="button_part mx-auto flex justify-center">
                    <button className="bg-yellow-600 text-sm hover:bg-yellow-700 text-white py-2 font-medium px-7 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                      {price?.button_section?.button_text}
                    </button>
                  </div>
                  <p
                    className="mt-5 underline decoration-solid text-[#ff8b00] font-medium text-sm  mx-auto"
                    href="#"
                  >
                    {price?.button_section?.offer_button}
                  </p>
                </div>
              )
            )}
        </div>
        <div className="button_part mx-auto flex justify-center">
          <button className="bg-yellow-600 text-sm hover:bg-yellow-700 text-white py-3 font-medium px-10 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            {getPriceSectionData?.acf?.pricing?.buttons?.button_text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
