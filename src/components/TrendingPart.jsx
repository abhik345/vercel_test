"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";
// import Image from "next/image";

const TrendingPart = () => {
  const [getProblemSolutionData, setProblemSolutionData] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      const data = await fetchData(
        "/pages/889?_fields=acf.problem_solution_framework&acf_format=standard"
      );
      if (data) {
        setProblemSolutionData(data);
      } else {
        console.log("failed to fetch Trending Data..");
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      <div className="Tranding_part bg-[#3c3c3c] py-14">
        <div className="2xl:container xl:container lg:container md:container-screen sm:container-screen kx:container-screen km:container-screen mx-auto 2xl:px-28 xl:px-24 lg:px-8 md:px-14 sm:px-8 kx:px-8 km:px-8 ">
          <div className="flex items-end 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-12 kx:gap-10 km:gap-10 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap kx:flex-wrap km:flex-wrap ">
            <div className="box 2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:w-full sm:w-full kx:w-full km:w-full">
              <div className="text-left py-6">
                <h2 className="text-4xl text-white py-1">
                  {
                    getProblemSolutionData?.acf?.problem_solution_framework
                      ?.headings?.title_1
                  }
                  {
                    getProblemSolutionData?.acf?.problem_solution_framework
                      ?.headings?.title_2
                  }
                </h2>
                <p className="text-white py-3 font-normal 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-sm kx:text-sm km:text-sm">
                  {
                    getProblemSolutionData?.acf?.problem_solution_framework
                      ?.texts
                  }
                </p>
              </div>
              <div className="problem_box 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-12 kx:gap-12 km:gap-12 flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap kx:flex-wrap km:flex-wrap">
                {getProblemSolutionData &&
                  getProblemSolutionData?.acf?.problem_solution_framework?.problem_solution?.map(
                    (problem, index) => (
                      <div key={index} className="cross_box relative">
                        <h5 className=" absolute -top-4 left-8 font-semibold text-white text-2xl bg-[#3c3c3c] px-2 ">
                          {problem?.problem_text}
                        </h5>
                        <p className=" overflow-hidden h-44 2xl:text-base xl:text-[14px] lg:text-sm md:text-sm sm:text-sm kx:text-sm km:text-sm line-clamp-6 border-[1px] border-white px-5 py-8 rounded-md text-start text-white ">
                          {problem?.solution_texts}
                        </p>
                        <div className="absolute -bottom-3 right-6 bg-[#3c3c3c] px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#fff"
                              d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
            <div className="scroll_part 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-full sm:w-full kx:w-full km:w-full">
              <div className="flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap kx:flex-wrap km:flex-wrap items-end gap-3 relative ">
                {/* <Image
                    src={getProblemSolutionData?.acf?.problem_solution_framework?.images?.image_1}
                    className="w-full h-48 object-cover rounded-lg"
                    alt="Trending Image 1"
                    width={500}
                    height={300}
                  />
             
                
                  <Image
                    src={getProblemSolutionData?.acf?.problem_solution_framework?.images?.image_2}
                    className="w-full 2xl:h-96 xl:h-96 lg:h-96 md:h-96 sm:h-96 kx:h-48 km:h-48 object-cover rounded-lg"
                    alt="Trending Image 2"
                    width={500}
                    height={300}
                  /> */}

                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={
                    getProblemSolutionData?.acf?.problem_solution_framework
                      ?.images?.image_1
                  }
                />
                <img
                  className="w-full 2xl:h-96 xl:h-96 lg:h-96 md:h-96 sm:h-96 kx:h-48 km:h-48 object-cover rounded-lg"
                  src={
                    getProblemSolutionData?.acf?.problem_solution_framework
                      ?.images?.image_2
                  }
                />

                <div className="rounded_text_new absolute left-40 bottom-16">
                  <div className="rounded_text  bg-white p-0 flex rounded-full w-48 h-48 items-center justify-center relative">
                    <svg
                      className="absolute w-[220px] h-[220px] animate-rotate"
                      viewBox="0 0 300 300"
                    >
                      <path
                        id="circlePath"
                        d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                        fill="none"
                      ></path>
                      <text className="font-medium text-[13px] uppercase fill-yellow-600">
                        <textPath
                          href="#circlePath"
                          startOffset="50%"
                          textAnchor="middle"
                        >
                          {
                            getProblemSolutionData?.acf
                              ?.problem_solution_framework?.texts
                          }
                        </textPath>
                      </text>
                    </svg>
                    <div className="icon_arrow flex justify-center items-center p-  bg-yellow-600 w-32 h-32 rounded-full -rotate-[145deg]">
                      <img
                        className=" absolute p-5"
                        src="/icon_arrow.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPart;
