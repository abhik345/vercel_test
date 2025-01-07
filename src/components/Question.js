"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";
import AccordionItem from "./AccordionItem";

const Question = () => {

    const [questionData,setquestionData]= useState(null)
    useEffect(()=>{
        const fetchQuestionData = async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.contact_options&acf_format=standard"
            )
            if (data) {
                setquestionData(data)
            }else{
                console.log("faialed to fetch question data..")
            }
        }
        fetchQuestionData()
    },[])
  return (
    <>
     <div className='question_part py-20 bg-[url("/qustion_banner.jpg")]'>
          <div className="2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto 2xl:flex xl:flex lg:flex md:block md:justify-center sm:block sm:justify-center justify-center items-center gap-10 2xl:px-20 xl:px-20 lg:px-16 md:px-14 sm:px-10">
            <div className="qustion_text 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full">
              <div className="heading_qustion">
                <h2 className="flex justify-start items-center gap-3 font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl ">
                  <div className="w-16 h-[1.5px] bg-gray-600"></div>
                  {questionData?.acf?.contact_options?.text_section?.title_1}
                </h2>
                <h3 className=" text-gray-400 font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl">
                  {questionData?.acf?.contact_options?.text_section?.title_2}
                </h3>
              </div>
              <p className="py-5 text-gray-600 text-justify">
                {questionData?.acf?.contact_options?.text_section?.texts}{" "}
              </p>
              <div className="button_part mx-auto flex justify-start">
                <button className="bg-yellow-600 text-sm hover:bg-yellow-700 text-white py-3 font-medium px-10 rounded-full mt-4  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  {
                    questionData?.acf?.contact_options?.text_section
                      ?.button_text
                  }
                </button>
              </div>
            </div>
            <div className="accordion_part 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full">
              {questionData &&
                questionData?.acf?.contact_options?.accordions?.map(
                  (item, index) => (
                    <AccordionItem
                      key={index}
                      header={item?.title}
                      content={item?.texts}
                    />
                  )
                )}
            </div>
          </div>
        </div>
    </>
  )
}

export default Question