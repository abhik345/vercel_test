"use client";
import { fetchData } from "@/lib/api";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const AllBlogs = () => {
  const [allBlogData, setAllBlogData] = useState(null);
  useEffect(() => {
    const fetchAllBlogData = async () => {
      const data = await fetchData("/blogs");
      if (data) {
        setAllBlogData(data);
      } else {
        console.log("failed to fetch blog data");
      }
    };
    fetchAllBlogData();
  }, []);

  const TruncatedText = ({ text, maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
      <p
        dangerouslySetInnerHTML={{ __html: truncatedText }}
        className="text-base font-medium text-gray-400 6 py-3"
      />
    );
  };

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^-|-$)/g, "");
  };
  return (
    <>
      <section className="post_swiper_main cursor-pointer">
        <div className="main_banner relative">
          <div className="w-auto m-auto p-0">
            <img
              className="w-full object-cover h-16 sm:h-16 md:h-16 lg:h-16 xl:h-28"
              // src={innerBanner}
              alt="Banner"
            />
            {/* <div className="inner_text absolute bottom-12 left-5 md:bottom-20 md:left-10 lg:bottom-28 lg:left-20 z-10">
                <p className="text-white text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold">
                  lorem ipsum dolar
                </p>
              </div> */}
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="images_line relative flex justify-center">
            <img className="w-6 h-6" src="/Yellow_Circle.png" alt="Design" />
          </div>

          <div className="main_blog_part py-1">
            <div className="heading_part">
              <h2 className="text-center font-bold text-4xl py-10">My Blogs</h2>
            </div>
            {allBlogData &&
              allBlogData?.slice(0, 1)?.map((data, i) => {
                const slug = createSlug(data?.title);
                return (
                  <Link
                  href={{pathname:`/all-blogs/${slug}`,query:{blog:data?.id}}}
                    // state={{ id: data?.id, ip }}
                    key={i}
                  >
                    <div
                      className="blog_details container mx-auto flex items-center justify-center gap-10 2xl:flex xl:flex lg:flex md:flex sm:flex-wrap"
                      key={i}
                    >
                      <div className="main_blog_text w-[48%] 2xl:w-[48%] xl:w-[48%] lg:w-[46%] md:w-[46%] sm:w-[46%] ">
                        <div className="blog_text_part">
                          <div className="name_date flex items-center justify-start gap-3 px-0 py-3">
                            <p className="text-slate-700 text-sm ">
                              {data?.author}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-slate-700">
                              {/* <CalendarDays className="w-5 h-5" /> */}
                              {data?.date}  
                            </p>
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold line-clamp-4 text-slate-700 py-5">
                          {data?.title}
                        </h4>
                        <TruncatedText text={data?.content} maxLength={350} />

                        <button className=" mt-10 bg-yellow-600 text-white px-8 py-2 rounded-full transition duration-200 ease-in-out hover:bg-yellow-800 active:bg-yellow-400 focus:outline-none">
                          Read More
                        </button>
                      </div>
                      <div className="blog_photo_section w-[48%] 2xl:w-[48%] xl:w-[48%] lg:w-[46%] md:w-[46%] sm:w-[46%]">
                        <img
                          className="blog_img rounded-md overflow-hidden"
                          // src="/assets/banner2.png"
                          src={data?.thumbnail}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="all_blog_post">
            <div className="container mx-auto w-[100%]">
              <div className=" mx-auto flex justify-between items-center">
                <div className=" px-2 py-6 text-left">
                  {/* <h3 className="heading-with-line text-[20px] font-medium text-left">
          Blogs
        </h3> */}
                  <h2 className="main-heading text-[56px] font-bold mb-4">
                    <span className="text-[#959595]">More</span> Blogs
                  </h2>
                </div>
              </div>
              <div className="post_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allBlogData &&
                  allBlogData?.slice(1)?.map((data, i) => {
                    const slug = createSlug(data?.title);
                    return (
                      <Link
                        href={{pathname:`/all-blogs/${slug}`,query:{blog:data?.id}}}
                        key={i}
                      >
                        <div className="post_box mb-6 p-2">
                          <div className="post_card relative bg-white overflow-hidden">
                            <div className="img_part rounded-2xl overflow-auto">
                              <img
                                className="h-[70%] w-full object-cover"
                                src={data?.thumbnail}
                              />
                            </div>
                            <div className="post_text">
                              <div className="name_date flex items-center justify-start gap-3 px-0 py-3">
                                <p className="text-slate-700 text-sm ">
                                  {data?.author}
                                </p>
                                <p className="flex items-center gap-2 text-sm text-slate-700">
                                  {/* <CalendarDays className="w-5 h-5" /> */}
                                  {data?.date}
                                </p>
                              </div>
                              <h4 className="font-semibold text-2xl">
                                {data?.title}
                              </h4>
                              <TruncatedText
                                text={data?.content}
                                maxLength={200}
                              />
                              <button className="bg-yellow-600 text-white px-8 py-2 rounded-full transition duration-200 ease-in-out hover:bg-yellow-800 active:bg-yellow-400 focus:outline-none">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
