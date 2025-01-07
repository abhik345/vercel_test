"use client";
import { fetchData } from "@/lib/api";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"
const About = () => {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 576);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 576);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const fetchAboutData = async () => {
      const data = await fetchData(
        "/pages/10?_fields=acf.about_section_options&acf_format=standard"
      );
      if (data) {
        setAboutData(data.acf?.about_section_options);
      } else {
        console.log("failed to fetch data form api");
      }
    };
    fetchAboutData();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
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

  return (
    <>
      <div className="container mx-auto px-4 py-2 md:px-6 lg:px-8">
        <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 p-2 items-center">
          {isMobile === false ? (
            <div className="main_imges_about w-full relative p-4">
              <img
                src={aboutData?.image_section?.image}
                alt="Award"
                className="w-full h-auto rounded-lg"
              />
              <div className="a-quote text_content absolute bottom-4 md:bottom-10 left-4 md:left-12 lg:left-28 bg-white rounded-md shadow-lg p-4 w-4/5 md:w-3/5 lg:w-4/5">
                <blockquote className="text_respon mt-4 text-lg italic sm:text-sm">
                  {aboutData?.image_section?.about_text}
                </blockquote>
                <p className="text-right text-[#FF8B00]">
                  {aboutData?.image_section?.name}
                </p>
              </div>
            </div>
          ) : null}

          <div className="grid_section w-full p-4 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <h3 className="heading-with-line text-[20px] font-medium md:text-[24px] pb-3">
              {"Pramod’s Profile"}
            </h3>
            <h5 className="pb-2 text-[16px] font-semibold text-[#424242]">
              Believes in the power of TEAM, he is a dreamer and a go getter.
            </h5>
            <p className="pb-2 text-[15px] font-normal">
              Pramod is the Founder of Kreative Machinez, one of the most
              prominent digital marketing agency of eastern India.
            </p>
            <p className="pb-2 text-[15px] font-normal">
              He is the Founder of Kreative Machinez, one of the most prominent
              digital marketing agency of eastern India.
            </p>
            <p className="pb-2 text-[15px] font-normal">
              He is also the person behind SahiHaiBazaar.com, a fintech start up
              and Republic of Influencer, a market place for brands and
              influencers. Prior to that he has successfully launched
              KolkataPages.com, an online business directory & local search
              engine.
            </p>

            {isMobile === true ? (
              <>
                {showMore ? (
                  <>
                    <p className="pb-2 text-[15px] font-normal">
                      With 14+ years of industry experience, he endeavours to
                      excel and create excellence per se. His career from a
                      two-member start up to an established unit with 800 plus
                      clientele in 18 plus countries & a 100+ member team has
                      been an exciting story just like the evolution of the
                      internet.
                    </p>
                    <p className="pb-2 text-[15px] font-normal">
                      Pramod is also actively engaged as a guest lecturer
                      delivering workshops to students in B schools and
                      colleges.
                    </p>
                  </>
                ) : null}

                <div className="flex items-center justify-end">
                  {!showMore && (
                    <button
                      className="text-white p-2 rounded-lg bg-orange-500 mb-2 font-semibold"
                      onClick={() => setShowMore(true)}
                    >
                      Read More
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="pb-2 text-[15px] font-normal">
                  With 14+ years of industry experience, he endeavours to excel
                  and create excellence per se. His career from a two-member
                  start up to an established unit with 800 plus clientele in 18
                  plus countries & a 100+ member team has been an exciting story
                  just like the evolution of the internet.
                </p>
                <p className="pb-2 text-[15px] font-normal">
                  Pramod is also actively engaged as a guest lecturer delivering
                  workshops to students in B schools and colleges.
                </p>
              </>
            )}

            <div className="form_part_about mt-2 2xl:mt-16 xl:mt-12 lg:mt-10 md:mt-9 sm:mt-5">
              <h1 className="text-gray-900 2xl:font-semibold xl:font-semibold lg:font-semibold md:font-medium sm:font-normal 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg">
                Subscribe To{" "}
                <span className="text-orange-500 text-2xl font-bold">
                  The PM Newsletter!
                </span>
              </h1>
              <form
                onSubmit={handleSubmit}
                className="submit_form flex items-center rounded-l-lg mt-4"
              >
                <div className="relative flex-grow border-2 border-yellow-600">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="input_fields_form_email block w-full py-2 text-[14px] pl-12 pr-10 leading-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div className="submit_form_button ml-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-2 text-white bg-orange-500 hover:bg-orange-600"
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                  </button>
                </div>
              </form>
              {emailError && (
                <p className="text-red-500 mt-2 text-sm">{emailError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
