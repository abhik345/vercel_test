"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";
const InspirePart = () => {

    const [getStartedData,setStartedData] = useState(null)

    useEffect(()=>{
      const fetchInspireData = async()=>{
        const data = await fetchData(
            "/pages/889?_fields=acf.get_started_options&acf_format=standard"
        );
        if (data) {
            setStartedData(data)
        }else{
            console.log("failed to fetch Inspire Data")
        }
      }
      fetchInspireData()
    },[])
  return (
    <>
      <div
          className="inspire_part rounded-[40px] overflow-hidden object-fit top-5 relative flex 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] sm:w-[90%] mx-auto bg-center bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${getStartedData?.acf?.get_started_options?.bg_image})`,
          }}
        >
          <div className="2xl:container xl:container lg:w-full md:w-screen sm:w-screen mx-auto bg-[#000000a9]">
            <div className="box_insprire py-8 w-11/12 m-auto text-center ">
              <p className="2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-sm font-medium text-white text-center py-4 w-[80%] mx-auto">
                {getStartedData?.acf?.get_started_options?.texts}
              </p>
              <h2 className="flex justify-center gap-5 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-bold items-center text-white py-3">
                <div className="line_width w-20 h-[1.5px] bg-white"></div>
                {getStartedData?.acf?.get_started_options?.title}
                <div className="line_width w-20 h-[1.5px] bg-white"></div>
              </h2>
              <div className="button_part mx-auto flex justify-center">
                <button className="bg-yellow-600 text-sm hover:bg-yellow-700 text-white py-3 font-medium px-10 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  {getStartedData?.acf?.get_started_options?.button_text}
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default InspirePart