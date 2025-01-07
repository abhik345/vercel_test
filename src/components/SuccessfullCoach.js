"use client"
import { useState,useEffect } from "react"
import {fetchData} from "@/lib/api"
import {motion} from "framer-motion";
import CategorySelector from "./CategorySelector";
import { slideAnimation } from "./slideAnimation";


const SuccessfullCoach = () => {

    const [coachingOptions,setcoachingOptions] = useState(null)

    const [coachTabsData,setcoachTabsData] = useState(null)

    useEffect(()=>{
        const fetchCoachData= async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.coach_options&acf_format=standard"
            );
            if (data) {
                setcoachingOptions(data)
            }else{
                console.log("failed to fetch successfull coach options data")
            }
        }
        fetchCoachData()
    },[])

    useEffect(()=>{
      const fetchCoachTabData = async()=>{
        const data = await fetchData(
          "/coach-tabs"
        );
        if (data) {
          setcoachTabsData(data)
        }else{
          console.log("failed to fetch coach tab data")
        }
      }
      fetchCoachTabData()
    },[])
   
  return (
    <>
      <div className="coach_part py-6 ">
          <motion.div {...slideAnimation("top")} className=" text-center py-5">
            <h2 className="text-black 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold py-2 text-center">
              {coachingOptions?.acf?.coach_options?.heading}
            </h2>
            <h3 className="text-black 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold py-2 text-center flex items-center justify-center gap-5 w-[100%] mx-auto">
              <div className="line_width  bg-black h-[1.5px] w-24"></div>
              {coachingOptions?.acf?.coach_options?.title_section?.title_1}
              <span className="text-gray-400">
                {coachingOptions?.acf?.coach_options?.title_section?.title_2}
              </span>
              <div className="line_width bg-black h-[1.5px] w-24"></div>
            </h3>
            <p className="text-center font-normal text-base text-gray-400 2xl:w-[40%] xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[70%]  mx-auto line-clamp-2 my-3">
              {coachingOptions?.acf?.coach_options?.text}
            </p>
          </motion.div>
          <CategorySelector tabsData={coachTabsData?.acf?.tabs}/>
        </div>
    </>
  )
}

export default SuccessfullCoach