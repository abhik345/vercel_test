"use client";

import { fetchData } from "@/lib/api";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Journey =  () => {

  const headRef2 = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(headRef2.current, {
      scrollTrigger: {
        trigger: headRef2.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      x: -100,
      opacity: 1,
      duration: 2,
    });
  });

  const [journeyData, setJourneyData] = useState(null);

    const fetchJourneyData = async () => {
      const data = await fetchData('/pages/10?_fields=acf.about_section_options&acf_format=standard');
      if (data) {
        setJourneyData(data?.acf?.about_section_options);
      } else {
        console.log('Failed to fetch journey data');
      }
    };
  
    useEffect(() => {
      fetchJourneyData();
    }, []);

  return (
    <>
      <section className="about_journey pt-5 pb-20 mb-0 ">
          <div className="container mx-auto px-10">
            <h2
              ref={headRef2}
              className="main-heading text-[36px] font-bold mb-4 md:text-[48px] lg:text-[50px] -pl-5"
            >
              <span className="text-[#959595]">
                {journeyData?.title_section?.title}
              </span>
              <span className="text-white">
                {journeyData?.title_section?.sub_title}
              </span>
            </h2>
            <div className="about_new_section col-span-4 flex flex-wrap gap-5 justify-center w-[100%] relative ">
              <div className="box relative 2xl:h-40 2xl:w-72 xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40  rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/graduation-cap.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2008
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  Completed MBA (Marketing) from IBS, Hyderabad
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/office-building.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2009
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  Kickstarted Kreative Machinez, Kolkata, India
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/revenue.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2011
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium text-[16px] line-clamp-3  left-4 right-4  text-[#424242]">
                  ⁠Touched $100k revenue
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/office.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2013
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  Opened sales office in USA, Beverley Hills, CA
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/customers.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2021
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  ⁠Bagged our first USA Inc 5000 client
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/seo-search-symbol.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2020
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  ⁠Won “Best SEO Agency” award , San Jose
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/award.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2017
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242]">
                  ⁠Won Best Practices award as Engage 2017 for IPL 10 k+
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className="  top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/insurance-company.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2016
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  ⁠Opened sales office in Hongkong
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10">
                <div className=" top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/position.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl">
                    2022
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                  ⁠Moved to a new office in the heart of IT zone, Sector 5,
                  Saltlake
                </p>
              </div>

              <div className="box relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5 bg-white z-10 ">
                <div className=" top_date_img_part flex justify-around">
                  <img
                    className=" absolute left-4 w-14 h-14"
                    src="/award-symbol.png"
                  />
                  <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                    2023
                  </h3>
                </div>
                <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4 text-[#424242] ">
                  ⁠Won “Outstanding Leadership” award by Marketing 2.0, Dubai
                </p>
              </div>
              <div className="arow_part absolute z-10">
                <button className=" ">
                  <img src="/right-arrow.png" />
                  <p className="absolute 2xl:top-5 2xl:left-14 2xl:w-full xl:top-5 xl:left-14 xl:w-full lg:top-5 lg:left-14 lg:w-full   md:top-5 md:left-14 md:w-full             text-base  ">…and the journey continues!</p>
                </button>
              </div>
              <div className="background_arrow">
              <img
                  className=" absolute 2xl:-right-20 xl:right-[16px] lg:right-0 lg:left-0  2xl:-top-[9px] xl:-top-[-27px] lg:-top[30px] md:top-0 md:left-0  lg:bottom-[64px]  w-[80%] lg:w-[80%] md:w-[80%] mx-auto 2xl:left-[10px] sm:left-0 sm:right-0 sm:top-0"
                  src="/line_about.png"
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default Journey