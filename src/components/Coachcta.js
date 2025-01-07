'use client'
import { useState,useEffect } from "react"
import {fetchData} from "@/lib/api"

const Coachcta = () => {

    const [getPotentialCoachData,setPotentialCoachData] = useState(null)
    useEffect(()=>{
        const fetchCoachPotential = async () => {
            const data = await fetchData(
                "/pages/889?_fields=acf.potential_as_a_coach&acf_format=standard"
            )
        if (data) {
            setPotentialCoachData(data)
        }else{
            console.log("failed to fetch Coach cta data")
        }
        }
        fetchCoachPotential()
    },[])
  return (
    <>
     <div className="coach_cta w-full relative bg-[url('/background_new.jpg')] bg-no-repeat bg-center overflow-hidden">
          <div className="container mx-auto 2xl:py-20 xl:py-20 lg:py-20 md:py-20 sm:py-14 kx:py-12 km:py-10">
            <div className="flex items-center justify-center h-48">
              <div className="cta_text text-center">
                <h2 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl kx:text-xl km:text-xl py-3 text-white w-[80%] mx-auto">
                  {
                    getPotentialCoachData?.acf?.potential_as_a_coach
                      ?.text_section?.title_1
                  }
                  {
                    getPotentialCoachData?.acf?.potential_as_a_coach
                      ?.text_section?.title_2
                  }
                </h2>
                <p className="text-white font-normal text-base sm:text-sm kx:text-sm km:text-sm 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[70%] sm:w-2/3 kx:w-3/4 km:w-3/4 mx-auto py-4">
                  {
                    getPotentialCoachData?.acf?.potential_as_a_coach
                      ?.text_section?.texts
                  }
                </p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 font-medium px-6 rounded-full mt-4 text-base sm:text-sm kx:text-sm km:text-sm hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  {
                    getPotentialCoachData?.acf?.potential_as_a_coach
                      ?.text_section?.button_section?.button_text
                  }
                </button>
              </div>
            </div>
            <div className="absolute 2xl:right-10 xl:right-10 lg:right-10 md:right-2 sm:right41 kx:-right-3 km:-right-3  bottom-0 ">
              <img
                className="w-auto 2xl:h-80 xl:h-80 lg:h-80 md:h-64 sm:h-56 kx:h-44 km:h-40 object-cover"
                src="/right_man.png"
              />
            </div>
            <div className="absolute 2xl:left-10 xl:left-10 lg:left-10 md:left-2 sm:-left-40 kx:-left-3 km:-left-3  bottom-0">
              <img
                className=" w-auto 2xl:h-80 xl:h-80 lg:h-80 md:h-64 sm:h-56 kx:h-44 km:h-40  object-cover"
                src="/left_man.png"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default Coachcta