'use client'
import { useState,useEffect } from "react"
import {fetchData} from "@/lib/api"

const UnlockPower = () => {

    const [getCoachingOpportunitiesData,setCoachingOpportunitiesData] = useState(null)

    useEffect(()=>{
        const fetchCoachingOppertunity = async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.unlock_coaching_opportunities&acf_format=standard"
            );
            if (data) {
                setCoachingOpportunitiesData(data)
            }else{
                console.log("failed to fetch coaching oppertunity")
            }
        }
        fetchCoachingOppertunity()
    },[])

  return (
    <>
     <div className="unlock_power_part py-14">
          <div className="2xl:container xl:container lg:container-screen md:container-screen sm:container-screen kx:container-screen km:container-screen mx-auto">
            <div className="unlock_heading_part text-center 2xl:px-56 xl:px-40 lg:px-32 md:px-10 sm:px-10 kx:px-8 km:px-8 mb-4 2xl:container xl:container lg:container md:container sm:container kx:container km:container-scren mx-auto">
              <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl kx:text-3xl km:text-2xl text-gray-900 font-semibold 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-2 kx:pb-2 km:pb-2">
                {
                  getCoachingOpportunitiesData?.acf
                    ?.unlock_coaching_opportunities?.headings?.title_1
                }
              </h2>
              <h3 className="2xl:text-4xl xl:text-lg lg:text-lg md:text-base sm:text-base kx:text-xs km:text-xs font-medium text-gray-400  sm:hidden 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2">
                {
                  getCoachingOpportunitiesData?.acf
                    ?.unlock_coaching_opportunities?.headings?.title_2
                }
              </h3>
              <p className="text-base font-normal text-gray-700 py-6 2xl:px-24 xl:px-24 lg:px-20 md:px-14 sm:px-10 kx:px-1 km:px-1 line-clamp-2 ">
                {
                  getCoachingOpportunitiesData?.acf
                    ?.unlock_coaching_opportunities?.texts
                }
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {getCoachingOpportunitiesData &&
                getCoachingOpportunitiesData?.acf?.unlock_coaching_opportunities?.opportunities?.map(
                  (opportunity, index) => (
                    <div
                      key={index}
                      className="unlock_box text-center 2xl:w-[388px] xl:w-[388px] lg:w-[350px] md:w-[350px] sm:w-[290px] kx:w-[350px] km:w-[350px] h-auto p-5 "
                    >
                      <div className="icon_box bg-yellow-200 mx-auto my-4 w-16 h-16 flex justify-center items-center rounded-md">
                        <img
                          className="bg-yellow-600 w-12 h-12 p-2 m-2 rounded-md"
                          src={opportunity?.icon}
                        />
                      </div>
                      <div className="unlock_box_text">
                        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 my-2">
                          {opportunity?.title}
                        </h3>
                        <p className="text-sm font-normal py-2 line-clamp-3 text-gray-500">
                          {opportunity?.texts}
                        </p>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
    </>
  )
}

export default UnlockPower