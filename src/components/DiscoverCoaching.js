'use client'
import {fetchData} from "@/lib/api"
import { useState,useEffect } from "react";

const DiscoverCoaching = () => {

    const [getCoachingBenefitsData,setCoachingBenefitsData] = useState(null)

    useEffect(()=>{
        const fetchCoachingBenefitsData = async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.benefits&acf_format=standard"
            );
            if (data) {
                setCoachingBenefitsData(data)
            }else{
                console.log("failed to fetch coaching benefits Data")
            }
        }
        fetchCoachingBenefitsData()
    },[])
  return (
    <>
      <div className="discover_part bg-[#3c3c3c] py-14">
        <div className="containe mx-auto">
          <div className="headind_part text-center 2xl:px-56 xl:px-56 lg:px-56 md:px-28 sm:px-24 kx:px-20 km:px-10 mb-4 mx-auto">
            <p className="text-white py-2 font-light text-base">
              {getCoachingBenefitsData?.acf?.benefits?.title}
            </p>
            <h2 className="text-white 2xl:text-4xl xl:text-lg lg:text-lg md:text-base sm:text-base kx:text-xs km:text-xs font-medium  sm:hidden 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2  ">
              {getCoachingBenefitsData?.acf?.benefits?.headings?.title_1}
              {getCoachingBenefitsData?.acf?.benefits?.headings?.title_2}
            </h2>
            <p className="text-white line-clamp-3 py-3 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 kx:px-0 km:px-0 font-light text-base">
              {getCoachingBenefitsData?.acf?.benefits?.texts}
            </p>
          </div>
          <div className="discover_images_part my-7 2xl:container xl:container lg:container-screen md:container-screen sm:container-screen kx:container-screen km:container-screen justify-evenly mx-auto flex flex-wrap 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-8 sm:gap-8 kx:sm:gap-10 km:gap-7 kx:gap-7">
            {getCoachingBenefitsData?.acf?.benefits?.images?.map(
              (image, index) => (
                <div
                  key={index}
                  className="img_box_discover rounded-md overflow-hidden bg-white 2xl:w-[270px] xl:w-[240px] lg:w-[200px] md:w-[200px] sm:w-[200px] kx:w-[250px] km:w-[250px] h-auto relative"
                >
                  <img
                    className=" object-cover w-full h-80"
                    src={image?.image}
                  />
                  {/* <p className="text-black text-sm font-medium py-3  text-center ">Healdth & Wellness</p> */}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCoaching;
