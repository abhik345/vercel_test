"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/api";

const Awards = () => {
  const [awards, setAwards] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      const data = await fetchData("/awards");
      if (data) {
        setAwards(data);
      } else {
        console.log("failed to fetch Awards Data..");
      }
    };
    fetchAwards();
  }, []);

  return (
    <>
      <section>
        <div className="awares_part ">
          <h2 className="text-center mx-auto my-10 text-black 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl font-bold ">
            <span className="text-[#959595]">Awards & </span>Achievements
          </h2>
          <div className="awards_swiper">
            <PhotoProvider>
              <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={{
                  390: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
              >
                {awards && awards?.map((award, index) => (
                  <SwiperSlide key={index}>
                    <PhotoView src={award?.image_url}>
                      <div className="award_img cursor-pointer">
                        <img
                          className="rounded-xl"
                          src={award?.image_url}
                          id={index % 2 === 1 ? "award_top" : undefined}
                        />
                      </div>
                    </PhotoView>
                  </SwiperSlide>
                ))}
              </Swiper>
            </PhotoProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
