"use client";

import { fetchData } from "@/lib/api";
import { useEffect, useState } from "react";

const AllVideos = () => {
  const [videoData, setvideoData] = useState([]);
  useEffect(() => {
    const fetchvideoData = async () => {
      try {
        const data = await fetchData("/videos");
        if (data) {
          setvideoData(data);
        } else {
          console.log("failed to fetch videos");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideoData();
  }, []);
  return (
    <>
      
      <div className="main_video_inner">
        <div className="main_banner relative">
          <div className="w-auto m-auto p-0">
            <img
              className="w-full object-cover 2xl:h-60 xl:h-60 lg:h-60 md:h-60 sm:h-40 "
              src="/inner_banner.jpg"
              alt="Banner"
            />
            <div className="inner_text absolute bottom-10 left-20 z-10 md:bottom-10 sm:bottom-5 ">
              <p className="text-white text-2xl font-medium lg:text-2xl md:text-2xl sm:text-xl ">
                Home / All Videos
              </p>
            </div>
          </div>
        </div>
        <div className="container m-auto w-auto design_section py-10">
          <div className="images_line relative">
            <img
              className="w-6 h-6 overflow-hidden flex m-auto"
              src="/Yellow_Circle.png"
              alt="Design"
            />
          </div>
        </div>
        <div className=" all_video_box container mb-4 p-3 flex flex-wrap gap-10 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-8 justify-center items-center overflow-hidden mx-auto `">
          {videoData &&
            videoData?.map((video, index) => {
              const videoId = video?.video_url?.split("/").pop();
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;

              return (
                <div
                  className="video_box w-[400px] h-[250px] 2xl:w-[450px] 2xl:h-[380px] xl:w-[400px] xl:h-[350px] lg:w-[300px] lg:h-[350px] md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-auto overflow-hidden"
                  key={index}
                >
                  <div className="video_link rounded-xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="215"
                      className="object-cover flex justify-center"
                      src={embedUrl}
                      // frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video_text px-2">
                    <h5 className="text-lg font-medium text-gray-800 my-2">
                      {video?.title}
                    </h5>

                    <p className="text-sm font-normal line-clamp-3 text-gray-500 hidden sm:block">
                      {video?.contents}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AllVideos;
