"use client";
import { fetchData } from "@/lib/api";
import { useState, useEffect } from "react";
const HowtoWork = () => {
  const [howitworkData, sethowitworkData] = useState(null);

  useEffect(() => {
    const fetchWorkData = async () => {
      const data = await fetchData(
        "/pages/889?_fields=acf.how_it_works&acf_format=standard"
      );
      if (data) {
        sethowitworkData(data);
      } else {
        console.log("failed to fetch how it work Data..");
      }
    };
    fetchWorkData();
  }, []);

  return (
    <>
      <div className="how_to_work py-10">
        <div className="2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto 2xl:px-10 xl:px-10 lg:px-8 md:px-6 sm:px-5">
          <div className=" container top_text_part flex justify-around items-center mb-6 mx-auto">
            <div className="work_heading 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[60%] sm:w-[60%] ">
              <h2 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold text-black flex justify-start items-center gap-5 ">
                <div className=" line_width  bg-black h-[1.5px] w-24"></div>
                {howitworkData?.acf?.how_it_works?.heading?.heading_1}
                <span className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-gray-400 font-bold ">
                  {howitworkData?.acf?.how_it_works?.heading?.heading_2}
                </span>
              </h2>
              <p className="font-normal text-gray-400 text-base my-3 line-clamp-3 2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-[80%]">
                {howitworkData?.acf?.how_it_works?.texts}
              </p>
            </div>
            <div className="button_heading 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[40%] flex justify-end">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-[12px] py-3 font-medium px-6 rounded-full  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                {howitworkData?.acf?.how_it_works?.button_section?.button_texts}
              </button>
            </div>
          </div>
          <div className="promote_part flex flex-wrap  mx-auto justify-center 2xl:container xl:container lg:container md:w-[100%] sm:w-[100%]">
            {howitworkData && howitworkData?.acf?.how_it_works?.cards?.map((data,index) => (
            
                <div
                  className="box_promote flex justify-between items-center gap-6 w-[45%] 2xl:py-4 2xl:px-1 xl:py-4 xl:px-1 lg:py-4 lg:px-1 md:py-4 md:px-1 md:mx-2 sm:py-3 sm:px-1 border-b-[1.5px] border-[#8d8c8c]  "
                  key={data?.id || index}
                >
                  <div className="icon bg-yellow-600 2xl:w-[150px] 2xl:h-[80px] xl:w-[190px] xl:h-[85px] lg:w-[195px] lg:h-[68px] md:w-[284px] md:h-[65px] sm:w-[284px] sm:h-[55px] p-2 rounded-full flex justify-center items-center">
                    <img src={data?.icon} alt="error" />
                  </div>
                  <div className="text_promote">
                    <h4 className="font-semibold text-[#1d1d1d] 2xl:text-xl xl:text-xl lg:text-xl md:text-[15px] sm:text-[15px] line-clamp-2 my-2">
                      {data?.title}
                    </h4>
                    <p className="text-sm font-medium text-gray-400 w-auto line-clamp-2 my-2 text-left">
                      {data?.text}
                    </p>
                  </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowtoWork;
