"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await fetchData(
        "/pages/10?_fields=acf.banner_section_options&acf_format=standard"
      );
      if (data) {
        setBannerData(data.acf.banner_section_options);
      } else {
        console.log("Failed to fetch banner data");
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 576);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 576);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".cite-with-line", { autoAlpha: 0 });
    tl.fromTo(
      ".cite-with-line",
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 1.75, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="relative w-full h-[700px] object-cover flex items-center justify-center">
      <div className="banner_video absolute inset-0 w-full h-full">
        {isMobile ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.banner_video}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.inner_banner_video}
          />
        )}
      </div>
      <div className="bg-gradient-to-b"></div>
      <div className="sm:px-5 md:w-[62%] sm:w-[50%]"></div>
    </div>
  );
};

export default Banner;
