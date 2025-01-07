"use client";
import { fetchData } from "@/lib/api";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";

const InfluentialPart = () => {

    const [coachesData,setcoachesData] = useState(null)

    useEffect(()=>{
    const fetchCoachesData= async()=>{
        const data = await fetchData(
            "/pages/889?_fields=acf.coach&acf_format=standard"
        );
        if (data) {
            setcoachesData(data)
        }else{
            console.log("failed to fetch potential coaches data")
        }
    }
    fetchCoachesData()
    },[])
  return (
    <>
     <div className="influential_part w-full overflow-hidden py-16 bg-[#3c3c3c]">
          <div className="2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto ">
            <div className=" text-center py-5">
              <h2 className="text-white 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold py-2 text-center flex justify-center items-center gap-5 w-[100%] mx-auto">
                <div className="  bg-white h-[1.5px] w-24"></div>
                {coachesData?.acf?.coach?.heading.substring(0, 37)}
                <div className=" bg-white h-[1.5px] w-24"></div>
              </h2>
              <h3 className="text-white 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl font-semibold py-2 text-center">
                {coachesData?.acf?.coach?.heading.substring(37)}{" "}
                <span className="text-gray-400">
                  {coachesData?.acf?.coach?.title}
                </span>
              </h3>
            </div>
            <div className="swiper_testimonial my-4 h-60 2xl:w-[70%] xl:w-[70%] lg:w-[80%] md:w-[90%] sm:w-[90%] mx-auto rounded-2xl bg-white">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {[...Array(5)].map((_, testmonial) => (
                  <SwiperSlide key={testmonial}>
                    <div className="testmonial_box flex items-center justify-between p-10  mx-auto gap-10  ">
                      <div className="icon_photo overflow-hidden flex justify-center p-5 ">
                        <img
                          className="w-[300px] h-[120px] rounded-full object-cover"
                          src={coachesData?.acf?.coach?.coach_image}
                        />
                      </div>
                      <div className="testmonial_">
                        <p className="text-base font-medium text-gray-700 line-clamp-4 ">
                          <svg
                            className=" inline-flex rotate-180 -ml-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#979191"
                              d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
                            />
                          </svg>
                          {coachesData?.acf?.coach?.text_section?.text}
                          <svg
                            className=" inline-flex "
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#979191"
                              d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
                            />
                          </svg>
                        </p>
                        <h6 className="flex items-center justify-start gap-3 font-medium text-lg mt-2">
                          <div className=" bg-gray-900 h-[1px] w-10"></div>
                          {coachesData?.acf?.coach?.text_section?.name}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="button_part mx-auto flex justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 font-medium px-6 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                {coachesData?.acf?.coach?.button_section.button_text}
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default InfluentialPart