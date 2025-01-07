"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from "@/lib/api";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Posts = () => {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const [postsection, setPostSection] = useState(null);
  const [linkedinPost, setLinkedinPost] = useState([]);
  const [instaPost, setInstaPost] = useState([]);
  const [linkedImage,setLinkedImage]=useState(null);
  const [instaImage,setInstaImage]=useState(null);

  useEffect(() => {
    const fetchPostSection = async () => {
      try {
        const data = await fetchData("/pages/10?_fields=acf.posts_options");
        if (data) {
          setPostSection(data?.acf);
        } else {
          console.log("Failed to fetch Post section data");
        }
      } catch (error) {
        console.log("Error fetching post section:", error);
      }
    };
    fetchPostSection();
  }, []);

  useEffect(() => {
    const fetchLinkedin = async () => {
      try {
        const data = await fetchData("/linkdin-posts");
        if (data) {
          setLinkedinPost(data.posts);
          setLinkedImage(data.image);
        } else {
          console.log("Failed to fetch LinkedIn posts");
        }
      } catch (error) {
        console.log("Error fetching LinkedIn posts:", error);
      }
    };
    fetchLinkedin();
  }, []);

  

  useEffect(() => {
    const fetchInsta = async () => {
      try {
        const data = await fetchData("/insta-posts");
        if (data) {
          setInstaPost(data.posts);
          setInstaImage(data.image)
        } else {
          console.log("failed to fetch insta posts");
        }
      } catch (error) {
        console.log("Error fetching Insta posts:", error);
      }
    };
    fetchInsta();
  }, []);

  const linkedinSettings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const instagramSettings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <section className="post_swiper_main">
        <div className="container mx-auto px-2 py-6 text-left">
          <h3
            ref={headRef1}
            className="heading-with-line text-[20px] font-medium text-left"
          >
            {postsection?.posts_options?.heading}
          </h3>
          <h2
            ref={headRef2}
            className="main-heading text-[56px] font-bold mb-4"
          >
            <span className="text-[#959595]">
              {postsection?.posts_options?.title_section?.title}
            </span>
            {postsection?.posts_options?.title_section?.sub_title}
          </h2>
        </div>

        <div className="swiper_section flex gap-4 items-center">
          <div className="left_text_Linkedin flex justify-end w-[10%]">
            <img
              src={linkedImage}
              alt="LinkedIn"
              width={50}
              height={50}
            />
          </div>
          <div className="swiper_part m-auto w-[85%]">
            <Slider {...linkedinSettings}>
              {linkedinPost &&
                linkedinPost.map((postData, index) => (
                  <div key={index}>
                    <LinkedInHoverCard
                      image={postData.thumbnail}
                      text={postData.content}
                      icon={postData.social_icon}
                      link={postData.url}
                      // className="overflow-hidden"
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div className="instagram_swiper mt-16">
          <div className="swiper_section flex flex-row-reverse gap-4 items-center">
            <div className="left_text_Linkedin flex justify-start w-[10%]">
              <img
                src={instaImage}
                alt="Instagram"
                width={50}
                height={50}
              />
            </div>
            <div className="swiper_part m-auto w-[85%]">
              <Slider {...instagramSettings}>
                {instaPost &&
                  instaPost.map((postData, index) => (
                    <div key={index}>
                      <InstagramHoverCard
                        image={postData.thumbnail}
                        text={postData.content}
                        icon={postData.social_icon}
                        link={postData.url}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const LinkedInHoverCard = ({ image, text, icon, link }) => {
  return (
    <Link
      className="overflow-hidden"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="main_box">
        <div className="post_img_box relative ">
          <img
            className="post_img w-screen object-cover h-[400px]"
            src={image}
          />
          <div className="hover_text bg-gray-950 bg-opacity-90 w-full h-full absolute contents-[*] bottom-0 left-0 right-0 items-center  cursor-pointer py-10 px-6 ">
            <div className="icon flex m-auto items-center w-12 h-12 overflow-hidden  ">
              <img src="/linkedin.png" />
            </div>
            <p
              className="text-white font-normal text-base text-center my-8 px-5 line-clamp-[8] tracking-wide"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

const InstagramHoverCard = ({ image, text, icon, link }) => {
  return (
    <Link
      className="overflow-hidden"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="main_box">
        <div className="post_img_box relative ">
          <img
            className="post_img w-screen object-cover h-[400px]"
            src={image}
          />
          <div className="hover_text bg-gray-950 bg-opacity-90 w-full h-full absolute contents-[*] bottom-0 left-0 right-0 items-center  cursor-pointer py-10 px-6 ">
            <div className="icon flex m-auto items-center w-12 h-12 overflow-hidden  ">
              <img src="/instagram.png" />
            </div>
            <p
              className="text-white font-normal text-base text-center my-8 px-5 line-clamp-[8] tracking-wide"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
