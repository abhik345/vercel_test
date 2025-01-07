"use client"

import { fetchData } from "@/lib/api"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const Blog = () => {
    const [allBlog,setAllblog] = useState(null)
    const router = useRouter()
    useEffect(()=>{
        const fetchallBlog = async () => {
            const data = await fetchData('/blogs')
            if (data) {
                setAllblog(data)
            } else {
                console.log("failed to fetch data from api")
            }
        };
        fetchallBlog()
    },[])

    const createSlug = (text) => {
      return text?.toLowerCase()?.replace(/[^a-z0-9]+/g, "_")?.replace(/(^-|-$)/g, "");
    };

    const handleClick =()=>{
        router.push("/all-blogs")
    }

    // const handleDetailsClick =(card)=>{
    //   const slug = createSlug(card?.title);
    //   router.push(`/all-blogs/${slug}`)
    // }
    
  return (
    <>
      <section className="post_swiper_main cursor-pointer">
        <div className="container mx-auto flex justify-between items-center">
          <div className="px-2 py-6 text-left">
            <h3 className="heading-with-line text-[20px] font-medium text-left">
              Blogs
            </h3>
            <h2 className="main-heading text-[56px] font-bold mb-4">
              <span className="text-[#959595]">Lates</span>t Posts
            </h2>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="rounded-full text-white bg-[#404040] p-4 font-semibold"
            >
              All Blogs
            </button>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            height={800}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                noSwiping: true,
                noSwipingClass: "swiper-no-swiping",
                margin: "mt-4 mb-4 px-2",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
                margin: "mt-6 mb-6 px-4",
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                margin: "mt-8 mb-8 px-6",
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
                margin: "mt-8 mb-8 px-6",
              },
            }}
            className="myswiper container mx-auto w-[80%]"
          >
            {allBlog &&
              allBlog?.map((card) => {
                const slug = createSlug(card?.title);
                return (
                  <SwiperSlide key={card?.id} className="px-2 py-0">
                    
                      <Link href={{pathname:`/all-blogs/${slug}`,query:{blog:card?.id}}}>
                      <div className="post_box" key={card}>
                        <div className="post_card relative bg-white overflow-hidden">
                          <div className="img_part rounded-2xl overflow-auto">
                            <img
                              className="h-[70%] w-full object-cover"
                              src={card?.thumbnail}
                              alt={card?.title}
                            />
                          </div>
                          <div className="post_text">
                            <div className="name_date flex items-center justify-start gap-3 px-0 py-3">
                              <p className="text-slate-700 text-sm ">
                                {card?.author}
                              </p>
                              <p className="flex items-center gap-2 text-sm text-slate-700">
                               
                                {card?.date}
                              </p>
                            </div>
                            <h4 className="font-semibold text-2xl">
                              {card?.title}
                            </h4>
                            <p className="font-normal text-sm line-clamp-4 my-4 text-slate-700">
                              {card?.excerpt}
                            </p>
                            <button className="bg-yellow-600 text-white px-8 py-2 rounded-full transition duration-200 ease-in-out hover:bg-yellow-800 active:bg-yellow-400 focus:outline-none">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      </Link>
                    
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Blog