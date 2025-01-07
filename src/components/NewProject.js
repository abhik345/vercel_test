"use client";

import { useEffect, useState } from "react";
import { Navigation, Autoplay, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fetchData } from "@/lib/api"; // Ensure this API utility function is correctly defined
import { useRouter } from "next/navigation";

const NewProject = () => {
  const router = useRouter();
  const [projects, setNewProject] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch project data from API when component is mounted
  useEffect(() => {
    const fetchNewProject = async () => {
      try {
        const data = await fetchData("/book");
        if (data) {
          setNewProject(data);
        } else {
          console.log("Failed to fetch API data");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchNewProject();
  }, []);

  // Detect screen size to determine mobile view
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 576);
      const handleResize = () => setIsMobile(window.innerWidth < 576);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Flatten projects data and add subtitles to each item
  const allItems = projects?.reduce((acc, section) => {
    const itemsWithSubtitle = section.items.map((item) => ({
      ...item,
      subtitle: section.subtitle,
    }));
    return [...acc, ...itemsWithSubtitle];
  }, []);

  // Split the items into two halves for swiper slides
  const midpoint = Math.ceil(allItems?.length / 2);
  const firstHalf = allItems?.slice(0, midpoint);
  const secondHalf = allItems?.slice(midpoint);

  // Redirect to /all-videos
  const handleClickVideos = () => {
    router.push("/all-videos");
  };

  // Create a slug for the URLs
  const createSlug = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^-|-$)/g, "");
  };

  const handleClick = (sectionSubtitle, itemSubtitle, sectionId, maintitle) => {
    const sectionSlug = createSlug(sectionSubtitle);
    const itemSlug = createSlug(itemSubtitle);
    // console.log(maintitle)
    const url = `/${sectionSlug}/${itemSlug}`;
    // console.log(url)
    router.push(url);
  };

  return (
    <div>
      <div className="main_project">
        <div className="container mx-auto px-10 py-14">
          <div className="heading_part_video flex justify-between items-center mb-2">
            <h2
              // ref={headRef2}
              className="main-heading text-[56px] font-bold mb-4"
            >
              <span className="text-[#959595]">Latest</span>{" "}
              <span className="text-black">Videos</span>
            </h2>

            <div className="button_site" onClick={handleClickVideos}>
              <button
                className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#f97316] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group "
                type="submit"
              >
                All Videos
                {
                  isMobile === false ? (
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  />
                </svg>
                  ) : null
                }
              </button>
            </div>
          </div>
          <div className="heading_part flex justify-between items-center"></div>

          {isMobile === false ? (
            <Swiper
              navigation={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="first-grid grid py-10">
                  {firstHalf &&
                    firstHalf.map((item) => (
                      <div
                        className="box overflow-hidden relative rounded-xl"
                        key={item.id}
                        onClick={() =>
                          handleClick(
                            item.subtitle,
                            item.title,
                            item.id,
                            item.maintitle
                          )
                        }
                      >
                        <img
                          src={item?.thumbnail}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="link_icon">
                          <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-move-up-right"
                            >
                              <path d="M13 5H19V11" />
                              <path d="M19 5L5 19" />
                            </svg>
                          </div>
                        </div>
                        <div className="play_icon absolute bottom-4 left-4">
                          <p className="text-white font-semibold text-lg line-clamp-2">
                            {item.maintitle}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sec_grid grid py-10">
                  {secondHalf &&
                    secondHalf.map((item) => (
                      <div
                        className="box overflow-hidden relative rounded-xl"
                        key={item.id}
                        onClick={() =>
                          handleClick(
                            item.subtitle,
                            item.title,
                            item.id,
                            item.maintitle
                          )
                        }
                      >
                        <img src={item?.thumbnail} />
                        <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="link_icon">
                          <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-move-up-right"
                            >
                              <path d="M13 5H19V11" />
                              <path d="M19 5L5 19" />
                            </svg>
                          </div>
                        </div>
                        <div className="play_icon absolute bottom-4 left-4">
                          <p className="text-white font-semibold text-lg line-clamp-2">
                            {item.maintitle}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <>
              <div>
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {firstHalf &&
                    firstHalf.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div
                          className="box overflow-hidden relative rounded-xl"
                          onClick={() =>
                            handleClick(
                              item.subtitle,
                              item.title,
                              item.id,
                              item.maintitle
                            )
                          }
                        >
                          <img
                            src={item.thumbnail}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                          <div className="link_icon">
                            <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-move-up-right"
                              >
                                <path d="M13 5H19V11" />
                                <path d="M19 5L5 19" />
                              </svg>
                            </div>
                          </div>
                          <div className="play_icon absolute bottom-4 left-4">
                            <p className="text-white font-semibold text-lg line-clamp-2">
                              {item.maintitle}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mt-4">
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                  >
                    {secondHalf &&
                      secondHalf.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div
                            className="box overflow-hidden relative rounded-xl"
                            onClick={() =>
                              handleClick(
                                item.subtitle,
                                item.title,
                                item.id,
                                item.maintitle
                              )
                            }
                          >
                            <img
                              src={item.thumbnail}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="link_icon">
                              <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-move-up-right"
                                >
                                  <path d="M13 5H19V11" />
                                  <path d="M19 5L5 19" />
                                </svg>
                              </div>
                            </div>
                            <div className="play_icon absolute bottom-4 left-4">
                              <p className="text-white font-semibold text-lg line-clamp-2">
                                {item.maintitle}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProject;
