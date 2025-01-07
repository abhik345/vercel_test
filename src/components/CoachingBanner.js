'use client'
import { useState,useEffect } from "react"
import {fetchData} from "@/lib/api"
import { motion } from "framer-motion";
import {slideAnimation} from "@/components/slideAnimation"


export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0.01 } } } 
};

export const Typewriter = ({ text, ...rest }) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text?.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
const CoachingBanner = () => {

    const [bannerData, setBannerData] = useState(null);

    useEffect(()=>{
        const fetchBannerData = async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.banner_options&acf_format=standard"
            );
            if(data){
                setBannerData(data)
            }else{
                console.log("failed to fetch coaching banner")
            }
        }
        fetchBannerData()
    },[])

    const combinedTitle =
    `${bannerData?.acf?.banner_options?.title_1 || ""} ${bannerData?.acf?.banner_options?.title_2 || ""}`.trim();
    
  return (
    <>
     <div className="inner_banner relative">
        <img
          className="w-screen h-auto object-cover"
          src={bannerData?.acf?.banner_options?.banner__image}
          alt="Banner"
        />
        <div className="absolute top-0 bottom-0 w-screen h-auto"></div>
        <div className="banner_top_text container px-10">
          <motion.div
            className="heading_top_banner absolute 2xl:top-80 xl:top-64 lg:top-72 md:top-48 sm:top-40 kx:top-40 km:top-40 right-0 2xl:left-40 xl:left-40 lg:left-36 md:left-8 sm:left-12 kx:left-10 km:left-8 mx-auto"
            {...slideAnimation("left")}
          >
            <h2 className="text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl sm:text-lg kx:text-base km:text-base font-bold text-white relative 2xl:!leading-[50px] xl:!leading-[50px] lg:!leading-[50px] md:!leading-[50px] sm:!leading-[30px] kx:!leading-[20px] km:!leading-[20px] 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-28 kx:left-0 km:left-0 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[70%] sm:w-[70%] kx:w-[80%] km:w-[80%]">
              <div className="left_line absolute top-6 -left-28 bg-white h-[1.5px] w-24"></div>
              <Typewriter text={combinedTitle}  />
            </h2>
            <div className="text-white 2xl:text-lg xl:text-lg lg:text-lg sm:text-base kx:text-sm km:text-sm 2xl:pt-4 xl:pt-4 lg:pt-4 md:pt-4 sm:pt-3 kx:pt-3 km:pt-3 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-auto kx:w-auto km:w-auto 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2">
              <Typewriter text={bannerData?.acf?.banner_options?.banner_texts}/>
            </div>
          </motion.div>
          <motion.div
            {...slideAnimation("right")}
            className="heading_button text-right 2xl:right-6 xl:right-6 lg:right-6 md:right-6 sm:right-6 kx:right-4 km:right-4 absolute 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:auto kx:w-auto km:w-auto  2xl:bottom-14 xl:bottom-14 lg:bottom-14 md:bottom-12 sm:bottom-10 kx:bottom-2 km:bottom-2"
          >
            <h3 className="text-white 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-base kx:text-xs km:text-xs font-medium  sm:hidden 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-2 km:line-clamp-2">
              <Typewriter text={bannerData?.acf?.banner_options?.banner_button?.texts}/>
            </h3>
            <button className="bg-[#FF8B00] hover:bg-[#ff8c00da] text-white py-3 font-medium px-6 rounded-full mt-4 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              {bannerData?.acf?.banner_options?.banner_button?.button_text}
            </button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default CoachingBanner