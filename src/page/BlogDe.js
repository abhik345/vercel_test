"use client"

import { useState } from "react";
import Swal from "sweetalert2";
import innerImage from "../../public/innerImage.jpg";
import Image from "next/image";

const BlogDe = ({ blogData }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("_wpcf7", "479");
    formData.append("_wpcf7_version", "5.9.8");
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f479-o1");
    formData.append("_wpcf7_container_post", "0");
    formData.append("subscribe", email);

    try {
      const response = await fetch(
        "https://api.pramodmaloo.com/wp-json/contact-form-7/v1/contact-forms/479/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "You have successfully subscribed to the PM Newsletter.",
          confirmButtonColor: "#F97316",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
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
    <div className="container mx-auto py-10">
      <div className="images_line relative flex justify-center">
        <img className="w-6 h-6" src="/Yellow_Circle.png" alt="Design" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 p-4 md:p-7 lg:p-10 xl:p-20">
        <div className="w-full lg:w-2/3">
          <div className="img_box_blog">
            <img
              src={blogData?.blog_details?.thumbnail}
              alt="image"
              className="w-full h-60 sm:h-72 md:h-80 lg:h-[500px] rounded-xl object-cover"
            />
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-2xl sm:text-3xl mb-6">
              {blogData?.blog_details?.title}
            </h3>
            <div className="py-4 text-sm sm:text-base">
              <div
                dangerouslySetInnerHTML={{
                  __html: blogData?.blog_details?.content,
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-cover bg-center relative h-72 sm:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={innerImage}
              alt="Inner Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            <div className="index_sub_part absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-10">
              <div className="text-white mt-4">
                <h2 className="text-3xl font-bold mb-3">
                  Subscribe To The PM Newsletter!
                </h2>
                <p className="text-gray-300 text-sm mb-8">
                  Join the newsletter to learn what the first movers in your industry are doing to stay ahead in digital marketing and how you can do it too.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
                  className="bg-white text-black placeholder-black w-2/3 p-2 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 text-white p-2 w-1/3 hover:bg-orange-600 transition duration-300"
                >
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDe;
