"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import innerImage from "../../../../public/innerImage.jpg";
import Image from "next/image";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const [blogData, setBlogData] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const blogId = searchParams.get("blog");

  useEffect(() => {
    if (blogId) {
      const fetchBlogData = async () => {
        const data = await fetchData(`/blogs/${blogId}`);
        if (data) {
          setBlogData(data);
        } else {
          console.log("Failed to fetch blog details");
        }
      };
      fetchBlogData();
    }
  }, [blogId]);

  if (!blogData) return <p>Loading...</p>;

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

      {/* {showNews && isDialogOpen && (
          <div className="overlay">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-[600px] bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-2">Subscribe To The PM Newsletter!</h2>
                <p className="text-gray-300 text-sm mb-8">Join the newsletter to learn what the first movers in your industry are doing to stay ahead in digital marketing and how you can do it too.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    className="w-full p-2 border rounded-md mb-4"
                    onChange={handleEmailChange}
                    required
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}
                  <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        )} */}

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

            {/* <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row mt-8 gap-4">
                <img
                  src={innerImage}
                  alt="image"
                  className="w-full h-48 sm:h-52 md:h-64 lg:h-48 rounded-xl object-cover"
                />
                <img
                  src={innerImage}
                  alt="image"
                  className="w-full h-48 sm:h-52 md:h-64 lg:h-48 rounded-xl object-cover"
                />
              </div>

              <div className="mt-10 border p-6 rounded-lg">
                <div className="border-b-2 mb-6">
                  <h2 className="text-lg font-bold">Tags</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {blogDetails?.blog_details?.tags?.map((data, i) => (
                    <div key={i} className="bg-gray-200 text-center p-4 rounded">
                      {data}
                    </div>
                  ))}
                </div>
              </div> */}
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-cover bg-center relative h-72 sm:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={innerImage}
                alt="Inner Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />{" "}
              <div className=" index_sub_part absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-10">
                <div className="text-white mt-4">
                  <h2 className="text-3xl font-bold mb-3">
                    Subscribe To The PM Newsletter!
                  </h2>
                  <p className="text-gray-300 text-sm mb-8">
                    Join the newsletter to learn what the first movers in your
                    industry are doing to stay ahead in digital marketing and
                    how you can do it too.
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
    </>
  );
};

export default BlogDetails;
