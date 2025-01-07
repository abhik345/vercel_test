"use client";

import { fetchData } from "@/lib/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";


const InnerGeneraic = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const slug = lastSegment.replace(/_/g, "-");

  const [innerData, setInnerData] = useState(null);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const data = await fetchData(`/book/${slug}`);
        setInnerData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotal();
  }, [slug]);

  if (!innerData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  const getYouTubeID = (url) => {
    if (typeof url !== "string") return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoID = getYouTubeID(innerData?.video_url);
  const videoUrl = videoID
    ? `https://www.youtube.com/watch?v=${videoID}`
    : null;

  return (
    <>
      <div className="main_banner relative">
        <div className="w-auto m-auto p-0">
          <img
            className="w-full object-cover 2xl:h-96 xl:h-96 lg:h-96 md:h-80 sm:h-48"
            src={innerData?.inner_banner_image || "/inner_banner.jpg"}
            alt="Banner"
          />
          <div className="inner_text absolute bottom-28 left-20 z-10 md:bottom-20 sm:bottom-5">
            <p className="text-white text-4xl font-semibold lg:text-4xl md:text-3xl sm:text-xl">
              {innerData?.maintitle || "WEBSITE AND BEYOND"}
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

      <div className="container w-4/5 m-auto rounded-2xl overflow-hidden video_section">
        <div className="video-wrapper">
          {videoUrl && (
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="450px"
              controls={true}
            />
          )}
        </div>
      </div>

      <div className="text_section container w-auto m-auto p-20 md:p-7 lg:p-7">
        <div className="border_text border-4 border-yellow-500 p-10 m-auto justify-center relative">
          <h4 className="absolute -top-6 bg-white py-1 px-5 text-3xl font-semibold">
            {"Pramod's Take"}
          </h4>
          <p
            className="leading-7 font-normal text-sm py-4 tracking-wide"
            dangerouslySetInnerHTML={{ __html: innerData?.content }}
          />
        </div>
      </div>
    </>
  );
};

export default InnerGeneraic;
