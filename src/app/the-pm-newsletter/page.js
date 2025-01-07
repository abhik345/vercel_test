"use client";
import { fetchData } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PmNewsLetter = () => {
  const [newsletterData, setnewsletterData] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const data = await fetchData(
          "/pages/614?_fields=acf.newsletter_section&acf_format=standard"
        );
        if (data) {
          setnewsletterData(data?.acf?.newsletter_section);
        } else {
          console.log("faild to fetch newsletter Data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsletter();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(" ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append('_wpcf7', '479');
    formData.append('_wpcf7_version', '5.9.8');
    formData.append('_wpcf7_locale', 'en_US');
    formData.append('_wpcf7_unit_tag', 'wpcf7-f479-o1');
    formData.append('_wpcf7_container_post', '0');
    formData.append('subscribe', email);
  
    try {
      const response = await fetch('https://api.pramodmaloo.com/wp-json/contact-form-7/v1/contact-forms/479/feedback', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "You have successfully subscribed to the PM Newsletter.",
          confirmButtonColor: '#F97316',
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const OpenPdf = (pdf) => {
    window.open(`${pdf}`);
  };

  return (
    <>
      <section className="">
        <div className="top_heading_part bg-orange-500 h-[130px] text-center">
          <div className="container mx-auto">
            <div className="heading_part_news_part w-full ">
              <Link href={"/"}>
                <img
                  className="absolute 2xl:h-20 xl:h-20 lg:h-20 md:h-16 sm:h-16"
                  src="/logo_news_page.png"
                />
              </Link>

              <h2 className="heading_news 2xl:text-[60px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[35px] text-white font-semibold py-0 my-0 -mb-7 2xl:pt-0 xl:pt-0 lg:pt-3 md:pt-6 sm:pt-4  2xl:pb-0 xl:pb-0 lg:pb-2 md:pb-6 sm:pb-6">
                {" "}
                {newsletterData?.title_section?.title_one}
              </h2>
              <h6 className="heading_newsletter text-black font-medium text-lg relative 2xl:-right-48 xl:-right-56 lg:-right-52 pt-3 ">
                {newsletterData?.title_section?.title_two}
              </h6>
              <div className="date_element top-48 right-40 h-10 w-auto text-center">
                <p
                  className="bg-gray-800 text-white rounded-lg  px-6 py-2 absolute 2xl:right-[455px] xl:right-[150px] lg:right-[150px] md:right-[150px] sm:right-[150px]"
                  style={{ backgroundImage: "url" }}
                >
                  {" "}
                  30 Nov, 2024
                </p>
                <img
                  className="absolute w-12 h-12 object-cover 2xl:right-[613px] 2xl:-rotate-[22deg] xl:-rotate-[22deg] xl:right-[313px] lg:-rotate-[22deg] lg:right-[313px] md:-rotate-[22deg] md:right-[313px] sm:-rotate-[22deg] sm:right-[313px]"
                  src="/Arrow_animation.gif"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text_para_part text-center 2xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[80%] break-normal mx-auto py-7 lg:mt-0 md:mt-6 ">
          <h5 className="2xl:text-3xl lg:text-xl md:text-[24px] sm:text-lg text-black font-semibold mb-4 ">
            {newsletterData?.heading}
          </h5>
          <p className="text-center font-normal text-base">
            {newsletterData?.texts?.substring(0, 74)}
          </p>
          <p className="text-center font-normal text-base">
            {newsletterData?.texts?.substring(74)}
          </p>
          <div className="form_part 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[60%] sm:w-[60%] mx-auto">
            <form onSubmit={handleSubmit} className="mt-4 lg:mt-6 flex">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Your Email Address"
                required
                className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm lg:text-base"
              />
              <button className="p-3 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 text-sm lg:text-base">
                Subscribe
              </button>
            </form>
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
        </div>
        <div className="img_section 2xl:container xl:container lg:w-full md:px-7 mx-auto 2xl:flex xl:flex lg:flex sm:block sm:w-full  md:flex items-center justify-center">
          <div className="img_site flex justify-center 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full">
            {!imageLoaded && (
              <div className="flex items-center justify-center w-[100%] h-[300px] bg-gray-300 rounded-r-lg">
                <span>Loading...</span>
              </div>
            )}
            <img
              className={`w-auto h-80 object-cover rounded-lg transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={newsletterData?.image}
              alt="Newsletter"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="news_letter 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full bg-slate-100 px-5 py-6">
            <div className="news_letter mx-auto text-center">
              <h6
                className="text-[#f97316] font-medium text-xl mb-5 border-b-2 border-gray-400 w-[40%] mx-auto"
                style={{}}
              >
                Newsletter Archives
              </h6>
              <div className="news_date grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 2xl:gap-1 xl:gap-1 lg:gap-2 md:gap-3 sm:gap-3 mt-2 text-left ">
                {newsletterData?.archives?.map((item, index) => (
                  <p
                    key={index}
                    onClick={() => OpenPdf(item?.pdf)}
                    className=" 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm font-semibold text-black animate-pulse hover:text-orange-500 flex justify-center relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-30"
                  >
                    <button>{item?.date}</button>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PmNewsLetter;
